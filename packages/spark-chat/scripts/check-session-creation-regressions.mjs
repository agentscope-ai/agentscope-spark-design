// Real React provider/actions and context selectors; only host API/message ports
// are fixtures. This verifies DOM scheduling, not browser/backend/model E2E.
import { build } from 'esbuild';
import assert from 'node:assert/strict';
import { createRequire } from 'node:module';
import test from 'node:test';
import { fileURLToPath } from 'node:url';
const require = createRequire(import.meta.url);
const packageRoot = fileURLToPath(new URL('..', import.meta.url));
const { JSDOM } = require(require.resolve('jsdom', {
  paths: [packageRoot + '/../spark-design'],
}));
const dom = new JSDOM('<!doctype html><html><body></body></html>', {
  url: 'http://localhost',
});
for (const key of [
  'window',
  'document',
  'navigator',
  'HTMLElement',
  'Element',
  'Node',
])
  Object.defineProperty(globalThis, key, {
    configurable: true,
    value: dom.window[key],
  });
globalThis.IS_REACT_ACT_ENVIRONMENT = true;
const React = require('react');
const { act } = React;
const { createRoot } = require('react-dom/client');
const mocks = {
  ChatAnywhereOptionsContext: `export const useChatAnywhereOptions = f => f(globalThis.__creationTest.options);`,
  ChatAnywhereMessagesContext: `import {createContext} from 'use-context-selector';
    export const ChatAnywhereMessagesContext = createContext({setSessionMessages:(...args)=>globalThis.__creationTest.messages.push(args), setMessages:()=>{}, clearSessionMessages:()=>{}});`,
  useChatAnywhereEventEmitter: `export const useChatAnywhereCommandDispatcher = () => async()=>{};`,
};
const compiled = await build({
  entryPoints: [
    packageRoot +
      '/components/AgentScopeRuntimeWebUI/core/Context/ChatAnywhereSessionsContext.tsx',
  ],
  bundle: true,
  write: false,
  platform: 'node',
  format: 'cjs',
  packages: 'external',
  jsx: 'automatic',
  plugins: [
    {
      name: 'host-ports',
      setup(b) {
        b.onResolve({ filter: /.*/ }, (args) => {
          const key = args.path.split('/').at(-1);
          if (mocks[key]) return { path: key, namespace: 'ports' };
        });
        b.onLoad({ filter: /.*/, namespace: 'ports' }, (args) => ({
          contents: mocks[args.path],
          loader: 'js',
          resolveDir: packageRoot,
        }));
      },
    },
  ],
});
const module = { exports: {} };
new Function('require', 'module', 'exports', compiled.outputFiles[0].text)(
  require,
  module,
  module.exports,
);
const {
  ChatAnywhereSessionsContextProvider: Provider,
  useChatAnywhereSessions,
  ChatAnywhereSessionsContext,
} = module.exports;
const { useContextSelector } = require('use-context-selector');
function deferred() {
  let resolve;
  const promise = new Promise((r) => {
    resolve = r;
  });
  return { promise, resolve };
}
const chat = (id) => ({ id, name: id, messages: [] });
const created = (id) => ({
  sessions: [chat('A'), chat(id)],
  session: chat(id),
});
async function mount(t, controlled = true, listGate) {
  const gate = deferred();
  const state = {
    messages: [],
    changes: [],
    options: {
      session: {
        api: {
          getSessionList: async () =>
            listGate ? listGate.promise : [chat('A')],
          createSession: () => gate.promise,
        },
      },
    },
  };
  if (controlled) state.options.session.currentSessionId = undefined;
  state.options.session.onCurrentSessionChange = (id) => state.changes.push(id);
  globalThis.__creationTest = state;
  function Probe() {
    state.actions = useChatAnywhereSessions();
    state.context = useContextSelector(ChatAnywhereSessionsContext, (v) => v);
    return null;
  }
  const root = createRoot(document.createElement('div'));
  state.render = () =>
    act(async () =>
      root.render(
        React.createElement(Provider, null, React.createElement(Probe)),
      ),
    );
  state.unmount = () => act(async () => root.unmount());
  t.after(state.unmount);
  await state.render();
  state.gate = gate;
  state.select = async (id) => {
    if (controlled) {
      state.options.session.currentSessionId = id;
      await state.render();
    } else await act(async () => state.context.setCurrentSessionId(id));
  };
  return state;
}
for (const controlled of [true, false]) {
  for (const route of [['A'], ['A', undefined]]) {
    test(`late creation does not activate after switching ${JSON.stringify(
      route,
    )}, controlled=${controlled}`, async (t) => {
      const state = await mount(t, controlled);
      if (!controlled) await state.select(undefined);
      const pending = state.actions.createSession({ name: 'first' });
      const rejection = assert.rejects(pending, { name: 'AbortError' });
      for (const id of route) await state.select(id);
      await act(async () => {
        state.gate.resolve(created('B'));
        await rejection;
      });
      assert.equal(state.context.getCurrentSessionId(), route.at(-1));
      assert.deepEqual(state.messages, []);
      assert.deepEqual(state.changes, []);
    });
  }
}
test('normal creation and host route acknowledgement activate once', async (t) => {
  for (const acknowledge of [false, true]) {
    const state = await mount(t);
    const pending = state.actions.createSession({ name: 'first' });
    if (acknowledge) await state.select('B');
    await act(async () => {
      state.gate.resolve(created('B'));
      assert.equal(await pending, 'B');
    });
    assert.equal(state.context.getCurrentSessionId(), 'B');
    assert.deepEqual(state.changes, ['B']);
    assert.equal(state.messages.length, 1);
    await state.unmount();
  }
});
test('explicit blank selection invalidates a pending blank creation', async (t) => {
  const state = await mount(t);
  const pending = state.actions.createSession();
  const rejection = assert.rejects(pending, { name: 'AbortError' });
  await act(async () => state.context.setCurrentSessionId(undefined));
  await act(async () => {
    state.gate.resolve(created('B'));
    await rejection;
  });
  assert.deepEqual(state.messages, []);
});
test('unmount prevents a late creation from publishing', async (t) => {
  const state = await mount(t);
  const pending = state.actions.createSession();
  const rejection = assert.rejects(pending, { name: 'AbortError' });
  await state.unmount();
  state.gate.resolve(created('B'));
  await rejection;
  assert.deepEqual(state.changes, []);
});

test('a newer create owns activation even when the older response arrives last', async (t) => {
  const state = await mount(t);
  const first = state.actions.createSession();
  const rejected = assert.rejects(first, { name: 'AbortError' });
  const secondGate = deferred();
  state.options.session.api.createSession = () => secondGate.promise;
  const second = state.actions.createSession();
  await act(async () => {
    secondGate.resolve(created('C'));
    assert.equal(await second, 'C');
  });
  await act(async () => {
    state.gate.resolve(created('B'));
    await rejected;
  });
  assert.equal(state.context.getCurrentSessionId(), 'C');
  assert.deepEqual(state.changes, ['C']);
  assert.equal(state.messages.length, 1);
});

test('late initial list cannot steal selection or overwrite a newly created session', async (t) => {
  const listGate = deferred();
  const state = await mount(t, false, listGate);
  const pending = state.actions.createSession();
  await act(async () => {
    state.gate.resolve(created('B'));
    assert.equal(await pending, 'B');
  });
  await act(async () => {
    listGate.resolve([chat('A')]);
  });
  assert.equal(state.context.getCurrentSessionId(), 'B');
  assert.ok(state.context.getSessions().some((s) => s.id === 'B'));
});
