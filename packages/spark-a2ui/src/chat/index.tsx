import React, { useMemo, useRef } from 'react';
import { AgentScopeRuntimeWebUI, IAgentScopeRuntimeWebUIRef, ChatInput, IAgentScopeRuntimeWebUIOptions } from '@agentscope-ai/chat';
import config from './config';
import A2UIRenderer from './components/A2UIRenderer';
import { ChatContext } from './context';

export default function Chat() {
  const ref = useRef<IAgentScopeRuntimeWebUIRef>(null);
  const options = useMemo(() => {
    return {
      ...config(),
      customToolRenderConfig: {
        'generate_response': A2UIRenderer,
      },
    } as unknown as IAgentScopeRuntimeWebUIOptions;
  }, [])

  return <div style={{ height: '100dvh' }}>
    <ChatContext.Provider value={{ ref }}>
      <AgentScopeRuntimeWebUI
        ref={ref}
        options={options}
      />
    </ChatContext.Provider>
  </div>
}