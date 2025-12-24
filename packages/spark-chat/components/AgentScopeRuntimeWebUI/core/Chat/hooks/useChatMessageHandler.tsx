import { uuid } from "@agentscope-ai/chat";
import { useCallback } from "react";
import ReactDOM from "react-dom";
import { IAgentScopeRuntimeWebUIMessage } from "@agentscope-ai/chat";
import { useChatAnywhereMessages } from "../../Context/ChatAnywhereMessagesContext";
import AgentScopeRuntimeRequestBuilder from "../../AgentScopeRuntime/Request/Builder";
import { InputProps } from "../Input";

interface UseChatMessageHandlerOptions {
  currentQARef: React.MutableRefObject<{
    request?: IAgentScopeRuntimeWebUIMessage;
    response?: IAgentScopeRuntimeWebUIMessage;
    abortController?: AbortController;
  }>;
}

/**
 * 处理消息创建和更新的 Hook
 */
export default function useChatMessageHandler(options: UseChatMessageHandlerOptions) {
  const { currentQARef } = options;
  const { updateMessage, getMessages, removeMessage } = useChatAnywhereMessages();

  /**
   * 创建用户请求消息
   */
  const createRequestMessage = useCallback((data: Parameters<InputProps['onSubmit']>[0]) => {

    currentQARef.current.abortController = new AbortController();
    currentQARef.current.request = {
      id: uuid(),
      role: 'user',
      cards: [{
        code: 'AgentScopeRuntimeRequestCard',
        data: new AgentScopeRuntimeRequestBuilder(data).data,
      }]
    };

    ReactDOM.flushSync(() => {
      updateMessage(currentQARef.current.request!);
    });

    return currentQARef.current.request;
  }, [currentQARef, updateMessage]);

  /**
   * 创建助手响应消息
   */
  const createResponseMessage = useCallback(() => {
    currentQARef.current.response = {
      id: uuid(),
      role: 'assistant',
      cards: [],
      msgStatus: 'generating',
    };

    updateMessage(currentQARef.current.response);

    return currentQARef.current.response;
  }, [currentQARef, updateMessage]);

  /**
   * 获取历史消息（用于 API 请求）
   */
  const getHistoryMessages = useCallback(() => {
    return AgentScopeRuntimeRequestBuilder.getHistoryMessages(getMessages());
  }, [getMessages]);

  /**
   * 移除指定消息
   */
  const removeMessageById = useCallback((id: string) => {
    ReactDOM.flushSync(() => {
      removeMessage({ id });
    });
  }, [removeMessage]);

  return {
    createRequestMessage,
    createResponseMessage,
    getHistoryMessages,
    updateMessage,
    removeMessageById,
    getMessages,
  };
}

