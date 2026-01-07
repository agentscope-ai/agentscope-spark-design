import { ImageGenerator } from '@agentscope-ai/chat';
import { useTimeout } from 'ahooks';
import { Flex } from 'antd';
import { useState } from 'react';

export default function () {
  const [src, setSrc] = useState('');

  useTimeout(() => {
    setSrc('https://img.alicdn.com/imgextra/i1/O1CN01lS5S0a1yl6FKoBZHl_!!6000000006618-0-tps-1280-1280.jpg');
  }, 10 * 1000)

  return <Flex vertical gap="middle">
    <ImageGenerator
      src={src}
      skeletonText="Painting..."
    />

    <ImageGenerator
      src="https://img.alicdn.com/imgextra/i1/O1CN01lS5S0a1yl6FKoBZHl_!!6000000006618-0-tps-1280-1280.jpg"
    />
  </Flex>
}