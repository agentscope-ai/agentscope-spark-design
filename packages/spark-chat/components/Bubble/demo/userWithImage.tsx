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
      code: 'Images',
      data: [
        {
          url: 'https://gw.alicdn.com/imgextra/i4/O1CN01sjZ4Uu1erFDOC6IkA_!!6000000003924-2-tps-396-224.png',
        },
        {
          url: 'https://gw.alicdn.com/imgextra/i4/O1CN01sjZ4Uu1erFDOC6IkA_!!6000000003924-2-tps-396-224.png',
        },
        {
          url: 'https://gw.alicdn.com/imgextra/i4/O1CN01sjZ4Uu1erFDOC6IkA_!!6000000003924-2-tps-396-224.png',
        },
      ]
    },
  ]} role="user"></Bubble>
}