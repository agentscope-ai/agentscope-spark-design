export enum AgentScopeRuntimeRunStatus {
  Created = "created",
  InProgress = "in_progress",
  Completed = "completed",
  Canceled = "canceled",
  Failed = "failed",
  Rejected = "rejected",
  Unknown = "unknown",
}

export enum AgentScopeRuntimeMessageRole {
  ASSISTANT = "assistant",
  USER = "user",
  SYSTEM = "system",
}

export enum AgentScopeRuntimeMessageType {
  MESSAGE = "message",
  REASONING = "reasoning",
  PLUGIN_CALL = "plugin_call",
  PLUGIN_CALL_OUTPUT = "plugin_call_output",
  FUNCTION_CALL = "function_call",
  FUNCTION_CALL_OUTPUT = "function_call_output",
  COMPONENT_CALL = "component_call",
  COMPONENT_CALL_OUTPUT = "component_call_output",
  MCP_LIST_TOOLS = "mcp_list_tools",
  MCP_APPROVAL_REQUEST = "mcp_approval_request",
  MCP_CALL = "mcp_call",
  MCP_CALL_OUTPUT = "mcp_call_output",
  MCP_APPROVAL_RESPONSE = "mcp_approval_response",
  HEARTBEAT = "heartbeat",
  ERROR = "error",
}

export enum AgentScopeRuntimeContentType {
  TEXT = "text",
  DATA = "data",
  IMAGE = "image",
  AUDIO = "audio",
  FILE = "file",
}

export interface IBaseContent {
  type: string;
  object?: 'content';
  delta?: boolean | null;
  msg_id?: string;
  status: AgentScopeRuntimeRunStatus;
}

export interface ITextContent extends IBaseContent {
  type: AgentScopeRuntimeContentType.TEXT,
  text: string;
}
export interface IImageContent extends IBaseContent {
  type: AgentScopeRuntimeContentType.IMAGE,
  image_url: string;
}

export interface IFileContent extends IBaseContent {
  type: AgentScopeRuntimeContentType.FILE,
  file_url: string;
  file_name?: string;
  file_size?: number;
}

export interface IDataContent<T = Record<string, any>> extends IBaseContent {
  type: AgentScopeRuntimeContentType.DATA,
  data: T;
}

export type IContent = ITextContent | IImageContent | IDataContent | IFileContent;

export interface IAgentScopeRuntimeMessage {
  id: string;
  object?: 'message';
  role: AgentScopeRuntimeMessageRole | string;
  type: AgentScopeRuntimeMessageType;
  content: IContent[];
  status: AgentScopeRuntimeRunStatus;
  code?: string;
  message?: string;
}

export interface IAgentScopeRuntimeResponse {
  id: string;
  object?: 'response';
  status: AgentScopeRuntimeRunStatus;
  created_at: number;
  completed_at?: number;
  output: IAgentScopeRuntimeMessage[];
  usage?: Record<string, any>;
  error?: IAgentScopeRuntimeError;
}

export interface IAgentScopeRuntimeError {
  code: string;
  message: string;
}

export interface IAgentScopeRuntimeRequest {
  input: {
    role: AgentScopeRuntimeMessageRole | string;
    type: AgentScopeRuntimeMessageType;
    content: IContent[];
  }[]
}