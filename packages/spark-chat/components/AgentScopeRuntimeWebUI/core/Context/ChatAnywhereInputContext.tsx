import { createContext, useContextSelector } from 'use-context-selector';
import { IAgentScopeRuntimeWebUIInputContext } from '@agentscope-ai/chat';
import { useGetState } from 'ahooks';

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
  const [loading, setLoading, getLoading] = useGetState<boolean>(false);
  const [disabled, setDisabled, getDisabled] = useGetState<boolean>(false);

  return <ChatAnywhereInputContext.Provider value={{ loading, setLoading, getLoading, disabled, setDisabled, getDisabled }}>
    {props.children}
  </ChatAnywhereInputContext.Provider>;
}

export const useChatAnywhereInput = (selector: (v: Partial<IAgentScopeRuntimeWebUIInputContext>) => Partial<IAgentScopeRuntimeWebUIInputContext>) => {
  return useContextSelector(ChatAnywhereInputContext, selector);
}
