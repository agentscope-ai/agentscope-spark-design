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
  animationConfig={{ characterInterval: 12 }}
/>
```
`animationConfig.characterInterval` 控制相邻文字开始渐显的间隔（毫秒，默认 `5`）。值越大越慢，可设为 `12` 或 `20`；`0` 同时淡入新增内容。大段突发内容会自动加快以限制积压，实际画面按屏幕刷新率绘制。容器使用自然高度，不播放高度动画；尊重减少动态效果设置。ChatAnywhere Text 卡片可传入相同配置。
