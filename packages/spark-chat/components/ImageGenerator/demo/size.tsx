import { ImageGenerator } from '@agentscope-ai/chat';
import { useTimeout } from 'ahooks';
import { Flex } from 'antd';
import { useState } from 'react';

export default function () {

  return <Flex vertical gap="middle">
    <ImageGenerator
      width={16}
      height={9}
      block
    />
  </Flex>
}