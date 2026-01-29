# Clawd Chat UI

Clawd Chat UI is a hybrid chat application project built with React, Expo, and agentscope-spark-design. It features a React-based web chat core wrapped in a React Native WebView for native Android/iOS apps, achieving "write once, run anywhere".

You can download `build/app.apk` directly to use it, or modify the code to implement your own Clawd Chat UI.

## 📁 Project Structure

The project follows a Monorepo-style structure:

- **`web/`**: Core frontend project
  - Built with React 19 + Vite
  - Uses `@agentscope-ai/chat` for chat UI components
  - Uses `vite-plugin-singlefile` to bundle the app into a single HTML file for easy embedding in native apps
- **`native/`**: Native shell project
  - Built with Expo (React Native)
  - Uses `react-native-webview` to load the `web` build artifacts
  - Handles native-specific features (e.g., safe areas, keyboard avoidance)

## 🛠 Tech Stack

- **Web**: React 19, TypeScript, Vite, Ant Design, AgentScope
- **Native**: Expo SDK 54, React Native 0.81, Expo Router
- **Build**: vite-plugin-singlefile (Web bundling), Expo Prebuild (Native build)

## 🚀 Quick Start

### Prerequisites

- Node.js environment
- npm or pnpm
- Android Studio / Xcode (optional) (for native development)

### Installation

Install dependencies in each subdirectory:

```bash
cd web && npm install
cd native && npm install
```

### 💻 Development Mode

#### Web Development

If you only need to modify the UI or business logic, use Web development mode:

```bash
cd web
npm run dev
```

#### Native Development

If you need to debug native features or check performance on a real device:

1. **Build Web Assets** (Since Native loads the built Web artifacts):

   ```bash
   cd web
   npm run build
   ```

2. **Start Native Project**:
   ```bash
   cd native
   npm run start
   npm run android
   ```

### 📦 Build & Release

The project provides a one-click build script that automatically builds Web resources, moves them to the Native project's assets directory, and triggers the Android Release build:

```bash
# Run in the root directory
npm run build
```

### API Integration

ClawdMobile connects to the Clawdbot Gateway via:

- WebSocket Protocol - Real-time bidirectional communication
- Token Auth - Gateway token or device token
- Operator Role - Full control plane access

See Clawdbot Gateway Protocol for details. https://docs.molt.bot/gateway/protocol

## ⚙️ Configuration

Upon launching the app, if it is the first time or no connection info is configured, a **Settings Page** will appear. You need to configure the following to connect to the AgentScope server:

- **Host**: WebSocket server address (e.g., `ws://your-server-ip:port`)
- **Token**: Authentication Token

After configuration, the app will automatically connect and enter the chat interface.

