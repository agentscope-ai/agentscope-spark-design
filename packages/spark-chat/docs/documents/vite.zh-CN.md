---
order: 1
title: 在 Vite 中使用
group:
  title: 如何使用
  order: 1
---

# 在 Vite 中使用

<a href="https://cn.vitejs.dev/" target="_blank" rel="noopener noreferrer">Vite</a> 是业界最优秀的 React 应用开发工具之一，本文会尝试在 Vite 创建的工程中使用 Alibaba Cloud Spark Chat。

## 安装和初始化

```bash
$ npm create vite spark-chat-demo
```

选择 React 后，工具会自动初始化一个脚手架并安装 React 项目的各种必要依赖。如果在过程中出现网络问题，请尝试配置代理，或使用其他 npm registry。然后我们进入项目安装依赖并启动。

```bash
$ cd spark-chat-demo
$ npm install
$ npm run dev
```

此时使用浏览器访问 http://localhost:5173/ ，看到 Vite + React 的界面就算成功了。

<img src="https://gw.alicdn.com/imgextra/i2/O1CN013SGv2B1wOzu6obfxI_!!6000000006299-2-tps-2452-1654.png" style="max-width: 50%;" alt="Vite + React 界面" />

## 引入 @agentscope-ai/chat

这是 vite 生成的默认目录结构。请先移除 `App.css` 和 `index.css`后安装依赖。

<Tree>
  <ul>
    <li>public
      <ul>
        <li>vite.svg</li>
      </ul>
    </li>
    <li>src
      <ul>
        <li>assets
          <ul>
            <li>react.svg</li>
          </ul>
        </li>
        <li>App.css</li>
        <li>App.tsx</li>
        <li>index.css</li>
        <li>main.tsx</li>
        <li>logo.svg</li>
      </ul>
    </li>
    <li>index.html</li>
    <li>package.json</li>
    <li>vite.config.ts</li>
  </ul>
</Tree>

```bash
$ cd spark-chat-demo
$ rm src/App.css
$ rm src/index.css
$ npm install antd @agentscope-ai/design @agentscope-ai/chat --save
```

### 修改 `src/App.tsx`

```tsx | pure
import { ConfigProvider, carbonTheme } from '@agentscope-ai/design';
import { Bubble, ChatInput, type TMessage } from '@agentscope-ai/chat';
import { useState } from 'react';

function App() {
  const [messages, setMessages] = useState<TMessage[]>([]);
  const [input, setInput] = useState('');

  const handleSend = (input: string) => {
    setMessages([
      ...messages,
      {
        role: 'user',
        content: input,
        id: Date.now().toString(),
      },
    ]);
    setInput('');
  };

  return (
    <ConfigProvider {...carbonTheme} prefix="spark-chat" prefixCls="spark-chat">
      <div>
        <Bubble.List items={messages} />
        <ChatInput value={input} onChange={setInput} onSubmit={handleSend} />
      </div>
    </ConfigProvider>
  );
}

export default App;
```

### 修改 `src/main.tsx`

```tsx | pure
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
```

OK，现在你应该能看到页面上渲染了一个最基础的对话 UI 了，接下来就可以继续选用其他组件开发应用了。其他工程化配置你可以参考 <a href="https://cn.vitejs.dev/" target="_blank" rel="noopener noreferrer">Vite</a> 的官方文档。

<img src="https://gw.alicdn.com/imgextra/i3/O1CN01T2DkJE1KIczqXgh8l_!!6000000001141-2-tps-2452-1654.png" style="max-width: 50%;" alt="基础对话 UI" />

## FAQ

- 为什么看不见对话列表渲染？
  - `Bubble.List` 和 `ChatInput` 需要指定他们的父元素拥有高度，并且`flex-direction: column`
