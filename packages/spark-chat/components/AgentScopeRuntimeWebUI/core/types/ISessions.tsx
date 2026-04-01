import { IAgentScopeRuntimeWebUIMessage } from "@agentscope-ai/chat";


export interface IAgentScopeRuntimeWebUISession {
  /**
   * @description 会话的唯一标识符
   * @descriptionEn Unique identifier for the session
   */
  id: string;
  /**
   * @description 会话的名称
   * @descriptionEn Name of the session
   */
  name: string;
  /**
   * @description 会话的消息列表
   * @descriptionEn Message list for the session
   */
  messages: IAgentScopeRuntimeWebUIMessage[];
  /**
   * @description 对话是否仍在生成中（后端未完成），用于触发 SSE 重连
   * @descriptionEn Whether the conversation is still generating (backend not finished), used to trigger SSE reconnection
   */
  generating?: boolean;
}

export interface IAgentScopeRuntimeWebUISessionsContext {
  sessions: IAgentScopeRuntimeWebUISession[];
  setSessions: (sessions: IAgentScopeRuntimeWebUISession[]) => void;
  getSessions: () => IAgentScopeRuntimeWebUISession[];
  currentSessionId: string | undefined;
  setCurrentSessionId: (sessionId: string | undefined) => void;
  getCurrentSessionId: () => string | undefined;
}