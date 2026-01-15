import React, { useMemo } from 'react';
import { AgentScopeRuntimeWebUI, IAgentScopeRuntimeWebUIRef, ChatInput, IAgentScopeRuntimeWebUIOptions } from '@agentscope-ai/chat';
import config from './config';
import A2UIRenderer from './components/A2UIRenderer';

export default function Chat() {
  const options = useMemo(() => {
    return {
      ...config(),
      customToolRenderConfig: {
        'generate_response': A2UIRenderer,
      },
    } as unknown as IAgentScopeRuntimeWebUIOptions;
  }, [])

  return <div style={{ height: '100dvh' }}>
    <AgentScopeRuntimeWebUI
      options={options}
    />
  </div>
}