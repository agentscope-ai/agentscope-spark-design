import { Mermaid } from '@agentscope-ai/chat';
import React from 'react';

const content = `timeline
    title History of Social Media Platform
    2002 : LinkedIn
    2004 : Facebook
         : Google
    2005 : YouTube
    2006 : Twitter
`;

export default function () {
  return <Mermaid content={content} height={300} />;
}
