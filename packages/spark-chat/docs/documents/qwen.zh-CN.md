---
order: 2
title: 通义千问
group:
  title: 模型接入
  order: 2
---

# 通义千问

Qwen 的模型推理服务支持「兼容 OpenAI 模式」。详见官方文档: [阿里云百炼 - 通义千问](https://help.aliyun.com/zh/model-studio/developer-reference/compatibility-of-openai-with-dashscope)

## 相关参数获取

- 如何获取 baseURL - <https://help.aliyun.com/zh/model-studio/getting-started/what-is-model-studio>
- 如何获取 API Key - <https://help.aliyun.com/zh/model-studio/developer-reference/get-api-key>
- 模型列表 - <https://help.aliyun.com/zh/model-studio/getting-started/models>

## 兼容 OpenAI 模式

是指在接口设计和使用方式上与 OpenAI 的 API 保持一致的模型推理服务。这意味着开发者可以使用与调用 OpenAI 模型相同的代码和方法，来调用这些兼容服务，从而减少开发接入成本。

## 使用 [openai-node](https://github.com/openai/openai-node) 接入

### 安装依赖

```bash
$ npm install openai-node --save
```

### 调用示例

```tsx | pure
import { ConfigProvider, carbonTheme } from '@agentscope-ai/design';
import { Bubble, ChatInput, type TMessage } from '@agentscope-ai/chat';
import { useRef, useState } from 'react';
import OpenAI from 'openai';
import { produce } from 'immer';
import { ChatCompletionMessageParam } from 'openai/resources.mjs';

const client = new OpenAI({
  baseURL: 'https://dashscope.aliyuncs.com/compatible-mode/v1',
  apiKey: 'sk-xxxx', // 请替换成你的 API Key
  dangerouslyAllowBrowser: true, // 允许在浏览器中运行
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

<img src="https://gw.alicdn.com/imgextra/i3/O1CN0180qH4s1WvoGlqDdbx_!!6000000002851-2-tps-2452-1654.png" style="max-width: 50%;" alt="Qwen 集成示例" />

---

## 使用 API 接入

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

启用此`dangerouslyApiKey`选项可能会很危险，因为它会在客户端代码中暴露您的秘密 API 凭据。Web 浏览器本质上不如服务器环境安全，任何有权访问浏览器的用户都可能检查、提取和滥用这些凭据。这可能会导致使用您的凭据进行未经授权的访问，并可能危及敏感数据或功能。以上代码主要是示例代码，实际开发中请不要使用。

更正确的做法是调用大模型的代码在后端（含 apiKey 的配置）。
