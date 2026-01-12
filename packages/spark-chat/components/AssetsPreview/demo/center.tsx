import { AssetsPreview } from '@agentscope-ai/chat';
import { Flex, Space } from 'antd';
import React from 'react';

export default function () {
  return <AssetsPreview type="image" data={[
    { src: 'https://img.alicdn.com/imgextra/i3/O1CN01dKprif1ar0awCMDwK_!!6000000003382-0-tps-2640-1100.jpg', width: 1, height: 1 },
  ]} />
}