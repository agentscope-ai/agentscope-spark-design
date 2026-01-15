import { createContext, useContext } from 'react';
import { IAgentScopeRuntimeWebUIRef } from '@agentscope-ai/chat';

export const ChatContext = createContext<{
  ref: {
    current: IAgentScopeRuntimeWebUIRef | null;
  };
}>({
  ref: {
    current: null,
  },
});
