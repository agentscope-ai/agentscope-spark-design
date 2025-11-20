---
order: 2
title: Usage with Umi
group:
  title: How to use
  order: 1
---

# Usage with Umi

In real-world project development, you may also need build tools, routing solutions, CSS solutions, state management, request libraries and strategies, internationalization, permission management, icon solutions, and more to complete a full-featured project. We recommend using <a href="https://umijs.org/" target="_blank" rel="noopener noreferrer">Umi</a>, a React-based enterprise-level application framework, to address these needs.

This article will guide you to create a simple application from scratch using Umi and Alibaba Cloud Spark Chat.

## Installation and Initialization

```bash
$ mkdir spark-chat-demo-umi
$ cd spark-chat-demo-umi
$ npm create umi
```

Choose "Simple App" here because we want to start from scratch.

```bash
? Pick Umi App Template › - Use arrow-keys. Return to submit.
❯   Simple App
    Ant Design Pro
    Vue Simple App
```

You can choose "npm" to start directly, or select other package management tools.

```bash
? Pick Npm Client › - Use arrow-keys. Return to submit.
❯   npm
    cnpm
    tnpm
    yarn
    pnpm
```

For users in China, we recommend choosing "taobao", otherwise choose "npm". The taobao registry typically provides faster dependency installation.

```bash
? Pick Npm Registry › - Use arrow-keys. Return to submit.
    npm
❯   taobao
```

Then the tool will automatically install dependencies and execute Umi's initialization script. Before starting the project, let's install some additional dependencies that will be used in this tutorial.

```bash
$ npm install antd @agentscope-ai/design @agentscope-ai/chat --save

```

After completion, execute the following command to start the project. Follow the prompts and click the URL in the command line, which will automatically open the browser. If successful, you will see the following interface.

```bash
$ npm run dev
umi dev
info  - Umi v4.4.12
        ╔════════════════════════════════════════════════════╗
        ║ App listening at:                                  ║
        ║  >   Local: http://localhost:8000                  ║
ready - ║  > Network: http://*********:8000                  ║
        ║                                                    ║
        ║ Now you can open browser with the above addresses↑ ║
        ╚════════════════════════════════════════════════════╝
```

<img src="https://gw.alicdn.com/imgextra/i4/O1CN011GmAwE1q7Eqt9vDUQ_!!6000000005448-2-tps-2452-1654.png" style="max-width: 50%;" alt="Umi project structure" />

## Create Chat Route

We can create routes using commands.

```bash
npx umi g page chat
Write: src/pages/chat.tsx
Write: src/pages/chat.less
```

Then modify the configuration file `.umirc.ts` to add the new route declaration.

```diff | pure
import { defineConfig } from 'umi';

export default defineConfig({
  routes: [
    { path: '/', component: 'index' },
    { path: '/docs', component: 'docs' },
+   { path: '/chat', component: 'chat' },
  ],
  npmClient: 'npm',
});
```

Since the scaffold uses configuration-based routing by default, as the name suggests, routes are configured line by line. Although more verbose, it offers higher flexibility. This approach requires adding a routes field in the configuration. For details, see <a href="https://umijs.org/docs/guides/routes" target="_blank">Umi Documentation - Routes</a>. Additionally, Umi also supports convention-based routing, where the file system structure defines the routing, so routes take effect without explicit configuration.

Then we edit the `src/layouts/index.tsx` file and add navigation to the `/chat` path in the global layout route.

```diff | pure
<li>
  <Link to="/docs">Docs</Link>
</li>
+ <li>
+   <Link to="/chat">Chat</Link>
+ </li>
```

## Enable Tailwind CSS Plugin

To facilitate subsequent project development, we enable the [Tailwind CSS plugin](https://umijs.org/docs/max/tailwindcss)

```bash
$ npx umi g tailwindcss

info  - Update package.json for devDependencies
set config:tailwindcss on /YOUR_PWD/.umirc.ts
info  - Update .umirc.ts
info  - Write tailwind.config.js
info  - Write tailwind.css
```

At this point, you can use Tailwind CSS styles in your project; modify the configuration of `tailwind.config.js` and `tailwind.css` in the project root directory as needed.

## Complete Chat Page

Modify `src/pages/chat.tsx` as follows:

```tsx | pure
import { ConfigProvider, carbonTheme } from '@agentscope-ai/design';
import { Bubble, ChatInput, type TMessage } from '@agentscope-ai/chat';
import { useState } from 'react';

function App() {
  const [messages, setMessages] = useState<TMessage[]>([]);
  const [input, setInput] = useState('');

  const handleSend = (input: string) => {
    setMessages((v) => [
      ...v,
      {
        role: 'user',
        content: input,
        id: Date.now().toString(),
      },
    ]);
    setInput('');

    setTimeout(() => {
      setMessages((v) => [
        ...v,
        {
          role: 'assistant',
          content: `Echo: ${input}`,
          id: Date.now().toString(),
        },
      ]);
    }, 1000);
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
        <ChatInput value={input} onChange={setInput} onSubmit={handleSend} />
      </div>
    </ConfigProvider>
  );
}

export default App;
```

<img src="https://gw.alicdn.com/imgextra/i1/O1CN01B9MUtz1ZX1gUhPrfs_!!6000000003203-2-tps-2452-1654.png" style="max-width: 50%;" alt="Complete chat page" />

## Build Application

After completing development and verifying in the development environment, you need to deploy to your users. Execute the following command.

```bash
$ npm run build
info  - Umi v4.4.12
✔ Webpack
  Compiled successfully in 1.36s
info  - File sizes after gzip:
  123.4 kB  dist/umi.js
  1.37 kB   dist/umi.css
  660 B     dist/layouts__index.async.js
  656 B     dist/p__index.async.js
  567 B     dist/p__chat.async.js
  531 B     dist/p__docs.async.js
  100 B     dist/layouts__index.chunk.css
  55 B      dist/p__chat.chunk.css
event - Build index.html
```

The build will package all resources, including JavaScript, CSS, Web Fonts, images, HTML, etc. You can find these files in the `dist/` directory.

## Next Steps

We have completed a simple application, but you may still have many questions, such as:

- How to handle errors uniformly?
- How to handle more routes, such as dynamic routes, nested routes, permission routes, etc.?
- How to use data flow solutions?
- How to modify webpack configuration or switch to vite build mode?
- And more

You can:

- Visit the [Umi Official Website](https://umijs.org/)
- Learn about [Umi Routes](https://umijs.org/docs/guides/routes)
- Learn about [Umi Max](https://umijs.org/docs/max/introduce) with higher integration than Umi
- Learn about the out-of-the-box admin scaffold [Ant Design Pro](https://pro.ant.design/)
- Learn about advanced layout [ProLayout](https://procomponents.ant.design/components/layout)
- Learn about advanced table [ProTable](https://procomponents.ant.design/components/table)

## FAQ

- Why can't I see the chat list rendering?
  - `Bubble.List` and `ChatInput` require their parent element to have a specified height and `flex-direction: column`.