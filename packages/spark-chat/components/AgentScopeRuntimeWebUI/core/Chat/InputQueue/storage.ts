import {
  createEmptyInputQueueState,
  getInputQueueStorageKey,
  INPUT_QUEUE_STORAGE_TTL,
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

interface FallbackLockRecord {
  token: string;
  expiresAt: number;
}

const FALLBACK_LOCK_PREFIX = 'agentscope-runtime-webui-input-queue-lock';
const FALLBACK_LOCK_TTL = 15_000;
const fallbackLockTails = new Map<string, Promise<void>>();

function getQueueLocks() {
  return typeof navigator !== 'undefined'
    ? (navigator as typeof navigator & { locks?: QueueLocks }).locks
    : undefined;
}

function createFallbackLockToken() {
  return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`;
}

function waitForFallbackLock() {
  return new Promise<void>((resolve) => {
    setTimeout(resolve, 25 + Math.floor(Math.random() * 25));
  });
}

async function withInMemoryLock<T>(
  name: string,
  ifAvailable: boolean,
  fn: () => T | Promise<T>,
): Promise<T | undefined> {
  const previous = fallbackLockTails.get(name);
  if (ifAvailable && previous) return undefined;

  let release = () => {};
  const current = new Promise<void>((resolve) => {
    release = resolve;
  });
  const tail = (previous || Promise.resolve()).then(() => current);
  fallbackLockTails.set(name, tail);
  await previous;

  try {
    return await fn();
  } finally {
    release();
    if (fallbackLockTails.get(name) === tail) {
      fallbackLockTails.delete(name);
    }
  }
}

function readFallbackLock(key: string): FallbackLockRecord | undefined {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return undefined;
    const parsed = JSON.parse(raw) as Partial<FallbackLockRecord>;
    if (
      typeof parsed.token !== 'string' ||
      typeof parsed.expiresAt !== 'number'
    ) {
      return undefined;
    }
    return parsed as FallbackLockRecord;
  } catch {
    return undefined;
  }
}

async function withFallbackLock<T>(
  name: string,
  ifAvailable: boolean,
  fn: () => T | Promise<T>,
): Promise<T | undefined> {
  if (typeof localStorage === 'undefined') {
    return withInMemoryLock(name, ifAvailable, fn);
  }

  const key = `${FALLBACK_LOCK_PREFIX}:${name}`;
  const token = createFallbackLockToken();
  while (true) {
    const now = Date.now();
    const existing = readFallbackLock(key);
    if (!existing || existing.expiresAt <= now) {
      try {
        localStorage.setItem(
          key,
          JSON.stringify({ token, expiresAt: now + FALLBACK_LOCK_TTL }),
        );
        // Yield once so simultaneous contenders can overwrite the candidate;
        // only the token that remains in storage is allowed to enter.
        await Promise.resolve();
        if (readFallbackLock(key)?.token === token) break;
      } catch {
        return withInMemoryLock(name, ifAvailable, fn);
      }
    }

    if (ifAvailable) return undefined;
    await waitForFallbackLock();
  }

  const renewTimer = setInterval(() => {
    const current = readFallbackLock(key);
    if (current?.token !== token) return;
    try {
      localStorage.setItem(
        key,
        JSON.stringify({ token, expiresAt: Date.now() + FALLBACK_LOCK_TTL }),
      );
    } catch {
      // The current critical section remains protected in this document.
    }
  }, FALLBACK_LOCK_TTL / 3);

  try {
    return await fn();
  } finally {
    clearInterval(renewTimer);
    if (readFallbackLock(key)?.token === token) {
      try {
        localStorage.removeItem(key);
      } catch {
        // An expired lease will be reclaimed by the next contender.
      }
    }
  }
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

function toJsonCompatible(
  value: unknown,
  seen = new WeakSet<object>(),
): unknown {
  if (
    value === null ||
    typeof value === 'string' ||
    typeof value === 'number' ||
    typeof value === 'boolean'
  ) {
    return value;
  }
  if (!value || typeof value !== 'object' || seen.has(value)) {
    return undefined;
  }
  if (value instanceof Date) return value.toISOString();
  seen.add(value);
  if (Array.isArray(value)) {
    const next = value.flatMap((item) => {
      const serialized = toJsonCompatible(item, seen);
      return serialized === undefined ? [] : [serialized];
    });
    seen.delete(value);
    return next;
  }
  if (Object.getPrototypeOf(value) !== Object.prototype) {
    seen.delete(value);
    return undefined;
  }

  const next: Record<string, unknown> = {};
  Object.entries(value).forEach(([key, item]) => {
    const serialized = toJsonCompatible(item, seen);
    if (serialized !== undefined) next[key] = serialized;
  });
  seen.delete(value);
  return next;
}

function toPersistedUpload(file: Record<string, any>) {
  return {
    uid: file.uid,
    name: file.name,
    status: file.status,
    url: file.url,
    thumbUrl: file.thumbUrl,
    size: file.size,
    type: file.type,
    percent: file.percent,
    file_id: file.file_id,
    response: file.response?.url ? { url: file.response.url } : undefined,
  };
}

function toPersistedQueueItem(item: QueuedInputItem): QueuedInputItem {
  const { data } = item;
  return {
    ...item,
    data: {
      query: data.query,
      text: data.text,
      fileList: data.fileList?.map(toPersistedUpload),
      attachments: data.attachments?.map(toPersistedUpload),
      images: toJsonCompatible(data.images) as typeof data.images,
      mentions: toJsonCompatible(data.mentions) as typeof data.mentions,
      quote: toJsonCompatible(data.quote) as typeof data.quote,
      session_id: data.session_id,
      user_id: data.user_id,
      channel: data.channel,
      agent_id: data.agent_id,
      context: toJsonCompatible(data.context) as typeof data.context,
      biz_params: toJsonCompatible(data.biz_params) as typeof data.biz_params,
    },
  };
}

function toPersistedQueueState(state: InputQueueState): InputQueueState {
  return {
    ...state,
    items: state.items.map(toPersistedQueueItem),
  };
}

export function readInputQueueState(sessionId?: string) {
  if (!sessionId || typeof localStorage === 'undefined') {
    return createEmptyInputQueueState();
  }

  try {
    const key = getInputQueueStorageKey(sessionId);
    const raw = localStorage.getItem(key);
    const state = normalizeInputQueueState(raw ? JSON.parse(raw) : undefined);
    const hasWallClockTimestamp = state.updatedAt >= 1_577_836_800_000;
    if (
      raw &&
      hasWallClockTimestamp &&
      Date.now() - state.updatedAt > INPUT_QUEUE_STORAGE_TTL
    ) {
      localStorage.removeItem(key);
      return createEmptyInputQueueState();
    }
    return state;
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
        JSON.stringify(toPersistedQueueState(next)),
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
  const lockName = `agentscope-runtime-webui-input-queue-mutate:${sessionId}`;
  if (!locks?.request) return withFallbackLock(lockName, false, fn);

  return locks.request(lockName, { mode: 'exclusive' }, () => fn());
}

async function withInputQueueMutationLocks<T>(
  sessionIds: string[],
  fn: () => T | Promise<T>,
): Promise<T> {
  const locks = getQueueLocks();
  if (!locks?.request) {
    const lockNames = Array.from(new Set(sessionIds))
      .map(
        (sessionId) =>
          `agentscope-runtime-webui-input-queue-mutate:${sessionId}`,
      )
      .sort();
    const acquireFallback = (index: number): Promise<T> => {
      if (index >= lockNames.length) return Promise.resolve(fn());
      return withFallbackLock(lockNames[index], false, () =>
        acquireFallback(index + 1),
      ) as Promise<T>;
    };
    return acquireFallback(0);
  }

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
  const lockName = `agentscope-runtime-webui-input-queue-send:${sessionId}`;
  if (!locks?.request) return withFallbackLock(lockName, true, fn);

  return locks.request(
    lockName,
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
