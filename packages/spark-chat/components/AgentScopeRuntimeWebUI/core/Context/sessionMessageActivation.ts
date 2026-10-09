import type { IAgentScopeRuntimeWebUIMessagesContext } from '../types/IMessages';

/**
 * Promote a session's already-cached messages to the active message view.
 *
 * The messages context decides whether a write targets the visible session
 * from the current session identity, so replaying the cached value after the
 * identity render is enough to switch views without refetching the session.
 */
export function activateCachedSessionMessages(
  sessionId: string,
  setSessionMessages: IAgentScopeRuntimeWebUIMessagesContext['setSessionMessages'],
) {
  setSessionMessages(sessionId, (messages) => messages);
}
