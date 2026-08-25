import type { IAgentScopeRuntimeWebUISession } from '../types/ISessions';

type SessionIdentityLike = Partial<IAgentScopeRuntimeWebUISession> & {
  realId?: unknown;
  sessionId?: unknown;
  session_id?: unknown;
};

const SESSION_IDENTITY_KEYS = [
  'id',
  'realId',
  'sessionId',
  'session_id',
] as const;

function getDirectSessionAliases(session?: SessionIdentityLike | null) {
  const aliases = new Set<string>();
  if (!session) return aliases;

  SESSION_IDENTITY_KEYS.forEach((key) => {
    const value = session[key];
    if (typeof value === 'string' && value) aliases.add(value);
  });
  return aliases;
}

function intersects(left: Set<string>, right: Set<string>) {
  for (const value of left) {
    if (right.has(value)) return true;
  }
  return false;
}

/**
 * Collect all known aliases for one logical session.
 *
 * Hosts may expose a stable SDK id, a backend id, or both. Session-list entries
 * are used as bridges so controlled-id changes do not look like a new chat.
 */
export function collectSessionIdentityAliases(
  requestedSessionId?: string,
  session?: SessionIdentityLike | null,
  sessions: IAgentScopeRuntimeWebUISession[] = [],
) {
  const aliases = getDirectSessionAliases(session);
  if (requestedSessionId) aliases.add(requestedSessionId);

  let changed = true;
  while (changed) {
    changed = false;
    for (const item of sessions) {
      const itemAliases = getDirectSessionAliases(item as SessionIdentityLike);
      if (!intersects(aliases, itemAliases)) continue;

      for (const alias of itemAliases) {
        if (aliases.has(alias)) continue;
        aliases.add(alias);
        changed = true;
      }
    }
  }

  return aliases;
}

export function isSameLoadedSession(
  currentSessionId: string,
  loadedSessionAliases: Set<string>,
  sessions: IAgentScopeRuntimeWebUISession[] = [],
) {
  if (loadedSessionAliases.has(currentSessionId)) return true;
  const currentAliases = collectSessionIdentityAliases(
    currentSessionId,
    undefined,
    sessions,
  );
  return intersects(loadedSessionAliases, currentAliases);
}
