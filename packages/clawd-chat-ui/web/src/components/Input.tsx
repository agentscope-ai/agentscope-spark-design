import { ChatInput } from '@agentscope-ai/chat';
import { useState } from 'react';

export default function (props: { onSend: (value: string) => void, loading: boolean }) {
  const [value, setValue] = useState('');
  return <div style={{ padding: 12 }}>
    <ChatInput
      placeholder='Please type here...'
      value={value} onChange={setValue}
      loading={props.loading}
      onSubmit={() => {
        props.onSend(value)
        setValue('')
      }}
    >
    </ChatInput>
  </div>
}