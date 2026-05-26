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
import { useChatAnywhereOptions } from "../../Context/ChatAnywhereOptionsContext";
import ReactDOM from "react-dom";
// import mockdata from '../../mock/mock.json'

/**
 * 聊天控制器 Hook - 协调所有聊天相关操作
 */
export default function useChatController() {
  const setLoading = useContextSelector(ChatAnywhereInputContext, v => v.setLoading);
  const currentSessionId = useContextSelector(ChatAnywhereSessionsContext, v => v.currentSessionId);
  const apiOptions = useChatAnywhereOptions(v => v.api);
  const apiOptionsRef = useRef(apiOptions);
  useEffect(() => {
    apiOptionsRef.current = apiOptions;
  }, [apiOptions]);

  const currentQARef = useRef<{
    request?: IAgentScopeRuntimeWebUIMessage;
    response?: IAgentScopeRuntimeWebUIMessage;
    abortController?: AbortController;
    /**
     * 当前活跃 SSE 请求的唯一标识。每次发起新请求都会递增。
     * processSSEResponse 在每次写入前会校验自己的 requestId 是否仍等于此值，
     * 不匹配则停止写入，避免旧 SSE 流污染新会话/新消息（issue #4644 关联问题）。
     */
    activeRequestId: number;
    /**
     * 当前活跃 SSE 请求关联的会话 id 快照，用于切换会话时识别陈旧请求。
     */
    activeSessionId?: string;
  }>({ activeRequestId: 0 });

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
  const { request, reconnect } = useChatRequest({
    currentQARef,
    updateMessage: messageHandler.updateMessage,
    getCurrentSessionId: sessionHandler.getCurrentSessionId,
    onFinish: () => finishResponse('finished'),
  });

  /**
   * 处理用户提交
   */
  const handleSubmit = useCallback<InputProps['onSubmit']>(async (data) => {
    // 0. 递增 requestId，并中断上一个未完成的 SSE。
    //    这里不调 cancel API，因为用户是发新消息而不是看取消，
    //    cancel 仅在 handleCancel 中主动调用。
    currentQARef.current.abortController?.abort();
    const myRequestId = ++currentQARef.current.activeRequestId;

    // 1. 确保会话存在
    await sessionHandler.ensureSession(data.query);

    // 2. 更新会话名称（如果是第一条消息）
    const messages = messageHandler.getMessages();
    if (sessionHandler.getCurrentSessionId()) {
      await sessionHandler.updateSessionName(data.query, messages);
    }

    // 快照当前会话 id，后续 SSE 写入需校验
    currentQARef.current.activeSessionId = sessionHandler.getCurrentSessionId();

    // 3. 创建用户请求消息
    messageHandler.createRequestMessage(data);
    setLoading(true);
    await sleep(100);

    // 如果在 sleep 期间发生了会话切换/取消/新提交，requestId 已变，退出
    if (myRequestId !== currentQARef.current.activeRequestId) return;

    // 4. 创建助手响应消息
    messageHandler.createResponseMessage();

    // 5. 获取历史消息并发起请求
    const historyMessages = messageHandler.getHistoryMessages();
    await sessionHandler.syncSessionMessages(messageHandler.getMessages());

    await request(historyMessages, data.biz_params, myRequestId);
    // mockRequest(mockdata);
  }, [messageHandler, sessionHandler, request, setLoading]);


  const handleApproval = useCallback(async ({ input }) => {
    currentQARef.current.abortController?.abort();
    const myRequestId = ++currentQARef.current.activeRequestId;
    currentQARef.current.activeSessionId = sessionHandler.getCurrentSessionId();

    messageHandler.createApprovalMessage(input);

    setLoading(true);
    await sleep(100);

    if (myRequestId !== currentQARef.current.activeRequestId) return;

    messageHandler.createResponseMessage();
    const historyMessages = messageHandler.getHistoryMessages();
    await sessionHandler.syncSessionMessages(messageHandler.getMessages());

    await request(historyMessages, undefined, myRequestId);
  }, [messageHandler, sessionHandler, request, setLoading]);

  /**
   * 处理取消
   * 1. 标记 interrupted 并重置 UI（finishResponse）
   * 2. 立即调用 cancel API，不依赖 SSE 下一个 chunk 发出取消（修复“点停止后后端仍在跑”问题）
   * 3. abort SSE 连接
   * 4. 递增 activeRequestId，让旧 SSE 的残留 chunk 不能再写入 UI
   */
  const handleCancel = useCallback(() => {
    finishResponse('interrupted');
    const sessionId = sessionHandler.getCurrentSessionId();
    const cancelFn = apiOptionsRef.current.cancel;
    if (cancelFn && sessionId) {
      try {
        cancelFn({ session_id: sessionId });
      } catch (e) {
        console.error('cancel api failed:', e);
      }
    }
    currentQARef.current.abortController?.abort();
    // 递增 requestId，使未 abort 完的旧 SSE chunk 校验失败后被丢弃
    currentQARef.current.activeRequestId += 1;
  }, [finishResponse, sessionHandler]);

  /**
   * 处理重新生成
   */
  const handleRegenerate = useCallback(async (messageId: string) => {
    currentQARef.current.abortController?.abort();
    const myRequestId = ++currentQARef.current.activeRequestId;
    currentQARef.current.activeSessionId = sessionHandler.getCurrentSessionId();

    setLoading(true);

    // 1. 移除旧消息
    messageHandler.removeMessageById(messageId);

    // 2. 创建新的响应消息
    currentQARef.current.abortController = new AbortController();
    messageHandler.createResponseMessage();

    // 3. 发起请求
    const historyMessages = messageHandler.getHistoryMessages();
    await request(historyMessages, undefined, myRequestId);
  }, [messageHandler, request, sessionHandler, setLoading]);

  /**
   * 处理 SSE 重连（切回未完成的对话时）
   * If the reconnect API returns no body or the stream ends without a completion event,
   * treat it as idle: remove the empty placeholder and reset loading.
   */
  const handleReconnect = useCallback(async (sessionId: string) => {
    currentQARef.current.abortController?.abort();
    currentQARef.current.abortController = new AbortController();
    const myRequestId = ++currentQARef.current.activeRequestId;
    currentQARef.current.activeSessionId = sessionId;
    setLoading(true);

    messageHandler.createResponseMessage();

    await reconnect(sessionId, myRequestId);

    // 如果在 reconnect 期间会话被切走或发了新请求，requestId 已变，不要动 UI
    if (myRequestId !== currentQARef.current.activeRequestId) return;

    // If the response is still in 'generating' state after reconnect completes,
    // onFinish() was never called (no response body, or stream closed without a completion event).
    // Treat as idle: remove the empty placeholder and reset loading.
    // HTTP errors and normal SSE completions both call onFinish() → msgStatus becomes 'finished',
    // so they are correctly excluded from this cleanup.
    if (currentQARef.current.response?.msgStatus === 'generating') {
      setLoading(false);
      if (currentQARef.current.response?.id) {
        messageHandler.removeMessageById(currentQARef.current.response.id);
      }
      currentQARef.current.response = undefined;
    }
  }, [messageHandler, reconnect, setLoading]);

  // 监听会话切换，断开当前 SSE 连接（不通知后端取消）并重置状态
  // 同时递增 activeRequestId，让旧会话未 abort 完的 SSE chunk 被丢弃，
  // 防止“会话串台”问题。
  useEffect(() => {
    currentQARef.current.abortController?.abort();
    currentQARef.current = {
      request: undefined,
      response: undefined,
      abortController: undefined,
      activeRequestId: currentQARef.current.activeRequestId + 1,
      activeSessionId: currentSessionId,
    };

    return () => {
      currentQARef.current.abortController?.abort();
      currentQARef.current.activeRequestId += 1;
    };
  }, [currentSessionId]);

  // 监听重连事件
  useChatAnywhereEventEmitter({
    type: 'handleReconnect',
    callback: async (data) => {
      await handleReconnect(data.detail.session_id);
    }
  }, [handleReconnect]);

  // 监听重新生成事件
  useChatAnywhereEventEmitter({
    type: 'handleReplace',
    callback: async (data) => {
      await handleRegenerate(data.detail.id);
    }
  });

  useChatAnywhereEventEmitter({
    type: 'handleSubmit',
    callback: async (data) => {
      await handleSubmit(data.detail);
    }
  }, [handleSubmit]);

  useChatAnywhereEventEmitter({
    type: 'handleApproval',
    callback: async (data) => {
      await handleApproval(data.detail);
    }
  }, [handleApproval]);


  return {
    handleSubmit,
    handleCancel,
  };
}

