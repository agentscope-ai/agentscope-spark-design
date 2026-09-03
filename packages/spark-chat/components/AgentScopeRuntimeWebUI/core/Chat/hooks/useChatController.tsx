import { useCallback, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import { useContextSelector } from 'use-context-selector';
import { v4 as uuid } from 'uuid';
import sleep from '../../../../Util/sleep';
import type { IAgentScopeRuntimeMessage } from '../../AgentScopeRuntime/types';
import { ChatAnywhereInputContext } from '../../Context/ChatAnywhereInputContext';
import { useChatAnywhereOptions } from '../../Context/ChatAnywhereOptionsContext';
import { ChatAnywhereSessionsContext } from '../../Context/ChatAnywhereSessionsContext';
import useChatAnywhereEventEmitter, {
  useChatAnywhereExecutionEventPublisher,
} from '../../Context/useChatAnywhereEventEmitter';
import { finalizeRunResponse } from '../../Execution/finalizeResponse';
import {
  getRunTransportContext,
  type ChatRunContext,
} from '../../Execution/runContext';
import { ChatRunLifecycle } from '../../Execution/runLifecycle';
import type {
  IAgentScopeRuntimeWebUICancelResult,
  IAgentScopeRuntimeWebUIExecuteOptions,
  IAgentScopeRuntimeWebUIMessage,
  IAgentScopeRuntimeWebUIQueueRequestContext,
  IAgentScopeRuntimeWebUIResumeOptions,
  IAgentScopeRuntimeWebUIRunHandle,
  IAgentScopeRuntimeWebUIRunTarget,
} from '../../types';
import type { InputProps } from '../Input';
import { assertInputAttachmentsReady } from '../Input/submission';
import { registerInputQueueSubmission } from '../InputQueue/submission';
import {
  createChatSubmissionRequest,
  patchChatMessageSnapshot,
} from '../submission';
import {
  findGeneratingResponse,
  type ChatControllerCurrentQA,
} from './runtimeState';
import useChatMessageHandler from './useChatMessageHandler';
import useChatRequest from './useChatRequest';
import useChatSessionHandler from './useChatSessionHandler';
import useInputQueueController, {
  InputQueueSubmitError,
  type QueueSubmitNow,
} from './useInputQueueController';
// import mockdata from '../../mock/mock.json'

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
  const publishRunEvent = useChatAnywhereExecutionEventPublisher();

  useEffect(() => {
    apiOptionsRef.current = apiOptions;
  }, [apiOptions]);

  const currentQARef = useRef<ChatControllerCurrentQA>({ activeRequestId: 0 });
  const runLifecyclesRef = useRef(new Map<string, ChatRunLifecycle>());
  const sessionExecutionsRef = useRef(new Map<string, ChatRunContext>());
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

  const createExecution = useCallback(
    (
      sessionId: string,
      data?: Parameters<typeof createChatSubmissionRequest>[0],
      lifecycle?: ChatRunLifecycle,
    ): ChatRunContext => {
      const execution: ChatRunContext = {
        sessionId,
        request: createChatSubmissionRequest(data, sessionId),
        api: { ...apiOptionsRef.current },
        runId: lifecycle?.handle.runId,
        clientRequestId: lifecycle?.handle.clientRequestId,
        saveMessages: (messages) =>
          sessionHandler.syncSessionMessages(messages, sessionId),
      };
      sessionExecutionsRef.current.delete(sessionId);
      sessionExecutionsRef.current.set(sessionId, execution);
      // Active public Runs retain their own context even after cache eviction.
      if (sessionExecutionsRef.current.size > 100) {
        sessionExecutionsRef.current.delete(
          sessionExecutionsRef.current.keys().next().value,
        );
      }
      if (lifecycle) lifecycle.execution = execution;
      return execution;
    },
    [sessionHandler],
  );

  const updateMessageAndSync = useCallback(
    (message: IAgentScopeRuntimeWebUIMessage, sessionId: string) => {
      const execution = currentQARef.current.execution;
      if (execution?.response?.id === message.id) execution.response = message;
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

  const finishExecution = useCallback(
    (execution: ChatRunContext, status: 'finished' | 'interrupted') =>
      finalizeRunResponse(execution, status, {
        getMessages: messageHandler.getSessionMessages,
        updateMessage: (message, sessionId) => {
          if (currentQARef.current.execution === execution)
            currentQARef.current.response = message;
          ReactDOM.flushSync(() =>
            messageHandler.updateMessage(message, sessionId),
          );
        },
        syncMessages: syncMessagesToPeerTabs,
        settled: () => {
          // Canceling an older Run must not clear a newer Run's loading state.
          if (
            sessionExecutionsRef.current.get(execution.sessionId) === execution
          ) {
            setSessionLoading(execution.sessionId, false);
            markQueueSessionIdle(resolveQueueSessionId(execution.sessionId));
          }
        },
      }),
    [
      messageHandler,
      syncMessagesToPeerTabs,
      setSessionLoading,
      markQueueSessionIdle,
      resolveQueueSessionId,
    ],
  );

  const finishResponse = useCallback(
    async (
      sessionId: string,
      requestId: number,
      status: 'finished' | 'interrupted' = 'finished',
    ) => {
      if (currentQARef.current.activeRequestId !== requestId) return;
      currentQARef.current.cancelRequestedRequestId = undefined;
      const execution = currentQARef.current.execution;
      if (execution) await finishExecution(execution, status);
      else setSessionLoading(sessionId, false);
      if (currentQARef.current.activeRequestId === requestId) {
        handleResponseFinished(sessionId);
      }
    },
    [handleResponseFinished, finishExecution, setSessionLoading],
  );

  const { request, reconnect } = useChatRequest({
    currentQARef,
    updateMessage: updateMessageAndSync,
    onFinish: (sessionId, requestId, status) =>
      finishResponse(sessionId, requestId, status),
  });

  const submitNow = useCallback<QueueSubmitNow>(
    async (data: Parameters<InputProps['onSubmit']>[0], options) => {
      assertInputAttachmentsReady(data);
      // Capture metadata before ensureSession or any other asynchronous work.
      // An unresolved SDK id is filled in when the session becomes available.
      const requestSnapshot = createChatSubmissionRequest(data, '');
      const queuedSubmitSessionId = options?.queueSessionId
        ? getChatSessionIdForQueue(options.queueSessionId, options.sessionId)
        : undefined;
      if (options?.queueSessionId && !queuedSubmitSessionId) {
        throw new Error('input queue session switched');
      }

      currentQARef.current.abortController?.abort();
      const myRequestId = ++currentQARef.current.activeRequestId;
      currentQARef.current.cancelRequestedRequestId = undefined;
      currentQARef.current.activeRunId = options?.runId;
      currentQARef.current.execution = undefined;
      const assertActive = () => {
        if (myRequestId !== currentQARef.current.activeRequestId) {
          throw new Error('chat request aborted');
        }
      };

      const sessionIdSnapshot =
        queuedSubmitSessionId ||
        options?.sessionId ||
        sessionHandler.getCurrentSessionId() ||
        data.session_id;
      currentQARef.current.activeSessionId = sessionIdSnapshot;
      const submitSessionId =
        sessionIdSnapshot || (await sessionHandler.ensureSession(data.query));
      assertActive();
      if (!submitSessionId) {
        throw new Error('chat session is not ready');
      }
      const execution = createExecution(
        submitSessionId,
        requestSnapshot,
        options?.runId
          ? runLifecyclesRef.current.get(options.runId)
          : undefined,
      );
      currentQARef.current.execution = execution;
      await options?.onSessionResolved?.(submitSessionId);
      const submissionData = execution.request;
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
        execution.abortController = currentQARef.current.abortController;
        syncMessagesToPeerTabs(
          submitSessionId,
          messageHandler.getSessionMessages(submitSessionId),
        );
        setSessionLoading(submitSessionId, true);
        await sleep(100);
        assertActive();

        responseMessage = messageHandler.createResponseMessage(submitSessionId);
        execution.response = responseMessage;
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
          apiOptions: execution.api,
          transportContext: getRunTransportContext(execution),
          onDispatched: options?.onRequestDispatched,
          onAccepted: async () => {
            requestAccepted = true;
            await options?.onRequestAccepted?.();
          },
          onStreaming: options?.onRequestStreaming,
          onFinished: options?.onRequestFinished,
          onFailed: options?.onRequestFailed,
          onDisconnected: async (error) => {
            // An old transport must not disconnect its resumed Run.
            if (
              options?.runId &&
              currentQARef.current.activeRunId === options.runId &&
              currentQARef.current.activeRequestId !== myRequestId
            )
              return;
            await options?.onRequestDisconnected?.(error);
            if (currentQARef.current.activeRequestId === myRequestId) {
              setSessionLoading(submitSessionId, false);
            }
          },
          submission: options?.submission,
          queueItemId: options?.queueItemId,
        });
        // A route/connection change may end an already accepted stream. The
        // input was consumed by the backend and must not become an unsent draft.
        if (!accepted && !requestAccepted) {
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
        throw error;
      } finally {
        unregisterSubmission();
      }
      // mockRequest(mockdata);
    },
    [
      assignOwnerForSubmit,
      createExecution,
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
      currentQARef.current.cancelRequestedRequestId = undefined;
      currentQARef.current.activeRunId = undefined;
      const execution = createExecution(
        sessionId,
        sessionExecutionsRef.current.get(sessionId)?.request,
      );
      currentQARef.current.execution = execution;

      messageHandler.createApprovalMessage(input, sessionId);
      const requestSignal = currentQARef.current.abortController?.signal;
      execution.abortController = currentQARef.current.abortController;

      setSessionLoading(sessionId, true);
      await sleep(100);

      if (myRequestId !== currentQARef.current.activeRequestId) {
        setSessionLoading(sessionId, false);
        return;
      }

      const responseMessage = messageHandler.createResponseMessage(sessionId);
      execution.response = responseMessage;
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

      await request(historyMessages, execution.request, {
        requestId: myRequestId,
        sessionId,
        signal: requestSignal,
        apiOptions: execution.api,
        transportContext: getRunTransportContext(execution),
      });
    },
    [
      createExecution,
      messageHandler,
      request,
      sessionHandler,
      setSessionLoading,
    ],
  );

  const abortActiveRequest = useCallback(
    async (requestId: number, sessionId?: string) => {
      if (currentQARef.current.activeRequestId !== requestId) return;
      const runId = currentQARef.current.activeRunId;
      const lifecycle = runId ? runLifecyclesRef.current.get(runId) : undefined;
      lifecycle?.markCanceling();
      // Snapshot/flush synchronously, invalidate this transport immediately,
      // then await persistence before releasing the public Run.
      const finishing = sessionId
        ? finishResponse(sessionId, requestId, 'interrupted')
        : undefined;
      currentQARef.current.activeRequestId += 1;
      currentQARef.current.cancelRequestedRequestId = undefined;
      currentQARef.current.abortController?.abort();
      await finishing;
      if (
        sessionId &&
        currentQARef.current.activeRequestId === requestId + 1 &&
        currentQARef.current.activeSessionId === sessionId
      ) {
        handleResponseFinished(sessionId);
      }
      lifecycle?.cancel();
    },
    [finishResponse, handleResponseFinished],
  );

  const abortExecution = useCallback(
    async (
      execution: ChatRunContext | undefined,
      requestId: number,
      sessionId?: string,
      runId?: string,
    ) => {
      // Resolve activity when abort is invoked, not before awaiting cancel API.
      // The target may have detached or resumed while that API was pending.
      const isActive = execution
        ? currentQARef.current.execution === execution
        : currentQARef.current.activeRequestId === requestId;
      if (isActive) {
        await abortActiveRequest(
          currentQARef.current.activeRequestId,
          sessionId,
        );
        return;
      }
      if (execution) {
        execution.abortController?.abort();
        await finishExecution(execution, 'interrupted');
      }
      if (runId) runLifecyclesRef.current.get(runId)?.cancel();
    },
    [abortActiveRequest, finishExecution],
  );

  const handleCancel = useCallback(() => {
    const requestId = currentQARef.current.activeRequestId;
    const sessionId = currentQARef.current.activeSessionId;
    if (currentQARef.current.cancelRequestedRequestId === requestId) return;
    currentQARef.current.cancelRequestedRequestId = requestId;
    const runId = currentQARef.current.activeRunId;
    if (runId) runLifecyclesRef.current.get(runId)?.markCanceling();

    const cancelSessionId = sessionId;
    const execution = currentQARef.current.execution;
    const cancelFn = (execution?.api || apiOptionsRef.current).cancel;
    if (cancelFn && cancelSessionId) {
      const abort = () => {
        void abortExecution(execution, requestId, sessionId, runId);
      };
      try {
        void Promise.resolve(
          cancelFn({
            session_id: cancelSessionId,
            ...(execution ? getRunTransportContext(execution) : {}),
            signal: currentQARef.current.abortController?.signal,
            abort,
          }),
        ).catch((error) => {
          console.error('cancel api failed:', error);
          abort();
        });
      } catch (error) {
        console.error('cancel api failed:', error);
        abort();
      }
      return;
    }

    void abortExecution(execution, requestId, sessionId, runId);
  }, [abortExecution]);

  handleCancelRef.current = handleCancel;

  const findActiveRunLifecycle = useCallback(
    (target?: IAgentScopeRuntimeWebUIRunTarget) => {
      if (target?.runId) {
        const lifecycle = runLifecyclesRef.current.get(target.runId);
        return lifecycle && !lifecycle.isTerminal() ? lifecycle : undefined;
      }

      const lifecycles = Array.from(
        runLifecyclesRef.current.values(),
      ).reverse();
      return lifecycles.find(
        (lifecycle) =>
          !lifecycle.isTerminal() &&
          (!target?.sessionId || lifecycle.getSessionId() === target.sessionId),
      );
    },
    [],
  );

  const cancelExecution = useCallback(
    async (
      target?: IAgentScopeRuntimeWebUIRunTarget,
    ): Promise<IAgentScopeRuntimeWebUICancelResult> => {
      const lifecycle = findActiveRunLifecycle(target);
      if (!lifecycle) {
        return {
          runId: target?.runId,
          sessionId: target?.sessionId,
          status: 'not-found',
          locallyCanceled: false,
        };
      }

      const { runId } = lifecycle.handle;
      const sessionId = lifecycle.getSessionId();
      const execution = lifecycle.execution;
      lifecycle.markCanceling();

      const requestId = currentQARef.current.activeRequestId;
      const isActiveRequest = currentQARef.current.activeRunId === runId;
      let locallyCanceled = false;
      let localFinish: Promise<void> | undefined;
      const abort = () => {
        if (locallyCanceled) return;
        locallyCanceled = true;
        localFinish = abortExecution(execution, requestId, sessionId, runId);
      };

      const cancelFn = (execution?.api || apiOptionsRef.current).cancel;
      try {
        if (cancelFn && sessionId) {
          await cancelFn({
            session_id: sessionId,
            ...(execution ? getRunTransportContext(execution) : {}),
            signal: isActiveRequest
              ? currentQARef.current.abortController?.signal
              : undefined,
            abort,
          });
        }
        // The public Run contract is stronger than the legacy UI callback:
        // once cancel() resolves, local stream/message state is terminal too.
        abort();
        await localFinish;
        lifecycle.cancel();
        return {
          runId,
          sessionId,
          status: 'canceled',
          locallyCanceled,
        };
      } catch (error) {
        console.error('cancel execution failed:', error);
        abort();
        await localFinish;
        lifecycle.cancel(error);
        return {
          runId,
          sessionId,
          status: 'failed',
          locallyCanceled,
          error,
        };
      }
    },
    [abortExecution, findActiveRunLifecycle],
  );

  const createRunLifecycle = useCallback(
    (options: {
      runId?: string;
      clientRequestId?: string;
      sessionId?: string;
      source: 'direct' | 'host-queue';
    }) => {
      const runId = options.runId || uuid();
      const lifecycle = new ChatRunLifecycle({
        runId,
        clientRequestId: options.clientRequestId,
        sessionId: options.sessionId,
        source: options.source,
        publish: publishRunEvent,
        cancel: () => cancelExecution({ runId }),
      });
      runLifecyclesRef.current.set(runId, lifecycle);
      void lifecycle.handle.completion.then(() => {
        if (runLifecyclesRef.current.get(runId) === lifecycle) {
          runLifecyclesRef.current.delete(runId);
        }
      });
      return lifecycle;
    },
    [cancelExecution, publishRunEvent],
  );

  const executeRun = useCallback(
    (
      data: Parameters<InputProps['onSubmit']>[0],
      options?: IAgentScopeRuntimeWebUIExecuteOptions,
    ): IAgentScopeRuntimeWebUIRunHandle => {
      if (options?.clientRequestId) {
        const existing = Array.from(runLifecyclesRef.current.values()).find(
          (lifecycle) =>
            !lifecycle.isTerminal() &&
            lifecycle.handle.clientRequestId === options.clientRequestId,
        );
        if (existing) return existing.handle;
      }

      const source = options?.source || 'direct';
      const lifecycle = createRunLifecycle({
        clientRequestId: options?.clientRequestId,
        sessionId: options?.sessionId,
        source,
      });
      lifecycle.markSubmitting();

      const submission = submitNow(data, {
        sessionId: options?.sessionId,
        runId: lifecycle.handle.runId,
        submission: {
          source,
          runId: lifecycle.handle.runId,
          clientRequestId: options?.clientRequestId,
          queueItemId:
            source === 'host-queue' ? options?.clientRequestId : undefined,
        },
        onSessionResolved: (sessionId) => lifecycle.resolveSession(sessionId),
        onRequestDispatched: () => lifecycle.markDispatched(),
        onRequestAccepted: () => {
          const sessionId = lifecycle.getSessionId();
          if (sessionId) lifecycle.markAccepted(sessionId);
        },
        onRequestStreaming: () => lifecycle.markStreaming(),
        onRequestFinished: (status) => {
          if (status === 'interrupted') lifecycle.cancel();
          else lifecycle.complete();
        },
        onRequestFailed: (error) => lifecycle.fail(error),
        onRequestDisconnected: (error) => lifecycle.markDisconnected(error),
      });
      const submittedRequestId = currentQARef.current.activeRequestId;
      const hasNewConnection = () =>
        currentQARef.current.activeRunId === lifecycle.handle.runId &&
        currentQARef.current.activeRequestId !== submittedRequestId;
      void submission
        .then(() => {
          if (lifecycle.isTerminal() || hasNewConnection()) return;
          const state = lifecycle.getState();
          if (state === 'canceling') return;
          else if (state === 'preparing' || state === 'submitting') {
            lifecycle.fail(
              new Error('chat request ended before backend acceptance'),
            );
          } else if (state !== 'disconnected') {
            lifecycle.markDisconnected(
              new Error('chat stream ended before a terminal runtime event'),
            );
          }
        })
        .catch((error) => {
          if (lifecycle.isTerminal() || hasNewConnection()) return;
          const state = lifecycle.getState();
          if (state === 'canceling') return;
          else if (state === 'disconnected') return;
          else if (
            state === 'accepted' ||
            state === 'streaming' ||
            state === 'reconnecting'
          ) {
            lifecycle.markDisconnected(error);
          } else {
            lifecycle.fail(error);
          }
        });

      return lifecycle.handle;
    },
    [createRunLifecycle, submitNow],
  );

  const handleRegenerate = useCallback(
    async (messageId: string) => {
      currentQARef.current.abortController?.abort();
      const sessionId = sessionHandler.getCurrentSessionId();
      if (!sessionId) return;
      currentQARef.current.activeSessionId = sessionId;
      const myRequestId = ++currentQARef.current.activeRequestId;
      currentQARef.current.activeRunId = undefined;
      const execution = createExecution(
        sessionId,
        sessionExecutionsRef.current.get(sessionId)?.request,
      );
      currentQARef.current.execution = execution;

      setSessionLoading(sessionId, true);

      messageHandler.removeMessageById(messageId, sessionId);
      currentQARef.current.abortController = new AbortController();
      execution.abortController = currentQARef.current.abortController;
      const requestSignal = currentQARef.current.abortController.signal;
      execution.response = messageHandler.createResponseMessage(sessionId);

      const historyMessages = messageHandler.getHistoryMessages(sessionId);
      await request(historyMessages, execution.request, {
        requestId: myRequestId,
        sessionId,
        signal: requestSignal,
        apiOptions: execution.api,
        transportContext: getRunTransportContext(execution),
      });
    },
    [
      createExecution,
      messageHandler,
      request,
      sessionHandler,
      setSessionLoading,
    ],
  );

  const handleReconnect = useCallback(
    async (
      sessionId: string,
      existingLifecycle?: ChatRunLifecycle,
      requestContext?: IAgentScopeRuntimeWebUIQueueRequestContext,
    ) => {
      // SessionLoader and explicit resume must reconnect the same public Run.
      const lifecycle =
        existingLifecycle || findActiveRunLifecycle({ sessionId });
      if (lifecycle?.getSessionId() && lifecycle.getSessionId() !== sessionId) {
        throw new Error('Run does not belong to the requested SDK session');
      }
      if (!sessionId || sessionId !== currentSessionIdRef.current) {
        lifecycle?.markDisconnected(
          new Error('chat session is not active for reconnect'),
        );
        return false;
      }

      const { blockedByPeer, queueSessionId } = prepareReconnect(sessionId);
      if (blockedByPeer) {
        lifecycle?.markDisconnected(
          new Error('chat reconnect is owned by another tab'),
        );
        return false;
      }

      currentQARef.current.abortController?.abort();
      currentQARef.current.abortController = new AbortController();
      const myRequestId = ++currentQARef.current.activeRequestId;
      currentQARef.current.cancelRequestedRequestId = undefined;
      currentQARef.current.activeSessionId = sessionId;
      currentQARef.current.activeRunId = lifecycle?.handle.runId;
      const execution =
        lifecycle?.execution ||
        createExecution(
          sessionId,
          requestContext ||
            sessionExecutionsRef.current.get(sessionId)?.request,
          lifecycle,
        );
      currentQARef.current.execution = execution;
      execution.abortController = currentQARef.current.abortController;
      sessionExecutionsRef.current.set(sessionId, execution);
      lifecycle?.markReconnecting();
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
      execution.response = currentQARef.current.response;

      const reconnected = await reconnect(sessionId, myRequestId, {
        apiOptions: execution.api,
        transportContext: getRunTransportContext(execution),
        ...(lifecycle
          ? {
              onAccepted: () => {
                if (lifecycle.getState() === 'preparing') {
                  lifecycle.markAccepted(sessionId);
                }
              },
              onStreaming: () => lifecycle.markStreaming(),
              onFinished: (status) => {
                if (status === 'interrupted') lifecycle.cancel();
                else lifecycle.complete();
              },
              onFailed: (error) => lifecycle.fail(error),
              onDisconnected: (error) => {
                if (currentQARef.current.activeRequestId === myRequestId) {
                  lifecycle.markDisconnected(error);
                  setSessionLoading(sessionId, false);
                }
              },
            }
          : {}),
      });

      if (myRequestId !== currentQARef.current.activeRequestId) return false;

      if (currentQARef.current.response?.msgStatus === 'generating') {
        setSessionLoading(sessionId, false);
        if (lifecycle?.getState() === 'disconnected') {
          // Keep the partially rendered response so resume() can continue the
          // same Run instead of creating a second assistant message.
          return reconnected;
        }
        if (currentQARef.current.response?.id) {
          messageHandler.removeMessageById(
            currentQARef.current.response.id,
            sessionId,
          );
        }
        currentQARef.current.response = undefined;
        handleReconnectSettledIdle(queueSessionId);
      }
      return reconnected;
    },
    [
      handleReconnectSettledIdle,
      createExecution,
      findActiveRunLifecycle,
      markQueueSessionActive,
      messageHandler,
      prepareReconnect,
      reconnect,
      setSessionLoading,
    ],
  );

  handleReconnectRef.current = async (sessionId) => {
    await handleReconnect(sessionId);
  };

  const resumeRun = useCallback(
    (options: IAgentScopeRuntimeWebUIResumeOptions) => {
      let lifecycle = findActiveRunLifecycle({
        runId: options.runId,
        sessionId: options.sessionId,
      });
      if (!lifecycle) {
        lifecycle = createRunLifecycle({
          runId: options.runId,
          clientRequestId: options.clientRequestId,
          sessionId: options.sessionId,
          source: options.source || 'direct',
        });
        // resume() explicitly attaches to a backend Run that was already
        // accepted before this stream connection was created.
        lifecycle.markAccepted(options.sessionId);
      } else if (lifecycle.getState() !== 'disconnected') {
        return lifecycle.handle;
      }

      lifecycle.markReconnecting();
      void handleReconnect(
        options.sessionId,
        lifecycle,
        options.requestContext,
      ).catch((error) => {
        lifecycle?.markDisconnected(error);
      });
      return lifecycle.handle;
    },
    [createRunLifecycle, findActiveRunLifecycle, handleReconnect],
  );

  const getActiveRun = useCallback(
    (sessionId?: string): IAgentScopeRuntimeWebUIRunHandle | undefined =>
      findActiveRunLifecycle({ sessionId })?.handle,
    [findActiveRunLifecycle],
  );

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

    const activeRunId = currentQARef.current.activeRunId;
    if (activeRunId) {
      runLifecyclesRef.current
        .get(activeRunId)
        ?.markDisconnected(new Error('chat session changed during streaming'));
    }
    currentQARef.current.abortController?.abort();
    currentQARef.current = {
      request: undefined,
      response: undefined,
      abortController: undefined,
      activeRequestId: currentQARef.current.activeRequestId + 1,
      activeSessionId: currentSessionId,
      activeRunId: undefined,
      activeQueueSessionId: resolveQueueSessionId(currentSessionId),
      cancelRequestedRequestId: undefined,
    };
  }, [currentSessionId, resolveQueueSessionId, sameQueueSession]);

  useEffect(
    () => () => {
      clearDrainTimer();
      const activeRunId = currentQARef.current.activeRunId;
      if (activeRunId) {
        runLifecyclesRef.current
          .get(activeRunId)
          ?.markDisconnected(new Error('chat component unmounted'));
      }
      currentQARef.current.abortController?.abort();
      currentQARef.current.activeRequestId += 1;
    },
    [clearDrainTimer],
  );

  useChatAnywhereEventEmitter({
    type: 'handleReconnect',
    callback: async (data) => {
      await handleReconnect(data.session_id);
    },
  });

  useChatAnywhereEventEmitter({
    type: 'handleSessionLoaded',
    callback: (data) => {
      handleSessionLoaded(data.session_id, data.generating);
    },
  });

  useChatAnywhereEventEmitter({
    type: 'handleReplace',
    callback: async (data) => {
      await handleRegenerate(data.id);
    },
  });

  useChatAnywhereEventEmitter({
    type: 'handleSubmit',
    callback: handleSubmit,
  });

  useChatAnywhereEventEmitter({
    type: 'handleApproval',
    callback: async (data) => {
      await handleApproval(data);
    },
  });

  useChatAnywhereEventEmitter({
    type: 'handleExecute',
    callback: ({ data, options }) => executeRun(data, options),
  });

  useChatAnywhereEventEmitter({
    type: 'handleCancelExecution',
    callback: (target) => cancelExecution(target),
  });

  useChatAnywhereEventEmitter({
    type: 'handleResumeExecution',
    callback: (options) => resumeRun(options),
  });

  useChatAnywhereEventEmitter({
    type: 'handleGetActiveRun',
    callback: ({ sessionId }) => getActiveRun(sessionId),
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
