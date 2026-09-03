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
import {
  AgentScopeRuntimeWebUI,
  IAgentScopeRuntimeWebUIOptions,
} from '@agentscope-ai/chat';
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
    disclaimer:
      'AI can also make mistakes, so please check carefully and use it with caution',
  },
  session: {
    multiple: false,
  },
  welcome: {
    greeting: 'Hello, how can I help you today?',
    description:
      'I am a helpful assistant that can help you with your questions.',
    avatar:
      'https://img.alicdn.com/imgextra/i2/O1CN01lmoGYn1kjoXATy4PX_!!6000000004720-2-tps-200-200.png',
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
    fetch: async ({
      input,
      session_id,
      context,
      biz_params,
      mentions,
      submission,
      signal,
    }) => {
      return fetch('https://your-api-url.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          input,
          session_id,
          context,
          biz_params,
          mentions,
          submission,
        }),
        signal,
      });
    },
    // 参数是单个 SSE 事件的 data 字符串，不是 Response 对象
    responseParser: (chunk) => JSON.parse(chunk),
    // 是否在请求中携带历史消息（默认 false）
    enableHistoryMessages: false,
  },
};
```

从 1.2.0 开始，WebUI 会在一次提交开始时创建请求快照。`session_id`、`context`、`biz_params`、`mentions` 和 `signal` 在后续异步流程中都来自这份快照，不会在 `await` 后重新读取当前会话。自定义 `fetch` 应直接使用参数中的 `session_id` 和 `context`，不要再次读取业务侧的全局 `activeSessionId`。

`context` 用于承载与单次请求绑定的通用业务上下文；`biz_params` 仍支持已有的 `user_prompt_params`，同时允许扩展其他 JSON 字段。默认请求和自定义 `fetch` 都会收到相同的上下文字段。`responseParser` 每次接收一个 SSE `data` 字符串，默认实现是 `JSON.parse`。

### 自定义停止与取消事件

默认情况下，点击停止会立即终止浏览器中的 SSE，并把响应、工具调用及其内容中的运行态统一标记为 `canceled`。如果后端支持在原 SSE 中返回取消过程或最终状态，可以配置 `api.cancel`：

```tsx | pure
const options = {
  api: {
    fetch: customFetch,
    cancel: async ({ session_id, signal, abort }) => {
      await fetch(`/api/sessions/${session_id}/cancel`, { method: 'POST' });

      // 不调用 abort：保留原 SSE，继续接收后端发出的 cancel 事件。
      // 如果业务希望立即关闭本地连接，则显式调用 abort()。
      if (signal?.aborted) return;
    },
  },
};
```

提供 `api.cancel` 后，SDK 不会自动中断原 SSE。后端应通过该流返回 `status: "canceled"` 的终态；SDK 收到后会结束 loading，并持久化为 interrupted。`api.cancel` 抛错或 Promise reject 时，SDK 会自动调用本地 `abort()` 兜底。业务方也可以在超时或确认后端不再发送事件时主动调用传入的 `abort()`。

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
    longTextUpload: {
      enabled: true,
      customRequest(options) {
        // 超过 maxLength 的输入会作为 txt 文件传入这里
        uploadTextFile(options.file)
          .then((response) => {
            options.onSuccess(response);
          })
          .catch(options.onError);
      },
      prompt: () =>
        getCurrentLocale() === 'cn'
          ? '请先阅读附件中的内容，再基于它回答我的问题'
          : 'please read the file as prompt then answer it',
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

开启 `longTextUpload` 后，`sender.maxLength` 会作为超长文本阈值；当输入或粘贴内容超过该阈值时，WebUI 会自动生成 txt 附件并上传，然后把输入框内容替换为 `prompt`。`prompt` 支持字符串，也支持 `() => string` 方法用于国际化。外部语言切换导致 `prompt` 配置更新时，如果输入框内容仍是自动生成的 prompt，WebUI 会同步刷新；如果用户已经手动编辑过输入框，则不会覆盖。未传 `prompt` 时默认使用 `please read the file as prompt then answer it`。`customRequest` 不传时会复用 `attachments.customRequest`。

#### 内置输入队列

内置输入队列默认关闭，不配置 `sender.queue` 时不会创建队列存储、跨标签页通道或后台队列任务。传入 `true` 可使用默认配置：

```tsx | pure
const options = {
  sender: {
    queue: true,
  },
};
```

需要对接宿主会话和运行状态时，可以传入完整配置：

```tsx | pure
const options = {
  sender: {
    queue: {
      // 多智能体/多租户页面应使用稳定且唯一的命名空间
      scope: `${tenantId}:${agentId}`,
      maxSize: 50,
      // 队列 key 必须对应唯一聊天；不要返回请求上下文中的后端 session_id
      getQueueKey: (chatSessionId) => chatSessionId,
      getRequestContext: (sessionId) => ({
        session_id: sessionId,
        user_id: getCurrentUserId(),
        agent_id: getCurrentAgentId(),
        context: {
          workspaceId: getCurrentWorkspaceId(),
        },
      }),
      isSessionRunning: async ({ sessionId, requestContext }) => {
        return queryRunningState(sessionId, requestContext);
      },
      shouldRestoreOnError: async ({ error }) => {
        return !isRequestAccepted(error);
      },
    },
  },
};
```

`getQueueKey` 的输入是 SDK 聊天会话 id，返回值是队列持久化和跨标签页通信使用的不透明 key。即使多个聊天共用一个后端 runtime `session_id`，它们也必须返回不同的 queue key；请求路由字段只放在 `getRequestContext` 中。旧的 `getSessionId` 配置仍兼容，但已废弃。

队列条目会保存入队时的 `session_id` 和 `context`，出队时不会重新绑定到当前页面会话。队列通过 Web Locks（不支持时使用带租约的本地锁）、按 `scope` 隔离的 `BroadcastChannel` 和带版本号的 `localStorage` 状态协调发送；持久化只保留可 JSON 化的请求字段和附件引用，24 小时未更新的队列会自动过期。多智能体或多租户页面必须配置稳定且唯一的 `scope`，业务语义仍由宿主通过上述回调提供。外部迁移或清理持久化队列时，可使用导出的 `resolveInputQueueKey(chatSessionId, { scope, getQueueKey })` 生成与 SDK 完全一致的 key，避免业务方重复拼接内部格式。

#### 业务方自有延迟队列

不需要启用内置队列。业务方继续负责 FIFO、持久化、暂停/编辑/重试、跨标签页选主等队列策略；SDK 的 `ref.execution` 负责一次 AI Run 的会话创建、请求提交、SSE 消费、取消和断流恢复。业务方应在入队时保存完整的 `IAgentScopeRuntimeWebUIInputData`，尤其是 `session_id` 和 `context`：

```tsx | pure
const options = {
  sender: {
    beforeSubmit: async (data) => {
      hostQueue.enqueue({
        id: crypto.randomUUID(),
        chatSessionId: activeSessionId,
        data: {
          ...data,
          session_id: activeSessionId,
          context: { workspaceId: activeWorkspaceId },
        },
      });
      return { proceed: false, clear: true };
    },
  },
};

async function deliver(item: HostQueueItem) {
  const run = await chatRef.current!.execution.execute(item.data, {
    source: 'host-queue',
    clientRequestId: item.id,
    sessionId: item.chatSessionId,
  });

  const session = await run.session;
  if (session.resolved) {
    // 新建聊天在真正发起请求前即可拿到 SDK chat session id，
    // 可立即更新 URL 和会话列表选中态。
    selectChatSession(session.sessionId!);
  }

  const unsubscribe = run.subscribe((event) => {
    hostQueue.updateRunState(item.id, event);
    // disconnected 不是完成；由宿主决定重连时机，不能重新提交该队列项。
  });

  const accepted = await run.accepted;
  hostQueue.markAccepted(item.id, accepted.accepted, run.runId);

  const result = await run.completion;
  unsubscribe();
  if (result.status === 'completed') hostQueue.remove(item.id);
  else if (result.retryable) hostQueue.restore(item.id);
  // backendAcceptance === 'unknown' 时先查询后端状态，不要直接重发 POST。
}

function resume(item: HostQueueItem) {
  return chatRef.current!.execution.resume({
    runId: item.runId,
    sessionId: item.chatSessionId,
    source: 'host-queue',
    clientRequestId: item.id,
    requestContext: item.data, // 重挂载后恢复入队时保存的后端身份与 context
  });
}
```

`execution.execute` 绕过 `beforeSubmit` 和 SDK 内置队列策略，因此不会重复入队；同一挂载实例内重复传入 `clientRequestId` 会返回同一个活动 Run。状态按 `preparing → submitting → accepted → streaming → completed/failed/canceled` 演进；SSE 在终态事件前断开会进入 `disconnected`，`completion` 保持 pending，调用 `execution.resume` 后沿用同一 Run 进入 `reconnecting`，不会创建新的业务提交。`execution.cancel({ runId })` 在返回时保证本地流和消息状态也已终止。

`ref.input.submit` 仍适合简单的外部触发提交，也会完整保留 `IAgentScopeRuntimeWebUIInputData`；持久化业务队列应使用 `ref.execution` 区分三种 `backendAcceptance`：`not-submitted`（尚未调用发送适配器，失败时可重试）、`unknown`（已调用适配器，但没有收到成功响应，是否受理未知）、`accepted`（已收到成功响应，或宿主明确恢复已有 Run）。只有 `not-submitted` 的失败会返回 `retryable: true`；`backendAccepted: false` / `accepted: false` 本身不能证明后端未受理。对于 `unknown`，宿主应查询后端状态或使用后端明确支持的幂等协议后决定是否重发。

业务方自己的队列及 `api.fetch` 都应使用入队时保存的 `session_id`，不要在恢复发送后重新读取全局活动会话。`runId` / `clientRequestId` 会传给自定义 `fetch`、`cancel`、`reconnect` 用于关联；它们是 SDK/宿主标识，不自动等于后端 Run ID 或幂等键，内置 fetch 不会凭空增加后端幂等协议。公开 Run 事件对应 `execution.execute/resume` 创建的句柄；普通 UI 提交、重新生成和审批并不自动创建公开 Run。

### 会话管理

通过 `session` 配置多会话支持和会话持久化。

```tsx | pure
const options = {
  session: {
    multiple: true, // 开启多会话
    currentSessionId: routeSessionId, // 可选：由外部路由控制当前会话
    onCurrentSessionChange: setRouteSessionId,
    api: {
      // 实现会话持久化接口
      getSessionList: async () => {
        /* ... */
      },
      getSession: async (sessionId) => {
        /* ... */
      },
      createSession: async (session) => {
        const created = await createOrReuseSession(session);
        const sessions = await listSessions();
        return { sessions, session: created };
      },
      updateSession: async (session) => {
        /* ... */
      },
      removeSession: async (session) => {
        /* ... */
      },
    },
  },
};
```

当不传入 `session.api` 时，组件内置了基于 `localStorage` 的默认会话持久化实现，开箱即用。如需对接后端存储，需要完整实现上述五个接口；`getSession` 在会话不存在时可以返回 `undefined`。`createSession` 推荐显式返回 `{ sessions, session }`：`sessions` 是更新后的列表，`session` 是本次创建或复用的会话。旧版只返回会话数组的实现仍兼容，但当业务会复用一个尚未落库的临时会话时，显式结果可以避免 SDK 根据列表顺序猜错当前会话，也不再要求业务修改传入的 `session.id`。传入 `currentSessionId` 后，WebUI 会把它视为外部路由控制值；`onCurrentSessionChange` 用于把组件内的会话创建或切换同步回业务路由。新建会话成功后 SDK 会立即激活该会话的空消息列表，业务无需再调用内部消息 Context 清屏。

默认存储通过 `session.storageScope` 隔离，例如 `JSON.stringify([tenantId, userId, workspaceId, agentId])`。多租户、多账号或多 Agent 接入必须提供稳定的非空 scope；它与 `sender.queue.scope` 分别控制会话历史和输入队列，启用两者时都应配置。未提供时保留旧版存储 key 和历史；提供后使用独立 key，不自动导入无 scope 的历史，避免把旧历史带入另一租户。切换 scope 会重挂载会话运行时并中止旧本地连接，不会自动停止服务端任务。自定义 `session.api` 仍由宿主负责存储隔离；localStorage namespace 不是安全授权边界。

### 消息气泡扩展

通过 `request.render` 和 `response.render` 组合业务 UI 与 SDK 默认气泡。`fallback()` 返回 SDK 默认渲染，业务无需深度导入 `lib/AgentScopeRuntimeWebUI/core/...` 下的内部组件。Runtime 消息、内容和状态类型也可以直接从 `@agentscope-ai/chat` 根入口导入。

```tsx | pure
const options = {
  request: {
    render: ({ data, fallback }) => (
      <HostRequestFrame data={data}>{fallback()}</HostRequestFrame>
    ),
  },
  response: {
    render: ({ data, isLast, fallback }) => (
      <HostResponseFrame data={data} isLast={isLast}>
        {fallback()}
      </HostResponseFrame>
    ),
  },
};
```

### Ref 实例方法

通过 `ref` 获取组件实例，可在外部控制消息和输入行为。

```tsx | pure
import {
  AgentScopeRuntimeWebUI,
  IAgentScopeRuntimeWebUIRef,
} from '@agentscope-ai/chat';
import { useRef } from 'react';

export default function App() {
  const chatRef = useRef<IAgentScopeRuntimeWebUIRef>(null);

  const handleExternalSubmit = () => {
    // 通过 ref 触发提交
    chatRef.current?.input.submit({
      query: '你好',
      session_id: activeSessionId,
      context: { workspaceId: activeWorkspaceId },
    });
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

  const todayItem =
    items.find((_, i) => {
      const { weekday } = formatDate(items[i].date);
      return weekday === '今天';
    }) || items[0];

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <span>📍 {items[0].location}</span>
        <span>
          {todayItem.temperature}° {weatherLabels[todayItem.weather]}
        </span>
      </div>
      <div className={styles.container}>
        {items.map((item) => {
          const { weekday, date } = formatDate(item.date);
          const isToday = weekday === '今天';
          return (
            <div
              key={item.date}
              className={cx(styles.card, isToday && styles.todayCard)}
            >
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

## 1.2.0 升级说明

- 自定义 `api.fetch` 现在会收到必填的 `session_id`，以及独立的 `context`、`mentions`、`submission` 和 `signal`。请求实现应使用这些快照参数，不要在异步操作后读取全局活动会话。
- 通用业务上下文应通过 `context` 传递；`biz_params.user_prompt_params` 继续兼容原协议，也可扩展其他 JSON 字段。
- 内置输入队列改为显式开启，默认不启用。现有业务方自有队列不需要迁移到内置队列，只需保存并回传完整输入数据。
- 新增 `ref.execution.execute/cancel/resume/getActiveRun/subscribe` Run 控制器。自有队列可以保留调度策略，同时复用 SDK 的会话创建、提交、SSE、终态、取消和重连生命周期；只有发送适配器调用前的失败会标记为可安全重新入队，发出后未获确认的失败为 `backendAcceptance: 'unknown'`。
- `ref.input.submit` 会完整透传 `IAgentScopeRuntimeWebUIInputData`，并返回可等待的 Promise；外部延迟队列可以等待本次提交或入队结果。
- `api.cancel` 可接管停止行为。配置后默认保留原 SSE 以接收后端取消事件；调用参数中的 `abort()` 可立即终止本地流。未配置时仍采用立即本地终止。
- `responseParser` 的入参类型修正为单个 SSE `data` 字符串；自定义解析器需要相应调整。
- 自定义 `session.api` 现在必须完整实现五个会话方法；不传时继续使用内置实现。
- `sender.onSubmit`、`sender.onCancel` 从类型中移除；这两个字段此前未被运行时调用。提交前拦截请使用 `beforeSubmit`，外部提交请使用 `ref.input.submit`。
- 内置队列持久化 schema 为 v2，并增加 `scope` 隔离、轻量序列化和 24 小时过期清理。升级前尚未发送的 v1 本地队列条目会被丢弃，建议业务方在升级前先清空或发送完旧队列。

## 更多细节

- https://github.com/agentscope-ai/agentscope-spark-design/tree/main/packages/spark-chat
- https://github.com/agentscope-ai/agentscope-spark-design/tree/main/packages/spark-chat/components/AgentScopeRuntimeWebUI

### Run 生命周期与会话身份

- `execute(data, { sessionId })` 的 `sessionId` 是 SDK Chat ID；`data.session_id` 是提交给后端的 Runtime 会话 ID。`api.fetch` / `api.cancel` / `api.reconnect` 的 `session_id` 统一使用这份后端身份快照，SDK Chat ID 通过独立的 `chatSessionId` 提供。显式 Runtime ID 会原样保留，未提供时才使用 SDK Chat ID 兼容旧接入；此前在取消/重连接口把 `session_id` 当 SDK Chat ID 映射的适配器应改用 `chatSessionId`。
- 只有 Runtime response 的 `completed`、`failed`、`canceled` 才是服务端终态；某条 message/content 完成、HTTP 2xx、空响应体或流 EOF 都不代表 Run 完成。无终态的断流保留 `disconnected`，已接受输入不得重新 POST。
- 收到终态后，先更新消息状态并等待会话保存，再发布 terminal 事件和 resolve `completion`。保存失败会记录错误，不会把已知终态误报为断流；`completion` 不代替宿主对存储可靠性的监控。
- 内置 Stop 和公开取消都在本地收尾后结算对应 Run；自定义 `api.cancel` 不调用 `abort()` 时，内置 Stop 仍保留 SSE，等待服务端终态。`canceled` 表示本地执行结束，不代替宿主对服务端停止成功的确认。
- 同一组件实例内，SessionLoader 自动重连与 `execution.resume` 关联同一个 Run，沿用原始路由快照和 API 适配器；适配器若需要刷新鉴权，应在内部获取最新凭证。旧连接的退出不能覆盖新连接状态。完整页面刷新后通过 `resume({ sessionId, requestContext })` 获取句柄，`requestContext` 传入持久化的 `session_id`、`context` 等字段；未提供时只能按 SDK Chat ID 兼容回退，SDK 不会从消息内容推断后端身份。
- 取消已切走的 Run 按其消息和会话身份收尾，不修改另一会话或同会话中新 Run 的 loading。Runtime 终态、主动中止和消费异常会释放 SSE reader 并取消上游读取。
