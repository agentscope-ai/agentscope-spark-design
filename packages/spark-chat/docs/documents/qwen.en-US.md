---
order: 2
title: Qwen
group:
  title: Model Integration
  order: 2
---

# Qwen

Qwen's model inference service supports the "OpenAI-compatible mode". For details, please refer to the official documentation: [Alibaba Cloud Cloud Bailian - Qwen](https://help.aliyun.com/zh/model-studio/developer-reference/compatibility-of-openai-with-dashscope).

## Getting Relevant Parameters

- How to get the baseURL - <https://help.aliyun.com/zh/model-studio/getting-started/what-is-model-studio>
- How to get the API Key - <https://help.aliyun.com/zh/model-studio/developer-reference/get-api-key>
- Model list - <https://help.aliyun.com/zh/model-studio/getting-started/models>

## OpenAI-compatible Mode

It refers to a model inference service that maintains consistency with OpenAI's API in terms of interface design and usage methods. This means developers can use the same code and methods for calling OpenAI models to call these compatible services, thereby reducing development and integration costs.

## Integration Using [openai-node](https://github.com/openai/openai-node)

### Install Dependencies

```bash
$ npm install openai-node --save
```

### Call Example Using openai-node

```tsx | pure
import { ConfigProvider, carbonTheme } from '@agentscope-ai/design';
import { Bubble, ChatInput, type TMessage } from '@agentscope-ai/chat';
import { useRef, useState } from 'react';
import OpenAI from 'openai';
import { produce } from 'immer';
import { ChatCompletionMessageParam } from 'openai/resources.mjs';

const client = new OpenAI({
  baseURL: 'https://dashscope.aliyuncs.com/compatible-mode/v1',
  apiKey: 'sk-xxxx', // Please replace with your API Key
  dangerouslyAllowBrowser: true, // Allow running in the browser
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

function App() {
  const [messages, setMessages] = useState<TMessage[]>([]);
  const [loading, setLoading] = useState(false);

  const currentAnswer = useRef<TMessage | null>(null);

  const handleSend = async (input: string) => {
    const id = 'a' + Date.now().toString();
    const query = {
      role: 'user',
      content: input,
      id: 'q' + Date.now().toString(),
    } as TMessage;

    currentAnswer.current = {
      role: 'assistant',
      content: '',
      msgStatus: 'generating',
      id,
    };

    setMessages((v) => [...v, query, currentAnswer.current as TMessage]);
    setLoading(true);

    const stream = await client.chat.completions.create({
      model: 'qwen-plus',
      messages: [...messages, query] as ChatCompletionMessageParam[],
      stream: true,
    });

    for await (const chunk of stream) {
      currentAnswer.current = produce(currentAnswer.current, (draft) => {
        if (chunk.choices[0]?.finish_reason === 'stop') {
          draft.msgStatus = 'finished';
        }
        draft.content += chunk.choices[0]?.delta?.content || '';
      });
      setMessages((v) =>
        v.map((item) =>
          item.id === currentAnswer.current?.id ? currentAnswer.current : item,
        ),
      );
    }

    setLoading(false);
  };

  return (
    <ConfigProvider {...carbonTheme} prefix="spark-chat" prefixCls="spark-chat">
      <div className="h-[80vh] m-[20px] flex flex-col">
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

<img src="https://gw.alicdn.com/imgextra/i3/O1CN0180qH4s1WvoGlqDdbx_!!6000000002851-2-tps-2452-1654.png" style="max-width: 50%;" alt="Qwen integration example" />

---

## Call Example Using API

```tsx | pure
import { ConfigProvider, carbonTheme } from '@agentscope-ai/design';
import {
  Bubble,
  ChatInput,
  Stream,
  type TMessage,
} from '@agentscope-ai/chat';
import { useRef, useState } from 'react';
import { produce } from 'immer';

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

  const currentAnswer = useRef<TMessage | null>(null);

  const handleSend = async (input: string) => {
    const id = 'a' + Date.now().toString();
    const query = {
      role: 'user',
      content: input,
      id: 'q' + Date.now().toString(),
    } as TMessage;

    currentAnswer.current = {
      role: 'assistant',
      content: '',
      msgStatus: 'generating',
      id,
    };

    setMessages((v) => [...v, query, currentAnswer.current as TMessage]);
    setLoading(true);

    const response = await fetch(
      'https://dashscope.aliyuncs.com/compatible-mode/v1/chat/completions',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer sk-xxxx`,
        },
        body: JSON.stringify({
          model: 'qwen-plus',
          messages: [...messages, query],
          stream: true,
        }),
      },
    );

    if (response.body) {
      for await (const chunk of Stream(
        {
          readableStream: response.body,
        },
        {
          openaiCompatible: true,
        },
      )) {
        if (chunk.data === '[DONE]') {
          break;
        }
        const data = JSON.parse(chunk.data);
        currentAnswer.current = produce(currentAnswer.current, (draft) => {
          if (data.choices[0]?.finish_reason === 'stop') {
            draft.msgStatus = 'finished';
          }
          draft.content += data.choices[0]?.delta?.content || '';
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
      <div className="h-[80vh] m-[20px] flex flex-col">
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

## dangerouslyAllowBrowser

Enabling the `dangerouslyAllowBrowser` option can be risky because it exposes your secret API credentials in client-side code. Web browsers are inherently less secure than server environments, and any user with access to the browser may be able to inspect, extract, and misuse these credentials. This could lead to unauthorized access using your credentials and potentially compromise sensitive data or functionality. The above code is primarily for demonstration purposes and should not be used in actual development.

A more appropriate approach is to place the code that calls the large model on the backend (including the apiKey configuration).
