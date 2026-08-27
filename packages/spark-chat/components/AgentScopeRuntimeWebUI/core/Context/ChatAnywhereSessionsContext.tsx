import { useAsyncEffect, useGetState } from 'ahooks';
import React from 'react';
import ReactDOM from 'react-dom';
import { createContext, useContextSelector } from 'use-context-selector';
import {
  IAgentScopeRuntimeWebUISession,
  IAgentScopeRuntimeWebUISessionsContext,
} from '../types/ISessions';
import { ChatAnywhereMessagesContext } from './ChatAnywhereMessagesContext';
import { useChatAnywhereOptions } from './ChatAnywhereOptionsContext';
import {
  collectSessionIdentityAliases,
  isSameLoadedSession,
} from './sessionIdentity';
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
      ReactDOM.flushSync(() => {
        setMessages([]);
      });
      return;
    }

    if (skipNextSessionLoadIdRef?.current === currentSessionId) {
      skipNextSessionLoadIdRef.current = undefined;
      loadedSessionAliasesRef.current = collectSessionIdentityAliases(
        currentSessionId,
        undefined,
        getSessions(),
      );
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

    ReactDOM.flushSync(() => {
      setSessionMessages(currentSessionId, []);
    });

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
      const res = session.id
        ? await options.api.updateSession(session)
        : await options.api.createSession(session);

      setSessions(res);
      return session;
    },
    [options.api, setSessions],
  );

  const createSession = React.useCallback(
    async (data?: { name?: string }) => {
      const prevIds = new Set(getSessions().map((session) => session.id));
      const nextSessions = await options.api.createSession({
        name: data?.name || '',
        messages: [],
      });
      const session =
        nextSessions.find((item) => !prevIds.has(item.id)) || nextSessions[0];
      setSessions(nextSessions);

      if (session?.id) {
        if (skipNextSessionLoadIdRef) {
          skipNextSessionLoadIdRef.current = session.id;
        }
        setActiveSessionId(session.id);
        setSessionMessages(session.id, session.messages || []);
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
