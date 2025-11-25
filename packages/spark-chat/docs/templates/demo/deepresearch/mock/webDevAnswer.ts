import { produce } from 'immer';
import sleep from './sleep';
import webDevContent from './webDevContent';

export default async function (currentQA, chatRef) {
  await sleep(2000);

  const prevMessage = chatRef.current
    .getMessages()
    .find((item) => item.id === currentQA.current.answer.id);

  const nextMessage = produce(prevMessage, (draft) => {
    draft.cards.push({
      code: 'Text',
      data: {
        content: 'I am creating a document for your idea.',
        msgStatus: 'finished',
        className: 'claude-clone-font',
      },
    });
    draft.cards.push({
      code: 'WebDev',
      data: {
        loading: true,
        content: '',
        title: currentQA.current.query.cards[0].data.content,
      },
    });
  });

  chatRef.current.updateMessage(nextMessage);

  for (const chunk of mock()) {
    await sleep(chunk.length);

    const prevMessage = chatRef.current
      .getMessages()
      .find((item) => item.id === currentQA.current.answer.id);

    const nextMessage = produce(prevMessage, (draft) => {
      draft.cards[1].data.content = draft.cards[1].data.content + chunk;
    });

    chatRef.current.updateMessage(nextMessage);
  }
}

function mock() {
  let text = webDevContent();
  const res = [];

  while (text.length > 0) {
    const step = Math.floor(Math.random() * 100) + 1;
    const chunk = text.slice(0, step);
    text = text.slice(step);
    res.push(chunk);
  }

  return res;
}
