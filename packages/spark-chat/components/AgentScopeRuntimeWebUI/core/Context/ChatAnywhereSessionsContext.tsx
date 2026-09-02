import { useAsyncEffect, useGetState } from 'ahooks';
import React from 'react';
import { createContext, useContextSelector } from 'use-context-selector';
import {
  IAgentScopeRuntimeWebUISession,
  IAgentScopeRuntimeWebUISessionsContext,
} from '../types/ISessions';
import { ChatAnywhereMessagesContext } from './ChatAnywhereMessagesContext';
import { useChatAnywhereOptions } from './ChatAnywhereOptionsContext';
import {
  hasSessionListChanged,
  normalizeCreateSessionResult,
  selectCreatedSession,
} from './sessionCreation';
import {
  collectSessionIdentityAliases,
  isSameLoadedSession,
} from './sessionIdentity';
import { activateCachedSessionMessages } from './sessionMessageActivation';
import { useChatAnywhereCommandDispatcher } from './useChatAnywhereEventEmitter';

const hasOwn = Object.prototype.hasOwnProperty;

export const ChatAnywhereSessionsContext =
  createContext<IAgentScopeRuntimeWebUISessionsContext>({
    sessions: [],
    setSessions: () => {},
    getSessions: () => [],
    currentSessionId: undefined,
    setCurrentSessionId: () => {},
    getCurrentSessionId: () => '',
  });

export function ChatAnywhereSessionsContextProvider(props: {
  children: React.ReactNode | React.ReactNode[];
}) {
  const options = useChatAnywhereOptions((v) => v.session);
  const isCurrentSessionControlled = hasOwn.call(options, 'currentSessionId');
  const [sessions, setSessions, getSessions] = useGetState<
    IAgentScopeRuntimeWebUISession[]
  >([]);
  const [currentSessionId, setCurrentSessionId, getCurrentSessionId] =
    useGetState<string | undefined>(
      isCurrentSessionControlled ? options.currentSessionId : undefined,
    );
  const skipNextSessionLoadIdRef = React.useRef<string | undefined>(undefined);
  // In controlled mode, createSession can resolve before the external route
  // passes the new currentSessionId back in.
  const pendingRouteSessionIdRef = React.useRef<string | undefined>(undefined);
  const previousControlledSessionIdRef = React.useRef<string | undefined>(
    options.currentSessionId,
  );
  const wasCurrentSessionControlledRef = React.useRef(
    isCurrentSessionControlled,
  );
  const isCurrentSessionControlledRef = React.useRef(
    isCurrentSessionControlled,
  );
  isCurrentSessionControlledRef.current = isCurrentSessionControlled;
  const initialSessionApiRef = React.useRef(options.api);

  React.useEffect(() => {
    let cancelled = false;
    void initialSessionApiRef.current
      .getSessionList()
      .then((sessionList) => {
        if (cancelled) return;
        setSessions(sessionList);
        // In controlled mode the route owns the active session. This keeps
        // /chat as an empty page instead of selecting the first history item.
        if (!isCurrentSessionControlledRef.current) {
          setCurrentSessionId(sessionList[0]?.id);
        }
      })
      .catch((error) => {
        console.error('get session list failed:', error);
      });

    return () => {
      cancelled = true;
    };
  }, [setCurrentSessionId, setSessions]);

  React.useEffect(() => {
    const controlModeChanged =
      wasCurrentSessionControlledRef.current !== isCurrentSessionControlled;
    wasCurrentSessionControlledRef.current = isCurrentSessionControlled;
    if (!isCurrentSessionControlled) return;
    if (
      !controlModeChanged &&
      previousControlledSessionIdRef.current === options.currentSessionId
    )
      return;

    previousControlledSessionIdRef.current = options.currentSessionId;
    if (
      pendingRouteSessionIdRef.current === options.currentSessionId ||
      !options.currentSessionId
    ) {
      pendingRouteSessionIdRef.current = undefined;
    }
    setCurrentSessionId(options.currentSessionId);
  }, [
    isCurrentSessionControlled,
    options.currentSessionId,
    setCurrentSessionId,
  ]);

  const value = React.useMemo<IAgentScopeRuntimeWebUISessionsContext>(
    () => ({
      sessions,
      setSessions,
      getSessions,
      currentSessionId,
      setCurrentSessionId,
      getCurrentSessionId,
      skipNextSessionLoadIdRef,
      pendingRouteSessionIdRef,
      isCurrentSessionControlled,
    }),
    [
      currentSessionId,
      getCurrentSessionId,
      getSessions,
      isCurrentSessionControlled,
      sessions,
      setCurrentSessionId,
      setSessions,
    ],
  );

  return (
    <ChatAnywhereSessionsContext.Provider value={value}>
      {props.children}
    </ChatAnywhereSessionsContext.Provider>
  );
}

/**
 * 会话切换时加载消息和判断重连的 hook，必须保证只挂载一次
 */
export const useChatAnywhereSessionLoader = () => {
  const dispatch = useChatAnywhereCommandDispatcher();
  const currentSessionId = useContextSelector(
    ChatAnywhereSessionsContext,
    (v) => v.currentSessionId,
  );
  const skipNextSessionLoadIdRef = useContextSelector(
    ChatAnywhereSessionsContext,
    (v) => v.skipNextSessionLoadIdRef,
  );
  const getSessions = useContextSelector(
    ChatAnywhereSessionsContext,
    (v) => v.getSessions,
  );
  const options = useChatAnywhereOptions((v) => v.session);
  const setMessages = useContextSelector(
    ChatAnywhereMessagesContext,
    (v) => v.setMessages,
  );
  const setSessionMessages = useContextSelector(
    ChatAnywhereMessagesContext,
    (v) => v.setSessionMessages,
  );
  const loadSeqRef = React.useRef(0);
  const loadedSessionAliasesRef = React.useRef<Set<string>>(new Set());

  useAsyncEffect(async () => {
    const loadSeq = ++loadSeqRef.current;
    const isLatestLoad = () => loadSeq === loadSeqRef.current;

    if (!currentSessionId) {
      loadedSessionAliasesRef.current.clear();
      setMessages([]);
      return;
    }

    if (skipNextSessionLoadIdRef?.current === currentSessionId) {
      skipNextSessionLoadIdRef.current = undefined;
      loadedSessionAliasesRef.current = collectSessionIdentityAliases(
        currentSessionId,
        undefined,
        getSessions(),
      );
      // `createSession` already seeded this session's message cache, so no
      // backend load is necessary. We still need to promote that cached list
      // to the active view after React has applied the new session id;
      // otherwise the previous conversation remains visible until another
      // interaction triggers a render or session load.
      // This loader already runs from an effect. Calling flushSync here is
      // rejected by React and leaves the previous session visible until the
      // next interaction. A normal context update activates the cached empty
      // list in the same render cycle without violating the lifecycle.
      activateCachedSessionMessages(currentSessionId, setSessionMessages);
      await dispatch('handleSessionLoaded', {
        session_id: currentSessionId,
        generating: false,
      });
      return;
    }

    const existingSessions = getSessions();
    const sameLoadedSession = isSameLoadedSession(
      currentSessionId,
      loadedSessionAliasesRef.current,
      existingSessions,
    );
    if (sameLoadedSession) {
      loadedSessionAliasesRef.current = new Set([
        ...loadedSessionAliasesRef.current,
        ...collectSessionIdentityAliases(
          currentSessionId,
          undefined,
          existingSessions,
        ),
      ]);
      return;
    }

    setSessionMessages(currentSessionId, []);

    let session: IAgentScopeRuntimeWebUISession | undefined;
    try {
      session = await options.api.getSession(currentSessionId);
    } catch (error) {
      if (isLatestLoad()) {
        console.error('get session failed:', error);
        await dispatch('handleSessionLoaded', {
          session_id: currentSessionId,
          generating: false,
        });
      }
      return;
    }
    if (!isLatestLoad()) return;

    loadedSessionAliasesRef.current = collectSessionIdentityAliases(
      currentSessionId,
      session,
      getSessions(),
    );

    const messages = session?.messages || [];
    setSessionMessages(
      currentSessionId,
      messages.map((item) => ({
        ...item,
        history: true,
      })),
    );

    await dispatch('handleSessionLoaded', {
      session_id: currentSessionId,
      generating: !!session?.generating,
    });

    if (session?.generating) {
      await dispatch('handleReconnect', { session_id: currentSessionId });
    }
  }, [
    currentSessionId,
    dispatch,
    getSessions,
    options.api,
    setMessages,
    setSessionMessages,
    skipNextSessionLoadIdRef,
  ]);
};

/**
 * 获取会话列表的 reactive 状态，供外部自定义会话面板使用
 */
export const useChatAnywhereSessionsState = () => {
  return useContextSelector(ChatAnywhereSessionsContext, (v) => v);
};

export const useChatAnywhereSessions = () => {
  const setSessions = useContextSelector(
    ChatAnywhereSessionsContext,
    (v) => v.setSessions,
  );
  const getSessions = useContextSelector(
    ChatAnywhereSessionsContext,
    (v) => v.getSessions,
  );
  const getCurrentSessionId = useContextSelector(
    ChatAnywhereSessionsContext,
    (v) => v.getCurrentSessionId,
  );
  const setCurrentSessionId = useContextSelector(
    ChatAnywhereSessionsContext,
    (v) => v.setCurrentSessionId,
  );
  const pendingRouteSessionIdRef = useContextSelector(
    ChatAnywhereSessionsContext,
    (v) => v.pendingRouteSessionIdRef,
  );
  const isCurrentSessionControlled = useContextSelector(
    ChatAnywhereSessionsContext,
    (v) => v.isCurrentSessionControlled,
  );
  const skipNextSessionLoadIdRef = useContextSelector(
    ChatAnywhereSessionsContext,
    (v) => v.skipNextSessionLoadIdRef,
  );
  const options = useChatAnywhereOptions((v) => v.session);
  const setMessages = useContextSelector(
    ChatAnywhereMessagesContext,
    (v) => v.setMessages,
  );
  const setSessionMessages = useContextSelector(
    ChatAnywhereMessagesContext,
    (v) => v.setSessionMessages,
  );
  const clearSessionMessages = useContextSelector(
    ChatAnywhereMessagesContext,
    (v) => v.clearSessionMessages,
  );

  const setActiveSessionId = React.useCallback(
    (sessionId: string | undefined) => {
      if (isCurrentSessionControlled) {
        pendingRouteSessionIdRef.current = sessionId;
      }
      setCurrentSessionId(sessionId);
      options.onCurrentSessionChange?.(sessionId);
    },
    [
      isCurrentSessionControlled,
      options,
      pendingRouteSessionIdRef,
      setCurrentSessionId,
    ],
  );

  const removeSession = React.useCallback(
    async (
      session: Partial<IAgentScopeRuntimeWebUISession> & { id: string },
    ) => {
      const res = await options.api.removeSession(session);
      clearSessionMessages(session.id);
      if (getCurrentSessionId() === session.id) {
        setMessages([]);
        setActiveSessionId(undefined);
      }
      setSessions(res);
    },
    [
      clearSessionMessages,
      getCurrentSessionId,
      options.api,
      setActiveSessionId,
      setMessages,
      setSessions,
    ],
  );

  const updateSession = React.useCallback(
    async (session: Partial<IAgentScopeRuntimeWebUISession>) => {
      if (!session.id) {
        const result = normalizeCreateSessionResult(
          await options.api.createSession(session),
        );
        setSessions(result.sessions);
        return result.session || session;
      }

      const sessions = await options.api.updateSession(session);
      setSessions(sessions);
      return sessions.find((item) => item.id === session.id) || session;
    },
    [options.api, setSessions],
  );

  const createSession = React.useCallback(
    async (data?: { name?: string }): Promise<string | undefined> => {
      const previousSessions = getSessions();
      const prevIds = new Set(previousSessions.map((session) => session.id));
      const sessionDraft: Partial<IAgentScopeRuntimeWebUISession> = {
        name: data?.name || '',
        messages: [],
      };
      const creation = normalizeCreateSessionResult(
        await options.api.createSession(sessionDraft),
      );
      const nextSessions = creation.sessions;
      const session = selectCreatedSession(
        prevIds,
        nextSessions,
        sessionDraft.id,
        creation.session,
      );
      // Some adapters reuse an unresolved draft and return a shallow copy of
      // the unchanged list. Avoid publishing that no-op update: consumers may
      // synchronize URL state from session-list changes while the new-chat
      // navigation is still committing, which can reactivate the old session.
      if (hasSessionListChanged(previousSessions, nextSessions)) {
        setSessions(nextSessions);
      }

      if (session?.id) {
        if (skipNextSessionLoadIdRef) {
          skipNextSessionLoadIdRef.current = session.id;
        }
        setActiveSessionId(session.id);
        // In controlled mode the route can intentionally remain `/chat` for a
        // local unresolved draft. Activate the empty list immediately instead
        // of waiting for the controlled session id to round-trip; otherwise a
        // reused draft leaves the previous conversation visible until the
        // user clicks "new chat" again.
        setSessionMessages(session.id, session.messages || [], {
          activate: true,
        });
      }

      return session?.id;
    },
    [
      getSessions,
      options.api,
      setActiveSessionId,
      setSessionMessages,
      setSessions,
      skipNextSessionLoadIdRef,
    ],
  );

  const changeCurrentSessionId = React.useCallback(
    (sessionId: string) => {
      setActiveSessionId(sessionId);
    },
    [setActiveSessionId],
  );

  return {
    changeCurrentSessionId,
    getCurrentSessionId,
    getSessions,
    removeSession,
    updateSession,
    createSession,
  };
};
