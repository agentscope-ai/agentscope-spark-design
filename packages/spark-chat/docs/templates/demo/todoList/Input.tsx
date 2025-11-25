import React from 'react';
import { Sender } from '@agentscope-ai/chat';
import { useCopilotChat } from "@agentscope-ai/chat";
import { Role, TextMessage } from '@copilotkit/runtime-client-gql';


export default function () {
  const [content, setContent] = React.useState('');
  const context = useCopilotChat();

  return <div>
    <Sender
      value={content}
      loading={context.isLoading}
      onChange={setContent}
      onCancel={() => {
        context.stopGeneration();
      }}
      onSubmit={async () => {
        context.appendMessage(new TextMessage({
          content: content,
          role: Role.User,
        }))
        setContent('');
      }} />
  </div>
}