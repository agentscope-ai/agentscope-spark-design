import { IAgentScopeRuntimeWebUIMessage, sleep } from '@agentscope-ai/chat';
import { useCallback, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import { useContextSelector } from 'use-context-selector';
import { ChatAnywhereInputContext } from '../../Context/ChatAnywhereInputContext';
import { useChatAnywhereOptions } from '../../Context/ChatAnywhereOptionsContext';
import { ChatAnywhereSessionsContext } from '../../Context/ChatAnywhereSessionsContext';
import useChatAnywhereEventEmitter from '../../Context/useChatAnywhereEventEmitter';
import { InputProps } from '../Input';
import useChatMessageHandler from './useChatMessageHandler';
import useChatRequest from './useChatRequest';
import useChatSessionHandler from './useChatSessionHandler';
// import mockdata from '../../mock/mock.json'

/**
 * Chat controller hook — coordinates all chat-related operations.
 */
export default function useChatController() {
  const setLoading = useContextSelector(
    ChatAnywhereInputContext,
    (v) => v.setLoading,
  );
  const currentSessionId = useContextSelector(
    ChatAnywhereSessionsContext,
    (v) => v.currentSessionId,
  );
  const apiOptions = useChatAnywhereOptions((v) => v.api);
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

  // Message handler
  const messageHandler = useChatMessageHandler({ currentQARef });

  // Session handler
  const sessionHandler = useChatSessionHandler();

  /**
   * Finalize the current response and reset UI loading state.
   */
  const finishResponse = useCallback(
    (status: 'finished' | 'interrupted' = 'finished') => {
      if (!currentQARef.current.response) return;

      currentQARef.current.response.msgStatus = status;
      setLoading(false);
      ReactDOM.flushSync(() => {
        messageHandler.updateMessage(currentQARef.current.response);
      });

      sessionHandler.syncSessionMessages(messageHandler.getMessages());
    },
    [setLoading, messageHandler, sessionHandler],
  );

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
  const handleSubmit = useCallback<InputProps['onSubmit']>(
    async (data) => {
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
      await sessionHandler.ensureSession(data.query);

      const myRequestId = ++currentQARef.current.activeRequestId;
      // Snapshot current session id for downstream SSE guard checks
      currentQARef.current.activeSessionId =
        sessionHandler.getCurrentSessionId();

      // 2. Update session name (only for the first message)
      const messages = messageHandler.getMessages();
      if (sessionHandler.getCurrentSessionId()) {
        await sessionHandler.updateSessionName(data.query, messages);
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
      await sessionHandler.syncSessionMessages(messageHandler.getMessages());

      await request(
        historyMessages,
        data.biz_params,
        myRequestId,
        data.mentions,
      );
      // mockRequest(mockdata);
    },
    [messageHandler, sessionHandler, request, setLoading],
  );

  const handleApproval = useCallback(
    async ({ input }) => {
      currentQARef.current.abortController?.abort();
      // Snapshot the current session id BEFORE bumping requestId, then bump.
      // Order matches handleSubmit so a concurrent session-change effect cannot
      // invalidate myRequestId between the bump and the sleep guard below.
      currentQARef.current.activeSessionId =
        sessionHandler.getCurrentSessionId();
      const myRequestId = ++currentQARef.current.activeRequestId;

      messageHandler.createApprovalMessage(input);

      setLoading(true);
      await sleep(100);

      if (myRequestId !== currentQARef.current.activeRequestId) return;

      messageHandler.createResponseMessage();
      const historyMessages = messageHandler.getHistoryMessages();
      await sessionHandler.syncSessionMessages(messageHandler.getMessages());

      await request(historyMessages, undefined, myRequestId);
    },
    [messageHandler, sessionHandler, request, setLoading],
  );

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
   * Handle regenerate (retry the last assistant response).
   */
  const handleRegenerate = useCallback(
    async (messageId: string) => {
      currentQARef.current.abortController?.abort();
      currentQARef.current.activeSessionId =
        sessionHandler.getCurrentSessionId();
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
    },
    [messageHandler, request, sessionHandler, setLoading],
  );

  /**
   * Handle SSE reconnection (when switching back to an unfinished conversation).
   * If the reconnect API returns no body or the stream ends without a completion event,
   * treat it as idle: remove the empty placeholder and reset loading.
   */
  const handleReconnect = useCallback(
    async (sessionId: string) => {
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
    },
    [messageHandler, reconnect, setLoading],
  );

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
      currentQARef.current.abortController?.abort();
      currentQARef.current.activeRequestId += 1;
    };
  }, [currentSessionId]);

  // Listen for reconnect events
  useChatAnywhereEventEmitter(
    {
      type: 'handleReconnect',
      callback: async (data) => {
        await handleReconnect(data.detail.session_id);
      },
    },
    [handleReconnect],
  );

  // Listen for regenerate events
  useChatAnywhereEventEmitter({
    type: 'handleReplace',
    callback: async (data) => {
      await handleRegenerate(data.detail.id);
    },
  });

  useChatAnywhereEventEmitter(
    {
      type: 'handleSubmit',
      callback: async (data) => {
        await handleSubmit(data.detail);
      },
    },
    [handleSubmit],
  );

  useChatAnywhereEventEmitter(
    {
      type: 'handleApproval',
      callback: async (data) => {
        await handleApproval(data.detail);
      },
    },
    [handleApproval],
  );

  return {
    handleSubmit,
    handleCancel,
  };
}
