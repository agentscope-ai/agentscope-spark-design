import React, { useCallback, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import { Card, Flex, Statistic, UploadFile, Input } from 'antd';
import { Button } from '@agentscope-ai/design';
import { useMount } from 'ahooks';
import compact from 'lodash/compact';

import {
  ChatAnywhere,
  ChatAnywhereRef,
  uuid,
  Stream,
  TMessage,
  createCard,
  DefaultCards,
  Welcome,
  useChatAnywhere
} from '@agentscope-ai/chat';
import { SparkAttachmentLine, SparkDeepThinkLine, SparkReplaceLine } from '@agentscope-ai/icons';

import Header from '../Header';
import sessionLocalStorage from '../sessionLocalStorage';
import { useDemoContext } from '../DemoContext';

import { createGlobalStyle } from 'antd-style';

const Style = createGlobalStyle`
.sps-chat-anywhere-chat-welcome {
  height: auto !important;
}
`

export default function () {
  const ref = useRef<ChatAnywhereRef>();
  // @ts-ignore
  window.ref = ref;

  const { demoContext, getDemoContext, setDemoContext } = useDemoContext();

  const currentQA = useRef<{
    query?: TMessage,
    answer?: TMessage,
    abortController?: AbortController;
  }>({});


  useMount(() => {
    ref.current.updateSession(
      sessionLocalStorage.get()
    );
  })


  const onFinish = useCallback((status: 'finished' | 'interrupted' = 'finished', usage?: any) => {
    currentQA.current.answer.msgStatus = status;
    currentQA.current.answer.cards = currentQA.current.answer.cards.map(item => {
      if (item.code === 'Text') {
        return createCard('Text', {
          ...item.data,
          msgStatus: status,
        });
      } else if (item.code === 'DeepThink') {
        return createCard('DeepThink', {
          ...item.data,
          loading: false,
        });
      } else {
        return item;
      }
    });

    if (status === 'interrupted') {
      currentQA.current.answer.cards.push(
        createCard('Interrupted', {})
      );
    }

    currentQA.current.answer.cards.push(
      createCard('Footer', {
        left: <DefaultCards.FooterActions data={[
          {
            icon: <SparkReplaceLine />, label: '重新生成', onClick: () => {
              onRegenerate(currentQA.current.answer);
            }
          },
        ]} />,
        right: usage ? <DefaultCards.FooterCount data={[['输入tokens', usage.prompt_tokens], ['输出tokens', usage.completion_tokens]]} ></DefaultCards.FooterCount> : null

      })
    )
    ref.current.setLoading(false);
    ReactDOM.flushSync(() => {
      ref.current.updateMessage(currentQA.current.answer);
    });

    saveToLocalStorage();
  }, [demoContext]);

  const saveToLocalStorage = useCallback(async () => {
    // 将当前的消息列表同步到当前 session 中
    ReactDOM.flushSync(() => {
      ref.current.updateSessionMessages(ref.current.getMessages());
    });

    sessionLocalStorage.set(ref.current.getSession());
  }, [demoContext]);

  const chat = useCallback(async (messages: TMessage[]) => {

    currentQA.current.answer = {
      id: uuid(),
      cards: [],
      content: '',
      role: 'assistant',
      msgStatus: 'generating',
    }

    ref.current.updateMessage(currentQA.current.answer);

    currentQA.current.abortController = new AbortController();

    const requestMessages = messages.map(msg => {
      return {
        ...msg,
        content: msg.content || (msg.cards || []).reduce((p, c) => { return p + (c.code === 'Text' ? c.data.content : '') }, '')
      };
    });


    const response = await fetch('https://dashscope.aliyuncs.com/compatible-mode/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${getDemoContext().apikey}`
      },
      body: JSON.stringify({
        model: getDemoContext().model,
        enable_thinking: getDemoContext().enable_thinking,
        messages: requestMessages,
        stream: true,
        stream_options: {
          include_usage: true,

        },
      }),
      signal: currentQA.current.abortController.signal
    });


    if (response.status !== 200) return;

    let content = '';
    let reasoning_content = '';
    for await (const chunk of Stream({
      readableStream: response.body,
    }, {
      openaiCompatible: true,
    })) {

      if (currentQA.current.answer.msgStatus === 'interrupted') {
        currentQA.current.abortController.abort();
        break;
      }

      if (chunk.data === '[DONE]') {
        onFinish('finished')
        break;
      }

      const data = JSON.parse(chunk.data);
      if (data.usage) {
        onFinish('finished', data.usage);
        break;
      }

      content += data.choices[0]?.delta.content || '';
      reasoning_content += data.choices[0]?.delta.reasoning_content || '';

      currentQA.current.answer.cards = compact([
        reasoning_content && createCard('DeepThink', {
          content: reasoning_content,
          loading: !content,
        }),
        content && createCard('Text', {
          content: content,
          typing: true,
          msgStatus: 'generating'
        })
      ])


      ref.current.updateMessage(currentQA.current.answer);
    }
  }, [demoContext]);

  const onInput = useCallback(async (data: { query: string; fileList?: UploadFile[][] }) => {
    if (!getDemoContext().apikey) {
      document.dispatchEvent(new CustomEvent('settingOpen'));
      return;
    }

    clearFooter();
    currentQA.current.answer = undefined;
    currentQA.current.query = {
      id: uuid(),
      cards: [{
        code: 'Text',
        data: {
          content: data.query,
          msgStatus: 'finished',
          // raw: true,
        }
      }],
      role: 'user',
      msgStatus: 'finished',
    };

    if (data.fileList?.length) {
      const images = [];
      const files = [];
      // @ts-ignore
      const allFileList = data.fileList.reduce((p, c) => [...p, ...c], [])
      allFileList.forEach(file => {
        if (file.type.startsWith('image')) {
          images.push(file)
        } else {
          files.push(file)
        }
      })

      if (images.length) {
        currentQA.current.query.cards.push(createCard('Images', images.map(item => {
          return item.response
        })))
      }

      if (files.length) {
        currentQA.current.query.cards.push(
          createCard('Files', files.map(item => {
            return {
              filename: item.name,
              bytes: item.size
            }
          }))
        )
      }
    }

    ref.current.setLoading(true);


    ReactDOM.flushSync(() => {
      ref.current.updateMessage(currentQA.current.query);
    });

    ref.current.scrollToBottom();
    chat(ref.current.getMessages());
  }, [demoContext]);

  const onStop = useCallback(() => {
    onFinish('interrupted');
  }, [demoContext]);

  const clearFooter = useCallback(() => {
    try {
      currentQA.current.answer.cards = currentQA.current.answer.cards.filter(item => item.code !== 'Footer');
      ref.current.updateMessage(currentQA.current.answer);
    } catch (error) {
    }
  }, [demoContext]);

  const onRegenerate = useCallback((msg: Partial<TMessage>) => {
    ReactDOM.flushSync(() => {
      ref.current.removeMessage(msg);
    });
    const messages = ref.current.getMessages();
    chat(messages);
  }, [demoContext]);

  const enable_thinking = demoContext.enable_thinking;

  const [onUpload, setOnUpload] = useState([]);

  return <div style={{ height: '100vh' }}>
    <Style />
    <ChatAnywhere
      cardConfig={{ MyCard }}
      uiConfig={{
        welcome: <Welcome
          style={{ marginTop: 'calc(50vh - 128px)' }}
          title="Nice to meet you!"
          desc="How can I help you today?"
        />,
        disclaimer: 'AI can also make mistakes, so please check and use it carefully',
        header: <Header />,
        logo: <div style={{ fontFamily: 'Montserrat', fontWeight: 'bold' }}>Spark Chat</div>,
        quickInput: <>
          <Button size="small" onClick={() => {
            ReactDOM.flushSync(() => {
              ref.current.updateMessage({
                id: uuid(),
                cards: [
                  {
                    code: 'MyCard',
                    data: [
                      ['MyCard', 10000]
                    ],
                  },
                ],
                role: 'assistant',
                msgStatus: 'finished',
              })

            })
            ref.current.scrollToBottom();
          }}>quickInput</Button>
          <Button size="small" onClick={() => {

          }}>test case A</Button>
          <Button size="small">test case B</Button>
        </>
      }}
      ref={ref}
      onInput={{
        morePrefixActions: <>
          {
            enable_thinking !== undefined ?
              <Button type="text" color={enable_thinking ? 'primary' : 'default'} variant={enable_thinking ? 'filled' : 'text'} icon={<SparkDeepThinkLine />} style={{ padding: '0 6px', gap: 6 }} onClick={() => setDemoContext({ enable_thinking: !enable_thinking })}>DeepThink</Button>
              : null
          }
        </>,
        onSubmit: onInput,
        maxLength: 100000,
        beforeSubmit: () => Promise.resolve(true),
        zoomable: true,
      }}
      onStop={onStop}
      onRegenerate={onRegenerate}
      onSessionKeyChange={(currentSessionKey) => {
        currentQA.current.answer = undefined;
        currentQA.current.query = undefined;
        sessionLocalStorage.set({ currentSessionKey });
      }}
      onUpload={[{
        multiple: false,
        icon: <SparkAttachmentLine />,
        customRequest(options) {
          options.onSuccess({
            url: URL.createObjectURL(options.file as Blob)
          });
        }
      }, {
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
}


function MyCard(props) {
  const onInput = useChatAnywhere(v => v.onInput);

  const [v, sv] = useState('');
  return <div><Card title="my card" size="small" >
    <Flex gap={32}>
      {props.data.map((item) => {
        return <Statistic title={item[0]} value={item[1]} key={item[0]} />
      })}
    </Flex>
    <br />
    <Flex gap={8}>
      <Input placeholder="请输入" onChange={e => sv(e.target.value)} /> <Button onClick={() => {
        onInput.onSubmit({ query: v });
      }}>提交</Button>
    </Flex>
  </Card></div>;
}