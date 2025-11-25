import { ChatInput, Welcome } from '@agentscope-ai/chat';
import { Flex } from "antd";


export default function () {
  return <Flex vertical style={{ height: '100%', }}>
    <Welcome
      style={{ justifyContent: 'center', flex: 1 }}
      title="Nice to meet you!"
      desc="How can I help you today?"
      logo="https://gw.alicdn.com/imgextra/i3/O1CN01VFloZL1oERpBMx2Nv_!!6000000005193-55-tps-56-56.svg"
    />

    <ChatInput placeholder='Please type here...' />
  </Flex>
}