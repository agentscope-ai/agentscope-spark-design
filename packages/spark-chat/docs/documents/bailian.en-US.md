---
order: 1
title: Bailian
group:
  title: Agent Integration
  order: 3
---

# Bailian

This guide will introduce how to integrate intelligent agents built on Alibaba Cloud Cloud Bailian with Alibaba Cloud Spark Chat.

## Prerequisites

- How to get baseURL - <https://help.aliyun.com/zh/model-studio/getting-started/what-is-model-studio>
- How to get API Key - <https://help.aliyun.com/zh/model-studio/developer-reference/get-api-key>
- Created intelligent agent application and obtained APP_ID (Alibaba Cloud Cloud Bailian application ID): Get it from the application card on the application management page.
  - <https://help.aliyun.com/zh/model-studio/single-agent-application>
  - <https://bailian.console.aliyun.com/?tab=app#/app-center>

## Workflow Invocation

### Workflow Setup

> The demo is relatively simple, but in practice you can enable various features like RAG, MCP, loop calls, etc.

<img src="https://gw.alicdn.com/imgextra/i1/O1CN01djpE1e280W7hW930J_!!6000000007870-2-tps-2452-1654.png" width="50%" />

### Code Implementation

> The demo uses custom cards to implement a form for collecting user input parameters and executing the workflow

<img src="https://gw.alicdn.com/imgextra/i1/O1CN01n0tmbe1kYp0hcR83z_!!6000000004696-1-tps-1068-720.gif" width="50%" />

```tsx | pure
import {
  ConfigProvider,
  carbonTheme,
  Card,
  Input,
  Select,
  Button,
} from '@agentscope-ai/design';
import {
  Bubble,
  ChatInput,
  Stream,
  type TMessage,
  CustomCardsProvider,
} from '@agentscope-ai/chat';
import { useRef, useState } from 'react';
import { produce } from 'immer';
import './App.css';
import { Flex, Space } from 'antd';
import React from 'react';

const MessagesContext = React.createContext<{
  messages: TMessage[];
  setMessages: React.Dispatch<React.SetStateAction<TMessage[]>>;
  loading?: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}>({
  messages: [],
  setMessages: () => {},
  setLoading: () => {},
  loading: false,
});

function Sender({
  handleSend,
  loading,
}: {
  handleSend: (input: string) => void;
  loading: boolean;
}) {
  const [input, setInput] = useState('');

  return (
    <ChatInput
      value={input}
      onChange={setInput}
      onSubmit={(input) => {
        handleSend(input);
        setInput('');
      }}
      loading={loading}
    />
  );
}

function TranslateStart() {
  const { setMessages, loading, setLoading } =
    React.useContext(MessagesContext);
  const [originText, setOriginText] = useState('');
  const [targetLang, setTargetLang] = useState('English');
  const currentAnswer = useRef<TMessage | null>(null);
  const [disabled, setDisabled] = useState(false);

  return (
    <Card title="Translate Start">
      <Space direction="vertical" size={8}>
        <Flex align="center">
          <label className="w-[80px] flex-none">originText</label>
          <Input
            placeholder="Please enter content to translate"
            value={originText}
            onChange={(e) => setOriginText(e.target.value)}
          />
        </Flex>
        <Flex align="center">
          <label className="w-[80px] flex-none">targetLang</label>
          <Select
            placeholder="Please select target language"
            value={targetLang}
            onChange={(value) => setTargetLang(value)}
            options={[
              { label: 'English', value: 'English' },
              { label: 'Japanese', value: 'Japanese' },
              { label: 'French', value: 'French' },
            ]}
          />
        </Flex>

        <Button
          type="primary"
          disabled={disabled}
          loading={!disabled && loading}
          onClick={async () => {
            setLoading(true);
            const id = 'a' + Date.now().toString();

            currentAnswer.current = {
              role: 'assistant',
              content: '',
              msgStatus: 'generating',
              id,
            };

            setMessages((v) => [...v, currentAnswer.current as TMessage]);

            const response = await fetch(
              `https://dashscope.aliyuncs.com/api/v1/apps/YOUR_APP_ID/completion`,
              {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: `Bearer sk-xxxx`,
                  'X-DashScope-SSE': 'enable',
                },
                body: JSON.stringify({
                  session_id: Date.now().toString(),
                  input: {
                    prompt: 'Start translation',
                    biz_params: {
                      originText: originText,
                      targetLang: targetLang,
                    },
                  },
                  parameters: {
                    incremental_output: false,
                  },
                }),
              },
            );

            if (response.body) {
              for await (const chunk of Stream(
                {
                  readableStream: response.body,
                },
                {},
              )) {
                const data = JSON.parse(chunk.data);

                currentAnswer.current = produce(
                  currentAnswer.current,
                  (draft) => {
                    if (data.output?.finish_reason === 'stop') {
                      draft.msgStatus = 'finished';
                    }
                    draft.content = data.output?.text || '';
                  },
                );
                setMessages((v) =>
                  v.map((item) =>
                    item.id === currentAnswer.current?.id
                      ? currentAnswer.current
                      : item,
                  ),
                );
              }
            }

            setLoading(false);
            setDisabled(true);
          }}
        >
          Translate
        </Button>
      </Space>
    </Card>
  );
}

function App() {
  const [messages, setMessages] = useState<TMessage[]>([]);
  const [loading, setLoading] = useState(false);

  const handleSend = async (input: string) => {
    const query = {
      role: 'user',
      content: input,
      id: 'q' + Date.now().toString(),
    } as TMessage;

    setMessages((v) => [...v, query]);
  };

  return (
    <ConfigProvider {...carbonTheme} prefix="spark-chat" prefixCls="spark-chat">
      <CustomCardsProvider
        cardConfig={{
          TranslateStart,
        }}
      >
        <MessagesContext.Provider
          value={{ messages, setMessages, loading, setLoading }}
        >
          <div className="h-[100vh] p-[20px] flex flex-col">
            <Bubble.List
              items={messages}
              classNames={{
                wrapper: 'flex-1 h-[0]',
              }}
            />
            <div className="mb-[8px]">
              <Button
                onClick={() => {
                  setMessages((v) => [
                    ...v,
                    {
                      role: 'assistant',
                      cards: [{ code: 'TranslateStart' }],
                      id: 'q' + Date.now().toString(),
                    },
                  ]);
                }}
              >
                Translation Mode
              </Button>
            </div>
            <Sender handleSend={handleSend} loading={loading} />
          </div>
        </MessagesContext.Provider>
      </CustomCardsProvider>
    </ConfigProvider>
  );
}

export default App;
```

## Agent Invocation

### Agent Setup

> The demo is relatively simple, but in practice you can enable various features like RAG, MCP, etc.

<img src="https://gw.alicdn.com/imgextra/i2/O1CN01oduDVS1cOjMACqWMp_!!6000000003591-2-tps-2452-1654.png" width="50%" />

### Code Implementation

```tsx | pure
import { ConfigProvider, carbonTheme } from '@agentscope-ai/design';
import { Bubble, ChatInput, Stream, type TMessage } from '@agentscope-ai/chat';
import { useRef, useState } from 'react';
import { produce } from 'immer';
import './App.css';

function Sender({
  handleSend,
  loading,
}: {
  handleSend: (input: string) => void;
  loading: boolean;
}) {
  const [input, setInput] = useState('');

  return (
    <ChatInput
      value={input}
      onChange={setInput}
      onSubmit={(input) => {
        handleSend(input);
        setInput('');
      }}
      loading={loading}
    />
  );
}

function App() {
  const [messages, setMessages] = useState<TMessage[]>([]);
  const [loading, setLoading] = useState(false);
  const sessionIdRef = useRef<string>(Date.now().toString());
  const currentAnswer = useRef<TMessage | null>(null);

  const handleSend = async (input: string) => {
    const query = {
      role: 'user',
      content: input,
      id: 'q' + Date.now().toString(),
    } as TMessage;

    const id = 'a' + Date.now().toString();

    currentAnswer.current = {
      role: 'assistant',
      content: '',
      msgStatus: 'generating',
      id,
    };

    setMessages((v) => [...v, query, currentAnswer.current as TMessage]);
    setLoading(true);

    const response = await fetch(
      `https://dashscope.aliyuncs.com/api/v1/apps/YOUR_APP_ID/completion`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer sk-xxxx`,
          'X-DashScope-SSE': 'enable',
        },
        body: JSON.stringify({
          session_id: sessionIdRef.current,
          input: {
            prompt: 'Recommend some food',
            biz_params: {
              user_prompt_params: {
                city: input,
              },
            },
          },
          parameters: {
            incremental_output: false,
          },
        }),
      },
    );

    if (response.body) {
      for await (const chunk of Stream(
        {
          readableStream: response.body,
        },
        {},
      )) {
        const data = JSON.parse(chunk.data);
        currentAnswer.current = produce(currentAnswer.current, (draft) => {
          if (data.output?.finish_reason === 'stop') {
            draft.msgStatus = 'finished';
          }
          draft.content = data.output?.text || '';
        });
        setMessages((v) =>
          v.map((item) =>
            item.id === currentAnswer.current?.id
              ? currentAnswer.current
              : item,
          ),
        );
      }
    }

    setLoading(false);
  };

  return (
    <ConfigProvider {...carbonTheme} prefix="spark-chat" prefixCls="spark-chat">
      <div className="h-[100vh] p-[20px] flex flex-col">
        <Bubble.List
          items={messages}
          classNames={{
            wrapper: 'flex-1 h-[0]',
          }}
        />
        <Sender handleSend={handleSend} loading={loading} />
      </div>
    </ConfigProvider>
  );
}

export default App;
```

<img src="https://gw.alicdn.com/imgextra/i2/O1CN01tAh5r71D07gMq9kfP_!!6000000000153-2-tps-2452-1654.png" width="50%" />
