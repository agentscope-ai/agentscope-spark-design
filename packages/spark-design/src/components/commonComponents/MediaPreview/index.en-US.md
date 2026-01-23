---
title: MediaPreview
group:
  title: Data Display
  order: 5
---

<DemoTitle title="MediaPreview" desc="A modal component for previewing images and videos"></DemoTitle>

<code src="./demo/demo1.tsx" center>Example</code>

<Install>import { MediaPreview } from '@agentscope-ai/design'</Install>

#### API

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| visible | Whether to show the preview | boolean | false |
| mediaList | List of media items | MediaItem[] | [] |
| currentIndex | Current active index | number | 0 |
| onClose | Close callback | () => void | - |
| className | Custom CSS class | string | - |

#### MediaItem

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| type | Media type | 'image' \| 'video' | - |
| src | Media resource URL | string | - |
| alt | Media alternative text | string | - |
