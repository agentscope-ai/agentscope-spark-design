import { ChatAnywhere, ChatAnywhereRef, DefaultCards, TMessage, uuid } from '@agentscope-ai/chat';
import { useCallback, useContext, useEffect, useRef } from 'react';
import { SparkAttachmentLine, SparkCopyLine, SparkReplaceLine, SparkThumbsDownLine, SparkThumbsUpLine } from '@agentscope-ai/icons';
import ReactDOM from 'react-dom';
import Header from '../Header';
import Welcome from '../Welcome';
import ModeSelect from '../ModeSelect';
import OptionsSelect from '../OptionsSelect';
import PresetSelect from '../PresetSelect';
import { DemoContext } from '../../context/DemoProvider';
import { produce } from 'immer';
import mock from '../../mock';
import WebDev from '../../cards/WebDev';
import DeepResearch from '../../cards/DeepResearch';
import useStyle from './style';
import { RightPanelPortal } from '../RightPanel';
import Footer from '../../cards/Footer';

export default function Claude() {
  const { styles } = useStyle()
  const { demoContext, setDemoContext, getDemoContext } = useContext(DemoContext)
  const ref = useRef<ChatAnywhereRef>();
  const currentQA = useRef<{
    query?: Partial<TMessage> & { id: string },
    answer?: Partial<TMessage> & { id: string },
  }>({});


  const onSubmit = useCallback(async (data) => {
    ref.current.setLoading(true);

    setDemoContext({ initial: false });
    currentQA.current.answer = undefined;
    currentQA.current.query = {
      id: uuid(),
      cards: [{
        code: 'Text',
        data: {
          content: data.query,
          msgStatus: 'finished',
        }
      }],
      role: 'user',
      msgStatus: 'finished',
    };
    ReactDOM.flushSync(() => {
      ref.current.updateMessage(currentQA.current.query);
    });


    currentQA.current.answer = {
      id: uuid(),
      role: 'assistant',
      content: '',
      cards: [],
      msgStatus: 'generating',
    }

    ref.current.updateMessage(currentQA.current.answer);

    await mock({ getDemoContext, currentQA, ref });
    await sleep(100);

    onFinish('finished');
    ref.current.setLoading(false);
  }, []);

  const onFinish = useCallback((status: 'finished' | 'interrupted' = 'finished') => {
    const prevMessage = ref.current
      .getMessages()
      .find((item) => item.id === currentQA.current.answer.id);

    const nextMessage = produce(prevMessage, (draft) => {
      draft.msgStatus = status;
      (draft.cards || []).forEach(item => {
        item.data.msgStatus = status;
        item.data.loading = false;
      });


      draft.cards.push({
        code: 'Footer',
        data: {
          left: <Footer />
        }
      })
    });

    ref.current.updateMessage(nextMessage);

  }, []);

  const onStop = useCallback(() => { }, []);

  return <div className={styles.container}>
    <div className={styles.chat} style={{ width: demoContext.canvas ? 480 : '100%' }}>
      <ChatAnywhere
        cardConfig={{ WebDev, DeepResearch }}
        uiConfig={{
          disclaimer: 'AI can also make mistakes, so please check carefully and use it with caution',
          header: <Header chat={ref} />,
          welcome: <Welcome />,
        }}
        ref={ref}
        onInput={{
          zoomable: !demoContext.initial,
          morePrefixActions: <OptionsSelect />,
          beforeUI: <ModeSelect />,
          afterUI: <PresetSelect onSubmit={onSubmit} />,
          placeholder: 'please type here',
          onSubmit: onSubmit
        }}
        onStop={onStop}
        onUpload={[{
          multiple: false,
          icon: <SparkAttachmentLine />,
          customRequest(options) {
            options.onSuccess({
              url: URL.createObjectURL(options.file as Blob)
            });
          }
        }]}
      ></ChatAnywhere>
    </div>
    <RightPanelPortal />
  </div>
}



function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}