import { CodeBlock } from "@agentscope-ai/design";
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
        content: `City Pop, short for City Pop, is a genre of music that originated in Japan during the late 1970s and early 1980s. It blends elements of jazz, folk, easy listening, and AOR (Adult Oriented Rock) with a distinctly urban feel. The term "City Pop" often evokes images of the sophisticated, stylish, and sometimes nostalgic lifestyle of Tokyo and other major Japanese cities during this period.
City Pop is characterized by its smooth melodies, mellow rhythms, and often dreamy or introspective lyrics. Common themes include city life, summer vibes, nature, and romantic encounters. The music is frequently associated with a particular aesthetic that reflects the fashion, design, and cultural trends of urban Japan in the 1980s.
Some notable City Pop artists include Mariya Takeuchi, known for her iconic song " Plastic Love," and Joe Hisaishi, a composer famous for his work on Studio Ghibli films, though he is not strictly considered a City Pop artist.
Today, City Pop has experienced a resurgence in popularity, particularly among younger generations who appreciate its unique sound and the nostalgic value it holds.`
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
}