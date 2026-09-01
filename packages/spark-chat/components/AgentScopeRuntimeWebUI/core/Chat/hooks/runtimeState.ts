import type { MutableRefObject } from 'react';
import type { IAgentScopeRuntimeWebUIMessage } from '../../types';

export interface ChatControllerCurrentQA {
  request?: IAgentScopeRuntimeWebUIMessage;
  response?: IAgentScopeRuntimeWebUIMessage;
  abortController?: AbortController;
  activeRequestId: number;
  activeSessionId?: string;
  /** Public Run id associated with the active request, when externally orchestrated. */
  activeRunId?: string;
  activeQueueSessionId?: string;
  cancelRequestedRequestId?: number;
}

export type ChatControllerCurrentQARef =
  MutableRefObject<ChatControllerCurrentQA>;

export function findGeneratingResponse(
  messages: IAgentScopeRuntimeWebUIMessage[],
) {
  for (let index = messages.length - 1; index >= 0; index -= 1) {
    const message = messages[index];
    if (message.role === 'assistant' && message.msgStatus === 'generating') {
      return message;
    }
  }
}
