# 贡献指南（多人协作开发流程）

本仓库为 **monorepo**，包含两个可发布子包：

- `packages/spark-design` → `@agentscope-ai/design`
- `packages/spark-chat` → `@agentscope-ai/chat`

目标：
- **多人在 `dev` 分支协作开发**
- **发布时 `dev` 合并到 `main`**
- **文档仅随 `main` 自动部署到 `gh-pages`**
- **主干提交历史干净（强制 Squash Merge）**

---

## 1. 分支模型

- **`main`**：主干发布分支，只接收“发布/热修复”的合并
- **`dev`**：日常集成分支，所有功能/修复最终合入 `dev`
- **`gh-pages`**：文档部署分支（只允许 CI 推送静态产物，禁止手工提交）

### 分支命名约定

- **功能**：`feat/<scope>-<desc>`
- **修复**：`fix/<scope>-<desc>`
- **工程**：`chore/<desc>`
- **文档**：`docs/<desc>`
- **热修复**：`hotfix/<desc>`

`scope` 建议取 `design` / `chat` / `repo`。

---

## 2. 多人协作日常流程（开发 → 合并到 dev）

### 2.1 拉分支

始终从 `dev` 拉分支：

```bash
git checkout dev
git pull
git checkout -b feat/design-add-xxx
```

### 2.2 本地开发与自测（建议）

```bash
# spark-design
pnpm run start:spark-design

# spark-chat
pnpm run start:spark-chat
```

### 2.3 提交规范

建议使用 Conventional Commits（仓库已配置 `commitlint`），示例：

- `feat(design): add xxx`
- `fix(chat): fix yyy`
- `chore(repo): update tooling`

> 建议让每个 PR 对应一个“可复用的变更单元”，便于回滚与发版说明。

### 2.4 提交 PR 到 dev

PR 目标分支：`dev`

PR 必须满足：
- CI 通过（lint/build/test）
- 至少 1 名 reviewer 通过
- 解决 code review 意见

合并策略：
- **强制 Squash Merge**（保证 `dev` / `main` 历史干净）
- PR 标题即 Squash 后的最终提交信息（见 PR 模板建议）

---

## 3. 发版流程（dev → main → npm publish → 回灌 dev）

本仓库采用 **子包独立版本**（independent versioning）：
- `@agentscope-ai/design` 与 `@agentscope-ai/chat` **各自维护版本号**
- 发版时只 bump 有变更的包

### 3.1 发版前准备（Release PR）

从 `dev` 创建发版 PR（目标：`main`），建议分支名：

- `release/2025-12-15` 或 `release/1.0.x`

发版 PR 内应包含（按需）：
- **版本号更新**：修改对应子包 `package.json` 的 `version`
- **依赖联动**：若 `chat` 依赖 `design` 且需要跟随升级，更新 `packages/spark-chat/package.json` 的依赖版本范围
- **变更说明**：更新各包的 `CHANGELOG.md`（如果项目维护了 changelog）

> 重要：发版 PR 合并到 `main` 也应 **Squash**，确保主干历史清晰。

### 3.2 合并到 main

当发版 PR 合并到 `main` 后：
- CI 自动构建
- 由维护者 **手动触发** npm 发布（见 `.github/workflows/publish.yml` 的 `workflow_dispatch`）
- CI 自动部署文档到 `gh-pages`（见 `.github/workflows/deploy-docs.yml`）

### 3.3 回灌到 dev

发版完成后务必把 `main` 合回 `dev`（用 PR，目标分支：`dev`）：
- 让 `dev` 同步最新版本号/Changelog/发布相关改动
- 避免下次开发出现版本回退或重复发版

---

## 4. 文档部署（main → gh-pages）

仓库约定：**文档只跟随 `main` 部署**，保证线上文档与已发布版本一致。

文档构建产物输出：
- `packages/spark-design` → `dist/spark-design`
- `packages/spark-chat` → `dist/spark-chat`

详见：
- `DEPLOY_QUICKSTART.md`
- `GITHUB_PAGES_SETUP.md`

---

## 5. 权限与责任（建议）

- **Maintainers**：负责合并到 `main`、触发 npm 发布、维护分支保护规则
- **Contributors**：只向 `dev` 提 PR，不直接推送 `main`/`dev`


