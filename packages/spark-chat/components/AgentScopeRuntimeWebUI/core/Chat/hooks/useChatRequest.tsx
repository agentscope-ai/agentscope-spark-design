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
  }>;
  updateMessage: (message: IAgentScopeRuntimeWebUIMessage) => void;
  getCurrentSessionId: () => string;
  onFinish: () => void;
}

/**
 * 处理 API 请求和流式响应的 Hook
 */
export default function useChatRequest(options: UseChatRequestOptions) {
  const { currentQARef, updateMessage, getCurrentSessionId, onFinish } = options;
  const apiOptions = useChatAnywhereOptions(v => v.api);

  // 使用 ref 保存最新的 apiOptions，避免闭包陷阱
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


  const processSSEResponse = useCallback(async (response: Response) => {
    const currentApiOptions = apiOptionsRef.current;
    const agentScopeRuntimeResponseBuilder = new AgentScopeRuntimeResponseBuilder({
      id: '',
      status: AgentScopeRuntimeRunStatus.Created,
      created_at: 0,
    });

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

        currentQARef.current.response.cards = [
          {
            code: 'AgentScopeRuntimeResponseCard',
            data: res,
          }
        ];
      } catch {
        // Ignore JSON parse errors — still call onFinish to reset loading state
      }
      onFinish();
      return;
    }

    try {
      for await (const chunk of Stream({
        readableStream: response.body,
      })) {
        if (currentQARef.current.response?.msgStatus === 'interrupted') {
          currentQARef.current.abortController?.abort();
          if (currentApiOptions.cancel) {
            currentApiOptions.cancel({
              session_id: getCurrentSessionId(),
            });
          }

          currentQARef.current.response.cards = [
            {
              code: 'AgentScopeRuntimeResponseCard',
              data: agentScopeRuntimeResponseBuilder.cancel(),
            }
          ];

          updateMessage(currentQARef.current.response);
          break;
        }

        const responseParser = apiOptionsRef.current.responseParser || JSON.parse;
        const chunkData = responseParser(chunk.data);
        const res = agentScopeRuntimeResponseBuilder.handle(chunkData);

        if (res.status !== AgentScopeRuntimeRunStatus.Failed && !res.output?.[0]?.content?.length) continue;

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
      console.error(error);
    }
  }, [getCurrentSessionId, currentQARef, updateMessage, onFinish]);


  const request = useCallback(async (historyMessages: any[], biz_params?: IAgentScopeRuntimeWebUIInputData['biz_params']) => {
    const currentApiOptions = apiOptionsRef.current;
    const { enableHistoryMessages = false } = currentApiOptions;
    const abortSignal = currentQARef.current.abortController?.signal;
    let response
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
          session_id: getCurrentSessionId(),
          stream: true,
          biz_params,
        }),
        signal: abortSignal,
      });
    } catch (error) {
    }

    if (response && response.body) {
      await processSSEResponse(response);
    }
  }, [getCurrentSessionId, currentQARef, processSSEResponse]);

  const reconnect = useCallback(async (sessionId: string) => {
    const currentApiOptions = apiOptionsRef.current;
    if (!currentApiOptions.reconnect) return;

    const abortSignal = currentQARef.current.abortController?.signal;
    let response: Response | undefined;
    try {
      response = await currentApiOptions.reconnect({
        session_id: sessionId,
        signal: abortSignal,
      });
    } catch (error) {
    }

    if (response && response.body) {
      await processSSEResponse(response);
    }
  }, [currentQARef, processSSEResponse]);

  return { request, reconnect, mockRequest };
}

