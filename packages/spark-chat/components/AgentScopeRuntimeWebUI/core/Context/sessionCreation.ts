import type {
  IAgentScopeRuntimeWebUICreateSessionResult,
  IAgentScopeRuntimeWebUICreateSessionReturn,
  IAgentScopeRuntimeWebUISession,
} from '../types/ISessions';

export function normalizeCreateSessionResult(
  result: IAgentScopeRuntimeWebUICreateSessionReturn,
): {
  sessions: IAgentScopeRuntimeWebUISession[];
  session?: IAgentScopeRuntimeWebUISession;
} {
  if (Array.isArray(result)) return { sessions: result };
  return result as IAgentScopeRuntimeWebUICreateSessionResult;
}

export function selectCreatedSession(
  previousIds: Set<string>,
  nextSessions: IAgentScopeRuntimeWebUISession[],
  requestedId?: string,
  explicitSession?: IAgentScopeRuntimeWebUISession,
): IAgentScopeRuntimeWebUISession | undefined {
  if (explicitSession?.id) {
    return (
      nextSessions.find((session) => session.id === explicitSession.id) ||
      explicitSession
    );
  }

  if (requestedId) {
    const requestedSession = nextSessions.find(
      (session) => session.id === requestedId,
    );
    if (requestedSession) return requestedSession;
  }

  return nextSessions.find((session) => !previousIds.has(session.id));
}

function hasSessionMetadataChanged(
  previousSession: IAgentScopeRuntimeWebUISession,
  nextSession: IAgentScopeRuntimeWebUISession,
): boolean {
  if (previousSession === nextSession) return false;

  const keys = new Set([
    ...Object.keys(previousSession),
    ...Object.keys(nextSession),
  ]);
  // Messages have their own session-scoped store and can be large. Session
  // list publication only needs identity and metadata changes.
  keys.delete('messages');

  return [...keys].some(
    (key) =>
      !Object.is(
        (previousSession as unknown as Record<string, unknown>)[key],
        (nextSession as unknown as Record<string, unknown>)[key],
      ),
  );
}

export function hasSessionListChanged(
  previousSessions: IAgentScopeRuntimeWebUISession[],
  nextSessions: IAgentScopeRuntimeWebUISession[],
): boolean {
  return (
    previousSessions.length !== nextSessions.length ||
    previousSessions.some((previousSession, index) => {
      const nextSession = nextSessions[index];
      return (
        !nextSession ||
        previousSession.id !== nextSession.id ||
        hasSessionMetadataChanged(previousSession, nextSession)
      );
    })
  );
}
