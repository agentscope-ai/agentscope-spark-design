import { sleep, Stream } from "@agentscope-ai/chat";
import { useCallback, useRef, useEffect } from "react";
import { useChatAnywhereOptions } from "../../Context/ChatAnywhereOptionsContext";
import AgentScopeRuntimeResponseBuilder from "../../AgentScopeRuntime/Response/Builder";
import { AgentScopeRuntimeRunStatus, AgentScopeRuntimeMessageType } from "../../AgentScopeRuntime/types";
import { IAgentScopeRuntimeWebUIMessage } from "@agentscope-ai/chat";
import { IAgentScopeRuntimeWebUIInputData } from "../../types";

interface UseChatRequestOptions {
  currentQARef: React.MutableRefObject<{
    request?: IAgentScopeRuntimeWebUIMessage;
    response?: IAgentScopeRuntimeWebUIMessage;
    abortController?: AbortController;
    /** Active request id, maintained by the controller. Incrementing it invalidates any in-flight SSE. */
    activeRequestId: number;
    /** Session id snapshot for the active request. */
    activeSessionId?: string;
  }>;
  updateMessage: (message: IAgentScopeRuntimeWebUIMessage) => void;
  getCurrentSessionId: () => string;
  onFinish: () => void;
}

/**
 * Hook for handling API requests and streaming SSE responses.
 */
export default function useChatRequest(options: UseChatRequestOptions) {
  const { currentQARef, updateMessage, getCurrentSessionId, onFinish } = options;
  const apiOptions = useChatAnywhereOptions(v => v.api);

  // Keep apiOptions in a ref to avoid stale closure issues
  const apiOptionsRef = useRef(apiOptions);

  useEffect(() => {
    apiOptionsRef.current = apiOptions;
  }, [apiOptions]);


  const mockRequest = useCallback(async (mockdata) => {
    const agentScopeRuntimeResponseBuilder = new AgentScopeRuntimeResponseBuilder({
      id: '',
      status: AgentScopeRuntimeRunStatus.Created,
      created_at: 0,
    });

    for await (const chunk of mockdata) {

      const res = agentScopeRuntimeResponseBuilder.handle(chunk);
      currentQARef.current.response.cards = [
        {
          code: 'AgentScopeRuntimeResponseCard',
          data: res,
        }
      ];

      updateMessage(currentQARef.current.response);

      await sleep(100);

    }
  }, [])


  const processSSEResponse = useCallback(async (
    response: Response,
    myRequestId: number,
    mySessionId?: string,
  ) => {
    const currentApiOptions = apiOptionsRef.current;
    const agentScopeRuntimeResponseBuilder = new AgentScopeRuntimeResponseBuilder({
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
      if (mySessionId && currentQARef.current.activeSessionId &&
          currentQARef.current.activeSessionId !== mySessionId) return false;
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
            }
          ];
        }
      } catch {
        // Ignore JSON parse errors — still call onFinish to reset loading state
      }
      if (isStillActive()) onFinish();
      return;
    }

    const abortSignal = currentQARef.current.abortController?.signal;

    try {
      for await (const chunk of Stream({
        readableStream: response.body,
        signal: abortSignal,
      })) {
        // Primary guard: if this SSE is no longer active, stop immediately
        // to prevent ghost writes into a different session/request.
        if (!isStillActive()) break;

        if (currentQARef.current.response?.msgStatus === 'interrupted') {
          currentQARef.current.abortController?.abort();
          // Cancel was already sent by handleCancel; don't repeat it here.

          if (isStillActive() && currentQARef.current.response) {
            currentQARef.current.response.cards = [
              {
                code: 'AgentScopeRuntimeResponseCard',
                data: agentScopeRuntimeResponseBuilder.cancel(),
              }
            ];
            updateMessage(currentQARef.current.response);
          }
          break;
        }

        const responseParser = apiOptionsRef.current.responseParser || JSON.parse;
        const chunkData = responseParser(chunk.data);
        const res = agentScopeRuntimeResponseBuilder.handle(chunkData);

        if (res.status !== AgentScopeRuntimeRunStatus.Failed && !res.output?.some(msg => msg.content?.length)) continue;

        if (!isStillActive()) break;

        if (currentQARef.current.response) {
          currentQARef.current.response.cards = [
            {
              code: 'AgentScopeRuntimeResponseCard',
              data: res,
            }
          ];

          if (res.status === AgentScopeRuntimeRunStatus.Completed || res.status === AgentScopeRuntimeRunStatus.Failed) {
            onFinish();
          } else {
            updateMessage(currentQARef.current.response);
          }
        }
      }
    } catch (error) {
      if (!isStillActive()) {
        // Request is no longer active; do not write cards or fire cancel.
        return;
      }
      if (currentQARef.current.response?.msgStatus === 'interrupted') {
        // Cancel was already sent by handleCancel; don't repeat it here.
        if (currentQARef.current.response) {
          currentQARef.current.response.cards = [
            {
              code: 'AgentScopeRuntimeResponseCard',
              data: agentScopeRuntimeResponseBuilder.cancel(),
            }
          ];
          updateMessage(currentQARef.current.response);
        }
      } else {
        console.error(error);
      }
    }
  }, [getCurrentSessionId, currentQARef, updateMessage, onFinish]);


  const request = useCallback(async (
    historyMessages: any[],
    biz_params?: IAgentScopeRuntimeWebUIInputData['biz_params'],
    myRequestId?: number,
  ) => {
    const currentApiOptions = apiOptionsRef.current;
    const { enableHistoryMessages = false } = currentApiOptions;
    const abortSignal = currentQARef.current.abortController?.signal;
    const requestId = myRequestId ?? currentQARef.current.activeRequestId;
    const sessionId = currentQARef.current.activeSessionId ?? getCurrentSessionId();
    let response: Response | undefined;
    try {
      response = currentApiOptions.fetch ? await currentApiOptions.fetch({
        input: historyMessages,
        biz_params,
        signal: abortSignal,
      }) : await fetch(currentApiOptions.baseURL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${currentApiOptions.token || ''}`,
        },
        body: JSON.stringify({
          input: enableHistoryMessages ? historyMessages : historyMessages.slice(-1),
          session_id: sessionId,
          stream: true,
          biz_params,
        }),
        signal: abortSignal,
      });
    } catch (error) {
      if (abortSignal?.aborted) return false;
      throw error;
    }

    if (response && response.body) {
      await processSSEResponse(response, requestId, sessionId);
      return true;
    }

    return false;
  }, [getCurrentSessionId, currentQARef, processSSEResponse]);

  const reconnect = useCallback(async (sessionId: string, myRequestId?: number) => {
    const currentApiOptions = apiOptionsRef.current;
    if (!currentApiOptions.reconnect) return;

    const abortSignal = currentQARef.current.abortController?.signal;
    const requestId = myRequestId ?? currentQARef.current.activeRequestId;
    let response: Response | undefined;
    try {
      response = await currentApiOptions.reconnect({
        session_id: sessionId,
        signal: abortSignal,
      });
    } catch (error) {
    }

    if (response && response.body) {
      await processSSEResponse(response, requestId, sessionId);
    }
  }, [currentQARef, processSSEResponse]);

  return { request, reconnect, mockRequest };
}
