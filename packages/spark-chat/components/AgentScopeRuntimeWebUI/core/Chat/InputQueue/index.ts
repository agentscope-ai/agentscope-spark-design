import type { IAgentScopeRuntimeWebUIInputData } from '../../types';

export type QueuedInputStatus = 'pending' | 'failed';

export type InputQueueCommandType = 'send-now';

export interface QueuedInputItem {
  id: string;
  data: IAgentScopeRuntimeWebUIInputData;
  status: QueuedInputStatus;
  retryCount: number;
  errorMessage?: string;
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

export interface InputQueueFetchPayload {
  input: any[];
  session_id: string;
  user_id?: string;
  channel?: string;
  agent_id?: string;
  biz_params?: IAgentScopeRuntimeWebUIInputData['biz_params'];
  signal: AbortSignal;
}

export const MAX_INPUT_QUEUE_SIZE = 50;
export const INPUT_QUEUE_OWNER_TTL = 10_000;
export const INPUT_QUEUE_OWNER_HEARTBEAT_INTERVAL = 3_000;
export const INPUT_QUEUE_OWNER_CLAIM_INTERVAL = 1_000;
export const INPUT_QUEUE_RUNNING_RETRY_INTERVAL = 2_500;
export const INPUT_QUEUE_STORAGE_PREFIX =
  'agentscope-runtime-webui-input-queue';
export const INPUT_QUEUE_TAB_ID_STORAGE_KEY =
  'agentscope-runtime-webui-input-queue-tab-id';

let queueId = 0;
let commandId = 0;

export function createEmptyInputQueueState(now = Date.now()): InputQueueState {
  return {
    items: [],
    paused: false,
    updatedAt: now,
  };
}

export function normalizeInputQueueState(
  state?: Partial<InputQueueState> | null,
  now = Date.now(),
): InputQueueState {
  return {
    items: Array.isArray(state?.items) ? state.items : [],
    paused: !!state?.paused,
    ownerTabId: state?.ownerTabId,
    ownerUpdatedAt: state?.ownerUpdatedAt,
    command: state?.command,
    updatedAt: state?.updatedAt ?? now,
  };
}

export function getInputQueueStorageKey(sessionId: string) {
  return `${INPUT_QUEUE_STORAGE_PREFIX}:${sessionId}`;
}

export function createInputQueueTabId(now = Date.now()) {
  return `input-queue-tab-${now.toString(36)}-${Math.random()
    .toString(36)
    .slice(2)}`;
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
      `input-queue-${Date.now().toString(36)}-${(++queueId).toString(36)}`,
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
  return queue.map((item) =>
    item.id === id
      ? {
          ...item,
          status: 'pending',
          errorMessage: undefined,
        }
      : item,
  );
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
  return queue.map((item) =>
    item.id === id
      ? {
          ...item,
          data: {
            ...item.data,
            query,
            text: query,
          },
          status: 'pending',
          errorMessage: undefined,
        }
      : item,
  );
}

export function createSendNowCommand(
  itemId: string,
  sourceTabId: string,
  now = Date.now(),
): InputQueueCommand {
  return {
    id: `input-queue-command-${now.toString(36)}-${(++commandId).toString(36)}`,
    type: 'send-now',
    itemId,
    sourceTabId,
    createdAt: now,
  };
}

export function hasInputQueueWork(state: InputQueueState) {
  return state.items.length > 0 || !!state.command;
}

export function createInputQueueFetchPayload(
  input: any[],
  data: IAgentScopeRuntimeWebUIInputData,
  sessionId: string,
  signal: AbortSignal,
): InputQueueFetchPayload {
  return {
    input,
    session_id: data.session_id || sessionId,
    user_id: data.user_id,
    channel: data.channel,
    agent_id: data.agent_id,
    biz_params: data.biz_params,
    signal,
  };
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

  return {
    ...state,
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
      errorMessage:
        error instanceof Error ? error.message : String(error || ''),
    },
    ...queue,
  ];
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
