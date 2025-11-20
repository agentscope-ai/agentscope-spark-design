import React, { useState } from 'react';
import { ChatInput } from '@agentscope-ai/chat';

export default function () {
  const [value, setValue] = useState('Hello, Alibaba Cloud Spark Chat!');
  return <ChatInput placeholder='Please type here...' value={value} onChange={setValue}></ChatInput>
}