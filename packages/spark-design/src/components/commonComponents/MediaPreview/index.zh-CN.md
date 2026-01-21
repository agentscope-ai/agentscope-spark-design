---
title: MediaPreview 媒体预览
group:
  title: 数据展示
  order: 5
---

<DemoTitle title="MediaPreview" desc="用于预览图片和视频的弹窗组件"></DemoTitle>

<code src="./demo/demo1.tsx" center>示例</code>

<Install>import { MediaPreview } from '@agentscope-ai/design'</Install>

#### API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| visible | 是否显示预览 | boolean | false |
| mediaList | 媒体列表 | MediaItem[] | [] |
| currentIndex | 当前选中的索引 | number | 0 |
| onClose | 关闭回调 | () => void | - |
| className | 自定义样式类名 | string | - |

#### MediaItem

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| type | 媒体类型 | 'image' \| 'video' | - |
| src | 媒体资源地址 | string | - |
| alt | 媒体替代文本 | string | - |
