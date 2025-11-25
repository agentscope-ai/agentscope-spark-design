---
order: 2

group:
  title: Output
  order: 3
title: Process
description: Visualization of model problem-solving process

demo:
  cols: 1
---

<DemoTitle title="Process" desc="Visualization of model problem-solving process" llmTxtName="Accordion"></DemoTitle>

<code src="./demo/thinking.tsx" height="auto">Deep Thinking Example</code>

<Install>import { Process, DeepThinking } from '@agentscope-ai/chat'</Install>

#### Process Examples

The following are examples and variations of this component
<code src="./demo/steps.tsx" height="auto">With Multiple Steps</code>
<code src="./demo/search.tsx" height="auto">Search Scenario Steps</code>

#### API

##### IAccordionProps

<ApiParser source="./Accordion.tsx" id="IAccordionProps"></ApiParser>

##### IDeepThinking

<ApiParser source="./DeepThinking.tsx" id="IDeepThinking"></ApiParser>
