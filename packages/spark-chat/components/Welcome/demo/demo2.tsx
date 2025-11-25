import React from "react";
import { ChatInput, Welcome } from '@agentscope-ai/chat';
import { Flex } from "antd";


export default function () {
  return <Flex vertical style={{ height: '100%', }}>


    <Welcome
      style={{ display: 'block', marginTop: 32,  flex: 1 }}
      title="How can I help you today?"
      desc={null}
      logo={
        <img
          style={{
            width: 40,
            height: 40,
            marginBottom: 10,
          }}
          src="https://gw.alicdn.com/imgextra/i3/O1CN01VFloZL1oERpBMx2Nv_!!6000000005193-55-tps-56-56.svg" />
      }
    />


    <ChatInput placeholder='Please type here...' />


  </Flex>
}