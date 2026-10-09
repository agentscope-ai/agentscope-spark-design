import { useGetState } from 'ahooks';
import React, { useCallback, useEffect, useRef } from 'react';
import { createContext, useContextSelector } from 'use-context-selector';
import type { IAgentScopeRuntimeWebUIInputContext } from '../types';
import { ChatAnywhereSessionsContext } from './ChatAnywhereSessionsContext';
import { collectSessionIdentityAliases } from './sessionIdentity';

type InputState = Pick<
  IAgentScopeRuntimeWebUIInputContext,
  'loading' | 'disabled'
>;

const EMPTY_INPUT_STATE: InputState = {
  loading: false,
  disabled: false,
};

export const ChatAnywhereInputContext =
  createContext<IAgentScopeRuntimeWebUIInputContext>({
    ...EMPTY_INPUT_STATE,
    setLoading: () => {},
    getLoading: () => false,
    setSessionLoading: () => {},
    getSessionLoading: () => false,
    setDisabled: () => {},
    getDisabled: () => false,
    setSessionDisabled: () => {},
    getSessionDisabled: () => false,
  });

export function ChatAnywhereInputContextProvider(props: {
  children: React.ReactNode | React.ReactNode[];
}) {
  const currentSessionId = useContextSelector(
    ChatAnywhereSessionsContext,
    (value) => value.currentSessionId,
  );
  const getCurrentSessionId = useContextSelector(
    ChatAnywhereSessionsContext,
    (value) => value.getCurrentSessionId,
  );
  const getSessions = useContextSelector(
    ChatAnywhereSessionsContext,
    (value) => value.getSessions,
  );
  const [loading, setActiveLoading, getLoading] = useGetState<boolean | string>(
    false,
  );
  const [disabled, setActiveDisabled, getDisabled] = useGetState<
    boolean | string
  >(false);
  const stateBySessionRef = useRef<Record<string, InputState>>({});

  const getAliases = useCallback(
    (sessionId: string) =>
      collectSessionIdentityAliases(sessionId, undefined, getSessions()),
    [getSessions],
  );

  const getSessionState = useCallback(
    (sessionId: string): InputState => {
      for (const alias of getAliases(sessionId)) {
        const state = stateBySessionRef.current[alias];
        if (state) return state;
      }
      return EMPTY_INPUT_STATE;
    },
    [getAliases],
  );

  const isVisibleSession = useCallback(
    (sessionId: string) => {
      const visibleSessionId = getCurrentSessionId();
      return !!visibleSessionId && getAliases(visibleSessionId).has(sessionId);
    },
    [getAliases, getCurrentSessionId],
  );

  const setSessionState = useCallback(
    (sessionId: string, patch: Partial<InputState>) => {
      const aliases = getAliases(sessionId);
      const next = { ...getSessionState(sessionId), ...patch };
      aliases.forEach((alias) => {
        stateBySessionRef.current[alias] = next;
      });
      const storedSessionIds = Object.keys(stateBySessionRef.current);
      if (storedSessionIds.length > 100) {
        storedSessionIds
          .filter((storedSessionId) => !aliases.has(storedSessionId))
          .slice(0, storedSessionIds.length - 100)
          .forEach((storedSessionId) => {
            delete stateBySessionRef.current[storedSessionId];
          });
      }
      if (isVisibleSession(sessionId)) {
        if (patch.loading !== undefined) setActiveLoading(next.loading);
        if (patch.disabled !== undefined) setActiveDisabled(next.disabled);
      }
    },
    [
      getAliases,
      getSessionState,
      isVisibleSession,
      setActiveDisabled,
      setActiveLoading,
    ],
  );

  const setSessionLoading = useCallback(
    (sessionId: string, value: boolean | string) => {
      setSessionState(sessionId, { loading: value });
    },
    [setSessionState],
  );

  const getSessionLoading = useCallback(
    (sessionId: string) => getSessionState(sessionId).loading,
    [getSessionState],
  );

  const setSessionDisabled = useCallback(
    (sessionId: string, value: boolean | string) => {
      setSessionState(sessionId, { disabled: value });
    },
    [setSessionState],
  );

  const getSessionDisabled = useCallback(
    (sessionId: string) => getSessionState(sessionId).disabled,
    [getSessionState],
  );

  const setLoading = useCallback(
    (value: boolean | string) => {
      const sessionId = getCurrentSessionId();
      if (sessionId) setSessionLoading(sessionId, value);
      else setActiveLoading(value);
    },
    [getCurrentSessionId, setActiveLoading, setSessionLoading],
  );

  const setDisabled = useCallback(
    (value: boolean | string) => {
      const sessionId = getCurrentSessionId();
      if (sessionId) setSessionDisabled(sessionId, value);
      else setActiveDisabled(value);
    },
    [getCurrentSessionId, setActiveDisabled, setSessionDisabled],
  );

  useEffect(() => {
    const state = currentSessionId
      ? getSessionState(currentSessionId)
      : EMPTY_INPUT_STATE;
    setActiveLoading(state.loading);
    setActiveDisabled(state.disabled);
  }, [currentSessionId, getSessionState, setActiveDisabled, setActiveLoading]);

  const value = React.useMemo<IAgentScopeRuntimeWebUIInputContext>(
    () => ({
      loading,
      setLoading,
      getLoading,
      setSessionLoading,
      getSessionLoading,
      disabled,
      setDisabled,
      getDisabled,
      setSessionDisabled,
      getSessionDisabled,
    }),
    [
      disabled,
      getDisabled,
      getLoading,
      getSessionDisabled,
      getSessionLoading,
      loading,
      setDisabled,
      setLoading,
      setSessionDisabled,
      setSessionLoading,
    ],
  );

  return (
    <ChatAnywhereInputContext.Provider value={value}>
      {props.children}
    </ChatAnywhereInputContext.Provider>
  );
}

export const useChatAnywhereInput = <Selected,>(
  selector: (value: IAgentScopeRuntimeWebUIInputContext) => Selected,
) => useContextSelector(ChatAnywhereInputContext, selector);
