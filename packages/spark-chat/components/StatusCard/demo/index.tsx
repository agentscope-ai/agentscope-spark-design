import { StatusCard } from '@agentscope-ai/chat';
import { Flex } from 'antd';
import { useState } from 'react';


export default function () {
  const [done, setDone] = useState(false);
  return <Flex vertical gap={16}>
    <StatusCard title="Success" status="success">

      <StatusCard.Statistic values={[
        { title: 'Runtime', value: '23min' },
        { title: 'Input Token', value: '200k' },
        { title: 'Output Token', value: '1000k' },
      ]} />
    </StatusCard>
    <StatusCard title="Execution Failed" description="Failed to load resource: net::ERR_CONNECTION_CLOSED" status="error" />
    <StatusCard title="Warning" status="warning" />


    <StatusCard.HITL
      done={done}
      onDone={() => setDone(true)}
      title="Human intervention required"
      description="Please log in after entering your account and password"
      waitButtonText="I have completed, continue task"
      doneButtonText="User has confirmed"
    />


  </Flex>
}