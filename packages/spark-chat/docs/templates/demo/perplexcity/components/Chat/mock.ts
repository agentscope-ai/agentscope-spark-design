import { produce } from 'immer';

const data = {
  deepThinking: {
    loading: false,
    content: `Okay, the user is asking about "citypop." Let me start by recalling what I know about that term. I remember that City Pop is a genre of music, but I need to make sure I'm accurate.

First, when did City Pop originate? I think it was in Japan during the late 1970s and 1980s. That makes sense because Japan's economy was booming then, leading to a vibrant urban culture. The genre probably blends Western styles like funk, jazz, and disco with Japanese pop elements. Artists like Tatsuro Yamashita and Mariya Takeuchi come to mind. Oh, and there's that song "Plastic Love" by Mariya Takeuchi that went viral online recently, which might have sparked renewed interest.

I should also mention the themes of City Pop songs—they often reflect city life, romance, and leisure, fitting the upbeat and cosmopolitan vibe of the time. The visual style associated with it includes retro anime and vibrant cityscapes, which adds to its aesthetic appeal. It's interesting how the internet, especially platforms like YouTube and Spotify, helped revive this genre internationally. Maybe I should note that connection between modern digital culture and the resurgence of City Pop.

Wait, are there any subgenres or key characteristics I should highlight? The use of synthesizers, smooth vocals, and lush production are typical. Also, City Pop was influenced by yacht rock and soft rock from the West. It's important to link it to Japan's economic bubble era, as that context explains the music's optimistic and luxurious feel.

I need to ensure I don't confuse it with other Japanese genres like J-pop or Enka. City Pop is distinct in its fusion with Western sounds. Including notable albums, like Tatsuro Yamashita's "For You" or Anri's "Timely!!", could be helpful. Oh, and the connection to future funk and vaporwave genres that sample City Pop tracks is a good point for its modern influence.`,
  },
  images: [
    'https://gw.alicdn.com/imgextra/i3/O1CN01zgK3yS1FAm7uKIHWc_!!6000000000447-0-tps-1232-928.jpg',
    'https://gw.alicdn.com/imgextra/i2/O1CN01Vasr7w1PzHxyioPPm_!!6000000001911-0-tps-1232-928.jpg',
    'https://gw.alicdn.com/imgextra/i4/O1CN01M98Xnc26huPmyBon2_!!6000000007694-0-tps-1232-928.jpg',
    'https://gw.alicdn.com/imgextra/i1/O1CN01EJ1oqo1J01Hx71bgB_!!6000000000965-0-tps-1232-928.jpg',
    'https://gw.alicdn.com/imgextra/i3/O1CN01zgK3yS1FAm7uKIHWc_!!6000000000447-0-tps-1232-928.jpg',
    'https://gw.alicdn.com/imgextra/i2/O1CN01Vasr7w1PzHxyioPPm_!!6000000001911-0-tps-1232-928.jpg',
    'https://gw.alicdn.com/imgextra/i4/O1CN01M98Xnc26huPmyBon2_!!6000000007694-0-tps-1232-928.jpg',
    'https://gw.alicdn.com/imgextra/i1/O1CN01EJ1oqo1J01Hx71bgB_!!6000000000965-0-tps-1232-928.jpg',
  ],
  content: {
    content: `City Pop (シティーポップ) is a subgenre of Japanese pop music that emerged in the late 1970s and peaked in popularity during the 1980s. It is characterized by its fusion of various musical styles, including funk, disco, R&B, soft rock, and boogie, often reflecting the urban and sophisticated lifestyle of city dwellers. The genre is known for its polished production, catchy melodies, and nostalgic themes, often evoking a sense of escapism and leisure associated with the vibrant city life.
## Key Features of City Pop

- Musical Influences: City Pop draws heavily from Western music trends of the time, particularly adult-oriented genres like funk and disco. It incorporates elements of jazz, lounge music, and even tropical sounds.
- Cultural Context: The genre developed during a period of rapid economic growth in Japan, which influenced its themes of urban sophistication and leisure. It served as a soundtrack for the cosmopolitan lifestyle of the era.
- Aesthetic: City Pop is often associated with vibrant and colorful artwork, featuring themes of summer, beaches, and urban nightlife. The cover art typically reflects a retro-futuristic vision, with bright colors and nostalgic imagery.
`,
    loading: false,
  },
  sources: [
    {
      title: 'City Pop',
      logo: 'https://gw.alicdn.com/imgextra/i3/O1CN0134H6gj1MP9sJ1T17L_!!6000000001426-55-tps-32-32.svg',
      url: 'https://en.wikipedia.org/wiki/City_Pop',
      content: `## City pop

City Pop (シティーポップ) is a subgenre of Japanese pop music that emerged in the late 1970s and peaked in popularity during the 1980s. It is characterized by its fusion of various musical styles, including funk, disco, R&B, soft rock, and boogie, often reflecting the urban and sophisticated lifestyle of city dwellers. The genre is known for its polished production, catchy melodies, and nostalgic themes, often evoking a sense of escapism and leisure associated with the vibrant city life.`,
    },
    {
      title: 'City Pop',
      logo: 'https://gw.alicdn.com/imgextra/i3/O1CN0134H6gj1MP9sJ1T17L_!!6000000001426-55-tps-32-32.svg',
      url: 'https://en.wikipedia.org/wiki/City_Pop',
      content: `## City pop

City Pop (シティーポップ) is a subgenre of Japanese pop music that emerged in the late 1970s and peaked in popularity during the 1980s. It is characterized by its fusion of various musical styles, including funk, disco, R&B, soft rock, and boogie, often reflecting the urban and sophisticated lifestyle of city dwellers. The genre is known for its polished production, catchy melodies, and nostalgic themes, often evoking a sense of escapism and leisure associated with the vibrant city life.`,
    },
  ],
  related: [
    `How did Japan's economic boom influence the development of City Pop?`,
    `What are the key characteristics of City Pop music?`,
    `How did Japan's economic boom influence the development of City Pop?`,
    `What are the key characteristics of City Pop music?`,
  ],
};

const mock = [
  {
    deepThinking: {
      loading: true,
      content: data.deepThinking.content.slice(0, 20),
    },
  },

  {
    deepThinking: {
      loading: true,
      content: data.deepThinking.content.slice(0, 40),
    },
  },
  {
    deepThinking: {
      loading: true,
      content: data.deepThinking.content.slice(0, 60),
    },
  },
  {
    deepThinking: {
      loading: true,
      content: data.deepThinking.content.slice(0, 80),
    },
  },
  {
    deepThinking: {
      loading: true,
      content: data.deepThinking.content.slice(0, 100),
    },
  },
  {
    deepThinking: {
      loading: true,
      content: data.deepThinking.content.slice(0, 120),
    },
  },
  {
    deepThinking: data.deepThinking,
  },

  {
    deepThinking: data.deepThinking,
    images: data.images.slice(0, 1),
  },
  {
    deepThinking: data.deepThinking,
    images: data.images.slice(0, 2),
  },
  {
    deepThinking: data.deepThinking,
    images: data.images.slice(0, 3),
  },

  {
    deepThinking: data.deepThinking,
    images: data.images.slice(0, 4),
  },

  {
    deepThinking: data.deepThinking,
    images: data.images,
  },
  {
    deepThinking: data.deepThinking,
    images: data.images,
    content: {
      loading: true,
      content: data.content.content.slice(0, 20),
    },
  },
  {
    deepThinking: data.deepThinking,
    images: data.images,
    content: {
      loading: true,
      content: data.content.content.slice(0, 40),
    },
  },
  {
    deepThinking: data.deepThinking,
    images: data.images,
    content: {
      loading: true,
      content: data.content.content.slice(0, 60),
    },
  },
  {
    deepThinking: data.deepThinking,
    images: data.images,
    content: {
      loading: true,
      content: data.content.content.slice(0, 80),
    },
  },
  {
    deepThinking: data.deepThinking,
    images: data.images,
    content: data.content,
  },
  {
    deepThinking: data.deepThinking,
    images: data.images,
    content: data.content,
    sources: data.sources.slice(0, 1),
  },
  {
    deepThinking: data.deepThinking,
    images: data.images,
    content: data.content,
    sources: data.sources,
  },
  {
    deepThinking: data.deepThinking,
    images: data.images,
    content: data.content,
    sources: data.sources,
    related: data.related,
  },
];

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export default async function ({
  messages,
  setMessages,
}: {
  messages: any[];
  setMessages: (messages: any[]) => void;
}) {
  await sleep(500);

  for (const chunk of mock) {
    await sleep(1000);
    setMessages((list) => {
      const query = list[0];
      const answer = list[1];

      return [
        query,
        produce(answer, (draft) => {
          draft.cards[0].data = chunk;
        }),
      ];
    });
  }

  await sleep(100);
}
