---
order: 3
title: Others
group:
  title: Model Integration
  order: 2
---

# Others

As a UI library, Alibaba Cloud Spark Chat does not strictly require the conversation service backend to fully follow "OpenAI-compatible mode". You can use various common application layer protocols, such as HTTP (SSE), WebSocket, etc., to connect to LLM conversation services.

Among these application layer protocols, we typically use SSE. Therefore, Alibaba Cloud Spark Chat also provides corresponding tools to help developers solve communication problems.

## Stream Parsing Tool

```tsx | pure
import { Stream } from '@agentscope-ai/chat';

async function request() {
  const response = await fetch();
  // ...
  // .....

  for await (const chunk of Stream({
    readableStream: response.body,
  })) {
    // Your protocol
    // Update UI data here
    console.log(chunk);
  }
}
```
