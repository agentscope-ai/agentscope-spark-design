import { sleep } from "@agentscope-ai/chat";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useContextSelector } from "use-context-selector";
import { ChatAnywhereInputContext } from "../../Context/ChatAnywhereInputContext";
import { ChatAnywhereMessagesContext } from "../../Context/ChatAnywhereMessagesContext";
import { ChatAnywhereSessionsContext } from "../../Context/ChatAnywhereSessionsContext";
import useChatAnywhereEventEmitter from "../../Context/useChatAnywhereEventEmitter";
import { IAgentScopeRuntimeWebUIMessage } from "@agentscope-ai/chat";
import { InputProps } from "../Input";
import {
  assignInputQueueOwner,
  canSubmitDirectly,
  createEmptyInputQueueState,
  createSendNowCommand,
  dequeueNextQueuedInput,
  enqueueInputQueueState,
  getInputQueueStorageKey,
  getInputQueueTabId,
  isInputQueueStateEmpty,
  isInputQueueOwner,
  MAX_INPUT_QUEUE_SIZE,
  normalizeInputQueueState,
  reorderQueuedInput,
  removeQueuedInput,
  restoreFailedQueuedInput,
  retryQueuedInput,
  shouldClaimInputQueueOwner,
  updateQueuedInputQuery,
  type InputQueueState,
  type QueueEnqueueResult,
} from "../InputQueue";
import {
  getInputQueueRouteQueueSessionId,
  getInputQueueVisibleChatSessionId,
  getInputQueueVisibleSessionId,
  resolveInputQueueSessionId,
} from "../InputQueue/session";
import useChatMessageHandler from "./useChatMessageHandler";
import useChatRequest from "./useChatRequest";
import useChatSessionHandler from "./useChatSessionHandler";
import { useChatAnywhereOptions } from "../../Context/ChatAnywhereOptionsContext";
import ReactDOM from "react-dom";
import { message } from "antd";
// import mockdata from '../../mock/mock.json'

type QueueLocks = {
  request: <R>(
    name: string,
    options: { ifAvailable?: true; mode: 'exclusive' },
    callback: (lock: unknown | null) => R | Promise<R | undefined> | undefined,
  ) => Promise<R | undefined>;
};

function getQueueLocks() {
  return typeof navigator !== 'undefined'
    ? (navigator as typeof navigator & { locks?: QueueLocks }).locks
    : undefined;
}

function patchMessageSnapshot(
  messages: IAgentScopeRuntimeWebUIMessage[],
  message: Partial<IAgentScopeRuntimeWebUIMessage> & { id: string },
) {
  const index = messages.findIndex(item => item.id === message.id);
  if (index === -1) {
    return [...messages, message as IAgentScopeRuntimeWebUIMessage];
  }

  const nextMessage = {
    ...messages[index],
    ...message,
  };
  return [...messages.slice(0, index), nextMessage, ...messages.slice(index + 1)];
}

function findGeneratingResponse(messages: IAgentScopeRuntimeWebUIMessage[]) {
  for (let index = messages.length - 1; index >= 0; index -= 1) {
    const message = messages[index];
    if (message.role === 'assistant' && message.msgStatus === 'generating') {
      return message;
    }
  }
}

function isQueueSessionSwitchedError(error: unknown) {
  return error instanceof Error && error.message === 'input queue session switched';
}

/**
 * Chat controller hook — coordinates all chat-related operations.
 */
export default function useChatController() {
  const setLoading = useContextSelector(ChatAnywhereInputContext, v => v.setLoading);
  const getLoading = useContextSelector(ChatAnywhereInputContext, v => v.getLoading);
  const setMessages = useContextSelector(ChatAnywhereMessagesContext, v => v.setMessages);
  const currentSessionId = useContextSelector(ChatAnywhereSessionsContext, v => v.currentSessionId);
  const pendingRouteSessionIdRef = useContextSelector(ChatAnywhereSessionsContext, v => v.pendingRouteSessionIdRef);
  const apiOptions = useChatAnywhereOptions(v => v.api);
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
  useEffect(() => {
    apiOptionsRef.current = apiOptions;
  }, [apiOptions]);

  const currentQARef = useRef<{
    request?: IAgentScopeRuntimeWebUIMessage;
    response?: IAgentScopeRuntimeWebUIMessage;
    abortController?: AbortController;
    /**
     * Unique identifier for the currently active SSE request. Incremented on
     * every new submit / cancel / session-switch. processSSEResponse checks its
     * own requestId against this value before every write — a mismatch means
     * the stream is stale and should stop writing (prevents cross-session
     * leakage and ghost writes from cancelled runs, related to issue #4644).
     */
    activeRequestId: number;
    /**
     * Snapshot of the session id associated with the active request.
     * Used to detect stale requests after a session switch.
     */
    activeSessionId?: string;
  }>({ activeRequestId: 0 });
  const tabIdRef = useRef(getInputQueueTabId());
  const currentSessionIdRef = useRef(currentSessionId);
  const [inputQueueState, setInputQueueState] = useState<InputQueueState>(() =>
    createEmptyInputQueueState(),
  );
  const [inputQueueSessionId, setInputQueueSessionId] = useState<string | undefined>(undefined);
  const inputQueueStateRef = useRef<InputQueueState>(inputQueueState);
  const drainTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const drainingRef = useRef(false);
  const drainQueueRef = useRef<(() => Promise<void>) | null>(null);
  const queueDrainBlockedSessionRef = useRef<string | undefined>(undefined);
  const processedCommandIdRef = useRef<string | undefined>(undefined);
  const broadcastRef = useRef<BroadcastChannel | null>(null);

  currentSessionIdRef.current = currentSessionId;

  useEffect(() => {
    inputQueueStateRef.current = inputQueueState;
  }, [inputQueueState]);

  const readQueueState = useCallback((sessionId?: string) => {
    if (!sessionId || typeof localStorage === 'undefined') {
      return createEmptyInputQueueState();
    }

    try {
      const raw = localStorage.getItem(getInputQueueStorageKey(sessionId));
      return normalizeInputQueueState(raw ? JSON.parse(raw) : undefined);
    } catch (error) {
      console.error('read input queue failed:', error);
      return createEmptyInputQueueState();
    }
  }, []);

  const resolveQueueSessionId = useCallback((sessionId?: string) => {
    return resolveInputQueueSessionId(sessionId, {
      queueEnabled,
      getSessionId: getQueueSessionId,
    });
  }, [getQueueSessionId, queueEnabled]);

  // The route prop may lag behind createSession in controlled mode; keep the
  // queue bound to the confirmed session id during that small handoff window.
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
  }, [pendingRouteSessionIdRef]);

  const getVisibleQueueSessionId = useCallback(() => {
    return getInputQueueVisibleSessionId({
      currentSessionId: currentSessionIdRef.current,
      pendingRouteSessionId: pendingRouteSessionIdRef?.current,
      activeSessionId: currentQARef.current.activeSessionId,
    }, {
      queueEnabled,
      getSessionId: getQueueSessionId,
    });
  }, [getQueueSessionId, pendingRouteSessionIdRef, queueEnabled]);

  useEffect(() => {
    queueDrainBlockedSessionRef.current = currentQueueSessionId;
  }, [currentQueueSessionId]);

  /**
   * Persist the queue for one session and fan the change out to all tabs.
   * Empty queues are removed from localStorage so stale session keys do not
   * accumulate after the queue has been drained or cleared.
   */
  const commitQueueState = useCallback((sessionId: string | undefined, state: InputQueueState) => {
    if (!sessionId) return state;
    const normalized = normalizeInputQueueState(state);
    const empty = isInputQueueStateEmpty(normalized);
    const next = empty
      ? createEmptyInputQueueState(normalized.updatedAt)
      : normalized;

    try {
      if (empty) {
        localStorage.removeItem(getInputQueueStorageKey(sessionId));
      } else {
        localStorage.setItem(getInputQueueStorageKey(sessionId), JSON.stringify(next));
      }
    } catch (error) {
      console.error('write input queue failed:', error);
    }

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

  const withQueueMutationLock = useCallback(async <T,>(
    sessionId: string,
    fn: () => T | Promise<T>,
  ) => {
    const locks = getQueueLocks();
    if (!locks?.request) return fn();

    return locks.request(
      `agentscope-runtime-webui-input-queue-mutate:${sessionId}`,
      { mode: 'exclusive' },
      () => fn(),
    );
  }, []);

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

  const syncMessagesToPeerTabs = useCallback((
    sessionId: string | undefined,
    messages: IAgentScopeRuntimeWebUIMessage[],
  ) => {
    if (!queueEnabled || !sessionId) return;

    broadcastRef.current?.postMessage({
      type: 'input-queue-messages-change',
      sessionId,
      messages,
      sourceTabId: tabIdRef.current,
    });
  }, [queueEnabled]);

  const canExecuteQueue = useCallback((state = inputQueueStateRef.current) => {
    return isInputQueueOwner(state, tabIdRef.current);
  }, []);

  const withQueueSendLock = useCallback(async <T,>(
    sessionId: string,
    fn: () => Promise<T>,
  ) => {
    const locks = getQueueLocks();

    if (!locks?.request) return fn();

    return locks.request(
      `agentscope-runtime-webui-input-queue-send:${sessionId}`,
      { ifAvailable: true, mode: 'exclusive' },
      async lock => (lock ? fn() : undefined),
    );
  }, []);

  // Session queues are isolated by storage key, so switching sessions reloads
  // only that session's queue.
  useEffect(() => {
    const next = readQueueState(currentQueueSessionId);
    setInputQueueSessionId(currentQueueSessionId);
    inputQueueStateRef.current = next;
    setInputQueueState(next);
  }, [currentQueueSessionId, readQueueState]);

  /**
   * Keep multiple tabs for the same session in sync. The storage event covers
   * cross-tab updates; BroadcastChannel also updates the current tab after its
   * own write because storage events are not fired in the source document.
   */
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
        if (event.data?.type === 'input-queue-change') {
          applyRemoteState(event.data.sessionId, event.data.state);
          return;
        }

        if (event.data?.type === 'input-queue-messages-change') {
          if (event.data.sourceTabId === tabIdRef.current) return;
          if (event.data.sessionId !== getVisibleChatSessionId()) return;
          setMessages(event.data.messages || []);
        }
      };
    }

    return () => {
      window.removeEventListener('storage', handleStorage);
      broadcastRef.current?.close();
      broadcastRef.current = null;
    };
  }, [getVisibleChatSessionId, getVisibleQueueSessionId, setMessages]);

  /**
   * The first tab that starts the queue owns real sending. This heartbeat keeps
   * hidden-but-open tabs as owners, while newer tabs can only display and edit
   * the shared queue until the owner closes or becomes stale.
   */
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
    const timer = window.setInterval(refreshOwner, 5000);
    return () => {
      window.clearInterval(timer);
    };
  }, [canExecuteQueue, currentQueueSessionId, updateQueueState]);

  /**
   * TTL expiry does not trigger a React render by itself. Poll lightly so an
   * open peer tab can reclaim a queue after the original owner tab disappears.
   */
  useEffect(() => {
    const queueSessionId = currentQueueSessionId;
    if (!queueSessionId) return;

    const claimAvailableOwner = () => {
      const snapshot = readQueueState(queueSessionId);
      if (!shouldClaimInputQueueOwner(snapshot, tabIdRef.current)) return;

      void updateQueueState(queueSessionId, state => {
        if (!shouldClaimInputQueueOwner(state, tabIdRef.current)) return state;
        return assignInputQueueOwner(state, tabIdRef.current);
      });

      if (!snapshot.paused) {
        scheduleDrainQueue();
      }
    };

    claimAvailableOwner();
    const timer = window.setInterval(claimAvailableOwner, 5000);
    return () => {
      window.clearInterval(timer);
    };
  }, [currentQueueSessionId, readQueueState, scheduleDrainQueue, updateQueueState]);

  // Release ownership when the tab is actually leaving, not merely hidden.
  useEffect(() => {
    const queueSessionId = currentQueueSessionId;
    if (!queueSessionId) return;

    const releaseOwner = () => {
      void updateQueueState(queueSessionId, state => {
        if (state.ownerTabId !== tabIdRef.current) return state;

        return {
          ...state,
          ownerTabId: undefined,
          ownerUpdatedAt: undefined,
          updatedAt: Date.now(),
        };
      });
    };

    window.addEventListener('pagehide', releaseOwner);
    window.addEventListener('beforeunload', releaseOwner);
    return () => {
      window.removeEventListener('pagehide', releaseOwner);
      window.removeEventListener('beforeunload', releaseOwner);
    };
  }, [currentQueueSessionId, updateQueueState]);

  // Message handler
  const messageHandler = useChatMessageHandler({ currentQARef });

  // Session handler
  const sessionHandler = useChatSessionHandler();

  const getActiveChatSessionId = useCallback(() => {
    return getInputQueueVisibleChatSessionId({
      currentSessionId: sessionHandler.getCurrentSessionId(),
      pendingRouteSessionId: pendingRouteSessionIdRef?.current,
      activeSessionId: currentQARef.current.activeSessionId,
    });
  }, [pendingRouteSessionIdRef, sessionHandler]);

  const getActiveQueueSessionId = useCallback(() => {
    return resolveQueueSessionId(getActiveChatSessionId());
  }, [getActiveChatSessionId, resolveQueueSessionId]);

  const updateMessageAndSync = useCallback((message: IAgentScopeRuntimeWebUIMessage) => {
    messageHandler.updateMessage(message);
    const sessionId = currentQARef.current.activeSessionId || sessionHandler.getCurrentSessionId();
    syncMessagesToPeerTabs(
      sessionId,
      patchMessageSnapshot(messageHandler.getMessages(), message),
    );
  }, [messageHandler, sessionHandler, syncMessagesToPeerTabs]);

  /**
   * Finalize the current response and reset UI loading state.
   */
  const scheduleDrainQueue = useCallback(() => {
    if (drainTimerRef.current) {
      clearTimeout(drainTimerRef.current);
    }

    drainTimerRef.current = setTimeout(() => {
      drainTimerRef.current = null;
      void drainQueueRef.current?.();
    }, 0);
  }, []);

  const finishResponse = useCallback((status: 'finished' | 'interrupted' = 'finished') => {
    if (!currentQARef.current.response) return;

    const activeSessionId = currentQARef.current.activeSessionId;
    currentQARef.current.response.msgStatus = status;
    setLoading(false);
    ReactDOM.flushSync(() => {
      messageHandler.updateMessage(currentQARef.current.response);
    });
    const nextMessages = patchMessageSnapshot(
      messageHandler.getMessages(),
      currentQARef.current.response,
    );
    syncMessagesToPeerTabs(activeSessionId, nextMessages);

    sessionHandler.syncSessionMessages(
      nextMessages,
      activeSessionId,
    );
    const queueSessionId = resolveQueueSessionId(activeSessionId);
    if (queueDrainBlockedSessionRef.current === queueSessionId) {
      queueDrainBlockedSessionRef.current = undefined;
    }
    scheduleDrainQueue();
  }, [setLoading, messageHandler, sessionHandler, resolveQueueSessionId, scheduleDrainQueue, syncMessagesToPeerTabs]);

  // API request handling
  const { request, reconnect } = useChatRequest({
    currentQARef,
    updateMessage: updateMessageAndSync,
    getCurrentSessionId: sessionHandler.getCurrentSessionId,
    onFinish: () => finishResponse('finished'),
  });

  /**
   * Handle user message submission.
   */
  const submitNow = useCallback(async (
    data: Parameters<InputProps['onSubmit']>[0],
    options?: { sessionId?: string; queueSessionId?: string },
  ) => {
    // Queue sends are session-bound. If the user has already switched away,
    // do not abort or render into the newly visible conversation.
    const visibleQueueSessionId = getVisibleQueueSessionId();
    if (options?.queueSessionId && visibleQueueSessionId !== options.queueSessionId) {
      throw new Error('input queue session switched');
    }

    // 0. Abort any previous in-flight SSE. We do NOT call the cancel API here
    //    — the user is sending a new message, not explicitly cancelling.
    //    Cancel is only invoked from handleCancel.
    currentQARef.current.abortController?.abort();

    // 1. Ensure session exists FIRST. Bumping activeRequestId before this can
    //    race with the [currentSessionId] effect below: ensureSession may set
    //    a new sessionId, that effect then bumps activeRequestId again, and
    //    our own myRequestId becomes stale → the guard after sleep(100) bails
    //    out and the request is silently dropped. Establishing the session
    //    first guarantees the effect (if any) has flushed before we snapshot
    //    myRequestId.
    const submitSessionId = options?.sessionId || await sessionHandler.ensureSession(data.query);
    currentQARef.current.activeSessionId = submitSessionId;

    // A queued task belongs to the session it was dequeued from. If the user
    // switches conversations before the task starts rendering, restore it
    // instead of writing the request into the newly visible conversation.
    const submitQueueSessionId = options?.queueSessionId || resolveQueueSessionId(submitSessionId);
    const nextVisibleQueueSessionId = getVisibleQueueSessionId();
    if (options?.queueSessionId && nextVisibleQueueSessionId !== options.queueSessionId) {
      throw new Error('input queue session switched');
    }

    if (submitQueueSessionId) {
      await updateQueueState(submitQueueSessionId, state =>
        assignInputQueueOwner(state, tabIdRef.current),
      );
    }

    const myRequestId = ++currentQARef.current.activeRequestId;
    // activeSessionId was captured before queue ownership so session-less
    // /chat submissions can enqueue follow-up inputs immediately.

    // 2. Update session name (only for the first message)
    const messages = messageHandler.getMessages();
    if (submitSessionId) {
      await sessionHandler.updateSessionName(data.query, messages, submitSessionId);
    }

    // 3. Create user request message
    messageHandler.createRequestMessage(data);
    syncMessagesToPeerTabs(submitSessionId, messageHandler.getMessages());
    setLoading(true);
    await sleep(100);

    // If requestId changed during the sleep (session switch / cancel / new submit), bail out
    if (myRequestId !== currentQARef.current.activeRequestId) return;

    // 4. Create assistant response placeholder
    const responseMessage = messageHandler.createResponseMessage();
    syncMessagesToPeerTabs(
      submitSessionId,
      patchMessageSnapshot(messageHandler.getMessages(), responseMessage),
    );

    // 5. Gather history messages and fire the request
    const historyMessages = messageHandler.getHistoryMessages();
    await sessionHandler.syncSessionMessages(
      messageHandler.getMessages(),
      submitSessionId,
    );

    await request(historyMessages, data.biz_params, myRequestId);
    // mockRequest(mockdata);
  }, [getVisibleQueueSessionId, messageHandler, request, resolveQueueSessionId, sessionHandler, setLoading, syncMessagesToPeerTabs, updateQueueState]);

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

  const drainQueue = useCallback(async () => {
    const sessionId = getActiveQueueSessionId();
    if (
      !sessionId ||
      drainingRef.current ||
      getLoading() ||
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
          sessionId: getVisibleChatSessionId(),
          queueSessionId: sessionId,
        });
      } catch (error) {
        const sessionSwitched = isQueueSessionSwitchedError(error);
        if (!sessionSwitched) {
          setLoading(false);
        }
        await updateQueueState(sessionId, current => ({
          ...current,
          items: sessionSwitched
            ? [nextItem, ...current.items]
            : restoreFailedQueuedInput(current.items, nextItem, error),
          updatedAt: Date.now(),
        }));
      } finally {
        drainingRef.current = false;
      }
    });
  }, [
    canExecuteQueue,
    commitQueueState,
    getLoading,
    getActiveQueueSessionId,
    getVisibleChatSessionId,
    readQueueState,
    setLoading,
    submitNow,
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
  }, [canExecuteQueue, enqueueInput, getActiveQueueSessionId, getLoading, readQueueState, submitNow]);

  useEffect(() => {
    if (
      !getLoading() &&
      queueDrainBlockedSessionRef.current !== currentQueueSessionId &&
      inputQueueSessionId === currentQueueSessionId &&
      inputQueueState.items.length > 0 &&
      !inputQueueState.paused &&
      canExecuteQueue(inputQueueState)
    ) {
      scheduleDrainQueue();
    }
  }, [canExecuteQueue, currentQueueSessionId, getLoading, inputQueueSessionId, inputQueueState, scheduleDrainQueue]);


  const handleApproval = useCallback(async ({ input }) => {
    currentQARef.current.abortController?.abort();
    // Snapshot the current session id BEFORE bumping requestId, then bump.
    // Order matches handleSubmit so a concurrent session-change effect cannot
    // invalidate myRequestId between the bump and the sleep guard below.
    currentQARef.current.activeSessionId = sessionHandler.getCurrentSessionId();
    const myRequestId = ++currentQARef.current.activeRequestId;

    messageHandler.createApprovalMessage(input);

    setLoading(true);
    await sleep(100);

    if (myRequestId !== currentQARef.current.activeRequestId) return;

    messageHandler.createResponseMessage();
    const historyMessages = messageHandler.getHistoryMessages();
    await sessionHandler.syncSessionMessages(messageHandler.getMessages());

    await request(historyMessages, undefined, myRequestId);
  }, [messageHandler, sessionHandler, request, setLoading]);

  /**
   * Handle cancel / stop.
   * 1. Mark response as interrupted and reset UI (finishResponse).
   * 2. Invoke the cancel API immediately — do NOT wait for the next SSE
   *    chunk to deliver the cancellation (fixes "backend keeps running
   *    after stop" issue).
   * 3. Abort the SSE connection — its catch branch will see
   *    msgStatus === 'interrupted' and call builder.cancel() to flip the
   *    in-progress TEXT content to Canceled, so the trailing Markdown
   *    cursor ("...") disappears.
   *
   * NOTE: we intentionally do NOT bump activeRequestId here. Doing so
   * would make isStillActive() in processSSEResponse return false for
   * this very cancel, which would short-circuit the catch branch before
   * builder.cancel() runs and leave the trailing cursor blinking forever.
   * Stale-chunk protection still holds: abort() breaks the SSE loop
   * immediately, and the next submit / session switch will bump
   * activeRequestId on its own.
   */
  const handleCancel = useCallback(() => {
    finishResponse('interrupted');
    const sessionId = sessionHandler.getCurrentSessionId();
    const cancelFn = apiOptionsRef.current.cancel;
    if (cancelFn && sessionId) {
      try {
        cancelFn({ session_id: sessionId });
      } catch (e) {
        console.error('cancel api failed:', e);
      }
    }
    currentQARef.current.abortController?.abort();
  }, [finishResponse, sessionHandler]);

  /**
   * "Send now" is stored as a command and consumed by the queue owner. The UI
   * only exposes this action to the owner tab so newer tabs remain view/edit
   * only for real sending controls.
   */
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

      drainingRef.current = true;
      handleCancel();
      await Promise.resolve(submitNow(target.data, {
        sessionId: getVisibleChatSessionId(),
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
    getVisibleChatSessionId,
    handleCancel,
    inputQueueState,
    readQueueState,
    submitNow,
    updateQueueState,
    withQueueSendLock,
  ]);

  /**
   * Handle regenerate (retry the last assistant response).
   */
  const handleRegenerate = useCallback(async (messageId: string) => {
    currentQARef.current.abortController?.abort();
    currentQARef.current.activeSessionId = sessionHandler.getCurrentSessionId();
    const myRequestId = ++currentQARef.current.activeRequestId;

    setLoading(true);

    // 1. Remove old message
    messageHandler.removeMessageById(messageId);

    // 2. Create new response placeholder
    currentQARef.current.abortController = new AbortController();
    messageHandler.createResponseMessage();

    // 3. Fire the request
    const historyMessages = messageHandler.getHistoryMessages();
    await request(historyMessages, undefined, myRequestId);
  }, [messageHandler, request, sessionHandler, setLoading]);

  /**
   * Handle SSE reconnection (when switching back to an unfinished conversation).
   * If the reconnect API returns no body or the stream ends without a completion event,
   * treat it as idle: remove the empty placeholder and reset loading.
   */
  const handleReconnect = useCallback(async (sessionId: string) => {
    if (!sessionId || sessionId !== currentSessionIdRef.current) return;

    currentQARef.current.abortController?.abort();
    currentQARef.current.abortController = new AbortController();
    const myRequestId = ++currentQARef.current.activeRequestId;
    currentQARef.current.activeSessionId = sessionId;
    setLoading(true);

    const existingResponse = findGeneratingResponse(messageHandler.getMessages());
    if (existingResponse) {
      const activeResponse = {
        ...existingResponse,
        history: undefined,
      } as IAgentScopeRuntimeWebUIMessage;
      currentQARef.current.response = activeResponse;
      messageHandler.updateMessage(activeResponse);
    } else {
      messageHandler.createResponseMessage();
    }

    await reconnect(sessionId, myRequestId);

    // If session was switched or a new request fired during reconnect, bail out
    if (myRequestId !== currentQARef.current.activeRequestId) return;

    // If the response is still in 'generating' state after reconnect completes,
    // onFinish() was never called (no response body, or stream closed without a completion event).
    // Treat as idle: remove the empty placeholder and reset loading.
    // HTTP errors and normal SSE completions both call onFinish() → msgStatus becomes 'finished',
    // so they are correctly excluded from this cleanup.
    if (currentQARef.current.response?.msgStatus === 'generating') {
      setLoading(false);
      if (currentQARef.current.response?.id) {
        messageHandler.removeMessageById(currentQARef.current.response.id);
      }
      currentQARef.current.response = undefined;
      const queueSessionId = resolveQueueSessionId(sessionId);
      if (queueDrainBlockedSessionRef.current === queueSessionId) {
        queueDrainBlockedSessionRef.current = undefined;
      }
      scheduleDrainQueue();
    }
  }, [messageHandler, reconnect, resolveQueueSessionId, scheduleDrainQueue, setLoading]);

  // On session switch: abort current SSE (without notifying backend cancel)
  // and reset state. Also increment activeRequestId so any residual SSE
  // chunks from the old session are discarded, preventing cross-session leakage.
  //
  // IMPORTANT: only bump on a real session change. Running this on initial
  // mount or when sessionId merely transitions from undefined → <same id>
  // (e.g. after route navigate / refreshKey churn) would invalidate the
  // myRequestId taken by an in-flight handleSubmit and silently drop the
  // outgoing chat request — that was the regression that made existing
  // sessions unable to send messages until a new chat was created.
  useEffect(() => {
    const prevSessionId = currentQARef.current.activeSessionId;
    if (!prevSessionId || prevSessionId === currentSessionId) {
      // First mount, or no real switch: just sync the snapshot, do not bump.
      currentQARef.current.activeSessionId = currentSessionId;
      return;
    }

    currentQARef.current.abortController?.abort();
    currentQARef.current = {
      request: undefined,
      response: undefined,
      abortController: undefined,
      activeRequestId: currentQARef.current.activeRequestId + 1,
      activeSessionId: currentSessionId,
    };

    return () => {
      if (drainTimerRef.current) {
        clearTimeout(drainTimerRef.current);
        drainTimerRef.current = null;
      }
      currentQARef.current.abortController?.abort();
      currentQARef.current.activeRequestId += 1;
    };
  }, [currentSessionId]);

  // Listen for reconnect events
  useChatAnywhereEventEmitter({
    type: 'handleReconnect',
    callback: async (data) => {
      await handleReconnect(data.detail.session_id);
    }
  }, [handleReconnect]);

  useChatAnywhereEventEmitter({
    type: 'handleSessionLoaded',
    callback: (data) => {
      const sessionId = data.detail?.session_id;
      const queueSessionId = resolveQueueSessionId(sessionId);
      if (queueSessionId !== currentQueueSessionId) return;

      if (data.detail?.generating) return;

      if (queueDrainBlockedSessionRef.current === queueSessionId) {
        queueDrainBlockedSessionRef.current = undefined;
      }

      scheduleDrainQueue();
    },
  }, [currentQueueSessionId, resolveQueueSessionId, scheduleDrainQueue]);

  // Listen for regenerate events
  useChatAnywhereEventEmitter({
    type: 'handleReplace',
    callback: async (data) => {
      await handleRegenerate(data.detail.id);
    }
  });

  useChatAnywhereEventEmitter({
    type: 'handleSubmit',
    callback: async (data) => {
      await handleSubmit(data.detail);
    }
  }, [handleSubmit]);

  useChatAnywhereEventEmitter({
    type: 'handleApproval',
    callback: async (data) => {
      await handleApproval(data.detail);
    }
  }, [handleApproval]);

  const visibleInputQueueState = inputQueueSessionId === currentQueueSessionId
    ? inputQueueState
    : createEmptyInputQueueState();

  return {
    handleSubmit,
    handleCancel,
    inputQueueEnabled: queueEnabled,
    inputQueue: visibleInputQueueState.items,
    inputQueuePaused: visibleInputQueueState.paused,
    inputQueueIsOwner: canExecuteQueue(visibleInputQueueState),
    enqueueQueuedInput: enqueueInput,
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
      scheduleDrainQueue();
    },
    toggleQueuePaused: () => {
      const sessionId = getActiveQueueSessionId();
      void updateQueueState(sessionId, state => ({
        ...state,
        paused: canExecuteQueue(state) ? !state.paused : state.paused,
        updatedAt: Date.now(),
      }));
      scheduleDrainQueue();
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
