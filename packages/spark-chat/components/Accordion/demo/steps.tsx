import { Accordion } from '@agentscope-ai/chat';
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
