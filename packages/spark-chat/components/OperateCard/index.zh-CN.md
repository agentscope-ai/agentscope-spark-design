---
order: 3

group:
  title: 输出
  order: 3
title: OperateCard
description: 一种展示对话流中AI操作行为的卡片
---

<DemoTitle title="OperateCard" desc="一种展示对话流中AI操作行为的卡片" llmTxtName="OperateCard"></DemoTitle>

<code src="./demo/index.tsx" height="auto">示例</code>

<Install>import { OperateCard } from '@agentscope-ai/chat'</Install>

#### 更多 OperateCard 示例

<code src="./demo/rag.tsx" height="auto">RAG</code>
<code src="./demo/toolCall.tsx" height="auto"> 工具调用</code>
<code src="./demo/webSearch.tsx" height="auto">联网搜索</code>
<code src="./demo/todo.tsx" height="auto">待办</code>
<code src="./demo/thinking.tsx" height="auto">思考</code>

#### API

##### IOperateCardProps

<ApiParser source="./OperateCard.tsx" id="IOperateCardProps"></ApiParser>

##### IRagProps

<ApiParser source="./preset/Rag.tsx" id="IRagProps"></ApiParser>

##### IThinkingProps

<ApiParser source="./preset/Thinking.tsx" id="IThinkingProps"></ApiParser>

##### ITodoListProps

<ApiParser source="./preset/TodoList.tsx" id="ITodoListProps"></ApiParser>

##### IToolCallProps

<ApiParser source="./preset/ToolCall.tsx" id="IToolCallProps"></ApiParser>

##### IWebSearchProps

<ApiParser source="./preset/WebSearch.tsx" id="IWebSearchProps"></ApiParser>


