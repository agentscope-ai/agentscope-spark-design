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
}

export interface IAgentScopeRuntimeWebUISessionsContext {
  sessions: IAgentScopeRuntimeWebUISession[];
  setSessions: (sessions: IAgentScopeRuntimeWebUISession[]) => void;
  getSessions: () => IAgentScopeRuntimeWebUISession[];
  currentSessionId: string | undefined;
  setCurrentSessionId: (sessionId: string | undefined) => void;
  getCurrentSessionId: () => string | undefined;
}