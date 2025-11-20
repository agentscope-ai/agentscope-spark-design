import { Welcome, ChatInput } from '@agentscope-ai/chat';
import { Flex } from 'antd';

export default function () {
  return <Flex vertical  style={{ height: '100%', }}>
    <Welcome
      style={{ justifyContent: 'center', flex: 1 }}
      logo={null}
      title={<div style={{ textAlign: 'center' }}>Nice to meet you!</div>}
      desc="How can I help you today?"
    />
    <ChatInput placeholder='Please type here...' />
  </Flex>
}