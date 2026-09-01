import assert from 'node:assert/strict';
import test from 'node:test';
import type { IAgentScopeRuntimeWebUIMessage } from '../../types/IMessages';
import { activateCachedSessionMessages } from '../sessionMessageActivation';

const oldMessages: IAgentScopeRuntimeWebUIMessage[] = [
  { id: 'old-message', role: 'user' },
];

test('activates the cached message list for a newly created session', () => {
  const messagesBySession: Record<
    string,
    IAgentScopeRuntimeWebUIMessage[]
  > = {
    old: oldMessages,
    fresh: [],
  };
  let visibleMessages = oldMessages;

  activateCachedSessionMessages('fresh', (sessionId, updater) => {
    const previous = messagesBySession[sessionId] || [];
    const next =
      typeof updater === 'function' ? updater(previous) : updater;
    messagesBySession[sessionId] = next;
    visibleMessages = next;
  });

  assert.deepEqual(visibleMessages, []);
  assert.equal(messagesBySession.old, oldMessages);
});
