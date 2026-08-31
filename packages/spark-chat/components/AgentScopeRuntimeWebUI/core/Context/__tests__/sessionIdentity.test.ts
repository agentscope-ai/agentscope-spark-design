import assert from 'node:assert/strict';
import test from 'node:test';
import type { IAgentScopeRuntimeWebUISession } from '../../types/ISessions';
import {
  collectSessionIdentityAliases,
  isSameLoadedSession,
} from '../sessionIdentity';

type SessionWithAliases = IAgentScopeRuntimeWebUISession & {
  realId?: string;
  sessionId?: string;
  session_id?: string;
};

function createSession(
  id: string,
  aliases: Omit<SessionWithAliases, 'id' | 'name' | 'messages'> = {},
): SessionWithAliases {
  return { id, name: id, messages: [], ...aliases };
}

test('sessions sharing a backend sessionId remain distinct', () => {
  const sessions = [
    createSession('chat-a', { sessionId: 'channel:user-id' }),
    createSession('chat-b', { sessionId: 'channel:user-id' }),
  ];
  const loadedAliases = collectSessionIdentityAliases(
    'chat-a',
    sessions[0],
    sessions,
  );

  assert.deepEqual([...loadedAliases], ['chat-a']);
  assert.equal(isSameLoadedSession('chat-b', loadedAliases, sessions), false);
  assert.equal(
    isSameLoadedSession(
      'chat-b',
      new Set(['chat-a', 'channel:user-id']),
      sessions,
    ),
    false,
  );
  assert.deepEqual(
    [...collectSessionIdentityAliases('chat-b', undefined, sessions)],
    ['chat-b'],
  );
});

test('a unique backend alias still bridges the controlled and canonical ids', () => {
  const sessions = [
    createSession('chat-a', {
      realId: 'backend-a',
      sessionId: 'channel:user-a',
    }),
    createSession('chat-b', {
      realId: 'backend-b',
      sessionId: 'channel:user-b',
    }),
  ];
  const loadedAliases = collectSessionIdentityAliases(
    'backend-a',
    sessions[0],
    sessions,
  );

  assert.deepEqual(
    new Set(loadedAliases),
    new Set(['chat-a', 'backend-a', 'channel:user-a']),
  );
  assert.equal(isSameLoadedSession('chat-a', loadedAliases, sessions), true);
  assert.equal(isSameLoadedSession('chat-b', loadedAliases, sessions), false);
});

test('canonical id wins when another session reuses it as an alias', () => {
  const sessions = [
    createSession('chat-a'),
    createSession('chat-b', { session_id: 'chat-a' }),
  ];

  assert.deepEqual(
    [...collectSessionIdentityAliases('chat-a', sessions[0], sessions)],
    ['chat-a'],
  );
  assert.deepEqual(
    [...collectSessionIdentityAliases('chat-b', sessions[1], sessions)],
    ['chat-b'],
  );
});
