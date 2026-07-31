import { v4 as uuid } from 'uuid';
import AgentScopeRuntimeRequestBuilder from '../AgentScopeRuntime/Request/Builder';
import AgentScopeRuntimeResponseBuilder from '../AgentScopeRuntime/Response/Builder';
import { AgentScopeRuntimeRunStatus } from '../AgentScopeRuntime/types';
import type {
  IAgentScopeRuntimeWebUIAPIOptions,
  IAgentScopeRuntimeWebUIInputData,
  IAgentScopeRuntimeWebUIMessage,
} from '../types';

export interface ChatSubmissionDescriptor {
  source: 'direct' | 'queue';
  queueItemId?: string;
}

const FINISHED_RUNTIME_STATUSES = [
  AgentScopeRuntimeRunStatus.Completed,
  AgentScopeRuntimeRunStatus.Canceled,
  AgentScopeRuntimeRunStatus.Failed,
];

export function isRuntimeStatusFinished(
  status?: AgentScopeRuntimeRunStatus | string,
) {
  return FINISHED_RUNTIME_STATUSES.includes(
    status as AgentScopeRuntimeRunStatus,
  );
}

export function isRuntimeResponseFinished(
  response: ReturnType<AgentScopeRuntimeResponseBuilder['handle']>,
) {
  if (isRuntimeStatusFinished(response.status)) return true;

  const output = response.output || [];
  return (
    output.length > 0 &&
    output.every((message) => {
      if (!isRuntimeStatusFinished(message.status)) return false;
      const content = message.content || [];
      return content.every((item) => isRuntimeStatusFinished(item.status));
    })
  );
}

export function createChatRequestMessage(
  data: IAgentScopeRuntimeWebUIInputData,
) {
  return {
    id: uuid(),
    role: 'user',
    cards: [
      {
        code: 'AgentScopeRuntimeRequestCard',
        data: new AgentScopeRuntimeRequestBuilder().handle(data),
      },
    ],
  } as IAgentScopeRuntimeWebUIMessage;
}

export function createChatResponseMessage() {
  return {
    id: uuid(),
    role: 'assistant',
    cards: [],
    msgStatus: 'generating',
  } as IAgentScopeRuntimeWebUIMessage;
}

export function patchChatMessageSnapshot(
  messages: IAgentScopeRuntimeWebUIMessage[],
  message: Partial<IAgentScopeRuntimeWebUIMessage> & { id: string },
) {
  const index = messages.findIndex((item) => item.id === message.id);
  if (index === -1) {
    return [...messages, message as IAgentScopeRuntimeWebUIMessage];
  }

  return [
    ...messages.slice(0, index),
    {
      ...messages[index],
      ...message,
    },
    ...messages.slice(index + 1),
  ];
}

export async function fetchChatSubmission({
  apiOptions,
  historyMessages,
  data,
  sessionId,
  signal,
  submission,
}: {
  apiOptions: IAgentScopeRuntimeWebUIAPIOptions;
  historyMessages: any[];
  data?: Pick<
    IAgentScopeRuntimeWebUIInputData,
    'session_id' | 'user_id' | 'channel' | 'agent_id' | 'biz_params'
  >;
  sessionId: string;
  signal?: AbortSignal;
  submission: ChatSubmissionDescriptor;
}) {
  const { enableHistoryMessages = false } = apiOptions;
  if (apiOptions.fetch) {
    return apiOptions.fetch({
      input: historyMessages,
      session_id: data?.session_id || sessionId,
      user_id: data?.user_id,
      channel: data?.channel,
      agent_id: data?.agent_id,
      biz_params: data?.biz_params,
      submission,
      signal,
    });
  }

  return fetch(apiOptions.baseURL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiOptions.token || ''}`,
    },
    body: JSON.stringify({
      input: enableHistoryMessages
        ? historyMessages
        : historyMessages.slice(-1),
      session_id: data?.session_id || sessionId,
      user_id: data?.user_id,
      channel: data?.channel,
      agent_id: data?.agent_id,
      stream: true,
      biz_params: data?.biz_params,
    }),
    signal,
  });
}
