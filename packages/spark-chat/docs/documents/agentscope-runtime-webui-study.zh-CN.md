---
order: 4
title: AgentScopeRuntimeWebUI 学习笔记
group:
  title: 智能体接入
  order: 3
---

# AgentScopeRuntimeWebUI 学习笔记

这篇文档面向想深入理解 `AgentScopeRuntimeWebUI` 的开发者。它不只说明怎么用组件，更重点解释组件内部如何把输入、会话、SSE 流、Runtime 协议消息和 UI 卡片串起来。

核心心智模型可以先记成一句话：

> `AgentScopeRuntimeWebUI` 是一个预置了 AgentScope Runtime 协议适配层的 Chat 容器。它把用户输入转换成 Runtime `request.input`，把后端 SSE 增量合并成 Runtime `response.output`，再通过默认卡片渲染成可交互的对话 UI。

## 先看入口

组件的公开出口在 [components/index.ts](../../components/index.ts#L29)，默认导出来自 [AgentScopeRuntimeWebUI/index.tsx](../../components/AgentScopeRuntimeWebUI/index.tsx#L1)。

真正入口是 [core/ChatAnywhere/index.tsx](../../components/AgentScopeRuntimeWebUI/core/ChatAnywhere/index.tsx#L12)：

- 默认注册两张卡片：`AgentScopeRuntimeRequestCard` 和 `AgentScopeRuntimeResponseCard`，见 [cardConfig 合并逻辑](../../components/AgentScopeRuntimeWebUI/core/ChatAnywhere/index.tsx#L14)。
- 外部仍可通过 `options.cards` 注入或覆盖卡片，见 [options.cards 展开](../../components/AgentScopeRuntimeWebUI/core/ChatAnywhere/index.tsx#L18)。
- 入口只做两件事：套上 Provider，然后渲染 Layout，见 [ComposedProvider + Layout](../../components/AgentScopeRuntimeWebUI/core/ChatAnywhere/index.tsx#L24)。

可以把源码分成 5 层来看：

| 层级 | 关键文件 | 负责什么 |
| --- | --- | --- |
| 入口组装 | [ChatAnywhere/index.tsx](../../components/AgentScopeRuntimeWebUI/core/ChatAnywhere/index.tsx#L12), [ComposedProvider.tsx](../../components/AgentScopeRuntimeWebUI/core/ChatAnywhere/ComposedProvider.tsx#L10) | 注册卡片、组装上下文 Provider |
| 页面布局 | [Layout/index.tsx](../../components/AgentScopeRuntimeWebUI/core/Layout/index.tsx#L18), [Chat/index.tsx](../../components/AgentScopeRuntimeWebUI/core/Chat/index.tsx#L8) | 左侧会话、右侧聊天区、Header、ref |
| 状态上下文 | [Context](../../components/AgentScopeRuntimeWebUI/core/Context/ChatAnywhereOptionsContext.tsx#L22) | options、sessions、messages、input loading/disabled |
| 控制链路 | [useChatController.tsx](../../components/AgentScopeRuntimeWebUI/core/Chat/hooks/useChatController.tsx#L19), [useChatRequest.tsx](../../components/AgentScopeRuntimeWebUI/core/Chat/hooks/useChatRequest.tsx#L27) | 提交、取消、重试、重连、SSE 处理 |
| 协议适配与渲染 | [Request/Builder.tsx](../../components/AgentScopeRuntimeWebUI/core/AgentScopeRuntime/Request/Builder.tsx#L5), [Response/Builder.tsx](../../components/AgentScopeRuntimeWebUI/core/AgentScopeRuntime/Response/Builder.tsx#L6), [Response/Card.tsx](../../components/AgentScopeRuntimeWebUI/core/AgentScopeRuntime/Response/Card.tsx#L28) | Runtime request/response 构建、增量合并、消息类型渲染 |

## 数据模型

先分清两套消息：

1. WebUI 消息：`IAgentScopeRuntimeWebUIMessage`，用于喂给通用 `Bubble.List` 渲染。它只有 `id`、`role`、`msgStatus`、`cards`，见 [IMessages.tsx](../../components/AgentScopeRuntimeWebUI/core/types/IMessages.tsx#L24)。
2. Runtime 消息：`IAgentScopeRuntimeRequest` / `IAgentScopeRuntimeResponse` / `IAgentScopeRuntimeMessage` / `IContent`，用于表达 AgentScope Runtime 协议，见 [AgentScopeRuntime/types.tsx](../../components/AgentScopeRuntimeWebUI/core/AgentScopeRuntime/types.tsx#L1)。

二者的关系是：

```text
Bubble.List item: IAgentScopeRuntimeWebUIMessage
  cards[0].code = AgentScopeRuntimeRequestCard | AgentScopeRuntimeResponseCard
  cards[0].data = IAgentScopeRuntimeRequest | IAgentScopeRuntimeResponse

IAgentScopeRuntimeRequest
  input[]: role/type/content[]

IAgentScopeRuntimeResponse
  output[]: IAgentScopeRuntimeMessage
    content[]: text/image/audio/video/file/data/refusal
```

为什么要包一层 WebUI message？因为通用聊天组件只认识 card，而 Runtime 协议更偏后端事件模型。`AgentScopeRuntimeWebUI` 的主要工作就是在这两层之间做适配。

## Provider 体系

Provider 在 [ComposedProvider.tsx](../../components/AgentScopeRuntimeWebUI/core/ChatAnywhere/ComposedProvider.tsx#L10) 中按顺序组合：

1. `ChatAnywhereI18nContextProvider`：国际化。
2. `ChatAnywhereOptionsContextProvider`：合并默认 options、主题和默认 session API。
3. `CustomCardsProvider`：注册 `AgentScopeRuntimeRequestCard`、`AgentScopeRuntimeResponseCard` 和 `options.cards`。
4. `ChatAnywhereSessionsContextProvider`：会话列表和当前会话。
5. `ChatAnywhereMessagesContextProvider`：当前会话消息。
6. `ChatAnywhereInputContextProvider`：输入框 loading/disabled。
7. `ChatAnyWhereLayoutContextProvider`：布局折叠状态。

### Options Provider 做了什么

[ChatAnywhereOptionsContextProvider](../../components/AgentScopeRuntimeWebUI/core/Context/ChatAnywhereOptionsContext.tsx#L22) 会补齐两个重要默认值：

- 如果未传 `session.api`，会创建一个基于 `localStorage` 的默认会话 API，见 [defaultSessionApi](../../components/AgentScopeRuntimeWebUI/core/Context/ChatAnywhereOptionsContext.tsx#L26) 和 [createDefaultSessionApi](../../components/AgentScopeRuntimeWebUI/core/Context/defaultSessionApi.ts#L115)。
- 根据响应式断点设置 `theme.narrowMode`，小屏自动进入窄屏，见 [narrowMode 合并](../../components/AgentScopeRuntimeWebUI/core/Context/ChatAnywhereOptionsContext.tsx#L43)。

如果设置了主题色或暗色模式，它还会用设计系统 `ConfigProvider` 包住内容，见 [themeToken 生成](../../components/AgentScopeRuntimeWebUI/core/Context/ChatAnywhereOptionsContext.tsx#L50)。

### Session Provider 做了什么

[ChatAnywhereSessionsContextProvider](../../components/AgentScopeRuntimeWebUI/core/Context/ChatAnywhereSessionsContext.tsx#L22) 挂载后调用 `session.api.getSessionList()`，把第一条会话设为当前会话，见 [useMount 初始化](../../components/AgentScopeRuntimeWebUI/core/Context/ChatAnywhereSessionsContext.tsx#L29)。

[useChatAnywhereSessionLoader](../../components/AgentScopeRuntimeWebUI/core/Context/ChatAnywhereSessionsContext.tsx#L51) 在会话切换时：

- 清空当前消息。
- 调 `session.api.getSession(currentSessionId)` 加载消息。
- 给加载出来的历史消息打上 `history: true`。
- 如果会话 `generating`，发出 `handleReconnect` 事件触发 SSE 重连，见 [reconnect 事件](../../components/AgentScopeRuntimeWebUI/core/Context/ChatAnywhereSessionsContext.tsx#L70)。

### Message Provider 做了什么

[ChatAnywhereMessagesContextProvider](../../components/AgentScopeRuntimeWebUI/core/Context/ChatAnywhereMessagesContext.tsx#L13) 维护当前会话消息数组，并提供：

- `updateMessage`：按 id 更新，找不到就追加，见 [updateMessage](../../components/AgentScopeRuntimeWebUI/core/Context/ChatAnywhereMessagesContext.tsx#L55)。
- `removeMessage`、`removeAllMessages`、`getMessage`。

### Input Provider 做了什么

[ChatAnywhereInputContextProvider](../../components/AgentScopeRuntimeWebUI/core/Context/ChatAnywhereInputContext.tsx#L14) 不只是一个全局 loading。它用 `stateMapRef` 按 `sessionId` 缓存每个会话的 loading/disabled，见 [stateMapRef](../../components/AgentScopeRuntimeWebUI/core/Context/ChatAnywhereInputContext.tsx#L23)。

这避免了一个常见问题：A 会话还在生成，切到 B 会话时输入框仍然被 A 的 loading 锁住。

## 一次发送请求的完整链路

最值得精读的是 [useChatController.tsx](../../components/AgentScopeRuntimeWebUI/core/Chat/hooks/useChatController.tsx#L19)。它是聊天控制中枢。

### 1. 用户点击发送

输入框在 [Input/index.tsx](../../components/AgentScopeRuntimeWebUI/core/Chat/Input/index.tsx#L42) 里执行：

- 调 `sender.beforeSubmit()`，返回 false 就阻止提交。
- 过滤出已经上传成功并带 `response.url` 的文件，见 [fileList 过滤](../../components/AgentScopeRuntimeWebUI/core/Chat/Input/index.tsx#L46)。
- 调 `props.onSubmit({ query, fileList })`。
- 清空输入内容和附件列表。

附件上传逻辑在 [useAttachments.tsx](../../components/AgentScopeRuntimeWebUI/core/Chat/Input/useAttachments.tsx#L9)。它复用 antd `Upload`，并支持粘贴文件上传，见 [handlePasteFile](../../components/AgentScopeRuntimeWebUI/core/Chat/Input/useAttachments.tsx#L21)。

### 2. 控制器确保会话存在

[handleSubmit](../../components/AgentScopeRuntimeWebUI/core/Chat/hooks/useChatController.tsx#L79) 的第一步是 abort 上一个 SSE，但不调用后端 cancel，因为这是“新请求覆盖旧请求”，不是用户点停止，见 [abort previous SSE](../../components/AgentScopeRuntimeWebUI/core/Chat/hooks/useChatController.tsx#L80)。

然后先 `ensureSession`，再递增 `activeRequestId`，见 [ensureSession 顺序](../../components/AgentScopeRuntimeWebUI/core/Chat/hooks/useChatController.tsx#L85)。这个顺序很重要：

- 创建新会话会导致 `currentSessionId` 变化。
- 会话变化的 effect 也可能递增 `activeRequestId`。
- 如果先递增 requestId 再创建会话，自己的请求可能被误判成过期，导致消息静默丢失。

### 3. 创建用户消息和助手占位消息

[useChatMessageHandler](../../components/AgentScopeRuntimeWebUI/core/Chat/hooks/useChatMessageHandler.tsx#L20) 负责创建 WebUI 消息：

- `createRequestMessage` 创建 user message，card code 是 `AgentScopeRuntimeRequestCard`，data 来自 `AgentScopeRuntimeRequestBuilder.handle(data)`，见 [createRequestMessage](../../components/AgentScopeRuntimeWebUI/core/Chat/hooks/useChatMessageHandler.tsx#L26)。
- `createResponseMessage` 创建 assistant message，初始 `cards: []`、`msgStatus: 'generating'`，见 [createResponseMessage](../../components/AgentScopeRuntimeWebUI/core/Chat/hooks/useChatMessageHandler.tsx#L67)。

这里用了 `ReactDOM.flushSync` 立即把用户消息写入状态，见 [flushSync 写入](../../components/AgentScopeRuntimeWebUI/core/Chat/hooks/useChatMessageHandler.tsx#L41)。这样 UI 能先显示用户消息，再进入响应占位。

### 4. RequestBuilder 把输入转成 Runtime request

[AgentScopeRuntimeRequestBuilder](../../components/AgentScopeRuntimeWebUI/core/AgentScopeRuntime/Request/Builder.tsx#L5) 负责协议转换：

- `query` 转成 `text` content，见 [buildTextContent](../../components/AgentScopeRuntimeWebUI/core/AgentScopeRuntime/Request/Builder.tsx#L41)。
- 附件按 MIME 转成 `image`、`video`、`audio`、`file` content，见 [文件类型判断](../../components/AgentScopeRuntimeWebUI/core/AgentScopeRuntime/Request/Builder.tsx#L20)。
- 最终生成 `input[0] = { role: 'user', type: 'message', content }`，见 [request data](../../components/AgentScopeRuntimeWebUI/core/AgentScopeRuntime/Request/Builder.tsx#L103)。
- `created_at` 是前端发送时间，秒级时间戳，见 [created_at](../../components/AgentScopeRuntimeWebUI/core/AgentScopeRuntime/Request/Builder.tsx#L103)。

历史消息通过 [getHistoryMessages](../../components/AgentScopeRuntimeWebUI/core/AgentScopeRuntime/Request/Builder.tsx#L9) 收集：遍历 WebUI messages，取每条消息第一张 card 的 `data.input` 或 `data.output` 拼成 Runtime 历史。

### 5. useChatRequest 发请求

[useChatRequest.request](../../components/AgentScopeRuntimeWebUI/core/Chat/hooks/useChatRequest.tsx#L191) 支持两种请求方式：

- 如果传了 `api.fetch`，完全交给使用方自定义，传入 `input`、`biz_params`、`signal`，见 [custom fetch](../../components/AgentScopeRuntimeWebUI/core/Chat/hooks/useChatRequest.tsx#L203)。
- 否则走默认 `fetch(api.baseURL)`，POST JSON，带 `Authorization: Bearer token`，见 [default fetch](../../components/AgentScopeRuntimeWebUI/core/Chat/hooks/useChatRequest.tsx#L207)。

默认请求体里几个关键字段：

```ts
{
  input: enableHistoryMessages ? historyMessages : historyMessages.slice(-1),
  session_id: getCurrentSessionId(),
  stream: true,
  biz_params,
}
```

对应源码在 [body 构造](../../components/AgentScopeRuntimeWebUI/core/Chat/hooks/useChatRequest.tsx#L213)。

## SSE 流式响应如何合并

SSE 处理入口是 [processSSEResponse](../../components/AgentScopeRuntimeWebUI/core/Chat/hooks/useChatRequest.tsx#L64)。

### 防串写守卫

每条请求都会携带两个快照：

- `myRequestId`：当前请求的递增 id。
- `mySessionId`：当前会话 id。

`processSSEResponse` 内部定义 `isStillActive()`，每次写 UI 前都检查它，见 [isStillActive](../../components/AgentScopeRuntimeWebUI/core/Chat/hooks/useChatRequest.tsx#L82)。只要用户切会话、发起新请求、重连新流，旧流就不能再写当前消息。

这个守卫是整个组件最重要的稳定性设计之一。没有它，旧 SSE chunk 很容易写到新会话或新请求里。

### Stream 读取

组件复用 `@agentscope-ai/chat` 的 `Stream` 工具读取 `response.body`，并把 `AbortController.signal` 传进去，见 [Stream loop](../../components/AgentScopeRuntimeWebUI/core/Chat/hooks/useChatRequest.tsx#L120)。

每个 chunk 默认用 `JSON.parse(chunk.data)` 解析，也可以用 `api.responseParser` 覆盖，见 [responseParser](../../components/AgentScopeRuntimeWebUI/core/Chat/hooks/useChatRequest.tsx#L145)。

注意：`IChatAnywhere.ts` 里 `responseParser` 的参数名写成 `response: Response`，见 [类型定义](../../components/AgentScopeRuntimeWebUI/core/types/IChatAnywhere.ts#L62)，但实际传入的是 `chunk.data`。阅读或改造时要以调用点为准。

### ResponseBuilder 的三种输入

[AgentScopeRuntimeResponseBuilder.handle](../../components/AgentScopeRuntimeWebUI/core/AgentScopeRuntime/Response/Builder.tsx#L243) 根据 `object` 分发：

- `object === 'response'`：整体 response 更新，见 [handleResponse](../../components/AgentScopeRuntimeWebUI/core/AgentScopeRuntime/Response/Builder.tsx#L108)。
- `object === 'message'`：新增或更新一条 Runtime message，见 [handleMessage](../../components/AgentScopeRuntimeWebUI/core/AgentScopeRuntime/Response/Builder.tsx#L148)。
- `object === 'content'`：更新某条 message 下的 content，见 [handleContent](../../components/AgentScopeRuntimeWebUI/core/AgentScopeRuntime/Response/Builder.tsx#L169)。

`handleResponse` 有一个关键保护：如果后来的整体 response 没带 output 或 output 为空，会保留之前流式积累的 output，见 [preserve existing output](../../components/AgentScopeRuntimeWebUI/core/AgentScopeRuntime/Response/Builder.tsx#L115)。

如果 incoming output 和 existing output 都有值，会按 message id 合并，优先保留已经有 content 的版本，见 [merge by id](../../components/AgentScopeRuntimeWebUI/core/AgentScopeRuntime/Response/Builder.tsx#L120)。这是为了避免后端局部 response 把已经流出来的工具调用内容覆盖掉。

### delta 内容怎么拼

`handleContent` 处理 `data.delta`，见 [delta 分支](../../components/AgentScopeRuntimeWebUI/core/AgentScopeRuntime/Response/Builder.tsx#L182)：

- `text` delta：追加到上一段 text，见 [text append](../../components/AgentScopeRuntimeWebUI/core/AgentScopeRuntime/Response/Builder.tsx#L186)。
- `image` delta：更新图片 URL，见 [image update](../../components/AgentScopeRuntimeWebUI/core/AgentScopeRuntime/Response/Builder.tsx#L188)。
- `data` delta：如果是工具输入消息，会把 string 字段按 key 拼接，见 [tool input data merge](../../components/AgentScopeRuntimeWebUI/core/AgentScopeRuntime/Response/Builder.tsx#L190)。

这个设计让工具参数也能像文本一样流式展示。

### 完成、失败和取消

当合并后的 response status 是 `completed` 或 `failed`，`useChatRequest` 会调用 `onFinish()`，见 [finish condition](../../components/AgentScopeRuntimeWebUI/core/Chat/hooks/useChatRequest.tsx#L161)。`onFinish()` 在控制器里对应 `finishResponse('finished')`，会：

- 把当前 response 的 `msgStatus` 设为 finished。
- 关闭输入框 loading。
- 更新消息。
- 同步消息到当前 session，见 [finishResponse](../../components/AgentScopeRuntimeWebUI/core/Chat/hooks/useChatController.tsx#L56)。

用户点击停止时走 [handleCancel](../../components/AgentScopeRuntimeWebUI/core/Chat/hooks/useChatController.tsx#L165)：

- 先 `finishResponse('interrupted')`。
- 立即调用 `api.cancel({ session_id })`。
- abort SSE。

这里刻意不递增 `activeRequestId`，见 [cancel 注释](../../components/AgentScopeRuntimeWebUI/core/Chat/hooks/useChatController.tsx#L157)。原因是 catch 分支还要用当前 builder 把进行中的 content 标成 `canceled`，从而去掉 Markdown 光标，见 [cancel catch](../../components/AgentScopeRuntimeWebUI/core/Chat/hooks/useChatRequest.tsx#L173) 和 [builder.cancel](../../components/AgentScopeRuntimeWebUI/core/AgentScopeRuntime/Response/Builder.tsx#L259)。

## 响应如何渲染成 UI

响应卡片入口是 [AgentScopeRuntimeResponseCard](../../components/AgentScopeRuntimeWebUI/core/AgentScopeRuntime/Response/Card.tsx#L84)。

默认渲染函数 [DefaultResponseRender](../../components/AgentScopeRuntimeWebUI/core/AgentScopeRuntime/Response/Card.tsx#L28) 先用 [mergeToolMessages](../../components/AgentScopeRuntimeWebUI/core/AgentScopeRuntime/Response/Builder.tsx#L8) 把工具 input/output 合并，再按 message type 分发：

| Runtime message type | 渲染组件 | 源码 |
| --- | --- | --- |
| `message` | Markdown / Images / Videos / Files / Audios | [Message.tsx](../../components/AgentScopeRuntimeWebUI/core/AgentScopeRuntime/Response/Message.tsx#L9) |
| `reasoning` | Thinking | [Reasoning.tsx](../../components/AgentScopeRuntimeWebUI/core/AgentScopeRuntime/Response/Reasoning.tsx#L4) |
| `plugin_call` / `tool_call` / `mcp_call` | ToolCall 或自定义工具卡片 | [Tool.tsx](../../components/AgentScopeRuntimeWebUI/core/AgentScopeRuntime/Response/Tool.tsx#L10) |
| `mcp_approval_request` | ToolCall + HITL 审批卡 | [Approval.tsx](../../components/AgentScopeRuntimeWebUI/core/AgentScopeRuntime/Response/Approval.tsx#L21) |
| `error` | Bubble.Interrupted | [Error.tsx](../../components/AgentScopeRuntimeWebUI/core/AgentScopeRuntime/Response/Error.tsx#L5) |

普通消息渲染在 [Message.tsx](../../components/AgentScopeRuntimeWebUI/core/AgentScopeRuntime/Response/Message.tsx#L14)：

- 文本用 `Markdown`，如果 content 仍是 `in_progress`，显示光标，见 [Markdown cursor](../../components/AgentScopeRuntimeWebUI/core/AgentScopeRuntime/Response/Message.tsx#L24)。
- 图片、视频、音频、文件走默认媒体卡片。
- `api.replaceMediaURL` 会在渲染前替换媒体 URL，见 [formatMediaURL](../../components/AgentScopeRuntimeWebUI/core/AgentScopeRuntime/Response/Message.tsx#L12)。
- 文件点击可用 `api.onFileCardClick` 覆盖，见 [Files onClick](../../components/AgentScopeRuntimeWebUI/core/AgentScopeRuntime/Response/Message.tsx#L35)。

工具渲染在 [Tool.tsx](../../components/AgentScopeRuntimeWebUI/core/AgentScopeRuntime/Response/Tool.tsx#L10)：

- 默认用 `ToolCall`。
- 如果配置了 `customToolRenderConfig[toolName]`，则直接渲染自定义组件，见 [custom tool render](../../components/AgentScopeRuntimeWebUI/core/AgentScopeRuntime/Response/Tool.tsx#L60)。
- 历史工具调用默认折叠，避免大量 CodeMirror EditorView 初始化造成卡顿，见 [defaultOpen](../../components/AgentScopeRuntimeWebUI/core/AgentScopeRuntime/Response/Tool.tsx#L50)。

响应底部 actions 在 [Actions.tsx](../../components/AgentScopeRuntimeWebUI/core/AgentScopeRuntime/Response/Actions.tsx#L24)：

- 默认左侧是复制整个 response JSON。
- 最后一条响应默认显示重新生成按钮，见 [handleReplace emit](../../components/AgentScopeRuntimeWebUI/core/AgentScopeRuntime/Response/Actions.tsx#L57)。
- 右侧默认展示 token usage，也可通过 `actions.right` 覆盖或隐藏，见 [right actions](../../components/AgentScopeRuntimeWebUI/core/AgentScopeRuntime/Response/Actions.tsx#L64)。

## 请求如何渲染成 UI

请求卡片入口是 [AgentScopeRuntimeRequestCard](../../components/AgentScopeRuntimeWebUI/core/AgentScopeRuntime/Request/Card.tsx#L104)。

默认渲染函数 [DefaultRequestRender](../../components/AgentScopeRuntimeWebUI/core/AgentScopeRuntime/Request/Card.tsx#L17) 把 Runtime request content 转成通用默认卡片：

- `text` -> `Text`
- `image` -> `Images`
- `video` -> `Videos`
- `audio` -> `Audios`
- `file` -> `Files`

请求底部 actions 在 [Request/Actions.tsx](../../components/AgentScopeRuntimeWebUI/core/AgentScopeRuntime/Request/Actions.tsx#L16)，如果传了 `requestActions`，会使用用户配置；否则默认复制请求文本。

## 人工审批链路

当后端返回 `mcp_approval_request`，ResponseCard 会把它当成审批型 Tool 渲染，见 [approval route](../../components/AgentScopeRuntimeWebUI/core/AgentScopeRuntime/Response/Card.tsx#L62)。

[Approval.tsx](../../components/AgentScopeRuntimeWebUI/core/AgentScopeRuntime/Response/Approval.tsx#L21) 会：

1. 设置输入框 loading 文案并禁用输入，见 [disable input](../../components/AgentScopeRuntimeWebUI/core/AgentScopeRuntime/Response/Approval.tsx#L82)。
2. 用户确认或取消后，构造一条 `mcp_approval_response` 用户消息，见 [approval response](../../components/AgentScopeRuntimeWebUI/core/AgentScopeRuntime/Response/Approval.tsx#L41)。
3. 发出 `handleApproval` 事件，让控制器走统一请求链路，见 [emit handleApproval](../../components/AgentScopeRuntimeWebUI/core/AgentScopeRuntime/Response/Approval.tsx#L59)。

控制器收到事件后执行 [handleApproval](../../components/AgentScopeRuntimeWebUI/core/Chat/hooks/useChatController.tsx#L124)，创建用户审批请求消息，再发送新请求。

## 重连与重新生成

### 重连

会话加载时如果 `session.generating === true`，会发 `handleReconnect` 事件，见 [SessionLoader](../../components/AgentScopeRuntimeWebUI/core/Context/ChatAnywhereSessionsContext.tsx#L70)。

控制器中的 [handleReconnect](../../components/AgentScopeRuntimeWebUI/core/Chat/hooks/useChatController.tsx#L206) 会：

- abort 旧流。
- 创建新的 AbortController。
- 递增 `activeRequestId`。
- 创建一个 assistant 占位响应。
- 调用 `api.reconnect({ session_id, signal })`，见 [reconnect API](../../components/AgentScopeRuntimeWebUI/core/Chat/hooks/useChatRequest.tsx#L229)。

如果重连结束后占位响应仍是 generating，会清理空占位并关闭 loading，见 [reconnect cleanup](../../components/AgentScopeRuntimeWebUI/core/Chat/hooks/useChatController.tsx#L225)。

### 重新生成

响应 footer 的重新生成按钮发 `handleReplace` 事件，见 [Response Actions](../../components/AgentScopeRuntimeWebUI/core/AgentScopeRuntime/Response/Actions.tsx#L57)。

控制器中的 [handleRegenerate](../../components/AgentScopeRuntimeWebUI/core/Chat/hooks/useChatController.tsx#L182) 会：

- abort 旧流。
- 移除旧 assistant message。
- 创建新的 assistant 占位。
- 用当前历史消息重新请求。

## 扩展点速查

### 1. 自定义请求方式

配置位置：`options.api.fetch`，类型见 [IChatAnywhere.ts](../../components/AgentScopeRuntimeWebUI/core/types/IChatAnywhere.ts#L31)。

```tsx
const options = {
  api: {
    fetch: async ({ input, biz_params, signal }) => {
      return fetch('/runtime/run', {
        method: 'POST',
        body: JSON.stringify({ input, biz_params, stream: true }),
        signal,
      });
    },
  },
};
```

### 2. 是否携带历史消息

配置位置：`options.api.enableHistoryMessages`，类型见 [enableHistoryMessages](../../components/AgentScopeRuntimeWebUI/core/types/IChatAnywhere.ts#L52)。

- `false`：默认只发最后一条 Runtime input。
- `true`：发送 `AgentScopeRuntimeRequestBuilder.getHistoryMessages()` 得到的完整 Runtime 历史。

### 3. 自定义流式 chunk 解析

配置位置：`options.api.responseParser`，调用点见 [useChatRequest.tsx](../../components/AgentScopeRuntimeWebUI/core/Chat/hooks/useChatRequest.tsx#L145)。

适合后端 SSE data 不是直接 JSON 的情况，例如外层还有包装字段。

### 4. 自定义工具卡片

配置位置：`options.customToolRenderConfig`，类型见 [customToolRenderConfig](../../components/AgentScopeRuntimeWebUI/core/types/IChatAnywhere.ts#L417)，渲染点见 [Tool.tsx](../../components/AgentScopeRuntimeWebUI/core/AgentScopeRuntime/Response/Tool.tsx#L60)。

```tsx
const options = {
  customToolRenderConfig: {
    weather: ({ data }) => <WeatherCard data={data} />,
  },
};
```

key 要匹配工具消息 `content[0].data.name`。

### 5. 自定义 request / response 气泡

配置位置：`options.request` 和 `options.response`，类型见 [request slots](../../components/AgentScopeRuntimeWebUI/core/types/IChatAnywhere.ts#L465) 与 [response slots](../../components/AgentScopeRuntimeWebUI/core/types/IChatAnywhere.ts#L503)。

它们有两种能力：

- `render`：整段替换默认气泡。
- `prepend` / `append`：在默认气泡外侧追加内容。

`render` 里可以调用 `fallback()` 拿到 SDK 默认渲染：

```tsx
const options = {
  response: {
    render: ({ data, fallback }) => (
      <>
        <DebugHeader status={data.status} />
        {fallback()}
      </>
    ),
  },
};
```

### 6. 自定义 actions

用户消息 actions：`options.requestActions`，类型见 [requestActions](../../components/AgentScopeRuntimeWebUI/core/types/IChatAnywhere.ts#L517)。

助手消息 actions：`options.actions`，类型见 [actions](../../components/AgentScopeRuntimeWebUI/core/types/IChatAnywhere.ts#L530)，渲染点见 [Response/Actions.tsx](../../components/AgentScopeRuntimeWebUI/core/AgentScopeRuntime/Response/Actions.tsx#L24)。

### 7. 自定义会话面板

如果想隐藏内置左侧会话列表：

```tsx
const options = {
  session: {
    multiple: true,
    hideBuiltInSessionList: true,
  },
};
```

内置列表是否展示由 Layout 判断，见 [showLeft](../../components/AgentScopeRuntimeWebUI/core/Layout/index.tsx#L22)。外部可用 `useChatAnywhereSessionsState` 和 `useChatAnywhereSessions` 自己渲染会话面板，导出位置见 [AgentScopeRuntimeWebUI/index.tsx](../../components/AgentScopeRuntimeWebUI/index.tsx#L4)。

### 8. ref 控制

ref 类型见 [IRef.ts](../../components/AgentScopeRuntimeWebUI/core/types/IRef.ts#L4)，实现见 [Ref/index.tsx](../../components/AgentScopeRuntimeWebUI/core/Ref/index.tsx#L8)。

目前开放：

- `ref.current.messages`：消息操作集合。
- `ref.current.input.setDisabled(disabled)`：禁用/解禁输入。
- `ref.current.input.submit(data)`：通过事件总线触发 `handleSubmit`。

## 需要特别注意的细节

1. `activeRequestId` 是 SSE 安全写入的核心，不要随意改动递增时机。相关逻辑在 [useChatController.tsx](../../components/AgentScopeRuntimeWebUI/core/Chat/hooks/useChatController.tsx#L28) 和 [isStillActive](../../components/AgentScopeRuntimeWebUI/core/Chat/hooks/useChatRequest.tsx#L82)。
2. 用户点击取消时不要递增 `activeRequestId`。否则 `builder.cancel()` 没机会更新 content 状态，Markdown 光标可能残留，见 [handleCancel 注释](../../components/AgentScopeRuntimeWebUI/core/Chat/hooks/useChatController.tsx#L146)。
3. 会话切换只 abort 前端 SSE，不调用后端 cancel。因为切会话不等于用户停止旧会话生成，见 [session switch effect](../../components/AgentScopeRuntimeWebUI/core/Chat/hooks/useChatController.tsx#L234)。
4. `requestActions` 只有在传入 `options.requestActions` 时才会渲染；否则 `RequestActions` 直接返回 null，见 [RequestActions](../../components/AgentScopeRuntimeWebUI/core/AgentScopeRuntime/Request/Actions.tsx#L16)。
5. `sender.onSubmit` / `sender.onCancel` 在类型里存在，但当前输入框实际走的是 `Chat` 传入的 controller 回调，见 [Input props submit](../../components/AgentScopeRuntimeWebUI/core/Chat/Input/index.tsx#L46)。研究或扩展时要看调用点，不只看接口定义。
6. 历史分页是前端模拟分页，只分页 `history: true` 的消息，新消息始终全量展示，见 [useSimulatedMessagePagination](../../components/AgentScopeRuntimeWebUI/core/Chat/MessageList/index.tsx#L18)。

## 推荐阅读顺序

如果你要系统研究这个组件，建议按这个顺序读：

1. [core/types/IChatAnywhere.ts](../../components/AgentScopeRuntimeWebUI/core/types/IChatAnywhere.ts#L386)：先知道外部能配置什么。
2. [core/ChatAnywhere/index.tsx](../../components/AgentScopeRuntimeWebUI/core/ChatAnywhere/index.tsx#L12)：看入口如何注册默认卡片。
3. [core/Chat/index.tsx](../../components/AgentScopeRuntimeWebUI/core/Chat/index.tsx#L8)：看页面如何把 MessageList 和 Input 接到 controller。
4. [useChatController.tsx](../../components/AgentScopeRuntimeWebUI/core/Chat/hooks/useChatController.tsx#L19)：读完整提交、取消、重试、重连链路。
5. [useChatRequest.tsx](../../components/AgentScopeRuntimeWebUI/core/Chat/hooks/useChatRequest.tsx#L27)：读 SSE 请求和 active guard。
6. [Request/Builder.tsx](../../components/AgentScopeRuntimeWebUI/core/AgentScopeRuntime/Request/Builder.tsx#L5)：理解用户输入如何变成 Runtime request。
7. [Response/Builder.tsx](../../components/AgentScopeRuntimeWebUI/core/AgentScopeRuntime/Response/Builder.tsx#L6)：理解 Runtime response/message/content 如何流式合并。
8. [Response/Card.tsx](../../components/AgentScopeRuntimeWebUI/core/AgentScopeRuntime/Response/Card.tsx#L28) 和 [Tool.tsx](../../components/AgentScopeRuntimeWebUI/core/AgentScopeRuntime/Response/Tool.tsx#L10)：理解 UI 渲染分发。

把这 8 个点串起来，`AgentScopeRuntimeWebUI` 的主要逻辑就基本打通了。
