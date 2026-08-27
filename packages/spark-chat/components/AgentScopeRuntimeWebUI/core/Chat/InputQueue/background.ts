import Stream from '../../../../Stream';
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
  IAgentScopeRuntimeWebUIQueueSessionContext,
  IAgentScopeRuntimeWebUISession,
  IAgentScopeRuntimeWebUISessionAPI,
} from '../../types';
import {
  createChatRequestMessage,
  createChatResponseMessage,
  createChatSubmissionRequest,
  fetchChatSubmission,
  isRuntimeResponseFinished,
  patchChatMessageSnapshot,
} from '../submission';
import {
  assignInputQueueOwner,
  beginInputQueueStateSubmission,
  hasInputQueueWork,
  INPUT_QUEUE_OWNER_HEARTBEAT_INTERVAL,
  isInputQueueOwnedByTab,
  recoverInterruptedQueuedInputs,
  removeQueuedInput,
  restoreQueuedInputAfterSubmitError,
  type QueuedInputItem,
} from './index';
import {
  persistInputQueueState,
  readInputQueueState,
  withInputQueueMutationLock,
  withInputQueueSendLock,
} from './storage';
import { registerInputQueueSubmission } from './submission';

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
  isSessionRunning?: (
    context: IAgentScopeRuntimeWebUIQueueSessionContext,
  ) => boolean | Promise<boolean>;
  shouldRestoreOnError?: (options: {
    data: IAgentScopeRuntimeWebUIInputData;
    error: unknown;
    chatSessionId?: string;
    queueSessionId?: string;
  }) => boolean | Promise<boolean>;
}

interface BackgroundRunnerHandle {
  options: InputQueueBackgroundRunnerOptions;
}

const activeRunners = new Map<string, BackgroundRunnerHandle>();

function isSessionGenerating(session?: IAgentScopeRuntimeWebUISession) {
  if (
    !!(
      session as
        | (IAgentScopeRuntimeWebUISession & {
            generating?: boolean;
          })
        | undefined
    )?.generating
  ) {
    return true;
  }

  return !!session?.messages?.some(
    (message) =>
      message.role === 'assistant' && message.msgStatus === 'generating',
  );
}

function sleep(ms: number) {
  return new Promise((resolve) => {
    window.setTimeout(resolve, ms);
  });
}

async function isHostSessionRunning(
  options: InputQueueBackgroundRunnerOptions,
) {
  if (!options.isSessionRunning) return false;

  try {
    return !!(await options.isSessionRunning({
      sessionId: options.chatSessionId,
      queueSessionId: options.queueSessionId,
      requestContext: options.requestContext,
    }));
  } catch (error) {
    console.error('background input queue running check failed:', error);
    return true;
  }
}

async function waitUntilSessionIdle(
  options: InputQueueBackgroundRunnerOptions,
) {
  const { chatSessionId, sessionApi } = options;

  let lastSession: IAgentScopeRuntimeWebUISession | undefined;
  while (activeRunners.has(options.queueSessionId)) {
    try {
      lastSession = await sessionApi.getSession(chatSessionId);
      if (
        !isSessionGenerating(lastSession) &&
        !(await isHostSessionRunning(options))
      ) {
        return lastSession;
      }
    } catch (error) {
      console.error('background input queue get session failed:', error);
    }
    await sleep(2_500);
  }

  return lastSession;
}

async function persistMessages(
  options: InputQueueBackgroundRunnerOptions,
  messages: IAgentScopeRuntimeWebUIMessage[],
) {
  await options.sessionApi.updateSession({
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
    responseMessage.cards = [
      {
        code: 'AgentScopeRuntimeResponseCard',
        data: parsed,
      },
    ];
    responseMessage.msgStatus = 'error';
    await persistMessages(
      options,
      patchChatMessageSnapshot(messages, responseMessage),
    );
    throw new Error(errorMessage);
  }

  if (!response.body) {
    responseMessage.msgStatus = 'finished';
    await persistMessages(
      options,
      patchChatMessageSnapshot(messages, responseMessage),
    );
    return;
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
      !parsed.output?.some((message) => message.content?.length)
    ) {
      continue;
    }

    responseMessage.cards = [
      {
        code: 'AgentScopeRuntimeResponseCard',
        data: parsed,
      },
    ];
    if (finished) {
      responseMessage.msgStatus = 'finished';
    }
    nextMessages = patchChatMessageSnapshot(nextMessages, responseMessage);
    await persistMessages(options, nextMessages);

    if (finished) return;
  }

  responseMessage.msgStatus = 'finished';
  await persistMessages(
    options,
    patchChatMessageSnapshot(nextMessages, responseMessage),
  );
}

async function beginNextOwnedSubmission(
  queueSessionId: string,
  ownerTabId: string,
  requestContext?: InputQueueBackgroundRunnerOptions['requestContext'],
) {
  let nextItem: QueuedInputItem | undefined;
  await withInputQueueMutationLock(queueSessionId, () => {
    const state = readInputQueueState(queueSessionId);
    if (state.paused || !isInputQueueOwnedByTab(state, ownerTabId)) return;

    const recoveredItems = recoverInterruptedQueuedInputs(
      state.items,
      ownerTabId,
    );
    const result = beginInputQueueStateSubmission(
      {
        ...state,
        items: recoveredItems,
      },
      ownerTabId,
      { requestContext },
    );
    nextItem = result.item;

    if (result.state !== state) {
      persistInputQueueState(queueSessionId, result.state);
    }
    if (result.error) {
      console.error('background input queue item rejected:', result.error);
    }
  });
  return nextItem;
}

async function consumeQueuedItem(queueSessionId: string, itemId: string) {
  await withInputQueueMutationLock(queueSessionId, () => {
    const state = readInputQueueState(queueSessionId);
    persistInputQueueState(queueSessionId, {
      ...state,
      items: removeQueuedInput(state.items, itemId),
      updatedAt: Date.now(),
    });
  });
}

async function settleQueuedItemAfterError(
  queueSessionId: string,
  item: QueuedInputItem,
  error: unknown,
  shouldRestore: boolean,
  interrupted = false,
) {
  await withInputQueueMutationLock(queueSessionId, () => {
    const state = readInputQueueState(queueSessionId);
    persistInputQueueState(queueSessionId, {
      ...state,
      items: restoreQueuedInputAfterSubmitError(state.items, item, error, {
        shouldRestore,
        interrupted,
      }),
      updatedAt: Date.now(),
    });
  });
}

async function releaseOwnerIfIdle(queueSessionId: string, ownerTabId: string) {
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
): Promise<
  | { ok: true }
  | {
      ok: false;
      error: unknown;
      shouldRestore: boolean;
      interrupted: boolean;
    }
> {
  const session = await options.sessionApi.getSession(options.chatSessionId);
  const messages = [...(session?.messages || [])];
  let requestAccepted = false;
  let interrupted = false;
  let responseMessage: IAgentScopeRuntimeWebUIMessage | undefined;
  let submittedMessages: IAgentScopeRuntimeWebUIMessage[] | undefined;
  const abortController = new AbortController();
  const unregisterSubmission = registerInputQueueSubmission(
    options.queueSessionId,
    () => {
      interrupted = true;
      abortController.abort();
      try {
        options.apiOptions.cancel?.({ session_id: options.chatSessionId });
      } catch (error) {
        console.error('background input queue cancel failed:', error);
      }
    },
  );
  try {
    const requestMessage = createChatRequestMessage(item.data);
    responseMessage = createChatResponseMessage();
    submittedMessages = [...messages, requestMessage, responseMessage];
    await persistMessages(options, submittedMessages);
    if (interrupted) throw new Error('chat request aborted');

    const historyMessages =
      AgentScopeRuntimeRequestBuilder.getHistoryMessages(submittedMessages);
    const response = await fetchChatSubmission({
      apiOptions: options.apiOptions,
      historyMessages,
      data: createChatSubmissionRequest(
        item.data,
        item.data.session_id || options.chatSessionId,
      ),
      signal: abortController.signal,
      submission: { source: 'queue', queueItemId: item.id },
    });
    if (response.ok) {
      requestAccepted = true;
      await consumeQueuedItem(options.queueSessionId, item.id);
    }
    await consumeResponse(
      options,
      response,
      responseMessage,
      submittedMessages,
      abortController.signal,
    );
    return { ok: true };
  } catch (error) {
    let shouldRestore = !requestAccepted;
    if (shouldRestore && !interrupted && options.shouldRestoreOnError) {
      try {
        shouldRestore =
          (await options.shouldRestoreOnError({
            data: item.data,
            error,
            chatSessionId: options.chatSessionId,
            queueSessionId: options.queueSessionId,
          })) !== false;
      } catch (restoreCheckError) {
        console.error(
          'background input queue restore check failed:',
          restoreCheckError,
        );
      }
    }

    if (shouldRestore) {
      try {
        await persistMessages(options, messages);
      } catch (rollbackError) {
        console.error(
          'background input queue message rollback failed:',
          rollbackError,
        );
      }
    } else if (interrupted && responseMessage && submittedMessages) {
      responseMessage.msgStatus = 'interrupted';
      try {
        await persistMessages(
          options,
          patchChatMessageSnapshot(submittedMessages, responseMessage),
        );
      } catch (persistError) {
        console.error(
          'background input queue interrupted state persistence failed:',
          persistError,
        );
      }
    }
    return { ok: false, error, shouldRestore, interrupted };
  } finally {
    unregisterSubmission();
  }
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
        await waitUntilSessionIdle(handle.options);
        if (activeRunners.get(queueSessionId) !== handle) break;

        const state = readInputQueueState(queueSessionId);
        if (
          state.paused ||
          !isInputQueueOwnedByTab(state, ownerTabId) ||
          !hasInputQueueWork(state)
        ) {
          break;
        }

        const item = await beginNextOwnedSubmission(
          queueSessionId,
          ownerTabId,
          handle.options.requestContext,
        );
        if (!item) break;

        const result = await sendQueuedItem(handle.options, item);
        if ('error' in result) {
          console.error('background input queue send failed:', result.error);
          await settleQueuedItemAfterError(
            queueSessionId,
            item,
            result.error,
            result.shouldRestore,
            result.interrupted,
          );
          if (result.interrupted || result.shouldRestore) {
            break;
          }
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
  if (
    !hasInputQueueWork(state) ||
    !isInputQueueOwnedByTab(state, options.ownerTabId)
  ) {
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
