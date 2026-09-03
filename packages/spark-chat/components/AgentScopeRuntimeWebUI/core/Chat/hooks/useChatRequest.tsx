import { useCallback, useEffect, useRef } from 'react';
import Stream from '../../../../Stream';
import AgentScopeRuntimeResponseBuilder from '../../AgentScopeRuntime/Response/Builder';
import {
  AgentScopeRuntimeMessageType,
  AgentScopeRuntimeRunStatus,
} from '../../AgentScopeRuntime/types';
import { useChatAnywhereOptions } from '../../Context/ChatAnywhereOptionsContext';
import type {
  IAgentScopeRuntimeWebUIAPIOptions,
  IAgentScopeRuntimeWebUIMessage,
  IAgentScopeRuntimeWebUISubmissionContext,
  IAgentScopeRuntimeWebUITransportContext,
} from '../../types';
import {
  type ChatSubmissionRequestData,
  fetchChatSubmission,
  isRuntimeResponseFinished,
} from '../submission';

interface UseChatRequestOptions {
  currentQARef: React.MutableRefObject<{
    request?: IAgentScopeRuntimeWebUIMessage;
    response?: IAgentScopeRuntimeWebUIMessage;
    abortController?: AbortController;
    /** Active request id, maintained by the controller. Incrementing it invalidates any in-flight SSE. */
    activeRequestId: number;
    /** Session id snapshot for the active request. */
    activeSessionId?: string;
    cancelRequestedRequestId?: number;
  }>;
  updateMessage: (
    message: IAgentScopeRuntimeWebUIMessage,
    sessionId: string,
  ) => void;
  onFinish: (
    sessionId: string,
    requestId: number,
    status?: 'finished' | 'interrupted',
  ) => void | Promise<void>;
}

interface ChatRequestLifecycleOptions {
  requestId: number;
  sessionId: string;
  signal?: AbortSignal;
  apiOptions?: IAgentScopeRuntimeWebUIAPIOptions;
  transportContext?: IAgentScopeRuntimeWebUITransportContext;
  onDispatched?: () => void;
  onAccepted?: (response: Response) => void | Promise<void>;
  onStreaming?: () => void | Promise<void>;
  onFinished?: (status: 'finished' | 'interrupted') => void | Promise<void>;
  onFailed?: (error: unknown) => void | Promise<void>;
  onDisconnected?: (error?: unknown) => void | Promise<void>;
  submission?: IAgentScopeRuntimeWebUISubmissionContext;
  queueItemId?: string;
}

/**
 * Hook for handling API requests and streaming SSE responses.
 */
export default function useChatRequest(options: UseChatRequestOptions) {
  const { currentQARef, updateMessage, onFinish } = options;
  const apiOptions = useChatAnywhereOptions((v) => v.api);

  // Keep apiOptions in a ref to avoid stale closure issues
  const apiOptionsRef = useRef(apiOptions);

  useEffect(() => {
    apiOptionsRef.current = apiOptions;
  }, [apiOptions]);

  const processSSEResponse = useCallback(
    async (
      response: Response,
      myRequestId: number,
      mySessionId: string,
      abortSignal?: AbortSignal,
      lifecycle?: ChatRequestLifecycleOptions,
    ) => {
      const agentScopeRuntimeResponseBuilder =
        new AgentScopeRuntimeResponseBuilder({
          id: '',
          status: AgentScopeRuntimeRunStatus.Created,
          created_at: 0,
        });

      /**
       * Guard: check whether this SSE stream is still the active request.
       * If any of the following is true, writing should stop immediately:
       *   - requestId mismatch: user cancelled / sent new message / switched session
       *   - sessionId mismatch: session was switched away, prevents cross-session leakage
       */
      const isStillActive = () => {
        if (currentQARef.current.activeRequestId !== myRequestId) return false;
        if (
          mySessionId &&
          currentQARef.current.activeSessionId &&
          currentQARef.current.activeSessionId !== mySessionId
        )
          return false;
        return true;
      };

      if (!response.ok) {
        try {
          const data = await response.json();
          const res = agentScopeRuntimeResponseBuilder.handle({
            object: 'message',
            type: AgentScopeRuntimeMessageType.ERROR,
            content: [],
            id: 'error',
            role: 'assistant',
            status: AgentScopeRuntimeRunStatus.Failed,
            code: String(response.status),
            message: JSON.stringify(data),
          });

          if (isStillActive() && currentQARef.current.response) {
            currentQARef.current.response.cards = [
              {
                code: 'AgentScopeRuntimeResponseCard',
                data: res,
              },
            ];
          }
        } catch {
          // Ignore JSON parse errors — still call onFinish to reset loading state
        }
        if (isStillActive()) {
          await onFinish(mySessionId, myRequestId);
          return true;
        }
        return false;
      }

      let sawFinishedChunk = false;
      let notifiedStreaming = false;

      try {
        for await (const chunk of Stream({
          readableStream: response.body,
          signal: abortSignal,
        })) {
          // Primary guard: if this SSE is no longer active, stop immediately
          // to prevent ghost writes into a different session/request.
          if (!isStillActive()) return false;

          if (!notifiedStreaming) {
            notifiedStreaming = true;
            await lifecycle?.onStreaming?.();
          }

          if (currentQARef.current.response?.msgStatus === 'interrupted') {
            currentQARef.current.abortController?.abort();
            // Cancel was already sent by handleCancel; don't repeat it here.

            if (isStillActive() && currentQARef.current.response) {
              currentQARef.current.response.cards = [
                {
                  code: 'AgentScopeRuntimeResponseCard',
                  data: agentScopeRuntimeResponseBuilder.cancel(),
                },
              ];
              updateMessage(currentQARef.current.response, mySessionId);
            }
            return false;
          }

          const responseParser =
            (lifecycle?.apiOptions || apiOptionsRef.current).responseParser ||
            JSON.parse;
          const chunkData = responseParser(chunk.data);
          if (chunkData === null || chunkData === undefined) continue;
          const res = agentScopeRuntimeResponseBuilder.handle(chunkData);
          const finished = isRuntimeResponseFinished(res);

          if (
            !finished &&
            res.status !== AgentScopeRuntimeRunStatus.Failed &&
            !res.output?.some((msg) => msg.content?.length)
          )
            continue;

          if (!isStillActive()) return false;

          if (currentQARef.current.response) {
            currentQARef.current.response.cards = [
              {
                code: 'AgentScopeRuntimeResponseCard',
                data: res,
              },
            ];

            if (finished) {
              sawFinishedChunk = true;
              // Flush the old message and its session snapshot before publishing
              // terminal events: subscribers may synchronously start another Run.
              await onFinish(
                mySessionId,
                myRequestId,
                res.status === AgentScopeRuntimeRunStatus.Canceled
                  ? 'interrupted'
                  : 'finished',
              );
              if (res.status === AgentScopeRuntimeRunStatus.Failed) {
                await lifecycle?.onFailed?.(
                  new Error('runtime response failed'),
                );
              } else {
                await lifecycle?.onFinished?.(
                  res.status === AgentScopeRuntimeRunStatus.Canceled
                    ? 'interrupted'
                    : 'finished',
                );
              }
              return true;
            } else {
              updateMessage(currentQARef.current.response, mySessionId);
            }
          }
        }
      } catch (error) {
        if (!isStillActive() || abortSignal?.aborted) {
          // Request is no longer active; do not write cards or fire cancel.
          await lifecycle?.onDisconnected?.(error);
          return false;
        }
        if (currentQARef.current.response?.msgStatus === 'interrupted') {
          // Cancel was already sent by handleCancel; don't repeat it here.
          if (currentQARef.current.response) {
            currentQARef.current.response.cards = [
              {
                code: 'AgentScopeRuntimeResponseCard',
                data: agentScopeRuntimeResponseBuilder.cancel(),
              },
            ];
            updateMessage(currentQARef.current.response, mySessionId);
          }
          await onFinish(mySessionId, myRequestId, 'interrupted');
          await lifecycle?.onFinished?.('interrupted');
          return false;
        } else {
          console.error(error);
          await lifecycle?.onDisconnected?.(error);
          if (!lifecycle?.onDisconnected) {
            onFinish(mySessionId, myRequestId);
          }
        }
        return true;
      }

      if (!sawFinishedChunk && isStillActive()) {
        await lifecycle?.onDisconnected?.(
          new Error('chat stream ended before a terminal runtime event'),
        );
        if (!lifecycle?.onDisconnected) {
          onFinish(mySessionId, myRequestId);
        }
      }
      return sawFinishedChunk || isStillActive();
    },
    [currentQARef, updateMessage, onFinish],
  );

  const request = useCallback(
    async (
      historyMessages: any[],
      data: ChatSubmissionRequestData,
      lifecycle: ChatRequestLifecycleOptions,
    ) => {
      const currentApiOptions = lifecycle.apiOptions || apiOptionsRef.current;
      const { requestId, sessionId, signal } = lifecycle;
      let response: Response | undefined;
      try {
        if (signal?.aborted) return false;
        lifecycle.onDispatched?.();
        response = await fetchChatSubmission({
          apiOptions: currentApiOptions,
          historyMessages,
          data,
          signal,
          transportContext: lifecycle.transportContext,
          submission:
            lifecycle.submission ||
            (lifecycle.queueItemId
              ? { source: 'queue', queueItemId: lifecycle.queueItemId }
              : { source: 'direct' }),
        });
      } catch (error) {
        if (signal?.aborted) return false;
        if (
          currentQARef.current.activeRequestId === requestId &&
          currentQARef.current.activeSessionId === sessionId
        ) {
          await onFinish(sessionId, requestId);
        }
        await lifecycle.onFailed?.(error);
        throw error;
      }

      if (!response) return false;

      if (!response.ok) {
        await processSSEResponse(response, requestId, sessionId, signal);
        const error = new Error(`chat request failed (${response.status})`);
        await lifecycle.onFailed?.(error);
        throw error;
      }

      try {
        await lifecycle.onAccepted?.(response);
      } catch (error) {
        if (
          currentQARef.current.activeRequestId === requestId &&
          currentQARef.current.activeSessionId === sessionId
        ) {
          onFinish(sessionId, requestId);
        }
        throw error;
      }

      if (response.body) {
        return processSSEResponse(
          response,
          requestId,
          sessionId,
          signal,
          lifecycle,
        );
      }

      if (
        currentQARef.current.activeRequestId === requestId &&
        (!sessionId || currentQARef.current.activeSessionId === sessionId)
      ) {
        await lifecycle.onDisconnected?.(
          new Error('chat response has no body or terminal runtime event'),
        );
        return false;
      }
      return false;
    },
    [currentQARef, onFinish, processSSEResponse],
  );

  const reconnect = useCallback(
    async (
      sessionId: string,
      myRequestId?: number,
      lifecycle?: Omit<ChatRequestLifecycleOptions, 'requestId' | 'sessionId'>,
    ) => {
      const currentApiOptions = lifecycle?.apiOptions || apiOptionsRef.current;
      if (!currentApiOptions.reconnect) {
        await lifecycle?.onDisconnected?.(
          new Error('chat reconnect api is not configured'),
        );
        return false;
      }

      const abortSignal = currentQARef.current.abortController?.signal;
      const requestId = myRequestId ?? currentQARef.current.activeRequestId;
      let response: Response | undefined;
      try {
        response = await currentApiOptions.reconnect({
          session_id: sessionId,
          ...lifecycle?.transportContext,
          signal: abortSignal,
        });
      } catch (error) {
        if (!abortSignal?.aborted) {
          console.error('chat reconnect failed:', error);
        }
        await lifecycle?.onDisconnected?.(error);
        return false;
      }

      if (!response.ok) {
        await lifecycle?.onDisconnected?.(
          new Error(`chat reconnect failed (${response.status})`),
        );
        return false;
      }

      await lifecycle?.onAccepted?.(response);

      if (response.body) {
        return processSSEResponse(response, requestId, sessionId, abortSignal, {
          requestId,
          sessionId,
          signal: abortSignal,
          ...lifecycle,
        });
      }

      await lifecycle?.onDisconnected?.(
        new Error('chat reconnect has no body or terminal runtime event'),
      );
      return false;
    },
    [currentQARef, onFinish, processSSEResponse],
  );

  return { request, reconnect };
}
