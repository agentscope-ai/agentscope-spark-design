---
order: 1
title: 概述
---

# 概述

<b class="montserrat">Alibaba Cloud Spark Chat</b> 是基于 <b class="montserrat" style="margin: 0 -0.5em">Alibaba Cloud Spark Design</b> 的一个免费、开源的 <a href="https://react.dev/" target="_blank" rel="noopener noreferrer">React</a> 对话框架，用于构建优秀的 LLM 对话体验。

## 特性

- 🏆 源自阿里云百炼最佳实践：包含了众多我们的想法与真实业务实践，帮助业务快速构建优秀的 LLM 对话体验。
- 🤖 开箱即用的模型对接能力：轻松对接符合 OpenAI 标准的模型推理服务。
- 🧩 极致的拓展能力：通过卡片形式（自定义组件）展示模型输出，支持多种格式的输出展示。
- 📝 TypeScript 全覆盖：采用 TypeScript 开发，提供完整类型支持，提升开发体验与可靠性。
- 🎨 CSS-in-JS 实践：采用更现代的 CSS-in-JS 样式方案，样式自动按需加载，不强依赖开发者工程化环境配置。

<code src="../templates/demo/chatanywhereDemo/index.tsx" iframe="700" noConfigProvider compact>快速体验</code>

## 兼容环境

- 现代浏览器
- <a href="https://www.electronjs.org/" target="_blank" rel="noopener noreferrer">Electron</a>
- <a href="https://v2.tauri.app/" target="_blank" rel="noopener noreferrer">tauri</a>

| Edge            | Firefox         | Chrome          | Safari          | Opera           | Electron        |
| --------------- | --------------- | --------------- | --------------- | --------------- | --------------- |
| last 2 versions | last 2 versions | last 2 versions | last 2 versions | last 2 versions | last 2 versions |

## 安装

### 使用 npm 进行安装

> yarn, pnpm, bun 安装的方式不再赘述， 如果你的网络环境不佳，推荐使用 <a href="https://github.com/cnpm/cnpm" target="_blank" rel="noopener noreferrer">cnpm</a>。

```bash
$ npm install antd --save
$ npm install @agentscope-ai/design --save
$ npm install @agentscope-ai/chat --save
```

> 注意：如果你是阿里内网开发者，请使用 `tnpm install @ali/agentscope-ai-chat @ali/agentscope-ai-design --save`

## 按需加载

`@agentscope-ai/chat` 默认支持基于 ES modules 的 tree shaking。

## TypeScript

`@agentscope-ai/chat` 使用 TypeScript 进行书写并提供了完整的定义文件。

## 开源

`@agentscope-ai/design` 和 `@agentscope-ai/chat` 仍在加速推进开源中，我们预计在 2025 年年底完成开源。目前可以通过 npm 使用我们的项目。
