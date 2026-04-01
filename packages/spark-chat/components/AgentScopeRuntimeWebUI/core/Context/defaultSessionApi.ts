import {
  IAgentScopeRuntimeWebUISession,
  IAgentScopeRuntimeWebUISessionAPI,
} from '@agentscope-ai/chat';

const STORAGE_KEY_MULTIPLE = 'agent-scope-runtime-webui-sessions';
const STORAGE_KEY_SINGLE = 'agent-scope-runtime-webui-session';

function canUseLocalStorage() {
  return typeof window !== 'undefined' && !!window.localStorage;
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

function createStorageSessionStore(multiple: boolean) {
  const storageKey = multiple ? STORAGE_KEY_MULTIPLE : STORAGE_KEY_SINGLE;
  let sessionList: IAgentScopeRuntimeWebUISession[] = [];

  const persist = () => {
    if (!canUseLocalStorage()) {
      return;
    }
    localStorage.setItem(storageKey, JSON.stringify(sessionList));
  };

  const load = () => {
    if (!canUseLocalStorage()) {
      return;
    }
    const raw = localStorage.getItem(storageKey);
    sessionList = raw ? JSON.parse(raw) : [];
  };

  return {
    async getSessionList() {
      load();
      if (!multiple && sessionList.length > 1) {
        sessionList = sessionList.slice(0, 1);
        persist();
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
        return this.createSession(session);
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
      return [...sessionList];
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

export function createDefaultSessionApi(multiple: boolean) {
  return createStorageSessionStore(multiple);
}
