import { Mermaid } from '@agentscope-ai/chat';
import React from 'react';

const content = `sequenceDiagram
    Alice->>John: Hello John, how are you?
    John-->>Alice: Great!
    Alice-)John: See you later!
`;

export default function () {
  return <Mermaid content={content} height={300} />;
}
