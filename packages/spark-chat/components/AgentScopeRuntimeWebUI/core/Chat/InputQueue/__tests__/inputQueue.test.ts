import assert from 'node:assert/strict';
import {
  assignInputQueueOwner,
  canSubmitDirectly,
  createEmptyInputQueueState,
  createQueuedInputItem,
  createSendNowCommand,
  dequeueNextQueuedInput,
  enqueueInputQueueState,
  enqueueQueuedInput,
  INPUT_QUEUE_OWNER_TTL,
  isInputQueueOwner,
  isInputQueueStateEmpty,
  reorderQueuedInput,
  removeQueuedInput,
  restoreFailedQueuedInput,
  retryQueuedInput,
  updateQueuedInputQuery,
} from '../index';

const input = (query: string) => ({ query });

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
  assert.deepEqual(first.queue.map(item => item.data.query), ['second']);

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
  assert.deepEqual(result.queue.map(item => item.id), ['q1']);
});

test('full queue state is not rewritten when enqueue is rejected', () => {
  const state = enqueueInputQueueState(createEmptyInputQueueState(1), input('first'), {
    id: 'q1',
    maxSize: 1,
    now: 2,
  }).state;
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

test('remove deletes only the selected queued input', () => {
  let queue = enqueueQueuedInput([], input('first'), { id: 'q1' }).queue;
  queue = enqueueQueuedInput(queue, input('second'), { id: 'q2' }).queue;

  assert.deepEqual(removeQueuedInput(queue, 'q1').map(item => item.id), ['q2']);
  assert.deepEqual(removeQueuedInput(queue, 'missing').map(item => item.id), [
    'q1',
    'q2',
  ]);
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
  assert.deepEqual(queued.items.map(item => item.id), ['q1']);
});

test('queue owner is isolated by tab and can be reclaimed when stale', () => {
  const owned = assignInputQueueOwner(createEmptyInputQueueState(1), 'tab-a', 10);

  assert.equal(isInputQueueOwner(owned, 'tab-a', 12), true);
  assert.equal(isInputQueueOwner(owned, 'tab-b', 12), false);
  assert.equal(isInputQueueOwner(owned, 'tab-b', 10 + INPUT_QUEUE_OWNER_TTL + 1), true);
});

test('drag reorder moves a queued input before the drop target', () => {
  let queue = enqueueQueuedInput([], input('first'), { id: 'q1' }).queue;
  queue = enqueueQueuedInput(queue, input('second'), { id: 'q2' }).queue;
  queue = enqueueQueuedInput(queue, input('third'), { id: 'q3' }).queue;

  assert.deepEqual(reorderQueuedInput(queue, 'q3', 'q1').map(item => item.id), [
    'q3',
    'q1',
    'q2',
  ]);
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

test('empty queue state is removable from storage', () => {
  assert.equal(isInputQueueStateEmpty(createEmptyInputQueueState()), true);

  const queued = enqueueInputQueueState(createEmptyInputQueueState(), input('first'), {
    id: 'q1',
  }).state;
  assert.equal(isInputQueueStateEmpty(queued), false);
});

test('send-now command carries selected task and source tab', () => {
  const command = createSendNowCommand('q1', 'tab-a', 100);

  assert.equal(command.type, 'send-now');
  assert.equal(command.itemId, 'q1');
  assert.equal(command.sourceTabId, 'tab-a');
  assert.equal(command.createdAt, 100);
});
