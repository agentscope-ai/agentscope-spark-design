import { ChatInput } from '@agentscope-ai/chat';
import { Flex } from "antd";
import EyeFollower from './EyeFollower';


export default function () {

  return <Flex vertical style={{ height: '100%', }}>
    <Flex justify='center' style={{ margin: '64px 0 32px 0', }}>
      <EyeFollower />
    </Flex>

    <ChatInput placeholder='Please type here...' />
  </Flex>
}

