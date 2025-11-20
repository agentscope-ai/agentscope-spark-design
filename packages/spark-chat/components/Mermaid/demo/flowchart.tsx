import { Mermaid } from '@agentscope-ai/chat';
import React from 'react';

const content = `flowchart LR
    A[Hard edge] -->|Link text| B(Round edge)
    B --> C{Decision}
    C -->|One| D[Result one]
    C -->|Two| E[Result two]
`;

export default () => {
  return <Mermaid content={content} height={200} />;
};
