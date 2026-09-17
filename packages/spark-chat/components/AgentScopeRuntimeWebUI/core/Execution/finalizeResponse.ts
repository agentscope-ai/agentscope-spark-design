import Builder from '../AgentScopeRuntime/Response/Builder';
import { patchChatMessageSnapshot } from '../Chat/submission';
import type { IAgentScopeRuntimeWebUIMessage } from '../types';
import type { ChatRunContext } from './runContext';

/** Finalize by message identity, not by the currently visible session. */
export function finalizeRunResponse(
  execution: ChatRunContext,
  status: 'finished' | 'interrupted',
  ports: {
    getMessages: (sessionId: string) => IAgentScopeRuntimeWebUIMessage[];
    updateMessage: (
      message: IAgentScopeRuntimeWebUIMessage,
      sessionId: string,
    ) => void;
    syncMessages: (
      sessionId: string,
      messages: IAgentScopeRuntimeWebUIMessage[],
    ) => void;
    settled: () => void;
  },
): Promise<void> {
  if (execution.finish) return execution.finish;
  execution.finish = (async () => {
    const { sessionId } = execution;
    // The terminal chunk may not have been published to the message store yet.
    const response = execution.response;
    try {
      if (!response) return;
      const nextResponse: IAgentScopeRuntimeWebUIMessage = {
        ...response,
        msgStatus: status,
        cards:
          status === 'interrupted'
            ? (response.cards || []).map((card) =>
                card.code === 'AgentScopeRuntimeResponseCard'
                  ? { ...card, data: Builder.cancelResponse(card.data) }
                  : card,
              )
            : response.cards,
      };
      execution.response = nextResponse;
      ports.updateMessage(nextResponse, sessionId);
      const nextMessages = patchChatMessageSnapshot(
        ports.getMessages(sessionId),
        nextResponse,
      );
      ports.syncMessages(sessionId, nextMessages);
      await execution.saveMessages(nextMessages);
    } catch (error) {
      // Known terminal state is not a transport disconnection. Surface the
      // persistence error without leaving completion pending forever.
      console.error('chat terminal message persistence failed:', error);
    } finally {
      ports.settled();
    }
  })();
  return execution.finish;
}
