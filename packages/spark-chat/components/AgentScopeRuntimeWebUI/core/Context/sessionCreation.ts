import type { IAgentScopeRuntimeWebUISession } from '../types/ISessions';

export function selectCreatedSession(
  previousIds: Set<string>,
  nextSessions: IAgentScopeRuntimeWebUISession[],
  requestedId?: string,
): IAgentScopeRuntimeWebUISession | undefined {
  if (requestedId) {
    const requestedSession = nextSessions.find(
      (session) => session.id === requestedId,
    );
    if (requestedSession) return requestedSession;
  }

  return (
    nextSessions.find((session) => !previousIds.has(session.id)) ||
    nextSessions[0]
  );
}

export function hasSessionListChanged(
  previousSessions: IAgentScopeRuntimeWebUISession[],
  nextSessions: IAgentScopeRuntimeWebUISession[],
): boolean {
  return (
    previousSessions.length !== nextSessions.length ||
    previousSessions.some(
      (previousSession, index) => previousSession.id !== nextSessions[index]?.id,
    )
  );
}
