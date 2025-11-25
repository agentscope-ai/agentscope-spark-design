---
order: 2
title: 在 Umi 中使用
group:
  title: 如何使用
  order: 1
---

# 在 Umi 中使用

在真实项目开发中，我们可能会还会需要构建工具、路由方案、CSS 方案、数据流方案、请求库和请求方案、国际化方案、权限方案、Icons 方案等等，才能完成一个完整的项目。推荐使用基于 React 的企业级应用框架 <a href="https://umijs.org/" target="_blank" rel="noopener noreferrer">Umi</a> 来解决相关问题。

本文会引导你使用 Umi、 Alibaba Cloud Spark Chat 从 0 开始创建一个简单应用。

## 安装和初始化

```bash
$ mkdir spark-chat-demo-umi
$ cd spark-chat-demo-umi
$ npm create umi
```

这里选「Simple App」，因为我们要从 “0” 开始。

```bash
? Pick Umi App Template › - Use arrow-keys. Return to submit.
❯   Simple App
    Ant Design Pro
    Vue Simple App
```

可以选择最接触「npm」直接开始，你也可以选择其他的包管理工具。

```bash
? Pick Npm Client › - Use arrow-keys. Return to submit.
❯   npm
    cnpm
    tnpm
    yarn
    pnpm
```

这里国内的朋友建议选「taobao」，否则选「npm」。选择 npm taobao 源在安装依赖时通常会更快一些。

```bash
? Pick Npm Registry › - Use arrow-keys. Return to submit.
    npm
❯   taobao
```

然后工具会自动安装依赖，并执行 Umi 的初始化脚本。在启动项目之前，我们再安装一些本教程会用到的依赖。

```bash
$ npm install antd @agentscope-ai/design @agentscope-ai/chat --save

```

完成后，执行以下命令启动项目。跟着提示点击命令行里的 url，会自动打开浏览器。如果顺利，你会看到如下界面。

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

<img src="https://gw.alicdn.com/imgextra/i4/O1CN011GmAwE1q7Eqt9vDUQ_!!6000000005448-2-tps-2452-1654.png" style="max-width: 50%;" alt="Umi 项目结构" />

## 新建 Chat 路由

我们通过命令即可创建路由。

```bash
npx umi g page chat
Write: src/pages/chat.tsx
Write: src/pages/chat.less
```

然后修改配置文件 `.umirc.ts` 加上新增的路由声明。

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

由于脚手架默认使用的是配置式路由，顾名思义，就是路由是自己一行行配出来的，虽然繁琐，但灵活性更高，这种方式需要在配置里加上 routes 字段，详见 <a href="https://umijs.org/docs/guides/routes" target="_blank">Umi 文档之路由</a>。此外，Umi 还支持约定式路由，意思是文件系统即路由，所以无需配置路由即可生效。

然后我们编辑下 `src/layouts/index.tsx` 文件，在全局布局路由里加上到 `/chat` 路径的导航。

```diff | pure
<li>
  <Link to="/docs">Docs</Link>
</li>
+ <li>
+   <Link to="/chat">Chat</Link>
+ </li>
```

## 开启 Tailwind CSS 插件

为了方便后续项目的编写，我们开启 [Tailwind CSS 插件](https://umijs.org/docs/max/tailwindcss)

```bash
$ npx umi g tailwindcss

info  - Update package.json for devDependencies
set config:tailwindcss on /YOUR_PWD/.umirc.ts
info  - Update .umirc.ts
info  - Write tailwind.config.js
info  - Write tailwind.css
```

至此就可以在项目中使用 Tailwind CSS 的样式；项目根目录的 `tailwind.config.js` 和 `tailwind.css` 根据需要修改配置。

## 完善 Chat 页面

修改 `src/pages/chat.tsx`，内容如下。

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

<img src="https://gw.alicdn.com/imgextra/i1/O1CN01B9MUtz1ZX1gUhPrfs_!!6000000003203-2-tps-2452-1654.png" style="max-width: 50%;" alt="完整的聊天页面" />

## 构建应用

完成开发并且在开发环境验证之后，就需要部署给我们的用户了，执行以下命令。

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

构建会打包所有的资源，包含 JavaScript, CSS, Web Fonts, 图片, HTML 等。你可以在`dist/`目录下找到这些文件。

## 下一步

我们已经完成了一个简单应用，你可能还有很多疑问，比如：

- 如何统一处理出错？
- 如何处理更多路由，比如动态路由、嵌套路由、权限路由等？
- 如何使用数据流方案？
- 如何修改 webpack 配置或切换到 vite 构建模式？
- 等等

你可以：

- 访问  [Umi 官网](https://umijs.org/)
- 了解  [Umi 的路由](https://umijs.org/docs/guides/routes)
- 了解比 Umi 集成度更高的  [Umi Max](https://umijs.org/docs/max/introduce)
- 了解开箱即用的中后台脚手架  [Ant Design Pro](https://pro.ant.design/)
- 了解高级布局  [ProLayout](https://procomponents.ant.design/components/layout)
- 了解高级表格  [ProTable](https://procomponents.ant.design/components/table)

## FAQ

- 为什么看不见对话列表渲染？
  - `Bubble.List` 和 `ChatInput` 需要指定他们的父元素拥有高度，并且`flex-direction: column`
