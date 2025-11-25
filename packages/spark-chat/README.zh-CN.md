# Alibaba Cloud Spark Chat

**注意**：`@agentscope-ai/design` 和 `@agentscope-ai/chat` 仍在加速推进开源中，我们预计在 2025 年年底完成开源。目前可以通过 npm 使用我们的项目。

[![npm version](https://img.shields.io/npm/v/@ali/agentscope-ai-chat.svg)](https://www.npmjs.com/package/@ali/agentscope-ai-chat)
[![license](https://img.shields.io/npm/l/@ali/agentscope-ai-chat.svg)](https://github.com/your-repo/spark-chat/blob/main/LICENSE)

基于 **Alibaba Cloud Spark Design** 的免费、开源的 React 对话框架，用于构建优秀的 LLM 对话体验。

## ✨ 特性

- 🏆 **源自阿里云百炼最佳实践**：包含了众多我们的想法与真实业务实践，帮助业务快速构建优秀的 LLM 对话体验
- 🤖 **开箱即用的模型对接能力**：轻松对接符合 OpenAI 标准的模型推理服务
- 🧩 **极致的拓展能力**：通过卡片形式（自定义组件）展示模型输出，支持多种格式的输出展示
- 📝 **TypeScript 全覆盖**：采用 TypeScript 开发，提供完整类型支持，提升开发体验与可靠性
- 🎨 **CSS-in-JS 实践**：采用更现代的 CSS-in-JS 样式方案，样式自动按需加载，不强依赖开发者工程化环境配置

## 🚀 快速开始

### 安装

```bash
# 安装依赖
npm install antd --save
npm install @agentscope-ai/design --save
npm install @agentscope-ai/chat --save
```

> **注意**：如果你是阿里内网开发者，请使用：
>
> ```bash
> tnpm install @ali/agentscope-ai-chat @ali/agentscope-ai-design --save
> ```

### 基础使用

```tsx
import { ConfigProvider, carbonTheme } from '@agentscope-ai/design';
import { ChatAnywhere, ChatAnywhereRef, uuid } from '@agentscope-ai/chat';
import { useRef, useCallback } from 'react';

export default function App() {
  const ref = useRef<ChatAnywhereRef>();

  const onSubmit = useCallback(async (data) => {
    // 添加用户消息
    ref.current.updateMessage({
      id: uuid(),
      role: 'user',
      content: data.query,
    });

    // 添加助手回复
    ref.current.updateMessage({
      id: uuid(),
      role: 'assistant',
      content: '这是助手的回复内容',
    });
  }, []);

  return (
    <ConfigProvider {...carbonTheme}>
      <ChatAnywhere ref={ref} onInput={{ onSubmit }} onStop={() => {}} />
    </ConfigProvider>
  );
}
```

## 📦 核心组件

### ChatAnywhere

开箱即用的对话容器，无需关心消息状态管理，快速构建 LLM 对话体验。

```tsx
import { ChatAnywhere, ChatAnywhereRef } from '@agentscope-ai/chat';

// 使用 ref 控制消息更新
const ref = useRef<ChatAnywhereRef>();
ref.current.updateMessage(message);
```

### Bubble

消息气泡组件，支持多种消息类型展示。

```tsx
import { Bubble, DefaultCards } from '@agentscope-ai/chat';

<Bubble message={message} customCards={DefaultCards} />;
```

### Sender

消息发送组件，支持多种输入模式。

```tsx
import { Sender } from '@agentscope-ai/chat';

<Sender onSubmit={handleSubmit} loading={loading} />;
```

### Markdown

Markdown 渲染组件，支持数学公式、代码高亮等。

```tsx
import { Markdown } from '@agentscope-ai/chat';

<Markdown content={markdownContent} />;
```

### Mermaid

流程图渲染组件。

```tsx
import { Mermaid } from '@agentscope-ai/chat';

<Mermaid code={mermaidCode} />;
```

## 🔧 高级功能

### 自定义卡片

通过自定义卡片组件展示特殊内容：

```tsx
import { CustomCardsProvider } from '@agentscope-ai/chat';

const CustomCard = function(props: { data }) {
  return <div>自定义卡片</div>;
}

<CustomCardsProvider cards={{ CustomCard }}>
  <ChatAnywhere />
</CustomCardsProvider>;
```

### 流式响应

支持流式数据更新：

```tsx
import { Stream } from '@agentscope-ai/chat';

const response = await fetch('/api/chat');
for await (const chunk of Stream({ readableStream: response.body })) {
  // ...
  // const answer = {...}
  // ref.current.updateMessage(answer);
}
```

## 🌐 兼容环境

- 现代浏览器
- Electron
- Tauri

| Edge            | Firefox         | Chrome          | Safari          | Opera           | Electron        |
| --------------- | --------------- | --------------- | --------------- | --------------- | --------------- |
| last 2 versions | last 2 versions | last 2 versions | last 2 versions | last 2 versions | last 2 versions |

## 📚 文档

- [概述](./docs/documents/overview.zh-CN.md)
- [ChatAnywhere 使用指南](./docs/documents/chatanywhere.zh-CN.md)
- [百炼智能体接入](./docs/documents/bailian.zh-CN.md)
- [自定义卡片](./docs/documents/customCard.zh-CN.md)
- [Vite 集成](./docs/documents/vite.zh-CN.md)
- [Umi 集成](./docs/documents/umi.zh-CN.md)

## 🔗 相关链接

- [Alibaba Cloud Spark Design](https://design.aliyun.com/)
- [阿里云百炼](https://bailian.console.aliyun.com/)
- [React](https://react.dev/)
- [Ant Design](https://ant.design/)

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

## 📄 许可证

本项目采用 Apache-2.0 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情。
