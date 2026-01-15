import React, { useContext } from 'react';

import {
  A2UIProvider,
  A2UIRenderer,
  type A2UIMessage,
  type A2UIAction,
} from '@agentscope-ai/spark-a2ui'
import { Bubble } from '@agentscope-ai/chat';
import { copy } from '@agentscope-ai/design';
import { Card, Skeleton } from 'antd';
import { ChatContext } from '../../context';


const loading = <Card title="A2UI Response" loading>
  <Skeleton active />
</Card>
export default function (props: any) {
  const { ref } = useContext(ChatContext);

  if (!props.data?.content[1]) return loading;

  const input = props.data?.content[0]?.data?.arguments
  const messages = (function () {
    try {
      return (JSON.parse(JSON.parse(input).response_with_a2ui));

    } catch (error) {
      return null;
    }
  })()

  if (messages === null) return loading;

  const handleAction = (action: A2UIAction) => {
    console.log('Action received:', action)

    ref.current?.input.submit({
      query: JSON.stringify(action),
    });
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