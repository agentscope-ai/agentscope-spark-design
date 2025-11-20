import { produce } from 'immer';
import sleep from './sleep';

const mock = () => {
  let text = `City Pop, short for City Pop, is a genre of music that originated in Japan during the late 1970s and early 1980s. It blends elements of jazz, folk, easy listening, and AOR (Adult Oriented Rock) with a distinctly urban feel. The term "City Pop" often evokes images of the sophisticated, stylish, and sometimes nostalgic lifestyle of Tokyo and other major Japanese cities during this period.
City Pop is characterized by its smooth melodies, mellow rhythms, and often dreamy or introspective lyrics. Common themes include city life, summer vibes, nature, and romantic encounters. The music is frequently associated with a particular aesthetic that reflects the fashion, design, and cultural trends of urban Japan in the 1980s.
Some notable City Pop artists include Mariya Takeuchi, known for her iconic song " Plastic Love," and Joe Hisaishi, a composer famous for his work on Studio Ghibli films, though he is not strictly considered a City Pop artist.
Today, City Pop has experienced a resurgence in popularity, particularly among younger generations who appreciate its unique sound and the nostalgic value it holds.

City Pop, short for City Pop, is a genre of music that originated in Japan during the late 1970s and early 1980s. It blends elements of jazz, folk, easy listening, and AOR (Adult Oriented Rock) with a distinctly urban feel. The term "City Pop" often evokes images of the sophisticated, stylish, and sometimes nostalgic lifestyle of Tokyo and other major Japanese cities during this period.
City Pop is characterized by its smooth melodies, mellow rhythms, and often dreamy or introspective lyrics. Common themes include city life, summer vibes, nature, and romantic encounters. The music is frequently associated with a particular aesthetic that reflects the fashion, design, and cultural trends of urban Japan in the 1980s.
Some notable City Pop artists include Mariya Takeuchi, known for her iconic song " Plastic Love," and Joe Hisaishi, a composer famous for his work on Studio Ghibli films, though he is not strictly considered a City Pop artist.
Today, City Pop has experienced a resurgence in popularity, particularly among younger generations who appreciate its unique sound and the nostalgic value it holds.
`;

  const res = [];

  while (text.length > 0) {
    const step = Math.floor(Math.random() * 100) + 1;
    const chunk = text.slice(0, step);
    text = text.slice(step);
    res.push(chunk);
  }

  return res;
};

export default async function (currentQA, chatRef) {
  for (const chunk of mock()) {
    await sleep(chunk.length * 5);

    const prevMessage = chatRef.current
      .getMessages()
      .find((item) => item.id === currentQA.current.answer.id);

    const nextMessage = produce(prevMessage, (draft) => {
      if (draft.cards.length === 0) {
        draft.cards.push({
          code: 'Text',
          data: {
            content: chunk,
            msgStatus: 'generating',
            className: 'claude-clone-font',
          },
        });
      } else {
        draft.cards[0].data.content = draft.cards[0].data.content + chunk;
      }
    });

    chatRef.current.updateMessage(nextMessage);
  }
}
