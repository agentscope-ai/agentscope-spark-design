---
order: 1
title: ChatAnywhere
group:
  title: 进阶使用
  order: 4
---

# ChatAnywhere

ChatAnywhere 是使用 Alibaba Cloud Spark Chat 基础组件整合一起的开箱即用的对话容器，使用 ChatAnywhere 可以不再关心对话消息的状态管理（比如 `setMessages(...)`），同时可以更加快速地构建优秀的 LLM 对话体验。

<div style="display: flex;gap: 16px">
  <div>
    <img src="https://gw.alicdn.com/imgextra/i1/O1CN01hDxvBo1SFRABmCu2q_!!6000000002217-2-tps-2880-1800.png"></img>
  </div>
  <div>
    <img src="https://gw.alicdn.com/imgextra/i1/O1CN011m5rNF1zGhZtJ8NKb_!!6000000006687-2-tps-2880-1800.png"></img>
  </div>
  <div>
    <img src="https://gw.alicdn.com/imgextra/i2/O1CN014r9Tm11JGVY1KeN0H_!!6000000001001-2-tps-2880-1800.png"></img>
  </div>
</div>

## 试一下

<code src="../templates/demo/chatanywhereDemo/index.tsx" iframe="700" noConfigProvider compact></code>

## 快速开始

> 在`ChatAnywhere`里，我们可以不在使用 React 状态管理去更新对话流，而是使用 「**核心 API `updateMessage(...)`」** 即可实时更新上屏消息。

```tsx | pure
import {
  ChatAnywhere,
  ChatAnywhereRef,
  DefaultCards,
  sleep,
  TMessage,
  uuid,
} from '@agentscope-ai/chat';
import { useCallback, useEffect, useRef } from 'react';
import { useAsyncEffect } from 'ahooks';

export default function () {
  const ref = useRef<ChatAnywhereRef>();

  const onSubmit = useCallback(async (data) => {
    ref.current.updateMessage({
      id: uuid(),
      role: 'user',
      content: data.query,
    });
    await sleep(100);

    const answer = {
      id: uuid(), // 后续使用这个 id 来更新消息
      role: 'assistant',
      content: 'assistant content',
    };

    ref.current.updateMessage(answer);

    // 1. 发送 query
    // 2. 根据实际的后端要求通过 SSE 等协议持续获取数据，循环调用 updateMessage
    // const response = await fetch();

    // for await (const chunk of Stream({
    //   readableStream: response.body,
    // })) {
    //   ref.current.updateMessage(answer);
    // }
  }, []);

  const onStop = useCallback(async () => {}, []);

  useAsyncEffect(async () => {
    // 适合调用后端接口查询历史消息后设置历史消息
    ref.current.updateMessage({
      id: uuid(),
      role: 'user',
      content: 'I want to View page PV data',
    });
  }, []);

  return (
    <ChatAnywhere
      ref={ref}
      uiConfig={{}}
      onInput={{
        onSubmit,
      }}
      onStop={onStop}
    ></ChatAnywhere>
  );
}
```

## API & Types

### TSession

<ApiParser source="../../components/ChatAnywhere/hooks/types.ts" id="TSession"></ApiParser>

### TMessage

<ApiParser source="../../components/ChatAnywhere/hooks/types.ts" id="TMessage"></ApiParser>

### TMessageCard

<ApiParser source="../../components/ChatAnywhere/hooks/types.ts" id="TMessageCard"></ApiParser>

### ChatAnywhere Props

<ApiParser source="../../components/ChatAnywhere/hooks/types.ts" id="IChatAnywhereConfig"></ApiParser>

### IChatAnywhereConfigUIConfig

<ApiParser source="../../components/ChatAnywhere/hooks/types.ts" id="IChatAnywhereConfigUIConfig"></ApiParser>

### IChatAnywhereConfigOnInput

<ApiParser source="../../components/ChatAnywhere/hooks/types.ts" id="IChatAnywhereConfigOnInput"></ApiParser>

### IChatAnywhereConfigOnUpload

<ApiParser source="../../components/ChatAnywhere/hooks/types.ts" id="IChatAnywhereConfigOnUpload"></ApiParser>

### ChatAnywhereRef

<ApiParser source="../../components/ChatAnywhere/hooks/types.ts" id="IChatAnywhereRef"></ApiParser>
