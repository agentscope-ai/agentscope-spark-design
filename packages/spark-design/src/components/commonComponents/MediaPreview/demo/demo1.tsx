import { Button, MediaPreview } from '@agentscope-ai/design';
import { useState } from 'react';
import { MediaItem } from '../index';

const mediaList: MediaItem[] = [
  {
    type: 'image',
    src: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    alt: 'Image 1',
  },
  {
    type: 'video',
    src: 'https://cloud.video.taobao.com/vod/MgaPySDXyyWMT4QM-CWYjX6BlVMGNei259qPTCCQ7ew.mp4',
    alt: 'Video 1',
  },
  {
    type: 'image',
    src: 'https://img.alicdn.com/imgextra/i4/O1CN01LwpgZg1DJokMyCkBJ_!!6000000000196-2-tps-312-312.png',
    alt: 'Image 2',
  },
];

export default function () {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <Button onClick={() => setVisible(true)}>Open Media Preview</Button>
      <MediaPreview
        visible={visible}
        mediaList={mediaList}
        onClose={() => setVisible(false)}
      />
    </>
  );
}
