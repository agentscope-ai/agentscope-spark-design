import React, { useState } from 'react';
import { ChatInput } from '@agentscope-ai/chat';
import { message } from 'antd';

const suggestions = [
  { label: 'Write a report', value: 'report' },
  { label: 'Draw a picture', value: 'draw' },
  {
    label: 'Check some knowledge',
    value: 'knowledge',
    
  },
];

export default function () {
  const [value, setValue] = useState('');
  const [loading, setLoading] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();

  return (
    <>
      {contextHolder}
      <ChatInput
        placeholder="Type / to get suggestions"
        value={value}
        loading={loading}
        suggestions={suggestions}
        onChange={setValue}
        onSubmit={(nextValue) => {
          messageApi.success(`message send success: ${nextValue}`);
          setValue('');
          setLoading(true);
          setTimeout(() => {
            setLoading(false);
          }, 1500);
        }}
      />
    </>
  );
}
