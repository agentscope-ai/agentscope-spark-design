---
order: 1
title: ChatAnywhere
group:
  title: Advanced Usage
  order: 4
---

# ChatAnywhere

ChatAnywhere is an out-of-the-box chat container built by integrating Alibaba Cloud Spark Chat's basic components. With ChatAnywhere, you no longer need to worry about managing chat message state (such as `setMessages(...)`), and you can build an excellent LLM chat experience more quickly.

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

## Have a try

<code src="../templates/demo/chatanywhereDemo/index.tsx" iframe="700" noConfigProvider compact></code>

## Quick Start

> In `ChatAnywhere`, we no longer need to use React state management to update the conversation flow. Instead, we can use the **core API `updateMessage(...)`** to update on-screen messages in real-time.

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
      id: uuid(), // Use this id to update messages later
      role: 'assistant',
      content: 'assistant content',
    };

    ref.current.updateMessage(answer);

    // 1. Send query
    // 2. Continuously fetch data through SSE or other protocols based on actual backend requirements, and call updateMessage in a loop
    // const response = await fetch();

    // for await (const chunk of Stream({
    //   readableStream: response.body,
    // })) {
    //   ref.current.updateMessage(answer);
    // }
  }, []);

  const onStop = useCallback(async () => {}, []);

  useAsyncEffect(async () => {
    // Suitable for calling backend API to query historical messages and then setting historical messages
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
