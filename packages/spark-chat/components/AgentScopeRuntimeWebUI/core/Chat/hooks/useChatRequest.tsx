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
    /** 当前活跃请求 id，由 controller 维护。递增后会让正在跑的旧 SSE 校验失败。 */
    activeRequestId: number;
    /** 当前活跃请求的会话 id 快照。 */
    activeSessionId?: string;
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
     * 守卫：当前 SSE 是否仍属于活跃请求。任何一个不匹配都应立即停止写入：
     *   - requestId 不匹配：说明用户取消了 / 发了新消息 / 切了会话
     *   - sessionId 不匹配：说明会话已被切走，避免串台
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
        // 首要守卫：任何原因导致这条 SSE 不再是活跃的就立即退出，
        // 不再调 updateMessage，避免“幽灵写入”。
        if (!isStillActive()) break;

        if (currentQARef.current.response?.msgStatus === 'interrupted') {
          currentQARef.current.abortController?.abort();
          // cancel 已在 handleCancel 中主动发起，这里不重复发。

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
        // 请求已不活跃，不要再写 cards / 发 cancel
        return;
      }
      if (currentQARef.current.response?.msgStatus === 'interrupted') {
        // cancel 已在 handleCancel 中主动发起，这里不重复。
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
      await processSSEResponse(response, requestId, sessionId);
    }
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

