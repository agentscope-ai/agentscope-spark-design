import type { ChatRunLifecycle } from './runLifecycle';

/** Wait for the original transport, never a later active session or Run. */
export function waitForRunCancellation(
  lifecycle: ChatRunLifecycle,
  stop: () => void | Promise<void>,
  signal: AbortSignal | undefined,
  timeoutMs = 30000,
): Promise<boolean> {
  return new Promise((resolve, reject) => {
    let settled = false;
    let stopFinished = false;
    let unsubscribe = () => {};
    let timer: ReturnType<typeof setTimeout>;
    let check = () => {};
    const finish = (terminal: boolean, failure?: { error: unknown }) => {
      if (settled) return;
      settled = true;
      clearTimeout(timer);
      unsubscribe();
      signal?.removeEventListener('abort', check);
      if (failure) reject(failure.error);
      else resolve(terminal);
    };
    check = () => {
      if (!stopFinished) return;
      if (lifecycle.isTerminal()) finish(true);
      else if (
        !signal ||
        signal.aborted ||
        lifecycle.getState() === 'disconnected'
      )
        finish(false);
    };
    timer = setTimeout(
      () => finish(false, { error: new Error('Chat cancellation timed out') }),
      Number.isFinite(timeoutMs) && timeoutMs >= 0 ? timeoutMs : 30000,
    );
    unsubscribe = lifecycle.handle.subscribe(check);
    signal?.addEventListener('abort', check, { once: true });
    void lifecycle.handle.completion.then(check);
    // Call even for a detached Run: its backend may still be running.
    void Promise.resolve()
      .then(stop)
      .then(
        () => {
          stopFinished = true;
          check();
        },
        (error) => finish(false, { error }),
      );
  });
}
