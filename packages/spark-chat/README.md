# Alibaba Cloud Spark Chat

**Note**: `@agentscope-ai/design` and `@agentscope-ai/chat` are actively progressing towards open source, with completion expected by the end of 2025. Currently, you can access our projects through npm.

[![npm version](https://img.shields.io/npm/v/@ali/agentscope-ai-chat.svg)](https://www.npmjs.com/package/@ali/agentscope-ai-chat)
[![license](https://img.shields.io/npm/l/@ali/agentscope-ai-chat.svg)](https://github.com/your-repo/spark-chat/blob/main/LICENSE)

A free, open-source React chat framework based on **Alibaba Cloud Spark Design**, designed for building excellent LLM conversation experiences.

## ✨ Features

- 🏆 Built on Alibaba Cloud Bailian best practices: Incorporates our team's extensive experience and real-world business solutions, enabling rapid development of excellent LLM conversation experiences.
- 🤖 Out-of-the-box model integration capabilities: Easily integrate with model inference services that comply with OpenAI standards.
- 🧩 Ultimate extensibility: Present model outputs through customizable card components, supporting diverse output display formats.
- 📝 Full TypeScript coverage: Developed with TypeScript, providing complete type support to enhance development experience and reliability.
- 🎨 Use Modern CSS-in-JS: Implements a contemporary CSS-in-JS styling solution with automatic on-demand loading, minimizing dependencies on developer's build configuration.

## 🚀 Quick Start

### Method 1: Using CLI Tool (Recommended)

The quickest way is to use our CLI tool:

```bash
# Option 1: Install globally (recommended)
npm install -g @agentscope-ai/chat
agentscope-runtime-webui -p 3000

# Option 2: Use npx (no installation required)
npx @agentscope-ai/chat agentscope-runtime-webui -p 3000

# Option 3: Local development (npm link first)
npm link
agentscope-runtime-webui -p 3000
```

**Common Command Examples:**

```bash
# Start with default configuration (port 3000)
agentscope-runtime-webui

# Specify port
agentscope-runtime-webui --port 8080

# Specify backend API URL
agentscope-runtime-webui --url http://api.example.com

# Specify authentication token
agentscope-runtime-webui --token your-auth-token

# Combine options
agentscope-runtime-webui -p 8080 -u http://api.example.com -t your-token
```

**CLI Options:**

| Option | Short | Description | Default |
|--------|-------|-------------|---------|
| `--port` | `-p` | Specify server port | `3000` |
| `--url` | `-u` | Specify backend API URL | - |
| `--token` | `-t` | Specify authentication token | - |

### Method 2: Integrate into Project

#### Installation

```bash
# Install dependencies
npm install antd --save
npm install @agentscope-ai/design --save
npm install @agentscope-ai/chat --save
```

> **Note**: If you are an Alibaba internal developer, please use:
>
> ```bash
> tnpm install @ali/agentscope-ai-chat @ali/agentscope-ai-design --save
> ```

#### Basic Usage

```tsx
import { ConfigProvider, carbonTheme } from '@agentscope-ai/design';
import { ChatAnywhere, ChatAnywhereRef, uuid } from '@agentscope-ai/chat';
import { useRef, useCallback } from 'react';

export default function App() {
  const ref = useRef<ChatAnywhereRef>();

  const onSubmit = useCallback(async (data) => {
    // Add user message
    ref.current.updateMessage({
      id: uuid(),
      role: 'user',
      content: data.query,
    });

    // Add assistant reply
    ref.current.updateMessage({
      id: uuid(),
      role: 'assistant',
      content: 'This is the assistant reply content',
    });
  }, []);

  return (
    <ConfigProvider {...carbonTheme}>
      <ChatAnywhere ref={ref} onInput={{ onSubmit }} onStop={() => {}} />
    </ConfigProvider>
  );
}
```

## 📦 Core Components

### ChatAnywhere

An out-of-the-box chat container that eliminates the need to manage message state, enabling rapid development of LLM conversation experiences.

```tsx
import { ChatAnywhere, ChatAnywhereRef } from '@agentscope-ai/chat';

// Use ref to control message updates
const ref = useRef<ChatAnywhereRef>();
ref.current.updateMessage(message);
```

### Bubble

Message bubble component supporting various message type displays.

```tsx
import { Bubble, DefaultCards } from '@agentscope-ai/chat';

<Bubble message={message} customCards={DefaultCards} />;
```

### Sender

Message sending component supporting multiple input modes.

```tsx
import { Sender } from '@agentscope-ai/chat';

<Sender onSubmit={handleSubmit} loading={loading} />;
```

### Markdown

Markdown rendering component supporting mathematical formulas, code highlighting, and more.

```tsx
import { Markdown } from '@agentscope-ai/chat';

<Markdown content={markdownContent} />;
```

### Mermaid

Flowchart rendering component.

```tsx
import { Mermaid } from '@agentscope-ai/chat';

<Mermaid code={mermaidCode} />;
```

## 🔧 Advanced Features

### Custom Cards

Display special content through custom card components:

```tsx
import { CustomCardsProvider } from '@agentscope-ai/chat';

const CustomCard = function(props: { data }) {
  return <div>Custom Card</div>;
}

<CustomCardsProvider cards={{ CustomCard }}>
  <ChatAnywhere />
</CustomCardsProvider>;
```

### Streaming Response

Support streaming data updates:

```tsx
import { Stream } from '@agentscope-ai/chat';

const response = await fetch('/api/chat');
for await (const chunk of Stream({ readableStream: response.body })) {
  // ...
  // const answer = {...}
  // ref.current.updateMessage(answer);
}
```

## 🌐 Compatible Environments

- Modern browsers
- Electron
- Tauri

| Edge            | Firefox         | Chrome          | Safari          | Opera           | Electron        |
| --------------- | --------------- | --------------- | --------------- | --------------- | --------------- |
| last 2 versions | last 2 versions | last 2 versions | last 2 versions | last 2 versions | last 2 versions |

## 📚 Documentation

- [Overview](./docs/documents/overview.en-US.md)
- [ChatAnywhere Usage Guide](./docs/documents/chatanywhere.en-US.md)
- [Bailian Agent Integration](./docs/documents/bailian.en-US.md)
- [Custom Cards](./docs/documents/customCard.en-US.md)
- [Vite Integration](./docs/documents/vite.en-US.md)
- [Umi Integration](./docs/documents/umi.en-US.md)

## 🔗 Related Links

- [Alibaba Cloud Spark Design](https://design.aliyun.com/)
- [Alibaba Cloud Bailian](https://bailian.console.aliyun.com/)
- [React](https://react.dev/)
- [Ant Design](https://ant.design/)

## 🤝 Contributing

We welcome Issue submissions and Pull Requests!

## 📄 License

This project is licensed under the Apache-2.0 License - see the [LICENSE](LICENSE) file for details.
