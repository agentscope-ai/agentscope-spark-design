---
title: FileIcon 文件图标
group:
  title: 数据展示
  order: 4
---

<DemoTitle title="FileIcon" desc="用于展示不同文件类型的图标，也可通过 FileCard 展示文件信息。"></DemoTitle>

<code src="./demo/demo.tsx" center>示例</code>

<Install>import { FileIcon, FileCard } from '@agentscope-ai/design'</Install>

#### 内置文件类型

当前内置支持的文件类型（通过 `type` 传入）：

- `common`
- `epub`
- `excel`
- `html`
- `image`
- `md`
- `mobi`
- `pdf`
- `ppt`
- `txt`
- `web`
- `word`

#### API

##### FileIcon Props

<ApiParser source="./index.tsx" id="SparkFileIconProps"></ApiParser>

##### FileCard Props

<ApiParser source="./index.tsx" id="SparkFileCardProps"></ApiParser>

