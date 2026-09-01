import type {
  IAgentScopeRuntimeWebUICancelResult,
  IAgentScopeRuntimeWebUIExecutionSource,
  IAgentScopeRuntimeWebUIRunAcceptedResult,
  IAgentScopeRuntimeWebUIRunEvent,
  IAgentScopeRuntimeWebUIRunHandle,
  IAgentScopeRuntimeWebUIRunListener,
  IAgentScopeRuntimeWebUIRunResult,
  IAgentScopeRuntimeWebUIRunSessionResult,
  IAgentScopeRuntimeWebUIRunState,
} from '../types';

type Resolver<T> = (value: T) => void;

function deferred<T>() {
  let resolve: Resolver<T> = () => undefined;
  const promise = new Promise<T>((next) => {
    resolve = next;
  });
  return { promise, resolve };
}

const TERMINAL_STATES = new Set<IAgentScopeRuntimeWebUIRunState>([
  'completed',
  'failed',
  'canceled',
]);

export interface CreateRunLifecycleOptions {
  runId: string;
  clientRequestId?: string;
  source: IAgentScopeRuntimeWebUIExecutionSource;
  sessionId?: string;
  publish?: (event: IAgentScopeRuntimeWebUIRunEvent) => void;
  cancel: () => Promise<IAgentScopeRuntimeWebUICancelResult>;
}

export class ChatRunLifecycle {
  readonly handle: IAgentScopeRuntimeWebUIRunHandle;
  private state: IAgentScopeRuntimeWebUIRunState = 'preparing';
  private sessionId?: string;
  private backendAccepted = false;
  private terminal = false;
  private readonly listeners = new Set<IAgentScopeRuntimeWebUIRunListener>();
  private readonly sessionDeferred = deferred<IAgentScopeRuntimeWebUIRunSessionResult>();
  private readonly acceptedDeferred = deferred<IAgentScopeRuntimeWebUIRunAcceptedResult>();
  private readonly completionDeferred = deferred<IAgentScopeRuntimeWebUIRunResult>();

  constructor(private readonly options: CreateRunLifecycleOptions) {
    this.handle = {
      runId: options.runId,
      clientRequestId: options.clientRequestId,
      source: options.source,
      session: this.sessionDeferred.promise,
      accepted: this.acceptedDeferred.promise,
      completion: this.completionDeferred.promise,
      getState: () => this.state,
      cancel: options.cancel,
      subscribe: (listener) => {
        this.listeners.add(listener);
        return () => this.listeners.delete(listener);
      },
    };
    if (options.sessionId) this.resolveSession(options.sessionId);
    this.emit(undefined);
  }

  getState() {
    return this.state;
  }

  getSessionId() {
    return this.sessionId;
  }

  isTerminal() {
    return this.terminal;
  }

  resolveSession(sessionId: string) {
    if (!this.sessionId) {
      this.sessionId = sessionId;
      this.sessionDeferred.resolve({
        runId: this.options.runId,
        resolved: true,
        sessionId,
      });
    }
  }

  markSubmitting() {
    this.transition('submitting');
  }

  markAccepted(sessionId: string) {
    this.resolveSession(sessionId);
    if (!this.backendAccepted) {
      this.backendAccepted = true;
      this.acceptedDeferred.resolve({
        runId: this.options.runId,
        clientRequestId: this.options.clientRequestId,
        sessionId,
        accepted: true,
      });
    }
    this.transition('accepted');
  }

  markStreaming() {
    this.transition('streaming');
  }

  markDisconnected(error?: unknown) {
    if (this.terminal || this.state === 'canceling') return;
    this.transition('disconnected', error);
  }

  markReconnecting() {
    this.transition('reconnecting');
  }

  markCanceling() {
    this.transition('canceling');
  }

  complete() {
    this.settle('completed', false);
  }

  fail(error: unknown) {
    this.settle('failed', !this.backendAccepted, error);
  }

  cancel(error?: unknown) {
    this.settle('canceled', false, error);
  }

  private transition(state: IAgentScopeRuntimeWebUIRunState, error?: unknown) {
    if (this.terminal || this.state === state) return;
    const previousState = this.state;
    this.state = state;
    this.emit(previousState, error);
  }

  private settle(
    state: 'completed' | 'failed' | 'canceled',
    retryable: boolean,
    error?: unknown,
  ) {
    if (this.terminal) return;
    const previousState = this.state;
    this.state = state;
    this.terminal = true;
    if (!this.sessionId) {
      this.sessionDeferred.resolve({
        runId: this.options.runId,
        resolved: false,
        error,
      });
    }
    if (!this.backendAccepted) {
      this.acceptedDeferred.resolve({
        runId: this.options.runId,
        clientRequestId: this.options.clientRequestId,
        sessionId: this.sessionId,
        accepted: false,
        error,
      });
    }
    const result: IAgentScopeRuntimeWebUIRunResult = {
      runId: this.options.runId,
      clientRequestId: this.options.clientRequestId,
      sessionId: this.sessionId,
      source: this.options.source,
      status: state,
      backendAccepted: this.backendAccepted,
      retryable,
      error,
    };
    this.emit(previousState, error, retryable);
    this.completionDeferred.resolve(result);
  }

  private emit(
    previousState?: IAgentScopeRuntimeWebUIRunState,
    error?: unknown,
    retryable?: boolean,
  ) {
    const event: IAgentScopeRuntimeWebUIRunEvent = {
      runId: this.options.runId,
      clientRequestId: this.options.clientRequestId,
      sessionId: this.sessionId,
      source: this.options.source,
      previousState,
      state: this.state,
      backendAccepted: this.backendAccepted,
      retryable,
      error,
      timestamp: Date.now(),
    };
    for (const listener of Array.from(this.listeners)) {
      try {
        listener(event);
      } catch (listenerError) {
        console.error('run event listener failed:', listenerError);
      }
    }
    this.options.publish?.(event);
  }
}

export function isTerminalRunState(state: IAgentScopeRuntimeWebUIRunState) {
  return TERMINAL_STATES.has(state);
}
