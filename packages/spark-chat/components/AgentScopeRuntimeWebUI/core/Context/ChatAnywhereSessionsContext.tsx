import { createContext, useContextSelector } from 'use-context-selector';
import { IAgentScopeRuntimeWebUISessionsContext } from '../types/ISessions';
import { useGetState, useMount } from 'ahooks';
import { IAgentScopeRuntimeWebUISession } from '../types/ISessions';
import React from "react";
import { ChatAnywhereMessagesContext } from './ChatAnywhereMessagesContext';
import { useChatAnywhereOptions } from './ChatAnywhereOptionsContext';
import ReactDOM from 'react-dom';
import { useAsyncEffect } from 'ahooks';
import { emit } from './useChatAnywhereEventEmitter';
import {
  collectSessionIdentityAliases,
  isSameLoadedSession,
} from './sessionIdentity';

const hasOwn = Object.prototype.hasOwnProperty;

export const ChatAnywhereSessionsContext = createContext<IAgentScopeRuntimeWebUISessionsContext>({
  sessions: [],
  setSessions: () => { },
  getSessions: () => [],
  currentSessionId: undefined,
  setCurrentSessionId: () => { },
  getCurrentSessionId: () => '',
});

export function ChatAnywhereSessionsContextProvider(props: {
  children: React.ReactNode | React.ReactNode[];
}) {
  const options = useChatAnywhereOptions(v => v.session);
  const [sessions, setSessions, getSessions] = useGetState<IAgentScopeRuntimeWebUISession[]>([]);
  const [currentSessionId, setCurrentSessionId, getCurrentSessionId] = useGetState<string | undefined>(undefined);
  const skipNextSessionLoadIdRef = React.useRef<string | undefined>(undefined);
  // In controlled mode, createSession can resolve before the external route
  // passes the new currentSessionId back in.
  const pendingRouteSessionIdRef = React.useRef<string | undefined>(undefined);
  const previousControlledSessionIdRef = React.useRef<string | undefined>(options.currentSessionId);
  const isCurrentSessionControlled = hasOwn.call(options, 'currentSessionId');

  useMount(async () => {
    const sessionList = await options.api.getSessionList();
    setSessions(sessionList);
    // In controlled mode the route owns the active session. This keeps /chat
    // as an empty new-chat page instead of falling back to the first history item.
    setCurrentSessionId(isCurrentSessionControlled ? options.currentSessionId : sessionList?.[0]?.id);
  })

  React.useEffect(() => {
    if (!isCurrentSessionControlled) return;
    if (previousControlledSessionIdRef.current === options.currentSessionId) return;

    previousControlledSessionIdRef.current = options.currentSessionId;
    if (pendingRouteSessionIdRef.current === options.currentSessionId || !options.currentSessionId) {
      pendingRouteSessionIdRef.current = undefined;
    }
    setCurrentSessionId(options.currentSessionId);
  }, [isCurrentSessionControlled, options.currentSessionId, setCurrentSessionId]);


  return <ChatAnywhereSessionsContext.Provider value={{
    sessions,
    setSessions,
    getSessions,
    currentSessionId,
    setCurrentSessionId,
    getCurrentSessionId,
    skipNextSessionLoadIdRef,
    pendingRouteSessionIdRef,
    isCurrentSessionControlled,
  }}>
    {props.children}
  </ChatAnywhereSessionsContext.Provider>;
}

/**
 * 会话切换时加载消息和判断重连的 hook，必须保证只挂载一次
 */
export const useChatAnywhereSessionLoader = () => {
  const currentSessionId = useContextSelector(ChatAnywhereSessionsContext, v => v.currentSessionId);
  const skipNextSessionLoadIdRef = useContextSelector(ChatAnywhereSessionsContext, v => v.skipNextSessionLoadIdRef);
  const getSessions = useContextSelector(ChatAnywhereSessionsContext, v => v.getSessions);
  const options = useChatAnywhereOptions(v => v.session);
  const setMessages = useContextSelector(ChatAnywhereMessagesContext, v => v.setMessages);
  const loadSeqRef = React.useRef(0);
  const loadedSessionAliasesRef = React.useRef<Set<string>>(new Set());

  useAsyncEffect(async () => {
    const loadSeq = ++loadSeqRef.current;
    const isLatestLoad = () => loadSeq === loadSeqRef.current;

    if (!currentSessionId) {
      loadedSessionAliasesRef.current.clear();
      ReactDOM.flushSync(() => {
        setMessages([])
      })
      return;
    }

    if (skipNextSessionLoadIdRef?.current === currentSessionId) {
      skipNextSessionLoadIdRef.current = undefined;
      loadedSessionAliasesRef.current = collectSessionIdentityAliases(
        currentSessionId,
        undefined,
        getSessions(),
      );
      emit({ type: 'handleSessionLoaded', data: { session_id: currentSessionId, generating: false } });
      return;
    }

    const existingSessions = getSessions();
    const sameLoadedSession = isSameLoadedSession(
      currentSessionId,
      loadedSessionAliasesRef.current,
      existingSessions,
    );
    if (!sameLoadedSession) {
      ReactDOM.flushSync(() => {
        setMessages([])
      })
    }

    const session = await options.api.getSession(currentSessionId);
    if (!isLatestLoad()) return;

    loadedSessionAliasesRef.current = collectSessionIdentityAliases(
      currentSessionId,
      session,
      getSessions(),
    );

    const messages = session?.messages || [];
    setMessages(messages.map(item => {
      return {
        ...item,
        history: true,
      }
    }));

    emit({
      type: 'handleSessionLoaded',
      data: { session_id: currentSessionId, generating: !!session?.generating },
    });

    if (session?.generating) {
      emit({ type: 'handleReconnect', data: { session_id: currentSessionId } });
    }
  }, [currentSessionId]);
};

/**
 * 获取会话列表的 reactive 状态，供外部自定义会话面板使用
 */
export const useChatAnywhereSessionsState = () => {
  return useContextSelector(ChatAnywhereSessionsContext, v => v);
};

export const useChatAnywhereSessions = () => {
  const {
    setSessions,
    getSessions,
    getCurrentSessionId,
    setCurrentSessionId,
    pendingRouteSessionIdRef,
    isCurrentSessionControlled,
  } = useContextSelector(ChatAnywhereSessionsContext, v => v);
  const skipNextSessionLoadIdRef = useContextSelector(ChatAnywhereSessionsContext, v => v.skipNextSessionLoadIdRef);
  const options = useChatAnywhereOptions(v => v.session);
  const setMessages = useContextSelector(ChatAnywhereMessagesContext, v => v.setMessages);

  const setActiveSessionId = React.useCallback((sessionId: string | undefined) => {
    if (isCurrentSessionControlled) {
      pendingRouteSessionIdRef.current = sessionId;
    }
    setCurrentSessionId(sessionId);
    options.onCurrentSessionChange?.(sessionId);
  }, [isCurrentSessionControlled, options, pendingRouteSessionIdRef, setCurrentSessionId]);


  const removeSession = React.useCallback(async (session: Partial<IAgentScopeRuntimeWebUISession> & { id: string }) => {
    const res = await options.api.removeSession(session);
    setMessages([]);
    setActiveSessionId(undefined);
    setSessions(res);
  }, [options.api, setActiveSessionId, setMessages, setSessions]);

  const updateSession = React.useCallback(async (session: Partial<IAgentScopeRuntimeWebUISession>) => {
    const res = session.id ?
      await options.api.updateSession(session) :
      await options.api.createSession(session);


    setSessions(res);
    return session;
  }, [])

  const createSession = React.useCallback(async (data?: { name?: string }) => {
    const prevIds = new Set(getSessions().map(session => session.id));
    const nextSessions = await options.api.createSession({
      name: data?.name || '',
      messages: [],
    });
    const session = nextSessions.find(item => !prevIds.has(item.id)) || nextSessions[0];
    setSessions(nextSessions);

    if (session?.id) {
      if (skipNextSessionLoadIdRef) {
        skipNextSessionLoadIdRef.current = session.id;
      }
      setActiveSessionId(session.id);
      setMessages(session.messages || []);
    }

    return session?.id;
  }, [getSessions, options.api, setActiveSessionId, setMessages, setSessions, skipNextSessionLoadIdRef]);


  const changeCurrentSessionId = React.useCallback((sessionId: string) => {
    setActiveSessionId(sessionId);
  }, [setActiveSessionId]);


  return {
    changeCurrentSessionId,
    getCurrentSessionId,
    getSessions,
    removeSession,
    updateSession,
    createSession,
  }
};
