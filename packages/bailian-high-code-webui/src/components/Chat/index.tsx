import { AgentScopeRuntimeWebUI, IAgentScopeRuntimeWebUIOptions } from '@agentscope-ai/chat';
import defaultConfig from './defaultConfig';

export default function () {

  return <div style={{ height: '100vh' }}>
    <AgentScopeRuntimeWebUI
      options={defaultConfig as unknown as IAgentScopeRuntimeWebUIOptions}
    />
  </div>;
}