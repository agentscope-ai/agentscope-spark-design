import type { IAgentScopeRuntimeWebUIInputData } from '../../types';

export type QueuedInputStatus = 'pending' | 'failed';

export interface QueuedInputItem {
  id: string;
  data: IAgentScopeRuntimeWebUIInputData;
  status: QueuedInputStatus;
  retryCount: number;
  errorMessage?: string;
  createdAt: number;
}

export interface EnqueueQueuedInputResult {
  queue: QueuedInputItem[];
  item?: QueuedInputItem;
  reason?: 'full';
}

export const MAX_INPUT_QUEUE_SIZE = 50;

let queueId = 0;

export function createQueuedInputItem(
  data: IAgentScopeRuntimeWebUIInputData,
  options?: {
    id?: string;
    now?: number;
  },
): QueuedInputItem {
  return {
    id:
      options?.id ||
      `input-queue-${Date.now().toString(36)}-${(++queueId).toString(36)}`,
    data,
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
  return queue.filter(item => item.id !== id);
}

export function retryQueuedInput(
  queue: QueuedInputItem[],
  id: string,
): QueuedInputItem[] {
  return queue.map(item =>
    item.id === id
      ? {
          ...item,
          status: 'pending',
          errorMessage: undefined,
        }
      : item,
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
      errorMessage: error instanceof Error ? error.message : String(error || ''),
    },
    ...queue,
  ];
}

export function canSubmitDirectly(options: {
  loading: boolean | string;
  queueLength: number;
  draining: boolean;
}) {
  return !options.loading && options.queueLength === 0 && !options.draining;
}
