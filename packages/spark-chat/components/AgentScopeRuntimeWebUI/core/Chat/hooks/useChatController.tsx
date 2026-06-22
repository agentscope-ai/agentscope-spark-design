import { sleep } from "@agentscope-ai/chat";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useContextSelector } from "use-context-selector";
import { ChatAnywhereInputContext } from "../../Context/ChatAnywhereInputContext";
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
  updateQueuedInputQuery,
  type InputQueueState,
  type QueueEnqueueResult,
} from "../InputQueue";
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

/**
 * Chat controller hook — coordinates all chat-related operations.
 */
export default function useChatController() {
  const setLoading = useContextSelector(ChatAnywhereInputContext, v => v.setLoading);
  const getLoading = useContextSelector(ChatAnywhereInputContext, v => v.getLoading);
  const currentSessionId = useContextSelector(ChatAnywhereSessionsContext, v => v.currentSessionId);
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
  const inputQueueStateRef = useRef<InputQueueState>(inputQueueState);
  const drainTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const drainingRef = useRef(false);
  const drainQueueRef = useRef<(() => Promise<void>) | null>(null);
  const processedCommandIdRef = useRef<string | undefined>(undefined);
  const broadcastRef = useRef<BroadcastChannel | null>(null);

  useEffect(() => {
    currentSessionIdRef.current = currentSessionId;
  }, [currentSessionId]);

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
    if (!queueEnabled) return undefined;
    const resolved = getQueueSessionId?.(sessionId) ?? sessionId;
    if (!resolved) return undefined;
    return resolved;
  }, [getQueueSessionId, queueEnabled]);

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

    if (resolveQueueSessionId(currentSessionIdRef.current) === sessionId) {
      inputQueueStateRef.current = next;
      setInputQueueState(next);
    }

    broadcastRef.current?.postMessage({
      type: 'input-queue-change',
      sessionId,
      state: next,
    });

    return next;
  }, [resolveQueueSessionId]);

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
    const queueSessionId = resolveQueueSessionId(currentSessionId);
    const next = readQueueState(queueSessionId);
    inputQueueStateRef.current = next;
    setInputQueueState(next);
  }, [currentSessionId, readQueueState, resolveQueueSessionId]);

  /**
   * Keep multiple tabs for the same session in sync. The storage event covers
   * cross-tab updates; BroadcastChannel also updates the current tab after its
   * own write because storage events are not fired in the source document.
   */
  useEffect(() => {
    const applyRemoteState = (sessionId: string, state: InputQueueState) => {
      if (sessionId !== resolveQueueSessionId(currentSessionIdRef.current)) return;
      const next = normalizeInputQueueState(state);
      inputQueueStateRef.current = next;
      setInputQueueState(next);
    };

    const handleStorage = (event: StorageEvent) => {
      const sessionId = resolveQueueSessionId(currentSessionIdRef.current);
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
        }
      };
    }

    return () => {
      window.removeEventListener('storage', handleStorage);
      broadcastRef.current?.close();
      broadcastRef.current = null;
    };
  }, [resolveQueueSessionId]);

  /**
   * The first tab that starts the queue owns real sending. This heartbeat keeps
   * hidden-but-open tabs as owners, while newer tabs can only display and edit
   * the shared queue until the owner closes or becomes stale.
   */
  useEffect(() => {
    const queueSessionId = resolveQueueSessionId(currentSessionId);
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
  }, [canExecuteQueue, currentSessionId, resolveQueueSessionId, updateQueueState]);

  // Release ownership when the tab is actually leaving, not merely hidden.
  useEffect(() => {
    const queueSessionId = resolveQueueSessionId(currentSessionId);
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
  }, [currentSessionId, resolveQueueSessionId, updateQueueState]);

  // Message handler
  const messageHandler = useChatMessageHandler({ currentQARef });

  // Session handler
  const sessionHandler = useChatSessionHandler();

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

    currentQARef.current.response.msgStatus = status;
    setLoading(false);
    ReactDOM.flushSync(() => {
      messageHandler.updateMessage(currentQARef.current.response);
    });

    sessionHandler.syncSessionMessages(
      messageHandler.getMessages(),
      currentQARef.current.activeSessionId,
    );
    scheduleDrainQueue();
  }, [setLoading, messageHandler, sessionHandler, scheduleDrainQueue]);

  // API request handling
  const { request, reconnect } = useChatRequest({
    currentQARef,
    updateMessage: messageHandler.updateMessage,
    getCurrentSessionId: sessionHandler.getCurrentSessionId,
    onFinish: () => finishResponse('finished'),
  });

  /**
   * Handle user message submission.
   */
  const submitNow = useCallback<InputProps['onSubmit']>(async (data) => {
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
    const submitSessionId = await sessionHandler.ensureSession(data.query);
    const queueSessionId = resolveQueueSessionId(submitSessionId);
    if (queueSessionId) {
      await updateQueueState(queueSessionId, state =>
        assignInputQueueOwner(state, tabIdRef.current),
      );
    }

    const myRequestId = ++currentQARef.current.activeRequestId;
    // Snapshot current session id for downstream SSE guard checks
    currentQARef.current.activeSessionId = submitSessionId;

    // 2. Update session name (only for the first message)
    const messages = messageHandler.getMessages();
    if (submitSessionId) {
      await sessionHandler.updateSessionName(data.query, messages, submitSessionId);
    }

    // 3. Create user request message
    messageHandler.createRequestMessage(data);
    setLoading(true);
    await sleep(100);

    // If requestId changed during the sleep (session switch / cancel / new submit), bail out
    if (myRequestId !== currentQARef.current.activeRequestId) return;

    // 4. Create assistant response placeholder
    messageHandler.createResponseMessage();

    // 5. Gather history messages and fire the request
    const historyMessages = messageHandler.getHistoryMessages();
    await sessionHandler.syncSessionMessages(
      messageHandler.getMessages(),
      submitSessionId,
    );

    await request(historyMessages, data.biz_params, myRequestId);
    // mockRequest(mockdata);
  }, [messageHandler, request, resolveQueueSessionId, sessionHandler, setLoading, updateQueueState]);

  const enqueueInput = useCallback(async (data: Parameters<InputProps['onSubmit']>[0]): Promise<QueueEnqueueResult> => {
    const ensuredSessionId = await sessionHandler.ensureSession(data.query);
    const sessionId = resolveQueueSessionId(
      ensuredSessionId || currentSessionIdRef.current,
    );
    if (!sessionId) return { ok: false, reason: 'session-not-ready' };

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
  }, [onQueueFull, queueMaxSize, resolveQueueSessionId, sessionHandler, updateQueueState]);

  const drainQueue = useCallback(async () => {
    const sessionId = resolveQueueSessionId(
      sessionHandler.getCurrentSessionId() || currentSessionIdRef.current,
    );
    if (!sessionId || drainingRef.current || getLoading()) return;

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
        await submitNow(nextItem.data);
      } catch (error) {
        setLoading(false);
        await updateQueueState(sessionId, current => ({
          ...current,
          items: restoreFailedQueuedInput(current.items, nextItem, error),
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
    readQueueState,
    resolveQueueSessionId,
    sessionHandler,
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
    const sessionId = resolveQueueSessionId(
      sessionHandler.getCurrentSessionId() || currentSessionIdRef.current,
    );
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
  }, [canExecuteQueue, enqueueInput, getLoading, readQueueState, resolveQueueSessionId, sessionHandler, submitNow]);

  useEffect(() => {
    if (
      !getLoading() &&
      inputQueueState.items.length > 0 &&
      !inputQueueState.paused &&
      canExecuteQueue(inputQueueState)
    ) {
      scheduleDrainQueue();
    }
  }, [canExecuteQueue, getLoading, inputQueueState, scheduleDrainQueue]);


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
    const sessionId = resolveQueueSessionId(currentSessionId);
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
      await Promise.resolve(submitNow(target.data)).finally(() => {
        drainingRef.current = false;
      });
    });
  }, [
    canExecuteQueue,
    currentSessionId,
    handleCancel,
    inputQueueState,
    readQueueState,
    resolveQueueSessionId,
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
    currentQARef.current.abortController?.abort();
    currentQARef.current.abortController = new AbortController();
    const myRequestId = ++currentQARef.current.activeRequestId;
    currentQARef.current.activeSessionId = sessionId;
    setLoading(true);

    messageHandler.createResponseMessage();

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
    }
  }, [messageHandler, reconnect, setLoading]);

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


  return {
    handleSubmit,
    handleCancel,
    inputQueueEnabled: queueEnabled,
    inputQueue: inputQueueState.items,
    inputQueuePaused: inputQueueState.paused,
    inputQueueIsOwner: canExecuteQueue(inputQueueState),
    enqueueQueuedInput: enqueueInput,
    removeQueuedInput: (id: string) => {
      const sessionId = resolveQueueSessionId(sessionHandler.getCurrentSessionId() || currentSessionIdRef.current);
      void updateQueueState(sessionId, state => ({
        ...state,
        items: removeQueuedInput(state.items, id),
        updatedAt: Date.now(),
      }));
    },
    clearQueuedInputs: () => {
      const sessionId = resolveQueueSessionId(sessionHandler.getCurrentSessionId() || currentSessionIdRef.current);
      void updateQueueState(sessionId, state => ({
        ...state,
        items: [],
        command: undefined,
        updatedAt: Date.now(),
      }));
    },
    retryQueuedInput: (id: string) => {
      const sessionId = resolveQueueSessionId(sessionHandler.getCurrentSessionId() || currentSessionIdRef.current);
      void updateQueueState(sessionId, state => ({
        ...state,
        items: retryQueuedInput(state.items, id),
        updatedAt: Date.now(),
      }));
      scheduleDrainQueue();
    },
    toggleQueuePaused: () => {
      const sessionId = resolveQueueSessionId(sessionHandler.getCurrentSessionId() || currentSessionIdRef.current);
      void updateQueueState(sessionId, state => ({
        ...state,
        paused: canExecuteQueue(state) ? !state.paused : state.paused,
        updatedAt: Date.now(),
      }));
      scheduleDrainQueue();
    },
    reorderQueuedInput: (sourceId: string, targetId: string) => {
      const sessionId = resolveQueueSessionId(sessionHandler.getCurrentSessionId() || currentSessionIdRef.current);
      void updateQueueState(sessionId, state => ({
        ...state,
        items: reorderQueuedInput(state.items, sourceId, targetId),
        updatedAt: Date.now(),
      }));
    },
    updateQueuedInputQuery: (id: string, query: string) => {
      const sessionId = resolveQueueSessionId(sessionHandler.getCurrentSessionId() || currentSessionIdRef.current);
      void updateQueueState(sessionId, state => ({
        ...state,
        items: updateQueuedInputQuery(state.items, id, query),
        updatedAt: Date.now(),
      }));
    },
    sendQueuedInputNow: (id: string) => {
      const sessionId = resolveQueueSessionId(sessionHandler.getCurrentSessionId() || currentSessionIdRef.current);
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
