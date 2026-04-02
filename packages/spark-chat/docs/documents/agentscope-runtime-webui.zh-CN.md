---
order: 3
title: BailianHighCodeWebUI
group:
  title: 智能体接入
  order: 3
---

# BailianHighCodeWebUI

## 快速开始

### 1. 获取脚手架模板

从仓库中获取 `bailian-high-code-webui` 脚手架模板：

```bash
$ cd bailian-high-code-webui
```

> Node.js 版本要求：>= 22

### 2. 安装依赖

```bash
$ npm install
```

### 3. 配置 API 地址

打开 `src/components/Chat/defaultConfig.ts`，将 `api.baseURL` 和 `api.token` 替换为你的 AgentScope Runtime 后端地址：

```tsx | pure
import { IAgentScopeRuntimeWebUIOptions } from '@agentscope-ai/chat';

const config: IAgentScopeRuntimeWebUIOptions = {
  // ...
  api: {
    baseURL: 'YOUR_API_URL',
    token: 'YOUR_API_TOKEN',
    enableHistoryMessages: true, // 百炼高代码场景后端无状态，所以总是需要前端传递完整上下文
  },
};

export default config;
```

### 4. 启动开发服务器

```bash
$ npm run dev
```

打开浏览器访问终端中输出的地址即可看到 WebUI。

### 5. 构建生产版本

```bash
$ npm run build
```

构建产物位于 `dist/` 目录，可直接部署到任意静态资源服务器。

### 脚手架项目结构

```
bailian-high-code-webui/
├── src/
│   ├── App.tsx                  # 应用入口
│   ├── main.tsx                 # 渲染入口
│   └── components/
│       ├── Chat/
│       │   ├── index.tsx        # 核心对话组件
│       │   └── defaultConfig.ts # 配置文件（API、主题、欢迎页等）
│       └── Cards/
│           └── Weather.tsx      # 自定义工具渲染卡片示例
├── index.html
├── package.json
└── vite.config.ts
```

脚手架中的核心代码如下：

**`src/components/Chat/index.tsx`**

```tsx | pure
import { AgentScopeRuntimeWebUI, IAgentScopeRuntimeWebUIOptions } from '@agentscope-ai/chat';
import defaultConfig from './defaultConfig';

export default function () {
  return (
    <div style={{ height: '100vh' }}>
      <AgentScopeRuntimeWebUI
        options={defaultConfig as unknown as IAgentScopeRuntimeWebUIOptions}
      />
    </div>
  );
}
```

**`src/components/Chat/defaultConfig.ts`**

```tsx | pure
import { IAgentScopeRuntimeWebUIOptions } from '@agentscope-ai/chat';
import Weather from '../Cards/Weather';

const config: IAgentScopeRuntimeWebUIOptions = {
  customToolRenderConfig: {
    'weather search mock': Weather,
  },
  theme: {
    colorPrimary: '#615CED',
    darkMode: true,
    prefix: 'agentscope-runtime-webui',
    leftHeader: {
      logo: 'https://img.alicdn.com/imgextra/i2/O1CN01lmoGYn1kjoXATy4PX_!!6000000004720-2-tps-200-200.png',
      title: 'Runtime WebUI',
    },
  },
  sender: {
    maxLength: 10000,
    disclaimer: 'AI can also make mistakes, so please check carefully and use it with caution',
  },
  session: {
    multiple: false,
  },
  welcome: {
    greeting: 'Hello, how can I help you today?',
    description: 'I am a helpful assistant that can help you with your questions.',
    avatar: 'https://img.alicdn.com/imgextra/i2/O1CN01lmoGYn1kjoXATy4PX_!!6000000004720-2-tps-200-200.png',
    prompts: [
      { value: 'Hello' },
      { value: 'How are you?' },
      { value: 'What can you do?' },
    ],
  },
  api: {
    baseURL: 'YOUR_API_URL',
    token: 'YOUR_API_TOKEN',
    enableHistoryMessages: true,
  },
};

export default config;
```

### 集成到已有项目

如果你已有 Vite / Next.js / Umi 等 React 工程，也可以直接安装依赖并集成。

#### 安装依赖

```bash
$ npm install antd @agentscope-ai/design @agentscope-ai/chat --save
```

#### 使用组件

```tsx | pure
import { AgentScopeRuntimeWebUI } from '@agentscope-ai/chat';

export default function App() {
  return (
    <div style={{ height: '100vh' }}>
      <AgentScopeRuntimeWebUI
        options={{
          api: {
            baseURL: 'YOUR_API_URL',
            token: 'YOUR_API_TOKEN',
            enableHistoryMessages: true, // 百炼高代码场景后端无状态，所以总是需要前端传递完整上下文
          },
          session: {
            multiple: false,
          },
        }}
      />
    </div>
  );
}
```

> **注意**：`AgentScopeRuntimeWebUI` 需要父容器有明确的高度（如 `100vh`），否则页面可能无法正确展示。

---

## 配置详解

### API 配置

`api` 是最核心的配置，用于连接你的 AgentScope Runtime 后端服务。

```tsx | pure
const options = {
  api: {
    // 方式一：使用 baseURL + token（默认 POST 请求）
    baseURL: 'YOUR_API_URL',
    token: 'YOUR_API_TOKEN',

    // 方式二：自定义 fetch 函数，完全控制请求行为
    fetch: async ({ input, signal }) => {
      return fetch('https://your-api-url.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ input }),
        signal,
      });
    },
    // 是否在请求中携带历史消息（默认 false）
    enableHistoryMessages: false,
  },
};
```

### 主题配置

通过 `theme` 自定义 WebUI 的外观。

```tsx | pure
const options = {
  theme: {
    colorPrimary: '#615CED',
    darkMode: true,
    locale: 'cn',
    leftHeader: {
      logo: 'https://your-logo.png',
      title: 'My Agent',
    },
    background: '#1a1a2e',
    typography: {
      baseFontSize: 14,
      baseLineHeight: 1.6,
    },
    bubbleList: {
      pagination: true,
    },
  },
};
```

### 欢迎页配置

通过 `welcome` 配置用户进入对话时的欢迎页面。

```tsx | pure
const options = {
  welcome: {
    greeting: '你好！有什么可以帮助你的吗？',
    description: '我是一个智能助手，可以回答你的各种问题。',
    avatar: 'https://your-avatar.png',
    nick: '小助手',
    prompts: [
      { label: '写一首诗', value: '请帮我写一首关于春天的诗' },
      { label: '代码助手', value: '帮我写一个 React 组件' },
      { value: '今天天气怎么样？' },
    ],
    // 也可以完全自定义渲染
    render: ({ greeting, prompts, onSubmit }) => (
      <div>
        <h1>{greeting}</h1>
        {prompts.map((p) => (
          <button key={p.value} onClick={() => onSubmit({ query: p.value })}>
            {p.label || p.value}
          </button>
        ))}
      </div>
    ),
  },
};
```

### 输入框配置

通过 `sender` 定制输入区域的行为和外观。

```tsx | pure
const options = {
  sender: {
    placeholder: '请输入你的问题...',
    maxLength: 5000,
    disclaimer: 'AI 生成的内容可能存在错误，请注意甄别。',
    allowSpeech: true,
    suggestions: [
      { label: '画一幅画', value: '帮我画一幅日落的风景画' },
      { label: '查知识', value: '什么是量子计算？' },
    ],
    attachments: {
      accept: '.png,.jpg,.pdf',
      maxCount: 5,
    },
    beforeUI: <div>输入框上方内容</div>,
    afterUI: <div>输入框下方内容</div>,
    prefix: <button>工具按钮</button>,
    beforeSubmit: async () => {
      // 返回 false 可阻止提交
      return true;
    },
  },
};
```

### 会话管理

通过 `session` 配置多会话支持和会话持久化。

```tsx | pure
const options = {
  session: {
    multiple: true,  // 开启多会话
    api: {
      // 实现会话持久化接口
      getSessionList: async () => { /* ... */ },
      getSession: async (sessionId) => { /* ... */ },
      createSession: async (session) => { /* ... */ },
      updateSession: async (session) => { /* ... */ },
      removeSession: async (session) => { /* ... */ },
    },
  },
};
```

当不传入 `session.api` 时，组件内置了基于 `localStorage` 的默认会话持久化实现，开箱即用。如需对接后端存储，实现上述接口即可。

### Ref 实例方法

通过 `ref` 获取组件实例，可在外部控制消息和输入行为。

```tsx | pure
import { AgentScopeRuntimeWebUI, IAgentScopeRuntimeWebUIRef } from '@agentscope-ai/chat';
import { useRef } from 'react';

export default function App() {
  const chatRef = useRef<IAgentScopeRuntimeWebUIRef>(null);

  const handleExternalSubmit = () => {
    // 通过 ref 触发提交
    chatRef.current?.input.submit({ query: '你好' });
  };

  const handleDisableInput = () => {
    // 禁用输入框
    chatRef.current?.input.setDisabled(true);
  };

  return (
    <div style={{ height: '100vh' }}>
      <button onClick={handleExternalSubmit}>外部触发提交</button>
      <AgentScopeRuntimeWebUI ref={chatRef} options={options} />
    </div>
  );
}
```

---

## 自定义卡片

脚手架中内置了一个完整的天气卡片示例（`src/components/Cards/Weather.tsx`），以下文档以此为例介绍自定义工具渲染的完整开发流程。

---

### 第一步：声明 props 类型

自定义工具渲染组件会接收 `{ data }` 作为 props，其中 `data` 是一条工具调用消息。消息的 `content` 数组通常包含两项：

- `content[0]`：工具调用信息（`name` + `arguments`）
- `content[1]`：工具输出结果（`name` + `output`）

```tsx | pure
interface IToolContentItem {
  type: string;
  object?: string;
  status: string;
  delta?: boolean | null;
  msg_id?: string;
  index?: number;
  error?: unknown;
  sequence_number?: number | null;
  data: {
    name: string;
    arguments?: string;
    output?: string;
  };
}

interface IToolMessage {
  id: string;
  object?: string;
  type: string;
  role: string;
  status: string;
  content: IToolContentItem[];
  code?: string | null;
  message?: string | null;
}
```

### 第二步：解析工具输出数据

以天气查询为例，`output` 是一个 JSON 字符串，解析后得到天气数据列表：

```tsx | pure
export interface IWeatherItem {
  location: string;
  weather: string;
  temperature: number;
  date: string;
}

function parseOutput(data: IToolMessage): IWeatherItem[] {
  const outputContent = data.content[1]?.data;
  try {
    return JSON.parse(JSON.parse(outputContent.output));
  } catch {
    return [];
  }
}
```

### 第三步：实现卡片 UI

使用 `antd-style` 的 `createStyles` 编写样式，通过 `token` 消费主题变量，自动适配亮色/暗色模式：

```tsx | pure
import { createStyles } from 'antd-style';

const useStyles = createStyles(({ token, css }) => ({
  wrapper: css`
    border-radius: 12px;
    border: 1px solid ${token.colorBorderSecondary};
    background: ${token.colorBgElevated};
    overflow: hidden;
  `,
  header: css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 14px 16px;
    border-bottom: 1px solid ${token.colorBorderSecondary};
  `,
  container: css`
    display: flex;
    overflow-x: auto;
    padding: 14px 12px;
  `,
  card: css`
    flex: 1;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    padding: 10px 12px;
    border-radius: 10px;
    min-width: 72px;
    transition: background 0.2s;
    &:hover {
      background: ${token.colorFillQuaternary};
    }
  `,
  todayCard: css`
    background: ${token.colorPrimaryBg};
    &:hover {
      background: ${token.colorPrimaryBgHover};
    }
  `,
  // ...更多样式
}));

export default function Weather(props: { data: IToolMessage }) {
  const items = parseOutput(props.data);
  const { styles, cx } = useStyles();

  if (!items.length) return null;

  const todayItem = items.find((_, i) => {
    const { weekday } = formatDate(items[i].date);
    return weekday === '今天';
  }) || items[0];

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <span>📍 {items[0].location}</span>
        <span>{todayItem.temperature}° {weatherLabels[todayItem.weather]}</span>
      </div>
      <div className={styles.container}>
        {items.map((item) => {
          const { weekday, date } = formatDate(item.date);
          const isToday = weekday === '今天';
          return (
            <div key={item.date} className={cx(styles.card, isToday && styles.todayCard)}>
              <span>{weekday}</span>
              <span>{date}</span>
              <span>{weatherIcons[item.weather]}</span>
              <span>{item.temperature}°</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
```

### 第四步：注册到配置

在 `defaultConfig.ts` 中通过 `customToolRenderConfig` 注册，key 为后端返回的工具名称：

```tsx | pure
import { IAgentScopeRuntimeWebUIOptions } from '@agentscope-ai/chat';
import Weather from '../Cards/Weather';

const config: IAgentScopeRuntimeWebUIOptions = {
  customToolRenderConfig: {
    'weather search mock': Weather,
  },
  // ...其他配置
};

export default config;
```

当后端返回 `plugin_call` / `mcp_call` 等类型的消息且 `content[0].data.name` 与配置的 key 匹配时，WebUI 会使用对应的自定义组件替代默认的工具调用折叠面板进行渲染。


## 更多细节
- https://github.com/agentscope-ai/agentscope-spark-design/tree/main/packages/spark-chat
- https://github.com/agentscope-ai/agentscope-spark-design/tree/main/packages/spark-chat/components/AgentScopeRuntimeWebUI
