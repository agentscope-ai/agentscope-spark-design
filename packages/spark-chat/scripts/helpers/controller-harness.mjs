import { build } from 'esbuild';
import { fileURLToPath } from 'node:url';

// These are controller integration tests, not DOM/React scheduling tests.
// Execute the shipped controller, transport, builders, Stream and Run classes;
// replace React/context ports and the disabled queue coordinator only.
const mocks = {
  react: `export const useRef=v=>{const s=globalThis.__chatControllerTest,i=s.ri++;return s.refs[i]??={current:v}};
    export const useCallback=f=>f;
    export const useEffect=(f,deps)=>{const s=globalThis.__chatControllerTest,i=s.ei++,old=s.effects[i];
      if(!old||deps.some((d,n)=>d!==old.deps[n]))s.pendingEffects.push(()=>{old?.cleanup?.();s.effects[i]={deps,cleanup:f()}})};`,
  'react-dom': `export default {flushSync:f=>f()};`,
  'use-context-selector': `export const useContextSelector=(c,f)=>f(c());`,
  ChatAnywhereInputContext: `export const ChatAnywhereInputContext=()=>globalThis.__chatControllerTest.input;`,
  ChatAnywhereOptionsContext: `export const useChatAnywhereOptions=f=>f(globalThis.__chatControllerTest.options);`,
  ChatAnywhereSessionsContext: `export const ChatAnywhereSessionsContext=()=>globalThis.__chatControllerTest.sessions;
    export const useChatAnywhereSessions=()=>globalThis.__chatControllerTest.sessions;`,
  ChatAnywhereMessagesContext: `export const useChatAnywhereMessages=()=>globalThis.__chatControllerTest.messages;`,
  useChatAnywhereEventEmitter: `export default ({type,callback})=>{globalThis.__chatControllerTest.handlers[type]=callback};
    export const useChatAnywhereExecutionEventPublisher=()=>e=>globalThis.__chatControllerTest.events.push(e);`,
  useInputQueueController: `export class InputQueueSubmitError extends Error{};
    export default props=>{const s=globalThis.__chatControllerTest;s.qa=props.currentQARef;
      return s.queue??=new Proxy({queueEnabled:false,inputQueue:[],inputQueuePaused:false,inputQueueIsOwner:true,
      handleSubmit:(d,o)=>props.submitNowRef.current(d,{onRequestAccepted:o?.onAccepted}),sameQueueSession:(a,b)=>a===b,
      resolveQueueSessionId:()=>undefined,prepareReconnect:()=>({blockedByPeer:false})},{get:(o,k)=>k in o?o[k]:s.noop});};`,
  sleep: `export default async()=>{};`,
};

const compiled = await build({
  entryPoints: [
    fileURLToPath(
      new URL(
        '../../components/AgentScopeRuntimeWebUI/core/Chat/hooks/useChatController.tsx',
        import.meta.url,
      ),
    ),
  ],
  bundle: true,
  write: false,
  platform: 'node',
  format: 'esm',
  plugins: [
    {
      name: 'controller-ports',
      setup(b) {
        b.onResolve({ filter: /.*/ }, (args) => {
          const key = args.path
            .replace(/.*\//, '')
            .replace(/\.(tsx?|jsx?)$/, '');
          const mock = Object.hasOwn(mocks, args.path)
            ? args.path
            : Object.hasOwn(mocks, key)
            ? key
            : undefined;
          if (mock) return { path: mock, namespace: 'ports' };
        });
        b.onLoad({ filter: /.*/, namespace: 'ports' }, (args) => ({
          contents: mocks[args.path],
          loader: 'js',
        }));
      },
    },
  ],
});
const { default: useController } = await import(
  `data:text/javascript;base64,${Buffer.from(
    compiled.outputFiles[0].text + '\n//# sourceURL=chat-controller-test.js',
  ).toString('base64')}`
);

export const tick = () => new Promise((resolve) => setTimeout(resolve, 0));
export async function until(predicate) {
  for (let i = 0; i < 150; i++) {
    if (predicate()) return;
    await tick();
  }
  throw Error('controller condition timed out');
}
export function deferred() {
  let resolve, reject;
  const promise = new Promise((yes, no) => {
    resolve = yes;
    reject = no;
  });
  return { promise, resolve, reject };
}
export const terminal = {
  object: 'response',
  id: 'runtime-run',
  status: 'completed',
  created_at: 1,
  output: [],
};
export function sse(events = [], open = false) {
  let controller,
    canceled = false;
  const emit = (event) =>
    controller.enqueue(
      new TextEncoder().encode(`data: ${JSON.stringify(event)}\n\n`),
    );
  const response = new Response(
    new ReadableStream({
      start(next) {
        controller = next;
        events.forEach(emit);
        if (!open) next.close();
      },
      cancel() {
        canceled = true;
      },
    }),
    { headers: { 'Content-Type': 'text/event-stream' } },
  );
  return {
    response,
    emit,
    close: () => controller.close(),
    isCanceled: () => canceled,
  };
}

export function setup(api) {
  const state = {
    store: new Map(),
    saved: [],
    loading: {},
    events: [],
    handlers: {},
    options: { api },
    refs: [],
    effects: [],
    ri: 0,
    ei: 0,
    pendingEffects: [],
    noop: () => {},
  };
  state.input = {
    getLoading: () => !!state.loading[state.sessions.currentSessionId],
    getSessionLoading: (id) => !!state.loading[id],
    setSessionLoading: (id, value) => {
      state.loading[id] = value;
    },
  };
  state.sessions = {
    currentSessionId: 'chat-A',
    pendingRouteSessionIdRef: { current: undefined },
    getCurrentSessionId: () => state.sessions.currentSessionId,
    createSession: async () => 'chat-A',
    updateSession: async (session) => {
      await state.beforeSave?.(session);
      state.saved.push(structuredClone(session));
      return session;
    },
  };
  state.messages = {
    getSessionMessages: (id) => state.store.get(id) || [],
    updateMessage: (message, id) => {
      const previous = state.store.get(id) || [];
      const index = previous.findIndex((item) => item.id === message.id);
      state.store.set(
        id,
        index < 0
          ? [...previous, message]
          : previous.map((item, i) =>
              i === index ? { ...item, ...message } : item,
            ),
      );
    },
    removeMessage: ({ id }, sessionId) =>
      state.store.set(
        sessionId,
        (state.store.get(sessionId) || []).filter(
          (message) => message.id !== id,
        ),
      ),
  };
  state.render = () => {
    globalThis.__chatControllerTest = state;
    state.ri = state.ei = 0;
    state.controller = useController();
    state.pendingEffects.splice(0).forEach((effect) => effect());
  };
  state.switchTo = (id) => {
    state.sessions.currentSessionId = id;
    state.render();
  };
  state.unmount = () => state.effects.forEach((effect) => effect.cleanup?.());
  state.render();
  state.execute = (
    data = { query: 'hello' },
    options = { sessionId: 'chat-A', source: 'host-queue' },
  ) => state.handlers.handleExecute({ data, options });
  return state;
}
