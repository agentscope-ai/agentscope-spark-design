import type { IAgentScopeRuntimeWebUIMessage } from '../../types';
import {
  AgentScopeRuntimeContentType,
  AgentScopeRuntimeMessageType,
  IDataContent,
} from '../types';

export type ApprovalStatus = 'pending' | 'confirmed' | 'canceled';

export function getApprovalStatus(
  messages: IAgentScopeRuntimeWebUIMessage[],
  approvalRequestId?: string,
): ApprovalStatus {
  if (!approvalRequestId) return 'pending';

  for (
    let messageIndex = messages.length - 1;
    messageIndex >= 0;
    messageIndex -= 1
  ) {
    const cards = messages[messageIndex].cards || [];
    for (let cardIndex = cards.length - 1; cardIndex >= 0; cardIndex -= 1) {
      const runtimeMessages = [
        ...(Array.isArray(cards[cardIndex].data?.input)
          ? cards[cardIndex].data.input
          : []),
        ...(Array.isArray(cards[cardIndex].data?.output)
          ? cards[cardIndex].data.output
          : []),
      ];
      for (
        let runtimeIndex = runtimeMessages.length - 1;
        runtimeIndex >= 0;
        runtimeIndex -= 1
      ) {
        const runtimeMessage = runtimeMessages[runtimeIndex];
        if (
          runtimeMessage.type !==
          AgentScopeRuntimeMessageType.MCP_APPROVAL_RESPONSE
        ) {
          continue;
        }
        const content = runtimeMessage.content?.find(
          (
            item,
          ): item is IDataContent<{
            approve?: boolean;
            id?: string;
            approval_request_id?: string;
          }> => item.type === AgentScopeRuntimeContentType.DATA,
        );
        const responseRequestId =
          content?.data?.approval_request_id || content?.data?.id;
        if (responseRequestId === approvalRequestId) {
          return content.data.approve ? 'confirmed' : 'canceled';
        }
      }
    }
  }

  return 'pending';
}
