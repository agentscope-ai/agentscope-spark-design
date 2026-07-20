import assert from 'node:assert/strict';
import {
  assignInputQueueOwner,
  canSubmitDirectly,
  createEmptyInputQueueState,
  createInputQueueFetchPayload,
  createQueuedInputItem,
  createSendNowCommand,
  dequeueNextQueuedInput,
  enqueueInputQueueState,
  enqueueQueuedInput,
  getInputQueueStorageKey,
  getInputQueueTabId,
  hasInputQueueWork,
  INPUT_QUEUE_OWNER_TTL,
  INPUT_QUEUE_TAB_ID_STORAGE_KEY,
  isInputQueueOwnedByTab,
  isInputQueueOwner,
  isInputQueueStateEmpty,
  removeQueuedInput,
  reorderQueuedInput,
  resetInputQueueTabId,
  restoreFailedQueuedInput,
  restoreQueuedInputAfterSubmitError,
  retryQueuedInput,
  shouldClaimInputQueueOwner,
  updateQueuedInputQuery,
} from '../index';
import {
  areInputQueueSessionsEquivalent,
  getInputQueueChatSessionIdForQueue,
  getInputQueueCompletionSessionIds,
  getInputQueueRouteQueueSessionId,
  getInputQueueVisibleChatSessionId,
  getInputQueueVisibleSessionId,
  resolveInputQueueSessionId,
} from '../session';
import { persistInputQueueState, readInputQueueState } from '../storage';

const input = (query: string) => ({ query });

function installSessionStorageMock() {
  const previousDescriptor = Object.getOwnPropertyDescriptor(
    globalThis,
    'sessionStorage',
  );
  const storage = new Map<string, string>();

  Object.defineProperty(globalThis, 'sessionStorage', {
    configurable: true,
    value: {
      getItem: (key: string) => storage.get(key) ?? null,
      setItem: (key: string, value: string) => {
        storage.set(key, value);
      },
      removeItem: (key: string) => {
        storage.delete(key);
      },
    },
  });

  return () => {
    if (previousDescriptor) {
      Object.defineProperty(globalThis, 'sessionStorage', previousDescriptor);
    } else {
      delete (
        globalThis as typeof globalThis & {
          sessionStorage?: Storage;
        }
      ).sessionStorage;
    }
  };
}

function installLocalStorageMock() {
  const previousDescriptor = Object.getOwnPropertyDescriptor(
    globalThis,
    'localStorage',
  );
  const storage = new Map<string, string>();

  Object.defineProperty(globalThis, 'localStorage', {
    configurable: true,
    value: {
      getItem: (key: string) => storage.get(key) ?? null,
      setItem: (key: string, value: string) => {
        storage.set(key, value);
      },
      removeItem: (key: string) => {
        storage.delete(key);
      },
    },
  });

  return () => {
    if (previousDescriptor) {
      Object.defineProperty(globalThis, 'localStorage', previousDescriptor);
    } else {
      delete (
        globalThis as typeof globalThis & {
          localStorage?: Storage;
        }
      ).localStorage;
    }
  };
}

function test(name: string, fn: () => void) {
  try {
    fn();
    console.log(`ok - ${name}`);
  } catch (error) {
    console.error(`not ok - ${name}`);
    throw error;
  }
}

test('enqueue appends inputs in FIFO order and dequeue consumes the head', () => {
  let queue = enqueueQueuedInput([], input('first'), {
    id: 'q1',
    now: 1,
  }).queue;
  queue = enqueueQueuedInput(queue, input('second'), {
    id: 'q2',
    now: 2,
  }).queue;

  const first = dequeueNextQueuedInput(queue);
  assert.equal(first.item?.data.query, 'first');
  assert.deepEqual(
    first.queue.map((item) => item.data.query),
    ['second'],
  );

  const second = dequeueNextQueuedInput(first.queue);
  assert.equal(second.item?.data.query, 'second');
  assert.equal(second.queue.length, 0);
});

test('direct submit is allowed only when idle, queue is empty and no drain is active', () => {
  assert.equal(
    canSubmitDirectly({ loading: false, queueLength: 0, draining: false }),
    true,
  );
  assert.equal(
    canSubmitDirectly({ loading: true, queueLength: 0, draining: false }),
    false,
  );
  assert.equal(
    canSubmitDirectly({ loading: false, queueLength: 1, draining: false }),
    false,
  );
  assert.equal(
    canSubmitDirectly({ loading: false, queueLength: 0, draining: true }),
    false,
  );
  assert.equal(
    canSubmitDirectly({
      loading: false,
      queueLength: 0,
      draining: false,
      paused: true,
    }),
    false,
  );
  assert.equal(
    canSubmitDirectly({
      loading: false,
      queueLength: 0,
      draining: false,
      canExecute: false,
    }),
    false,
  );
  assert.equal(
    canSubmitDirectly({
      loading: false,
      queueLength: 0,
      draining: false,
      sessionRunning: true,
    }),
    false,
  );
});

test('enqueue rejects new input when the queue reaches max size', () => {
  const queue = enqueueQueuedInput([], input('first'), {
    id: 'q1',
    maxSize: 1,
  }).queue;
  const result = enqueueQueuedInput(queue, input('second'), {
    id: 'q2',
    maxSize: 1,
  });

  assert.equal(result.reason, 'full');
  assert.deepEqual(
    result.queue.map((item) => item.id),
    ['q1'],
  );
});

test('full queue state is not rewritten when enqueue is rejected', () => {
  const state = enqueueInputQueueState(
    createEmptyInputQueueState(1),
    input('first'),
    {
      id: 'q1',
      maxSize: 1,
      now: 2,
    },
  ).state;
  const result = enqueueInputQueueState(state, input('second'), {
    id: 'q2',
    maxSize: 1,
    now: 3,
  });

  assert.equal(result.reason, 'full');
  assert.equal(result.state, state);
});

test('queued input item preserves full message body aliases', () => {
  const file = { uid: 'f1', name: 'shot.png', response: { url: '/shot.png' } };
  const item = createQueuedInputItem({
    query: 'with file',
    fileList: [file as any],
  });

  assert.equal(item.data.text, 'with file');
  assert.deepEqual(item.data.attachments, [file]);
});

test('background fetch payload carries the target chat session id', () => {
  const signal = new AbortController().signal;
  const payload = createInputQueueFetchPayload(
    [{ role: 'user', content: [{ type: 'text', text: 'queued' }] }],
    {
      query: 'queued',
      session_id: 'backend-session-a',
      user_id: 'user-a',
      channel: 'web',
      agent_id: 'agent-a',
      biz_params: {
        user_prompt_params: {
          mode: 'queue',
        },
      },
    },
    'session-a',
    signal,
  );

  assert.equal(payload.session_id, 'backend-session-a');
  assert.equal(payload.user_id, 'user-a');
  assert.equal(payload.channel, 'web');
  assert.equal(payload.agent_id, 'agent-a');
  assert.equal(payload.signal, signal);
  assert.deepEqual(payload.biz_params, {
    user_prompt_params: {
      mode: 'queue',
    },
  });
});

test('failed send is restored at the queue head and blocks automatic dequeue', () => {
  const original = enqueueQueuedInput([], input('send me'), {
    id: 'q1',
  }).queue[0];
  const queue = restoreFailedQueuedInput([], original, new Error('network'));

  assert.equal(queue[0].status, 'failed');
  assert.equal(queue[0].retryCount, 1);
  assert.equal(queue[0].errorMessage, 'network');

  const next = dequeueNextQueuedInput(queue);
  assert.equal(next.item, undefined);
  assert.equal(next.queue, queue);
});

test('retry marks a failed item pending so it can be sent again', () => {
  const original = enqueueQueuedInput([], input('retry me'), {
    id: 'q1',
  }).queue[0];
  const failed = restoreFailedQueuedInput([], original, 'boom');
  const retried = retryQueuedInput(failed, 'q1');
  const next = dequeueNextQueuedInput(retried);

  assert.equal(retried[0].status, 'pending');
  assert.equal(retried[0].errorMessage, undefined);
  assert.equal(next.item?.id, 'q1');
});

test('send-now failure restores the exact item as failed without duplicating it', () => {
  const target = enqueueQueuedInput([], input('send now'), {
    id: 'q1',
  }).queue[0];
  const remaining = enqueueQueuedInput([], input('later'), {
    id: 'q2',
  }).queue;

  const restored = restoreQueuedInputAfterSubmitError(
    remaining,
    target,
    new Error('network down'),
  );
  assert.deepEqual(
    restored.map((item) => item.id),
    ['q1', 'q2'],
  );
  assert.equal(restored[0].status, 'failed');
  assert.equal(restored[0].errorMessage, 'network down');
  assert.equal(
    restoreQueuedInputAfterSubmitError(
      restored,
      target,
      new Error('network down'),
    ),
    restored,
  );
});

test('accepted send failure is consumed instead of restored', () => {
  const target = enqueueQueuedInput([], input('accepted'), {
    id: 'q1',
  }).queue[0];
  const queue = enqueueQueuedInput([], input('later'), { id: 'q2' }).queue;

  assert.equal(
    restoreQueuedInputAfterSubmitError(queue, target, new Error('aborted'), {
      interrupted: true,
      shouldRestore: false,
    }),
    queue,
  );
});

test('remove deletes only the selected queued input', () => {
  let queue = enqueueQueuedInput([], input('first'), { id: 'q1' }).queue;
  queue = enqueueQueuedInput(queue, input('second'), { id: 'q2' }).queue;

  assert.deepEqual(
    removeQueuedInput(queue, 'q1').map((item) => item.id),
    ['q2'],
  );
  assert.deepEqual(
    removeQueuedInput(queue, 'missing').map((item) => item.id),
    ['q1', 'q2'],
  );
});

test('queue state keeps owner and paused metadata separate from items', () => {
  const empty = createEmptyInputQueueState(1);
  const queued = enqueueInputQueueState(empty, input('first'), {
    id: 'q1',
    now: 2,
    ownerTabId: 'tab-a',
  }).state;

  assert.equal(queued.ownerTabId, 'tab-a');
  assert.equal(queued.ownerUpdatedAt, 2);
  assert.equal(queued.paused, false);
  assert.deepEqual(
    queued.items.map((item) => item.id),
    ['q1'],
  );
});

test('tab identity survives refresh storage and can be rotated for duplicated tabs', () => {
  const restoreSessionStorage = installSessionStorageMock();
  try {
    const first = getInputQueueTabId();
    const second = getInputQueueTabId();
    assert.equal(second, first);
    assert.equal(sessionStorage.getItem(INPUT_QUEUE_TAB_ID_STORAGE_KEY), first);

    const rotated = resetInputQueueTabId();
    assert.notEqual(rotated, first);
    assert.equal(getInputQueueTabId(), rotated);
  } finally {
    restoreSessionStorage();
  }
});

test('active owner metadata is preserved before peer tabs enqueue', () => {
  const ownedByA = assignInputQueueOwner(
    createEmptyInputQueueState(1),
    'tab-a',
    2,
  );
  const queuedByB = enqueueInputQueueState(ownedByA, input('from tab b'), {
    id: 'q1',
    now: 3,
    ownerTabId: 'tab-b',
  }).state;

  assert.equal(hasInputQueueWork(ownedByA), false);
  assert.equal(isInputQueueStateEmpty(ownedByA), false);
  assert.equal(queuedByB.ownerTabId, 'tab-a');
  assert.equal(queuedByB.ownerUpdatedAt, 2);
});

test('queue owner is isolated by tab and can be reclaimed when stale', () => {
  const owned = assignInputQueueOwner(
    createEmptyInputQueueState(1),
    'tab-a',
    10,
  );

  assert.equal(isInputQueueOwner(owned, 'tab-a', 12), true);
  assert.equal(isInputQueueOwner(owned, 'tab-b', 12), false);
  assert.equal(isInputQueueOwnedByTab(owned, 'tab-a'), true);
  assert.equal(isInputQueueOwnedByTab(owned, 'tab-b'), false);
  assert.equal(
    isInputQueueOwner(owned, 'tab-b', 10 + INPUT_QUEUE_OWNER_TTL + 1),
    true,
  );
  assert.equal(isInputQueueOwnedByTab(owned, 'tab-b'), false);
});

test('ownerless empty queue can be claimed for the first direct submit', () => {
  const ownerless = createEmptyInputQueueState(1);
  assert.equal(isInputQueueOwner(ownerless, 'tab-a', 2), true);
  assert.equal(isInputQueueOwnedByTab(ownerless, 'tab-a'), false);

  const ownedByA = assignInputQueueOwner(ownerless, 'tab-a', 3);
  assert.equal(isInputQueueOwner(ownedByA, 'tab-a', 4), true);
  assert.equal(isInputQueueOwner(ownedByA, 'tab-b', 4), false);
});

test('peer tab claims ownership only when a non-empty queue is ownerless or stale', () => {
  const ownerless = enqueueInputQueueState(
    createEmptyInputQueueState(1),
    input('pending'),
    { id: 'q1', now: 2 },
  ).state;
  assert.equal(shouldClaimInputQueueOwner(ownerless, 'tab-b', 3), true);

  const ownedByA = assignInputQueueOwner(ownerless, 'tab-a', 10, {
    force: true,
  });
  assert.equal(shouldClaimInputQueueOwner(ownedByA, 'tab-a', 11), false);
  assert.equal(shouldClaimInputQueueOwner(ownedByA, 'tab-b', 11), false);
  assert.equal(
    shouldClaimInputQueueOwner(
      ownedByA,
      'tab-b',
      10 + INPUT_QUEUE_OWNER_TTL + 1,
    ),
    true,
  );
  assert.equal(
    shouldClaimInputQueueOwner(createEmptyInputQueueState(20), 'tab-b', 21),
    false,
  );

  const ownerOnly = assignInputQueueOwner(
    createEmptyInputQueueState(30),
    'tab-a',
    31,
  );
  assert.equal(
    shouldClaimInputQueueOwner(
      ownerOnly,
      'tab-b',
      31 + INPUT_QUEUE_OWNER_TTL + 1,
    ),
    false,
  );
});

test('drag reorder moves a queued input before the drop target', () => {
  let queue = enqueueQueuedInput([], input('first'), { id: 'q1' }).queue;
  queue = enqueueQueuedInput(queue, input('second'), { id: 'q2' }).queue;
  queue = enqueueQueuedInput(queue, input('third'), { id: 'q3' }).queue;

  assert.deepEqual(
    reorderQueuedInput(queue, 'q3', 'q1').map((item) => item.id),
    ['q3', 'q1', 'q2'],
  );
  assert.equal(reorderQueuedInput(queue, 'missing', 'q1'), queue);
  assert.equal(reorderQueuedInput(queue, 'q2', 'q2'), queue);
});

test('queued input query can be edited before sending', () => {
  const queue = enqueueQueuedInput([], input('old'), { id: 'q1' }).queue;
  const edited = updateQueuedInputQuery(
    restoreFailedQueuedInput([], queue[0], 'boom'),
    'q1',
    'new',
  );

  assert.equal(edited[0].data.query, 'new');
  assert.equal(edited[0].data.text, 'new');
  assert.equal(edited[0].status, 'pending');
  assert.equal(edited[0].errorMessage, undefined);
});

test('queue state is removable only after queued work and owner metadata are gone', () => {
  assert.equal(isInputQueueStateEmpty(createEmptyInputQueueState()), true);

  const queued = enqueueInputQueueState(
    createEmptyInputQueueState(),
    input('first'),
    {
      id: 'q1',
    },
  ).state;
  assert.equal(isInputQueueStateEmpty(queued), false);

  const ownerOnly = assignInputQueueOwner(
    createEmptyInputQueueState(10),
    'tab-a',
    11,
  );
  assert.equal(isInputQueueStateEmpty(ownerOnly), false);
  assert.equal(hasInputQueueWork(ownerOnly), false);
});

test('send-now command carries selected task and source tab', () => {
  const command = createSendNowCommand('q1', 'tab-a', 100);

  assert.equal(command.type, 'send-now');
  assert.equal(command.itemId, 'q1');
  assert.equal(command.sourceTabId, 'tab-a');
  assert.equal(command.createdAt, 100);
});

test('queue session resolver requires an enabled queue and a resolvable session id', () => {
  assert.equal(
    resolveInputQueueSessionId('session-a', { queueEnabled: false }),
    undefined,
  );
  assert.equal(
    resolveInputQueueSessionId(undefined, { queueEnabled: true }),
    undefined,
  );
  assert.equal(
    resolveInputQueueSessionId('session-a', {
      queueEnabled: true,
      getSessionId: () => undefined,
    }),
    'session-a',
  );
  assert.equal(
    resolveInputQueueSessionId('session-a', {
      queueEnabled: true,
      getSessionId: () => '',
    }),
    undefined,
  );
  assert.equal(
    resolveInputQueueSessionId('session-a', {
      queueEnabled: true,
      getSessionId: (sessionId) => `queue-${sessionId}`,
    }),
    'queue-session-a',
  );
});

test('initial conversation uses pending controlled session for queue before external session catches up', () => {
  const snapshot = {
    currentSessionId: undefined,
    pendingRouteSessionId: 'temp-session',
    activeSessionId: undefined,
  };

  assert.equal(getInputQueueVisibleChatSessionId(snapshot), 'temp-session');
  assert.equal(
    getInputQueueRouteQueueSessionId(snapshot, { queueEnabled: true }),
    'temp-session',
  );
});

test('queue does not start when no current, pending or active session id exists', () => {
  const snapshot = {
    currentSessionId: undefined,
    pendingRouteSessionId: undefined,
    activeSessionId: undefined,
  };

  assert.equal(getInputQueueVisibleChatSessionId(snapshot), undefined);
  assert.equal(
    getInputQueueVisibleSessionId(snapshot, { queueEnabled: true }),
    undefined,
  );
});

test('active session can back the queue while controlled queue session is still absent', () => {
  const snapshot = {
    currentSessionId: undefined,
    pendingRouteSessionId: undefined,
    activeSessionId: 'active-session',
  };

  assert.equal(getInputQueueVisibleChatSessionId(snapshot), 'active-session');
  assert.equal(
    getInputQueueVisibleSessionId(snapshot, { queueEnabled: true }),
    'active-session',
  );
  assert.equal(
    getInputQueueRouteQueueSessionId(snapshot, { queueEnabled: true }),
    undefined,
  );
});

test('queued sends can resolve the active chat session after leaving the visible route', () => {
  assert.equal(
    getInputQueueChatSessionIdForQueue(
      {
        currentSessionId: undefined,
        pendingRouteSessionId: undefined,
        activeSessionId: 'active-session',
      },
      { queueEnabled: true },
      'active-session',
    ),
    'active-session',
  );
  assert.equal(
    getInputQueueChatSessionIdForQueue(
      {
        currentSessionId: 'other-session',
        pendingRouteSessionId: undefined,
        activeSessionId: undefined,
      },
      { queueEnabled: true },
      'active-session',
    ),
    undefined,
  );
});

test('current session takes precedence over pending controlled and active request ids', () => {
  const snapshot = {
    currentSessionId: 'current-session',
    pendingRouteSessionId: 'pending-session',
    activeSessionId: 'active-session',
  };

  assert.equal(getInputQueueVisibleChatSessionId(snapshot), 'current-session');
  assert.equal(
    getInputQueueVisibleSessionId(snapshot, { queueEnabled: true }),
    'current-session',
  );
});

test('custom queue session resolver can keep temp id and real id on one stable key', () => {
  const backendSessionById = new Map([
    ['temp-1700000000000', 'temp-1700000000000'],
    ['real-chat-uuid', 'temp-1700000000000'],
  ]);
  const getStableBackendSessionId = (sessionId?: string) =>
    backendSessionById.get(sessionId || '') || sessionId;

  assert.equal(
    resolveInputQueueSessionId('temp-1700000000000', {
      queueEnabled: true,
      getSessionId: getStableBackendSessionId,
    }),
    'temp-1700000000000',
  );
  assert.equal(
    resolveInputQueueSessionId('real-chat-uuid', {
      queueEnabled: true,
      getSessionId: getStableBackendSessionId,
    }),
    'temp-1700000000000',
  );
  assert.equal(
    getInputQueueChatSessionIdForQueue(
      {
        currentSessionId: 'real-chat-uuid',
        pendingRouteSessionId: undefined,
        activeSessionId: 'temp-1700000000000',
      },
      {
        queueEnabled: true,
        getSessionId: getStableBackendSessionId,
      },
      'temp-1700000000000',
    ),
    'temp-1700000000000',
  );
});

test('queue session equivalence follows the custom stable queue key', () => {
  const backendSessionById = new Map([
    ['temp-1700000000000', 'temp-1700000000000'],
    ['real-chat-uuid', 'temp-1700000000000'],
  ]);
  const getStableBackendSessionId = (sessionId?: string) =>
    backendSessionById.get(sessionId || '') || sessionId;

  assert.equal(
    areInputQueueSessionsEquivalent('temp-1700000000000', 'real-chat-uuid', {
      queueEnabled: true,
      getSessionId: getStableBackendSessionId,
    }),
    true,
  );
  assert.equal(
    areInputQueueSessionsEquivalent('session-a', 'session-b', {
      queueEnabled: true,
    }),
    false,
  );
  assert.equal(
    areInputQueueSessionsEquivalent('session-a', 'session-a', {
      queueEnabled: false,
    }),
    true,
  );
});

test('completion releases both active and visible queue session aliases', () => {
  const backendSessionById = new Map([
    ['temp-1700000000000', 'temp-1700000000000'],
    ['real-chat-uuid', 'real-chat-uuid'],
  ]);
  const getBackendSessionId = (sessionId?: string) =>
    backendSessionById.get(sessionId || '') || sessionId;

  assert.deepEqual(
    getInputQueueCompletionSessionIds(
      {
        activeSessionId: 'temp-1700000000000',
        currentSessionId: 'real-chat-uuid',
      },
      {
        queueEnabled: true,
        getSessionId: getBackendSessionId,
      },
    ),
    ['temp-1700000000000', 'real-chat-uuid'],
  );
});

test('completion queue session aliases are deduplicated after normalization', () => {
  const backendSessionById = new Map([
    ['temp-1700000000000', 'backend-session-id'],
    ['real-chat-uuid', 'backend-session-id'],
  ]);
  const getBackendSessionId = (sessionId?: string) =>
    backendSessionById.get(sessionId || '') || sessionId;

  assert.deepEqual(
    getInputQueueCompletionSessionIds(
      {
        activeSessionId: 'temp-1700000000000',
        currentSessionId: 'real-chat-uuid',
      },
      {
        queueEnabled: true,
        getSessionId: getBackendSessionId,
      },
    ),
    ['backend-session-id'],
  );
});

test('switching sessions keeps each session queue isolated by storage key', () => {
  const storage = new Map<
    string,
    ReturnType<typeof createEmptyInputQueueState>
  >();
  const write = (
    sessionId: string,
    state: ReturnType<typeof createEmptyInputQueueState>,
  ) => {
    storage.set(getInputQueueStorageKey(sessionId), state);
  };
  const read = (sessionId: string) =>
    storage.get(getInputQueueStorageKey(sessionId)) ||
    createEmptyInputQueueState();

  const sessionA = enqueueInputQueueState(
    createEmptyInputQueueState(1),
    input('a-1'),
    { id: 'qa-1', now: 2 },
  ).state;
  write('session-a', sessionA);

  const sessionB = enqueueInputQueueState(
    createEmptyInputQueueState(3),
    input('b-1'),
    { id: 'qb-1', now: 4 },
  ).state;
  write('session-b', sessionB);

  assert.deepEqual(
    read('session-a').items.map((item) => item.data.query),
    ['a-1'],
  );
  assert.deepEqual(
    read('session-b').items.map((item) => item.data.query),
    ['b-1'],
  );
  assert.notEqual(
    getInputQueueStorageKey('session-a'),
    getInputQueueStorageKey('session-b'),
  );
});

test('persisted queue state round trips and removes empty ownerless state', () => {
  const restoreLocalStorage = installLocalStorageMock();
  try {
    const queued = enqueueInputQueueState(
      createEmptyInputQueueState(1),
      input('stored'),
      { id: 'q1', now: 2 },
    ).state;

    persistInputQueueState('session-a', queued);
    assert.deepEqual(
      readInputQueueState('session-a').items.map((item) => item.data.query),
      ['stored'],
    );
    assert.notEqual(
      localStorage.getItem(getInputQueueStorageKey('session-a')),
      null,
    );

    persistInputQueueState('session-a', createEmptyInputQueueState(3));
    assert.equal(
      localStorage.getItem(getInputQueueStorageKey('session-a')),
      null,
    );
  } finally {
    restoreLocalStorage();
  }
});

test('two tabs opened on the same session share a queue key but keep one send owner', () => {
  const sessionKeyFromTabA = getInputQueueStorageKey('shared-session');
  const sessionKeyFromTabB = getInputQueueStorageKey('shared-session');
  const ownedByA = assignInputQueueOwner(
    createEmptyInputQueueState(1),
    'tab-a',
    10,
  );

  assert.equal(sessionKeyFromTabA, sessionKeyFromTabB);
  assert.equal(isInputQueueOwner(ownedByA, 'tab-a', 11), true);
  assert.equal(isInputQueueOwner(ownedByA, 'tab-b', 11), false);
});
