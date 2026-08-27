import { useCallback, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import { useContextSelector } from 'use-context-selector';
import sleep from '../../../../Util/sleep';
import type { IAgentScopeRuntimeMessage } from '../../AgentScopeRuntime/types';
import { ChatAnywhereInputContext } from '../../Context/ChatAnywhereInputContext';
import { useChatAnywhereOptions } from '../../Context/ChatAnywhereOptionsContext';
import { ChatAnywhereSessionsContext } from '../../Context/ChatAnywhereSessionsContext';
import useChatAnywhereEventEmitter from '../../Context/useChatAnywhereEventEmitter';
import type { IAgentScopeRuntimeWebUIMessage } from '../../types';
import type { InputProps } from '../Input';
import { registerInputQueueSubmission } from '../InputQueue/submission';
import {
  createChatSubmissionRequest,
  patchChatMessageSnapshot,
} from '../submission';
import useChatMessageHandler from './useChatMessageHandler';
import useChatRequest from './useChatRequest';
import useChatSessionHandler from './useChatSessionHandler';
import useInputQueueController, {
  InputQueueSubmitError,
  type QueueSubmitNow,
} from './useInputQueueController';
// import mockdata from '../../mock/mock.json'

function findGeneratingResponse(messages: IAgentScopeRuntimeWebUIMessage[]) {
  for (let index = messages.length - 1; index >= 0; index -= 1) {
    const message = messages[index];
    if (message.role === 'assistant' && message.msgStatus === 'generating') {
      return message;
    }
  }
}

/**
 * Chat controller hook - coordinates chat requests, SSE lifecycle, and session
 * events. Input queue storage/ownership/draining is delegated to
 * useInputQueueController.
 */
export default function useChatController() {
  const getLoading = useContextSelector(
    ChatAnywhereInputContext,
    (v) => v.getLoading,
  );
  const setSessionLoading = useContextSelector(
    ChatAnywhereInputContext,
    (v) => v.setSessionLoading,
  );
  const getSessionLoading = useContextSelector(
    ChatAnywhereInputContext,
    (v) => v.getSessionLoading,
  );
  const currentSessionId = useContextSelector(
    ChatAnywhereSessionsContext,
    (v) => v.currentSessionId,
  );
  const pendingRouteSessionIdRef = useContextSelector(
    ChatAnywhereSessionsContext,
    (v) => v.pendingRouteSessionIdRef,
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
     * own requestId against this value before every write so stale streams stop
     * writing into the wrong session.
     */
    activeRequestId: number;
    /**
     * Snapshot of the session id associated with the active request.
     */
    activeSessionId?: string;
    /**
     * Queue storage key associated with the active request. Host apps may
     * replace a local route id with a backend id while the request is still
     * streaming, so queue ownership must follow both aliases.
     */
    activeQueueSessionId?: string;
  }>({ activeRequestId: 0 });
  const currentSessionIdRef = useRef(currentSessionId);
  const submitNowRef = useRef<QueueSubmitNow | null>(null);
  const handleCancelRef = useRef<(() => void) | null>(null);
  const handleReconnectRef = useRef<
    ((sessionId: string) => Promise<void>) | null
  >(null);

  currentSessionIdRef.current = currentSessionId;

  const messageHandler = useChatMessageHandler({ currentQARef });
  const sessionHandler = useChatSessionHandler();

  const {
    queueEnabled,
    inputQueue,
    inputQueuePaused,
    inputQueueIsOwner,
    handleSubmit,
    enqueueQueuedInput,
    syncMessagesToPeerTabs,
    getChatSessionIdForQueue,
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
    removeQueuedInput,
    clearQueuedInputs,
    retryQueuedInput,
    toggleQueuePaused,
    reorderQueuedInput,
    updateQueuedInputQuery,
    sendQueuedInputNow,
  } = useInputQueueController({
    currentQARef,
    currentSessionId,
    currentSessionIdRef,
    pendingRouteSessionIdRef,
    getLoading,
    setSessionLoading,
    getSessionLoading,
    getCurrentSessionId: sessionHandler.getCurrentSessionId,
    submitNowRef,
    handleCancelRef,
    handleReconnectRef,
  });

  const updateMessageAndSync = useCallback(
    (message: IAgentScopeRuntimeWebUIMessage, sessionId: string) => {
      messageHandler.updateMessage(message, sessionId);
      syncMessagesToPeerTabs(
        sessionId,
        patchChatMessageSnapshot(
          messageHandler.getSessionMessages(sessionId),
          message,
        ),
      );
    },
    [messageHandler, syncMessagesToPeerTabs],
  );

  const finishResponse = useCallback(
    (
      sessionId: string,
      requestId: number,
      status: 'finished' | 'interrupted' = 'finished',
    ) => {
      if (currentQARef.current.activeRequestId !== requestId) return;
      const response = currentQARef.current.response;
      if (!response) return;

      response.msgStatus = status;
      setSessionLoading(sessionId, false);
      ReactDOM.flushSync(() => {
        messageHandler.updateMessage(response, sessionId);
      });

      const nextMessages = patchChatMessageSnapshot(
        messageHandler.getSessionMessages(sessionId),
        response,
      );
      syncMessagesToPeerTabs(sessionId, nextMessages);
      sessionHandler.syncSessionMessages(nextMessages, sessionId);
      handleResponseFinished(sessionId);
    },
    [
      handleResponseFinished,
      messageHandler,
      sessionHandler,
      setSessionLoading,
      syncMessagesToPeerTabs,
    ],
  );

  const { request, reconnect } = useChatRequest({
    currentQARef,
    updateMessage: updateMessageAndSync,
    onFinish: (sessionId, requestId) =>
      finishResponse(sessionId, requestId, 'finished'),
  });

  const submitNow = useCallback<QueueSubmitNow>(
    async (
      data: Parameters<InputProps['onSubmit']>[0],
      options?: {
        sessionId?: string;
        queueSessionId?: string;
        queueItemId?: string;
        onRequestAccepted?: () => void | Promise<void>;
        shouldRestoreOnError?: (error: unknown) => boolean | Promise<boolean>;
      },
    ) => {
      const queuedSubmitSessionId = options?.queueSessionId
        ? getChatSessionIdForQueue(options.queueSessionId, options.sessionId)
        : undefined;
      if (options?.queueSessionId && !queuedSubmitSessionId) {
        throw new Error('input queue session switched');
      }

      currentQARef.current.abortController?.abort();
      const myRequestId = ++currentQARef.current.activeRequestId;
      const assertActive = () => {
        if (myRequestId !== currentQARef.current.activeRequestId) {
          throw new Error('chat request aborted');
        }
      };

      const submitSessionId =
        queuedSubmitSessionId ||
        options?.sessionId ||
        data.session_id ||
        (await sessionHandler.ensureSession(data.query));
      assertActive();
      if (!submitSessionId) {
        throw new Error('chat session is not ready');
      }
      const submissionData = createChatSubmissionRequest(data, submitSessionId);
      currentQARef.current.activeSessionId = submitSessionId;

      const resolvedSubmitQueueSessionId =
        resolveQueueSessionId(submitSessionId);
      const submitQueueSessionId =
        options?.queueSessionId || resolvedSubmitQueueSessionId;
      currentQARef.current.activeQueueSessionId = submitQueueSessionId;
      if (
        options?.queueSessionId &&
        resolvedSubmitQueueSessionId !== options.queueSessionId &&
        submitSessionId !== options.queueSessionId
      ) {
        throw new Error('input queue session switched');
      }

      await assignOwnerForSubmit(submitQueueSessionId);
      assertActive();
      markQueueSessionActive(submitQueueSessionId);
      const unregisterSubmission = registerInputQueueSubmission(
        submitQueueSessionId,
        () => handleCancelRef.current?.(),
      );

      let requestMessage: IAgentScopeRuntimeWebUIMessage | undefined;
      let responseMessage: IAgentScopeRuntimeWebUIMessage | undefined;
      let requestAccepted = false;
      try {
        const messages = messageHandler.getSessionMessages(submitSessionId);
        await sessionHandler.updateSessionName(
          data.query,
          messages,
          submitSessionId,
        );
        assertActive();

        requestMessage = messageHandler.createRequestMessage(
          { ...data, ...submissionData },
          submitSessionId,
        );
        const requestSignal = currentQARef.current.abortController?.signal;
        syncMessagesToPeerTabs(
          submitSessionId,
          messageHandler.getSessionMessages(submitSessionId),
        );
        setSessionLoading(submitSessionId, true);
        await sleep(100);
        assertActive();

        responseMessage = messageHandler.createResponseMessage(submitSessionId);
        syncMessagesToPeerTabs(
          submitSessionId,
          patchChatMessageSnapshot(
            messageHandler.getSessionMessages(submitSessionId),
            responseMessage,
          ),
        );

        const historyMessages =
          messageHandler.getHistoryMessages(submitSessionId);
        await sessionHandler.syncSessionMessages(
          messageHandler.getSessionMessages(submitSessionId),
          submitSessionId,
        );
        assertActive();

        const accepted = await request(historyMessages, submissionData, {
          requestId: myRequestId,
          sessionId: submitSessionId,
          signal: requestSignal,
          onAccepted: async () => {
            requestAccepted = true;
            await options?.onRequestAccepted?.();
          },
          queueItemId: options?.queueItemId,
        });
        if (!accepted) {
          throw new Error('chat request aborted');
        }
      } catch (error) {
        markQueueSessionIdle(submitQueueSessionId);
        if (options?.queueSessionId) {
          let shouldRestore = true;
          try {
            shouldRestore = requestAccepted
              ? false
              : (await options.shouldRestoreOnError?.(error)) !== false;
          } catch (restoreCheckError) {
            console.error(
              'input queue restore check failed:',
              restoreCheckError,
            );
          }

          if (shouldRestore) {
            if (responseMessage) {
              messageHandler.removeMessageById(
                responseMessage.id,
                submitSessionId,
              );
            }
            if (requestMessage) {
              messageHandler.removeMessageById(
                requestMessage.id,
                submitSessionId,
              );
            }
            if (currentQARef.current.request?.id === requestMessage?.id) {
              currentQARef.current.request = undefined;
            }
            if (currentQARef.current.response?.id === responseMessage?.id) {
              currentQARef.current.response = undefined;
            }
            const rolledBackMessages =
              messageHandler.getSessionMessages(submitSessionId);
            syncMessagesToPeerTabs(submitSessionId, rolledBackMessages);
            try {
              await sessionHandler.syncSessionMessages(
                rolledBackMessages,
                submitSessionId,
              );
            } catch (rollbackError) {
              console.error(
                'input queue message rollback failed:',
                rollbackError,
              );
            }
          }
          setSessionLoading(submitSessionId, false);
          throw new InputQueueSubmitError(error, shouldRestore);
        }
        setSessionLoading(submitSessionId, false);
        console.error(error);
      } finally {
        unregisterSubmission();
      }
      // mockRequest(mockdata);
    },
    [
      assignOwnerForSubmit,
      getChatSessionIdForQueue,
      markQueueSessionActive,
      markQueueSessionIdle,
      messageHandler,
      request,
      resolveQueueSessionId,
      sessionHandler,
      setSessionLoading,
      syncMessagesToPeerTabs,
    ],
  );

  submitNowRef.current = submitNow;

  const handleApproval = useCallback(
    async ({ input }: { input: IAgentScopeRuntimeMessage[] }) => {
      currentQARef.current.abortController?.abort();
      const sessionId = sessionHandler.getCurrentSessionId();
      if (!sessionId) return;
      currentQARef.current.activeSessionId = sessionId;
      const myRequestId = ++currentQARef.current.activeRequestId;

      messageHandler.createApprovalMessage(input, sessionId);
      const requestSignal = currentQARef.current.abortController?.signal;

      setSessionLoading(sessionId, true);
      await sleep(100);

      if (myRequestId !== currentQARef.current.activeRequestId) {
        setSessionLoading(sessionId, false);
        return;
      }

      const responseMessage = messageHandler.createResponseMessage(sessionId);
      const historyMessages = messageHandler.getHistoryMessages(sessionId);
      await sessionHandler.syncSessionMessages(
        messageHandler.getSessionMessages(sessionId),
        sessionId,
      );
      if (myRequestId !== currentQARef.current.activeRequestId) {
        setSessionLoading(sessionId, false);
        messageHandler.removeMessageById(responseMessage.id, sessionId);
        if (currentQARef.current.response?.id === responseMessage.id) {
          currentQARef.current.response = undefined;
        }
        return;
      }

      await request(
        historyMessages,
        createChatSubmissionRequest(undefined, sessionId),
        {
          requestId: myRequestId,
          sessionId,
          signal: requestSignal,
        },
      );
    },
    [messageHandler, request, sessionHandler, setSessionLoading],
  );

  const handleCancel = useCallback(() => {
    const requestId = currentQARef.current.activeRequestId;
    const sessionId = currentQARef.current.activeSessionId;
    if (sessionId) finishResponse(sessionId, requestId, 'interrupted');
    // Invalidate the request even when cancellation happens before the
    // assistant placeholder or AbortController has been created.
    currentQARef.current.activeRequestId += 1;
    const cancelSessionId = sessionId || sessionHandler.getCurrentSessionId();
    const cancelFn = apiOptionsRef.current.cancel;
    if (cancelFn && cancelSessionId) {
      try {
        cancelFn({ session_id: cancelSessionId });
      } catch (e) {
        console.error('cancel api failed:', e);
      }
    }
    currentQARef.current.abortController?.abort();
  }, [finishResponse, sessionHandler]);

  handleCancelRef.current = handleCancel;

  const handleRegenerate = useCallback(
    async (messageId: string) => {
      currentQARef.current.abortController?.abort();
      const sessionId = sessionHandler.getCurrentSessionId();
      if (!sessionId) return;
      currentQARef.current.activeSessionId = sessionId;
      const myRequestId = ++currentQARef.current.activeRequestId;

      setSessionLoading(sessionId, true);

      messageHandler.removeMessageById(messageId, sessionId);
      currentQARef.current.abortController = new AbortController();
      const requestSignal = currentQARef.current.abortController.signal;
      messageHandler.createResponseMessage(sessionId);

      const historyMessages = messageHandler.getHistoryMessages(sessionId);
      await request(
        historyMessages,
        createChatSubmissionRequest(undefined, sessionId),
        {
          requestId: myRequestId,
          sessionId,
          signal: requestSignal,
        },
      );
    },
    [messageHandler, request, sessionHandler, setSessionLoading],
  );

  const handleReconnect = useCallback(
    async (sessionId: string) => {
      if (!sessionId || sessionId !== currentSessionIdRef.current) return;

      const { blockedByPeer, queueSessionId } = prepareReconnect(sessionId);
      if (blockedByPeer) return;

      currentQARef.current.abortController?.abort();
      currentQARef.current.abortController = new AbortController();
      const myRequestId = ++currentQARef.current.activeRequestId;
      currentQARef.current.activeSessionId = sessionId;
      markQueueSessionActive(queueSessionId);
      setSessionLoading(sessionId, true);

      const existingResponse = findGeneratingResponse(
        messageHandler.getSessionMessages(sessionId),
      );
      if (existingResponse) {
        const activeResponse = {
          ...existingResponse,
          history: undefined,
        } as IAgentScopeRuntimeWebUIMessage;
        currentQARef.current.response = activeResponse;
        messageHandler.updateMessage(activeResponse, sessionId);
      } else {
        messageHandler.createResponseMessage(sessionId);
      }

      await reconnect(sessionId, myRequestId);

      if (myRequestId !== currentQARef.current.activeRequestId) return;

      if (currentQARef.current.response?.msgStatus === 'generating') {
        setSessionLoading(sessionId, false);
        if (currentQARef.current.response?.id) {
          messageHandler.removeMessageById(
            currentQARef.current.response.id,
            sessionId,
          );
        }
        currentQARef.current.response = undefined;
        handleReconnectSettledIdle(queueSessionId);
      }
    },
    [
      handleReconnectSettledIdle,
      markQueueSessionActive,
      messageHandler,
      prepareReconnect,
      reconnect,
      setSessionLoading,
    ],
  );

  handleReconnectRef.current = handleReconnect;

  useEffect(() => {
    const prevSessionId = currentQARef.current.activeSessionId;
    const equivalentQueueSession = sameQueueSession(
      prevSessionId,
      currentSessionId,
    );
    if (
      !prevSessionId ||
      prevSessionId === currentSessionId ||
      equivalentQueueSession
    ) {
      if (!currentQARef.current.response) {
        currentQARef.current.activeSessionId = currentSessionId;
        currentQARef.current.activeQueueSessionId =
          resolveQueueSessionId(currentSessionId);
      }
      return;
    }

    currentQARef.current.abortController?.abort();
    currentQARef.current = {
      request: undefined,
      response: undefined,
      abortController: undefined,
      activeRequestId: currentQARef.current.activeRequestId + 1,
      activeSessionId: currentSessionId,
      activeQueueSessionId: resolveQueueSessionId(currentSessionId),
    };
  }, [currentSessionId, resolveQueueSessionId, sameQueueSession]);

  useEffect(
    () => () => {
      clearDrainTimer();
      currentQARef.current.abortController?.abort();
      currentQARef.current.activeRequestId += 1;
    },
    [clearDrainTimer],
  );

  useChatAnywhereEventEmitter({
    type: 'handleReconnect',
    callback: async (data) => {
      await handleReconnect(data.detail.session_id);
    },
  });

  useChatAnywhereEventEmitter({
    type: 'handleSessionLoaded',
    callback: (data) => {
      handleSessionLoaded(data.detail?.session_id, data.detail?.generating);
    },
  });

  useChatAnywhereEventEmitter({
    type: 'handleReplace',
    callback: async (data) => {
      await handleRegenerate(data.detail.id);
    },
  });

  useChatAnywhereEventEmitter({
    type: 'handleSubmit',
    callback: async (data) => {
      await handleSubmit(data.detail);
    },
  });

  useChatAnywhereEventEmitter({
    type: 'handleApproval',
    callback: async (data) => {
      await handleApproval(data.detail);
    },
  });

  return {
    handleSubmit,
    handleCancel,
    inputQueueEnabled: queueEnabled,
    inputQueue,
    inputQueuePaused,
    inputQueueIsOwner,
    enqueueQueuedInput,
    removeQueuedInput,
    clearQueuedInputs,
    retryQueuedInput,
    toggleQueuePaused,
    reorderQueuedInput,
    updateQueuedInputQuery,
    sendQueuedInputNow,
  };
}
