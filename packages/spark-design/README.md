# @agentscope-ai/design

[![NPM version](https://img.shields.io/npm/v/@agentscope-ai/design.svg?style=flat)](https://npmjs.org/package/@agentscope-ai/design)
[![NPM downloads](http://img.shields.io/npm/dm/@agentscope-ai/design.svg?style=flat)](https://npmjs.org/package/@agentscope-ai/design)

AgentScope Spark Design - UI Component Library for Alibaba Cloud Apsara Lab

[中文文档](./README.zh-CN.md)

## ✨ Features

- 🎨 Custom theme system based on Ant Design 5
- 🔧 50+ enhanced UI components
- 📱 Mobile component support
- 🎯 Custom icon system (@agentscope-ai/icons)
- 🌐 Internationalization support (Chinese/English)
- 📝 Full TypeScript type support
- 🎨 CSS-in-JS styling solution (antd-style)

## 📦 Installation

```bash
# Using npm
npm install @agentscope-ai/design antd --save

# Using pnpm
pnpm add @agentscope-ai/design antd

# Using yarn
yarn add @agentscope-ai/design antd
```

## 🚀 Quick Start

### 1. Configure Icon Overrides

To make all antd components use Spark Design's custom icons, add the overrides configuration to your project's `package.json`:

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

After configuration, **delete existing dependencies and reinstall**:

```bash
rm -rf node_modules
rm -f package-lock.json pnpm-lock.yaml yarn.lock
npm install  # or pnpm install
```

### 2. Use Components

```tsx
import { ConfigProvider, Button, Modal, carbonTheme } from '@agentscope-ai/design';

function App() {
  return (
    <ConfigProvider {...carbonTheme}>
      <Button type="primary">Button</Button>
      <Modal title="Title" open={false}>
        Content
      </Modal>
    </ConfigProvider>
  );
}
```

## 📂 Directory Structure

```
spark-design/
├── src/
│   ├── antd/                          # antd related configurations
│   │   ├── styles/                    # Component style overrides
│   │   └── themes/                    # Theme configurations
│   │       ├── bailianTheme.json      # Bailian theme (light)
│   │       ├── bailianDarkTheme.json  # Bailian theme (dark)
│   │       ├── carbonTheme.json       # Carbon theme (light)
│   │       └── carbonDarkTheme.json   # Carbon theme (dark)
│   ├── components/
│   │   ├── commonComponents/          # Common components (50+)
│   │   │   ├── Alert/
│   │   │   ├── Button/
│   │   │   ├── Modal/
│   │   │   └── ...
│   │   └── mobileComponents/          # Mobile components
│   │       ├── MobileModal/
│   │       ├── MobileDrawer/
│   │       └── MobileAlertDialog/
│   ├── hooks/                         # Public Hooks
│   │   └── useGlobalStyle/
│   ├── libs/                          # Utility library
│   │   ├── requestPop/                # POP request wrapper
│   │   ├── requestSse/                # SSE request wrapper
│   │   └── ...
│   ├── i18n/                          # Internationalization
│   └── index.ts                       # Entry file
├── docs/                              # Documentation
└── package.json
```

## 🎨 Theme System

### Preset Themes

```tsx
import { 
  ConfigProvider,
  carbonTheme,        // Carbon light theme
  carbonDarkTheme,    // Carbon dark theme
  bailianTheme,       // Bailian light theme
  bailianDarkTheme,   // Bailian dark theme
} from '@agentscope-ai/design';

// Use Carbon theme
<ConfigProvider {...carbonTheme}>
  <App />
</ConfigProvider>

// Use Bailian dark theme
<ConfigProvider {...bailianDarkTheme}>
  <App />
</ConfigProvider>
```

### Custom Theme

```tsx
import { generateThemeByToken } from '@agentscope-ai/design';

const customTheme = generateThemeByToken({
  colorPrimary: '#1890ff',
  borderRadius: 6,
  // ... more tokens
});
```

## 📦 Component List

### Common Components

| Component | Description |
| --- | --- |
| `Button` | Button |
| `Modal` | Modal dialog |
| `Drawer` | Drawer panel |
| `Input` | Input field |
| `Select` | Select dropdown |
| `Form` | Form |
| `Table` | Table |
| `Tabs` | Tabs |
| `Tag` | Tag |
| `Tooltip` | Tooltip |
| `Popover` | Popover card |
| `Popconfirm` | Popconfirm |
| `message` | Global message |
| `notification` | Notification |
| `Empty` | Empty state |
| `Spinner` | Loading spinner |
| `Progress` | Progress bar |
| `Steps` | Steps |
| `Pagination` | Pagination |
| `Breadcrumb` | Breadcrumb |
| `Dropdown` | Dropdown menu |
| `Checkbox` | Checkbox |
| `Radio` | Radio |
| `RadioButton` | Radio button group |
| `Switch` | Switch toggle |
| `Slider` | Slider |
| `DatePicker` | Date picker |
| `TimePicker` | Time picker |
| `Upload` | Upload |
| `Avatar` | Avatar |
| `Badge` | Badge |
| `Card` | Card |
| `Collapse` | Collapse panel |
| `Descriptions` | Description list |
| `Result` | Result page |
| `Statistic` | Statistic |
| `Alert` | Alert |
| `AlertDialog` | Alert dialog |
| `CodeBlock` | Code block |
| `IconButton` | Icon button |
| `EllipsisTip` | Text ellipsis tip |
| `HelpIcon` | Help icon |
| `FileIcon` | File icon |
| `Video` | Video player |

### Mobile Components

| Component | Description |
| --- | --- |
| `MobileModal` | Mobile modal dialog |
| `MobileDrawer` | Mobile drawer |
| `MobileAlertDialog` | Mobile alert dialog |

### Hooks

| Hook | Description |
| --- | --- |
| `useGlobalStyle` | Global style hook |

### Utility Functions

| Function | Description |
| --- | --- |
| `requestPop` | Alibaba Cloud POP request wrapper |
| `requestPopSse` | POP SSE request wrapper |
| `requestSse` | SSE request wrapper |
| `delay` | Delay function |
| `copy` | Copy to clipboard |
| `waitForDom` | Wait for DOM element |
| `waitForFunc` | Wait for function execution |
| `safeHtml` | Safe HTML processing |
| `base64Encoder` | Base64 encoder |
| `base64Decoder` | Base64 decoder |
| `parseJsonSafely` | Safe JSON parser |

## 🛠 Configuration

### Package Manager Compatibility

- ✅ **npm**: Use `overrides` field
- ✅ **pnpm**: Use `pnpm.overrides` field
- ✅ **yarn**: Use `resolutions` field

It's recommended to configure both `overrides` and `pnpm.overrides` to ensure compatibility across different package managers.

### TypeScript Support

If you encounter type errors, add path mapping in `tsconfig.json`:

```json
{
  "compilerOptions": {
    "paths": {
      "@ant-design/icons": ["node_modules/@agentscope-ai/icons-override-antd"]
    }
  }
}
```

### Vite Configuration

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

### Lightning Configuration

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

## 🔧 Troubleshooting

### Icons not displaying correctly?

1. **Check configuration**: Verify the overrides configuration in `package.json`
2. **Clean dependencies**: Delete `node_modules` and lock files, then reinstall
3. **Check version**: Ensure you're using a compatible antd version (^5.18.0)
4. **Build tools**: Check if additional alias configuration is needed

### Inconsistent behavior between development and production?

This is usually a caching issue. Try:
- Clearing build cache
- Adding alias configuration for your build tool
- Ensuring overrides configuration works in all environments

## 📖 Changelog

See [CHANGELOG.md](./CHANGELOG.md) for version updates.

## 🤝 Contributing

Issues and Pull Requests are welcome!

## 📄 License

MIT
