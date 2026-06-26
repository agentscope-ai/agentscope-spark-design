import { createContext, useContextSelector } from 'use-context-selector';
import { IAgentScopeRuntimeWebUIInputContext } from '@agentscope-ai/chat';
import { useGetState } from 'ahooks';
import { useCallback, useEffect, useRef } from 'react';
import { ChatAnywhereSessionsContext } from './ChatAnywhereSessionsContext';

export const ChatAnywhereInputContext = createContext<IAgentScopeRuntimeWebUIInputContext>({
  loading: false,
  setLoading: () => { },
  getLoading: () => false,
  disabled: false,
  setDisabled: () => { },
  getDisabled: () => false,
});

export function ChatAnywhereInputContextProvider(props: {
  children: React.ReactNode | React.ReactNode[];
}) {
  const currentSessionId = useContextSelector(ChatAnywhereSessionsContext, v => v.currentSessionId);
  const getCurrentSessionId = useContextSelector(ChatAnywhereSessionsContext, v => v.getCurrentSessionId);

  const [loading, _setLoading, getLoading] = useGetState<boolean | string>(false);
  const [disabled, _setDisabled, getDisabled] = useGetState<boolean | string>(false);

  const stateMapRef = useRef<Record<string, { loading: boolean | string; disabled: boolean | string }>>({});
  const setLoading = useCallback((value: boolean | string) => {
    const sessionId = getCurrentSessionId();
    if (sessionId) {
      if (!stateMapRef.current[sessionId]) {
        stateMapRef.current[sessionId] = { loading: false, disabled: false };
      }
      stateMapRef.current[sessionId].loading = value;
    }
    _setLoading(value);
  }, [getCurrentSessionId, _setLoading]);

  const setDisabled = useCallback((value: boolean | string) => {
    const sessionId = getCurrentSessionId();
    if (sessionId) {
      if (!stateMapRef.current[sessionId]) {
        stateMapRef.current[sessionId] = { loading: false, disabled: false };
      }
      stateMapRef.current[sessionId].disabled = value;
    }
    _setDisabled(value);
  }, [getCurrentSessionId, _setDisabled]);

  useEffect(() => {
    // Preserve the previous session state on switch. The frontend SSE is aborted
    // during navigation, but the backend may still be generating; clearing
    // loading here would make that session's queue drain before reconnect/load
    // confirms the run has actually finished.
    const state = currentSessionId ? stateMapRef.current[currentSessionId] : undefined;
    _setLoading(state?.loading ?? false);
    _setDisabled(state?.disabled ?? false);
  }, [currentSessionId]);

  return <ChatAnywhereInputContext.Provider value={{ loading, setLoading, getLoading, disabled, setDisabled, getDisabled }}>
    {props.children}
  </ChatAnywhereInputContext.Provider>;
}

export const useChatAnywhereInput = (selector: (v: Partial<IAgentScopeRuntimeWebUIInputContext>) => Partial<IAgentScopeRuntimeWebUIInputContext>) => {
  return useContextSelector(ChatAnywhereInputContext, selector);
}
