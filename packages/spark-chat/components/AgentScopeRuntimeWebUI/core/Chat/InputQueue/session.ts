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

export function areInputQueueSessionsEquivalent(
  left: string | undefined,
  right: string | undefined,
  options: InputQueueSessionResolverOptions,
) {
  if (left === right) return true;
  if (!left || !right) return false;

  const leftQueueSessionId = resolveInputQueueSessionId(left, options);
  const rightQueueSessionId = resolveInputQueueSessionId(right, options);
  return !!leftQueueSessionId && leftQueueSessionId === rightQueueSessionId;
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

export function getInputQueueChatSessionIdForQueue(
  snapshot: InputQueueSessionSnapshot,
  options: InputQueueSessionResolverOptions,
  queueSessionId: string | undefined,
  preferredSessionId?: string,
) {
  if (!queueSessionId) return undefined;

  const candidates = [
    preferredSessionId,
    snapshot.activeSessionId,
    getInputQueueVisibleChatSessionId(snapshot),
  ];

  return candidates.find(candidate =>
    resolveInputQueueSessionId(candidate, options) === queueSessionId,
  );
}

export function getInputQueueCompletionSessionIds(
  snapshot: InputQueueSessionSnapshot,
  options: InputQueueSessionResolverOptions,
) {
  const sessionIds = [
    resolveInputQueueSessionId(snapshot.activeSessionId, options),
    getInputQueueVisibleSessionId(snapshot, options),
  ];

  return sessionIds.filter((sessionId, index, list): sessionId is string =>
    !!sessionId && list.indexOf(sessionId) === index,
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
