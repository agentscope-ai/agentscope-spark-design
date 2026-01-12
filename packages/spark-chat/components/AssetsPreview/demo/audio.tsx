
import { AssetsPreview } from '@agentscope-ai/chat';
import { Flex, Space } from 'antd';
import React from 'react';

export default function () {
  return <AssetsPreview type="audio" data={[
    { src: 'https://cloud.video.taobao.com/vod/m9amjbqLTGUvaGo3o61u-Ch2hycUCa3RA3pAw1-Zv_0.mp4', },
    { src: 'https://cloud.video.taobao.com/vod/m9amjbqLTGUvaGo3o61u-Ch2hycUCa3RA3pAw1-Zv_0.mp4', },
    { src: 'https://cloud.video.taobao.com/vod/m9amjbqLTGUvaGo3o61u-Ch2hycUCa3RA3pAw1-Zv_0.mp4', },

  ]} />
}