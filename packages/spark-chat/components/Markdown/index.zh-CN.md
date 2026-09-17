---
group:
  title: 输出
  order: 3
title: Markdown
description: 是一个用于渲染 Markdown 文本的 React 组件
---

<DemoTitle title="Markdown" desc="是一个用于渲染 Markdown 文本的 React 组件。它支持各种 Markdown 语法，例如标题、列表、链接、图片、代码块等。"></DemoTitle>

<code src="./demo/basic.tsx" height="600">示例</code>

<Install>
import { Markdown } from '@agentscope-ai/chat';
</Install>


#### 更多示例

<code src="./demo/latex.tsx" height="600">Latex</code>
<code src="./demo/citations.tsx" height="auto">引用</code>
<code src="./demo/cursor.tsx" height="auto">光标</code>


#### API

<ApiParser source="./types.tsx" id="MarkdownProps"></ApiParser>

## 淡入动画配置

```tsx
<Markdown
  content={content}
  cursor={isStreaming}
  animation
  animationConfig={{ fadeDuration: 120, easing: 'ease-out' }}
/>
```
`fadeDuration` 单位为毫秒，默认 `200`；`easing` 默认 `ease-in-out`。仅启用 `animation` 且正在流式输出时生效，不控制逐字输出速度。ChatAnywhere 的 Text 卡片可在 `data.animationConfig` 中传入相同配置。
