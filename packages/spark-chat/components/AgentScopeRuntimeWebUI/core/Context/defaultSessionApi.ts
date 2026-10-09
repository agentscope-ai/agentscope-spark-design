import type {
  IAgentScopeRuntimeWebUISession,
  IAgentScopeRuntimeWebUISessionAPI,
} from '../types';

const STORAGE_KEY_MULTIPLE = 'agent-scope-runtime-webui-sessions';
const STORAGE_KEY_SINGLE = 'agent-scope-runtime-webui-session';

function canUseLocalStorage() {
  try {
    return typeof window !== 'undefined' && !!window.localStorage;
  } catch {
    return false;
  }
}

function createSessionId() {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}

function normalizeSession(
  session: Partial<IAgentScopeRuntimeWebUISession>,
  fallbackId?: string,
) {
  return {
    id: session.id || fallbackId || createSessionId(),
    name: session.name || '',
    messages: session.messages || [],
    generating: session.generating,
  } as IAgentScopeRuntimeWebUISession;
}

function createStorageSessionStore(multiple: boolean, storageScope?: string) {
  const legacyKey = multiple ? STORAGE_KEY_MULTIPLE : STORAGE_KEY_SINGLE;
  // Never copy unscoped data into a tenant-scoped store implicitly.
  const storageKey = storageScope
    ? `${legacyKey}:v1:${encodeURIComponent(storageScope)}`
    : legacyKey;
  let sessionList: IAgentScopeRuntimeWebUISession[] = [];

  const persist = () => {
    if (!canUseLocalStorage()) {
      return;
    }
    try {
      localStorage.setItem(storageKey, JSON.stringify(sessionList));
    } catch (error) {
      console.error('persist default chat sessions failed:', error);
    }
  };

  const load = () => {
    if (!canUseLocalStorage()) {
      return;
    }
    try {
      const raw = localStorage.getItem(storageKey);
      const parsed = raw ? JSON.parse(raw) : [];
      sessionList = Array.isArray(parsed) ? parsed : [];
    } catch (error) {
      console.error('read default chat sessions failed:', error);
      sessionList = [];
    }
  };

  return {
    async getSessionList() {
      load();
      if (!multiple) {
        if (sessionList.length === 0) {
          sessionList = [normalizeSession({})];
          persist();
        } else if (sessionList.length > 1) {
          sessionList = sessionList.slice(0, 1);
          persist();
        }
      }
      return [...sessionList];
    },
    async getSession(sessionId: string) {
      const list = await this.getSessionList();
      if (!multiple) {
        return list[0];
      }
      return list.find((item) => item.id === sessionId);
    },
    async updateSession(session: Partial<IAgentScopeRuntimeWebUISession>) {
      if (!session.id) {
        const result = await this.createSession(session);
        return Array.isArray(result) ? result : result.sessions;
      }

      const list = await this.getSessionList();
      const index = list.findIndex((item) => item.id === session.id);

      if (index > -1) {
        list[index] = normalizeSession(
          {
            ...list[index],
            ...session,
          },
          session.id,
        );
      } else {
        list.unshift(normalizeSession(session));
      }

      sessionList = multiple ? list : list.slice(0, 1);
      persist();
      return [...sessionList];
    },
    async createSession(session: Partial<IAgentScopeRuntimeWebUISession>) {
      const list = await this.getSessionList();
      const created = normalizeSession(session);

      if (multiple) {
        sessionList = [created, ...list];
      } else {
        sessionList = [created];
      }

      persist();
      return { sessions: [...sessionList], session: created };
    },
    async removeSession(session: Partial<IAgentScopeRuntimeWebUISession>) {
      const list = await this.getSessionList();
      if (!session.id) {
        return [...list];
      }
      sessionList = list.filter((item) => item.id !== session.id);
      persist();
      return [...sessionList];
    },
  } as IAgentScopeRuntimeWebUISessionAPI;
}

export function createDefaultSessionApi(
  multiple: boolean,
  storageScope?: string,
) {
  return createStorageSessionStore(multiple, storageScope);
}
