---
group:
  title: Output
  order: 3
title: Markdown
description: Markdown is a React component for rendering Markdown text
---

<DemoTitle title="Markdown" desc="Markdown is a React component for rendering Markdown text. It supports various Markdown syntax such as headings, lists, links, images, code blocks, etc."></DemoTitle>

<code src="./demo/basic.tsx" height="600">Example</code>

<Install>
import { Markdown } from '@agentscope-ai/chat';
</Install>

#### More Examples

<code src="./demo/latex.tsx" height="600">Latex</code>
<code src="./demo/citations.tsx" height="auto">Citations</code>
<code src="./demo/cursor.tsx" height="auto">Cursor</code>
<code src="./demo/footnotes.tsx" height="auto">Footnotes</code>


#### API

<ApiParser source="./types.tsx" id="MarkdownProps"></ApiParser>
## Fade-in animation options

```tsx
<Markdown
  content={content}
  cursor={isStreaming}
  animation
  animationConfig={{ characterInterval: 12 }}
/>
```
`animationConfig.characterInterval` controls the stagger in milliseconds (default `5`). Larger values are slower: try `12` or `20`; `0` fades incoming text simultaneously. Large bursts accelerate to bound backlog; actual paints follow screen refresh rate. Container height remains natural with no height animation. Reduced motion is respected. ChatAnywhere Text cards accept the same configuration.
