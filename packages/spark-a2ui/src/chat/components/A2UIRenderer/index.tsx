import React from 'react';

import {
  A2UIProvider,
  A2UIRenderer,
  type A2UIMessage,
  type A2UIAction,
} from '@agentscope-ai/spark-a2ui'
import { Bubble } from '@agentscope-ai/chat';
import { copy } from '@agentscope-ai/design';
import { Card, Space } from 'antd';


export default function (props: any) {
  if (!props.data?.content[1]) return <Bubble.Spin />;

  const input = props.data?.content[0]?.data?.arguments
  const messages = (JSON.parse(JSON.parse(input).response_with_a2ui));

  const handleAction = (action: A2UIAction) => {
    console.log('Action received:', action)
  }
  return <Card title="A2UI Response" extra={
    <a onClick={() => {
      copy(JSON.stringify(messages));
    }}>copy a2ui response</a>
  }>
    <A2UIProvider messages={messages}>
      <A2UIRenderer onAction={handleAction} />
    </A2UIProvider>
  </Card>
}