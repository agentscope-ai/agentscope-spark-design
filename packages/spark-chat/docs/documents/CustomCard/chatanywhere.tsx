import { ChatAnywhere, ChatAnywhereRef, DefaultCards, sleep, TMessage, uuid } from '@agentscope-ai/chat';
import SelectPageCard from "./SelectPageCard";
import PagePVChartCard from "./PagePVChartCard";
import { useCallback, useEffect, useRef } from 'react';
import { useAsyncEffect } from 'ahooks';

export default function () {
  const ref = useRef<ChatAnywhereRef>();

  useAsyncEffect(async () => {
    ref.current.updateMessage({
      id: uuid(),
      role: 'user',
      content: 'I want to View page PV data',
    });

    await sleep(100);

    ref.current.updateMessage({
      id: uuid(),
      role: 'assistant',
      cards: [{
        code: 'SelectPageCard',
        data: {
          pages: ['https://foo.com/page1', 'https://foo.com/page2', 'https://foo.com/page3'],
        }
      }]
    })

  }, []);


  const onSubmit = useCallback(async (data) => {
    ref.current.updateMessage({
      id: uuid(),
      role: 'user',
      content: data.query,
    });
    await sleep(100);

    ref.current.updateMessage({
      id: uuid(),
      role: 'assistant',
      cards: [{
        code: 'PagePVChartCard',
        data: {
          page: data.query,
        }
      }]
    });

  }, []);

  const onStop = useCallback(async () => {

  }, []);

  return <ChatAnywhere
    ref={ref}
    cardConfig={{
      SelectPageCard,
      PagePVChartCard,
    }}
    uiConfig={{}}
    onInput={{
      onSubmit,
    }}
    onStop={onStop}
  >

  </ChatAnywhere>
}