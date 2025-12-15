"use strict";(self.webpackChunk_agentscope_ai_chat=self.webpackChunk_agentscope_ai_chat||[]).push([[1145],{42084:function(e,n){n.Z=`import React, { useMemo, useRef, useState } from 'react';
import { GetProp, Select } from 'antd';
import { SparkAttachmentLine } from '@agentscope-ai/icons';
import { ChatInput, Attachments } from '@agentscope-ai/chat';
import { AIGC } from '@agentscope-ai/chat';

type AttachedFiles = GetProp<typeof Attachments, 'items'>;

export default function () {
  const [value, setValue] = useState('Hello, Alibaba Cloud Spark Chat!');
  const [selectValue, setSelectValue] = useState('1');
  const onUpload = useMemo(() => {
    return [{
      multiple: false,
      icon: <SparkAttachmentLine />,
      customRequest(options) {
        options.onSuccess({
          url: URL.createObjectURL(options.file as Blob),
        });
      }
    }]
  }, []);
  const resetData = new Array(onUpload.length).fill([]);
  const [attachedFiles, setAttachedFiles] = React.useState<AttachedFiles[]>(resetData);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleFileChange = async (index, fileList) => {
    setAttachedFiles(attachedFiles => {
      return attachedFiles.map((item, i) => {
        if (i === index) {
          return [...fileList];
        }
        return [...item];
      })
    })
  }
  
  return (
    <div ref={containerRef} style={{width: '100%'}}>
      <ChatInput
        enableFocusExpand={true}
        header={
          <AIGC.SenderHeader 
            onUpload={onUpload}
            attachedFiles={attachedFiles} 
            onFileChange={handleFileChange} 
          />
        }
        prefix={
          <Select
            value={selectValue}
            onChange={setSelectValue}
            options={[
              { label: 'Option 1', value: '1' },
              { label: 'Option 2', value: '2' },
              { label: 'Option 3', value: '3' },
            ]}
          />
        }
        placeholder='Please type here...'
        value={value}
        onChange={setValue}
      />
    </div>
  )
}`},94833:function(e,n){n.Z=`import React from 'react';
import { Accordion } from '@agentscope-ai/chat';
import { Flex } from 'antd'
import { SparkDeepSearchLine, SparkCheckCircleLine } from '@agentscope-ai/icons'
const App = () => <>
  <Flex gap={32} vertical>
    <Accordion
      status="generating"
      icon={<SparkDeepSearchLine />}
      title={<Accordion.SoftLightTitle>Searching from 10 pages</Accordion.SoftLightTitle>}

      steps={[{
        icon: <SparkCheckCircleLine />,
        title: 'File analysis',
      }, {
        icon: <SparkCheckCircleLine />,
        title: 'Url analysis',
      }]}
    >
    </Accordion>

    <Accordion
      defaultOpen
      status="finished"
      icon={<SparkDeepSearchLine />}
      title={"Searching from 10 pages"}
      steps={[{
        icon: <SparkCheckCircleLine />,
        title: 'File analysis',
      }, {
        icon: <SparkCheckCircleLine />,
        title: 'Url analysis',
      }]}
    >
    </Accordion>
  </Flex>
</>;

export default App;
`},92282:function(e,n){n.Z=`import { Accordion } from '@agentscope-ai/chat';
import { Flex } from 'antd'
import { CodeBlock } from '@agentscope-ai/design';
import { SparkCheckCircleLine, SparkTimeLine, SparkTimestampLine } from '@agentscope-ai/icons';

const input = JSON.stringify({
  'query': 'What is city pop?',
  'top_k': 1,
  'threshold': 0.5,
  'return_metadata': true,
});

const output = JSON.stringify({
  'results': [
    {
      'score': 0.9999999999999998,
      'metadata': {
        'source': 'https://en.wikipedia.org/wiki/City_population',
        'title': 'City population',
      },
      'content': 'city pop, short for city pop, is a genre of music that originated in japan during the late 1970s and early 1980s. it blends elements of jazz, folk, easy listening, and aor (adult oriented rock) with a distinctly urban feel. the term "city pop" often evokes images of the sophisticated, stylish, and sometimes nostalgic lifestyle of tokyo and other major japanese cities during this period.'
    }
  ]

})

const App = () => <>
  <Flex gap={24} vertical>
    <Accordion
      title="Completed"
      status="finished"
      defaultOpen
      steps={[{
        icon: <SparkCheckCircleLine />,
        iconLine: true,
        title: 'Knowledge base search',
        rightChildren: <span>52.21ms</span>,
        children: <Accordion.BodyContent headerLeft="What is city pop?" headerRight="Similarity: 78%">
          <div style={{ padding: 12 }}>
            city pop, short for city pop, is a genre of music that originated in japan during the late 1970s and early 1980s. it blends elements of jazz, folk, easy listening, and aor (adult oriented rock) with a distinctly urban feel. the term "city pop" often evokes images of the sophisticated, stylish, and sometimes nostalgic lifestyle of tokyo and other major japanese cities during this period.
            city pop is characterized by its smooth melodies, mellow rhythms, and often dreamy or introspective lyrics. common themes include city life, summer vibes, nature, and romantic encounters. the music is frequently associated with a particular aesthetic that reflects the fashion, design, and cultural trends of urban japan in the 1980s.
            some notable city pop artists include mariya takeuchi, known for her iconic song " plastic love," and joe hisaishi, a composer famous for his work on studio ghibli films, though he is not strictly considered a city pop artist.
          </div>
        </Accordion.BodyContent>,
      }, {
        defaultOpen: true,
        icon: <SparkCheckCircleLine />,
        iconLine: true,
        title: 'Long Memory',
        children: <Flex gap={8} vertical>
          <Accordion.BodyContent headerLeft="Input">
            <CodeBlock language="json" value={input} />
          </Accordion.BodyContent>
          <Accordion.BodyContent headerLeft="Output">
            <CodeBlock language="json" value={output} />
          </Accordion.BodyContent>
        </Flex>,
      }
      ]}
    >
    </Accordion>


    {[{ label: 'steps error', value: 'error' },
    { label: 'steps interrupted', value: 'interrupted' },
    { label: 'steps generating', value: 'generating' }].map(({ label, value }) => (
      <Accordion
        title={label}
        // @ts-ignore
        status={value}
        defaultOpen={false}
        steps={[{
          icon: <SparkCheckCircleLine />,
          iconLine: true,
          title: 'Knowledge base search',
          rightChildren: <span>52.21ms</span>,
          children: <Accordion.BodyContent headerLeft="What is city pop?" headerRight="Similarity: 78%">
            <div style={{ padding: 12 }}>
              city pop, short for city pop, is a genre of music that originated in japan during the late 1970s and early 1980s. it blends elements of jazz, folk, easy listening, and aor (adult oriented rock) with a distinctly urban feel. the term "city pop" often evokes images of the sophisticated, stylish, and sometimes nostalgic lifestyle of tokyo and other major japanese cities during this period.
              city pop is characterized by its smooth melodies, mellow rhythms, and often dreamy or introspective lyrics. common themes include city life, summer vibes, nature, and romantic encounters. the music is frequently associated with a particular aesthetic that reflects the fashion, design, and cultural trends of urban japan in the 1980s.
              some notable city pop artists include mariya takeuchi, known for her iconic song " plastic love," and joe hisaishi, a composer famous for his work on studio ghibli films, though he is not strictly considered a city pop artist.
            </div>
          </Accordion.BodyContent>,
        }]}
      >
      </Accordion>
    ))}


    <Accordion
      title="Completed deep thinking"
      status="generating"
      defaultOpen
      steps={[{
        icon: <SparkCheckCircleLine />,
        iconLine: true,
        title: 'File analysis',
        rightChildren: <span>52.21ms</span>,
        children: <Accordion.BodyContent headerLeft="What is city pop?" headerRight="Similarity: 78%">
          <div style={{ padding: 12 }}>
            city pop, short for city pop, is a genre of music that originated in japan during the late 1970s and early 1980s. it blends elements of jazz, folk, easy listening, and aor (adult oriented rock) with a distinctly urban feel. the term "city pop" often evokes images of the sophisticated, stylish, and sometimes nostalgic lifestyle of tokyo and other major japanese cities during this period.
            city pop is characterized by its smooth melodies, mellow rhythms, and often dreamy or introspective lyrics. common themes include city life, summer vibes, nature, and romantic encounters. the music is frequently associated with a particular aesthetic that reflects the fashion, design, and cultural trends of urban japan in the 1980s.
            some notable city pop artists include mariya takeuchi, known for her iconic song " plastic love," and joe hisaishi, a composer famous for his work on studio ghibli films, though he is not strictly considered a city pop artist.
          </div>
        </Accordion.BodyContent>,
      }, {
        status: "generating",
        iconLine: true,
        title: <b>MCP Call</b>,
        children: <Flex gap={8} vertical>
          <Accordion.BodyContent headerLeft="input">
            <CodeBlock language="json" value={input} />
          </Accordion.BodyContent>
          <Accordion.BodyContent headerLeft="output">
            <CodeBlock language="json" value={output} />
          </Accordion.BodyContent>
        </Flex>,
      },
      {
        icon: <SparkTimestampLine />,
        iconLine: true,
        title: 'Long Memory',
      },
      {
        icon: <SparkTimestampLine />,
        iconLine: true,
        title: 'Final output',
      },
      ]}
    >
    </Accordion>
  </Flex>
</>;

export default App;
`},5177:function(e,n){n.Z=`import { DeepThinking } from '@agentscope-ai/chat';
import { Flex } from 'antd'


const App = () => {
  return <>
  <Flex gap={32} vertical>
    {/* \u793A\u4F8B 1: \u6B63\u5728\u751F\u6210\u4E2D */}
    <DeepThinking
      loading={true}
      content='\u4F60\u597D\uFF0C\u6211\u662FAI\u667A\u80FD\u52A9\u624B\uFF0C\u6211\u6B63\u5728\u601D\u8003...'
    />

    {/* \u793A\u4F8B 2: \u751F\u6210\u5B8C\u6210\uFF0C\u5C55\u5F00\u72B6\u6001 */}
    <DeepThinking
      defaultOpen
      loading={false}
      content={\`Okay, the user is asking about "citypop." Let me start by recalling what I know about that term. I remember that City Pop is a genre of music, but I need to make sure I'm accurate.

First, when did City Pop originate? I think it was in Japan during the late 1970s and 1980s. That makes sense because Japan's economy was booming then, leading to a vibrant urban culture. The genre probably blends Western styles like funk, jazz, and disco with Japanese pop elements. Artists like Tatsuro Yamashita and Mariya Takeuchi come to mind. Oh, and there's that song "Plastic Love" by Mariya Takeuchi that went viral online recently, which might have sparked renewed interest.

I should also mention the themes of City Pop songs\u2014they often reflect city life, romance, and leisure, fitting the upbeat and cosmopolitan vibe of the time. The visual style associated with it includes retro anime and vibrant cityscapes, which adds to its aesthetic appeal. It's interesting how the internet, especially platforms like YouTube and Spotify, helped revive this genre internationally. Maybe I should note that connection between modern digital culture and the resurgence of City Pop.

Wait, are there any subgenres or key characteristics I should highlight? The use of synthesizers, smooth vocals, and lush production are typical. Also, City Pop was influenced by yacht rock and soft rock from the West. It's important to link it to Japan's economic bubble era, as that context explains the music's optimistic and luxurious feel.

I need to ensure I don't confuse it with other Japanese genres like J-pop or Enka. City Pop is distinct in its fusion with Western sounds. Including notable albums, like Tatsuro Yamashita's "For You" or Anri's "Timely!!", could be helpful. Oh, and the connection to future funk and vaporwave genres that sample City Pop tracks is a good point for its modern influence.\`}
    />

    {/* \u793A\u4F8B 3: \u4F7F\u7528 maxHeight \u9650\u5236\u9AD8\u5EA6 */}
    <DeepThinking
      title="\u9650\u5236\u6700\u5927\u9AD8\u5EA6\u793A\u4F8B"
      defaultOpen
      maxHeight={150}
      content={\`\u8FD9\u662F\u4E00\u4E2A\u5F88\u957F\u7684\u601D\u8003\u5185\u5BB9\uFF0C\u7528\u4E8E\u6F14\u793A maxHeight \u5C5E\u6027\u3002

\u5F53\u5185\u5BB9\u8D85\u51FA\u8BBE\u5B9A\u7684\u6700\u5927\u9AD8\u5EA6\u65F6\uFF0C\u4F1A\u51FA\u73B0\u6EDA\u52A8\u6761\u3002

\u8FD9\u6837\u53EF\u4EE5\u907F\u514D\u5185\u5BB9\u8FC7\u957F\u5BFC\u81F4\u9875\u9762\u5E03\u5C40\u95EE\u9898\u3002

\u8BA9\u6211\u4EEC\u6DFB\u52A0\u66F4\u591A\u6587\u5B57\u6765\u6F14\u793A\u6EDA\u52A8\u6548\u679C...

\u7B2C\u4E00\u6BB5\uFF1ACity Pop \u662F\u65E5\u672C\u5728 1970 \u5E74\u4EE3\u672B\u5230 1980 \u5E74\u4EE3\u6D41\u884C\u7684\u97F3\u4E50\u7C7B\u578B\u3002
\u7B2C\u4E8C\u6BB5\uFF1A\u5B83\u878D\u5408\u4E86\u897F\u65B9\u7684\u653E\u514B\u3001\u7235\u58EB\u3001\u8FEA\u65AF\u79D1\u7B49\u5143\u7D20\u3002
\u7B2C\u4E09\u6BB5\uFF1A\u4EE3\u8868\u827A\u672F\u5BB6\u5305\u62EC\u5C71\u4E0B\u8FBE\u90CE\u3001\u7AF9\u5185\u739B\u8389\u4E9A\u7B49\u3002
\u7B2C\u56DB\u6BB5\uFF1A\u8FD1\u5E74\u6765\u901A\u8FC7\u4E92\u8054\u7F51\u91CD\u65B0\u6D41\u884C\u8D77\u6765\u3002
\u7B2C\u4E94\u6BB5\uFF1A\u5176\u7279\u70B9\u662F\u4F7F\u7528\u5408\u6210\u5668\u3001\u6D41\u7545\u7684\u4EBA\u58F0\u548C\u534E\u4E3D\u7684\u5236\u4F5C\u3002
\u7B2C\u516D\u6BB5\uFF1A\u4E0E\u65E5\u672C\u7ECF\u6D4E\u6CE1\u6CAB\u65F6\u671F\u7684\u4E50\u89C2\u6C1B\u56F4\u5BC6\u5207\u76F8\u5173\u3002
\u7B2C\u4E03\u6BB5\uFF1A\u5F71\u54CD\u4E86\u540E\u6765\u7684 Future Funk \u548C Vaporwave \u7B49\u97F3\u4E50\u6D41\u6D3E\u3002\`}
    />

    {/* \u793A\u4F8B 4: \u751F\u6210\u7ED3\u675F\u540E\u81EA\u52A8\u5173\u95ED */}
    <DeepThinking
      title="\u81EA\u52A8\u5173\u95ED\u793A\u4F8B"
      autoCloseOnFinish
      loading={false}
      content="\u8FD9\u4E2A\u793A\u4F8B\u6F14\u793A\u4E86 autoCloseOnFinish \u529F\u80FD\uFF0C\u751F\u6210\u7ED3\u675F\u540E\u9ED8\u8BA4\u662F\u5173\u95ED\u72B6\u6001\uFF0C\u9700\u8981\u624B\u52A8\u70B9\u51FB\u624D\u80FD\u5C55\u5F00\u67E5\u770B\u5185\u5BB9\u3002"
    />
  </Flex>
</>
};

export default App;
`},81229:function(e,n){n.Z=`import { Bubble, DefaultCards } from "@agentscope-ai/chat";
import { SparkCopyLine, SparkThumbsUpLine, SparkThumbsDownLine, SparkReplaceLine } from '@agentscope-ai/icons';

export default function () {
  return <Bubble cards={[
    {
      code: 'Text',
      data: {
        content: \`City Pop, short for City Pop, is a genre of music that originated in Japan during the late 1970s and early 1980s. It blends elements of jazz, folk, easy listening, and AOR (Adult Oriented Rock) with a distinctly urban feel. The term "City Pop" often evokes images of the sophisticated, stylish, and sometimes nostalgic lifestyle of Tokyo and other major Japanese cities during this period.
City Pop is characterized by its smooth melodies, mellow rhythms, and often dreamy or introspective lyrics. Common themes include city life, summer vibes, nature, and romantic encounters. The music is frequently associated with a particular aesthetic that reflects the fashion, design, and cultural trends of urban Japan in the 1980s.
Some notable City Pop artists include Mariya Takeuchi, known for her iconic song " Plastic Love," and Joe Hisaishi, a composer famous for his work on Studio Ghibli films, though he is not strictly considered a City Pop artist.
Today, City Pop has experienced a resurgence in popularity, particularly among younger generations who appreciate its unique sound and the nostalgic value it holds.

\\\`\\\`\\\`javascript
function bubbleSort(arr) {
  const n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}
\\\`\\\`\\\`

City Pop, short for City Pop, is a genre of music that originated in Japan during the late 1970s and early 1980s. It blends elements of jazz, folk, easy listening, and AOR (Adult Oriented Rock) with a distinctly urban feel. The term "City Pop" often evokes images of the sophisticated, stylish, and sometimes nostalgic lifestyle of Tokyo and other major Japanese cities during this period.\`
      },
    }, {
      code: 'Footer',
      data: {
        left: <DefaultCards.FooterActions data={[
          {
            icon: <SparkCopyLine />, onClick: () => {
            }
          },
          {
            icon: <SparkThumbsUpLine />, onClick: () => {
            }
          },
          {
            icon: <SparkThumbsDownLine />, onClick: () => {
            }
          },

          {
            icon: <SparkReplaceLine />, onClick: () => {
            }
          },
        ]} />,
      },
    }

  ]}



    role="assistant"></Bubble>
}`},21047:function(e,n){n.Z=`import { Accordion, Bubble, DefaultCards } from "@agentscope-ai/chat";
import { Flex } from "antd";
import { SparkCopyLine, SparkThumbsUpLine, SparkThumbsDownLine, SparkReplaceLine } from '@agentscope-ai/icons';

function footerCard() {
  return {
    code: 'Footer',
    data: {
      left: <DefaultCards.FooterActions data={[
        {
          icon: <SparkCopyLine />, onClick: () => {
          }
        },
        {
          icon: <SparkThumbsUpLine />, onClick: () => {
          }
        },
        {
          icon: <SparkThumbsDownLine />, onClick: () => {
          }
        },
        {
          icon: <SparkReplaceLine />, onClick: () => {
          }
        },
      ]} />,
    },
  }
}

export default function () {
  return <Flex vertical gap={32}>
    <Bubble
      cards={[
        {
          code: 'Text',
          data: {
            content: \`City Pop, short for City Pop, is a genre of music that originated in Japan during the late 1970s and early 1980s. It blends elements of jazz, folk, easy listening, and AOR (Adult Oriented Rock) with a distinctly urban feel. The term "City Pop" often evokes images of the sophisticated, stylish, and sometimes nostalgic lifestyle of Tokyo and other major Japanese cities during this period.
City Pop is characterized by its smooth melodies, mellow rhythms, and often dreamy or introspective lyrics. Common themes include city life, summer vibes, nature, and romantic encounters. The music is frequently associated with a particular aesthetic that reflects the fashion, design, and cultural trends of urban Japan in the 1980s.
Some notable City Pop artists include Mariya Takeuchi, known for her iconic song " Plastic Love," and Joe Hisaishi, a composer famous for his work on Studio Ghibli films, though he is not strictly considered a City Pop artist.
Today, City Pop has experienced a resurgence in popularity, particularly among younger generations who appreciate its unique sound and the nostalgic value it holds.\`
          },
        },
        {
          code: 'Interrupted',
          data: {
            title: 'Answers have stopped',
            type: 'interrupted',
          },
        },
        footerCard(),
      ]}
      role="assistant" />

    <Bubble
      cards={[
        {
          code: 'Text',
          data: {
            content: \`City Pop, short for City Pop, is a genre of music that originated in Japan during the late 1970s and early 1980s. It blends elements of jazz, folk, easy listening, and AOR (Adult Oriented Rock) with a distinctly urban feel. The term "City Pop" often evokes images of the sophisticated, stylish, and sometimes nostalgic lifestyle of Tokyo and other major Japanese cities during this period.
City Pop is characterized by its smooth melodies, mellow rhythms, and often dreamy or introspective lyrics. Common themes include city life, summer vibes, nature, and romantic encounters. The music is frequently associated with a particular aesthetic that reflects the fashion, design, and cultural trends of urban Japan in the 1980s.
Some notable City Pop artists include Mariya Takeuchi, known for her iconic song " Plastic Love," and Joe Hisaishi, a composer famous for his work on Studio Ghibli films, though he is not strictly considered a City Pop artist.
Today, City Pop has experienced a resurgence in popularity, particularly among younger generations who appreciate its unique sound and the nostalgic value it holds.\`
          },
        },
        {
          code: 'Interrupted',
          data: {
            type: 'error',
            title: 'Network Error',
          },
        },
        footerCard(),
      ]}
      role="assistant" />

    <Bubble
      cards={[
        {
          code: 'Text',
          data: {
            content: \`City Pop, short for City Pop, is a genre of music that originated in Japan during the late 1970s and early 1980s. It blends elements of jazz, folk, easy listening, and AOR (Adult Oriented Rock) with a distinctly urban feel. The term "City Pop" often evokes images of the sophisticated, stylish, and sometimes nostalgic lifestyle of Tokyo and other major Japanese cities during this period.
City Pop is characterized by its smooth melodies, mellow rhythms, and often dreamy or introspective lyrics. Common themes include city life, summer vibes, nature, and romantic encounters. The music is frequently associated with a particular aesthetic that reflects the fashion, design, and cultural trends of urban Japan in the 1980s.
Some notable City Pop artists include Mariya Takeuchi, known for her iconic song " Plastic Love," and Joe Hisaishi, a composer famous for his work on Studio Ghibli films, though he is not strictly considered a City Pop artist.
Today, City Pop has experienced a resurgence in popularity, particularly among younger generations who appreciate its unique sound and the nostalgic value it holds.\`
          },
        },
        {
          code: 'Interrupted',
          data: {
            type: 'error',
            title: 'Network Error',
            desc: 'This is a description this is a description  this is a description this is a description',
          },
        },
        footerCard(),
      ]}
      role="assistant" />


  </Flex>
}`},62923:function(e,n){n.Z=`import { Bubble, DefaultCards } from "@agentscope-ai/chat";
import { SparkCopyLine, SparkThumbsUpLine, SparkThumbsDownLine, SparkReplaceLine } from '@agentscope-ai/icons';


export default function () {
  return <Bubble cards={[
    {
      code: 'Text',
      data: {
        content: \`City Pop, short for City Pop, is a genre of music that originated in Japan during the late 1970s and early 1980s. It blends elements of jazz, folk, easy listening, and AOR (Adult Oriented Rock) with a distinctly urban feel. The term "City Pop" often evokes images of the sophisticated, stylish, and sometimes nostalgic lifestyle of Tokyo and other major Japanese cities during this period.
City Pop is characterized by its smooth melodies, mellow rhythms, and often dreamy or introspective lyrics. Common themes include city life, summer vibes, nature, and romantic encounters. The music is frequently associated with a particular aesthetic that reflects the fashion, design, and cultural trends of urban Japan in the 1980s.
Some notable City Pop artists include Mariya Takeuchi, known for her iconic song " Plastic Love," and Joe Hisaishi, a composer famous for his work on Studio Ghibli films, though he is not strictly considered a City Pop artist.
Today, City Pop has experienced a resurgence in popularity, particularly among younger generations who appreciate its unique sound and the nostalgic value it holds.

![](https://gw.alicdn.com/imgextra/i4/O1CN01sjZ4Uu1erFDOC6IkA_!!6000000003924-2-tps-396-224.png)\`
      },
    }, {
      code: 'Footer',
      data: {
        left: <DefaultCards.FooterActions data={[
          {
            icon: <SparkCopyLine />, onClick: () => {
            }
          },
          {
            icon: <SparkThumbsUpLine />, onClick: () => {
            }
          },
          {
            icon: <SparkThumbsDownLine />, onClick: () => {
            }
          },
          {
            icon: <SparkReplaceLine />, onClick: () => {
            }
          },
        ]} />,
      },
    }

  ]}



    role="assistant"></Bubble>
}`},48601:function(e,n){n.Z=`import { CodeBlock } from "@agentscope-ai/design";
import { Accordion, Bubble, DefaultCards } from "@agentscope-ai/chat";
import { SparkCopyLine, SparkThumbsUpLine, SparkThumbsDownLine, SparkReplaceLine, SparkCheckCircleLine } from '@agentscope-ai/icons';

import { Flex } from "antd";

const input = JSON.stringify({
  'query': 'What is city pop?',
  'top_k': 1,
  'threshold': 0.5,
  'return_metadata': true,
});

const output = JSON.stringify({
  'results': [
    {
      'score': 0.9999999999999998,
      'metadata': {
        'source': 'https://en.wikipedia.org/wiki/City_population',
        'title': 'City population',
      },
      'content': 'city pop, short for city pop, is a genre of music that originated in japan during the late 1970s and early 1980s. it blends elements of jazz, folk, easy listening, and aor (adult oriented rock) with a distinctly urban feel. the term "city pop" often evokes images of the sophisticated, stylish, and sometimes nostalgic lifestyle of tokyo and other major japanese cities during this period.'
    }
  ]

})
function MutiProcess(props) {
  return <Accordion
    title="Completed"
    status="finished"
    defaultOpen
    steps={[{
      icon: <SparkCheckCircleLine />,
      iconLine: true,
      title: 'Knowledge base search',
      rightChildren: <span>52.21ms</span>,
      children: <Accordion.BodyContent headerLeft="What is city pop?" headerRight="Similarity: 78%">
        <div style={{ padding: 12 }}>
          city pop, short for city pop, is a genre of music that originated in japan during the late 1970s and early 1980s. it blends elements of jazz, folk, easy listening, and aor (adult oriented rock) with a distinctly urban feel. the term "city pop" often evokes images of the sophisticated, stylish, and sometimes nostalgic lifestyle of tokyo and other major japanese cities during this period.
          city pop is characterized by its smooth melodies, mellow rhythms, and often dreamy or introspective lyrics. common themes include city life, summer vibes, nature, and romantic encounters. the music is frequently associated with a particular aesthetic that reflects the fashion, design, and cultural trends of urban japan in the 1980s.
          some notable city pop artists include mariya takeuchi, known for her iconic song " plastic love," and joe hisaishi, a composer famous for his work on studio ghibli films, though he is not strictly considered a city pop artist.
        </div>
      </Accordion.BodyContent>,
    }, {
      defaultOpen: true,
      icon: <SparkCheckCircleLine />,
      iconLine: true,
      title: 'Long Memory',
      children: <Flex gap={8} vertical>
        <Accordion.BodyContent headerLeft="input">
          <CodeBlock language="json" value={input} />
        </Accordion.BodyContent>
        <Accordion.BodyContent headerLeft="output">
          <CodeBlock language="json" value={output} />
        </Accordion.BodyContent>
      </Flex>,
    }
    ]}
  >
  </Accordion>
}

export default function () {
  return <Bubble cards={[
    {
      code: 'CustomCard',
      data: {},
      component: MutiProcess,
    },
    {
      code: 'Text',
      data: {
        content: \`City Pop, short for City Pop, is a genre of music that originated in Japan during the late 1970s and early 1980s. It blends elements of jazz, folk, easy listening, and AOR (Adult Oriented Rock) with a distinctly urban feel. The term "City Pop" often evokes images of the sophisticated, stylish, and sometimes nostalgic lifestyle of Tokyo and other major Japanese cities during this period.
City Pop is characterized by its smooth melodies, mellow rhythms, and often dreamy or introspective lyrics. Common themes include city life, summer vibes, nature, and romantic encounters. The music is frequently associated with a particular aesthetic that reflects the fashion, design, and cultural trends of urban Japan in the 1980s.
Some notable City Pop artists include Mariya Takeuchi, known for her iconic song " Plastic Love," and Joe Hisaishi, a composer famous for his work on Studio Ghibli films, though he is not strictly considered a City Pop artist.
Today, City Pop has experienced a resurgence in popularity, particularly among younger generations who appreciate its unique sound and the nostalgic value it holds.\`
      },
    }, {
      code: 'Footer',
      data: {
        left: <DefaultCards.FooterActions data={[
          {
            icon: <SparkCopyLine />, onClick: () => {
            }
          },
          {
            icon: <SparkThumbsUpLine />, onClick: () => {
            }
          },
          {
            icon: <SparkThumbsDownLine />, onClick: () => {
            }
          },
          {
            icon: <SparkReplaceLine />, onClick: () => {
            }
          },
        ]} />,
      },
    }
  ]}
    role="assistant"></Bubble>
}`},35271:function(e,n){n.Z=`import { SparkDeepSearchLine } from "@agentscope-ai/icons";
import { Accordion, Bubble, DefaultCards } from "@agentscope-ai/chat";
import { SparkCopyLine, SparkThumbsUpLine, SparkThumbsDownLine, SparkReplaceLine, SparkCheckCircleLine } from '@agentscope-ai/icons';

function SearchProcess(props) {
  return <Accordion
    defaultOpen
    status="finished"
    icon={<SparkDeepSearchLine />}
    title={"Searching from 10 pages"}
    steps={[{
      icon: <SparkCheckCircleLine />,
      title: 'File analysis',
    }, {
      icon: <SparkCheckCircleLine />,
      title: 'Url analysis',
    }]}
  >
  </Accordion>
}

export default function () {
  return <Bubble cards={[
    {
      code: 'CustomCard',
      data: {},
      component: SearchProcess,
    },
    {
      code: 'Text',
      data: {
        citations: [
          {
            url: 'https://www.zhihu.com/question/48784242',
            content: 'https://www.zhihu.com/question/48784242',
            title: 'What is city pop?',
          }
        ],
        content: \`City Pop[1], short for City Pop, is a genre of music that originated in Japan during the late 1970s and early 1980s. It blends elements of jazz, folk, easy listening, and AOR (Adult Oriented Rock) with a distinctly urban feel. The term "City Pop" often evokes images of the sophisticated, stylish, and sometimes nostalgic lifestyle of Tokyo and other major Japanese cities during this period.
City Pop is characterized by its smooth melodies, mellow rhythms, and often dreamy or introspective lyrics. Common themes include city life, summer vibes, nature, and romantic encounters. The music is frequently associated with a particular aesthetic that reflects the fashion, design, and cultural trends of urban Japan in the 1980s.
Some notable City Pop artists include Mariya Takeuchi, known for her iconic song " Plastic Love," and Joe Hisaishi, a composer famous for his work on Studio Ghibli films, though he is not strictly considered a City Pop artist.
Today, City Pop has experienced a resurgence in popularity, particularly among younger generations who appreciate its unique sound and the nostalgic value it holds.[1]\`
      },
    }, {
      code: 'Footer',
      data: {
        left: <DefaultCards.FooterActions data={[
          {
            icon: <SparkCopyLine />, onClick: () => {
            }
          },
          {
            icon: <SparkThumbsUpLine />, onClick: () => {
            }
          },
          {
            icon: <SparkThumbsDownLine />, onClick: () => {
            }
          },
          {
            icon: <SparkReplaceLine />, onClick: () => {
            }
          },
        ]} />,
      },
    }
  ]}
    role="assistant"></Bubble>
}`},9116:function(e,n){n.Z=`import { Bubble, DefaultCards } from "@agentscope-ai/chat";
import { SparkCopyLine, SparkThumbsUpLine, SparkThumbsDownLine, SparkReplaceLine } from '@agentscope-ai/icons';


export default function () {
  return <Bubble cards={[
    {
      code: 'DeepThink',
      data: {
        content: \`Okay, the user is asking about "citypop." Let me start by recalling what I know about that term. I remember that City Pop is a genre of music, but I need to make sure I'm accurate.

First, when did City Pop originate? I think it was in Japan during the late 1970s and 1980s. That makes sense because Japan's economy was booming then, leading to a vibrant urban culture. The genre probably blends Western styles like funk, jazz, and disco with Japanese pop elements. Artists like Tatsuro Yamashita and Mariya Takeuchi come to mind. Oh, and there's that song "Plastic Love" by Mariya Takeuchi that went viral online recently, which might have sparked renewed interest.

I should also mention the themes of City Pop songs\u2014they often reflect city life, romance, and leisure, fitting the upbeat and cosmopolitan vibe of the time. The visual style associated with it includes retro anime and vibrant cityscapes, which adds to its aesthetic appeal. It's interesting how the internet, especially platforms like YouTube and Spotify, helped revive this genre internationally. Maybe I should note that connection between modern digital culture and the resurgence of City Pop.

Wait, are there any subgenres or key characteristics I should highlight? The use of synthesizers, smooth vocals, and lush production are typical. Also, City Pop was influenced by yacht rock and soft rock from the West. It's important to link it to Japan's economic bubble era, as that context explains the music's optimistic and luxurious feel.

I need to ensure I don't confuse it with other Japanese genres like J-pop or Enka. City Pop is distinct in its fusion with Western sounds. Including notable albums, like Tatsuro Yamashita's "For You" or Anri's "Timely!!", could be helpful. Oh, and the connection to future funk and vaporwave genres that sample City Pop tracks is a good point for its modern influence.\`,
      },
    },
    {
      code: 'Text',
      data: {
        content: \`City Pop, short for City Pop, is a genre of music that originated in Japan during the late 1970s and early 1980s. It blends elements of jazz, folk, easy listening, and AOR (Adult Oriented Rock) with a distinctly urban feel. The term "City Pop" often evokes images of the sophisticated, stylish, and sometimes nostalgic lifestyle of Tokyo and other major Japanese cities during this period.
City Pop is characterized by its smooth melodies, mellow rhythms, and often dreamy or introspective lyrics. Common themes include city life, summer vibes, nature, and romantic encounters. The music is frequently associated with a particular aesthetic that reflects the fashion, design, and cultural trends of urban Japan in the 1980s.
Some notable City Pop artists include Mariya Takeuchi, known for her iconic song " Plastic Love," and Joe Hisaishi, a composer famous for his work on Studio Ghibli films, though he is not strictly considered a City Pop artist.
Today, City Pop has experienced a resurgence in popularity, particularly among younger generations who appreciate its unique sound and the nostalgic value it holds.\`
      },
    }, {
      code: 'Footer',
      data: {
        left: <DefaultCards.FooterActions data={[
          {
            icon: <SparkCopyLine />, onClick: () => {
            }
          },
          {
            icon: <SparkThumbsUpLine />, onClick: () => {
            }
          },
          {
            icon: <SparkThumbsDownLine />, onClick: () => {
            }
          },
          {
            icon: <SparkReplaceLine />, onClick: () => {
            }
          },
        ]} />,
      },
    }
  ]}
    role="assistant"></Bubble>
}`},41821:function(e,n){n.Z=`import { Bubble, DefaultCards } from '@agentscope-ai/chat';
import { Flex } from 'antd';
import { SparkCopyLine, SparkThumbsUpLine, SparkThumbsDownLine, SparkReplaceLine } from '@agentscope-ai/icons';


export default function () {
  return <Flex vertical gap={24}>
    <Bubble cards={[
      {
        code: 'Text',
        data: {
          content: 'what is citypop'
        }
      },
    ]} role="user"></Bubble>
    <Bubble cards={[
      {
        code: 'Text',
        data: {
          content: \`City Pop, short for City Pop, is a genre of music that originated in Japan during the late 1970s and early 1980s. It blends elements of jazz, folk, easy listening, and AOR (Adult Oriented Rock) with a distinctly urban feel. The term "City Pop" often evokes images of the sophisticated, stylish, and sometimes nostalgic lifestyle of Tokyo and other major Japanese cities during this period.
City Pop is characterized by its smooth melodies, mellow rhythms, and often dreamy or introspective lyrics. Common themes include city life, summer vibes, nature, and romantic encounters. The music is frequently associated with a particular aesthetic that reflects the fashion, design, and cultural trends of urban Japan in the 1980s.
Some notable City Pop artists include Mariya Takeuchi, known for her iconic song " Plastic Love," and Joe Hisaishi, a composer famous for his work on Studio Ghibli films, though he is not strictly considered a City Pop artist.
Today, City Pop has experienced a resurgence in popularity, particularly among younger generations who appreciate its unique sound and the nostalgic value it holds.\`
        },
      }, {
        code: 'Footer',
        data: {
          left: <DefaultCards.FooterActions data={[
            {
              icon: <SparkCopyLine />, onClick: () => {
              }
            },
            {
              icon: <SparkThumbsUpLine />, onClick: () => {
              }
            },
            {
              icon: <SparkThumbsDownLine />, onClick: () => {
              }
            },

            {
              icon: <SparkReplaceLine />, onClick: () => {
              }
            },
          ]} />,
        },
      }

    ]}
      role="assistant"></Bubble>
    {/* \u7A7A\u6D88\u606F\u7684\u65F6\u5019\u4F1A\u6709 loading */}
    {/* <Bubble msgStatus="generating" role="assistant"></Bubble> */}
  </Flex >
}`},43151:function(e,n){n.Z=`import { Bubble, DefaultCards } from '@agentscope-ai/chat';

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
}`},61469:function(e,n){n.Z=`import { Bubble, DefaultCards } from '@agentscope-ai/chat';

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
}`},17652:function(e,n){n.Z=`import { Button, IconButton } from '@agentscope-ai/design';
import { createStyles } from 'antd-style';
import { ReactNode, useState } from 'react';
import { HistoryPanel } from '@agentscope-ai/chat';
import { SparkDeleteLine, SparkEditLine, SparkOperateLeftLine, SparkOperateRightLine, SparkPlusLine } from '@agentscope-ai/icons';

const useStyles = createStyles(({ token }) => {
  return {
    layout: {
      position: 'relative',
      display: 'flex',
      height: 416,
      border: \`1px solid \${token.colorBorderSecondary}\`,
      borderRadius: 8,
      overflow: 'hidden',
    },
    left: {
      display: 'flex',
      flexDirection: 'column',
      width: 280,
      background: token.colorBgLayout,
      transition: 'margin-left 0.3s ease-in-out',
      zIndex: 1,
    },
    open: {
      position: 'absolute',
      left: 20,
      top: 16,
    },
    close: {
      marginLeft: -280,
    },
    header: {
      margin: '16px 20px 8px 20px',
      height: 32,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: 8,
      fontSize: 16,
    },
    btn: {
      margin: '0 20px 16px 20px',

    },
    list: {
      height: 0,
      flex: 1,
      overflowY: 'scroll',
      padding: '0 16px 16px 20px',

      '&::-webkit-scrollbar': {
        width: 4,
      },

      '&::-webkit-scrollbar-thumb': {
        backgroundColor: 'transparent !important',

        '&:hover': {
          backgroundColor: \`\${token.colorFill} !important\`,
        }
      },

    }
  };
});

const items = Array.from({ length: 10 }).map((_, index) => ({
  key: \`item\${index + 1}\`,
  label: \`What is Spark Design?\`,
  disabled: index === 3,
}));

function Layout(props: { children: ReactNode }) {
  const { styles, cx, theme } = useStyles();

  return <div className={styles.layout}>{props.children}</div>
}

export default function () {
  const [open, setOpen] = useState(true);
  const { styles, cx, theme } = useStyles();


  return <Layout>
    <div className={styles.open}>
      <IconButton bordered={false} icon={<SparkOperateRightLine />} onClick={() => setOpen(!open)} />

    </div>
    <div className={cx(styles.left, open ? '' : styles.close)}>
      <div className={styles.header}>
        <strong>SPARK CHAT</strong>
        <IconButton bordered={false} icon={<SparkOperateLeftLine />} onClick={() => setOpen(!open)} />
      </div>
      <div className={styles.btn}>
        <Button block type="primary" icon={<SparkPlusLine />}>
          New Chat
        </Button>
      </div>
      <div className={styles.list}>
        <HistoryPanel
          items={items}
          defaultActiveKey="item1" />
      </div>
    </div>
  </Layout>
}`},6612:function(e,n){n.Z=`import { Button } from '@agentscope-ai/design';
import { createStyles } from 'antd-style';
import { ReactNode, useState } from 'react';
import { HistoryPanel } from '@agentscope-ai/chat';
import { SparkDeleteLine, SparkEditLine, SparkPlusLine } from '@agentscope-ai/icons';


const useStyles = createStyles(({ token }) => {
  return {
    layout: {
      display: 'flex',
      height: 416,
      border: \`1px solid \${token.colorBorderSecondary}\`,
      borderRadius: 8,
      overflow: 'hidden',
    },
    left: {
      display: 'flex',
      flexDirection: 'column',
      width: 280,
      background: token.colorBgLayout,
    },
    header: {
      margin: '16px 20px 8px 20px',
      height: 32,
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      fontSize: 16,
    },
    btn: {
      margin: '0 20px 16px 20px',

    },
    list: {
      height: 0,
      flex: 1,
      overflowY: 'scroll',
      padding: '0 16px 16px 20px',

      '&::-webkit-scrollbar': {
        width: 4,
      },

      '&::-webkit-scrollbar-thumb': {
        backgroundColor: 'transparent !important',

        '&:hover': {
          backgroundColor: \`\${token.colorFill} !important\`,
        }
      },

    }
  };
});

const items = Array.from({ length: 10 }).map((_, index) => ({
  key: \`item\${index + 1}\`,
  label: \`What is Spark Design?\`,
  desc: new Date(Date.now() - index * 1000).toLocaleString(),
  disabled: index === 3,
  timeline: true,
}));

function Layout(props: { children: ReactNode }) {
  const { styles, cx, theme } = useStyles();

  return <div className={styles.layout}>{props.children}</div>
}

export default function () {
  const [open, setOpen] = useState(false);
  const { styles, cx, theme } = useStyles();

  return <Layout>
    <div className={styles.left}>
      <div className={styles.header}>
        <strong>SPARK CHAT</strong>
      </div>
      <div className={styles.btn}>
        <Button block type="primary" icon={<SparkPlusLine />}>
          New Chat
        </Button>
      </div>
      <div className={styles.list}>
        <HistoryPanel
          menu={[
            {
              label: '\u7F16\u8F91',
              key: 'edit',
              icon: <SparkEditLine />,
              onEdit: (label: string) => {
                if (label) return Promise.resolve();
                return Promise.reject();
              },
            },
            {
              label: '\u5220\u9664',
              key: 'delete',
              icon: <SparkDeleteLine />,
              danger: true,
              onClick: (session) => {
                console.log(session);
              },
            },
          ]}
          items={items} defaultActiveKey="item1" />
      </div>
    </div>
  </Layout>
}`},93777:function(e,n){n.Z=`import { Button } from '@agentscope-ai/design';
import { createStyles } from 'antd-style';
import { ReactNode, useState } from 'react';
import { HistoryPanel } from '@agentscope-ai/chat';
import { SparkDeleteLine, SparkEditLine, SparkPlusLine } from '@agentscope-ai/icons';


const useStyles = createStyles(({ token }) => {
  return {
    layout: {
      display: 'flex',
      height: 416,
      border: \`1px solid \${token.colorBorderSecondary}\`,
      borderRadius: 8,
      overflow: 'hidden',
    },
    left: {
      display: 'flex',
      flexDirection: 'column',
      width: 280,
      background: token.colorBgLayout,
    },
    header: {
      margin: '16px 20px 8px 20px',
      height: 32,
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      fontSize: 16,
    },
    btn: {
      margin: '0 20px 16px 20px',

    },
    list: {
      height: 0,
      flex: 1,
      overflowY: 'scroll',
      padding: '0 16px 16px 20px',

      '&::-webkit-scrollbar': {
        width: 4,
      },

      '&::-webkit-scrollbar-thumb': {
        backgroundColor: 'transparent !important',

        '&:hover': {
          backgroundColor: \`\${token.colorFill} !important\`,
        }
      },

    }
  };
});

const items = Array.from({ length: 10 }).map((_, index) => ({
  key: \`item\${index + 1}\`,
  label: \`What is Spark Design?\`,
  desc: new Date(Date.now() - index * 1000).toLocaleString(),
  disabled: index === 3,
}));

function Layout(props: { children: ReactNode }) {
  const { styles, cx, theme } = useStyles();

  return <div className={styles.layout}>{props.children}</div>
}

export default function () {
  const [open, setOpen] = useState(false);
  const { styles, cx, theme } = useStyles();

  return <Layout>
    <div className={styles.left}>
      <div className={styles.header}>
        <strong>SPARK CHAT</strong>
      </div>
      <div className={styles.btn}>
        <Button block type="primary" icon={<SparkPlusLine />}>
          New Chat
        </Button>
      </div>
      <div className={styles.list}>
        <HistoryPanel
          menu={[
            {
              label: '\u7F16\u8F91',
              key: 'edit',
              icon: <SparkEditLine />,
              onEdit: (label: string) => {
                if (label) return Promise.resolve();
                return Promise.reject();
              },
            },
            {
              label: '\u5220\u9664',
              key: 'delete',
              icon: <SparkDeleteLine />,
              danger: true,
              onClick: (session) => {
                console.log(session);
              },
            },
          ]}
          items={items} defaultActiveKey="item1" />
      </div>
    </div>
  </Layout>
}`},51984:function(e,n){n.Z=`import { DeviceAction, IDeviceActionProps } from "@agentscope-ai/chat";
import { Flex } from "antd";

const actions = [
  {
    time: "2:00:00",
    action: "Click",
    image: "https://gw.alicdn.com/imgextra/i3/O1CN01jnIWvS1OQC0DWx9Tu_!!6000000001699-0-tps-1200-687.jpg"
  },
  {
    time: "2:00:05",
    action: "Swipe",
    image: "https://gw.alicdn.com/imgextra/i3/O1CN01jnIWvS1OQC0DWx9Tu_!!6000000001699-0-tps-1200-687.jpg"
  },
  {
    time: "2:00:10",
    action: "Type",
    image: "https://gw.alicdn.com/imgextra/i3/O1CN01jnIWvS1OQC0DWx9Tu_!!6000000001699-0-tps-1200-687.jpg"
  },
  {
    time: "2:00:15",
    action: "Back",
    image: "https://gw.alicdn.com/imgextra/i3/O1CN01jnIWvS1OQC0DWx9Tu_!!6000000001699-0-tps-1200-687.jpg"
  },
  {
    time: "2:00:20",
    action: "Home",
    image: "https://gw.alicdn.com/imgextra/i3/O1CN01jnIWvS1OQC0DWx9Tu_!!6000000001699-0-tps-1200-687.jpg"
  },
  {
    time: "2:00:25",
    action: "Done",
    image: "https://gw.alicdn.com/imgextra/i3/O1CN01jnIWvS1OQC0DWx9Tu_!!6000000001699-0-tps-1200-687.jpg"
  },
  {
    time: "2:00:30",
    action: "Wait",
    image: "https://gw.alicdn.com/imgextra/i3/O1CN01jnIWvS1OQC0DWx9Tu_!!6000000001699-0-tps-1200-687.jpg"
  },
  {
    time: "2:00:35",
    action: "call_user",
    image: "https://gw.alicdn.com/imgextra/i3/O1CN01jnIWvS1OQC0DWx9Tu_!!6000000001699-0-tps-1200-687.jpg"
  },
  {
    time: "2:00:40",
    action: "click",
    image: "https://gw.alicdn.com/imgextra/i3/O1CN01jnIWvS1OQC0DWx9Tu_!!6000000001699-0-tps-1200-687.jpg"
  },
  {
    time: "2:00:45",
    action: "right click",
    image: "https://gw.alicdn.com/imgextra/i3/O1CN01jnIWvS1OQC0DWx9Tu_!!6000000001699-0-tps-1200-687.jpg"
  },
  {
    time: "2:00:50",
    action: "open app",
    image: "https://gw.alicdn.com/imgextra/i3/O1CN01jnIWvS1OQC0DWx9Tu_!!6000000001699-0-tps-1200-687.jpg"
  },
  {
    time: "2:00:55",
    action: "computer_double_click",
    image: "https://gw.alicdn.com/imgextra/i3/O1CN01jnIWvS1OQC0DWx9Tu_!!6000000001699-0-tps-1200-687.jpg"
  },
  {
    time: "2:01:00",
    action: "hotkey",
    image: "https://gw.alicdn.com/imgextra/i3/O1CN01jnIWvS1OQC0DWx9Tu_!!6000000001699-0-tps-1200-687.jpg"
  },
  {
    time: "2:01:05",
    action: "presskey",
    image: "https://gw.alicdn.com/imgextra/i3/O1CN01jnIWvS1OQC0DWx9Tu_!!6000000001699-0-tps-1200-687.jpg"
  },
  {
    time: "2:01:10",
    action: "scroll",
    image: "https://gw.alicdn.com/imgextra/i3/O1CN01jnIWvS1OQC0DWx9Tu_!!6000000001699-0-tps-1200-687.jpg"
  },
  {
    time: "2:01:15",
    action: "drag",
    image: "https://gw.alicdn.com/imgextra/i3/O1CN01jnIWvS1OQC0DWx9Tu_!!6000000001699-0-tps-1200-687.jpg"
  },
  {
    time: "2:01:20",
    action: "type_with_clear_enter_pos",
    image: "https://gw.alicdn.com/imgextra/i3/O1CN01jnIWvS1OQC0DWx9Tu_!!6000000001699-0-tps-1200-687.jpg"
  },
  {
    time: "2:01:25",
    action: "triple_click",
    image: "https://gw.alicdn.com/imgextra/i3/O1CN01jnIWvS1OQC0DWx9Tu_!!6000000001699-0-tps-1200-687.jpg"
  },
  {
    time: "2:01:30",
    action: "drag_end",
    image: "https://gw.alicdn.com/imgextra/i3/O1CN01jnIWvS1OQC0DWx9Tu_!!6000000001699-0-tps-1200-687.jpg"
  },
  {
    time: "2:01:35",
    action: "type",
    image: "https://gw.alicdn.com/imgextra/i3/O1CN01jnIWvS1OQC0DWx9Tu_!!6000000001699-0-tps-1200-687.jpg"
  },
  {
    time: "2:01:40",
    action: "hscroll",
    image: "https://gw.alicdn.com/imgextra/i3/O1CN01jnIWvS1OQC0DWx9Tu_!!6000000001699-0-tps-1200-687.jpg"
  },
  {
    time: "2:01:45",
    action: "done",
    image: "https://gw.alicdn.com/imgextra/i3/O1CN01jnIWvS1OQC0DWx9Tu_!!6000000001699-0-tps-1200-687.jpg"
  },
  {
    time: "2:01:50",
    action: "wait",
    image: "https://gw.alicdn.com/imgextra/i3/O1CN01jnIWvS1OQC0DWx9Tu_!!6000000001699-0-tps-1200-687.jpg"
  },

]

export default function () {
  return <Flex gap={16} vertical>
    {
      actions.map((item, index) => {
        return <DeviceAction key={index} {...item} description={\`description for \${item.action}...\`} action={item.action as IDeviceActionProps['action']} />
      })
    }

  </Flex>
}`},33141:function(e,n){n.Z=`import React from 'react';
import { Disclaimer } from '@agentscope-ai/chat';

export default () => <Disclaimer />;`},87092:function(e,n){n.Z=`import React from 'react';
import { Disclaimer } from '@agentscope-ai/chat';

export default () => <Disclaimer afterLink={{  text: 'See More', href: 'https://www.aliyun.com'}}/>;`},39883:function(e,n){n.Z=`import { ImageGenerator } from '@agentscope-ai/chat';
import { useTimeout } from 'ahooks';
import { Flex } from 'antd';
import { useState } from 'react';

export default function () {
  const [src, setSrc] = useState('');

  useTimeout(() => {
    setSrc('https://img.alicdn.com/imgextra/i1/O1CN01lS5S0a1yl6FKoBZHl_!!6000000006618-0-tps-1280-1280.jpg');
  }, 20 * 1000)

  return <Flex vertical gap="middle">
    <ImageGenerator
      src={src}
      skeletonText="Painting..."
    />

    <ImageGenerator
      src="https://img.alicdn.com/imgextra/i1/O1CN01lS5S0a1yl6FKoBZHl_!!6000000006618-0-tps-1280-1280.jpg"
    />
  </Flex>
}`},85629:function(e,n){n.Z=`import { ImageGenerator } from '@agentscope-ai/chat';
import { Flex } from 'antd';
import { createStyles } from 'antd-style';


const useStyles = createStyles(({ token }) => {
  return {
    skeleton: {
      position: 'relative',
      overflow: 'hidden',
      borderRadius: 8,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    bg: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      width: '200%',
      height: '200%',
      transform: 'translate(-50%, -50%) rotate(0deg)',
      objectFit: 'cover',
    },
    icon: {
      width: 64,
      height: 64,
      zIndex: 1,
    }
  };
});

export default function () {
  const { styles } = useStyles();
  return <Flex vertical gap="middle">
    <ImageGenerator

      skeleton={<div className={styles.skeleton} style={{ width: 320, height: 320 }}>
        <img
          className={styles.bg}
          src="https://img.alicdn.com/imgextra/i2/O1CN01j5MC6r1scV7D2cNYt_!!6000000005787-2-tps-1366-1354.png"
          alt=""
        />

        <img
          className={styles.icon}
          src="https://img.alicdn.com/imgextra/i2/O1CN01tLbrX11xwGHaPhX0F_!!6000000006507-54-tps-500-500.apng"
        />


      </div>}
    />


  </Flex>
}`},71302:function(e,n){n.Z=`import { ImageGenerator } from '@agentscope-ai/chat';
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
}`},60711:function(e,n){n.Z=`import { Markdown } from '@agentscope-ai/chat';
import { SparkEditLine } from '@agentscope-ai/icons';
import { IconButton, Input, Modal } from '@agentscope-ai/design';
import { useState } from 'react';


const content = \`# \u8FD9\u662F\u4E00\u4E2A\u4E00\u7EA7\u6807\u9898
## \u8FD9\u662F\u4E00\u4E2A\u4E8C\u7EA7\u6807\u9898
### \u8FD9\u662F\u4E00\u4E2A\u4E09\u7EA7\u6807\u9898
#### \u8FD9\u662F\u4E00\u4E2A\u56DB\u7EA7\u6807\u9898
##### \u8FD9\u662F\u4E00\u4E2A\u4E94\u7EA7\u6807\u9898
###### \u8FD9\u662F\u4E00\u4E2A\u516D\u7EA7\u6807\u9898

---

\u8FD9\u662F\u7B2C\u4E00\u4E2A\u6BB5\u843D\u3002

\u8FD9\u662F\u7B2C\u4E8C\u4E2A\u6BB5\u843D\u3002

city pop, short for city pop, is a genre of music that originated in japan during the late 1970s and early 1980s. it blends elements of jazz, folk, easy listening, and aor (adult oriented rock) with a distinctly urban feel. the term "city pop" often evokes images of the sophisticated, stylish, and sometimes nostalgic lifestyle of tokyo and other major japanese cities during this period. city pop is characterized by its smooth melodies, mellow rhythms, and often dreamy or introspective lyrics. common themes include city life, summer vibes, nature, and romantic encounters. the music is frequently associated with a particular aesthetic that reflects the fashion, design, and cultural trends of urban japan in the 1980s. some notable city pop artists include mariya takeuchi, known for her iconic song " plastic love," and joe hisaishi, a composer famous for his work on studio ghibli films, though he is not strictly considered a city pop artist. today, city pop has experienced a resurgence in popularity, particularly among younger generations who appreciate its unique sound and the nostalgic value it holds.

---

- \u9879\u76EE1
- \u9879\u76EE2
  - \u5B50\u9879\u76EE2.1
  - \u5B50\u9879\u76EE2.2
- \u9879\u76EE3

---

1. \u7B2C\u4E00\u9879
2. \u7B2C\u4E8C\u9879
   1. \u7B2C\u4E8C\u9879\u7684\u7B2C\u4E00\u5B50\u9879
   2. \u7B2C\u4E8C\u9879\u7684\u7B2C\u4E8C\u5B50\u9879
3. \u7B2C\u4E09\u9879

---

> \u8FD9\u662F\u4E00\u4E2A\u5F15\u7528\u3002

---

*\u8FD9\u662F\u659C\u4F53\u6587\u672C*
_\u8FD9\u662F\u659C\u4F53\u6587\u672C_
**\u8FD9\u662F\u7C97\u4F53\u6587\u672C**
__\u8FD9\u662F\u7C97\u4F53\u6587\u672C__
  
***\u8FD9\u662F\u7C97\u659C\u4F53\u6587\u672C***
**_\u8FD9\u662F\u7C97\u659C\u4F53\u6587\u672C_**
_**\u8FD9\u662F\u7C97\u659C\u4F53\u6587\u672C**_
___\u8FD9\u662F\u7C97\u659C\u4F53\u6587\u672C___
~~\u8FD9\u662F\u5220\u9664\u7EBF\u6587\u672C~~

---

[https://www.aliyun.com](https://www.aliyun.com)

![](https://gw.alicdn.com/imgextra/i4/O1CN01sjZ4Uu1erFDOC6IkA_!!6000000003924-2-tps-396-224.png)

![](https://cloud.video.taobao.com/vod/HGJp6c7KVGDDfyeN8eimSccR_OnaS9E7PTqNzbVoAfE.mp4)

![](https://cloud.video.taobao.com/vod/HGJp6c7KVGDDfyeN8eimSccR_OnaS9E7PTqNzbVoAfE.mp3)

---
\\\`hello world\\\`

\\\`\\\`\\\`java
class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello World!"); 
        // Hello World!
    }
}
\\\`\\\`\\\`

\\\`\\\`\\\`mermaid
sequenceDiagram
    Alice->>John: Hello John, how are you?
    John-->>Alice: Great!
    Alice-)John: See you later!
\\\`\\\`\\\`

---

| \u6807\u98981 | \u6807\u98982 | \u6807\u98983 |\u6807\u98982 | \u6807\u98983 |\u6807\u98981 | \u6807\u98982 | \u6807\u98983 |\u6807\u98982 | \u6807\u98983 |\u6807\u98981 | \u6807\u98982 | \u6807\u98983 |\u6807\u98982 | \u6807\u98983 |
|-------|-------|-------|----|-------|------|-------|-------|----|-------|------|-------|-------|----|-------|
| \u5355\u5143\u683C1 | \u5355\u5143\u683C2 | \u5355\u5143\u683C3 |\u5355\u5143\u683C3 |\u5355\u5143\u683C3 |\u5355\u5143\u683C1 | \u5355\u5143\u683C2 | \u5355\u5143\u683C3 |\u5355\u5143\u683C3 |\u5355\u5143\u683C3 |\u5355\u5143\u683C1 | \u5355\u5143\u683C2 | \u5355\u5143\u683C3 |\u5355\u5143\u683C3 |\u5355\u5143\u683C3 |
| \u5355\u5143\u683C4 | \u5355\u5143\u683C5 | \u5355\u5143\u683C6 |\u5355\u5143\u683C6 |\u5355\u5143\u683C6 |\u5355\u5143\u683C4 | \u5355\u5143\u683C5 | \u5355\u5143\u683C6 |\u5355\u5143\u683C6 |\u5355\u5143\u683C6 |\u5355\u5143\u683C4 | \u5355\u5143\u683C5 | \u5355\u5143\u683C6 |\u5355\u5143\u683C6 |\u5355\u5143\u683C6 |

---
\`;

export default function () {
  const [value, setValue] = useState(content);
  const [open, setOpen] = useState(false);

  return <>
    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
      <IconButton icon={<SparkEditLine />} onClick={() => setOpen(true)} />
      <Modal open={open} onCancel={() => setOpen(false)} title="markdown editor" footer={null} centered>
        <Input.TextArea value={value} onChange={(e) => setValue(e.target.value)} autoSize={{ minRows: 30, maxRows: 30 }} />
      </Modal>
    </div>
    <Markdown content={value} />
  </>;
}`},92513:function(e,n){n.Z=`import React from 'react';
import { Markdown } from '@agentscope-ai/chat';

const content = \`\u676D\u5DDE\u4ECA\u5929\u548C\u672A\u6765\u51E0\u5929\u7684\u5929\u6C14\u9884\u62A5\u5982\u4E0B\uFF1A

\u4ECA\u5929\uFF082\u670818\u65E5\uFF09\u591A\u4E91\uFF0C\u6C14\u6E29\u57284-12\u2103\u4E4B\u95F4[2][3][two]\u3002\u767D\u5929\u591A\u4E91\uFF0C\u591C\u95F4\u8F6C\u9634[7]\u3002\u98CE\u529B\u8F83\u5927\uFF0C\u4E0A\u5348\u4E3A\u504F\u4E1C\u98CE2-3\u7EA7\uFF0C\u508D\u665A\u589E\u5927\u52304\u7EA7[7]\u3002

\u672A\u6765\u51E0\u5929\u5929\u6C14\u6982\u51B5\uFF1A
- 2\u670819\u65E5\uFF08\u660E\u5929\uFF09\uFF1A\u9634\u5929\uFF0C\u6709\u5C0F\u96E8\uFF0C\u6C14\u6E2911\u2103\u5DE6\u53F3[3][7]
- 2\u670820\u65E5\uFF1A\u9634\u5929\uFF0C\u5C0F\u5230\u4E2D\u96E8\uFF0C\u6C14\u6E297\u2103\u5DE6\u53F3[3][7]
- 2\u670821\u65E5\uFF1A\u591A\u4E91\uFF0C\u6C14\u6E297\u2103\u5DE6\u53F3[3]
- 2\u670822\u65E5\uFF1A\u5C0F\u96E8\uFF0C\u6C14\u6E297\u2103\u5DE6\u53F3[3]

\u603B\u4F53\u6765\u770B\uFF0C\u672A\u6765\u51E0\u5929\u676D\u5DDE\u5929\u6C14\u8F83\u51C9\uFF0C\u4EE5\u9634\u5929\u548C\u96E8\u5929\u4E3A\u4E3B\uFF0C\u6C14\u6E29\u57287-11\u2103\u4E4B\u95F4\u6CE2\u52A8\u3002\u5EFA\u8BAE\u5E02\u6C11\u9002\u5F53\u589E\u6DFB\u8863\u7269\uFF0C\u6CE8\u610F\u4FDD\u6696\uFF0C\u5916\u51FA\u65F6\u643A\u5E26\u96E8\u5177[2][3][7][110]\u3002
\`;

const citationsMap = [
  'https://www.weather.com.cn/weather/101210101.shtml',
  'https://tianqi.moji.com/weather/china/zhejiang/hangzhou',
  'https://weather.cma.cn/web/weather/58457.html',
  'https://tianqi.so.com/weather/101210101',
  'https://www.accuweather.com/zh/cn/hangzhou/106832/weather-forecast/106832',
  'https://www.hzqx.com',
  'https://www.hzqx.com/pc/hztq/',
].map((url, index) => {
  return {
    url,
    title: \`\u53C2\u8003\${index + 1}\`,
    content: url,
  };
}).reduce((acc, item, index) => {
  acc[index + 1] = item;
  return acc;
}, {});

export default function () {
  return <Markdown content={content} citationsMap={{
    ...citationsMap, two: {
      url: 'two',
      title: 'two',
      content: 'two',
      render: (props) => {
        return <i>{props.content}</i>;
      }
    }
  }} />;
}`},11639:function(e,n){n.Z=`import { Markdown } from '@agentscope-ai/chat';


const content = \`Hello, world!\`;

export default function () {
  return <Markdown content={content} cursor="underline" />;
}`},82162:function(e,n){n.Z=`import { Markdown } from '@agentscope-ai/chat';


const content = \`\u4E09\u89D2\u51FD\u6570\u662F\u4E00\u7C7B\u6570\u5B66\u51FD\u6570\uFF0C\u4E3B\u8981\u7528\u6765\u63CF\u8FF0\u76F4\u89D2\u4E09\u89D2\u5F62\u4E2D\u7684\u89D2\u5EA6\u4E0E\u8FB9\u957F\u4E4B\u95F4\u7684\u5173\u7CFB\u3002\u6700\u5E38\u7528\u7684\u4E09\u89D2\u51FD\u6570\u5305\u62EC\u6B63\u5F26\uFF08sine, \u7B80\u5199\u4E3Asin\uFF09\u3001\u4F59\u5F26\uFF08cosine, \u7B80\u5199\u4E3Acos\uFF09\u548C\u6B63\u5207\uFF08tangent, \u7B80\u5199\u4E3Atan\uFF09\u3002\u6B64\u5916\u8FD8\u6709\u5B83\u4EEC\u7684\u5012\u6570\uFF1A\u4F59\u5272\uFF08cosecant, \u7B80\u5199\u4E3Acsc\u6216cosec\uFF09\u3001\u6B63\u5272\uFF08secant, \u7B80\u5199\u4E3Asec\uFF09\u548C\u4F59\u5207\uFF08cotangent, \u7B80\u5199\u4E3Acot\uFF09\u3002

\u8FD9\u4E9B\u51FD\u6570\u7684\u57FA\u672C\u5B9A\u4E49\u5982\u4E0B\uFF1A

1. **\u6B63\u5F26\uFF08sin\uFF09**\uFF1A\u5BF9\u4E8E\u4E00\u4E2A\u89D2\u03B8\uFF0C\u5728\u76F4\u89D2\u4E09\u89D2\u5F62\u4E2D\uFF0C\u6B63\u5F26\u662F\u8BE5\u89D2\u5BF9\u8FB9\u4E0E\u659C\u8FB9\u7684\u6BD4\u503C\u3002
   \\\\[ 1 + 2 = 3 \\\\]

2. **\u4F59\u5F26\uFF08cos\uFF09**\uFF1A\u5BF9\u4E8E\u4E00\u4E2A\u89D2\u03B8\uFF0C\u5728\u76F4\u89D2\u4E09\u89D2\u5F62\u4E2D\uFF0C\u4F59\u5F26\u662F\u8BE5\u89D2\u90BB\u8FB9\u4E0E\u659C\u8FB9\u7684\u6BD4\u503C\u3002
   \\\\[ \\\\cos(\\\\theta) = \\\\frac{\\\\text{\u90BB\u8FB9}}{\\\\text{\u659C\u8FB9}} \\\\]

3. **\u6B63\u5207\uFF08tan\uFF09**\uFF1A\u5BF9\u4E8E\u4E00\u4E2A\u89D2\u03B8\uFF0C\u5728\u76F4\u89D2\u4E09\u89D2\u5F62\u4E2D\uFF0C\u6B63\u5207\u662F\u5BF9\u8FB9\u4E0E\u90BB\u8FB9\u7684\u6BD4\u503C\u3002
   \\\\[ \\\\tan(\\\\theta) = \\\\frac{\\\\text{\u5BF9\u8FB9}}{\\\\text{\u90BB\u8FB9}} \\\\]

4. **\u4F59\u5272\uFF08csc\uFF09**\uFF1A\u662F\u6B63\u5F26\u7684\u5012\u6570\u3002
   \\\\[ \\\\csc(\\\\theta) = \\\\frac{1}{\\\\sin(\\\\theta)} \\\\]

5. **\u6B63\u5272\uFF08sec\uFF09**\uFF1A\u662F\u4F59\u5F26\u7684\u5012\u6570\u3002
   \\\\[ \\\\sec(\\\\theta) = \\\\frac{1}{\\\\cos(\\\\theta)} \\\\]

6. **\u4F59\u5207\uFF08cot\uFF09**\uFF1A\u662F\u6B63\u5207\u7684\u5012\u6570\u3002
   \\\\[ \\\\cot(\\\\theta) = \\\\frac{1}{\\\\tan(\\\\theta)} \\\\]

\u4E09\u89D2\u51FD\u6570\u5728\u6570\u5B66\u3001\u7269\u7406\u5B66\u3001\u5DE5\u7A0B\u5B66\u7B49\u9886\u57DF\u6709\u7740\u5E7F\u6CDB\u7684\u5E94\u7528\uFF0C\u5C24\u5176\u662F\u5728\u5904\u7406\u5468\u671F\u6027\u73B0\u8C61\u65F6\u3002

\u77E9\u9635\u662F\u6570\u5B66\u4E2D\u4E00\u79CD\u91CD\u8981\u7684\u5DE5\u5177\uFF0C\u5E7F\u6CDB\u5E94\u7528\u4E8E\u7EBF\u6027\u4EE3\u6570\u3001\u8BA1\u7B97\u673A\u79D1\u5B66\u3001\u7269\u7406\u5B66\u7B49\u9886\u57DF\u3002\u4EE5\u4E0B\u662F\u5173\u4E8E\u77E9\u9635\u5F62\u5F0F\u7684\u8BE6\u7EC6\u8BF4\u660E\uFF1A
\u77E9\u9635\u662F\u4E00\u4E2A**\u6309\u77E9\u5F62\u6392\u5217\u7684\u6570\u8868**\uFF0C\u7531 **m \u884C n \u5217** \u7684\u5143\u7D20\u7EC4\u6210\uFF0C\u901A\u5E38\u7528\u5927\u5199\u5B57\u6BCD\u8868\u793A\uFF08\u5982 A\u3001B\uFF09\u3002 

\u4E00\u822C\u5F62\u5F0F\u5982\u4E0B\uFF1A

$$
A = \\\\begin{bmatrix}
a_{11} & a_{12} & \\\\cdots & a_{1n} \\\\\\\\
a_{21} & a_{22} & \\\\cdots & a_{2n} \\\\\\\\
\\\\vdots & \\\\vdots & \\\\ddots & \\\\vdots \\\\\\\\
a_{m1} & a_{m2} & \\\\cdots & a_{mn}
\\\\end{bmatrix}
$$

---

\u5176\u4E2D \\( C \\) \u8868\u793A\u5706\u7684\u5468\u957F\uFF0C\\( \\pi \\) \u662F\u5706\u5468\u7387\uFF08\u5927\u7EA6\u7B49\u4E8E 3.14159\uFF09\uFF0C\u800C \\( r \\) \u662F\u5706\u7684\u534A\u5F84\u3002

\u5176\u4E2D $ C $ \u8868\u793A\u5706\u7684\u5468\u957F\uFF0C$ \\pi $ \u662F\u5706\u5468\u7387\uFF08\u5927\u7EA6\u7B49\u4E8E 3.14159\uFF09\uFF0C\u800C $ r $ \u662F\u5706\u7684\u534A\u5F84\u3002

---

\\\\[
x = \\\\frac{-b \\\\pm \\\\sqrt{b^2 - 4ac}}{2a}
\\\\]

\\\\[
\\\\begin{align*}
1. & \\\\quad x + y = 10 \\\\\\\\
2. & \\\\quad 2x - y = 0
\\\\end{align*}
\\\\]


$$ x = \\\\frac{-b \\\\pm \\\\sqrt{b^2 - 4ac}}{2a} $$

$$
\\\\begin{align*}
1. & \\\\quad x + y = 10 \\\\\\\\
2. & \\\\quad 2x - y = 0
\\\\end{align*}
$$
\`;


export default function () {
  return <Markdown
    content={content}
  />;
}`},41282:function(e,n){n.Z=`import { Mermaid } from '@agentscope-ai/chat';
import React from 'react';

const content = \`sequenceDiagram
    Alice->>John: Hello John, how are you?
    John-->>Alice: Great!
    Alice-)John: See you later!
\`;

export default function () {
  return <Mermaid content={content} height={300} />;
}
`},83632:function(e,n){n.Z=`import { Mermaid } from '@agentscope-ai/chat';
import React from 'react';

const classDiagram = \`classDiagram
    note "From Duck till Zebra"
    Animal <|-- Duck
    note for Duck "can fly\\\\ncan swim\\\\ncan dive\\\\ncan help in debugging"
    Animal <|-- Fish
    Animal <|-- Zebra
    Animal : +int age
    Animal : +String gender
    Animal: +isMammal()
    Animal: +mate()
    class Duck{
        +String beakColor
        +swim()
        +quack()
    }
    class Fish{
        -int sizeInFeet
        -canEat()
    }
    class Zebra{
        +bool is_wild
        +run()
    }
\`;

export default () => {
  return <Mermaid content={classDiagram} height={400} />;
};
`},67526:function(e,n){n.Z=`import { Mermaid } from '@agentscope-ai/chat';
import React from 'react';

const content = \`flowchart LR
    A[Hard edge] -->|Link text| B(Round edge)
    B --> C{Decision}
    C -->|One| D[Result one]
    C -->|Two| E[Result two]
\`;

export default () => {
  return <Mermaid content={content} height={200} />;
};
`},49764:function(e,n){n.Z=`import { Mermaid } from '@agentscope-ai/chat';
import React from 'react';

const content = \`sequenceDiagram
    autonumber
    Alice->>John: Hello John, how are you?
    loop HealthCheck
        John->>John: Fight against hypochondria
    end
    Note right of John: Rational thoughts!
    John-->>Alice: Great!
    John->>Bob: How about you?
    Bob-->>John: Jolly good!
\`;

export default () => {
  return <Mermaid content={content} height={400} />;
};
`},49995:function(e,n){n.Z=`import { Mermaid } from '@agentscope-ai/chat';
import React from 'react';

const content = \`stateDiagram-v2
    [*] --> Still
    Still --> [*]

    Still --> Moving
    Moving --> Still
    Moving --> Crash
    Crash --> [*]
 \`;

export default function () {
  return <Mermaid content={content} height={400} />;
}
`},99062:function(e,n){n.Z=`import { Mermaid } from '@agentscope-ai/chat';
import React from 'react';

const content = \`timeline
    title History of Social Media Platform
    2002 : LinkedIn
    2004 : Facebook
         : Google
    2005 : YouTube
    2006 : Twitter
\`;

export default function () {
  return <Mermaid content={content} height={300} />;
}
`},42701:function(e,n){n.Z=`import { OperateCard } from '@agentscope-ai/chat';
import { SparkBookLine } from '@agentscope-ai/icons';
import { Flex } from 'antd';


export default function () {

  return <Flex vertical gap={16}>
    <OperateCard header={{
      icon: <SparkBookLine />,
      title: 'OperateCard',
      description: 'OperateCard Description',
    }} />



    <OperateCard header={{
      icon: <SparkBookLine />,
      title: 'OperateCard',
      description: 'OperateCard Description',
    }} body={{
      children: <OperateCard.LineBody>
        <div style={{ marginLeft: 16 }}>
          <div>
            OperateCard Body
          </div>
          <div>
            OperateCard Body
          </div>
        </div>
      </OperateCard.LineBody>,
      defaultOpen: true,
    }} />
  </Flex>
}`},33192:function(e,n){n.Z=`import { Rag } from '@agentscope-ai/chat';

export default function () {
  return <Rag
    subTitle="GPT-5\u6280\u672F\u535A\u5BA2\u3001\u884C\u4E1A\u5206\u6790\u3001\u6280\u672F\u7279\u6027"
    list={[
      {
        title: '\u3010\u6587\u6863\u5E93\u3011GPT-5 \u6280\u672F\u535A\u5BA2', content: 'Aliyun Bailianis a product offered by Alibaba Cloud, which is the cloud computing arm of Alibaba Group. Bailian is a high-performance AI development platform designed to help users build, deploy, and manage machine learning models and AI applications more efficiently.', footer: '\u6765\u6E90\u6587\u6863\uFF1A\uFF08\u771F\uFF09\u62DF\u5B9A\u7A3F\u3002GPT \u7684\u5236\u5EA6\u7814\u7A76',
        images: [
          'https://gw.alicdn.com/imgextra/i1/O1CN01n7R7cy1MkE5OYeXV9_!!6000000001472-55-tps-24-24.svg',
          'https://gw.alicdn.com/imgextra/i1/O1CN01n7R7cy1MkE5OYeXV9_!!6000000001472-55-tps-24-24.svg',
          'https://gw.alicdn.com/imgextra/i1/O1CN01n7R7cy1MkE5OYeXV9_!!6000000001472-55-tps-24-24.svg',
        ],
      },
      { title: '\u3010\u6587\u6863\u5E93\u3011GPT-5 \u884C\u4E1A\u5206\u6790', content: 'Aliyun Bailianis a product offered by Alibaba Cloud, which is the cloud computing arm of Alibaba Group. Bailian is a high-performance AI development platform designed to help users build, deploy, and manage machine learning models and AI applications more efficiently.', footer: '\u6765\u6E90\u6587\u6863\uFF1A\uFF08\u771F\uFF09\u62DF\u5B9A\u7A3F\u3002GPT \u7684\u5236\u5EA6\u7814\u7A76' },
      { title: '\u3010\u6587\u6863\u5E93\u3011GPT-5 \u6280\u672F\u7279\u6027', content: 'Aliyun Bailianis a product offered by Alibaba Cloud, which is the cloud computing arm of Alibaba Group. Bailian is a high-performance AI development platform designed to help users build, deploy, and manage machine learning models and AI applications more efficiently.', footer: '\u6765\u6E90\u6587\u6863\uFF1A\uFF08\u771F\uFF09\u62DF\u5B9A\u7A3F\u3002GPT \u7684\u5236\u5EA6\u7814\u7A76' },
    ]}
  />
}`},87519:function(e,n){n.Z=`import { Thinking } from "@agentscope-ai/chat";

export default function () {
  return <Thinking
    title="Deep thinking"
    subTitle="I am the name of a concept that is being thought about"
    content={\`Okay, the user is asking about "citypop." Let me start by recalling what I know about that term. I remember that City Pop is a genre of music, but I need to make sure I'm accurate.

First, when did City Pop originate? I think it was in Japan during the late 1970s and 1980s. That makes sense because Japan's economy was booming then, leading to a vibrant urban culture. The genre probably blends Western styles like funk, jazz, and disco with Japanese pop elements. Artists like Tatsuro Yamashita and Mariya Takeuchi come to mind. Oh, and there's that song "Plastic Love" by Mariya Takeuchi that went viral online recently, which might have sparked renewed interest.

I should also mention the themes of City Pop songs\u2014they often reflect city life, romance, and leisure, fitting the upbeat and cosmopolitan vibe of the time. The visual style associated with it includes retro anime and vibrant cityscapes, which adds to its aesthetic appeal. It's interesting how the internet, especially platforms like YouTube and Spotify, helped revive this genre internationally. Maybe I should note that connection between modern digital culture and the resurgence of City Pop.

Wait, are there any subgenres or key characteristics I should highlight? The use of synthesizers, smooth vocals, and lush production are typical. Also, City Pop was influenced by yacht rock and soft rock from the West. It's important to link it to Japan's economic bubble era, as that context explains the music's optimistic and luxurious feel.

I need to ensure I don't confuse it with other Japanese genres like J-pop or Enka. City Pop is distinct in its fusion with Western sounds. Including notable albums, like Tatsuro Yamashita's "For You" or Anri's "Timely!!", could be helpful. Oh, and the connection to future funk and vaporwave genres that sample City Pop tracks is a good point for its modern influence.\`}
  />
}`},23009:function(e,n){n.Z=`import { Flex } from 'antd';
import { TodoList } from "@agentscope-ai/chat";


export default function () {
  return <Flex vertical gap={16}>

    <TodoList
      title="Task List"
      defaultOpen={true}
      list={[
        { title: '1\u3001\u641C\u7D22GPT-5\u7684\u5B98\u65B9\u53D1\u5E03\u4FE1\u606F\uFF0C\u786E\u8BA4\u65B0\u7279\u6027', status: 'todo' },
        { title: '2\u3001\u627E\u6280\u672F\u535A\u5BA2\u548C\u884C\u4E1A\u5206\u6790\uFF0C\u83B7\u53D6GPT-5\u8BE6\u7EC6\u6280\u672F\u7279\u6027', status: 'todo' },
        { title: '3\u3001\u4EA4\u53C9\u9A8C\u8BC1\u591A\u4E2A\u6765\u6E90\u4FE1\u606F\uFF0C\u786E\u4FDD\u51C6\u786E\u6027', status: 'todo' },
        { title: '4\u3001\u6574\u7406\u4FE1\u606F\u5E76\u751F\u6210\u7ED3\u6784\u5316\u6587\u672C\u62A5\u544A', status: 'todo' },
      ]}
    />
    <TodoList
      title="Task List"
      defaultOpen={false}
      list={[
        { title: '1\u3001\u641C\u7D22GPT-5\u7684\u5B98\u65B9\u53D1\u5E03\u4FE1\u606F\uFF0C\u786E\u8BA4\u65B0\u7279\u6027', status: 'done' },
        { title: '2\u3001\u627E\u6280\u672F\u535A\u5BA2\u548C\u884C\u4E1A\u5206\u6790\uFF0C\u83B7\u53D6GPT-5\u8BE6\u7EC6\u6280\u672F\u7279\u6027', status: 'running' },
        { title: '3\u3001\u4EA4\u53C9\u9A8C\u8BC1\u591A\u4E2A\u6765\u6E90\u4FE1\u606F\uFF0C\u786E\u4FDD\u51C6\u786E\u6027', status: 'todo' },
        { title: '4\u3001\u6574\u7406\u4FE1\u606F\u5E76\u751F\u6210\u7ED3\u6784\u5316\u6587\u672C\u62A5\u544A', status: 'todo' },
      ]}
    /></Flex>
}`},75069:function(e,n){n.Z=`import { ToolCall } from "@agentscope-ai/chat";
export default function () {
  return <ToolCall
    title="Call Tool"
    subTitle="I am the name of a tool that is being called"
    input={{
      foo: 'bar',
      baz: 'qux',
    }}
    output={{
      result: 'result',
    }}
  />
}`},72353:function(e,n){n.Z=`import { WebSearch } from "@agentscope-ai/chat";

export default function () {
  return <WebSearch
    subTitle="Transformer \u9886\u57DF\u7684\u91CD\u8981\u7814\u7A76"
    list={[
      { title: 'Transformer\u767B\u4E0Anature\uFF0C\u88AB\u8A89\u4E3A\u5927\u6A21\u578B\u57FA\u77F3\u7684\u5B83\u5230\u5E95\u51ED\u4EC0\u4E48\u8FD9\u4E48\u706B\uFF1F', subTitle: '\u65B0\u6D6A\u65B0\u95FB', link: 'https://www.baidu.com', icon: 'https://www.baidu.com/favicon.ico' },
      { title: 'Transformer\u767B\u4E0Anature\uFF0C\u5B83\u7684\u6280\u672F\u6838\u5FC3\u662F\u4EC0\u4E48\uFF1F', subTitle: '\u7F51\u6613\u65B0\u95FB', link: 'https://www.baidu.com', icon: 'https://www.baidu.com/favicon.ico' },

    ]}
  />
}`},62692:function(e,n){n.Z=`import React, { useState } from 'react';
import { ChatInput } from '@agentscope-ai/chat';

export default function () {
  const [value, setValue] = useState('');
  return <ChatInput placeholder='Please type here...' value={value} onChange={setValue} allowSpeech></ChatInput>
}`},2003:function(e,n){n.Z=`import React, { useState } from 'react';
import { ChatInput } from '@agentscope-ai/chat';

export default function () {
  const [value, setValue] = useState('Hello, Alibaba Cloud Spark Chat!');
  return <ChatInput placeholder='Please type here...' value={value} onChange={setValue}></ChatInput>
}`},16864:function(e,n){n.Z=`import { ChatInput } from '@agentscope-ai/chat';

export default function () {
  return <ChatInput loading placeholder='Please type here...'></ChatInput>
}`},31864:function(e,n){n.Z=`import React from 'react';
import { ChatInput } from '@agentscope-ai/chat';
import { SparkMagicNoteLine } from '@agentscope-ai/icons';

export default function () {
  const [mode, setMode] = React.useState('');
  return <div style={{ width: '100%' }}>
    <ChatInput.ModeSelect options={[
      {
        icon: <SparkMagicNoteLine style={{ fontSize: 16 }} />,
        label: '\u6587\u672C',
        value: 'text',
        tooltip: '\u6587\u672C tooltip'
      },
      {
        icon: <SparkMagicNoteLine style={{ fontSize: 16 }} />,
        label: '\u56FE\u7247',
        selectedLabel: <div style={{
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
        }}>\u56FE\u7247\u56FE\u7247\u56FE\u7247\u56FE\u7247\u56FE\u7247\u56FE\u7247\u56FE\u7247\u56FE\u7247\u56FE\u7247\u56FE\u7247\u56FE\u7247\u56FE\u7247\u56FE\u7247\u56FE\u7247\u56FE\u7247\u56FE\u7247\u56FE\u7247\u56FE\u7247\u56FE\u7247\u56FE\u7247\u56FE\u7247\u56FE\u7247\u56FE\u7247\u56FE\u7247\u56FE\u7247\u56FE\u7247\u56FE\u7247\u56FE\u7247\u56FE\u7247\u56FE\u7247\u56FE\u7247\u56FE\u7247\u56FE\u7247\u56FE\u7247\u56FE\u7247\u56FE\u7247\u56FE\u7247\u56FE\u7247\u56FE\u7247\u56FE\u7247\u56FE\u7247\u56FE\u7247\u56FE\u7247\u56FE\u7247\u56FE\u7247\u56FE\u7247\u56FE\u7247\u56FE\u7247\u56FE\u7247\u56FE\u7247\u56FE\u7247\u56FE\u7247\u56FE\u7247\u56FE\u7247\u56FE\u7247\u56FE\u7247\u56FE\u7247\u56FE\u7247\u56FE\u7247\u56FE\u7247\u56FE\u7247',
        </div>,
        value: 'image',
      },
      {
        icon: <SparkMagicNoteLine style={{ fontSize: 16 }} />,
        label: '\u6587\u4EF6',
        value: 'file',
      },
    ]}
      value={mode}
      closeTip='close tooltip'
      onChange={setMode}
      desc={<div
        style={{ fontSize: 12 }}
        onClick={() => {
          setMode('')
        }}>
        description of {mode}
      </div>}
    />
    <ChatInput placeholder='Please type here...' ></ChatInput>
  </div>
}`},75307:function(e,n){n.Z=`import React from 'react';
import { Attachments, ChatInput } from '@agentscope-ai/chat';
import { GetProp, Upload } from 'antd';
import { IconButton, Button } from '@agentscope-ai/design';
import { SparkAttachmentLine, SparkDeepSearchLine, SparkKeyboardLine } from '@agentscope-ai/icons';

export default function () {
  const [search, setSearch] = React.useState(false);
  const [attachedFiles, setAttachedFiles] = React.useState<GetProp<typeof Attachments, 'items'>>([]);
  const handleFileChange: GetProp<typeof Attachments, 'onChange'> = async ({ fileList }) => {
    setAttachedFiles(fileList);
  }

  const senderHeader = (
    <ChatInput.Header
      closable={false}
      open={attachedFiles?.length > 0}
    >
      <Attachments
        items={attachedFiles}
        onChange={handleFileChange}
      />
    </ChatInput.Header>
  );
  const attachmentsNode = (
    <Upload onChange={handleFileChange} fileList={attachedFiles} showUploadList={false} key="upload">
      <IconButton icon={<SparkAttachmentLine />} bordered={false} />
    </Upload>
  );

  return <ChatInput
    placeholder='Please type here...'
    zoomable
    header={senderHeader}
    prefix={[
      attachmentsNode,
      <Button type="text" color={search ? 'primary' : 'default'} variant={search ? 'filled' : 'text'} icon={<SparkDeepSearchLine />} style={{ padding: '0 6px', gap: 6 }} onClick={() => setSearch(!search)}>\u8054\u7F51\u641C\u7D22</Button>,
    ]}>
  </ChatInput>
}
`},5686:function(e,n){n.Z=`import React from 'react';
import { Attachments, ChatInput } from '@agentscope-ai/chat';
import { Button, GetProp, Upload } from 'antd';
import { IconButton } from '@agentscope-ai/design';
import { SparkAttachmentLine } from '@agentscope-ai/icons';

export default function () {
  // mock data
  const [attachedFiles, setAttachedFiles] = React.useState<GetProp<typeof Attachments, 'items'>>([
    {
      uid: '-1',
      name: 'file.pdf',
      status: 'done',
      size: 1000,
    },
    {
      uid: '-2',
      name: 'file.pdf',
      status: 'done',
      size: 2000,

    },
    {
      uid: '-3',
      name: 'file.pdf',
      status: 'done',
      size: 3000,
    },
  ]);

  const handleFileChange: GetProp<typeof Attachments, 'onChange'> = async ({ fileList }) => {
    console.log('fileList: ', fileList);
    setAttachedFiles(fileList);
  }

  const senderHeader = (
    <ChatInput.Header
      closable={false}
      open={attachedFiles?.length > 0}
    >
      <Attachments
        items={attachedFiles}
        onChange={handleFileChange}
      />
    </ChatInput.Header>
  );
  const attachmentsNode = (
    <Upload onChange={handleFileChange} fileList={attachedFiles} showUploadList={false} key="upload">
      <IconButton icon={<SparkAttachmentLine />} bordered={false} />
    </Upload>
  );

  return <ChatInput placeholder='Please type here...' header={senderHeader}
    prefix={attachmentsNode}></ChatInput>
}`},72734:function(e,n){n.Z=`import React from 'react';
import { Attachments, ChatInput } from '@agentscope-ai/chat';
import { Button, GetProp, Upload } from 'antd';
import { IconButton } from '@agentscope-ai/design';
import { SparkAttachmentLine } from '@agentscope-ai/icons';

export default function () {
  // mock data
  const [attachedFiles, setAttachedFiles] = React.useState<GetProp<typeof Attachments, 'items'>>([
    {
      uid: '-1',
      name: 'image.png',
      status: 'done',
      url: 'https://gw.alicdn.com/imgextra/i4/O1CN01sjZ4Uu1erFDOC6IkA_!!6000000003924-2-tps-396-224.png',
    },
    {
      uid: '-2',
      name: 'image.png',
      status: 'done',
      url: 'https://gw.alicdn.com/imgextra/i4/O1CN01sjZ4Uu1erFDOC6IkA_!!6000000003924-2-tps-396-224.png',
    },
    {
      uid: '-3',
      name: 'image.png',
      status: 'done',
      url: 'https://gw.alicdn.com/imgextra/i4/O1CN01sjZ4Uu1erFDOC6IkA_!!6000000003924-2-tps-396-224.png',
    },
  ]);
  const handleFileChange: GetProp<typeof Attachments, 'onChange'> = async ({ fileList }) => {
    setAttachedFiles(fileList);
  }

  const senderHeader = (
    <ChatInput.Header
      closable={false}
      open={attachedFiles?.length > 0}
    >
      <Attachments
        items={attachedFiles}
        onChange={handleFileChange}
      />
    </ChatInput.Header>
  );
  const attachmentsNode = (
    <Upload onChange={handleFileChange} fileList={attachedFiles} showUploadList={false} key="upload">
      <IconButton icon={<SparkAttachmentLine />} bordered={false} />
    </Upload>
  );

  return <ChatInput placeholder='Please type here...' header={senderHeader}
    prefix={attachmentsNode}></ChatInput>
}`},27828:function(e,n){n.Z=`import { StatusCard } from '@agentscope-ai/chat';
import { Flex } from 'antd';
import { useState } from 'react';


export default function () {
  const [done, setDone] = useState(false);
  return <Flex vertical gap={16}>
    <StatusCard title="Success" status="success">

      <StatusCard.Statistic values={[
        { title: 'Runtime', value: '23min' },
        { title: 'Input Token', value: '200k' },
        { title: 'Output Token', value: '1000k' },
      ]} />
    </StatusCard>
    <StatusCard title="Execution Failed" description="Failed to load resource: net::ERR_CONNECTION_CLOSED" status="error" />
    <StatusCard title="Warning" status="warning" />


    <StatusCard.HITL
      done={done}
      onDone={() => setDone(true)}
      title="Human intervention required"
      description="Please log in after entering your account and password"
      waitButtonText="I have completed, continue task"
      doneButtonText="User has confirmed"
    />


  </Flex>
}`},93358:function(e,n){n.Z=`
import { createStyles } from "antd-style";
import React, { useState, useEffect, useRef } from "react";

interface MousePosition {
  x: number;
  y: number;
}

interface EyePosition {
  x: number;
  y: number;
}

const EyeFollower: React.FC = () => {
  const [mousePosition, setMousePosition] = useState<MousePosition>({
    x: 0,
    y: 0,
  });
  const [isBlinking, setIsBlinking] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { styles, cx } = useStyle();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setIsBlinking(true);
      setTimeout(() => setIsBlinking(false), 150);
    }, 5000);

    return () => clearInterval(blinkInterval);
  }, []);

  const calculateEyePosition = (): EyePosition => {
    const containerCenterX = 32;
    const containerCenterY = 32;

    const deltaX = mousePosition.x - containerCenterX;
    const deltaY = mousePosition.y - containerCenterY;

    const maxMoveX = 6;
    const maxMoveY = 6;

    const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
    const maxDistance = 50;

    if (distance === 0) return { x: 0, y: 0 };

    const moveRatio = Math.min(distance / maxDistance, 1);

    const moveX = (deltaX / distance) * maxMoveX * moveRatio;
    const moveY = (deltaY / distance) * maxMoveY * moveRatio;

    return {
      x: Math.max(-maxMoveX, Math.min(maxMoveX, moveX)),
      y: Math.max(-maxMoveY, Math.min(maxMoveY, moveY)),
    };
  };

  const calculateEyeScale = (isLeftEye: boolean) => {
    const containerCenterX = 32;
    const deltaX = mousePosition.x - containerCenterX;
    const threshold = 400;

    if (Math.abs(deltaX) < threshold) {
      return 1;
    }

    const extremeDelta = Math.abs(deltaX) - threshold;
    const maxExtremeDelta = 32 - threshold;
    const scaleRatio = Math.min(extremeDelta / maxExtremeDelta, 1);

    if (deltaX > threshold) {
      if (isLeftEye) {
        return 1 - scaleRatio * 0.5;
      } else {
        return 1;
      }
    } else if (deltaX < -threshold) {
      if (isLeftEye) {
        return 1;
      } else {
        return 1 - scaleRatio * 0.5;
      }
    }

    return 1;
  };

  const leftEyePosition = calculateEyePosition();
  const rightEyePosition = calculateEyePosition();
  const leftEyeScale = calculateEyeScale(true);
  const rightEyeScale = calculateEyeScale(false);

  return (
    <div ref={containerRef} className={styles.container}>
      <div
        className={cx(styles.eye, styles.leftEye, isBlinking ? styles.blinkingEye : '')}
        style={{
          transform: \`translate(\${leftEyePosition.x}px, \${leftEyePosition.y
            }px) \${isBlinking ? "scaleY(0.1)" : \`scaleY(\${leftEyeScale})\`}\`,
        }}
      />
      <div
        className={cx(styles.eye, styles.rightEye, isBlinking ? styles.blinkingEye : '')}
        style={{
          transform: \`translate(\${rightEyePosition.x}px, \${rightEyePosition.y
            }px) \${isBlinking ? "scaleY(0.1)" : \`scaleY(\${rightEyeScale})\`}\`,
        }}
      />
    </div>
  );
};

export default EyeFollower;

const useStyle = createStyles(({ css, token }) => ({
  container: {
    width: 64,
    height: 64,
    backgroundColor: "black",
    borderRadius: 12,
    position: 'relative',
    cursor: 'pointer',
    overflow: 'hidden',
    boxShadow:
      "15px 0px 30px -10px rgba(131, 88, 246, 0.4), 0px 0px 30px -10px rgba(255, 142, 168, 0.4), -15px 0px 30px -10px rgba(225, 163, 37, 0.4)",
  },
  eye: {
    width: 6,
    height: 12,
    backgroundColor: 'white',
    borderRadius: 99,
    position: 'absolute',
    top: 16,
    transition: 'transform 0.1s ease-out',
  },
  leftEye: {
    left: 22,
  },
  rightEye: {
    left: 36,
  },
  blinkingEye: {
    transition: "transform 0.05s ease-out",
  },
}))`},50295:function(e,n){n.Z=`import { Welcome, ChatInput } from '@agentscope-ai/chat';
import { Flex } from 'antd';

export default function () {
  return <Flex vertical  style={{ height: '100%', }}>
    <Welcome
      style={{ justifyContent: 'center', flex: 1 }}
      logo={null}
      title={<div style={{ textAlign: 'center' }}>Nice to meet you!</div>}
      desc="How can I help you today?"
    />
    <ChatInput placeholder='Please type here...' />
  </Flex>
}`},58912:function(e,n){n.Z=`import { ChatInput, Welcome } from '@agentscope-ai/chat';
import { Flex } from "antd";


export default function () {
  return <Flex vertical style={{ height: '100%', }}>
    <Welcome
      style={{ justifyContent: 'center', flex: 1 }}
      title="Nice to meet you!"
      desc="How can I help you today?"
      logo="https://gw.alicdn.com/imgextra/i3/O1CN01VFloZL1oERpBMx2Nv_!!6000000005193-55-tps-56-56.svg"
    />

    <ChatInput placeholder='Please type here...' />
  </Flex>
}`},10823:function(e,n){n.Z=`import React from "react";
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
}`},51997:function(e,n){n.Z=`import { ChatInput } from '@agentscope-ai/chat';
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

`}}]);
