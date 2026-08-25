import {
  createEmptyInputQueueState,
  getInputQueueStorageKey,
  isInputQueueStateEmpty,
  normalizeInputQueueState,
  type InputQueueState,
  type QueuedInputItem,
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

function notifyInputQueueStorageChange(
  key: string,
  oldValue: string | null,
  newValue: string | null,
) {
  if (typeof window === 'undefined') return;
  try {
    window.dispatchEvent(
      new StorageEvent('storage', {
        key,
        oldValue,
        newValue,
        storageArea: localStorage,
      }),
    );
  } catch {
    // Peer tabs still receive native storage events.
  }
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
      localStorage.setItem(
        getInputQueueStorageKey(sessionId),
        JSON.stringify(next),
      );
    }
  } catch (error) {
    console.error('write input queue failed:', error);
  }

  return next;
}

export function hasInputQueueItems(sessionId?: string) {
  return readInputQueueState(sessionId).items.length > 0;
}

export function clearInputQueueState(sessionId?: string) {
  if (!sessionId || typeof localStorage === 'undefined') return;
  try {
    const key = getInputQueueStorageKey(sessionId);
    const oldValue = localStorage.getItem(key);
    if (oldValue === null) return;
    localStorage.removeItem(key);
    notifyInputQueueStorageChange(key, oldValue, null);
  } catch {
    // Storage can be unavailable in private or embedded browsing contexts.
  }
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

async function withInputQueueMutationLocks<T>(
  sessionIds: string[],
  fn: () => T | Promise<T>,
): Promise<T> {
  const locks = getQueueLocks();
  if (!locks?.request) return fn();

  const lockNames = Array.from(new Set(sessionIds))
    .map(
      (sessionId) => `agentscope-runtime-webui-input-queue-mutate:${sessionId}`,
    )
    .sort();

  const acquire = (index: number): Promise<T> => {
    if (index >= lockNames.length) return Promise.resolve(fn());
    return locks.request(lockNames[index], { mode: 'exclusive' }, () =>
      acquire(index + 1),
    ) as Promise<T>;
  };

  return acquire(0);
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
    async (lock) => (lock ? fn() : undefined),
  );
}

function mergeInputQueueItems(
  fromItems: QueuedInputItem[],
  toItems: QueuedInputItem[],
) {
  const merged = [...fromItems];
  const itemIndexById = new Map(
    fromItems.map((item, index) => [item.id, index]),
  );

  for (const item of toItems) {
    const existingIndex = itemIndexById.get(item.id);
    if (existingIndex !== undefined) {
      // Destination state is newer while the source keeps the original FIFO slot.
      merged[existingIndex] = item;
      continue;
    }
    itemIndexById.set(item.id, merged.length);
    merged.push(item);
  }

  return merged;
}

export async function migrateInputQueueState(
  fromSessionId?: string,
  toSessionId?: string,
) {
  if (!fromSessionId || !toSessionId || fromSessionId === toSessionId) return;
  if (typeof localStorage === 'undefined') return;

  try {
    await withInputQueueMutationLocks([fromSessionId, toSessionId], () => {
      const fromKey = getInputQueueStorageKey(fromSessionId);
      const toKey = getInputQueueStorageKey(toSessionId);
      const fromRawState = localStorage.getItem(fromKey);
      if (!fromRawState) return;

      const toRawState = localStorage.getItem(toKey);
      const fromState = readInputQueueState(fromSessionId);
      const toState = readInputQueueState(toSessionId);
      const mergedState = normalizeInputQueueState({
        ...fromState,
        ...toState,
        items: mergeInputQueueItems(fromState.items, toState.items),
        paused: fromState.paused || toState.paused,
        ownerTabId: toState.ownerTabId || fromState.ownerTabId,
        ownerUpdatedAt: toState.ownerUpdatedAt ?? fromState.ownerUpdatedAt,
        command: toState.command ?? fromState.command,
        updatedAt: Date.now(),
      });
      const nextRawState = isInputQueueStateEmpty(mergedState)
        ? null
        : JSON.stringify(mergedState);

      localStorage.removeItem(fromKey);
      if (nextRawState) {
        localStorage.setItem(toKey, nextRawState);
      } else {
        localStorage.removeItem(toKey);
      }

      notifyInputQueueStorageChange(fromKey, fromRawState, null);
      notifyInputQueueStorageChange(toKey, toRawState, nextRawState);
    });
  } catch (error) {
    console.error('migrate input queue failed:', error);
  }
}
