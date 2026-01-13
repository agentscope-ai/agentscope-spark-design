---
group:
  title: Output
  order: 3
title: AssetsPreview
description: Preview assets in conversations
---

<DemoTitle title="AssetsPreview" desc="Preview assets in conversations"></DemoTitle>

<Install>import { AssetsPreview } from '@agentscope-ai/chat'</Install>

#### AssetsPreview Examples

<code src="./demo/left.tsx" height="auto">Multiple images left-aligned</code>
<code src="./demo/center.tsx" height="auto">Single image centered</code>
<code src="./demo/video.tsx" height="auto">Video preview</code>
<code src="./demo/audio.tsx" height="auto">Audio preview</code>

#### API

##### IAssetsPreviewProps

<ApiParser source="./index.tsx" id="IAssetsPreviewProps"></ApiParser>

##### IImage

<ApiParser source="./types.tsx" id="IImage"></ApiParser>

##### IVideo

<ApiParser source="./types.tsx" id="IVideo"></ApiParser>

##### IAudio

<ApiParser source="./types.tsx" id="IAudio"></ApiParser>
