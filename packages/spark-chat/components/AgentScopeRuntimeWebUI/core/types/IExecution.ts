import type {
  IAgentScopeRuntimeWebUIInputData,
  IAgentScopeRuntimeWebUIQueueRequestContext,
} from './IChatAnywhere';

/** No acknowledgement after dispatch is unknown, not proof of rejection. */
export type IAgentScopeRuntimeWebUIBackendAcceptance =
  | 'not-submitted'
  | 'unknown'
  | 'accepted';

export type IAgentScopeRuntimeWebUIExecutionSource =
  | 'direct'
  | 'queue'
  | 'host-queue';

export type IAgentScopeRuntimeWebUIRunState =
  | 'preparing'
  | 'submitting'
  | 'accepted'
  | 'streaming'
  | 'disconnected'
  | 'reconnecting'
  | 'canceling'
  | 'completed'
  | 'failed'
  | 'canceled';

export interface IAgentScopeRuntimeWebUIExecuteOptions {
  /** SDK 聊天会话 id，不是后端 runtime session_id / SDK chat session id, not the backend runtime session_id */
  sessionId?: string;
  /** 宿主队列应传 host-queue / Host queues should use host-queue */
  source?: 'direct' | 'host-queue';
  /** 宿主侧稳定请求 id，例如 queue item id / Stable host request id, such as a queue item id */
  clientRequestId?: string;
}

export interface IAgentScopeRuntimeWebUIResumeOptions {
  /** 页面重挂载后恢复后端身份；挂载内恢复默认沿用原始快照。 */
  /** Restore persisted routing after remount; mounted Runs keep their snapshot. */
  requestContext?: IAgentScopeRuntimeWebUIQueueRequestContext;
  /** 已挂载实例内优先使用 runId；页面恢复后可只传 sessionId / Prefer runId in a mounted instance; sessionId supports page recovery */
  runId?: string;
  sessionId: string;
  source?: 'direct' | 'host-queue';
  clientRequestId?: string;
}

export interface IAgentScopeRuntimeWebUIRunTarget {
  runId?: string;
  sessionId?: string;
}

export interface IAgentScopeRuntimeWebUIRunSessionResult {
  runId: string;
  resolved: boolean;
  sessionId?: string;
  error?: unknown;
}

export interface IAgentScopeRuntimeWebUIRunAcceptedResult {
  runId: string;
  clientRequestId?: string;
  sessionId?: string;
  accepted: boolean;
  /** false alone does not prove non-acceptance; inspect this field. */
  backendAcceptance: IAgentScopeRuntimeWebUIBackendAcceptance;
  error?: unknown;
}

export interface IAgentScopeRuntimeWebUIRunResult {
  runId: string;
  clientRequestId?: string;
  sessionId?: string;
  source: IAgentScopeRuntimeWebUIExecutionSource;
  status: 'completed' | 'failed' | 'canceled';
  /** 已接受但断流的请求应 resume，不能重新提交 / Resume accepted disconnected requests instead of resubmitting */
  backendAccepted: boolean;
  backendAcceptance: IAgentScopeRuntimeWebUIBackendAcceptance;
  /** 是否可由宿主安全地重新入队 / Whether the host can safely enqueue the input again */
  retryable: boolean;
  error?: unknown;
}

export interface IAgentScopeRuntimeWebUICancelResult {
  runId?: string;
  sessionId?: string;
  status: 'canceled' | 'not-found' | 'failed';
  locallyCanceled: boolean;
  error?: unknown;
}

export interface IAgentScopeRuntimeWebUIRunEvent {
  runId: string;
  clientRequestId?: string;
  sessionId?: string;
  source: IAgentScopeRuntimeWebUIExecutionSource;
  previousState?: IAgentScopeRuntimeWebUIRunState;
  state: IAgentScopeRuntimeWebUIRunState;
  backendAccepted: boolean;
  backendAcceptance: IAgentScopeRuntimeWebUIBackendAcceptance;
  retryable?: boolean;
  error?: unknown;
  timestamp: number;
}

export type IAgentScopeRuntimeWebUIRunListener = (
  event: IAgentScopeRuntimeWebUIRunEvent,
) => void;

export interface IAgentScopeRuntimeWebUIRunHandle {
  runId: string;
  clientRequestId?: string;
  source: IAgentScopeRuntimeWebUIExecutionSource;
  session: Promise<IAgentScopeRuntimeWebUIRunSessionResult>;
  accepted: Promise<IAgentScopeRuntimeWebUIRunAcceptedResult>;
  /** Runtime 明确终止或主动本地取消后，在消息收尾和会话保存完成后 resolve。保存失败会记录错误。 */
  /** Resolves after terminal message cleanup and the session save attempt, on a Runtime terminal or explicit local cancellation. */
  completion: Promise<IAgentScopeRuntimeWebUIRunResult>;
  getState: () => IAgentScopeRuntimeWebUIRunState;
  cancel: () => Promise<IAgentScopeRuntimeWebUICancelResult>;
  subscribe: (listener: IAgentScopeRuntimeWebUIRunListener) => () => void;
}

export interface IAgentScopeRuntimeWebUIExecutionController {
  /** 绕过输入拦截和 SDK 队列决策，直接进入统一 Run 执行链。 */
  /** Bypasses input interception and SDK queue policy and enters the Run pipeline directly. */
  execute: (
    data: IAgentScopeRuntimeWebUIInputData,
    options?: IAgentScopeRuntimeWebUIExecuteOptions,
  ) => Promise<IAgentScopeRuntimeWebUIRunHandle>;
  cancel: (
    target?: IAgentScopeRuntimeWebUIRunTarget,
  ) => Promise<IAgentScopeRuntimeWebUICancelResult>;
  /** 继续已有 Run；断流恢复不会创建新的业务提交。 */
  /** Resumes an existing Run without creating a new business submission. */
  resume: (
    options: IAgentScopeRuntimeWebUIResumeOptions,
  ) => Promise<IAgentScopeRuntimeWebUIRunHandle>;
  getActiveRun: (
    sessionId?: string,
  ) => Promise<IAgentScopeRuntimeWebUIRunHandle | undefined>;
  subscribe: (listener: IAgentScopeRuntimeWebUIRunListener) => () => void;
}
