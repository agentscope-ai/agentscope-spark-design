import assert from 'node:assert/strict';
import test from 'node:test';
import {
  deferred,
  setup,
  sse,
  terminal,
  tick,
  until,
} from './helpers/controller-harness.mjs';

test(
  'routing metadata is captured before asynchronous session creation',
  { timeout: 3000 },
  async () => {
    let received;
    const state = setup({
      fetch: async (data) => {
        received = data;
        return sse([terminal]).response;
      },
    });
    const session = deferred();
    state.sessions.createSession = () => session.promise;
    state.switchTo(undefined);
    const data = { query: 'hello', context: { workspace: 'original' } };
    const run = state.execute(data, {});
    data.context.workspace = 'changed';
    session.resolve('created-chat');
    await run.completion;
    assert.equal(received.session_id, 'created-chat');
    assert.equal(received.context.workspace, 'original');
  },
);

test(
  'submit, resume and cancel share backend identity and captured context',
  { timeout: 3000 },
  async () => {
    const calls = {};
    const state = setup({
      fetch: async (data) => {
        calls.fetch = data;
        return sse().response;
      },
      reconnect: async (data) => {
        calls.reconnect = data;
        return sse([], true).response;
      },
      cancel: async (data) => {
        calls.cancel = data;
        data.abort();
      },
    });
    const data = {
      query: 'hello',
      session_id: 'runtime-X',
      context: { tenant: 'T' },
    };
    const run = state.execute(data, {
      sessionId: 'chat-A',
      clientRequestId: 'item-1',
    });
    await run.accepted;
    data.context.tenant = 'different';
    await until(() => run.getState() === 'disconnected');
    const resumed = state.handlers.handleResumeExecution({
      runId: run.runId,
      sessionId: 'chat-A',
    });
    assert.equal(resumed, run);
    await until(() => calls.reconnect);
    await run.cancel();
    for (const call of Object.values(calls)) {
      assert.equal(call.session_id, 'runtime-X');
      assert.equal(call.chatSessionId, 'chat-A');
      assert.equal(call.context.tenant, 'T');
      assert.equal(call.runId, run.runId);
      assert.equal(call.clientRequestId, 'item-1');
    }
  },
);

test(
  'canceling detached A finalizes only A while B continues streaming',
  { timeout: 3000 },
  async () => {
    const state = setup({ fetch: async () => sse([], true).response });
    const a = state.execute();
    await a.accepted;
    state.switchTo('chat-B');
    await until(() => a.getState() === 'disconnected');
    const b = state.execute({ query: 'B' }, { sessionId: 'chat-B' });
    await b.accepted;
    const result = await a.cancel();
    assert.equal(result.locallyCanceled, true);
    assert.equal(state.store.get('chat-A').at(-1).msgStatus, 'interrupted');
    assert.equal(
      state.saved
        .filter((s) => s.id === 'chat-A')
        .at(-1)
        .messages.at(-1).msgStatus,
      'interrupted',
    );
    assert.equal(state.loading['chat-A'], false);
    assert.equal(state.loading['chat-B'], true);
    assert.equal(state.store.get('chat-B').at(-1).msgStatus, 'generating');
    await b.cancel();
  },
);

for (const mode of ['public', 'ui']) {
  test(
    `switching chats while ${mode} cancellation is pending still finalizes the original Run`,
    { timeout: 3000 },
    async () => {
      const gate = deferred();
      const state = setup({
        fetch: async () => sse([], true).response,
        cancel: async ({ abort }) => {
          await gate.promise;
          abort();
        },
      });
      const a = state.execute();
      await a.accepted;
      const cancellation =
        mode === 'public' ? a.cancel() : state.controller.handleCancel();
      state.switchTo('chat-B');
      const b = state.execute({ query: 'B' }, { sessionId: 'chat-B' });
      await b.accepted;
      gate.resolve();
      await cancellation;
      await a.completion;
      assert.equal(state.store.get('chat-A').at(-1).msgStatus, 'interrupted');
      assert.equal(state.loading['chat-B'], true);
      await b.cancel();
    },
  );
}

test(
  'canceling an older Run in the same chat does not clear the new Run loading',
  { timeout: 3000 },
  async () => {
    const state = setup({ fetch: async () => sse([], true).response });
    const a = state.execute();
    await a.accepted;
    const b = state.execute({ query: 'next' });
    await b.accepted;
    await a.cancel();
    assert.equal(state.loading['chat-A'], true);
    assert.equal(
      state.store.get('chat-A').filter((m) => m.role === 'assistant')[0]
        .msgStatus,
      'interrupted',
    );
    assert.equal(state.store.get('chat-A').at(-1).msgStatus, 'generating');
    await b.cancel();
  },
);

test(
  'a transport exception after dispatch never claims safe retry',
  { timeout: 3000 },
  async (t) => {
    t.mock.method(console, 'error', () => {});
    let serverEffects = 0;
    const state = setup({
      fetch: async () => {
        serverEffects++;
        throw Error('response lost after server accepted');
      },
    });
    const run = state.execute();
    const result = await run.completion;
    assert.equal(serverEffects, 1);
    assert.equal(result.status, 'failed');
    assert.equal(result.backendAcceptance, 'unknown');
    assert.equal(result.retryable, false);
    assert.equal((await run.accepted).backendAcceptance, 'unknown');
    await tick();
  },
);

test(
  'failure before dispatch is safe to retry and never calls fetch',
  { timeout: 3000 },
  async () => {
    let fetched = false;
    const state = setup({
      fetch: async () => {
        fetched = true;
        return sse().response;
      },
    });
    const run = state.execute({
      query: 'hello',
      fileList: [{ status: 'uploading' }],
    });
    const result = await run.completion;
    assert.equal(result.backendAcceptance, 'not-submitted');
    assert.equal(result.retryable, true);
    assert.equal(fetched, false);
  },
);

test(
  'completion follows message persistence and a synchronous subscriber can send next',
  { timeout: 3000 },
  async () => {
    let calls = 0;
    const state = setup({
      fetch: async () =>
        ++calls === 1 ? sse([terminal]).response : sse([], true).response,
    });
    const save = deferred();
    state.beforeSave = (session) =>
      session.messages?.at(-1).msgStatus === 'finished'
        ? save.promise
        : undefined;
    const first = state.execute();
    let second;
    first.subscribe((event) => {
      if (event.state === 'completed')
        second = state.execute({ query: 'next' });
    });
    await until(() => state.qa.current.response?.msgStatus === 'finished');
    assert.equal(state.loading['chat-A'], true);
    assert.equal(second, undefined);
    save.resolve();
    await first.completion;
    await until(() => calls === 2);
    assert.equal(
      state.store.get('chat-A').filter((m) => m.role === 'assistant')[0]
        .msgStatus,
      'finished',
    );
    assert.equal(
      state.saved.some((s) => s.messages?.at(-1).msgStatus === 'finished'),
      true,
    );
    assert.equal(
      state.saved
        .find((s) => s.messages?.at(-1).msgStatus === 'finished')
        .messages.at(-1).cards[0].data.status,
      'completed',
    );
    await second.cancel();
  },
);

test(
  'a detached Run cancels through its captured API after options change',
  { timeout: 3000 },
  async () => {
    const calls = [];
    const state = setup({
      fetch: async () => sse([], true).response,
      cancel: async (data) => {
        calls.push(data.session_id);
      },
    });
    const run = state.execute({ query: 'hello', session_id: 'runtime-A' });
    await run.accepted;
    state.options.api = {
      cancel: async () => {
        throw Error('must not cancel via a different scope');
      },
    };
    state.switchTo('chat-B');
    assert.equal((await run.cancel()).status, 'canceled');
    assert.deepEqual(calls, ['runtime-A']);
  },
);

test(
  'cancel API rejection still finalizes the local response',
  { timeout: 3000 },
  async (t) => {
    t.mock.method(console, 'error', () => {});
    const stream = sse([], true);
    const state = setup({
      fetch: async () => stream.response,
      cancel: async () => {
        throw Error('cancel unavailable');
      },
    });
    const run = state.execute();
    await run.accepted;
    const result = await run.cancel();
    assert.equal(result.status, 'failed');
    assert.equal(result.locallyCanceled, true);
    assert.equal(state.loading['chat-A'], false);
    assert.equal(state.store.get('chat-A').at(-1).msgStatus, 'interrupted');
    assert.equal((await run.completion).status, 'canceled');
    await until(stream.isCanceled);
  },
);

test(
  'terminal persistence failure is reported without turning completion into disconnection',
  { timeout: 3000 },
  async (t) => {
    const errors = [];
    t.mock.method(console, 'error', (...args) => errors.push(args));
    const state = setup({ fetch: async () => sse([terminal]).response });
    state.beforeSave = (session) => {
      if (session.messages?.at(-1).msgStatus === 'finished')
        throw Error('storage unavailable');
    };
    const run = state.execute();
    assert.equal((await run.completion).status, 'completed');
    assert.equal(state.loading['chat-A'], false);
    assert.ok(
      errors.some((args) => String(args[0]).includes('persistence failed')),
    );
  },
);

test(
  'built-in Stop waits for cancellation persistence and settles once',
  { timeout: 3000 },
  async () => {
    const state = setup({ fetch: async () => sse([], true).response });
    const run = state.execute();
    await run.accepted;
    const save = deferred();
    state.beforeSave = (session) =>
      session.messages?.at(-1).msgStatus === 'interrupted'
        ? save.promise
        : undefined;
    let completed = false;
    run.completion.then(() => {
      completed = true;
    });
    state.controller.handleCancel();
    await tick();
    assert.equal(completed, false);
    save.resolve();
    assert.equal((await run.completion).status, 'canceled');
    assert.equal(state.loading['chat-A'], false);
  },
);

test(
  'empty response stays disconnected and SessionLoader reconnect settles the same Run',
  { timeout: 3000 },
  async () => {
    const state = setup({
      fetch: async () => new Response(null, { status: 202 }),
      reconnect: async () => sse([terminal]).response,
    });
    const run = state.execute();
    await until(() => run.getState() === 'disconnected');
    await state.handlers.handleReconnect({ session_id: 'chat-A' });
    assert.equal((await run.completion).status, 'completed');
  },
);

test(
  'resume after remount uses explicitly restored request context',
  { timeout: 3000 },
  async () => {
    let received;
    const state = setup({
      reconnect: async (data) => {
        received = data;
        return sse([terminal]).response;
      },
    });
    const run = state.handlers.handleResumeExecution({
      sessionId: 'chat-A',
      requestContext: { session_id: 'runtime-X', context: { workspace: 'W' } },
    });
    await run.completion;
    assert.equal(received.session_id, 'runtime-X');
    assert.equal(received.context.workspace, 'W');
  },
);

test(
  'Runtime terminal releases an SSE source that does not close itself',
  { timeout: 3000 },
  async () => {
    const stream = sse([terminal], true);
    const state = setup({ fetch: async () => stream.response });
    await state.execute().completion;
    await until(stream.isCanceled);
  },
);

test(
  'unmount aborts consumption and marks the Run disconnected, not completed',
  { timeout: 3000 },
  async () => {
    const stream = sse([], true);
    const state = setup({ fetch: async () => stream.response });
    const run = state.execute();
    await run.accepted;
    await tick();
    state.unmount();
    await until(stream.isCanceled);
    assert.equal(run.getState(), 'disconnected');
  },
);

for (const mode of ['public', 'ui']) {
  test(
    `${mode} custom cancel retains SSE until terminal persistence completes`,
    { timeout: 3000 },
    async () => {
      const stream = sse([], true);
      let signal;
      let stopCalled = false;
      const save = deferred();
      const state = setup({
        fetch: async (data) => {
          signal = data.signal;
          return stream.response;
        },
        cancel: async () => {
          stopCalled = true;
        },
      });
      const run = state.execute();
      await run.accepted;
      state.beforeSave = (session) =>
        session.messages?.at(-1).msgStatus === 'interrupted'
          ? save.promise
          : undefined;
      let resolved = false;
      const cancellation =
        mode === 'public'
          ? run.cancel().then((result) => {
              resolved = true;
              return result;
            })
          : state.controller.handleCancel();
      await until(() => stopCalled);
      await tick();
      assert.equal(signal.aborted, false);
      assert.equal(stream.isCanceled(), false);
      assert.equal(run.getState(), 'canceling');
      stream.emit({
        ...terminal,
        status: 'canceled',
        id: 'server-cancel-confirmation',
      });
      await until(
        () => state.store.get('chat-A').at(-1).msgStatus === 'interrupted',
      );
      assert.equal(resolved, false);
      save.resolve();
      assert.equal((await run.completion).status, 'canceled');
      const result = await cancellation;
      if (mode === 'public') assert.equal(result.locallyCanceled, false);
      assert.equal(
        state.store.get('chat-A').at(-1).cards[0].data.id,
        'server-cancel-confirmation',
      );
    },
  );
}

test(
  'custom cancellation timeout reports failure and terminates the original local stream',
  { timeout: 3000 },
  async () => {
    const stream = sse([], true);
    const state = setup({
      fetch: async () => stream.response,
      cancel: () => new Promise(() => {}),
      cancelTimeoutMs: 10,
    });
    const run = state.execute();
    await run.accepted;
    const result = await run.cancel();
    assert.equal(result.status, 'failed');
    assert.equal(result.locallyCanceled, true);
    assert.match(result.error.message, /timed out/);
    assert.equal((await run.completion).status, 'canceled');
    await until(() => stream.isCanceled());
  },
);

test(
  'EOF during custom cancellation settles locally instead of waiting forever',
  { timeout: 3000 },
  async () => {
    const stream = sse([], true);
    let stopped = false;
    const state = setup({
      fetch: async () => stream.response,
      cancel: async () => {
        stopped = true;
      },
    });
    const run = state.execute();
    await run.accepted;
    const cancellation = run.cancel();
    await until(() => stopped);
    stream.close();
    const result = await cancellation;
    assert.equal(result.locallyCanceled, true);
    assert.equal((await run.completion).status, 'canceled');
  },
);

test(
  'legacy UI submission keeps receiving the custom cancel terminal',
  { timeout: 3000 },
  async () => {
    const stream = sse([], true);
    let signal;
    let stopped = false;
    const state = setup({
      fetch: async (data) => {
        signal = data.signal;
        return stream.response;
      },
      cancel: async () => {
        stopped = true;
      },
    });
    const submission = state.controller.handleSubmit({ query: 'legacy' });
    await until(() => signal);
    state.controller.handleCancel();
    await until(() => stopped);
    assert.equal(signal.aborted, false);
    stream.emit({ ...terminal, status: 'canceled', id: 'legacy-terminal' });
    await submission;
    assert.equal(state.loading['chat-A'], false);
    assert.equal(
      state.store.get('chat-A').at(-1).cards[0].data.id,
      'legacy-terminal',
    );
  },
);
