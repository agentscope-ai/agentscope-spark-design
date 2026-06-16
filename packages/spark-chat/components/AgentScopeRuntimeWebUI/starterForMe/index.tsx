import { AgentScopeRuntimeWebUI } from '@agentscope-ai/chat';

export default function Page() {
  return (
    <div style={{ height: '100dvh' }}>
      <AgentScopeRuntimeWebUI
        options={{
          api: {
            baseURL: '/api/runtime/chat',
            token: 'your-token',
          },
          session: {
            multiple: true,
          },
          theme: {
            locale: 'en',
            colorPrimary: '#615CED',
          },
          sender: {
            placeholder: 'Ask something',
            maxLength: 10000,
          },
          welcome: {
            greeting: 'Hello, how can I help you today?',
            prompts: [{ value: 'What can you do?' }],
          },
        }}
      />
    </div>
  );
}