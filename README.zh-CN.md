# AgentScope Spark Design

阿里云飞天实验室 UI 组件库 - Monorepo 版本

[Deploy Docs](https://github.com/agentscope-ai/agentscope-spark-design/actions/workflows/deploy-docs.yml)

简体中文 | [English](./README.md)

## 📚 文档

在线文档：**hhttps://sparkdesign.agentscope.io/**

## 📦 包含的子包

| 包名 | 路径 | 描述 |
| --- | --- | --- |
| **@agentscope-ai/design** | `packages/spark-design` | 核心设计系统组件库，基于 Ant Design 封装的 UI 组件 |
| **@agentscope-ai/chat** | `packages/spark-chat` | LLM 对话组件库，用于构建 AI 聊天体验 |

## 🚀 快速开始

### 安装依赖

```bash
# 使用 pnpm（推荐）
pnpm install
```

### 开发

```bash
# 启动 spark-design 开发服务器
pnpm run start:spark-design

# 启动 spark-chat 开发服务器
pnpm run start:spark-chat
```

### 构建

```bash
# 构建所有包
pnpm run build

# 仅构建 spark-design
pnpm run build:spark-design

# 仅构建 spark-chat
pnpm run build:spark-chat

# 构建文档
cd packages/spark-design
pnpm run docs:build

# 构建 GitHub Pages 版本
pnpm run docs:build:gh
```

## 📖 文档部署

文档已配置自动部署到 GitHub Pages。

- **快速指南**: [DEPLOY_QUICKSTART.md](./DEPLOY_QUICKSTART.md)
- **详细文档**: [GITHUB_PAGES_SETUP.md](./GITHUB_PAGES_SETUP.md)

每次推送到 `main` 分支时，文档会自动构建并部署。

## 🏗️ Monorepo 结构

```
agentscope-spark-design/
├── packages/
│   ├── spark-design/              # 核心 UI 组件库
│   │   ├── src/
│   │   │   ├── antd/              # antd 主题配置
│   │   │   ├── components/        # UI 组件
│   │   │   │   ├── commonComponents/   # 通用组件
│   │   │   │   └── mobileComponents/   # 移动端组件
│   │   │   ├── hooks/             # 公共 Hooks
│   │   │   ├── libs/              # 工具函数
│   │   │   └── i18n/              # 国际化
│   │   ├── docs/                  # 文档源文件
│   │   └── package.json
│   │
│   └── spark-chat/                # LLM 对话组件库
│       ├── components/
│       │   ├── AGUI/              # AGUI 组件
│       │   ├── Bubble/            # 消息气泡
│       │   ├── Sender/            # 消息发送
│       │   ├── Markdown/          # Markdown 渲染
│       │   ├── Mermaid/           # 流程图渲染
│       │   ├── Conversations/     # 会话列表
│       │   ├── ChatAnywhere/      # 开箱即用聊天容器
│       │   └── ...
│       ├── docs/                  # 文档源文件
│       └── package.json
│
├── .github/
│   └── workflows/
│       └── deploy-docs.yml        # GitHub Actions 配置
├── package.json                   # 根配置
└── pnpm-lock.yaml
```

## 🔧 技术栈

- **构建工具**: [Father](https://github.com/umijs/father)
- **文档工具**: [Dumi](https://d.umijs.org/)
- **包管理**: [pnpm](https://pnpm.io/)
- **UI 框架**: [Ant Design 5](https://ant.design/)
- **样式方案**: [Tailwind CSS](https://tailwindcss.com/) + [antd-style](https://ant-design.github.io/antd-style/)
- **代码规范**: ESLint + Stylelint + Prettier + Husky

## ✨ 核心功能

### @agentscope-ai/design

- 🎨 基于 Ant Design 5 的自定义主题系统
- 🔧 封装增强的 UI 组件（Button、Modal、Select 等）
- 📱 支持移动端组件
- 🎯 自定义图标系统（@agentscope-ai/icons）
- 🌐 国际化支持

### @agentscope-ai/chat

- 🤖 开箱即用的 LLM 对话体验
- 📝 Markdown 渲染（支持数学公式、代码高亮）
- 🎨 可扩展的卡片组件系统
- 📊 Mermaid 流程图支持
- 🔄 流式响应支持
- 🎙️ 语音输入支持

## 📝 开发规范

参见 `.cursor/rules/` 目录下的规则文件：

- `mastergo.mdc` - masterGo 数据处理规则
- `commonComponents.mdc` - 标准组件识别规则

## 🤝 贡献

欢迎贡献代码！请确保：

1. 遵循现有的代码风格
2. 添加必要的测试
3. 更新相关文档

## 📄 许可证

- spark-design: MIT
- spark-chat: Apache-2.0

## 🔗 相关链接

- [在线文档](https://agentscope-ai.github.io/agentscope-spark-design/)
- [GitHub 仓库](https://github.com/agentscope-ai/agentscope-spark-design)
- [问题反馈](https://github.com/agentscope-ai/agentscope-spark-design/issues)
- [阿里云百炼](https://bailian.console.aliyun.com/)

