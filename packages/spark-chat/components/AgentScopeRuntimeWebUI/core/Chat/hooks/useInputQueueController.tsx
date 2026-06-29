import { message } from 'antd';
import { useCallback, useEffect, useMemo, useRef, useState, type MutableRefObject } from 'react';
import { useContextSelector } from 'use-context-selector';
import { ChatAnywhereMessagesContext } from '../../Context/ChatAnywhereMessagesContext';
import { useChatAnywhereOptions } from '../../Context/ChatAnywhereOptionsContext';
import type { IAgentScopeRuntimeWebUIMessage } from '@agentscope-ai/chat';
import type { InputProps } from '../Input';
import {
  assignInputQueueOwner,
  canSubmitDirectly,
  createEmptyInputQueueState,
  createInputQueueTabId,
  createSendNowCommand,
  dequeueNextQueuedInput,
  enqueueInputQueueState,
  getInputQueueStorageKey,
  getInputQueueTabId,
  hasInputQueueWork,
  INPUT_QUEUE_OWNER_CLAIM_INTERVAL,
  INPUT_QUEUE_OWNER_HEARTBEAT_INTERVAL,
  isInputQueueOwnedByTab,
  isInputQueueOwner,
  MAX_INPUT_QUEUE_SIZE,
  normalizeInputQueueState,
  removeQueuedInput,
  reorderQueuedInput,
  resetInputQueueTabId,
  restoreFailedQueuedInput,
  retryQueuedInput,
  shouldClaimInputQueueOwner,
  updateQueuedInputQuery,
  type InputQueueState,
  type QueueEnqueueResult,
} from '../InputQueue';
import { startInputQueueBackgroundRunner } from '../InputQueue/background';
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

export type ChatControllerCurrentQARef = MutableRefObject<{
  request?: IAgentScopeRuntimeWebUIMessage;
  response?: IAgentScopeRuntimeWebUIMessage;
  abortController?: AbortController;
  activeRequestId: number;
  activeSessionId?: string;
  activeQueueSessionId?: string;
}>;

export type QueueSubmitNow = (
  data: Parameters<InputProps['onSubmit']>[0],
  options?: { sessionId?: string; queueSessionId?: string },
) => Promise<void>;

export interface UseInputQueueControllerOptions {
  currentQARef: ChatControllerCurrentQARef;
  currentSessionId?: string;
  currentSessionIdRef: MutableRefObject<string | undefined>;
  pendingRouteSessionIdRef?: MutableRefObject<string | undefined>;
  setLoading: (value: boolean | string) => void;
  getLoading: () => boolean | string;
  getCurrentSessionId: () => string | undefined;
  submitNowRef: MutableRefObject<QueueSubmitNow | null>;
  handleCancelRef: MutableRefObject<(() => void) | null>;
  handleReconnectRef: MutableRefObject<((sessionId: string) => Promise<void>) | null>;
}

function findGeneratingResponse(messages: IAgentScopeRuntimeWebUIMessage[]) {
  for (let index = messages.length - 1; index >= 0; index -= 1) {
    const item = messages[index];
    if (item.role === 'assistant' && item.msgStatus === 'generating') {
      return item;
    }
  }
}

function isQueueSessionSwitchedError(error: unknown) {
  return error instanceof Error && error.message === 'input queue session switched';
}

function isChatRequestAbortedError(error: unknown) {
  return error instanceof Error && error.message === 'chat request aborted';
}

export default function useInputQueueController(
  options: UseInputQueueControllerOptions,
) {
  const {
    currentQARef,
    currentSessionId,
    currentSessionIdRef,
    pendingRouteSessionIdRef,
    setLoading,
    getLoading,
    getCurrentSessionId,
    submitNowRef,
    handleCancelRef,
    handleReconnectRef,
  } = options;
  const setMessages = useContextSelector(ChatAnywhereMessagesContext, v => v.setMessages);
  const getMessages = useContextSelector(ChatAnywhereMessagesContext, v => v.getMessages);
  const apiOptions = useChatAnywhereOptions(v => v.api);
  const sessionApiOptions = useChatAnywhereOptions(v => v.session?.api);
  const queueOptions = useChatAnywhereOptions(v => v.sender?.queue);
  const queueConfig = useMemo(
    () => (queueOptions === true || queueOptions === undefined ? {} : queueOptions || {}),
    [queueOptions],
  );
  const queueEnabled = queueOptions !== false && queueConfig.enable !== false;
  const queueMaxSize = queueConfig.maxSize ?? MAX_INPUT_QUEUE_SIZE;
  const getQueueSessionId = queueConfig.getSessionId;
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

  const tabIdRef = useRef(getInputQueueTabId());
  const runtimeIdRef = useRef(createInputQueueTabId());
  const runtimeStartedAtRef = useRef(Date.now());
  const [inputQueueState, setInputQueueState] = useState<InputQueueState>(() =>
    createEmptyInputQueueState(),
  );
  const [inputQueueSessionId, setInputQueueSessionId] = useState<string | undefined>(undefined);
  const inputQueueStateRef = useRef<InputQueueState>(inputQueueState);
  const drainTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const scheduledDrainSessionIdRef = useRef<string | undefined>(undefined);
  const drainingRef = useRef(false);
  const drainQueueRef = useRef<((sessionId?: string) => Promise<void>) | null>(null);
  const queueDrainBlockedSessionRef = useRef<string | undefined>(undefined);
  const activeQueueSessionIdsRef = useRef<Set<string>>(new Set());
  const pendingPeerReconnectSessionRef = useRef<string | undefined>(undefined);
  const processedCommandIdRef = useRef<string | undefined>(undefined);
  const broadcastRef = useRef<BroadcastChannel | null>(null);
  const backgroundRunnerSnapshotRef = useRef<{
    queueEnabled: boolean;
    currentQueueSessionId?: string;
    getActiveChatSessionId?: () => string | undefined;
    getChatSessionIdForQueue?: (
      queueSessionId: string | undefined,
      preferredSessionId?: string,
    ) => string | undefined;
    readQueueState?: (sessionId?: string) => InputQueueState;
  }>({
    queueEnabled,
  });

  useEffect(() => {
    inputQueueStateRef.current = inputQueueState;
  }, [inputQueueState]);

  const readQueueState = useCallback(readInputQueueState, []);

  const resolveQueueSessionId = useCallback((sessionId?: string) => {
    return resolveInputQueueSessionId(sessionId, {
      queueEnabled,
      getSessionId: getQueueSessionId,
    });
  }, [getQueueSessionId, queueEnabled]);

  const currentQueueSessionId = getInputQueueRouteQueueSessionId({
    currentSessionId,
    pendingRouteSessionId: pendingRouteSessionIdRef?.current,
  }, {
    queueEnabled,
    getSessionId: getQueueSessionId,
  });

  const getVisibleChatSessionId = useCallback(() => {
    return getInputQueueVisibleChatSessionId({
      currentSessionId: currentSessionIdRef.current,
      pendingRouteSessionId: pendingRouteSessionIdRef?.current,
      activeSessionId: currentQARef.current.activeSessionId,
    });
  }, [currentQARef, currentSessionIdRef, pendingRouteSessionIdRef]);

  const getVisibleQueueSessionId = useCallback(() => {
    return getInputQueueVisibleSessionId({
      currentSessionId: currentSessionIdRef.current,
      pendingRouteSessionId: pendingRouteSessionIdRef?.current,
      activeSessionId: currentQARef.current.activeSessionId,
    }, {
      queueEnabled,
      getSessionId: getQueueSessionId,
    });
  }, [currentQARef, currentSessionIdRef, getQueueSessionId, pendingRouteSessionIdRef, queueEnabled]);

  const markQueueSessionActive = useCallback((sessionId: string | undefined) => {
    if (sessionId) activeQueueSessionIdsRef.current.add(sessionId);
  }, []);

  const markQueueSessionIdle = useCallback((sessionId: string | undefined) => {
    if (sessionId) activeQueueSessionIdsRef.current.delete(sessionId);
  }, []);

  const isQueueSessionActive = useCallback((sessionId: string | undefined) => {
    return !!sessionId && activeQueueSessionIdsRef.current.has(sessionId);
  }, []);

  const canExecuteQueue = useCallback((state = inputQueueStateRef.current) => {
    return isInputQueueOwnedByTab(state, tabIdRef.current);
  }, []);

  const commitQueueState = useCallback((sessionId: string | undefined, state: InputQueueState) => {
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
  }, [getVisibleQueueSessionId]);

  const withQueueMutationLock = useCallback(withInputQueueMutationLock, []);

  const updateQueueState = useCallback((
    sessionId: string | undefined,
    updater: (state: InputQueueState) => InputQueueState,
  ) => {
    if (!sessionId) return createEmptyInputQueueState();

    return withQueueMutationLock(sessionId, () => {
      const current = readQueueState(sessionId);
      const next = updater(current);
      return commitQueueState(sessionId, next);
    });
  }, [commitQueueState, readQueueState, withQueueMutationLock]);

  const withQueueSendLock = useCallback(withInputQueueSendLock, []);

  const syncMessagesToPeerTabs = useCallback((
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
  }, [resolveQueueSessionId]);

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

  const getChatSessionIdForQueue = useCallback((
    queueSessionId: string | undefined,
    preferredSessionId?: string,
  ) => {
    const activeSessionId = currentQARef.current.activeSessionId;
    const currentChatSessionId = getCurrentSessionId();
    const rawMatch = [
      preferredSessionId,
      activeSessionId,
      currentChatSessionId,
      pendingRouteSessionIdRef?.current,
    ].find(sessionId => !!sessionId && sessionId === queueSessionId);
    if (rawMatch) return rawMatch;

    if (
      queueSessionId &&
      currentQARef.current.activeQueueSessionId === queueSessionId
    ) {
      return activeSessionId;
    }

    return getInputQueueChatSessionIdForQueue({
      currentSessionId: currentChatSessionId,
      pendingRouteSessionId: pendingRouteSessionIdRef?.current,
      activeSessionId,
    }, {
      queueEnabled,
      getSessionId: getQueueSessionId,
    }, queueSessionId, preferredSessionId);
  }, [currentQARef, getCurrentSessionId, getQueueSessionId, pendingRouteSessionIdRef, queueEnabled]);

  const scheduleDrainQueue = useCallback((sessionId?: string) => {
    scheduledDrainSessionIdRef.current = sessionId;
    if (drainTimerRef.current) {
      clearTimeout(drainTimerRef.current);
    }

    drainTimerRef.current = setTimeout(() => {
      const nextSessionId = scheduledDrainSessionIdRef.current;
      scheduledDrainSessionIdRef.current = undefined;
      drainTimerRef.current = null;
      void drainQueueRef.current?.(nextSessionId);
    }, 0);
  }, []);

  const releaseQueueOwnerIfIdle = useCallback((sessionId: string | undefined) => {
    if (!sessionId) return;

    void updateQueueState(sessionId, state => {
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
  }, [updateQueueState]);

  const assignOwnerForSubmit = useCallback(async (sessionId: string | undefined) => {
    if (!sessionId) return;
    await updateQueueState(sessionId, state =>
      assignInputQueueOwner(state, tabIdRef.current),
    );
  }, [updateQueueState]);

  const handleResponseFinished = useCallback((activeSessionId: string | undefined) => {
    const completedQueueSessionIds = [
      currentQARef.current.activeQueueSessionId,
      activeSessionId,
      currentSessionIdRef.current,
      pendingRouteSessionIdRef?.current,
      ...getInputQueueCompletionSessionIds({
        currentSessionId: currentSessionIdRef.current,
        pendingRouteSessionId: pendingRouteSessionIdRef?.current,
        activeSessionId,
      }, {
        queueEnabled,
        getSessionId: getQueueSessionId,
      }),
    ].filter((sessionId, index, list): sessionId is string =>
      !!sessionId && list.indexOf(sessionId) === index,
    );

    completedQueueSessionIds.forEach(markQueueSessionIdle);
    if (completedQueueSessionIds.some(sessionId => sessionId === queueDrainBlockedSessionRef.current)) {
      queueDrainBlockedSessionRef.current = undefined;
    }
    const nextDrainSessionId = completedQueueSessionIds.find(sessionId =>
      hasInputQueueWork(readQueueState(sessionId)),
    ) || completedQueueSessionIds[0];
    completedQueueSessionIds.forEach(releaseQueueOwnerIfIdle);
    scheduleDrainQueue(nextDrainSessionId);
  }, [
    currentQARef,
    currentSessionIdRef,
    getQueueSessionId,
    markQueueSessionIdle,
    pendingRouteSessionIdRef,
    queueEnabled,
    readQueueState,
    releaseQueueOwnerIfIdle,
    scheduleDrainQueue,
  ]);

  const enqueueInput = useCallback(async (data: Parameters<InputProps['onSubmit']>[0]): Promise<QueueEnqueueResult> => {
    const sessionId = getActiveQueueSessionId();
    if (!sessionId) {
      if (onQueueSessionNotReady) {
        onQueueSessionNotReady();
      } else {
        message.warning('Current session is still being generated. Please wait before queuing another input.');
      }
      return { ok: false, reason: 'session-not-ready' };
    }

    let full = false;
    let queuedItem: QueueEnqueueResult['item'];
    await updateQueueState(sessionId, state => {
      const result = enqueueInputQueueState(state, data, {
        maxSize: queueMaxSize,
        ownerTabId: tabIdRef.current,
      });
      full = result.reason === 'full';
      queuedItem = result.item;
      return result.state;
    });
    if (full) {
      if (onQueueFull) {
        onQueueFull(queueMaxSize);
      } else {
        message.warning(`Queue is full. You can keep up to ${queueMaxSize} items.`);
      }
      return { ok: false, reason: 'full' };
    }

    return { ok: true, item: queuedItem };
  }, [getActiveQueueSessionId, onQueueFull, onQueueSessionNotReady, queueMaxSize, updateQueueState]);

  const drainQueue = useCallback(async (targetQueueSessionId?: string) => {
    const sessionId = targetQueueSessionId || getActiveQueueSessionId();
    const chatSessionId = getChatSessionIdForQueue(sessionId);
    const submitNow = submitNowRef.current;
    if (
      !sessionId ||
      !chatSessionId ||
      !submitNow ||
      drainingRef.current ||
      getLoading() ||
      isQueueSessionActive(sessionId) ||
      queueDrainBlockedSessionRef.current === sessionId
    ) return;

    await withQueueSendLock(sessionId, async () => {
      let nextItem: ReturnType<typeof dequeueNextQueuedInput>['item'];
      await withQueueMutationLock(sessionId, () => {
        const state = readQueueState(sessionId);
        if (state.paused || !canExecuteQueue(state)) return;

        const result = dequeueNextQueuedInput(state.items);
        nextItem = result.item;
        if (!nextItem) return;

        commitQueueState(sessionId, {
          ...state,
          items: result.queue,
          updatedAt: Date.now(),
        });
      });
      if (!nextItem) return;

      drainingRef.current = true;
      try {
        await submitNow(nextItem.data, {
          sessionId: chatSessionId,
          queueSessionId: sessionId,
        });
      } catch (error) {
        const interrupted = isQueueSessionSwitchedError(error) || isChatRequestAbortedError(error);
        if (!interrupted) {
          setLoading(false);
        }
        await updateQueueState(sessionId, current => ({
          ...current,
          items: interrupted
            ? [nextItem!, ...current.items]
            : restoreFailedQueuedInput(current.items, nextItem!, error),
          updatedAt: Date.now(),
        }));
      } finally {
        drainingRef.current = false;
      }
    });
  }, [
    canExecuteQueue,
    commitQueueState,
    getActiveQueueSessionId,
    getChatSessionIdForQueue,
    getLoading,
    isQueueSessionActive,
    readQueueState,
    setLoading,
    submitNowRef,
    updateQueueState,
    withQueueMutationLock,
    withQueueSendLock,
  ]);

  useEffect(() => {
    drainQueueRef.current = drainQueue;
  }, [drainQueue]);

  const handleSubmit = useCallback<InputProps['onSubmit']>(async (data) => {
    const sessionId = getActiveQueueSessionId();
    const queueState = sessionId ? readQueueState(sessionId) : createEmptyInputQueueState();
    const submitNow = submitNowRef.current;
    if (!submitNow) return;

    if (!canSubmitDirectly({
      loading: getLoading(),
      queueLength: queueState.items.length,
      draining: drainingRef.current,
      paused: queueState.paused,
      canExecute: !sessionId || canExecuteQueue(queueState),
    })) {
      await enqueueInput(data);
      return;
    }

    await submitNow(data);
  }, [canExecuteQueue, enqueueInput, getActiveQueueSessionId, getLoading, readQueueState, submitNowRef]);

  const prepareReconnect = useCallback((sessionId: string) => {
    const queueSessionId = resolveQueueSessionId(sessionId);
    const queueState = readQueueState(queueSessionId);
    if (
      queueSessionId &&
      (hasInputQueueWork(queueState) ||
        (!!queueState.ownerTabId && !isInputQueueOwner(queueState, tabIdRef.current))) &&
      !canExecuteQueue(queueState)
    ) {
      pendingPeerReconnectSessionRef.current = queueSessionId;
      markQueueSessionActive(queueSessionId);
      setLoading(true);
      return { blockedByPeer: true, queueSessionId };
    }
    if (pendingPeerReconnectSessionRef.current === queueSessionId) {
      pendingPeerReconnectSessionRef.current = undefined;
    }
    return { blockedByPeer: false, queueSessionId };
  }, [canExecuteQueue, markQueueSessionActive, readQueueState, resolveQueueSessionId, setLoading]);

  const handleReconnectSettledIdle = useCallback((queueSessionId: string | undefined) => {
    markQueueSessionIdle(queueSessionId);
    if (queueDrainBlockedSessionRef.current === queueSessionId) {
      queueDrainBlockedSessionRef.current = undefined;
    }
    scheduleDrainQueue(queueSessionId);
  }, [markQueueSessionIdle, scheduleDrainQueue]);

  const handleSessionLoaded = useCallback((
    sessionId: string | undefined,
    generating?: boolean,
  ) => {
    const queueSessionId = resolveQueueSessionId(sessionId);
    if (queueSessionId !== currentQueueSessionId) return;

    if (generating) {
      markQueueSessionActive(queueSessionId);
      return;
    }
    markQueueSessionIdle(queueSessionId);
    setLoading(false);
    if (queueDrainBlockedSessionRef.current === queueSessionId) {
      queueDrainBlockedSessionRef.current = undefined;
    }
    scheduleDrainQueue(queueSessionId);
  }, [
    currentQueueSessionId,
    markQueueSessionActive,
    markQueueSessionIdle,
    resolveQueueSessionId,
    scheduleDrainQueue,
    setLoading,
  ]);

  const sameQueueSession = useCallback((
    left: string | undefined,
    right: string | undefined,
  ) => {
    return areInputQueueSessionsEquivalent(left, right, {
      queueEnabled,
      getSessionId: getQueueSessionId,
    });
  }, [getQueueSessionId, queueEnabled]);

  const clearDrainTimer = useCallback(() => {
    if (drainTimerRef.current) {
      clearTimeout(drainTimerRef.current);
      drainTimerRef.current = null;
    }
  }, []);

  const releasePeerTakeoverBlock = useCallback((
    queueSessionId: string,
    queueState: InputQueueState,
  ) => {
    if (!isInputQueueOwnedByTab(queueState, tabIdRef.current)) return;

    const messages = getMessages();
    const mirroredGenerating = !!findGeneratingResponse(messages);
    const blockedByPeer =
      pendingPeerReconnectSessionRef.current === queueSessionId ||
      isQueueSessionActive(queueSessionId) ||
      mirroredGenerating;

    if (blockedByPeer) {
      pendingPeerReconnectSessionRef.current = undefined;
      markQueueSessionIdle(queueSessionId);
      if (queueDrainBlockedSessionRef.current === queueSessionId) {
        queueDrainBlockedSessionRef.current = undefined;
      }
      currentQARef.current.abortController?.abort();
      currentQARef.current.response = undefined;
      currentQARef.current.activeRequestId += 1;
      setLoading(false);

      if (mirroredGenerating) {
        setMessages(messages.map(item =>
          item.role === 'assistant' && item.msgStatus === 'generating'
            ? { ...item, msgStatus: 'interrupted' }
            : item,
        ));
      }
    }

    if (!queueState.paused) {
      scheduleDrainQueue(queueSessionId);
    }
  }, [
    currentQARef,
    getMessages,
    isQueueSessionActive,
    markQueueSessionIdle,
    scheduleDrainQueue,
    setLoading,
    setMessages,
  ]);

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
  }, [currentQueueSessionId]);

  useEffect(() => {
    const next = readQueueState(currentQueueSessionId);
    setInputQueueSessionId(currentQueueSessionId);
    inputQueueStateRef.current = next;
    setInputQueueState(next);
  }, [currentQueueSessionId, readQueueState]);

  useEffect(() => {
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

    if (
      !activeQueueSessionId ||
      !isQueueSessionActive(activeQueueSessionId)
    ) {
      return;
    }

    const activeState = readQueueState(activeQueueSessionId);
    if (activeState.ownerTabId !== tabIdRef.current) return;

    [
      currentQueueSessionId,
      currentSessionIdRef.current,
      pendingRouteSessionIdRef?.current,
      currentQARef.current.activeSessionId,
    ].filter((sessionId, index, list): sessionId is string =>
      !!sessionId &&
      sessionId !== activeQueueSessionId &&
      list.indexOf(sessionId) === index,
    ).forEach(sessionId => {
      void updateQueueState(sessionId, state =>
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
    readQueueState,
    resolveQueueSessionId,
    updateQueueState,
  ]);

  useEffect(() => {
    const applyRemoteState = (sessionId: string, state: InputQueueState) => {
      if (sessionId !== getVisibleQueueSessionId()) return;
      const next = normalizeInputQueueState(state);
      setInputQueueSessionId(sessionId);
      inputQueueStateRef.current = next;
      setInputQueueState(next);
    };

    const handleStorage = (event: StorageEvent) => {
      const sessionId = getVisibleQueueSessionId();
      if (!sessionId || event.key !== getInputQueueStorageKey(sessionId)) {
        return;
      }

      try {
        applyRemoteState(
          sessionId,
          event.newValue ? JSON.parse(event.newValue) : createEmptyInputQueueState(),
        );
      } catch (error) {
        console.error('sync input queue failed:', error);
      }
    };

    window.addEventListener('storage', handleStorage);

    if (typeof BroadcastChannel !== 'undefined') {
      const channel = new BroadcastChannel('agentscope-runtime-webui-input-queue');
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
          if (event.data.sessionId !== getVisibleQueueSessionId()) return;

          if (canExecuteQueue(inputQueueStateRef.current)) return;

          const messages = event.data.messages || [];
          currentQARef.current.abortController?.abort();
          currentQARef.current.response = undefined;
          currentQARef.current.activeRequestId += 1;
          setMessages(messages);

          const queueSessionId = event.data.sessionId;
          if (findGeneratingResponse(messages)) {
            markQueueSessionActive(queueSessionId);
            setLoading(true);
          } else {
            markQueueSessionIdle(queueSessionId);
            setLoading(false);
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
    getVisibleQueueSessionId,
    markQueueSessionActive,
    markQueueSessionIdle,
    rotateTabIdentity,
    setLoading,
    setMessages,
  ]);

  useEffect(() => {
    const queueSessionId = currentQueueSessionId;
    if (!queueSessionId || !canExecuteQueue()) return;

    const refreshOwner = () => {
      void updateQueueState(queueSessionId, state => {
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

      void Promise.resolve(updateQueueState(queueSessionId, state => {
        if (!shouldClaimInputQueueOwner(state, tabIdRef.current)) return state;
        return assignInputQueueOwner(state, tabIdRef.current);
      })).then(nextState => {
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
  }, [currentQueueSessionId, readQueueState, releasePeerTakeoverBlock, updateQueueState]);

  useEffect(() => {
    if (
      !getLoading() &&
      !isQueueSessionActive(currentQueueSessionId) &&
      queueDrainBlockedSessionRef.current !== currentQueueSessionId &&
      inputQueueSessionId === currentQueueSessionId &&
      inputQueueState.items.length > 0 &&
      !inputQueueState.paused &&
      canExecuteQueue(inputQueueState)
    ) {
      scheduleDrainQueue(currentQueueSessionId);
    }
  }, [canExecuteQueue, currentQueueSessionId, getLoading, inputQueueSessionId, inputQueueState, isQueueSessionActive, scheduleDrainQueue]);

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
    void withQueueSendLock(sessionId, async () => {
      const latest = readQueueState(sessionId);
      const target = latest.items.find(item => item.id === command.itemId);
      await updateQueueState(sessionId, state => ({
        ...state,
        command: undefined,
        items: removeQueuedInput(state.items, command.itemId),
        updatedAt: Date.now(),
      }));

      if (!target) return;

      const chatSessionId = getChatSessionIdForQueue(
        sessionId,
        getVisibleChatSessionId(),
      );
      if (!chatSessionId) {
        await updateQueueState(sessionId, current => ({
          ...current,
          items: current.items.some(item => item.id === target.id)
            ? current.items
            : [target, ...current.items],
          updatedAt: Date.now(),
        }));
        return;
      }

      const submitNow = submitNowRef.current;
      if (!submitNow) return;

      drainingRef.current = true;
      handleCancelRef.current?.();
      await Promise.resolve(submitNow(target.data, {
        sessionId: chatSessionId,
        queueSessionId: sessionId,
      })).catch(error => {
        if (isQueueSessionSwitchedError(error)) {
          return updateQueueState(sessionId, current => ({
            ...current,
            items: current.items.some(item => item.id === target.id)
              ? current.items
              : [target, ...current.items],
            updatedAt: Date.now(),
          }));
        }
        throw error;
      }).finally(() => {
        drainingRef.current = false;
      });
    });
  }, [
    canExecuteQueue,
    currentQueueSessionId,
    getChatSessionIdForQueue,
    getVisibleChatSessionId,
    handleCancelRef,
    inputQueueState,
    readQueueState,
    submitNowRef,
    updateQueueState,
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

    pendingPeerReconnectSessionRef.current = undefined;
    markQueueSessionIdle(queueSessionId);
    window.setTimeout(() => {
      void handleReconnectRef.current?.(chatSessionId);
    }, 0);
  }, [
    canExecuteQueue,
    currentQueueSessionId,
    getVisibleChatSessionId,
    handleReconnectRef,
    inputQueueState,
    markQueueSessionIdle,
  ]);

  backgroundRunnerSnapshotRef.current = {
    queueEnabled,
    currentQueueSessionId,
    getActiveChatSessionId,
    getChatSessionIdForQueue,
    readQueueState,
  };

  useEffect(() => {
    return () => {
      const snapshot = backgroundRunnerSnapshotRef.current;
      const queueSessionId =
        currentQARef.current.activeQueueSessionId ||
        snapshot.currentQueueSessionId;
      if (!snapshot.queueEnabled || !queueSessionId) return;

      const queueState = snapshot.readQueueState?.(queueSessionId) ||
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

      startInputQueueBackgroundRunner({
        queueSessionId,
        chatSessionId,
        ownerTabId: tabIdRef.current,
        apiOptions: apiOptionsRef.current,
        sessionApi,
      });
    };
  }, [currentQARef]);

  const visibleInputQueueState = inputQueueSessionId === currentQueueSessionId
    ? inputQueueState
    : createEmptyInputQueueState();

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
    removeQueuedInput: (id: string) => {
      const sessionId = getActiveQueueSessionId();
      void updateQueueState(sessionId, state => ({
        ...state,
        items: removeQueuedInput(state.items, id),
        updatedAt: Date.now(),
      }));
    },
    clearQueuedInputs: () => {
      const sessionId = getActiveQueueSessionId();
      void updateQueueState(sessionId, state => ({
        ...state,
        items: [],
        command: undefined,
        updatedAt: Date.now(),
      }));
    },
    retryQueuedInput: (id: string) => {
      const sessionId = getActiveQueueSessionId();
      void updateQueueState(sessionId, state => ({
        ...state,
        items: retryQueuedInput(state.items, id),
        updatedAt: Date.now(),
      }));
      scheduleDrainQueue(sessionId);
    },
    toggleQueuePaused: () => {
      const sessionId = getActiveQueueSessionId();
      void updateQueueState(sessionId, state => ({
        ...state,
        paused: canExecuteQueue(state) ? !state.paused : state.paused,
        updatedAt: Date.now(),
      }));
      scheduleDrainQueue(sessionId);
    },
    reorderQueuedInput: (sourceId: string, targetId: string) => {
      const sessionId = getActiveQueueSessionId();
      void updateQueueState(sessionId, state => ({
        ...state,
        items: reorderQueuedInput(state.items, sourceId, targetId),
        updatedAt: Date.now(),
      }));
    },
    updateQueuedInputQuery: (id: string, query: string) => {
      const sessionId = getActiveQueueSessionId();
      void updateQueueState(sessionId, state => ({
        ...state,
        items: updateQueuedInputQuery(state.items, id, query),
        updatedAt: Date.now(),
      }));
    },
    sendQueuedInputNow: (id: string) => {
      const sessionId = getActiveQueueSessionId();
      void updateQueueState(sessionId, state => ({
        ...state,
        command: canExecuteQueue(state)
          ? createSendNowCommand(id, tabIdRef.current)
          : state.command,
        updatedAt: Date.now(),
      }));
    },
  };
}
