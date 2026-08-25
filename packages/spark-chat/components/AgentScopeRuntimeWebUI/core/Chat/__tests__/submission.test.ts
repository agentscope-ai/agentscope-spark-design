import assert from 'node:assert/strict';
import test from 'node:test';
import type { IAgentScopeRuntimeWebUIAPIOptions } from '../../types';
import {
  createChatSubmissionRequest,
  fetchChatSubmission,
} from '../submission';

test('submission snapshot keeps session and context stable across async state changes', async () => {
  const context = { workspaceId: 'workspace-b', nested: { id: 'task-b' } };
  const input = {
    query: 'send to B',
    context,
    biz_params: { user_prompt_params: { tone: 'brief' } },
    mentions: [{ value: '/workspace-b/report.md', type: 'file' }],
  };
  const request = createChatSubmissionRequest(input, 'session-b');

  context.workspaceId = 'workspace-a';
  context.nested.id = 'task-a';
  input.biz_params.user_prompt_params.tone = 'verbose';
  input.mentions[0].value = '/workspace-a/report.md';

  let captured:
    | Parameters<NonNullable<IAgentScopeRuntimeWebUIAPIOptions['fetch']>>[0]
    | undefined;
  let activeSessionId = 'session-b';
  const pending = fetchChatSubmission({
    apiOptions: {
      fetch: async (data) => {
        await Promise.resolve();
        captured = data;
        return new Response('', { status: 200 });
      },
    },
    historyMessages: [{ role: 'user', content: [] }],
    data: request,
    submission: { source: 'direct' },
  });

  activeSessionId = 'session-a';
  await pending;

  assert.equal(activeSessionId, 'session-a');
  assert.equal(captured?.session_id, 'session-b');
  assert.deepEqual(captured?.context, {
    workspaceId: 'workspace-b',
    nested: { id: 'task-b' },
  });
  assert.deepEqual(captured?.biz_params, {
    user_prompt_params: { tone: 'brief' },
  });
  assert.deepEqual(captured?.mentions, [
    { value: '/workspace-b/report.md', type: 'file' },
  ]);
});

test('default fetch sends the same session snapshot and context', async () => {
  const previousFetch = globalThis.fetch;
  let capturedBody: Record<string, unknown> | undefined;
  const controller = new AbortController();

  globalThis.fetch = async (_input, init) => {
    capturedBody = JSON.parse(String(init?.body));
    assert.equal(init?.signal, controller.signal);
    return new Response('', { status: 200 });
  };

  try {
    await fetchChatSubmission({
      apiOptions: { baseURL: '/chat' },
      historyMessages: [
        { role: 'user', content: [{ type: 'text', text: 'hello' }] },
      ],
      data: createChatSubmissionRequest(
        {
          context: { workspaceId: 'workspace-b' },
          mentions: [{ value: '/workspace-b/report.md', type: 'file' }],
        },
        'session-b',
      ),
      signal: controller.signal,
      submission: { source: 'direct' },
    });
  } finally {
    globalThis.fetch = previousFetch;
  }

  assert.equal(capturedBody?.session_id, 'session-b');
  assert.deepEqual(capturedBody?.context, { workspaceId: 'workspace-b' });
  assert.deepEqual(capturedBody?.mentions, [
    { value: '/workspace-b/report.md', type: 'file' },
  ]);
});
