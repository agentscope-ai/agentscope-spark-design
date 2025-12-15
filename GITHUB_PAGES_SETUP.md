# GitHub Pages 部署说明（main → gh-pages）

本说明面向仓库维护者，用于把文档部署流程完整落地到 GitHub。

---

## 1. 目标与约束

- 分支：`main` / `dev` / `gh-pages`
- 文档：**只跟随 `main`** 部署
- `gh-pages`：只存放静态产物，**禁止人工提交**

---

## 2. dumi 构建产物位置

### 2.1 spark-design 文档

配置文件：`packages/spark-design/.dumirc.ts`

关键配置：
- `outputPath`: `GITHUB_PAGES=true` 时为 `../../dist`（站点根目录）
- `base/publicPath`: `GITHUB_PAGES=true` 时为 `/agentscope-spark-design/`

### 2.2 spark-chat 文档

配置文件：`packages/spark-chat/.dumirc.ts`

关键配置：
- `outputPath: '../../dist/spark-chat'`
- `base/publicPath`: `GITHUB_PAGES=true` 时为 `/agentscope-spark-design/spark-chat/`

本仓库默认以 `spark-design` 为主文档站点；如需同时部署 `spark-chat`，可以在工作流里把两个产物合并到同一站点目录，或部署为不同路径。

---

## 3. GitHub Pages 配置（推荐：从 gh-pages 分支部署）

进入：`Settings → Pages`

- Source：**Deploy from a branch**
- Branch：**`gh-pages`**
- Folder：`/(root)`

---

## 4. Actions 权限

进入：`Settings → Actions → General`

- Workflow permissions：**Read and write permissions**

---

## 5. 推荐工作流设计

建议工作流：
- `.github/workflows/deploy-docs.yml`
  - 触发：push 到 `main`
  - 步骤：安装依赖 → 构建 docs → 推送产物到 `gh-pages`

---

## 6. 安全建议

- 禁止在 `gh-pages` 分支存放任何敏感信息
- 不要把私有 API Key 写入 docs 构建脚本或静态产物


