---
order: 2

group:
  title: 输出
  order: 3
title: Process
description: 模型处理问题的过程展示

demo:
  cols: 1
---

<DemoTitle title="Process" desc="模型处理问题的过程展示" llmTxtName="Accordion"></DemoTitle>

<code src="./demo/thinking.tsx" height="auto">深度思考示例</code>

<Install>import { Process, DeepThinking } from '@agentscope-ai/chat'</Install>

#### 模型处理过程示例

以下是此组件的示例和变体
<code src="./demo/steps.tsx" height="auto">包含多个步骤</code>
<code src="./demo/search.tsx" height="auto">搜索场景的步骤展示</code>

#### API

##### IAccordionProps

<ApiParser source="./Accordion.tsx" id="IAccordionProps"></ApiParser>

##### IDeepThinking

<ApiParser source="./DeepThinking.tsx" id="IDeepThinking"></ApiParser>
