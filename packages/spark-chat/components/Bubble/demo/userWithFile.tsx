import { Bubble, DefaultCards } from '@agentscope-ai/chat';

export default function () {
  return <Bubble cards={[
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
}