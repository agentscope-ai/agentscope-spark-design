import React, { useMemo, useRef, useState } from "react";
import { InputProps } from "./props";
import { ChatInput } from '@agentscope-ai/chat';

export const Input = ({
  inProgress,
  onSend,
  onStop,
}: InputProps) => {
  const [text, setText] = useState("");
  const send = () => {
    if (inProgress) return;
    onSend(text);
    setText("");
  };

  return <ChatInput
    value={text}
    onChange={setText}
    onSubmit={send}
    loading={inProgress}
    onCancel={onStop}
  />;
};
