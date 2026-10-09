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

function getCanonicalSessionId(session?: SessionIdentityLike | null) {
  const id = session?.id;
  return typeof id === 'string' && id ? id : undefined;
}

function getAmbiguousSessionAliases(
  sessions: IAgentScopeRuntimeWebUISession[],
) {
  const ownersByAlias = new Map<string, Set<string>>();

  sessions.forEach((item, index) => {
    const canonicalId = getCanonicalSessionId(item);
    const owner = canonicalId ? `id:${canonicalId}` : `entry:${index}`;
    for (const alias of getDirectSessionAliases(item)) {
      const owners = ownersByAlias.get(alias) || new Set<string>();
      owners.add(owner);
      ownersByAlias.set(alias, owners);
    }
  });

  return new Set(
    [...ownersByAlias.entries()]
      .filter(([, owners]) => owners.size > 1)
      .map(([alias]) => alias),
  );
}

function getSafeSessionAliases(
  session: SessionIdentityLike,
  ambiguousAliases: Set<string>,
) {
  const canonicalId = getCanonicalSessionId(session);
  return new Set(
    [...getDirectSessionAliases(session)].filter(
      (alias) => alias === canonicalId || !ambiguousAliases.has(alias),
    ),
  );
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
 * An alias shared by different canonical ids is ambiguous and must not bridge
 * those sessions. The canonical `id` always wins over a conflicting alias.
 */
export function collectSessionIdentityAliases(
  requestedSessionId?: string,
  session?: SessionIdentityLike | null,
  sessions: IAgentScopeRuntimeWebUISession[] = [],
) {
  const ambiguousAliases = getAmbiguousSessionAliases(sessions);
  const aliases = session
    ? getSafeSessionAliases(session, ambiguousAliases)
    : new Set<string>();
  const requestedIdIsCanonical = sessions.some(
    (item) => item.id === requestedSessionId,
  );
  if (
    requestedSessionId &&
    (requestedIdIsCanonical || !ambiguousAliases.has(requestedSessionId))
  ) {
    aliases.add(requestedSessionId);
  }

  let changed = true;
  while (changed) {
    changed = false;
    for (const item of sessions) {
      const itemAliases = getSafeSessionAliases(
        item as SessionIdentityLike,
        ambiguousAliases,
      );
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
  const currentAliases = collectSessionIdentityAliases(
    currentSessionId,
    undefined,
    sessions,
  );
  return intersects(loadedSessionAliases, currentAliases);
}
