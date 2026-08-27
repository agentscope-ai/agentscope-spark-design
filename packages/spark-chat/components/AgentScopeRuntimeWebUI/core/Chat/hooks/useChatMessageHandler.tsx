import { useCallback } from 'react';
import ReactDOM from 'react-dom';
import { v4 as uuid } from 'uuid';
import AgentScopeRuntimeRequestBuilder from '../../AgentScopeRuntime/Request/Builder';
import type { IAgentScopeRuntimeMessage } from '../../AgentScopeRuntime/types';
import { useChatAnywhereMessages } from '../../Context/ChatAnywhereMessagesContext';
import type { IAgentScopeRuntimeWebUIMessage } from '../../types';
import { InputProps } from '../Input';
import {
  createChatRequestMessage,
  createChatResponseMessage,
} from '../submission';

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
export default function useChatMessageHandler(
  options: UseChatMessageHandlerOptions,
) {
  const { currentQARef } = options;
  const { updateMessage, getSessionMessages, removeMessage } =
    useChatAnywhereMessages();

  /**
   * 创建用户请求消息
   */
  const createRequestMessage = useCallback(
    (data: Parameters<InputProps['onSubmit']>[0], sessionId: string) => {
      currentQARef.current.abortController = new AbortController();
      currentQARef.current.request = createChatRequestMessage(data);

      ReactDOM.flushSync(() => {
        updateMessage(currentQARef.current.request!, sessionId);
      });

      return currentQARef.current.request;
    },
    [currentQARef, updateMessage],
  );

  const createApprovalMessage = useCallback(
    (data: IAgentScopeRuntimeMessage[], sessionId: string) => {
      currentQARef.current.abortController = new AbortController();

      currentQARef.current.request = {
        id: uuid(),
        role: 'user',
        cards: [
          {
            code: 'AgentScopeRuntimeRequestCard',
            data: new AgentScopeRuntimeRequestBuilder().handleApproval(data),
          },
        ],
      };

      ReactDOM.flushSync(() => {
        updateMessage(currentQARef.current.request!, sessionId);
      });

      return currentQARef.current.request;
    },
    [currentQARef, updateMessage],
  );

  /**
   * 创建助手响应消息
   */
  const createResponseMessage = useCallback(
    (sessionId: string) => {
      currentQARef.current.response = createChatResponseMessage();

      updateMessage(currentQARef.current.response, sessionId);

      return currentQARef.current.response;
    },
    [currentQARef, updateMessage],
  );

  /**
   * 获取历史消息（用于 API 请求）
   */
  const getHistoryMessages = useCallback(
    (sessionId: string) =>
      AgentScopeRuntimeRequestBuilder.getHistoryMessages(
        getSessionMessages(sessionId),
      ),
    [getSessionMessages],
  );

  /**
   * 移除指定消息
   */
  const removeMessageById = useCallback(
    (id: string, sessionId: string) => {
      ReactDOM.flushSync(() => {
        removeMessage({ id }, sessionId);
      });
    },
    [removeMessage],
  );

  return {
    createRequestMessage,
    createApprovalMessage,
    createResponseMessage,
    getHistoryMessages,
    updateMessage,
    removeMessageById,
    getSessionMessages,
  };
}
