import { Bubble, DefaultCards } from '@agentscope-ai/chat';

export default function () {
  return <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
    <Bubble cards={[
      {
        code: 'Text',
        data: {
          content: 'what is citypop'
        }
      },
      {
        code: 'Files',
        data: [
          {
            url: 'https://aliyun.com',
            name: 'test.txt',
            size: 1000,
          },
          {
            name: 'test.pdf',
            size: 10000,
          },

        ]
      },
    ]} role="user"></Bubble>


    <Bubble cards={[
      {
        code: 'Text',
        data: {
          content: 'what is citypop'
        }
      },
      {
        code: 'Videos',
        data: [
          {
            src: 'https://cloud.video.taobao.com/vod/_3l26Qh63hL5F25ZL16nsu0j7M5hmdHrypxmv4DcT3k.mp4',
            poster: 'https://img.alicdn.com/imgextra/i4/6000000003913/O1CN019uZNJg1emCvSNKdwO_!!6000000003913-0-tbvideo.jpg',
          },
          {
            src: 'https://cloud.video.taobao.com/vod/56HgXGMy8QkZPyQ9pXT7Cih2hycUCa3RA3pAw1-Zv_0.mp4',
            poster: 'https://img.alicdn.com/imgextra/i4/6000000000548/O1CN01eXtmmV1Fv28zyVqEZ_!!6000000000548-0-tbvideo.jpg',
          },
        ]
      },
      {
        code: 'Audios',
        data: [
          {
            src: 'https://cloud.video.taobao.com/vod/56HgXGMy8QkZPyQ9pXT7Cih2hycUCa3RA3pAw1-Zv_0.mp4',
          },
          {
            src: 'https://cloud.video.taobao.com/vod/56HgXGMy8QkZPyQ9pXT7Cih2hycUCa3RA3pAw1-Zv_0.mp4',
          },
        ]
      }
    ]} role="user"></Bubble>
  </div>
}