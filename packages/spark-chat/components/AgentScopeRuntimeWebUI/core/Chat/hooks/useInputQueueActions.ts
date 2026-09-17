import { useCallback, type MutableRefObject } from 'react';
import {
  createSendNowCommand,
  removeQueuedInput,
  reorderQueuedInput,
  retryQueuedInput,
  updateQueuedInputQuery,
  type InputQueueState,
} from '../InputQueue';

interface UseInputQueueActionsOptions {
  canExecuteQueue: (state?: InputQueueState) => boolean;
  getActiveQueueSessionId: () => string | undefined;
  scheduleDrainQueue: (sessionId?: string, delay?: number) => void;
  tabIdRef: MutableRefObject<string>;
  updateQueueState: (
    sessionId: string | undefined,
    updater: (state: InputQueueState) => InputQueueState,
  ) => unknown;
}

export default function useInputQueueActions({
  canExecuteQueue,
  getActiveQueueSessionId,
  scheduleDrainQueue,
  tabIdRef,
  updateQueueState,
}: UseInputQueueActionsOptions) {
  const remove = useCallback(
    (id: string) => {
      const sessionId = getActiveQueueSessionId();
      void updateQueueState(sessionId, (state) => ({
        ...state,
        items:
          state.items.find((item) => item.id === id)?.status === 'submitting'
            ? state.items
            : removeQueuedInput(state.items, id),
        updatedAt: Date.now(),
      }));
    },
    [getActiveQueueSessionId, updateQueueState],
  );

  const clear = useCallback(() => {
    const sessionId = getActiveQueueSessionId();
    void updateQueueState(sessionId, (state) => ({
      ...state,
      items: state.items.filter((item) => item.status === 'submitting'),
      command: undefined,
      updatedAt: Date.now(),
    }));
  }, [getActiveQueueSessionId, updateQueueState]);

  const retry = useCallback(
    (id: string) => {
      const sessionId = getActiveQueueSessionId();
      void updateQueueState(sessionId, (state) => ({
        ...state,
        items: retryQueuedInput(state.items, id),
        updatedAt: Date.now(),
      }));
      scheduleDrainQueue(sessionId);
    },
    [getActiveQueueSessionId, scheduleDrainQueue, updateQueueState],
  );

  const togglePaused = useCallback(() => {
    const sessionId = getActiveQueueSessionId();
    void updateQueueState(sessionId, (state) => ({
      ...state,
      paused: canExecuteQueue(state) ? !state.paused : state.paused,
      updatedAt: Date.now(),
    }));
    scheduleDrainQueue(sessionId);
  }, [
    canExecuteQueue,
    getActiveQueueSessionId,
    scheduleDrainQueue,
    updateQueueState,
  ]);

  const reorder = useCallback(
    (sourceId: string, targetId: string) => {
      const sessionId = getActiveQueueSessionId();
      void updateQueueState(sessionId, (state) => ({
        ...state,
        items: reorderQueuedInput(state.items, sourceId, targetId),
        updatedAt: Date.now(),
      }));
    },
    [getActiveQueueSessionId, updateQueueState],
  );

  const updateQuery = useCallback(
    (id: string, query: string) => {
      const sessionId = getActiveQueueSessionId();
      void updateQueueState(sessionId, (state) => ({
        ...state,
        items: updateQueuedInputQuery(state.items, id, query),
        updatedAt: Date.now(),
      }));
    },
    [getActiveQueueSessionId, updateQueueState],
  );

  const sendNow = useCallback(
    (id: string) => {
      const sessionId = getActiveQueueSessionId();
      void updateQueueState(sessionId, (state) => ({
        ...state,
        command:
          canExecuteQueue(state) &&
          state.items.some(
            (item) => item.id === id && item.status === 'pending',
          )
            ? createSendNowCommand(id, tabIdRef.current)
            : state.command,
        updatedAt: Date.now(),
      }));
    },
    [canExecuteQueue, getActiveQueueSessionId, tabIdRef, updateQueueState],
  );

  return {
    removeQueuedInput: remove,
    clearQueuedInputs: clear,
    retryQueuedInput: retry,
    toggleQueuePaused: togglePaused,
    reorderQueuedInput: reorder,
    updateQueuedInputQuery: updateQuery,
    sendQueuedInputNow: sendNow,
  };
}
