import { Stream, uuid } from '@agentscope-ai/chat';
import AgentScopeRuntimeRequestBuilder from '../../AgentScopeRuntime/Request/Builder';
import AgentScopeRuntimeResponseBuilder from '../../AgentScopeRuntime/Response/Builder';
import {
  AgentScopeRuntimeMessageType,
  AgentScopeRuntimeRunStatus,
} from '../../AgentScopeRuntime/types';
import type {
  IAgentScopeRuntimeWebUIAPIOptions,
  IAgentScopeRuntimeWebUIInputData,
  IAgentScopeRuntimeWebUIMessage,
  IAgentScopeRuntimeWebUISession,
  IAgentScopeRuntimeWebUISessionAPI,
} from '../../types';
import {
  assignInputQueueOwner,
  createInputQueueFetchPayload,
  dequeueNextQueuedInput,
  hasInputQueueWork,
  INPUT_QUEUE_OWNER_HEARTBEAT_INTERVAL,
  isInputQueueOwnedByTab,
  restoreFailedQueuedInput,
  type QueuedInputItem,
} from './index';
import {
  persistInputQueueState,
  readInputQueueState,
  withInputQueueMutationLock,
  withInputQueueSendLock,
} from './storage';

export interface InputQueueBackgroundRunnerOptions {
  queueSessionId: string;
  chatSessionId: string;
  ownerTabId: string;
  apiOptions: IAgentScopeRuntimeWebUIAPIOptions;
  sessionApi: IAgentScopeRuntimeWebUISessionAPI;
  requestContext?: {
    session_id?: string;
    user_id?: string;
    channel?: string;
    agent_id?: string;
  };
}

interface BackgroundRunnerHandle {
  options: InputQueueBackgroundRunnerOptions;
}

const activeRunners = new Map<string, BackgroundRunnerHandle>();

const FINISHED_RUNTIME_STATUSES = [
  AgentScopeRuntimeRunStatus.Completed,
  AgentScopeRuntimeRunStatus.Canceled,
  AgentScopeRuntimeRunStatus.Failed,
];

function isRuntimeStatusFinished(status?: AgentScopeRuntimeRunStatus | string) {
  return FINISHED_RUNTIME_STATUSES.includes(status as AgentScopeRuntimeRunStatus);
}

function isRuntimeResponseFinished(
  response: ReturnType<AgentScopeRuntimeResponseBuilder['handle']>,
) {
  if (isRuntimeStatusFinished(response.status)) return true;

  const output = response.output || [];
  return output.length > 0 && output.every(message => {
    if (!isRuntimeStatusFinished(message.status)) return false;
    const content = message.content || [];
    return content.every(item => isRuntimeStatusFinished(item.status));
  });
}

function createRequestMessage(data: IAgentScopeRuntimeWebUIInputData) {
  return {
    id: uuid(),
    role: 'user',
    cards: [{
      code: 'AgentScopeRuntimeRequestCard',
      data: new AgentScopeRuntimeRequestBuilder().handle(data),
    }],
  } as IAgentScopeRuntimeWebUIMessage;
}

function createResponseMessage() {
  return {
    id: uuid(),
    role: 'assistant',
    cards: [],
    msgStatus: 'generating',
  } as IAgentScopeRuntimeWebUIMessage;
}

function patchMessageSnapshot(
  messages: IAgentScopeRuntimeWebUIMessage[],
  message: IAgentScopeRuntimeWebUIMessage,
) {
  const index = messages.findIndex(item => item.id === message.id);
  if (index === -1) return [...messages, message];
  return [...messages.slice(0, index), message, ...messages.slice(index + 1)];
}

function isSessionGenerating(session?: IAgentScopeRuntimeWebUISession) {
  if (!!(session as IAgentScopeRuntimeWebUISession & {
    generating?: boolean;
  } | undefined)?.generating) {
    return true;
  }

  return !!session?.messages?.some(message =>
    message.role === 'assistant' && message.msgStatus === 'generating',
  );
}

function sleep(ms: number) {
  return new Promise(resolve => {
    window.setTimeout(resolve, ms);
  });
}

async function waitUntilSessionIdle(
  options: InputQueueBackgroundRunnerOptions,
) {
  const { chatSessionId, sessionApi } = options;
  if (!sessionApi.getSession) return undefined;

  let lastSession: IAgentScopeRuntimeWebUISession | undefined;
  while (activeRunners.has(options.queueSessionId)) {
    try {
      lastSession = await sessionApi.getSession(chatSessionId);
      if (!isSessionGenerating(lastSession)) return lastSession;
    } catch (error) {
      console.error('background input queue get session failed:', error);
    }
    await sleep(2_500);
  }

  return lastSession;
}

async function fetchChat(
  options: InputQueueBackgroundRunnerOptions,
  historyMessages: any[],
  data: IAgentScopeRuntimeWebUIInputData,
  signal: AbortSignal,
) {
  const { apiOptions, chatSessionId } = options;
  const { enableHistoryMessages = false } = apiOptions;

  if (apiOptions.fetch) {
    return apiOptions.fetch(createInputQueueFetchPayload(
      historyMessages,
      data,
      chatSessionId,
      signal,
    ));
  }

  return fetch(apiOptions.baseURL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiOptions.token || ''}`,
    },
    body: JSON.stringify({
      input: enableHistoryMessages ? historyMessages : historyMessages.slice(-1),
      session_id: data.session_id || chatSessionId,
      user_id: data.user_id,
      channel: data.channel,
      agent_id: data.agent_id,
      stream: true,
      biz_params: data.biz_params,
    }),
    signal,
  });
}

async function persistMessages(
  options: InputQueueBackgroundRunnerOptions,
  messages: IAgentScopeRuntimeWebUIMessage[],
) {
  await options.sessionApi.updateSession?.({
    id: options.chatSessionId,
    messages,
  });
}

async function consumeResponse(
  options: InputQueueBackgroundRunnerOptions,
  response: Response,
  responseMessage: IAgentScopeRuntimeWebUIMessage,
  messages: IAgentScopeRuntimeWebUIMessage[],
  signal: AbortSignal,
) {
  const builder = new AgentScopeRuntimeResponseBuilder({
    id: '',
    status: AgentScopeRuntimeRunStatus.Created,
    created_at: 0,
  });

  if (!response.ok) {
    let errorMessage = `${response.status}`;
    try {
      errorMessage = JSON.stringify(await response.json());
    } catch {
      // Keep the HTTP status when the body is not JSON.
    }

    const parsed = builder.handle({
      object: 'message',
      type: AgentScopeRuntimeMessageType.ERROR,
      content: [],
      id: 'error',
      role: 'assistant',
      status: AgentScopeRuntimeRunStatus.Failed,
      code: String(response.status),
      message: errorMessage,
    });
    responseMessage.cards = [{
      code: 'AgentScopeRuntimeResponseCard',
      data: parsed,
    }];
    responseMessage.msgStatus = 'error';
    await persistMessages(options, patchMessageSnapshot(messages, responseMessage));
    throw new Error(errorMessage);
  }

  if (!response.body) {
    throw new Error('empty response body');
  }

  let nextMessages = messages;
  for await (const chunk of Stream({ readableStream: response.body, signal })) {
    const parser = options.apiOptions.responseParser || JSON.parse;
    const chunkData = parser(chunk.data);
    if (chunkData === null || chunkData === undefined) continue;

    const parsed = builder.handle(chunkData);
    const finished = isRuntimeResponseFinished(parsed);
    if (
      !finished &&
      parsed.status !== AgentScopeRuntimeRunStatus.Failed &&
      !parsed.output?.some(message => message.content?.length)
    ) {
      continue;
    }

    responseMessage.cards = [{
      code: 'AgentScopeRuntimeResponseCard',
      data: parsed,
    }];
    if (finished) {
      responseMessage.msgStatus = 'finished';
    }
    nextMessages = patchMessageSnapshot(nextMessages, responseMessage);
    await persistMessages(options, nextMessages);

    if (finished) return;
  }

  responseMessage.msgStatus = 'finished';
  await persistMessages(options, patchMessageSnapshot(nextMessages, responseMessage));
}

function hasQueuedInputRequestContextMismatch(
  data: IAgentScopeRuntimeWebUIInputData,
  context: InputQueueBackgroundRunnerOptions['requestContext'],
) {
  if (!context) return false;

  return (['session_id', 'user_id', 'channel', 'agent_id'] as const).some(key =>
    !!data[key] && !!context[key] && data[key] !== context[key],
  );
}

async function dequeueNextOwnedItem(
  queueSessionId: string,
  ownerTabId: string,
  requestContext?: InputQueueBackgroundRunnerOptions['requestContext'],
) {
  let nextItem: QueuedInputItem | undefined;
  await withInputQueueMutationLock(queueSessionId, () => {
    const state = readInputQueueState(queueSessionId);
    if (state.paused || !isInputQueueOwnedByTab(state, ownerTabId)) return;

    const result = dequeueNextQueuedInput(state.items);
    if (!result.item) return;
    if (hasQueuedInputRequestContextMismatch(result.item.data, requestContext)) return;
    nextItem = result.item;

    persistInputQueueState(queueSessionId, {
      ...state,
      items: result.queue,
      updatedAt: Date.now(),
    });
  });
  return nextItem;
}

async function restoreQueuedItem(
  queueSessionId: string,
  item: QueuedInputItem,
  error: unknown,
) {
  await withInputQueueMutationLock(queueSessionId, () => {
    const state = readInputQueueState(queueSessionId);
    persistInputQueueState(queueSessionId, {
      ...state,
      items: restoreFailedQueuedInput(state.items, item, error),
      updatedAt: Date.now(),
    });
  });
}

async function releaseOwnerIfIdle(
  queueSessionId: string,
  ownerTabId: string,
) {
  await withInputQueueMutationLock(queueSessionId, () => {
    const state = readInputQueueState(queueSessionId);
    if (state.ownerTabId !== ownerTabId || hasInputQueueWork(state)) return;
    persistInputQueueState(queueSessionId, {
      ...state,
      ownerTabId: undefined,
      ownerUpdatedAt: undefined,
      updatedAt: Date.now(),
    });
  });
}

function refreshOwner(queueSessionId: string, ownerTabId: string) {
  void withInputQueueMutationLock(queueSessionId, () => {
    const state = readInputQueueState(queueSessionId);
    if (state.ownerTabId !== ownerTabId) return;
    persistInputQueueState(
      queueSessionId,
      assignInputQueueOwner(state, ownerTabId, Date.now(), { force: true }),
    );
  });
}

async function sendQueuedItem(
  options: InputQueueBackgroundRunnerOptions,
  item: QueuedInputItem,
) {
  const session = await options.sessionApi.getSession?.(options.chatSessionId);
  const messages = [...(session?.messages || [])];
  const requestMessage = createRequestMessage(item.data);
  const responseMessage = createResponseMessage();
  const nextMessages = [...messages, requestMessage, responseMessage];
  await persistMessages(options, nextMessages);

  const historyMessages = AgentScopeRuntimeRequestBuilder.getHistoryMessages(nextMessages);
  const abortController = new AbortController();
  const response = await fetchChat(
    options,
    historyMessages,
    item.data,
    abortController.signal,
  );
  await consumeResponse(
    options,
    response,
    responseMessage,
    nextMessages,
    abortController.signal,
  );
}

async function runBackgroundQueue(handle: BackgroundRunnerHandle) {
  const { queueSessionId, ownerTabId } = handle.options;
  const heartbeat = window.setInterval(() => {
    refreshOwner(queueSessionId, ownerTabId);
  }, INPUT_QUEUE_OWNER_HEARTBEAT_INTERVAL);

  try {
    await waitUntilSessionIdle(handle.options);

    const acquired = await withInputQueueSendLock(queueSessionId, async () => {
      while (activeRunners.get(queueSessionId) === handle) {
        const state = readInputQueueState(queueSessionId);
        if (
          state.paused ||
          !isInputQueueOwnedByTab(state, ownerTabId) ||
          !hasInputQueueWork(state)
        ) {
          break;
        }

        const item = await dequeueNextOwnedItem(
          queueSessionId,
          ownerTabId,
          handle.options.requestContext,
        );
        if (!item) break;

        try {
          await sendQueuedItem(handle.options, item);
        } catch (error) {
          console.error('background input queue send failed:', error);
          await restoreQueuedItem(queueSessionId, item, error);
          break;
        }
      }
      return true;
    });

    if (acquired) {
      await releaseOwnerIfIdle(queueSessionId, ownerTabId);
    }
  } finally {
    window.clearInterval(heartbeat);
    if (activeRunners.get(queueSessionId) === handle) {
      activeRunners.delete(queueSessionId);
    }
  }
}

export function startInputQueueBackgroundRunner(
  options: InputQueueBackgroundRunnerOptions,
) {
  if (
    !options.queueSessionId ||
    !options.chatSessionId ||
    !options.ownerTabId ||
    !options.sessionApi.getSession ||
    !options.sessionApi.updateSession ||
    (!options.apiOptions.fetch && !options.apiOptions.baseURL)
  ) {
    return false;
  }

  const state = readInputQueueState(options.queueSessionId);
  if (!hasInputQueueWork(state) || !isInputQueueOwnedByTab(state, options.ownerTabId)) {
    return false;
  }

  const existing = activeRunners.get(options.queueSessionId);
  if (existing) {
    existing.options = options;
    return true;
  }

  const handle: BackgroundRunnerHandle = {
    options,
  };
  activeRunners.set(options.queueSessionId, handle);
  void runBackgroundQueue(handle);
  return true;
}

export function isInputQueueBackgroundRunnerActive(queueSessionId: string) {
  return activeRunners.has(queueSessionId);
}
