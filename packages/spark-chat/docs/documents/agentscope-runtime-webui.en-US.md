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
import {
  AgentScopeRuntimeWebUI,
  IAgentScopeRuntimeWebUIOptions,
} from '@agentscope-ai/chat';
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
    disclaimer:
      'AI can also make mistakes, so please check carefully and use it with caution',
  },
  session: {
    multiple: false,
  },
  welcome: {
    greeting: 'Hello, how can I help you today?',
    description:
      'I am a helpful assistant that can help you with your questions.',
    avatar:
      'https://img.alicdn.com/imgextra/i2/O1CN01lmoGYn1kjoXATy4PX_!!6000000004720-2-tps-200-200.png',
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
    fetch: async ({
      input,
      session_id,
      context,
      biz_params,
      mentions,
      submission,
      signal,
    }) => {
      return fetch('https://your-api-url.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          input,
          session_id,
          context,
          biz_params,
          mentions,
          submission,
        }),
        signal,
      });
    },
    // Whether to include history messages in requests (default false)
    enableHistoryMessages: false,
  },
};
```

Starting in 1.2.0, WebUI creates a request snapshot when a submission begins. `session_id`, `context`, `biz_params`, `mentions`, and `signal` continue to come from that snapshot across asynchronous boundaries instead of being read again from the active session. A custom `fetch` should use the supplied `session_id` and `context` directly and must not read a global `activeSessionId` again after an `await`.

Use `context` for generic business context scoped to one request. `biz_params` keeps the existing `user_prompt_params` contract. The default request and a custom `fetch` receive the same context fields.

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
    description:
      'I am an intelligent assistant that can answer your questions.',
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
    disclaimer:
      'AI-generated content may contain errors. Please verify carefully.',
    allowSpeech: true,
    suggestions: [
      { label: 'Draw a picture', value: 'Draw a sunset landscape' },
      { label: 'Learn something', value: 'What is quantum computing?' },
    ],
    attachments: {
      accept: '.png,.jpg,.pdf',
      maxCount: 5,
    },
    longTextUpload: {
      enabled: true,
      customRequest(options) {
        // Input over maxLength is passed here as a txt file
        uploadTextFile(options.file)
          .then((response) => {
            options.onSuccess(response);
          })
          .catch(options.onError);
      },
      prompt: () =>
        getCurrentLocale() === 'cn'
          ? '请先阅读附件中的内容，再基于它回答我的问题'
          : 'please read the file as prompt then answer it',
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

When `longTextUpload` is enabled, `sender.maxLength` is used as the overlong text threshold. If typed or pasted content exceeds that threshold, WebUI automatically creates and uploads a txt attachment, then replaces the input content with `prompt`. `prompt` supports either a string or a `() => string` function for i18n. When an external language switch updates the `prompt` config, WebUI refreshes the input content only if it is still the auto-generated prompt; user-edited input is not overwritten. If `prompt` is omitted, it defaults to `please read the file as prompt then answer it`. When `customRequest` is omitted, `attachments.customRequest` is reused.

#### Built-in Input Queue

The built-in input queue is disabled by default. When `sender.queue` is omitted, WebUI does not create queue storage, a cross-tab channel, or background queue tasks. Pass `true` to use the defaults:

```tsx | pure
const options = {
  sender: {
    queue: true,
  },
};
```

Pass an options object when the host needs to provide session identity and runtime state:

```tsx | pure
const options = {
  sender: {
    queue: {
      maxSize: 50,
      getSessionId: (sessionId) => sessionId,
      getRequestContext: (sessionId) => ({
        session_id: sessionId,
        user_id: getCurrentUserId(),
        agent_id: getCurrentAgentId(),
        context: {
          workspaceId: getCurrentWorkspaceId(),
        },
      }),
      isSessionRunning: async ({ sessionId, requestContext }) => {
        return queryRunningState(sessionId, requestContext);
      },
      shouldRestoreOnError: async ({ error }) => {
        return !isRequestAccepted(error);
      },
    },
  },
};
```

Each queue item keeps the `session_id` and `context` captured when it was enqueued, so draining does not bind it to the currently visible session. Web Locks, `BroadcastChannel`, and versioned `localStorage` state coordinate sending across tabs for the same session. Host-specific semantics remain in the callbacks above.

#### Host-managed Delayed Queues

You do not need to enable the built-in queue. Save the complete `IAgentScopeRuntimeWebUIInputData` when enqueuing, especially `session_id` and `context`, and pass the same object back to `ref.input.submit` when it is ready:

```tsx | pure
const pendingInputs: IAgentScopeRuntimeWebUIInputData[] = [];

const options = {
  sender: {
    beforeSubmit: async (data) => {
      pendingInputs.push({
        ...data,
        session_id: activeSessionId,
        context: {
          workspaceId: activeWorkspaceId,
        },
      });
      return { proceed: false, clear: true };
    },
  },
};

function flushNextInput() {
  const data = pendingInputs.shift();
  if (data) chatRef.current?.input.submit(data);
}
```

`ref.input.submit` now preserves the complete submission instead of selecting only `query`, `fileList`, and `biz_params`. A host-managed asynchronous queue and `customFetch` should use the stored `session_id` instead of reading the global active session again when delivery resumes.

### Session Management

Configure multi-session support and session persistence via `session`.

```tsx | pure
const options = {
  session: {
    multiple: true, // Enable multiple sessions
    currentSessionId: routeSessionId, // Optional: control the session from the host route
    onCurrentSessionChange: setRouteSessionId,
    api: {
      // Implement session persistence interface
      getSessionList: async () => {
        /* ... */
      },
      getSession: async (sessionId) => {
        /* ... */
      },
      createSession: async (session) => {
        /* ... */
      },
      updateSession: async (session) => {
        /* ... */
      },
      removeSession: async (session) => {
        /* ... */
      },
    },
  },
};
```

When `session.api` is not provided, the component includes a built-in `localStorage`-based session persistence implementation that works out of the box. Implement the above interface to connect to your backend storage. When `currentSessionId` is provided, WebUI treats it as a host-controlled route value; `onCurrentSessionChange` synchronizes session creation and navigation back to the host route.

### Ref Instance Methods

Access the component instance via `ref` to control messages and input behavior externally.

```tsx | pure
import {
  AgentScopeRuntimeWebUI,
  IAgentScopeRuntimeWebUIRef,
} from '@agentscope-ai/chat';
import { useRef } from 'react';

export default function App() {
  const chatRef = useRef<IAgentScopeRuntimeWebUIRef>(null);

  const handleExternalSubmit = () => {
    chatRef.current?.input.submit({
      query: 'Hello',
      session_id: activeSessionId,
      context: { workspaceId: activeWorkspaceId },
    });
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

  const todayItem =
    items.find((_, i) => {
      const { weekday } = formatDate(items[i].date);
      return weekday === 'Today';
    }) || items[0];

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <span>📍 {items[0].location}</span>
        <span>
          {todayItem.temperature}° {weatherLabels[todayItem.weather]}
        </span>
      </div>
      <div className={styles.container}>
        {items.map((item) => {
          const { weekday, date } = formatDate(item.date);
          const isToday = weekday === 'Today';
          return (
            <div
              key={item.date}
              className={cx(styles.card, isToday && styles.todayCard)}
            >
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

## Upgrading to 1.2.0

- A custom `api.fetch` now receives a required `session_id` plus independent `context`, `mentions`, `submission`, and `signal` values. Use these snapshot arguments instead of reading the global active session after asynchronous work.
- Pass generic business context through `context`. `biz_params.user_prompt_params` remains compatible with the existing protocol.
- The built-in input queue is now opt-in and disabled by default. Existing host-managed queues do not need to migrate; they only need to preserve and resubmit the complete input data.
- `ref.input.submit` now preserves the full `IAgentScopeRuntimeWebUIInputData`.
- Built-in queue persistence uses schema v2. Unsent local v1 queue items are discarded during the upgrade, so drain or clear the old queue before upgrading.

## More Details

- https://github.com/agentscope-ai/agentscope-spark-design/tree/main/packages/spark-chat
- https://github.com/agentscope-ai/agentscope-spark-design/tree/main/packages/spark-chat/components/AgentScopeRuntimeWebUI
