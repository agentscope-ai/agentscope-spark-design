import React from 'react';
import { Markdown } from "@agentscope-ai/chat";


export default function (props) {
  const cursor = props.data.msgStatus === 'generating';

  return <Markdown
    cursor={cursor}
    {...props.data}
    typing={props.data.msgStatus === 'generating' ? props.data.typing : false}
  />
}