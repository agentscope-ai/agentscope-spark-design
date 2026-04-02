---
order: 3
title: BailianHighCodeWebUI
group:
  title: Agent Integration
  order: 3
---

# BailianHighCodeWebUI

## Quick Start

### 1. Get the Scaffold Template

Get the `bailian-high-code-webui` scaffold template from the repository:

```bash
$ cd bailian-high-code-webui
```

> Node.js version requirement: >= 22

### 2. Install Dependencies

```bash
$ npm install
```

### 3. Configure API URL

Open `src/components/Chat/defaultConfig.ts` and replace `api.baseURL` and `api.token` with your AgentScope Runtime backend address:

```tsx | pure
import { IAgentScopeRuntimeWebUIOptions } from '@agentscope-ai/chat';

const config: IAgentScopeRuntimeWebUIOptions = {
  // ...
  api: {
    baseURL: 'YOUR_API_URL',
    token: 'YOUR_API_TOKEN',
    enableHistoryMessages: true, // Bailian high-code backend is stateless, so the frontend always needs to pass full context
  },
};

export default config;
```

### 4. Start Development Server

```bash
$ npm run dev
```

Open the browser and visit the address shown in the terminal to see the WebUI.

### 5. Build for Production

```bash
$ npm run build
```

The build output is in the `dist/` directory and can be deployed to any static resource server.

### Scaffold Project Structure

```
bailian-high-code-webui/
├── src/
│   ├── App.tsx                  # Application entry
│   ├── main.tsx                 # Render entry
│   └── components/
│       ├── Chat/
│       │   ├── index.tsx        # Core chat component
│       │   └── defaultConfig.ts # Configuration file (API, theme, welcome, etc.)
│       └── Cards/
│           └── Weather.tsx      # Custom tool render card example
├── index.html
├── package.json
└── vite.config.ts
```

The core code in the scaffold is as follows:

**`src/components/Chat/index.tsx`**

```tsx | pure
import { AgentScopeRuntimeWebUI, IAgentScopeRuntimeWebUIOptions } from '@agentscope-ai/chat';
import defaultConfig from './defaultConfig';

export default function () {
  return (
    <div style={{ height: '100vh' }}>
      <AgentScopeRuntimeWebUI
        options={defaultConfig as unknown as IAgentScopeRuntimeWebUIOptions}
      />
    </div>
  );
}
```

**`src/components/Chat/defaultConfig.ts`**

```tsx | pure
import { IAgentScopeRuntimeWebUIOptions } from '@agentscope-ai/chat';
import Weather from '../Cards/Weather';

const config: IAgentScopeRuntimeWebUIOptions = {
  customToolRenderConfig: {
    'weather search mock': Weather,
  },
  theme: {
    colorPrimary: '#615CED',
    darkMode: true,
    prefix: 'agentscope-runtime-webui',
    leftHeader: {
      logo: 'https://img.alicdn.com/imgextra/i2/O1CN01lmoGYn1kjoXATy4PX_!!6000000004720-2-tps-200-200.png',
      title: 'Runtime WebUI',
    },
  },
  sender: {
    maxLength: 10000,
    disclaimer: 'AI can also make mistakes, so please check carefully and use it with caution',
  },
  session: {
    multiple: false,
  },
  welcome: {
    greeting: 'Hello, how can I help you today?',
    description: 'I am a helpful assistant that can help you with your questions.',
    avatar: 'https://img.alicdn.com/imgextra/i2/O1CN01lmoGYn1kjoXATy4PX_!!6000000004720-2-tps-200-200.png',
    prompts: [
      { value: 'Hello' },
      { value: 'How are you?' },
      { value: 'What can you do?' },
    ],
  },
  api: {
    baseURL: 'YOUR_API_URL',
    token: 'YOUR_API_TOKEN',
    enableHistoryMessages: true,
  },
};

export default config;
```

### Integrate into Existing Projects

If you already have a Vite / Next.js / Umi or other React project, you can install the dependencies and integrate directly.

#### Install Dependencies

```bash
$ npm install antd @agentscope-ai/design @agentscope-ai/chat --save
```

#### Use the Component

```tsx | pure
import { AgentScopeRuntimeWebUI } from '@agentscope-ai/chat';

export default function App() {
  return (
    <div style={{ height: '100vh' }}>
      <AgentScopeRuntimeWebUI
        options={{
          api: {
            baseURL: 'YOUR_API_URL',
            token: 'YOUR_API_TOKEN',
            enableHistoryMessages: true, // Bailian high-code backend is stateless, so the frontend always needs to pass full context
          },
          session: {
            multiple: false,
          },
        }}
      />
    </div>
  );
}
```

> **Note**: `AgentScopeRuntimeWebUI` requires its parent container to have an explicit height (e.g. `100vh`), otherwise the page may not render correctly.

---

## Configuration Details

### API Configuration

`api` is the most critical configuration for connecting to your AgentScope Runtime backend service.

```tsx | pure
const options = {
  api: {
    // Option 1: Use baseURL + token (default POST request)
    baseURL: 'YOUR_API_URL',
    token: 'YOUR_API_TOKEN',

    // Option 2: Custom fetch function for full control over request behavior
    fetch: async ({ input, signal }) => {
      return fetch('https://your-api-url.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ input }),
        signal,
      });
    },
    // Whether to include history messages in requests (default false)
    enableHistoryMessages: false,
  },
};
```

### Theme Configuration

Customize the WebUI appearance via `theme`.

```tsx | pure
const options = {
  theme: {
    colorPrimary: '#615CED',
    darkMode: true,
    locale: 'en',
    leftHeader: {
      logo: 'https://your-logo.png',
      title: 'My Agent',
    },
    background: '#1a1a2e',
    typography: {
      baseFontSize: 14,
      baseLineHeight: 1.6,
    },
    bubbleList: {
      pagination: true,
    },
  },
};
```

### Welcome Page Configuration

Configure the welcome page shown when users enter the chat via `welcome`.

```tsx | pure
const options = {
  welcome: {
    greeting: 'Hello! How can I help you?',
    description: 'I am an intelligent assistant that can answer your questions.',
    avatar: 'https://your-avatar.png',
    nick: 'Assistant',
    prompts: [
      { label: 'Write a poem', value: 'Write a poem about spring' },
      { label: 'Code assistant', value: 'Write a React component' },
      { value: "What's the weather like today?" },
    ],
    // Fully custom rendering is also supported
    render: ({ greeting, prompts, onSubmit }) => (
      <div>
        <h1>{greeting}</h1>
        {prompts.map((p) => (
          <button key={p.value} onClick={() => onSubmit({ query: p.value })}>
            {p.label || p.value}
          </button>
        ))}
      </div>
    ),
  },
};
```

### Sender Configuration

Customize the input area behavior and appearance via `sender`.

```tsx | pure
const options = {
  sender: {
    placeholder: 'Type your question...',
    maxLength: 5000,
    disclaimer: 'AI-generated content may contain errors. Please verify carefully.',
    allowSpeech: true,
    suggestions: [
      { label: 'Draw a picture', value: 'Draw a sunset landscape' },
      { label: 'Learn something', value: 'What is quantum computing?' },
    ],
    attachments: {
      accept: '.png,.jpg,.pdf',
      maxCount: 5,
    },
    beforeUI: <div>Content above the input</div>,
    afterUI: <div>Content below the input</div>,
    prefix: <button>Tool button</button>,
    beforeSubmit: async () => {
      // Return false to prevent submission
      return true;
    },
  },
};
```

### Session Management

Configure multi-session support and session persistence via `session`.

```tsx | pure
const options = {
  session: {
    multiple: true,  // Enable multiple sessions
    api: {
      // Implement session persistence interface
      getSessionList: async () => { /* ... */ },
      getSession: async (sessionId) => { /* ... */ },
      createSession: async (session) => { /* ... */ },
      updateSession: async (session) => { /* ... */ },
      removeSession: async (session) => { /* ... */ },
    },
  },
};
```

When `session.api` is not provided, the component includes a built-in `localStorage`-based session persistence implementation that works out of the box. Implement the above interface to connect to your backend storage.

### Ref Instance Methods

Access the component instance via `ref` to control messages and input behavior externally.

```tsx | pure
import { AgentScopeRuntimeWebUI, IAgentScopeRuntimeWebUIRef } from '@agentscope-ai/chat';
import { useRef } from 'react';

export default function App() {
  const chatRef = useRef<IAgentScopeRuntimeWebUIRef>(null);

  const handleExternalSubmit = () => {
    chatRef.current?.input.submit({ query: 'Hello' });
  };

  const handleDisableInput = () => {
    chatRef.current?.input.setDisabled(true);
  };

  return (
    <div style={{ height: '100vh' }}>
      <button onClick={handleExternalSubmit}>External Submit</button>
      <AgentScopeRuntimeWebUI ref={chatRef} options={options} />
    </div>
  );
}
```

---

## Custom Cards

The scaffold includes a complete weather card example (`src/components/Cards/Weather.tsx`). The following documentation uses it to illustrate the full development flow for custom tool rendering.

---

### Step 1: Declare Props Types

Custom tool render components receive `{ data }` as props, where `data` is a tool call message. The `content` array typically contains two items:

- `content[0]`: Tool call info (`name` + `arguments`)
- `content[1]`: Tool output result (`name` + `output`)

```tsx | pure
interface IToolContentItem {
  type: string;
  object?: string;
  status: string;
  delta?: boolean | null;
  msg_id?: string;
  index?: number;
  error?: unknown;
  sequence_number?: number | null;
  data: {
    name: string;
    arguments?: string;
    output?: string;
  };
}

interface IToolMessage {
  id: string;
  object?: string;
  type: string;
  role: string;
  status: string;
  content: IToolContentItem[];
  code?: string | null;
  message?: string | null;
}
```

### Step 2: Parse Tool Output Data

Using weather query as an example, `output` is a JSON string that parses into a weather data list:

```tsx | pure
export interface IWeatherItem {
  location: string;
  weather: string;
  temperature: number;
  date: string;
}

function parseOutput(data: IToolMessage): IWeatherItem[] {
  const outputContent = data.content[1]?.data;
  try {
    return JSON.parse(JSON.parse(outputContent.output));
  } catch {
    return [];
  }
}
```

### Step 3: Implement Card UI

Use `createStyles` from `antd-style` to write styles, consuming theme variables via `token` for automatic light/dark mode adaptation:

```tsx | pure
import { createStyles } from 'antd-style';

const useStyles = createStyles(({ token, css }) => ({
  wrapper: css`
    border-radius: 12px;
    border: 1px solid ${token.colorBorderSecondary};
    background: ${token.colorBgElevated};
    overflow: hidden;
  `,
  header: css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 14px 16px;
    border-bottom: 1px solid ${token.colorBorderSecondary};
  `,
  container: css`
    display: flex;
    overflow-x: auto;
    padding: 14px 12px;
  `,
  card: css`
    flex: 1;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    padding: 10px 12px;
    border-radius: 10px;
    min-width: 72px;
    transition: background 0.2s;
    &:hover {
      background: ${token.colorFillQuaternary};
    }
  `,
  todayCard: css`
    background: ${token.colorPrimaryBg};
    &:hover {
      background: ${token.colorPrimaryBgHover};
    }
  `,
  // ...more styles
}));

export default function Weather(props: { data: IToolMessage }) {
  const items = parseOutput(props.data);
  const { styles, cx } = useStyles();

  if (!items.length) return null;

  const todayItem = items.find((_, i) => {
    const { weekday } = formatDate(items[i].date);
    return weekday === 'Today';
  }) || items[0];

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <span>📍 {items[0].location}</span>
        <span>{todayItem.temperature}° {weatherLabels[todayItem.weather]}</span>
      </div>
      <div className={styles.container}>
        {items.map((item) => {
          const { weekday, date } = formatDate(item.date);
          const isToday = weekday === 'Today';
          return (
            <div key={item.date} className={cx(styles.card, isToday && styles.todayCard)}>
              <span>{weekday}</span>
              <span>{date}</span>
              <span>{weatherIcons[item.weather]}</span>
              <span>{item.temperature}°</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
```

### Step 4: Register in Configuration

Register in `defaultConfig.ts` via `customToolRenderConfig`, where the key is the tool name returned by the backend:

```tsx | pure
import { IAgentScopeRuntimeWebUIOptions } from '@agentscope-ai/chat';
import Weather from '../Cards/Weather';

const config: IAgentScopeRuntimeWebUIOptions = {
  customToolRenderConfig: {
    'weather search mock': Weather,
  },
  // ...other config
};

export default config;
```

When the backend returns `plugin_call` / `mcp_call` type messages and `content[0].data.name` matches the configured key, the WebUI will use the corresponding custom component instead of the default tool call collapse panel for rendering.


## More Details
- https://github.com/agentscope-ai/agentscope-spark-design/tree/main/packages/spark-chat
- https://github.com/agentscope-ai/agentscope-spark-design/tree/main/packages/spark-chat/components/AgentScopeRuntimeWebUI
