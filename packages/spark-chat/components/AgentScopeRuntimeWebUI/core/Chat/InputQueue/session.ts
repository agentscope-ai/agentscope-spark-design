export interface InputQueueSessionResolverOptions {
  queueEnabled: boolean;
  getSessionId?: (sessionId?: string) => string | undefined;
}

export interface InputQueueSessionSnapshot {
  currentSessionId?: string;
  pendingRouteSessionId?: string;
  activeSessionId?: string;
}

export function resolveInputQueueSessionId(
  sessionId: string | undefined,
  options: InputQueueSessionResolverOptions,
) {
  if (!options.queueEnabled) return undefined;
  const resolved = options.getSessionId?.(sessionId) ?? sessionId;
  if (!resolved) return undefined;
  return resolved;
}

export function getInputQueueVisibleChatSessionId(
  snapshot: InputQueueSessionSnapshot,
) {
  return (
    snapshot.currentSessionId ||
    snapshot.pendingRouteSessionId ||
    snapshot.activeSessionId
  );
}

export function getInputQueueRouteSessionId(
  snapshot: InputQueueSessionSnapshot,
) {
  return snapshot.currentSessionId || snapshot.pendingRouteSessionId;
}

export function getInputQueueVisibleSessionId(
  snapshot: InputQueueSessionSnapshot,
  options: InputQueueSessionResolverOptions,
) {
  return resolveInputQueueSessionId(
    getInputQueueVisibleChatSessionId(snapshot),
    options,
  );
}

export function getInputQueueRouteQueueSessionId(
  snapshot: InputQueueSessionSnapshot,
  options: InputQueueSessionResolverOptions,
) {
  return resolveInputQueueSessionId(
    getInputQueueRouteSessionId(snapshot),
    options,
  );
}
