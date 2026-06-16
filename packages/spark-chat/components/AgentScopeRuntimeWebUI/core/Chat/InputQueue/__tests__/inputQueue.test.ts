import assert from 'node:assert/strict';
import {
  canSubmitDirectly,
  dequeueNextQueuedInput,
  enqueueQueuedInput,
  removeQueuedInput,
  restoreFailedQueuedInput,
  retryQueuedInput,
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
