import type {
  IAgentScopeRuntimeWebUIRunEvent,
  IAgentScopeRuntimeWebUIRunListener,
} from '../types';

export interface ExecutionEventHub {
  publish: (event: IAgentScopeRuntimeWebUIRunEvent) => void;
  subscribe: (listener: IAgentScopeRuntimeWebUIRunListener) => () => void;
}

export function createExecutionEventHub(): ExecutionEventHub {
  const listeners = new Set<IAgentScopeRuntimeWebUIRunListener>();

  return {
    publish(event) {
      for (const listener of Array.from(listeners)) {
        try {
          listener(event);
        } catch (error) {
          console.error('execution event listener failed:', error);
        }
      }
    },
    subscribe(listener) {
      listeners.add(listener);
      return () => listeners.delete(listener);
    },
  };
}
