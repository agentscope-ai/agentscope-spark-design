import { createContext, useContextSelector } from 'use-context-selector';
import { IAgentScopeRuntimeWebUISessionsContext } from '../types/ISessions';
import { useGetState, useMount } from 'ahooks';
import { IAgentScopeRuntimeWebUISession } from '../types/ISessions';
import React, { useEffect } from "react";
import { ChatAnywhereMessagesContext } from './ChatAnywhereMessagesContext';
import { useChatAnywhereOptions } from './ChatAnywhereOptionsContext';
import ReactDOM from 'react-dom';
import { useAsyncEffect } from 'ahooks';
import { emit } from './useChatAnywhereEventEmitter';


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

  useMount(async () => {
    const sessionList = await options.api.getSessionList();
    setSessions(sessionList);
    setCurrentSessionId(sessionList?.[0]?.id);
  })


  return <ChatAnywhereSessionsContext.Provider value={{
    sessions,
    setSessions,
    getSessions,
    currentSessionId,
    setCurrentSessionId,
    getCurrentSessionId
  }}>
    {props.children}
  </ChatAnywhereSessionsContext.Provider>;
}

/**
 * 会话切换时加载消息和判断重连的 hook，必须保证只挂载一次
 */
export const useChatAnywhereSessionLoader = () => {
  const currentSessionId = useContextSelector(ChatAnywhereSessionsContext, v => v.currentSessionId);
  const options = useChatAnywhereOptions(v => v.session);
  const setMessages = useContextSelector(ChatAnywhereMessagesContext, v => v.setMessages);

  useAsyncEffect(async () => {
    ReactDOM.flushSync(() => {
      setMessages([])
    })

    const session = await options.api.getSession(currentSessionId);
    const messages = session?.messages || [];
    setMessages(messages.map(item => {
      return {
        ...item,
        history: true,
      }
    }));

    if (session?.generating) {
      emit({ type: 'handleReconnect', data: { session_id: currentSessionId } });
    }
  }, [currentSessionId]);
};

// Bounded history window: once the loaded message count exceeds this after
// a loadMore prepend, the newest (tail) end is trimmed so repeated backward
// scrolling can't grow memory/DOM without bound. The user has scrolled away
// from those messages into older history; only the cursor (tracked by the
// app's own onLoadMore closure, not here) is kept.
const LOAD_MORE_MAX_MESSAGES = 300;

/**
 * 真实后端分页加载更早历史消息的 hook（补丁新增）。
 * options.session.onLoadMore 由宿主应用提供；未提供时 hasRealLoadMore 为
 * false，MessageList 回退到原有的模拟分页（揭示已加载数组）。
 *
 * Real backend-driven "load older history" (patch addition). The host app
 * supplies options.session.onLoadMore; when absent, hasRealLoadMore is
 * false and MessageList falls back to the original simulated pagination
 * (revealing more of an already-loaded array).
 */
export const useChatAnywhereLoadMoreHistory = () => {
  const currentSessionId = useContextSelector(ChatAnywhereSessionsContext, v => v.currentSessionId);
  const onLoadMore = useChatAnywhereOptions(v => v.session?.onLoadMore);
  const setMessages = useContextSelector(ChatAnywhereMessagesContext, v => v.setMessages);
  const [noMore, setNoMore] = useGetState(false);
  const loadingRef = React.useRef(false);
  // A ref, not the closed-over `currentSessionId` value: the race guard
  // below must observe a session switch that happens *while* the request
  // is in flight, and a value captured in the async closure at call time
  // would just equal `sessionIdAtCall` forever (both frozen at the same
  // render), making the guard a no-op.
  const currentSessionIdRef = React.useRef(currentSessionId);

  useEffect(() => {
    currentSessionIdRef.current = currentSessionId;
    // A new session starts with its own "reached the end" state and no
    // in-flight request carried over from the previous one.
    setNoMore(false);
    loadingRef.current = false;
  }, [currentSessionId, setNoMore]);

  const loadMore = React.useCallback(async () => {
    if (!onLoadMore || loadingRef.current) return;
    const sessionIdAtCall = currentSessionIdRef.current;
    loadingRef.current = true;
    try {
      const result = await onLoadMore(sessionIdAtCall as string);
      // Race guard: the active session changed while this request was in
      // flight — discard the response rather than prepending stale history
      // (or a stale noMore) onto whatever session is now showing.
      if (currentSessionIdRef.current !== sessionIdAtCall) return;
      if (result && result.messages && result.messages.length) {
        // @ts-ignore — setMessages is typed as a plain setter, but (like
        // removeMessage/updateMessage above) the underlying useGetState
        // setter also accepts a functional update at runtime.
        setMessages((prev) => {
          const older = result.messages.map((item) => ({
            ...item,
            history: true,
          }));
          // Both operands are already real arrays (older from .map(),
          // prev from React state) — plain .concat() needs no spread
          // helper, unlike [...older, ...prev].
          let merged = older.concat(prev);
          if (merged.length > LOAD_MORE_MAX_MESSAGES) {
            merged = merged.slice(0, LOAD_MORE_MAX_MESSAGES);
          }
          return merged;
        });
      }
      setNoMore(!result || result.noMore !== false);
    } finally {
      loadingRef.current = false;
    }
  }, [onLoadMore, setMessages, setNoMore]);

  return {
    loadMore,
    noMore,
    hasRealLoadMore: typeof onLoadMore === 'function',
  };
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
    currentSessionId,
  } = useContextSelector(ChatAnywhereSessionsContext, v => v);
  const options = useChatAnywhereOptions(v => v.session);
  const setMessages = useContextSelector(ChatAnywhereMessagesContext, v => v.setMessages);


  const removeSession = React.useCallback(async (session: Partial<IAgentScopeRuntimeWebUISession> & { id: string }) => {
    const res = await options.api.removeSession(session);
    setMessages([]);
    setCurrentSessionId(undefined);
    setSessions(res);
  }, []);

  const updateSession = React.useCallback(async (session: Partial<IAgentScopeRuntimeWebUISession>) => {
    const res = session.id ?
      await options.api.updateSession(session) :
      await options.api.createSession(session);


    setSessions(res);
    return session;
  }, [])

  const createSession = React.useCallback(async (data?: { name?: string }) => {
    const session = await updateSession({
      name: data?.name || '',
      messages: [],
    });
    setCurrentSessionId(session.id);
    setMessages(session.messages);
    return session.id;
  }, []);


  const changeCurrentSessionId = React.useCallback((sessionId: string) => {
    setCurrentSessionId(sessionId);

  }, []);


  return {
    changeCurrentSessionId,
    getCurrentSessionId,
    getSessions,
    removeSession,
    updateSession,
    createSession,
  }
};