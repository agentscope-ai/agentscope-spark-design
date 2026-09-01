import { message } from 'antd';
import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type MutableRefObject,
} from 'react';
import { useContextSelector } from 'use-context-selector';
import { ChatAnywhereMessagesContext } from '../../Context/ChatAnywhereMessagesContext';
import { useChatAnywhereOptions } from '../../Context/ChatAnywhereOptionsContext';
import type {
  IAgentScopeRuntimeWebUIMessage,
  IAgentScopeRuntimeWebUIQueueRequestContext,
} from '../../types';
import type { InputProps } from '../Input';
import {
  assignInputQueueOwner,
  beginInputQueueStateSubmission,
  canSubmitDirectly,
  createEmptyInputQueueState,
  createInputQueueTabId,
  enqueueInputQueueState,
  getInputQueueStorageKey,
  getInputQueueTabId,
  hasInputQueueWork,
  INPUT_QUEUE_OWNER_CLAIM_INTERVAL,
  INPUT_QUEUE_OWNER_HEARTBEAT_INTERVAL,
  INPUT_QUEUE_RUNNING_RETRY_INTERVAL,
  INPUT_QUEUE_RUNTIME_RECOVERY_DELAY,
  isInputQueueEnabled,
  isInputQueueOwnedByTab,
  isInputQueueOwner,
  MAX_INPUT_QUEUE_SIZE,
  normalizeInputQueueState,
  recoverInterruptedQueuedInputs,
  removeQueuedInput,
  resetInputQueueTabId,
  restoreQueuedInputAfterSubmitError,
  shouldClaimInputQueueOwner,
  type InputQueueState,
  type QueuedInputItem,
  type QueueEnqueueResult,
} from '../InputQueue';
import {
  areInputQueueSessionsEquivalent,
  getInputQueueChatSessionIdForQueue,
  getInputQueueCompletionSessionIds,
  getInputQueueRouteQueueSessionId,
  getInputQueueVisibleChatSessionId,
  getInputQueueVisibleSessionId,
  resolveInputQueueSessionId,
} from '../InputQueue/session';
import {
  persistInputQueueState,
  readInputQueueState,
  withInputQueueMutationLock,
  withInputQueueSendLock,
} from '../InputQueue/storage';
import { cancelInputQueueSubmission } from '../InputQueue/submission';
import {
  findGeneratingResponse,
  type ChatControllerCurrentQARef,
} from './runtimeState';
import useInputQueueActions from './useInputQueueActions';

export type QueueSubmitNow = (
  data: Parameters<InputProps['onSubmit']>[0],
  options?: {
    sessionId?: string;
    queueSessionId?: string;
    queueItemId?: string;
    onRequestAccepted?: () => void | Promise<void>;
    shouldRestoreOnError?: (error: unknown) => boolean | Promise<boolean>;
  },
) => Promise<void>;

export class InputQueueSubmitError extends Error {
  readonly shouldRestore: boolean;
  readonly originalError: unknown;

  constructor(error: unknown, shouldRestore: boolean) {
    super(error instanceof Error ? error.message : String(error));
    this.name = 'InputQueueSubmitError';
    this.shouldRestore = shouldRestore;
    this.originalError = error;
  }
}

export interface UseInputQueueControllerOptions {
  currentQARef: ChatControllerCurrentQARef;
  currentSessionId?: string;
  currentSessionIdRef: MutableRefObject<string | undefined>;
  pendingRouteSessionIdRef?: MutableRefObject<string | undefined>;
  getLoading: () => boolean | string;
  setSessionLoading: (sessionId: string, value: boolean | string) => void;
  getSessionLoading: (sessionId: string) => boolean | string;
  getCurrentSessionId: () => string | undefined;
  submitNowRef: MutableRefObject<QueueSubmitNow | null>;
  handleCancelRef: MutableRefObject<(() => void) | null>;
  handleReconnectRef: MutableRefObject<
    ((sessionId: string) => Promise<void>) | null
  >;
}

function isQueueSessionSwitchedError(error: unknown) {
  return (
    error instanceof Error && error.message === 'input queue session switched'
  );
}

function isChatRequestAbortedError(error: unknown) {
  return error instanceof Error && error.message === 'chat request aborted';
}

type QueueSessionRunningCheck = (options: {
  chatSessionId?: string;
  queueSessionId?: string;
  requestContext?: IAgentScopeRuntimeWebUIQueueRequestContext;
}) => Promise<boolean>;

export default function useInputQueueController(
  options: UseInputQueueControllerOptions,
) {
  const {
    currentQARef,
    currentSessionId,
    currentSessionIdRef,
    pendingRouteSessionIdRef,
    getLoading,
    setSessionLoading,
    getSessionLoading,
    getCurrentSessionId,
    submitNowRef,
    handleCancelRef,
    handleReconnectRef,
  } = options;
  const setSessionMessages = useContextSelector(
    ChatAnywhereMessagesContext,
    (v) => v.setSessionMessages,
  );
  const getSessionMessages = useContextSelector(
    ChatAnywhereMessagesContext,
    (v) => v.getSessionMessages,
  );
  const apiOptions = useChatAnywhereOptions((v) => v.api);
  const sessionApiOptions = useChatAnywhereOptions((v) => v.session.api);
  const queueOptions = useChatAnywhereOptions((v) => v.sender?.queue);
  const queueConfig = useMemo(
    () =>
      queueOptions && typeof queueOptions === 'object' ? queueOptions : {},
    [queueOptions],
  );
  const queueEnabled = isInputQueueEnabled(queueOptions);
  const queueMaxSize = queueConfig.maxSize ?? MAX_INPUT_QUEUE_SIZE;
  const getQueueKey = queueConfig.getQueueKey ?? queueConfig.getSessionId;
  const queueScope = queueConfig.scope || apiOptions.baseURL || 'default';
  const getQueueRequestContext = queueConfig.getRequestContext;
  const isQueueSessionRunning = queueConfig.isSessionRunning;
  const shouldRestoreOnError = queueConfig.shouldRestoreOnError;
  const onQueueFull = queueConfig.onFull;
  const onQueueSessionNotReady = queueConfig.onSessionNotReady;
  const apiOptionsRef = useRef(apiOptions);
  const sessionApiOptionsRef = useRef(sessionApiOptions);

  useEffect(() => {
    apiOptionsRef.current = apiOptions;
  }, [apiOptions]);

  useEffect(() => {
    sessionApiOptionsRef.current = sessionApiOptions;
  }, [sessionApiOptions]);

  const tabIdRef = useRef(
    queueEnabled ? getInputQueueTabId() : createInputQueueTabId(),
  );
  const queueEnabledRef = useRef(queueEnabled);
  const runtimeIdRef = useRef(createInputQueueTabId());
  const runtimeStartedAtRef = useRef(Date.now());
  const [inputQueueState, setInputQueueState] = useState<InputQueueState>(() =>
    createEmptyInputQueueState(),
  );
  const [inputQueueSessionId, setInputQueueSessionId] = useState<
    string | undefined
  >(undefined);
  const inputQueueStateRef = useRef<InputQueueState>(inputQueueState);
  const drainTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const scheduledDrainSessionIdRef = useRef<string | undefined>(undefined);
  const drainingRef = useRef(false);
  const drainQueueRef = useRef<((sessionId?: string) => Promise<void>) | null>(
    null,
  );
  const queueDrainBlockedSessionRef = useRef<string | undefined>(undefined);
  const activeQueueSessionIdsRef = useRef<Set<string>>(new Set());
  const pendingPeerReconnectSessionRef = useRef<string | undefined>(undefined);
  const activeSubmitQueueSessionRef = useRef<string | undefined>(undefined);
  const processedCommandIdRef = useRef<string | undefined>(undefined);
  const broadcastRef = useRef<BroadcastChannel | null>(null);
  const pageUnloadingRef = useRef(false);
  const releasePeerTakeoverBlockRef =
    useRef<(queueSessionId: string, queueState: InputQueueState) => void>();
  const backgroundRunnerSnapshotRef = useRef<{
    queueEnabled: boolean;
    currentQueueSessionId?: string;
    getActiveChatSessionId?: () => string | undefined;
    getChatSessionIdForQueue?: (
      queueSessionId: string | undefined,
      preferredSessionId?: string,
    ) => string | undefined;
    readQueueState?: (sessionId?: string) => InputQueueState;
    getMessages?: (sessionId: string) => IAgentScopeRuntimeWebUIMessage[];
    getRequestContext?: (
      sessionId?: string,
    ) => IAgentScopeRuntimeWebUIQueueRequestContext | undefined;
    isSessionRunning?: typeof isQueueSessionRunning;
    shouldRestoreOnError?: (options: {
      data: Parameters<InputProps['onSubmit']>[0];
      error: unknown;
      chatSessionId?: string;
      queueSessionId?: string;
    }) => Promise<boolean>;
  }>({
    queueEnabled,
  });

  useEffect(() => {
    if (!queueEnabled) return;
    const markPageUnloading = () => {
      pageUnloadingRef.current = true;
    };
    window.addEventListener('pagehide', markPageUnloading);
    window.addEventListener('beforeunload', markPageUnloading);
    return () => {
      window.removeEventListener('pagehide', markPageUnloading);
      window.removeEventListener('beforeunload', markPageUnloading);
    };
  }, [queueEnabled]);

  useEffect(() => {
    if (queueEnabled && !queueEnabledRef.current) {
      tabIdRef.current = getInputQueueTabId();
    }
    queueEnabledRef.current = queueEnabled;
  }, [queueEnabled]);

  useEffect(() => {
    inputQueueStateRef.current = inputQueueState;
  }, [inputQueueState]);

  const readQueueState = useCallback(readInputQueueState, []);

  const resolveQueueSessionId = useCallback(
    (sessionId?: string) => {
      return resolveInputQueueSessionId(sessionId, {
        queueEnabled,
        getQueueKey,
        scope: queueScope,
      });
    },
    [getQueueKey, queueEnabled, queueScope],
  );

  const currentQueueSessionId = getInputQueueRouteQueueSessionId(
    {
      currentSessionId,
      pendingRouteSessionId: pendingRouteSessionIdRef?.current,
    },
    {
      queueEnabled,
      getQueueKey,
      scope: queueScope,
    },
  );

  const getVisibleChatSessionId = useCallback(() => {
    return getInputQueueVisibleChatSessionId({
      currentSessionId: currentSessionIdRef.current,
      pendingRouteSessionId: pendingRouteSessionIdRef?.current,
      activeSessionId: currentQARef.current.activeSessionId,
    });
  }, [currentQARef, currentSessionIdRef, pendingRouteSessionIdRef]);

  const getVisibleQueueSessionId = useCallback(() => {
    return getInputQueueVisibleSessionId(
      {
        currentSessionId: currentSessionIdRef.current,
        pendingRouteSessionId: pendingRouteSessionIdRef?.current,
        activeSessionId: currentQARef.current.activeSessionId,
      },
      {
        queueEnabled,
        getQueueKey,
        scope: queueScope,
      },
    );
  }, [
    currentQARef,
    currentSessionIdRef,
    getQueueKey,
    pendingRouteSessionIdRef,
    queueEnabled,
    queueScope,
  ]);

  const markQueueSessionActive = useCallback(
    (sessionId: string | undefined) => {
      if (sessionId) activeQueueSessionIdsRef.current.add(sessionId);
    },
    [],
  );

  const markQueueSessionIdle = useCallback((sessionId: string | undefined) => {
    if (sessionId) activeQueueSessionIdsRef.current.delete(sessionId);
  }, []);

  const isQueueSessionActive = useCallback((sessionId: string | undefined) => {
    return !!sessionId && activeQueueSessionIdsRef.current.has(sessionId);
  }, []);

  const canExecuteQueue = useCallback((state = inputQueueStateRef.current) => {
    return isInputQueueOwnedByTab(state, tabIdRef.current);
  }, []);

  const commitQueueState = useCallback(
    (sessionId: string | undefined, state: InputQueueState) => {
      if (!sessionId) return state;
      const next = persistInputQueueState(sessionId, state);

      if (getVisibleQueueSessionId() === sessionId) {
        setInputQueueSessionId(sessionId);
        inputQueueStateRef.current = next;
        setInputQueueState(next);
      }

      broadcastRef.current?.postMessage({
        type: 'input-queue-change',
        sessionId,
        state: next,
      });

      return next;
    },
    [getVisibleQueueSessionId],
  );

  const withQueueMutationLock = useCallback(withInputQueueMutationLock, []);

  const updateQueueState = useCallback(
    (
      sessionId: string | undefined,
      updater: (state: InputQueueState) => InputQueueState,
    ) => {
      if (!sessionId) return createEmptyInputQueueState();

      return withQueueMutationLock(sessionId, () => {
        const current = readQueueState(sessionId);
        const next = updater(current);
        return commitQueueState(sessionId, next);
      });
    },
    [commitQueueState, readQueueState, withQueueMutationLock],
  );

  const withQueueSendLock = useCallback(withInputQueueSendLock, []);

  const syncMessagesToPeerTabs = useCallback(
    (
      sessionId: string | undefined,
      messages: IAgentScopeRuntimeWebUIMessage[],
    ) => {
      const queueSessionId = resolveQueueSessionId(sessionId);
      if (!queueSessionId) return;

      broadcastRef.current?.postMessage({
        type: 'input-queue-messages-change',
        sessionId: queueSessionId,
        messages,
        sourceTabId: tabIdRef.current,
      });
    },
    [resolveQueueSessionId],
  );

  const getActiveChatSessionId = useCallback(() => {
    return getInputQueueVisibleChatSessionId({
      currentSessionId: getCurrentSessionId(),
      pendingRouteSessionId: pendingRouteSessionIdRef?.current,
      activeSessionId: currentQARef.current.activeSessionId,
    });
  }, [currentQARef, getCurrentSessionId, pendingRouteSessionIdRef]);

  const getActiveQueueSessionId = useCallback(() => {
    return resolveQueueSessionId(getActiveChatSessionId());
  }, [getActiveChatSessionId, resolveQueueSessionId]);

  const isHostSessionRunning = useCallback<QueueSessionRunningCheck>(
    async ({ chatSessionId, queueSessionId, requestContext }) => {
      if (!isQueueSessionRunning) return false;

      try {
        return !!(await isQueueSessionRunning({
          sessionId: chatSessionId,
          queueSessionId,
          requestContext:
            requestContext ?? getQueueRequestContext?.(chatSessionId),
        }));
      } catch (error) {
        console.error('input queue running check failed:', error);
        // Unknown host state must not be treated as idle: doing so can submit
        // the next queued input while the previous request is still running.
        return true;
      }
    },
    [getQueueRequestContext, isQueueSessionRunning],
  );

  const shouldRestoreQueuedInput = useCallback(
    async (options: {
      data: Parameters<InputProps['onSubmit']>[0];
      error: unknown;
      chatSessionId?: string;
      queueSessionId?: string;
    }) => {
      if (!shouldRestoreOnError) return true;

      try {
        return (
          (await shouldRestoreOnError({
            data: options.data,
            error: options.error,
            sessionId: options.chatSessionId,
            queueSessionId: options.queueSessionId,
            requestContext: getQueueRequestContext?.(options.chatSessionId),
          })) !== false
        );
      } catch (error) {
        console.error('input queue restore check failed:', error);
        return true;
      }
    },
    [getQueueRequestContext, shouldRestoreOnError],
  );

  const getChatSessionIdForQueue = useCallback(
    (queueSessionId: string | undefined, preferredSessionId?: string) => {
      const activeSessionId = currentQARef.current.activeSessionId;
      const currentChatSessionId = getCurrentSessionId();
      const rawMatch = [
        preferredSessionId,
        activeSessionId,
        currentChatSessionId,
        pendingRouteSessionIdRef?.current,
      ].find((sessionId) => !!sessionId && sessionId === queueSessionId);
      if (rawMatch) return rawMatch;

      if (
        queueSessionId &&
        currentQARef.current.activeQueueSessionId === queueSessionId
      ) {
        return activeSessionId;
      }

      return getInputQueueChatSessionIdForQueue(
        {
          currentSessionId: currentChatSessionId,
          pendingRouteSessionId: pendingRouteSessionIdRef?.current,
          activeSessionId,
        },
        {
          queueEnabled,
          getQueueKey,
          scope: queueScope,
        },
        queueSessionId,
        preferredSessionId,
      );
    },
    [
      currentQARef,
      getCurrentSessionId,
      getQueueKey,
      pendingRouteSessionIdRef,
      queueEnabled,
      queueScope,
    ],
  );

  const scheduleDrainQueue = useCallback((sessionId?: string, delay = 0) => {
    scheduledDrainSessionIdRef.current = sessionId;
    if (drainTimerRef.current) {
      clearTimeout(drainTimerRef.current);
    }

    drainTimerRef.current = setTimeout(() => {
      const nextSessionId = scheduledDrainSessionIdRef.current;
      scheduledDrainSessionIdRef.current = undefined;
      drainTimerRef.current = null;
      void drainQueueRef.current?.(nextSessionId);
    }, delay);
  }, []);

  const releaseQueueOwnerIfIdle = useCallback(
    (sessionId: string | undefined) => {
      if (!sessionId) return;

      void updateQueueState(sessionId, (state) => {
        if (state.ownerTabId !== tabIdRef.current || hasInputQueueWork(state)) {
          return state;
        }

        return {
          ...state,
          ownerTabId: undefined,
          ownerUpdatedAt: undefined,
          updatedAt: Date.now(),
        };
      });
    },
    [updateQueueState],
  );

  const assignOwnerForSubmit = useCallback(
    async (sessionId: string | undefined) => {
      if (!sessionId) return;
      activeSubmitQueueSessionRef.current = sessionId;
      await updateQueueState(sessionId, (state) =>
        assignInputQueueOwner(state, tabIdRef.current),
      );
    },
    [updateQueueState],
  );

  const consumeQueuedInput = useCallback(
    async (sessionId: string, itemId: string) => {
      await updateQueueState(sessionId, (state) => ({
        ...state,
        items: removeQueuedInput(state.items, itemId),
        updatedAt: Date.now(),
      }));
    },
    [updateQueueState],
  );

  const beginOwnedQueueSubmission = useCallback(
    async (
      sessionId: string,
      options?: {
        itemId?: string;
        requestContext?: IAgentScopeRuntimeWebUIQueueRequestContext;
        ignorePaused?: boolean;
        clearCommand?: boolean;
      },
    ) => {
      let submittingItem: QueuedInputItem | undefined;
      await withQueueMutationLock(sessionId, () => {
        const state = readQueueState(sessionId);
        if (
          (!options?.ignorePaused && state.paused) ||
          !canExecuteQueue(state)
        ) {
          if (options?.clearCommand && state.command) {
            commitQueueState(sessionId, {
              ...state,
              command: undefined,
              updatedAt: Date.now(),
            });
          }
          return;
        }

        const result = beginInputQueueStateSubmission(state, tabIdRef.current, {
          itemId: options?.itemId,
          requestContext: options?.requestContext,
        });
        submittingItem = result.item;
        const nextState = options?.clearCommand
          ? {
              ...result.state,
              command: undefined,
            }
          : result.state;
        if (nextState !== state) {
          commitQueueState(sessionId, nextState);
        }
        if (result.error) {
          console.error('input queue item rejected:', result.error);
        }
      });
      return submittingItem;
    },
    [canExecuteQueue, commitQueueState, readQueueState, withQueueMutationLock],
  );

  const submitQueuedItem = useCallback(
    async (
      submitNow: QueueSubmitNow,
      sessionId: string,
      chatSessionId: string,
      item: QueuedInputItem,
    ) => {
      drainingRef.current = true;
      try {
        await submitNow(item.data, {
          sessionId: chatSessionId,
          queueSessionId: sessionId,
          queueItemId: item.id,
          onRequestAccepted: () => consumeQueuedInput(sessionId, item.id),
          shouldRestoreOnError: (error) =>
            shouldRestoreQueuedInput({
              data: item.data,
              error,
              chatSessionId,
              queueSessionId: sessionId,
            }),
        });
      } catch (error) {
        const interrupted =
          isQueueSessionSwitchedError(error) ||
          isChatRequestAbortedError(error);
        if (!interrupted) {
          setSessionLoading(chatSessionId, false);
        }
        const shouldRestore =
          error instanceof InputQueueSubmitError
            ? error.shouldRestore
            : await shouldRestoreQueuedInput({
                data: item.data,
                error,
                chatSessionId,
                queueSessionId: sessionId,
              });
        await updateQueueState(sessionId, (current) => ({
          ...current,
          items: restoreQueuedInputAfterSubmitError(
            current.items,
            item,
            error,
            { interrupted, shouldRestore },
          ),
          updatedAt: Date.now(),
        }));
      } finally {
        drainingRef.current = false;
      }
    },
    [
      consumeQueuedInput,
      setSessionLoading,
      shouldRestoreQueuedInput,
      updateQueueState,
    ],
  );

  const handleResponseFinished = useCallback(
    (activeSessionId: string | undefined) => {
      if (!queueEnabled) return;
      const completedQueueSessionIds = [
        currentQARef.current.activeQueueSessionId,
        resolveQueueSessionId(activeSessionId),
        resolveQueueSessionId(currentSessionIdRef.current),
        resolveQueueSessionId(pendingRouteSessionIdRef?.current),
        ...getInputQueueCompletionSessionIds(
          {
            currentSessionId: currentSessionIdRef.current,
            pendingRouteSessionId: pendingRouteSessionIdRef?.current,
            activeSessionId,
          },
          {
            queueEnabled,
            getQueueKey,
            scope: queueScope,
          },
        ),
      ].filter(
        (sessionId, index, list): sessionId is string =>
          !!sessionId && list.indexOf(sessionId) === index,
      );

      completedQueueSessionIds.forEach(markQueueSessionIdle);
      if (
        activeSubmitQueueSessionRef.current &&
        completedQueueSessionIds.includes(activeSubmitQueueSessionRef.current)
      ) {
        activeSubmitQueueSessionRef.current = undefined;
      }
      if (
        completedQueueSessionIds.some(
          (sessionId) => sessionId === queueDrainBlockedSessionRef.current,
        )
      ) {
        queueDrainBlockedSessionRef.current = undefined;
      }
      const nextDrainSessionId =
        completedQueueSessionIds.find((sessionId) =>
          hasInputQueueWork(readQueueState(sessionId)),
        ) || completedQueueSessionIds[0];
      completedQueueSessionIds.forEach(releaseQueueOwnerIfIdle);
      scheduleDrainQueue(nextDrainSessionId);
    },
    [
      currentQARef,
      currentSessionIdRef,
      getQueueKey,
      markQueueSessionIdle,
      pendingRouteSessionIdRef,
      queueEnabled,
      queueScope,
      readQueueState,
      releaseQueueOwnerIfIdle,
      resolveQueueSessionId,
      scheduleDrainQueue,
    ],
  );

  const enqueueInput = useCallback(
    async (
      data: Parameters<InputProps['onSubmit']>[0],
      requestSnapshot?: {
        chatSessionId?: string;
        queueSessionId?: string;
        requestContext?: IAgentScopeRuntimeWebUIQueueRequestContext;
      },
    ): Promise<QueueEnqueueResult> => {
      const sessionId = requestSnapshot
        ? requestSnapshot.queueSessionId
        : getActiveQueueSessionId();
      if (!sessionId) {
        if (onQueueSessionNotReady) {
          onQueueSessionNotReady();
        } else {
          message.warning(
            'Current session is still being generated. Please wait before queuing another input.',
          );
        }
        return { ok: false, reason: 'session-not-ready' };
      }

      let full = false;
      let queuedItem: QueueEnqueueResult['item'];
      let nextQueueState: InputQueueState | undefined;
      const activeChatSessionId = requestSnapshot
        ? requestSnapshot.chatSessionId
        : getActiveChatSessionId();
      const requestContext = requestSnapshot
        ? requestSnapshot.requestContext
        : getQueueRequestContext?.(activeChatSessionId);
      const queuedData = {
        ...data,
        session_id: data.session_id || activeChatSessionId,
        ...requestContext,
      };

      await updateQueueState(sessionId, (state) => {
        const result = enqueueInputQueueState(state, queuedData, {
          maxSize: queueMaxSize,
          ownerTabId: tabIdRef.current,
        });
        full = result.reason === 'full';
        queuedItem = result.item;
        nextQueueState = result.state;
        return result.state;
      });
      if (full) {
        if (onQueueFull) {
          onQueueFull(queueMaxSize);
        } else {
          message.warning(
            `Queue is full. You can keep up to ${queueMaxSize} items.`,
          );
        }
        return { ok: false, reason: 'full' };
      }

      if (
        queuedItem &&
        nextQueueState &&
        isInputQueueOwnedByTab(nextQueueState, tabIdRef.current) &&
        activeSubmitQueueSessionRef.current !== sessionId
      ) {
        releasePeerTakeoverBlockRef.current?.(sessionId, nextQueueState);
      }

      return { ok: true, item: queuedItem };
    },
    [
      getActiveChatSessionId,
      getActiveQueueSessionId,
      getQueueRequestContext,
      onQueueFull,
      onQueueSessionNotReady,
      queueMaxSize,
      updateQueueState,
    ],
  );

  const drainQueue = useCallback(
    async (targetQueueSessionId?: string) => {
      const sessionId = targetQueueSessionId || getActiveQueueSessionId();
      const chatSessionId = getChatSessionIdForQueue(sessionId);
      const submitNow = submitNowRef.current;
      const hasGeneratingResponse = !!findGeneratingResponse(
        getSessionMessages(chatSessionId),
      );
      if (
        !sessionId ||
        !chatSessionId ||
        !submitNow ||
        drainingRef.current ||
        getSessionLoading(chatSessionId) ||
        hasGeneratingResponse ||
        isQueueSessionActive(sessionId) ||
        queueDrainBlockedSessionRef.current === sessionId
      )
        return;

      const currentRequestContext = getQueueRequestContext?.(chatSessionId);
      const sessionRunning = await isHostSessionRunning({
        chatSessionId,
        queueSessionId: sessionId,
        requestContext: currentRequestContext,
      });
      if (sessionRunning) {
        scheduleDrainQueue(sessionId, INPUT_QUEUE_RUNNING_RETRY_INTERVAL);
        return;
      }

      const acquired = await withQueueSendLock(sessionId, async () => {
        const nextItem = await beginOwnedQueueSubmission(sessionId, {
          requestContext: currentRequestContext,
        });
        if (!nextItem) return true;
        await submitQueuedItem(submitNow, sessionId, chatSessionId, nextItem);
        return true;
      });
      if (acquired !== true) {
        scheduleDrainQueue(sessionId, INPUT_QUEUE_RUNNING_RETRY_INTERVAL);
      }
    },
    [
      beginOwnedQueueSubmission,
      getActiveQueueSessionId,
      getChatSessionIdForQueue,
      getQueueRequestContext,
      getSessionLoading,
      getSessionMessages,
      isHostSessionRunning,
      isQueueSessionActive,
      readQueueState,
      scheduleDrainQueue,
      submitQueuedItem,
      submitNowRef,
      withQueueSendLock,
    ],
  );

  useEffect(() => {
    drainQueueRef.current = drainQueue;
  }, [drainQueue]);

  const handleSubmit = useCallback<InputProps['onSubmit']>(
    async (data) => {
      const sessionId = getActiveQueueSessionId();
      const queueState = sessionId
        ? readQueueState(sessionId)
        : createEmptyInputQueueState();
      const submitNow = submitNowRef.current;
      if (!submitNow) return;
      const activeChatSessionId = getActiveChatSessionId();
      const currentRequestContext =
        getQueueRequestContext?.(activeChatSessionId);
      const requestSnapshot = {
        chatSessionId: activeChatSessionId,
        queueSessionId: sessionId,
        requestContext: currentRequestContext,
      };
      const submissionData = {
        ...data,
        session_id:
          data.session_id ||
          currentRequestContext?.session_id ||
          activeChatSessionId,
        ...currentRequestContext,
      };
      if (!queueEnabled) {
        return submitNow(submissionData, {
          sessionId: submissionData.session_id,
        });
      }
      const sessionRunning = await isHostSessionRunning({
        chatSessionId: activeChatSessionId,
        queueSessionId: sessionId,
        requestContext: currentRequestContext,
      });

      if (
        !canSubmitDirectly({
          loading: activeChatSessionId
            ? getSessionLoading(activeChatSessionId)
            : getLoading(),
          queueLength: queueState.items.length,
          draining: drainingRef.current,
          paused: queueState.paused,
          canExecute:
            !sessionId || isInputQueueOwner(queueState, tabIdRef.current),
          sessionRunning,
        })
      ) {
        return enqueueInput(data, requestSnapshot);
      }

      if (!sessionId) {
        return submitNow(submissionData, {
          sessionId: submissionData.session_id,
        });
      }

      const submitted = await withQueueSendLock(sessionId, async () => {
        let ownerClaimed = false;
        await updateQueueState(sessionId, (state) => {
          if (
            !canSubmitDirectly({
              loading: activeChatSessionId
                ? getSessionLoading(activeChatSessionId)
                : getLoading(),
              queueLength: state.items.length,
              draining: drainingRef.current,
              paused: state.paused,
              canExecute: isInputQueueOwner(state, tabIdRef.current),
              sessionRunning,
            })
          ) {
            return state;
          }

          const next = assignInputQueueOwner(state, tabIdRef.current);
          ownerClaimed = isInputQueueOwnedByTab(next, tabIdRef.current);
          return next;
        });
        if (!ownerClaimed) return false;

        await submitNow(submissionData, {
          sessionId: submissionData.session_id,
        });
        return true;
      });
      if (submitted === true) return;
      return enqueueInput(data, requestSnapshot);
    },
    [
      canExecuteQueue,
      enqueueInput,
      getActiveChatSessionId,
      getActiveQueueSessionId,
      getQueueRequestContext,
      getLoading,
      getSessionLoading,
      isHostSessionRunning,
      queueEnabled,
      readQueueState,
      submitNowRef,
      updateQueueState,
      withQueueSendLock,
    ],
  );

  const prepareReconnect = useCallback(
    (sessionId: string) => {
      const queueSessionId = resolveQueueSessionId(sessionId);
      const queueState = readQueueState(queueSessionId);
      if (
        queueSessionId &&
        (hasInputQueueWork(queueState) ||
          (!!queueState.ownerTabId &&
            !isInputQueueOwner(queueState, tabIdRef.current))) &&
        !canExecuteQueue(queueState)
      ) {
        pendingPeerReconnectSessionRef.current = queueSessionId;
        markQueueSessionActive(queueSessionId);
        setSessionLoading(sessionId, true);
        return { blockedByPeer: true, queueSessionId };
      }
      if (pendingPeerReconnectSessionRef.current === queueSessionId) {
        pendingPeerReconnectSessionRef.current = undefined;
      }
      return { blockedByPeer: false, queueSessionId };
    },
    [
      canExecuteQueue,
      markQueueSessionActive,
      readQueueState,
      resolveQueueSessionId,
      setSessionLoading,
    ],
  );

  const handleReconnectSettledIdle = useCallback(
    (queueSessionId: string | undefined) => {
      if (!queueEnabled) return;
      markQueueSessionIdle(queueSessionId);
      if (queueDrainBlockedSessionRef.current === queueSessionId) {
        queueDrainBlockedSessionRef.current = undefined;
      }
      scheduleDrainQueue(queueSessionId);
    },
    [markQueueSessionIdle, queueEnabled, scheduleDrainQueue],
  );

  const handleSessionLoaded = useCallback(
    (sessionId: string | undefined, generating?: boolean) => {
      if (!queueEnabled) return;
      const queueSessionId = resolveQueueSessionId(sessionId);
      if (queueSessionId !== currentQueueSessionId) return;

      if (generating) {
        markQueueSessionActive(queueSessionId);
        return;
      }
      markQueueSessionIdle(queueSessionId);
      if (sessionId) setSessionLoading(sessionId, false);
      if (queueDrainBlockedSessionRef.current === queueSessionId) {
        queueDrainBlockedSessionRef.current = undefined;
      }
      scheduleDrainQueue(queueSessionId);
    },
    [
      currentQueueSessionId,
      markQueueSessionActive,
      markQueueSessionIdle,
      queueEnabled,
      resolveQueueSessionId,
      scheduleDrainQueue,
      setSessionLoading,
    ],
  );

  const sameQueueSession = useCallback(
    (left: string | undefined, right: string | undefined) => {
      return areInputQueueSessionsEquivalent(left, right, {
        queueEnabled,
        getQueueKey,
        scope: queueScope,
      });
    },
    [getQueueKey, queueEnabled, queueScope],
  );

  const clearDrainTimer = useCallback(() => {
    if (drainTimerRef.current) {
      clearTimeout(drainTimerRef.current);
      drainTimerRef.current = null;
    }
  }, []);

  const releasePeerTakeoverBlock = useCallback(
    (queueSessionId: string, queueState: InputQueueState) => {
      if (!isInputQueueOwnedByTab(queueState, tabIdRef.current)) return;

      const chatSessionId = getChatSessionIdForQueue(queueSessionId);
      if (!chatSessionId) return;
      const messages = getSessionMessages(chatSessionId);
      const mirroredGenerating = !!findGeneratingResponse(messages);

      if (mirroredGenerating) {
        pendingPeerReconnectSessionRef.current = undefined;
        markQueueSessionActive(queueSessionId);
        queueDrainBlockedSessionRef.current = queueSessionId;
        setSessionLoading(chatSessionId, true);

        window.setTimeout(() => {
          void handleReconnectRef.current?.(chatSessionId);
        }, 0);
        return;
      }

      const blockedByPeer =
        pendingPeerReconnectSessionRef.current === queueSessionId ||
        isQueueSessionActive(queueSessionId);

      if (blockedByPeer) {
        pendingPeerReconnectSessionRef.current = undefined;
        markQueueSessionIdle(queueSessionId);
        if (queueDrainBlockedSessionRef.current === queueSessionId) {
          queueDrainBlockedSessionRef.current = undefined;
        }
        currentQARef.current.abortController?.abort();
        currentQARef.current.response = undefined;
        currentQARef.current.activeRequestId += 1;
        setSessionLoading(chatSessionId, false);
      }

      if (!queueState.paused) {
        scheduleDrainQueue(queueSessionId);
        window.setTimeout(() => {
          void drainQueueRef.current?.(queueSessionId);
        }, 50);
      }
    },
    [
      currentQARef,
      getChatSessionIdForQueue,
      getVisibleChatSessionId,
      getSessionMessages,
      handleReconnectRef,
      isQueueSessionActive,
      markQueueSessionActive,
      markQueueSessionIdle,
      scheduleDrainQueue,
      setSessionLoading,
    ],
  );

  releasePeerTakeoverBlockRef.current = releasePeerTakeoverBlock;

  const rotateTabIdentity = useCallback(() => {
    tabIdRef.current = resetInputQueueTabId();
    const next = readQueueState(currentQueueSessionId);
    setInputQueueSessionId(currentQueueSessionId);
    inputQueueStateRef.current = next;
    setInputQueueState(next);
    broadcastRef.current?.postMessage({
      type: 'input-queue-tab-presence',
      tabId: tabIdRef.current,
      runtimeId: runtimeIdRef.current,
      runtimeStartedAt: runtimeStartedAtRef.current,
    });
  }, [currentQueueSessionId, readQueueState]);

  useEffect(() => {
    queueDrainBlockedSessionRef.current = currentQueueSessionId;
  }, [currentQueueSessionId, queueEnabled]);

  useEffect(() => {
    if (!queueEnabled) {
      const empty = createEmptyInputQueueState();
      setInputQueueSessionId(undefined);
      inputQueueStateRef.current = empty;
      setInputQueueState(empty);
      return;
    }
    const next = readQueueState(currentQueueSessionId);
    setInputQueueSessionId(currentQueueSessionId);
    inputQueueStateRef.current = next;
    setInputQueueState(next);
  }, [currentQueueSessionId, queueEnabled, readQueueState]);

  useEffect(() => {
    if (!currentQueueSessionId) return;

    const timer = window.setTimeout(() => {
      void import('../InputQueue/background').then(
        ({ isInputQueueBackgroundRunnerActive }) => {
          if (
            isQueueSessionActive(currentQueueSessionId) ||
            isInputQueueBackgroundRunnerActive(currentQueueSessionId)
          ) {
            return;
          }

          void updateQueueState(currentQueueSessionId, (state) => ({
            ...state,
            items: recoverInterruptedQueuedInputs(
              state.items,
              tabIdRef.current,
            ),
            updatedAt: Date.now(),
          }));
        },
      );
    }, INPUT_QUEUE_RUNTIME_RECOVERY_DELAY);

    return () => window.clearTimeout(timer);
  }, [currentQueueSessionId, isQueueSessionActive, updateQueueState]);

  useEffect(() => {
    if (!queueEnabled) return;
    let activeQueueSessionId = currentQARef.current.activeQueueSessionId;
    if (
      !activeQueueSessionId &&
      currentQARef.current.response?.msgStatus === 'generating'
    ) {
      activeQueueSessionId =
        currentQueueSessionId ||
        currentSessionIdRef.current ||
        pendingRouteSessionIdRef?.current ||
        resolveQueueSessionId(currentQARef.current.activeSessionId) ||
        currentQARef.current.activeSessionId;

      currentQARef.current.activeQueueSessionId = activeQueueSessionId;
      markQueueSessionActive(activeQueueSessionId);
    }

    if (!activeQueueSessionId || !isQueueSessionActive(activeQueueSessionId)) {
      return;
    }

    const activeState = readQueueState(activeQueueSessionId);
    if (activeState.ownerTabId !== tabIdRef.current) return;

    [
      currentQueueSessionId,
      currentSessionIdRef.current,
      pendingRouteSessionIdRef?.current,
      currentQARef.current.activeSessionId,
    ]
      .filter(
        (sessionId, index, list): sessionId is string =>
          !!sessionId &&
          sessionId !== activeQueueSessionId &&
          list.indexOf(sessionId) === index,
      )
      .forEach((sessionId) => {
        void updateQueueState(sessionId, (state) =>
          assignInputQueueOwner(state, tabIdRef.current, Date.now(), {
            force: true,
          }),
        );
      });
  }, [
    currentQARef,
    currentQueueSessionId,
    currentSessionIdRef,
    isQueueSessionActive,
    markQueueSessionActive,
    pendingRouteSessionIdRef,
    queueEnabled,
    readQueueState,
    resolveQueueSessionId,
    updateQueueState,
  ]);

  useEffect(() => {
    if (!queueEnabled) return;
    const applyRemoteState = (sessionId: string, state: InputQueueState) => {
      if (sessionId !== getVisibleQueueSessionId()) return;
      const next = normalizeInputQueueState(state);
      setInputQueueSessionId(sessionId);
      inputQueueStateRef.current = next;
      setInputQueueState(next);
      if (isInputQueueOwnedByTab(next, tabIdRef.current)) {
        releasePeerTakeoverBlock(sessionId, next);
      }
    };

    const handleStorage = (event: StorageEvent) => {
      const sessionId = getVisibleQueueSessionId();
      if (!sessionId || event.key !== getInputQueueStorageKey(sessionId)) {
        return;
      }

      try {
        applyRemoteState(
          sessionId,
          event.newValue
            ? JSON.parse(event.newValue)
            : createEmptyInputQueueState(),
        );
      } catch (error) {
        console.error('sync input queue failed:', error);
      }
    };

    window.addEventListener('storage', handleStorage);

    if (typeof BroadcastChannel !== 'undefined') {
      const channel = new BroadcastChannel(
        `agentscope-runtime-webui-input-queue:${encodeURIComponent(
          queueScope,
        )}`,
      );
      broadcastRef.current = channel;
      channel.onmessage = (event) => {
        if (event.data?.type === 'input-queue-tab-presence') {
          if (
            event.data.tabId === tabIdRef.current &&
            event.data.runtimeId !== runtimeIdRef.current
          ) {
            if (event.data.runtimeStartedAt <= runtimeStartedAtRef.current) {
              rotateTabIdentity();
            } else {
              channel.postMessage({
                type: 'input-queue-tab-conflict',
                tabId: event.data.tabId,
                runtimeId: event.data.runtimeId,
              });
            }
          }
          return;
        }

        if (event.data?.type === 'input-queue-tab-conflict') {
          if (
            event.data.tabId === tabIdRef.current &&
            event.data.runtimeId === runtimeIdRef.current
          ) {
            rotateTabIdentity();
          }
          return;
        }

        if (event.data?.type === 'input-queue-change') {
          applyRemoteState(event.data.sessionId, event.data.state);
          return;
        }

        if (event.data?.type === 'input-queue-messages-change') {
          if (event.data.sourceTabId === tabIdRef.current) return;
          const queueSessionId = event.data.sessionId;
          if (queueSessionId !== getVisibleQueueSessionId()) return;

          if (canExecuteQueue(readQueueState(queueSessionId))) return;

          const messages = event.data.messages || [];
          const chatSessionId = getChatSessionIdForQueue(queueSessionId);
          if (!chatSessionId) return;
          currentQARef.current.abortController?.abort();
          currentQARef.current.response = undefined;
          currentQARef.current.activeRequestId += 1;
          setSessionMessages(chatSessionId, messages);

          if (findGeneratingResponse(messages)) {
            markQueueSessionActive(queueSessionId);
            setSessionLoading(chatSessionId, true);
          } else {
            markQueueSessionIdle(queueSessionId);
            setSessionLoading(chatSessionId, false);
            pendingPeerReconnectSessionRef.current = undefined;
            if (queueDrainBlockedSessionRef.current === queueSessionId) {
              queueDrainBlockedSessionRef.current = undefined;
            }
            setTimeout(() => {
              void drainQueueRef.current?.(queueSessionId);
            }, 0);
          }
        }
      };
      channel.postMessage({
        type: 'input-queue-tab-presence',
        tabId: tabIdRef.current,
        runtimeId: runtimeIdRef.current,
        runtimeStartedAt: runtimeStartedAtRef.current,
      });
    }

    return () => {
      window.removeEventListener('storage', handleStorage);
      broadcastRef.current?.close();
      broadcastRef.current = null;
    };
  }, [
    canExecuteQueue,
    currentQARef,
    getChatSessionIdForQueue,
    getVisibleQueueSessionId,
    markQueueSessionActive,
    markQueueSessionIdle,
    queueEnabled,
    queueScope,
    readQueueState,
    releasePeerTakeoverBlock,
    rotateTabIdentity,
    setSessionLoading,
    setSessionMessages,
  ]);

  useEffect(() => {
    const queueSessionId = currentQueueSessionId;
    if (!queueSessionId || !canExecuteQueue()) return;

    const refreshOwner = () => {
      void updateQueueState(queueSessionId, (state) => {
        if (state.ownerTabId !== tabIdRef.current) return state;
        return assignInputQueueOwner(state, tabIdRef.current, Date.now(), {
          force: true,
        });
      });
    };

    refreshOwner();
    const timer = window.setInterval(
      refreshOwner,
      INPUT_QUEUE_OWNER_HEARTBEAT_INTERVAL,
    );
    return () => {
      window.clearInterval(timer);
    };
  }, [canExecuteQueue, currentQueueSessionId, updateQueueState]);

  useEffect(() => {
    const queueSessionId = currentQueueSessionId;
    if (!queueSessionId) return;

    const claimAvailableOwner = () => {
      const snapshot = readQueueState(queueSessionId);
      if (!shouldClaimInputQueueOwner(snapshot, tabIdRef.current)) return;

      void Promise.resolve(
        updateQueueState(queueSessionId, (state) => {
          if (!shouldClaimInputQueueOwner(state, tabIdRef.current))
            return state;
          return assignInputQueueOwner(state, tabIdRef.current);
        }),
      ).then((nextState) => {
        releasePeerTakeoverBlock(queueSessionId, nextState);
      });
    };

    claimAvailableOwner();
    const timer = window.setInterval(
      claimAvailableOwner,
      INPUT_QUEUE_OWNER_CLAIM_INTERVAL,
    );
    return () => {
      window.clearInterval(timer);
    };
  }, [
    currentQueueSessionId,
    readQueueState,
    releasePeerTakeoverBlock,
    updateQueueState,
  ]);

  useEffect(() => {
    const chatSessionId = getChatSessionIdForQueue(currentQueueSessionId);
    if (
      (!chatSessionId || !getSessionLoading(chatSessionId)) &&
      !isQueueSessionActive(currentQueueSessionId) &&
      queueDrainBlockedSessionRef.current !== currentQueueSessionId &&
      inputQueueSessionId === currentQueueSessionId &&
      inputQueueState.items.length > 0 &&
      !inputQueueState.paused &&
      canExecuteQueue(inputQueueState)
    ) {
      scheduleDrainQueue(currentQueueSessionId);
    }
  }, [
    canExecuteQueue,
    currentQueueSessionId,
    getChatSessionIdForQueue,
    getSessionLoading,
    inputQueueSessionId,
    inputQueueState,
    isQueueSessionActive,
    scheduleDrainQueue,
  ]);

  useEffect(() => {
    const command = inputQueueState.command;
    const sessionId = currentQueueSessionId;
    if (
      !sessionId ||
      !command ||
      command.type !== 'send-now' ||
      processedCommandIdRef.current === command.id ||
      !canExecuteQueue(inputQueueState)
    ) {
      return;
    }

    processedCommandIdRef.current = command.id;
    void (async () => {
      try {
        let targetStillQueued = false;
        await withQueueMutationLock(sessionId, () => {
          const state = readQueueState(sessionId);
          if (state.command?.id !== command.id) return;

          targetStillQueued = state.items.some(
            (item) => item.id === command.itemId && item.status === 'pending',
          );
          if (!targetStillQueued) {
            commitQueueState(sessionId, {
              ...state,
              command: undefined,
              updatedAt: Date.now(),
            });
          }
        });
        if (!targetStillQueued) return;

        // A direct or background submission holds the send lock until its
        // response stream finishes. Interrupt that exact queue session before
        // waiting for the lock so Send now cannot deadlock behind it.
        if (!cancelInputQueueSubmission(sessionId)) {
          handleCancelRef.current?.();
        }

        const acquired = await withQueueSendLock(sessionId, async () => {
          const chatSessionId = getChatSessionIdForQueue(
            sessionId,
            getVisibleChatSessionId(),
          );
          const submitNow = submitNowRef.current;
          if (!chatSessionId || !submitNow) {
            await updateQueueState(sessionId, (state) => ({
              ...state,
              command: undefined,
              updatedAt: Date.now(),
            }));
            return true;
          }

          const requestContext = getQueueRequestContext?.(chatSessionId);
          const submittingItem = await beginOwnedQueueSubmission(sessionId, {
            itemId: command.itemId,
            requestContext,
            ignorePaused: true,
            clearCommand: true,
          });
          if (!submittingItem) return true;

          // send-now is an explicit user interrupt; do not gate it on isSessionRunning.
          await submitQueuedItem(
            submitNow,
            sessionId,
            chatSessionId,
            submittingItem,
          );
          return true;
        });

        if (!acquired && processedCommandIdRef.current === command.id) {
          processedCommandIdRef.current = undefined;
          window.setTimeout(() => {
            const latest = readQueueState(sessionId);
            if (latest.command?.id !== command.id) return;
            inputQueueStateRef.current = latest;
            setInputQueueState(latest);
          }, 50);
        }
      } catch (error) {
        processedCommandIdRef.current = undefined;
        console.error('send queued input now failed:', error);
      }
    })();
  }, [
    beginOwnedQueueSubmission,
    canExecuteQueue,
    commitQueueState,
    currentQueueSessionId,
    getChatSessionIdForQueue,
    getQueueRequestContext,
    getVisibleChatSessionId,
    handleCancelRef,
    inputQueueState,
    readQueueState,
    submitQueuedItem,
    submitNowRef,
    updateQueueState,
    withQueueMutationLock,
    withQueueSendLock,
  ]);

  useEffect(() => {
    const queueSessionId = currentQueueSessionId;
    if (
      !queueSessionId ||
      pendingPeerReconnectSessionRef.current !== queueSessionId ||
      !canExecuteQueue(inputQueueState)
    ) {
      return;
    }

    const chatSessionId = getVisibleChatSessionId();
    if (!chatSessionId) return;

    if (
      hasInputQueueWork(inputQueueState) &&
      findGeneratingResponse(getSessionMessages(chatSessionId))
    ) {
      markQueueSessionActive(queueSessionId);
      queueDrainBlockedSessionRef.current = queueSessionId;
      setSessionLoading(chatSessionId, true);
      window.setTimeout(() => {
        void handleReconnectRef.current?.(chatSessionId);
      }, 0);
      return;
    }

    if (hasInputQueueWork(inputQueueState)) {
      releasePeerTakeoverBlock(queueSessionId, inputQueueState);
      return;
    }

    pendingPeerReconnectSessionRef.current = undefined;
    markQueueSessionIdle(queueSessionId);
    window.setTimeout(() => {
      void handleReconnectRef.current?.(chatSessionId);
    }, 0);
  }, [
    canExecuteQueue,
    currentQueueSessionId,
    getVisibleChatSessionId,
    getSessionMessages,
    handleReconnectRef,
    inputQueueState,
    markQueueSessionActive,
    markQueueSessionIdle,
    releasePeerTakeoverBlock,
    setSessionLoading,
  ]);

  backgroundRunnerSnapshotRef.current = {
    queueEnabled,
    currentQueueSessionId,
    getActiveChatSessionId,
    getChatSessionIdForQueue,
    readQueueState,
    getMessages: getSessionMessages,
    getRequestContext: getQueueRequestContext,
    isSessionRunning: isQueueSessionRunning,
    shouldRestoreOnError: shouldRestoreQueuedInput,
  };

  useEffect(() => {
    return () => {
      if (pageUnloadingRef.current) return;

      const snapshot = backgroundRunnerSnapshotRef.current;
      const queueSessionId =
        currentQARef.current.activeQueueSessionId ||
        snapshot.currentQueueSessionId;
      if (!snapshot.queueEnabled || !queueSessionId) return;

      const queueState =
        snapshot.readQueueState?.(queueSessionId) ||
        createEmptyInputQueueState();
      if (
        !hasInputQueueWork(queueState) ||
        !isInputQueueOwnedByTab(queueState, tabIdRef.current)
      ) {
        return;
      }

      const chatSessionId =
        currentQARef.current.activeSessionId ||
        snapshot.getChatSessionIdForQueue?.(queueSessionId) ||
        snapshot.getActiveChatSessionId?.();
      const sessionApi = sessionApiOptionsRef.current;
      if (!chatSessionId || !sessionApi) return;

      const waitForActiveRequest =
        currentQARef.current.activeQueueSessionId === queueSessionId ||
        !!findGeneratingResponse(snapshot.getMessages?.(chatSessionId) || []);
      if (waitForActiveRequest) return;

      void import('../InputQueue/background').then(
        ({ startInputQueueBackgroundRunner }) => {
          startInputQueueBackgroundRunner({
            queueSessionId,
            chatSessionId,
            ownerTabId: tabIdRef.current,
            apiOptions: apiOptionsRef.current,
            sessionApi,
            requestContext: snapshot.getRequestContext?.(chatSessionId),
            isSessionRunning: snapshot.isSessionRunning,
            shouldRestoreOnError: snapshot.shouldRestoreOnError,
          });
        },
      );
    };
  }, [currentQARef]);

  const visibleInputQueueState =
    queueEnabled && inputQueueSessionId === currentQueueSessionId
      ? inputQueueState
      : createEmptyInputQueueState();
  const queueActions = useInputQueueActions({
    canExecuteQueue,
    getActiveQueueSessionId,
    scheduleDrainQueue,
    tabIdRef,
    updateQueueState,
  });

  return {
    queueEnabled,
    inputQueue: visibleInputQueueState.items,
    inputQueuePaused: visibleInputQueueState.paused,
    inputQueueIsOwner: canExecuteQueue(visibleInputQueueState),
    handleSubmit,
    enqueueQueuedInput: enqueueInput,
    syncMessagesToPeerTabs,
    getChatSessionIdForQueue,
    getActiveQueueSessionId,
    resolveQueueSessionId,
    assignOwnerForSubmit,
    markQueueSessionActive,
    markQueueSessionIdle,
    handleResponseFinished,
    prepareReconnect,
    handleReconnectSettledIdle,
    handleSessionLoaded,
    sameQueueSession,
    clearDrainTimer,
    ...queueActions,
  };
}
