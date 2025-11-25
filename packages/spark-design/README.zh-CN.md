# @agentscope-ai/design

[![NPM version](https://img.shields.io/npm/v/@agentscope-ai/design.svg?style=flat)](https://npmjs.org/package/@agentscope-ai/design)
[![NPM downloads](http://img.shields.io/npm/dm/@agentscope-ai/design.svg?style=flat)](https://npmjs.org/package/@agentscope-ai/design)

AgentScope Spark Design - 阿里云飞天实验室 UI 组件库

## ✨ 特性

- 🎨 基于 Ant Design 5 的自定义主题系统
- 🔧 50+ 封装增强的 UI 组件
- 📱 支持移动端组件
- 🎯 自定义图标系统（@agentscope-ai/icons）
- 🌐 国际化支持（中文/英文）
- 📝 完整的 TypeScript 类型支持
- 🎨 CSS-in-JS 样式方案（antd-style）

## 📦 安装

```bash
# 使用 npm
npm install @agentscope-ai/design antd --save

# 使用 pnpm
pnpm add @agentscope-ai/design antd

# 使用 yarn
yarn add @agentscope-ai/design antd
```

## 🚀 快速开始

### 1. 配置图标覆盖

为了让所有 antd 组件使用 Spark Design 的自定义图标，需要在项目的 `package.json` 中添加 overrides 配置：

```json
{
  "dependencies": {
    "@agentscope-ai/design": "^1.0.0",
    "antd": "^5.18.0"
  },
  "pnpm": {
    "overrides": {
      "@ant-design/icons": "@agentscope-ai/icons-override-antd"
    }
  },
  "overrides": {
    "@ant-design/icons": "@agentscope-ai/icons-override-antd"
  }
}
```

配置完成后，**删除现有依赖并重新安装**：

```bash
rm -rf node_modules
rm -f package-lock.json pnpm-lock.yaml yarn.lock
npm install  # 或 pnpm install
```

### 2. 使用组件

```tsx
import { ConfigProvider, Button, Modal, carbonTheme } from '@agentscope-ai/design';

function App() {
  return (
    <ConfigProvider {...carbonTheme}>
      <Button type="primary">按钮</Button>
      <Modal title="标题" open={false}>
        内容
      </Modal>
    </ConfigProvider>
  );
}
```

## 📂 目录结构

```
spark-design/
├── src/
│   ├── antd/                          # antd 相关配置
│   │   ├── styles/                    # 组件局部样式覆盖
│   │   └── themes/                    # 主题配置
│   │       ├── bailianTheme.json      # 百炼主题（亮色）
│   │       ├── bailianDarkTheme.json  # 百炼主题（暗色）
│   │       ├── carbonTheme.json       # Carbon 主题（亮色）
│   │       └── carbonDarkTheme.json   # Carbon 主题（暗色）
│   ├── components/
│   │   ├── commonComponents/          # 通用组件（50+）
│   │   │   ├── Alert/
│   │   │   ├── Button/
│   │   │   ├── Modal/
│   │   │   ├── ...
│   │   └── mobileComponents/          # 移动端组件
│   │       ├── MobileModal/
│   │       ├── MobileDrawer/
│   │       └── MobileAlertDialog/
│   ├── hooks/                         # 公共 Hooks
│   │   └── useGlobalStyle/
│   ├── libs/                          # 工具函数库
│   │   ├── requestPop/                # POP 请求封装
│   │   ├── requestSse/                # SSE 请求封装
│   │   └── ...
│   ├── i18n/                          # 国际化配置
│   └── index.ts                       # 入口文件
├── docs/                              # 文档
└── package.json
```

## 🎨 主题系统

### 预置主题

```tsx
import { 
  ConfigProvider,
  carbonTheme,        // Carbon 亮色主题
  carbonDarkTheme,    // Carbon 暗色主题
  bailianTheme,       // 百炼亮色主题
  bailianDarkTheme,   // 百炼暗色主题
} from '@agentscope-ai/design';

// 使用 Carbon 主题
<ConfigProvider {...carbonTheme}>
  <App />
</ConfigProvider>

// 使用百炼暗色主题
<ConfigProvider {...bailianDarkTheme}>
  <App />
</ConfigProvider>
```

### 自定义主题

```tsx
import { generateThemeByToken } from '@agentscope-ai/design';

const customTheme = generateThemeByToken({
  colorPrimary: '#1890ff',
  borderRadius: 6,
  // ... 更多 token
});
```

## 📦 组件列表

### 通用组件

| 组件 | 描述 |
| --- | --- |
| `Button` | 按钮 |
| `Modal` | 对话框 |
| `Drawer` | 抽屉 |
| `Input` | 输入框 |
| `Select` | 选择器 |
| `Form` | 表单 |
| `Table` | 表格 |
| `Tabs` | 标签页 |
| `Tag` | 标签 |
| `Tooltip` | 文字提示 |
| `Popover` | 气泡卡片 |
| `Popconfirm` | 气泡确认框 |
| `message` | 全局提示 |
| `notification` | 通知提醒框 |
| `Empty` | 空状态 |
| `Spinner` | 加载中 |
| `Progress` | 进度条 |
| `Steps` | 步骤条 |
| `Pagination` | 分页 |
| `Breadcrumb` | 面包屑 |
| `Dropdown` | 下拉菜单 |
| `Checkbox` | 多选框 |
| `Radio` | 单选框 |
| `RadioButton` | 单选按钮组 |
| `Switch` | 开关 |
| `Slider` | 滑动输入条 |
| `DatePicker` | 日期选择器 |
| `TimePicker` | 时间选择器 |
| `Upload` | 上传 |
| `Avatar` | 头像 |
| `Badge` | 徽标 |
| `Card` | 卡片 |
| `Collapse` | 折叠面板 |
| `Descriptions` | 描述列表 |
| `Result` | 结果页 |
| `Statistic` | 统计数值 |
| `Alert` | 警告提示 |
| `AlertDialog` | 警告对话框 |
| `CodeBlock` | 代码块 |
| `IconButton` | 图标按钮 |
| `EllipsisTip` | 文本省略提示 |
| `HelpIcon` | 帮助图标 |
| `FileIcon` | 文件图标 |
| `Video` | 视频播放器 |

### 移动端组件

| 组件 | 描述 |
| --- | --- |
| `MobileModal` | 移动端对话框 |
| `MobileDrawer` | 移动端抽屉 |
| `MobileAlertDialog` | 移动端警告对话框 |

### Hooks

| Hook | 描述 |
| --- | --- |
| `useGlobalStyle` | 全局样式 Hook |

### 工具函数

| 函数 | 描述 |
| --- | --- |
| `requestPop` | 阿里云 POP 请求封装 |
| `requestPopSse` | POP SSE 请求封装 |
| `requestSse` | SSE 请求封装 |
| `delay` | 延迟函数 |
| `copy` | 复制到剪贴板 |
| `waitForDom` | 等待 DOM 元素 |
| `waitForFunc` | 等待函数执行 |
| `safeHtml` | 安全 HTML 处理 |
| `base64Encoder` | Base64 编码 |
| `base64Decoder` | Base64 解码 |
| `parseJsonSafely` | 安全 JSON 解析 |

## 🛠 配置说明

### 包管理器兼容性

- ✅ **npm**: 使用 `overrides` 字段
- ✅ **pnpm**: 使用 `pnpm.overrides` 字段
- ✅ **yarn**: 使用 `resolutions` 字段

建议同时配置 `overrides` 和 `pnpm.overrides`，确保在不同包管理器下都能正常工作。

### TypeScript 支持

如果遇到类型错误，可以在 `tsconfig.json` 中添加路径映射：

```json
{
  "compilerOptions": {
    "paths": {
      "@ant-design/icons": ["node_modules/@agentscope-ai/icons-override-antd"]
    }
  }
}
```

### Vite 配置

```javascript
// vite.config.js
export default {
  resolve: {
    alias: {
      '@ant-design/icons': '@agentscope-ai/icons-override-antd'
    }
  }
}
```

### Lightning 配置

```javascript
// lightning.config.mts
{
  build: {
    resolve: {
      alias: {
        '@ant-design/icons': path.resolve(
          __dirname,
          './node_modules/@agentscope-ai/icons-override-antd',
        )
      }
    }
  }
}
```

## 🔧 故障排除

### 图标未正确显示？

1. **确认配置**：检查 `package.json` 中的 overrides 配置是否正确
2. **清理依赖**：删除 `node_modules` 和锁文件后重新安装
3. **检查版本**：确保使用兼容的 antd 版本 (^5.18.0)
4. **构建工具**：检查是否需要额外的 alias 配置

### 开发环境和生产环境表现不一致？

这通常是缓存问题，尝试：
- 清理构建缓存
- 添加构建工具的 alias 配置
- 确保 overrides 配置在所有环境中都生效

## 📖 更新日志

查看 [CHANGELOG.md](./CHANGELOG.md) 了解版本更新信息。

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

## 📄 许可证

MIT

