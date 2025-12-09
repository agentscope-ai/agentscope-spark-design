import { sleep, Stream } from "@agentscope-ai/chat";
import { useCallback, useRef, useEffect } from "react";
import { useChatAnywhereOptions } from "../../Context/ChatAnywhereOptionsContext";
import AgentScopeRuntimeResponseBuilder from "../../AgentScopeRuntime/Response/Builder";
import { AgentScopeRuntimeRunStatus } from "../../AgentScopeRuntime/types";
import { IAgentScopeRuntimeWebUIMessage } from "@agentscope-ai/chat";

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
      // if (chunk?.type?.startsWith('plugin_')) {
      //   debugger
      // }

    }
  }, [])


  const request = useCallback(async (historyMessages: any[]) => {
    // 使用 ref.current 获取最新的 apiOptions
    const currentApiOptions = apiOptionsRef.current;
    let response
    try {
      response = currentApiOptions.fetch ? await currentApiOptions.fetch({
        input: historyMessages,
      }) : await fetch(currentApiOptions.baseURL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${currentApiOptions.token || ''}`,
        },
        body: JSON.stringify({
          input: historyMessages,
          session_id: getCurrentSessionId(),
          stream: true,
        }),
      });
    } catch (error) {

    }




    if (response && response.body && response.ok) {
      const agentScopeRuntimeResponseBuilder = new AgentScopeRuntimeResponseBuilder({
        id: '',
        status: AgentScopeRuntimeRunStatus.Created,
        created_at: 0,
      });
      try {

        for await (const chunk of Stream({
          readableStream: response.body,
        })) {
          // 检查是否被中断
          if (currentQARef.current.response?.msgStatus === 'interrupted') {
            currentQARef.current.abortController?.abort();

            currentQARef.current.response.cards = [
              {
                code: 'AgentScopeRuntimeResponseCard',
                data: agentScopeRuntimeResponseBuilder.cancel(),
              }
            ];

            updateMessage(currentQARef.current.response);
            break;
          }

          const chunkData = JSON.parse(chunk.data);
          const res = agentScopeRuntimeResponseBuilder.handle(chunkData);


          // 跳过空内容
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
    }
  }, [getCurrentSessionId, currentQARef, updateMessage, onFinish]);

  return { request, mockRequest };
}

