import { Bubble, DefaultCards } from "@agentscope-ai/chat";
import { SparkCopyLine, SparkThumbsUpLine, SparkThumbsDownLine, SparkReplaceLine } from '@agentscope-ai/icons';

export default function () {
  return <Bubble cards={[
    {
      code: 'Text',
      data: {
        content: `City Pop, short for City Pop, is a genre of music that originated in Japan during the late 1970s and early 1980s. It blends elements of jazz, folk, easy listening, and AOR (Adult Oriented Rock) with a distinctly urban feel. The term "City Pop" often evokes images of the sophisticated, stylish, and sometimes nostalgic lifestyle of Tokyo and other major Japanese cities during this period.
City Pop is characterized by its smooth melodies, mellow rhythms, and often dreamy or introspective lyrics. Common themes include city life, summer vibes, nature, and romantic encounters. The music is frequently associated with a particular aesthetic that reflects the fashion, design, and cultural trends of urban Japan in the 1980s.
Some notable City Pop artists include Mariya Takeuchi, known for her iconic song " Plastic Love," and Joe Hisaishi, a composer famous for his work on Studio Ghibli films, though he is not strictly considered a City Pop artist.
Today, City Pop has experienced a resurgence in popularity, particularly among younger generations who appreciate its unique sound and the nostalgic value it holds.

\`\`\`javascript
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
\`\`\`

City Pop, short for City Pop, is a genre of music that originated in Japan during the late 1970s and early 1980s. It blends elements of jazz, folk, easy listening, and AOR (Adult Oriented Rock) with a distinctly urban feel. The term "City Pop" often evokes images of the sophisticated, stylish, and sometimes nostalgic lifestyle of Tokyo and other major Japanese cities during this period.`
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