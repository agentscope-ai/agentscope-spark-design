# AgentScope Spark Design

Alibaba Cloud Feitian Lab UI Component Library - Monorepo Version

[![Deploy Docs](https://github.com/agentscope-ai/agentscope-spark-design/actions/workflows/deploy-docs.yml/badge.svg)](https://github.com/agentscope-ai/agentscope-spark-design/actions/workflows/deploy-docs.yml)

[简体中文](./README.zh-CN.md) | English

## 📚 Documentation

Online Documentation: **https://agentscope-ai.github.io/agentscope-spark-design/**

## 📦 Packages

| Package | Path | Description |
| --- | --- | --- |
| **@agentscope-ai/design** | `packages/spark-design` | Core design system component library, enhanced UI components based on Ant Design |
| **@agentscope-ai/chat** | `packages/spark-chat` | LLM conversation component library for building AI chat experiences |

## 🚀 Quick Start

### Installation

```bash
# Using pnpm (recommended)
pnpm install
```

### Development

```bash
# Start spark-design dev server
pnpm run start:spark-design

# Start spark-chat dev server
pnpm run start:spark-chat
```

### Build

```bash
# Build all packages
pnpm run build

# Build spark-design only
pnpm run build:spark-design

# Build spark-chat only
pnpm run build:spark-chat

# Build documentation
cd packages/spark-design
pnpm run docs:build

# Build GitHub Pages version
pnpm run docs:build:gh
```

## 📖 Documentation Deployment

Documentation is configured to automatically deploy to GitHub Pages.

- **Quick Guide**: [DEPLOY_QUICKSTART.md](./DEPLOY_QUICKSTART.md)
- **Detailed Documentation**: [GITHUB_PAGES_SETUP.md](./GITHUB_PAGES_SETUP.md)

Documentation is automatically built and deployed on every push to the `main` branch.

## 🏗️ Monorepo Structure

```
agentscope-spark-design/
├── packages/
│   ├── spark-design/              # Core UI component library
│   │   ├── src/
│   │   │   ├── antd/              # Ant Design theme config
│   │   │   ├── components/        # UI components
│   │   │   │   ├── commonComponents/   # Common components
│   │   │   │   └── mobileComponents/   # Mobile components
│   │   │   ├── hooks/             # Shared hooks
│   │   │   ├── libs/              # Utility functions
│   │   │   └── i18n/              # Internationalization
│   │   ├── docs/                  # Documentation source
│   │   └── package.json
│   │
│   └── spark-chat/                # LLM conversation library
│       ├── components/
│       │   ├── AGUI/              # AGUI components
│       │   ├── Bubble/            # Message bubble
│       │   ├── Sender/            # Message sender
│       │   ├── Markdown/          # Markdown renderer
│       │   ├── Mermaid/           # Diagram renderer
│       │   ├── Conversations/     # Conversation list
│       │   ├── ChatAnywhere/      # Ready-to-use chat container
│       │   └── ...
│       ├── docs/                  # Documentation source
│       └── package.json
│
├── .github/
│   └── workflows/
│       └── deploy-docs.yml        # GitHub Actions config
├── package.json                   # Root config
└── pnpm-lock.yaml
```

## 🔧 Tech Stack

- **Build Tool**: [Father](https://github.com/umijs/father)
- **Documentation**: [Dumi](https://d.umijs.org/)
- **Package Manager**: [pnpm](https://pnpm.io/)
- **UI Framework**: [Ant Design 5](https://ant.design/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) + [antd-style](https://ant-design.github.io/antd-style/)
- **Code Quality**: ESLint + Stylelint + Prettier + Husky

## ✨ Core Features

### @agentscope-ai/design

- 🎨 Custom theme system based on Ant Design 5
- 🔧 Enhanced UI components (Button, Modal, Select, etc.)
- 📱 Mobile component support
- 🎯 Custom icon system (@agentscope-ai/icons)
- 🌐 Internationalization support

### @agentscope-ai/chat

- 🤖 Ready-to-use LLM conversation experience
- 📝 Markdown rendering (with math formulas and code highlighting)
- 🎨 Extensible card component system
- 📊 Mermaid diagram support
- 🔄 Streaming response support
- 🎙️ Voice input support

## 📝 Development Guidelines

See rule files in `.cursor/rules/` directory:

- `mastergo.mdc` - MasterGo data processing rules
- `标准组件列表.mdc` - Standard component identification rules

## 🤝 Contributing

Contributions are welcome! Please ensure:

1. Follow existing code style
2. Add necessary tests
3. Update relevant documentation

## 📄 License

- spark-design: MIT
- spark-chat: Apache-2.0

## 🔗 Links

- [Online Documentation](https://agentscope-ai.github.io/agentscope-spark-design/)
- [GitHub Repository](https://github.com/agentscope-ai/agentscope-spark-design)
- [Issue Tracker](https://github.com/agentscope-ai/agentscope-spark-design/issues)
- [Alibaba Cloud Bailian](https://bailian.console.aliyun.com/)
