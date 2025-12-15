# 文档部署快速指南（main → gh-pages）

本仓库约定：**文档仅随 `main` 自动部署**，部署目标分支为 `gh-pages`。

适用场景：
- 你希望线上文档与 npm 已发布版本保持一致
- `gh-pages` 分支不需要人工维护，全部由 CI 生成

---

## 1. 一次性 GitHub 配置

1) 进入 `Settings → Pages`

- Source：**Deploy from a branch**
- Branch：**`gh-pages`**
- Folder：选择 `/(root)`（若工作流写入子目录，再按实际选择）

2) 进入 `Settings → Actions → General`

- Workflow permissions：选择 **Read and write permissions**

---

## 2. 部署触发规则

部署由 GitHub Actions 触发：
- 触发分支：`main`
- 触发事件：push / merge

---

## 3. 本地验证（可选）

`@agentscope-ai/design` 文档构建：

```bash
cd packages/spark-design
pnpm install
pnpm run docs:build:gh
```

仓库当前 `dumi` 配置：
- `packages/spark-design/.dumirc.ts`
  - `outputPath: '../../dist/spark-design'`

---

## 4. 常见问题

### 4.1 页面 404 / 静态资源路径不对

请确认 `docs:build:gh` 使用了 `GITHUB_PAGES=true`，并且 `.dumirc.ts` 中 `base` / `publicPath` 的值与仓库 Pages 地址路径一致。


