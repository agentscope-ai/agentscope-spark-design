# GitHub 配置与治理（建议落地清单）

本文档用于把仓库的协作/发版规范“固化”为 GitHub 配置，避免靠口头约定。

适用仓库：`agentscope-spark-design`（monorepo）

目标：
- 分支：`main` / `dev` / `gh-pages`
- 多人协作：日常向 `dev` 提 PR
- 发版：`dev` → `main`，`main` 自动发布 npm，`main` 自动部署文档到 `gh-pages`
- 历史：`main` / `dev` **强制 Squash merge**，保证提交历史干净

---

## 1. Repo Settings（必须）

### 1.1 合并策略（Pull Requests）

进入：**Settings → Pull Requests**

- **允许 Squash merging**：✅ 开启（必选）
- **允许 Rebase merging**：可选（建议关闭，减少复杂度）
- **允许 Merge commits**：建议关闭（否则历史会被大量 merge commit 污染）

Squash 后的提交信息建议：
- 使用 PR 标题作为最终 commit message
- 通过 PR 模板要求标题遵循 Conventional Commits（例如 `feat(design): ...`）

### 1.2 默认分支

进入：**Settings → Branches**

- Default branch：`main`

---

## 2. 分支保护（Branch protection rules）

进入：**Settings → Branches → Branch protection rules**

### 2.1 保护 `main`

建议规则：
- **Require a pull request before merging**：✅
  - Require approvals：✅（至少 1）
  - Dismiss stale approvals：✅（可选）
- **Require status checks to pass before merging**：✅
  - Required checks（建议）：
    - `ci / lint`
    - `ci / build`
    - `ci / test`
- **Require conversation resolution before merging**：✅
- **Require linear history**：✅（可选；若强制 Squash 一般也能满足）
- **Include administrators**：✅（强烈建议，避免管理员绕过规则）
- **Restrict who can push to matching branches**：✅（只允许维护者）

### 2.2 保护 `dev`

原则：`dev` 也要保持干净与可用。

建议规则：
- Require a pull request before merging：✅
- Require status checks：✅（同 `main`）
- Require at least 1 approval：✅
- Restrict who can push：✅（禁止直接 push）

### 2.3 `gh-pages`

`gh-pages` 只用于部署产物：
- 建议不开放人工写入
- 通过 Actions 使用 `GITHUB_TOKEN` 写入

> 如果你开启了 “Restrict who can push”，需要把 Actions 运行身份（通常是 `github-actions[bot]`）纳入允许范围，或改用 Pages 官方部署方式（见第 4 节）。

---

## 3. Actions 基础设置

进入：**Settings → Actions → General**

建议：
- **Allow GitHub Actions to create and approve pull requests**：✅（如果你后续使用 changesets 的 Release PR）
- Workflow permissions：
  - **Read and write permissions**：✅（部署 gh-pages 需要写权限）
  - Allow GitHub Actions to push to protected branches：按你们策略决定

---

## 4. GitHub Pages 设置（main 驱动部署）

进入：**Settings → Pages**

推荐（两种二选一，取决于你们的工作流实现）：

### 方案 A：从 `gh-pages` 分支部署

- Source：Deploy from a branch
- Branch：`gh-pages` / `/(root)`（或你工作流写入的目录）

### 方案 B：GitHub Pages 官方 Artifact 部署（更现代）

- Source：GitHub Actions
- 由工作流使用 `actions/deploy-pages` 部署（不一定需要 `gh-pages` 分支）

> 由于你明确要求存在 `gh-pages` 分支，后续工作流可按“方案 A”落地。

---

## 5. Secrets（npm 发布必需）

进入：**Settings → Secrets and variables → Actions**

新增：
- `NPM_TOKEN`：npm automation token（至少拥有发布 `@agentscope-ai/design` 与 `@agentscope-ai/chat` 权限）

可选：
- `NPM_TAG`：默认发布 tag（例如 `latest` / `next`）

---

## 6. 必要的仓库文件（建议）

建议在仓库中落地：
- `.github/pull_request_template.md`：统一 PR 信息
- `.github/workflows/ci.yml`：对 PR 做 lint/build/test
- `.github/workflows/publish.yml`：`main` 合并后自动 npm publish
- `.github/workflows/deploy-docs.yml`：`main` 合并后自动部署 docs 到 `gh-pages`

这些文件会把“规范”变成“系统强制”，减少人为疏漏。


