import assert from 'node:assert/strict';
import test from 'node:test';
import type { IAgentScopeRuntimeWebUIMessage } from '../../types/IMessages';
import type { IAgentScopeRuntimeWebUISession } from '../../types/ISessions';
import {
  hasSessionListChanged,
  normalizeCreateSessionResult,
  selectCreatedSession,
} from '../sessionCreation';
import { activateCachedSessionMessages } from '../sessionMessageActivation';

const oldMessages: IAgentScopeRuntimeWebUIMessage[] = [
  { id: 'old-message', role: 'user' },
];

test('activates the cached message list for a newly created session', () => {
  const messagesBySession: Record<string, IAgentScopeRuntimeWebUIMessage[]> = {
    old: oldMessages,
    fresh: [],
  };
  let visibleMessages = oldMessages;

  activateCachedSessionMessages('fresh', (sessionId, updater) => {
    const previous = messagesBySession[sessionId] || [];
    const next = typeof updater === 'function' ? updater(previous) : updater;
    messagesBySession[sessionId] = next;
    visibleMessages = next;
  });

  assert.deepEqual(visibleMessages, []);
  assert.equal(messagesBySession.old, oldMessages);
});

function session(
  id: string,
  metadata: Record<string, unknown> = {},
): IAgentScopeRuntimeWebUISession {
  return { id, name: id, messages: [], ...metadata };
}

test('uses the explicit created session when an adapter reuses a draft', () => {
  const current = session('current');
  const reused = session('pending-draft');
  const creation = normalizeCreateSessionResult({
    sessions: [current, reused],
    session: reused,
  });

  assert.equal(
    selectCreatedSession(
      new Set(['current', 'pending-draft']),
      creation.sessions,
      undefined,
      creation.session,
    ),
    reused,
  );
});

test('does not reactivate the first session for an ambiguous legacy result', () => {
  const current = session('current');
  const pending = session('pending-draft');

  assert.equal(
    selectCreatedSession(new Set(['current', 'pending-draft']), [
      current,
      pending,
    ]),
    undefined,
  );
});

test('publishes same-id session metadata changes but ignores message-only changes', () => {
  const previous = session('current', {
    name: 'Old name',
    realId: undefined,
    generating: false,
  });
  const metadataChanged = session('current', {
    name: 'New name',
    realId: 'backend-id',
    generating: true,
  });
  const messagesChanged = {
    ...previous,
    messages: [{ id: 'next-message', role: 'user' }],
  };

  assert.equal(hasSessionListChanged([previous], [metadataChanged]), true);
  assert.equal(hasSessionListChanged([previous], [messagesChanged]), false);
});
