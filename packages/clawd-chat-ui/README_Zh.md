# Clawd Chat UI

<img src="https://img.alicdn.com/imgextra/i2/O1CN01DrecKC1PrxfK6SGjU_!!6000000001895-2-tps-1080-2400.png"  width="375" />

Clawd Chat UI 是一个使用 React 、Expo 和 agentscope-spark-design 的混合开发聊天应用项目。它包含一个基于 Web 技术的聊天界面核心，并通过 React Native WebView 封装为原生应用（Android/iOS），实现了“一次开发，多端运行”。

你可以直接下载 `build/app.apk` 直接使用，或者修改代码实现自己的 Clawd Chat UI

## 📁 项目结构

项目采用 Monorepo 风格的结构：

- **`web/`**: 核心前端项目
  - 基于 React 19 + Vite 构建
  - 使用 `@agentscope-ai/chat` 提供聊天 UI 组件
  - 使用 `vite-plugin-singlefile` 将应用打包为单文件 HTML，便于嵌入原生应用
- **`native/`**: 原生壳工程
  - 基于 Expo (React Native) 构建
  - 使用 `react-native-webview` 加载 `web` 构建产物
  - 负责处理原生特定功能（如安全区域、键盘避让等）

## 🛠 技术栈

- **Web**: React 19, TypeScript, Vite, Ant Design, AgentScope
- **Native**: Expo SDK 54, React Native 0.81, Expo Router
- **Build**: vite-plugin-singlefile (Web打包), Expo Prebuild (原生构建)

## 🚀 快速开始

### 前置要求

- Node.js environment
- npm 或 pnpm
- Android Studio / Xcode(可选) (用于原生开发)

### 安装依赖

分别进入子目录安装：

```bash
cd web && npm install
cd native && npm install
```

### 💻 开发模式

#### Web 开发

如果你只修改 UI 或业务逻辑，可以使用 Web 开发模式：

```bash
cd web
npm run dev
```

#### Native 开发

如果你需要调试原生功能或查看真机效果：

1. **构建 Web 资源**（因为 Native 加载的是构建后的 Web 产物）：

   ```bash
   cd web
   npm run build
   ```

2. **启动 Native 项目**：
   ```bash
   cd native
   npm run start
   npm run android
   ```

### 📦 构建发布

项目提供了一键构建脚本，会自动构建 Web 资源并将其移动到 Native 项目的 assets 目录，然后触发 Android Release 构建：

```bash
# 在根目录运行
npm run build
```

### API Integration

ClawdMobile connects to the Clawdbot Gateway via:

- WebSocket Protocol - Real-time bidirectional communication
- Token Auth - Gateway token or device token
- Operator Role - Full control plane access

See Clawdbot Gateway Protocol for details. https://docs.molt.bot/gateway/protocol

## ⚙️ 配置说明

应用启动后，如果是首次使用或未配置连接信息，会显示 **设置页面**。你需要配置以下信息以连接到 AgentScope 服务端：

- **Host**: WebSocket 服务地址 (例如: `ws://your-server-ip:port`)
- **Token**: 认证 Token

配置完成后，应用将自动连接并进入聊天界面。


## 如何快速部署 Moltbot（原Clawdbot）
https://help.aliyun.com/zh/simple-application-server/use-cases/quickly-deploy-and-use-moltbot