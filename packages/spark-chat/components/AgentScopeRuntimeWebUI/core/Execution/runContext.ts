import type { ChatSubmissionRequestData } from '../Chat/submission';
import type {
  IAgentScopeRuntimeWebUIAPIOptions,
  IAgentScopeRuntimeWebUIMessage,
  IAgentScopeRuntimeWebUITransportContext,
} from '../types';

/** Per-execution resources survive view/session changes. Never read active UI
 * routing when operating on a detached Run. */
export interface ChatRunContext {
  sessionId: string;
  request: ChatSubmissionRequestData;
  api: IAgentScopeRuntimeWebUIAPIOptions;
  runId?: string;
  clientRequestId?: string;
  response?: IAgentScopeRuntimeWebUIMessage;
  abortController?: AbortController;
  finish?: Promise<void>;
  saveMessages: (messages: IAgentScopeRuntimeWebUIMessage[]) => Promise<void>;
}

export function getRunTransportContext(
  execution: ChatRunContext,
): IAgentScopeRuntimeWebUITransportContext {
  const { session_id, user_id, channel, agent_id, context } = execution.request;
  return {
    session_id,
    user_id,
    channel,
    agent_id,
    context,
    chatSessionId: execution.sessionId,
    runId: execution.runId,
    clientRequestId: execution.clientRequestId,
  };
}
