import { Mermaid } from '@agentscope-ai/chat';
import React from 'react';

const content = `stateDiagram-v2
    [*] --> Still
    Still --> [*]

    Still --> Moving
    Moving --> Still
    Moving --> Crash
    Crash --> [*]
 `;

export default function () {
  return <Mermaid content={content} height={400} />;
}
