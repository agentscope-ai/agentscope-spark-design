import { sleep } from "@agentscope-ai/chat";
import { useCallback, useEffect, useRef } from "react";
import { useContextSelector } from "use-context-selector";
import { ChatAnywhereInputContext } from "../../Context/ChatAnywhereInputContext";
import { ChatAnywhereSessionsContext } from "../../Context/ChatAnywhereSessionsContext";
import useChatAnywhereEventEmitter from "../../Context/useChatAnywhereEventEmitter";
import { IAgentScopeRuntimeWebUIMessage } from "@agentscope-ai/chat";
import { InputProps } from "../Input";
import useChatMessageHandler from "./useChatMessageHandler";
import useChatRequest from "./useChatRequest";
import useChatSessionHandler from "./useChatSessionHandler";
import ReactDOM from "react-dom";

/**
 * 聊天控制器 Hook - 协调所有聊天相关操作
 */
export default function useChatController() {
  const setLoading = useContextSelector(ChatAnywhereInputContext, v => v.setLoading);
  const currentSessionId = useContextSelector(ChatAnywhereSessionsContext, v => v.currentSessionId);

  const currentQARef = useRef<{
    request?: IAgentScopeRuntimeWebUIMessage;
    response?: IAgentScopeRuntimeWebUIMessage;
    abortController?: AbortController;
  }>({});

  // 消息处理
  const messageHandler = useChatMessageHandler({ currentQARef });

  // 会话处理
  const sessionHandler = useChatSessionHandler();

  /**
   * 完成响应
   */
  const finishResponse = useCallback((status: 'finished' | 'interrupted' = 'finished') => {
    if (!currentQARef.current.response) return;

    currentQARef.current.response.msgStatus = status;
    setLoading(false);
    ReactDOM.flushSync(() => {
      messageHandler.updateMessage(currentQARef.current.response);
    });

    sessionHandler.syncSessionMessages(messageHandler.getMessages());
  }, [setLoading, messageHandler, sessionHandler]);

  // API 请求处理
  const { request } = useChatRequest({
    currentQARef,
    updateMessage: messageHandler.updateMessage,
    getCurrentSessionId: sessionHandler.getCurrentSessionId,
    onFinish: () => finishResponse('finished'),
  });

  /**
   * 处理用户提交
   */
  const handleSubmit = useCallback<InputProps['onSubmit']>(async (data) => {
    // 1. 确保会话存在
    await sessionHandler.ensureSession(data.query);

    // 2. 更新会话名称（如果是第一条消息）
    const messages = messageHandler.getMessages();
    if (sessionHandler.getCurrentSessionId()) {
      await sessionHandler.updateSessionName(data.query, messages);
    }

    // 3. 创建用户请求消息
    messageHandler.createRequestMessage(data);
    setLoading(true);

    await sleep(100);

    // 4. 创建助手响应消息
    messageHandler.createResponseMessage();

    // 5. 获取历史消息并发起请求
    const historyMessages = messageHandler.getHistoryMessages();
    await sessionHandler.syncSessionMessages(messageHandler.getMessages());

    await request(historyMessages);
  }, [messageHandler, sessionHandler, request]);

  /**
   * 处理取消
   */
  const handleCancel = useCallback(() => {
    finishResponse('interrupted');
  }, [finishResponse]);

  /**
   * 处理重新生成
   */
  const handleRegenerate = useCallback(async (messageId: string) => {
    setLoading(true);

    // 1. 移除旧消息
    messageHandler.removeMessageById(messageId);

    // 2. 创建新的响应消息
    currentQARef.current.abortController = new AbortController();
    messageHandler.createResponseMessage();

    // 3. 发起请求
    const historyMessages = messageHandler.getHistoryMessages();
    await request(historyMessages);
  }, [messageHandler, request]);

  // 监听会话切换，重置状态
  useEffect(() => {
    currentQARef.current = {
      request: undefined,
      response: undefined,
      abortController: undefined
    };
  }, [currentSessionId]);

  // 监听重新生成事件
  useChatAnywhereEventEmitter({
    type: 'handleReplace',
    callback: async (data) => {
      await handleRegenerate(data.detail.id);
    }
  });

  return {
    handleSubmit,
    handleCancel,
  };
}

