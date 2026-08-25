import { useCallback } from "react";
import { useChatAnywhereSessions } from "../../Context/ChatAnywhereSessionsContext";
import { IAgentScopeRuntimeWebUIMessage } from "@agentscope-ai/chat";

/**
 * 处理会话创建和更新的 Hook
 */
export default function useChatSessionHandler() {
  const { createSession, updateSession, getCurrentSessionId } = useChatAnywhereSessions();

  /**
   * 确保会话存在，如果不存在则创建
   */
  const ensureSession = useCallback(async (query: string) => {
    const currentSessionId = getCurrentSessionId();
    if (currentSessionId) return currentSessionId;

    return createSession({ name: query });
  }, [getCurrentSessionId, createSession]);

  /**
   * 更新会话名称（仅在第一次消息时）
   */
  const updateSessionName = useCallback(async (
    query: string,
    messages: IAgentScopeRuntimeWebUIMessage[],
    sessionId = getCurrentSessionId(),
  ) => {
    if (!sessionId) return;
    if (messages.length === 0) {
      await updateSession({
        id: sessionId,
        name: query,
      });
    }
  }, [getCurrentSessionId, updateSession]);

  /**
   * 同步会话消息
   */
  const syncSessionMessages = useCallback(async (
    messages: IAgentScopeRuntimeWebUIMessage[],
    sessionId = getCurrentSessionId(),
  ) => {
    if (!sessionId) return;
    await updateSession({
      id: sessionId,
      messages: messages,
    });
  }, [getCurrentSessionId, updateSession]);

  return {
    ensureSession,
    updateSessionName,
    syncSessionMessages,
    getCurrentSessionId,
  };
}
