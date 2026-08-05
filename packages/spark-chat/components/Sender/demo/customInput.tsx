import { ChatInput } from '@agentscope-ai/chat';
import { Input } from 'antd';
import React, { useState } from 'react';

const CustomInput = React.forwardRef<
  React.ElementRef<typeof Input.TextArea>,
  React.ComponentProps<typeof Input.TextArea>
>(function CustomInput(props, ref) {
  return (
    <Input.TextArea
      {...props}
      ref={ref}
      style={{ ...props.style, color: '#1677ff' }}
    />
  );
});

export default function () {
  const [value, setValue] = useState('Custom input component');

  return (
    <ChatInput
      components={{ input: CustomInput }}
      value={value}
      onChange={setValue}
    />
  );
}
