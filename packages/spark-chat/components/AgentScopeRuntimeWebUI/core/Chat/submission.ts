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

export type ChatSubmissionRequestData = Readonly<
  Pick<
    IAgentScopeRuntimeWebUIInputData,
    'user_id' | 'channel' | 'agent_id' | 'context' | 'biz_params' | 'mentions'
  > & {
    session_id: string;
  }
>;

function cloneSubmissionValue<T>(value: T, seen = new WeakMap()): T {
  if (!value || typeof value !== 'object') return value;
  if (seen.has(value as object)) return seen.get(value as object);

  if (Array.isArray(value)) {
    const clone: unknown[] = [];
    seen.set(value, clone);
    value.forEach((item) => clone.push(cloneSubmissionValue(item, seen)));
    return clone as T;
  }

  const prototype = Object.getPrototypeOf(value);
  if (prototype !== Object.prototype && prototype !== null) return value;

  const clone: Record<PropertyKey, unknown> = {};
  seen.set(value as object, clone);
  Reflect.ownKeys(value as object).forEach((key) => {
    clone[key] = cloneSubmissionValue(
      (value as Record<PropertyKey, unknown>)[key],
      seen,
    );
  });
  return clone as T;
}

/**
 * Freeze all routing metadata at submit time. Request code must only consume
 * this snapshot and never read mutable session state after an async boundary.
 */
export function createChatSubmissionRequest(
  data: Partial<IAgentScopeRuntimeWebUIInputData> | undefined,
  sessionId: string,
): ChatSubmissionRequestData {
  const context = cloneSubmissionValue(data?.context);
  const bizParams = cloneSubmissionValue(data?.biz_params);
  const mentions = cloneSubmissionValue(data?.mentions);

  return Object.freeze({
    session_id: sessionId,
    user_id: data?.user_id,
    channel: data?.channel,
    agent_id: data?.agent_id,
    context,
    biz_params: bizParams,
    mentions,
  });
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
  signal,
  submission,
}: {
  apiOptions: IAgentScopeRuntimeWebUIAPIOptions;
  historyMessages: any[];
  data: ChatSubmissionRequestData;
  signal?: AbortSignal;
  submission: ChatSubmissionDescriptor;
}) {
  const { enableHistoryMessages = false } = apiOptions;
  if (apiOptions.fetch) {
    return apiOptions.fetch({
      input: historyMessages,
      session_id: data.session_id,
      user_id: data.user_id,
      channel: data.channel,
      agent_id: data.agent_id,
      context: data.context,
      biz_params: data.biz_params,
      mentions: data.mentions,
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
      session_id: data.session_id,
      user_id: data.user_id,
      channel: data.channel,
      agent_id: data.agent_id,
      stream: true,
      context: data.context,
      biz_params: data.biz_params,
      mentions: data.mentions,
    }),
    signal,
  });
}
