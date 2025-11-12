# AgentScope Spark Design

阿里云飞天实验室 UI 组件库 - Monorepo 版本

[![Deploy Docs](https://github.com/agentscope-ai/agentscope-spark-design/actions/workflows/deploy-docs.yml/badge.svg)](https://github.com/agentscope-ai/agentscope-spark-design/actions/workflows/deploy-docs.yml)

## 📚 文档

在线文档：**https://agentscope-ai.github.io/agentscope-spark-design/**

## 📦 包含的子包

- **@agentscope-ai/design** - 核心设计系统组件库 (`packages/spark-design`)

## 🚀 快速开始

### 安装依赖

```bash
# 使用 pnpm（推荐）
pnpm install
```

### 开发

```bash
# 启动开发服务器
cd packages/spark-design
pnpm run dev
```

### 构建

```bash
# 构建组件库
pnpm run build:design

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
│   └── spark-design/          # 核心组件库
│       ├── src/               # 源代码
│       ├── docs/              # 文档源文件
│       ├── docs-dist/         # 构建后的文档
│       └── package.json
├── .github/
│   └── workflows/
│       └── deploy-docs.yml    # GitHub Actions 配置
├── package.json               # 根配置
└── pnpm-workspace.yaml        # Workspace 配置
```

## 🔧 技术栈

- **构建工具**: [Father](https://github.com/umijs/father)
- **文档工具**: [Dumi](https://d.umijs.org/)
- **包管理**: [pnpm](https://pnpm.io/)
- **UI 框架**: [Ant Design 5](https://ant.design/)
- **样式方案**: [Tailwind CSS](https://tailwindcss.com/) + Less

## 📝 开发规范

参见 `.cursor/rules/` 目录下的规则文件：

- `mastergo.mdc` - masterGo 数据处理规则
- `标准组件列表.mdc` - 标准组件识别规则

## 🤝 贡献

欢迎贡献代码！请确保：

1. 遵循现有的代码风格
2. 添加必要的测试
3. 更新相关文档

## 📄 许可证

MIT

## 🔗 相关链接

- [在线文档](https://agentscope-ai.github.io/agentscope-spark-design/)
- [GitHub 仓库](https://github.com/agentscope-ai/agentscope-spark-design)
- [问题反馈](https://github.com/agentscope-ai/agentscope-spark-design/issues)
