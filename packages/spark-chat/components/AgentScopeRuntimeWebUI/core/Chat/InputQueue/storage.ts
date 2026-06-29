import {
  createEmptyInputQueueState,
  getInputQueueStorageKey,
  isInputQueueStateEmpty,
  normalizeInputQueueState,
  type InputQueueState,
} from './index';

type QueueLocks = {
  request: <R>(
    name: string,
    options: { ifAvailable?: true; mode: 'exclusive' },
    callback: (lock: unknown | null) => R | Promise<R | undefined> | undefined,
  ) => Promise<R | undefined>;
};

function getQueueLocks() {
  return typeof navigator !== 'undefined'
    ? (navigator as typeof navigator & { locks?: QueueLocks }).locks
    : undefined;
}

export function readInputQueueState(sessionId?: string) {
  if (!sessionId || typeof localStorage === 'undefined') {
    return createEmptyInputQueueState();
  }

  try {
    const raw = localStorage.getItem(getInputQueueStorageKey(sessionId));
    return normalizeInputQueueState(raw ? JSON.parse(raw) : undefined);
  } catch (error) {
    console.error('read input queue failed:', error);
    return createEmptyInputQueueState();
  }
}

export function persistInputQueueState(
  sessionId: string,
  state: InputQueueState,
) {
  const normalized = normalizeInputQueueState(state);
  const empty = isInputQueueStateEmpty(normalized);
  const next = empty
    ? createEmptyInputQueueState(normalized.updatedAt)
    : normalized;

  try {
    if (typeof localStorage === 'undefined') return next;
    if (empty) {
      localStorage.removeItem(getInputQueueStorageKey(sessionId));
    } else {
      localStorage.setItem(getInputQueueStorageKey(sessionId), JSON.stringify(next));
    }
  } catch (error) {
    console.error('write input queue failed:', error);
  }

  return next;
}

export async function withInputQueueMutationLock<T>(
  sessionId: string,
  fn: () => T | Promise<T>,
) {
  const locks = getQueueLocks();
  if (!locks?.request) return fn();

  return locks.request(
    `agentscope-runtime-webui-input-queue-mutate:${sessionId}`,
    { mode: 'exclusive' },
    () => fn(),
  );
}

export async function withInputQueueSendLock<T>(
  sessionId: string,
  fn: () => Promise<T>,
) {
  const locks = getQueueLocks();
  if (!locks?.request) return fn();

  return locks.request(
    `agentscope-runtime-webui-input-queue-send:${sessionId}`,
    { ifAvailable: true, mode: 'exclusive' },
    async lock => (lock ? fn() : undefined),
  );
}
