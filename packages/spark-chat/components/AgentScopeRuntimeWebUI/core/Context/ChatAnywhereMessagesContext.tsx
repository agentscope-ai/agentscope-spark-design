import { useGetState } from 'ahooks';
import React, { useCallback, useRef } from 'react';
import { createContext, useContextSelector } from 'use-context-selector';
import type {
  IAgentScopeRuntimeWebUIMessage,
  IAgentScopeRuntimeWebUIMessagesContext,
} from '../types';
import { ChatAnywhereSessionsContext } from './ChatAnywhereSessionsContext';
import { collectSessionIdentityAliases } from './sessionIdentity';

type MessageUpdater =
  | IAgentScopeRuntimeWebUIMessage[]
  | ((
      previous: IAgentScopeRuntimeWebUIMessage[],
    ) => IAgentScopeRuntimeWebUIMessage[]);

const EMPTY_MESSAGES_CONTEXT: IAgentScopeRuntimeWebUIMessagesContext = {
  messages: [],
  setMessages: () => {},
  getMessages: () => [],
  setSessionMessages: () => {},
  getSessionMessages: () => [],
  clearSessionMessages: () => {},
};

export const ChatAnywhereMessagesContext =
  createContext<IAgentScopeRuntimeWebUIMessagesContext>(EMPTY_MESSAGES_CONTEXT);

function resolveMessages(
  updater: MessageUpdater,
  previous: IAgentScopeRuntimeWebUIMessage[],
) {
  return typeof updater === 'function' ? updater(previous) : updater;
}

export function ChatAnywhereMessagesContextProvider(props: {
  children: React.ReactNode | React.ReactNode[];
}) {
  const getCurrentSessionId = useContextSelector(
    ChatAnywhereSessionsContext,
    (value) => value.getCurrentSessionId,
  );
  const getSessions = useContextSelector(
    ChatAnywhereSessionsContext,
    (value) => value.getSessions,
  );
  const [messages, setActiveMessages, getActiveMessages] = useGetState<
    IAgentScopeRuntimeWebUIMessage[]
  >([]);
  const messagesBySessionRef = useRef<
    Record<string, IAgentScopeRuntimeWebUIMessage[]>
  >({});

  const getVisibleSessionAliases = useCallback(() => {
    const visibleSessionId = getCurrentSessionId();
    return visibleSessionId
      ? collectSessionIdentityAliases(
          visibleSessionId,
          undefined,
          getSessions(),
        )
      : new Set<string>();
  }, [getCurrentSessionId, getSessions]);

  const getSessionMessages = useCallback(
    (sessionId: string) => {
      for (const alias of collectSessionIdentityAliases(
        sessionId,
        undefined,
        getSessions(),
      )) {
        const stored = messagesBySessionRef.current[alias];
        if (stored) return stored;
      }
      return [];
    },
    [getSessions],
  );

  const setSessionMessages = useCallback(
    (sessionId: string, updater: MessageUpdater) => {
      const previous = getSessionMessages(sessionId);
      const next = resolveMessages(updater, previous);
      const aliases = getVisibleSessionAliases();
      messagesBySessionRef.current[sessionId] = next;
      if (aliases.has(sessionId)) {
        aliases.forEach((alias) => {
          messagesBySessionRef.current[alias] = next;
        });
        setActiveMessages(next);
      }
      const storedSessionIds = Object.keys(messagesBySessionRef.current);
      if (storedSessionIds.length > 100) {
        storedSessionIds
          .filter((storedSessionId) => !aliases.has(storedSessionId))
          .slice(0, storedSessionIds.length - 100)
          .forEach((storedSessionId) => {
            delete messagesBySessionRef.current[storedSessionId];
          });
      }
    },
    [getSessionMessages, getVisibleSessionAliases, setActiveMessages],
  );

  const setMessages = useCallback(
    (updater: MessageUpdater) => {
      const sessionId = getCurrentSessionId();
      if (sessionId) {
        setSessionMessages(sessionId, updater);
        return;
      }
      setActiveMessages(updater);
    },
    [getCurrentSessionId, setActiveMessages, setSessionMessages],
  );

  const clearSessionMessages = useCallback(
    (sessionId: string) => {
      delete messagesBySessionRef.current[sessionId];
      if (getVisibleSessionAliases().has(sessionId)) {
        setActiveMessages([]);
      }
    },
    [getVisibleSessionAliases, setActiveMessages],
  );

  const value = React.useMemo<IAgentScopeRuntimeWebUIMessagesContext>(
    () => ({
      messages,
      setMessages,
      getMessages: getActiveMessages,
      setSessionMessages,
      getSessionMessages,
      clearSessionMessages,
    }),
    [
      clearSessionMessages,
      getActiveMessages,
      getSessionMessages,
      messages,
      setMessages,
      setSessionMessages,
    ],
  );

  return (
    <ChatAnywhereMessagesContext.Provider value={value}>
      {props.children}
    </ChatAnywhereMessagesContext.Provider>
  );
}

export const useChatAnywhereMessages = () => {
  const setMessages = useContextSelector(
    ChatAnywhereMessagesContext,
    (value) => value.setMessages,
  );
  const getMessages = useContextSelector(
    ChatAnywhereMessagesContext,
    (value) => value.getMessages,
  );
  const setSessionMessages = useContextSelector(
    ChatAnywhereMessagesContext,
    (value) => value.setSessionMessages,
  );
  const getSessionMessages = useContextSelector(
    ChatAnywhereMessagesContext,
    (value) => value.getSessionMessages,
  );
  const clearSessionMessages = useContextSelector(
    ChatAnywhereMessagesContext,
    (value) => value.clearSessionMessages,
  );

  const removeAllMessages = useCallback(() => {
    setMessages([]);
  }, [setMessages]);

  const getMessage = useCallback(
    (id: string, sessionId?: string) => {
      const source = sessionId ? getSessionMessages(sessionId) : getMessages();
      return source.find((item) => item.id === id);
    },
    [getMessages, getSessionMessages],
  );

  const removeMessage = useCallback(
    (message: Partial<IAgentScopeRuntimeWebUIMessage>, sessionId?: string) => {
      const update = (previous: IAgentScopeRuntimeWebUIMessage[]) =>
        previous.filter((item) => item.id !== message.id);
      if (sessionId) setSessionMessages(sessionId, update);
      else setMessages(update);
    },
    [setMessages, setSessionMessages],
  );

  const updateMessage = useCallback(
    (
      message: Partial<IAgentScopeRuntimeWebUIMessage> & { id: string },
      sessionId?: string,
    ) => {
      const update = (previous: IAgentScopeRuntimeWebUIMessage[]) => {
        const index = previous.findIndex((item) => item.id === message.id);
        if (index < 0) {
          return [...previous, message as IAgentScopeRuntimeWebUIMessage];
        }
        return [
          ...previous.slice(0, index),
          { ...previous[index], ...message },
          ...previous.slice(index + 1),
        ];
      };
      if (sessionId) setSessionMessages(sessionId, update);
      else setMessages(update);
    },
    [setMessages, setSessionMessages],
  );

  return React.useMemo(
    () => ({
      getMessages,
      getSessionMessages,
      setSessionMessages,
      clearSessionMessages,
      removeAllMessages,
      getMessage,
      removeMessage,
      updateMessage,
    }),
    [
      clearSessionMessages,
      getMessage,
      getMessages,
      getSessionMessages,
      removeAllMessages,
      removeMessage,
      setSessionMessages,
      updateMessage,
    ],
  );
};
