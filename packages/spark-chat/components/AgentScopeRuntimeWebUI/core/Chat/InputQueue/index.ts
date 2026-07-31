import { v4 as uuid } from 'uuid';
import type {
  IAgentScopeRuntimeWebUIInputData,
  IAgentScopeRuntimeWebUIQueueRequestContext,
} from '../../types';

export type QueuedInputStatus = 'pending' | 'submitting' | 'failed';

export type InputQueueCommandType = 'send-now';

export interface QueuedInputItem {
  id: string;
  data: IAgentScopeRuntimeWebUIInputData;
  status: QueuedInputStatus;
  retryCount: number;
  errorMessage?: string;
  submissionOwnerTabId?: string;
  submissionStartedAt?: number;
  createdAt: number;
}

export interface InputQueueCommand {
  id: string;
  type: InputQueueCommandType;
  itemId: string;
  createdAt: number;
  sourceTabId: string;
}

export interface InputQueueState {
  schemaVersion: 1;
  items: QueuedInputItem[];
  paused: boolean;
  ownerTabId?: string;
  ownerUpdatedAt?: number;
  command?: InputQueueCommand;
  updatedAt: number;
}

export interface EnqueueQueuedInputResult {
  queue: QueuedInputItem[];
  item?: QueuedInputItem;
  reason?: 'full';
}

export interface QueueEnqueueResult {
  ok: boolean;
  item?: QueuedInputItem;
  reason?: 'full' | 'session-not-ready';
}

export const MAX_INPUT_QUEUE_SIZE = 50;
export const INPUT_QUEUE_OWNER_TTL = 10_000;
export const INPUT_QUEUE_OWNER_HEARTBEAT_INTERVAL = 3_000;
export const INPUT_QUEUE_OWNER_CLAIM_INTERVAL = 1_000;
export const INPUT_QUEUE_RUNNING_RETRY_INTERVAL = 2_500;
export const INPUT_QUEUE_RUNTIME_RECOVERY_DELAY = 500;
export const INPUT_QUEUE_STORAGE_PREFIX =
  'agentscope-runtime-webui-input-queue';
export const INPUT_QUEUE_TAB_ID_STORAGE_KEY =
  'agentscope-runtime-webui-input-queue-tab-id';
export const INPUT_QUEUE_STORAGE_SCHEMA_VERSION = 1;
export const INPUT_QUEUE_CONTEXT_MISMATCH_ERROR =
  'Queued input request context no longer matches its queue session.';

export function createEmptyInputQueueState(now = Date.now()): InputQueueState {
  return {
    schemaVersion: INPUT_QUEUE_STORAGE_SCHEMA_VERSION,
    items: [],
    paused: false,
    updatedAt: now,
  };
}

export function normalizeInputQueueState(
  state?: Partial<InputQueueState> | null,
  now = Date.now(),
): InputQueueState {
  if (
    state?.schemaVersion !== undefined &&
    state.schemaVersion !== INPUT_QUEUE_STORAGE_SCHEMA_VERSION
  ) {
    return createEmptyInputQueueState(now);
  }

  return {
    schemaVersion: INPUT_QUEUE_STORAGE_SCHEMA_VERSION,
    items: Array.isArray(state?.items)
      ? state.items.flatMap((item) => {
          if (!item || typeof item !== 'object') return [];
          const candidate = item as Partial<QueuedInputItem>;
          if (
            typeof candidate.id !== 'string' ||
            !candidate.id ||
            !candidate.data ||
            typeof candidate.data !== 'object'
          ) {
            return [];
          }
          const status: QueuedInputStatus =
            candidate.status === 'submitting' || candidate.status === 'failed'
              ? candidate.status
              : 'pending';
          return [
            {
              ...candidate,
              id: candidate.id,
              data: candidate.data as IAgentScopeRuntimeWebUIInputData,
              status,
              retryCount:
                typeof candidate.retryCount === 'number'
                  ? candidate.retryCount
                  : 0,
              createdAt:
                typeof candidate.createdAt === 'number'
                  ? candidate.createdAt
                  : now,
            } as QueuedInputItem,
          ];
        })
      : [],
    paused: !!state?.paused,
    ownerTabId:
      typeof state?.ownerTabId === 'string' ? state.ownerTabId : undefined,
    ownerUpdatedAt:
      typeof state?.ownerUpdatedAt === 'number'
        ? state.ownerUpdatedAt
        : undefined,
    command:
      state?.command?.type === 'send-now' &&
      typeof state.command.id === 'string' &&
      typeof state.command.itemId === 'string' &&
      typeof state.command.sourceTabId === 'string' &&
      typeof state.command.createdAt === 'number'
        ? state.command
        : undefined,
    updatedAt: typeof state?.updatedAt === 'number' ? state.updatedAt : now,
  };
}

export function getInputQueueStorageKey(sessionId: string) {
  return `${INPUT_QUEUE_STORAGE_PREFIX}:${sessionId}`;
}

export function createInputQueueTabId(now = Date.now()) {
  return `input-queue-tab-${now.toString(36)}-${uuid()}`;
}

function persistInputQueueTabId(tabId: string) {
  try {
    if (typeof sessionStorage !== 'undefined') {
      sessionStorage.setItem(INPUT_QUEUE_TAB_ID_STORAGE_KEY, tabId);
    }
  } catch {
    // Storage can be disabled in private or embedded browsing contexts.
  }
}

// Keep one executor id for the lifetime of a physical tab so refreshes can
// continue ownership. Duplicated tabs may clone sessionStorage; the controller
// detects that with BroadcastChannel and rotates the newer copy.
export function getInputQueueTabId() {
  try {
    if (typeof sessionStorage !== 'undefined') {
      const persisted = sessionStorage.getItem(INPUT_QUEUE_TAB_ID_STORAGE_KEY);
      if (persisted) return persisted;
    }
  } catch {
    // Fall through to a runtime-only id when storage is unavailable.
  }

  const tabId = createInputQueueTabId();
  persistInputQueueTabId(tabId);
  return tabId;
}

export function resetInputQueueTabId() {
  const tabId = createInputQueueTabId();
  persistInputQueueTabId(tabId);
  return tabId;
}

export function createQueuedInputItem(
  data: IAgentScopeRuntimeWebUIInputData,
  options?: {
    id?: string;
    now?: number;
  },
): QueuedInputItem {
  const nextData = {
    ...data,
    text: data.text ?? data.query,
    attachments: data.attachments ?? data.fileList,
  };

  return {
    id:
      options?.id ||
      `input-queue-${(options?.now ?? Date.now()).toString(36)}-${uuid()}`,
    data: nextData,
    status: 'pending',
    retryCount: 0,
    createdAt: options?.now ?? Date.now(),
  };
}

export function enqueueQueuedInput(
  queue: QueuedInputItem[],
  data: IAgentScopeRuntimeWebUIInputData,
  options?: {
    maxSize?: number;
    id?: string;
    now?: number;
  },
): EnqueueQueuedInputResult {
  const maxSize = options?.maxSize ?? MAX_INPUT_QUEUE_SIZE;
  if (queue.length >= maxSize) {
    return { queue, reason: 'full' };
  }

  const item = createQueuedInputItem(data, options);
  return {
    queue: [...queue, item],
    item,
  };
}

export function enqueueInputQueueState(
  state: InputQueueState,
  data: IAgentScopeRuntimeWebUIInputData,
  options?: {
    maxSize?: number;
    id?: string;
    now?: number;
    ownerTabId?: string;
  },
): EnqueueQueuedInputResult & { state: InputQueueState } {
  const result = enqueueQueuedInput(state.items, data, options);
  const now = options?.now ?? Date.now();
  if (result.reason === 'full') {
    return {
      ...result,
      state,
    };
  }

  return {
    ...result,
    state: {
      ...state,
      items: result.queue,
      ownerTabId: state.ownerTabId || options?.ownerTabId,
      ownerUpdatedAt: state.ownerTabId ? state.ownerUpdatedAt : now,
      updatedAt: now,
    },
  };
}

export function dequeueNextQueuedInput(queue: QueuedInputItem[]): {
  item?: QueuedInputItem;
  queue: QueuedInputItem[];
} {
  const next = queue[0];
  if (!next || next.status !== 'pending') {
    return { queue };
  }

  return {
    item: next,
    queue: queue.slice(1),
  };
}

export function beginQueuedInputSubmission(
  queue: QueuedInputItem[],
  ownerTabId: string,
  options?: {
    itemId?: string;
    now?: number;
  },
): {
  item?: QueuedInputItem;
  queue: QueuedInputItem[];
} {
  const itemIndex = options?.itemId
    ? queue.findIndex((item) => item.id === options.itemId)
    : 0;
  const item = queue[itemIndex];
  if (itemIndex < 0 || !item || item.status !== 'pending') {
    return { queue };
  }

  const submittingItem: QueuedInputItem = {
    ...item,
    status: 'submitting',
    errorMessage: undefined,
    submissionOwnerTabId: ownerTabId,
    submissionStartedAt: options?.now ?? Date.now(),
  };
  const next = [...queue];
  next[itemIndex] = submittingItem;
  return {
    item: submittingItem,
    queue: next,
  };
}

export function removeQueuedInput(
  queue: QueuedInputItem[],
  id: string,
): QueuedInputItem[] {
  return queue.filter((item) => item.id !== id);
}

export function retryQueuedInput(
  queue: QueuedInputItem[],
  id: string,
): QueuedInputItem[] {
  const itemIndex = queue.findIndex((item) => item.id === id);
  if (itemIndex < 0 || queue[itemIndex].status !== 'failed') return queue;

  const next = [...queue];
  next[itemIndex] = {
    ...next[itemIndex],
    status: 'pending',
    errorMessage: undefined,
    submissionOwnerTabId: undefined,
    submissionStartedAt: undefined,
  };
  return next;
}

// Native drag-and-drop drops the source item before the hovered target item.
export function reorderQueuedInput(
  queue: QueuedInputItem[],
  sourceId: string,
  targetId: string,
): QueuedInputItem[] {
  if (sourceId === targetId) return queue;

  const sourceIndex = queue.findIndex((item) => item.id === sourceId);
  const targetIndex = queue.findIndex((item) => item.id === targetId);
  if (sourceIndex < 0 || targetIndex < 0) return queue;
  if (
    queue[sourceIndex].status === 'submitting' ||
    queue[targetIndex].status === 'submitting'
  ) {
    return queue;
  }

  const next = [...queue];
  const [item] = next.splice(sourceIndex, 1);
  next.splice(targetIndex, 0, item);
  return next;
}

// Editing a failed item makes it eligible for the next drain attempt.
export function updateQueuedInputQuery(
  queue: QueuedInputItem[],
  id: string,
  query: string,
): QueuedInputItem[] {
  const itemIndex = queue.findIndex((item) => item.id === id);
  if (itemIndex < 0 || queue[itemIndex].status === 'submitting') return queue;

  const next = [...queue];
  next[itemIndex] = {
    ...next[itemIndex],
    data: {
      ...next[itemIndex].data,
      query,
      text: query,
    },
    status: 'pending',
    errorMessage: undefined,
    submissionOwnerTabId: undefined,
    submissionStartedAt: undefined,
  };
  return next;
}

export function createSendNowCommand(
  itemId: string,
  sourceTabId: string,
  now = Date.now(),
): InputQueueCommand {
  return {
    id: `input-queue-command-${now.toString(36)}-${uuid()}`,
    type: 'send-now',
    itemId,
    sourceTabId,
    createdAt: now,
  };
}

export function hasInputQueueWork(state: InputQueueState) {
  return state.items.length > 0 || !!state.command;
}

// Owner-only states are kept while a request is active so peer tabs cannot
// steal execution before they enqueue. They are removed after the owner is
// released and no queued work remains.
export function isInputQueueStateEmpty(state: InputQueueState) {
  return !hasInputQueueWork(state) && !state.ownerTabId;
}

// Missing or stale ownership is treated as claimable by the current tab.
export function isInputQueueOwner(
  state: InputQueueState,
  tabId: string,
  now = Date.now(),
  ttl = INPUT_QUEUE_OWNER_TTL,
) {
  return (
    state.ownerTabId === tabId ||
    !state.ownerTabId ||
    !state.ownerUpdatedAt ||
    now - state.ownerUpdatedAt > ttl
  );
}

export function isInputQueueOwnedByTab(state: InputQueueState, tabId: string) {
  return state.ownerTabId === tabId;
}

export function recoverInterruptedQueuedInputs(
  queue: QueuedInputItem[],
  ownerTabId: string,
) {
  return queue.map((item) =>
    item.status === 'submitting' && item.submissionOwnerTabId === ownerTabId
      ? {
          ...item,
          status: 'pending' as const,
          errorMessage: undefined,
          submissionOwnerTabId: undefined,
          submissionStartedAt: undefined,
        }
      : item,
  );
}

export function assignInputQueueOwner(
  state: InputQueueState,
  tabId: string,
  now = Date.now(),
  options?: { force?: boolean },
): InputQueueState {
  if (
    !options?.force &&
    state.ownerTabId &&
    !isInputQueueOwner(state, tabId, now)
  ) {
    return state;
  }

  const ownerChanged = !!state.ownerTabId && state.ownerTabId !== tabId;
  return {
    ...state,
    items: ownerChanged
      ? recoverInterruptedQueuedInputs(state.items, state.ownerTabId)
      : state.items,
    ownerTabId: tabId,
    ownerUpdatedAt: now,
    updatedAt: now,
  };
}

export function shouldClaimInputQueueOwner(
  state: InputQueueState,
  tabId: string,
  now = Date.now(),
) {
  return (
    hasInputQueueWork(state) &&
    state.ownerTabId !== tabId &&
    isInputQueueOwner(state, tabId, now)
  );
}

export function restoreFailedQueuedInput(
  queue: QueuedInputItem[],
  item: QueuedInputItem,
  error?: unknown,
): QueuedInputItem[] {
  return [
    {
      ...item,
      status: 'failed',
      retryCount: item.retryCount + 1,
      submissionOwnerTabId: undefined,
      submissionStartedAt: undefined,
      errorMessage:
        error instanceof Error ? error.message : String(error || ''),
    },
    ...queue,
  ];
}

export function restoreQueuedInputAfterSubmitError(
  queue: QueuedInputItem[],
  item: QueuedInputItem,
  error: unknown,
  options?: {
    interrupted?: boolean;
    shouldRestore?: boolean;
  },
): QueuedInputItem[] {
  if (options?.shouldRestore === false) {
    return queue.some((queuedItem) => queuedItem.id === item.id)
      ? removeQueuedInput(queue, item.id)
      : queue;
  }

  const itemIndex = queue.findIndex((queuedItem) => queuedItem.id === item.id);
  if (itemIndex >= 0 && queue[itemIndex].status !== 'submitting') return queue;

  const restoredItem: QueuedInputItem = options?.interrupted
    ? {
        ...item,
        status: 'pending',
        errorMessage: undefined,
        submissionOwnerTabId: undefined,
        submissionStartedAt: undefined,
      }
    : {
        ...item,
        status: 'failed',
        retryCount: item.retryCount + 1,
        errorMessage:
          error instanceof Error ? error.message : String(error || ''),
        submissionOwnerTabId: undefined,
        submissionStartedAt: undefined,
      };
  if (itemIndex < 0) return [restoredItem, ...queue];

  const next = [...queue];
  next[itemIndex] = restoredItem;
  return next;
}

export function hasQueuedInputRequestContextMismatch(
  data: IAgentScopeRuntimeWebUIInputData,
  context?: IAgentScopeRuntimeWebUIQueueRequestContext,
) {
  if (!context) return false;

  return (['session_id', 'user_id', 'channel', 'agent_id'] as const).some(
    (key) => !!data[key] && !!context[key] && data[key] !== context[key],
  );
}

export function beginInputQueueStateSubmission(
  state: InputQueueState,
  ownerTabId: string,
  options?: {
    itemId?: string;
    now?: number;
    requestContext?: IAgentScopeRuntimeWebUIQueueRequestContext;
  },
): {
  state: InputQueueState;
  item?: QueuedInputItem;
  error?: Error;
} {
  const now = options?.now ?? Date.now();
  const result = beginQueuedInputSubmission(state.items, ownerTabId, {
    itemId: options?.itemId,
    now,
  });
  if (!result.item) return { state };

  if (
    hasQueuedInputRequestContextMismatch(
      result.item.data,
      options?.requestContext,
    )
  ) {
    const error = new Error(INPUT_QUEUE_CONTEXT_MISMATCH_ERROR);
    return {
      state: {
        ...state,
        items: restoreQueuedInputAfterSubmitError(
          result.queue,
          result.item,
          error,
        ),
        updatedAt: now,
      },
      error,
    };
  }

  return {
    state: {
      ...state,
      items: result.queue,
      updatedAt: now,
    },
    item: result.item,
  };
}

export function canSubmitDirectly(options: {
  loading: boolean | string;
  queueLength: number;
  draining: boolean;
  paused?: boolean;
  canExecute?: boolean;
  sessionRunning?: boolean;
}) {
  return (
    options.canExecute !== false &&
    !options.paused &&
    !options.sessionRunning &&
    !options.loading &&
    options.queueLength === 0 &&
    !options.draining
  );
}
