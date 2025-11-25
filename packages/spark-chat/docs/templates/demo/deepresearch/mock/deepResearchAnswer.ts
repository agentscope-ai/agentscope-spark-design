import { produce } from 'immer';
import deepResearchContent from './deepResearchContent';
import sleep from './sleep';

export default async function (currentQA, chatRef) {
  await sleep(1000);

  const prevMessage = chatRef.current
    .getMessages()
    .find((item) => item.id === currentQA.current.answer.id);

  const nextMessage = produce(prevMessage, (draft) => {
    draft.cards.push({
      code: 'Text',
      data: {
        content: 'I am conducting in-depth research on the topic you provided.',
        msgStatus: 'finished',
        className: 'claude-clone-font',
      },
    });

    draft.cards.push({
      code: 'DeepResearch',
      data: {
        data: {
          title: 'loading...',
          steps: [],
        },
      },
    });
  });

  chatRef.current.updateMessage(nextMessage);
  await sleep(100);

  for (const chunk of mock()) {
    await sleep(1000);

    const prevMessage = chatRef.current
      .getMessages()
      .find((item) => item.id === currentQA.current.answer.id);

    const nextMessage = produce(prevMessage, (draft) => {
      draft.cards[1].data.data = chunk;
    });

    chatRef.current.updateMessage(nextMessage);
  }
}

function mock() {
  const steps = [
    {
      title: deepResearchContent.title,
      steps: [],
    },
    {
      title: deepResearchContent.title,
      steps: deepResearchContent.steps.map((item) => ({
        ...item,
        status: 'RUNNING',
      })),
    },
    {
      title: deepResearchContent.title,
      steps: deepResearchContent.steps.map((item, index) => {
        if (index > 0) return { ...item, status: 'RUNNING' };
        return { ...item, status: 'FINISHED' };
      }),
    },
    {
      title: deepResearchContent.title,
      steps: deepResearchContent.steps.map((item, index) => {
        if (index > 1) return { ...item, status: 'RUNNING' };
        return { ...item, status: 'FINISHED' };
      }),
    },
    {
      title: deepResearchContent.title,
      steps: deepResearchContent.steps.map((item, index) => {
        return { ...item, status: 'FINISHED' };
      }),
    },
    deepResearchContent,
  ];

  return steps;
}
