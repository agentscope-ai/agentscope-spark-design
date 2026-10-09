import { produce } from 'immer';
import { v4 as uuid } from 'uuid';
import {
  AgentScopeRuntimeContentType,
  AgentScopeRuntimeMessageType,
  AgentScopeRuntimeRunStatus,
  IAgentScopeRuntimeMessage,
  IAgentScopeRuntimeResponse,
  IContent,
  IDataContent,
  IImageContent,
  ITextContent,
} from '../types';

class AgentScopeRuntimeResponseBuilder {
  static getToolMessageKey(message: IAgentScopeRuntimeMessage) {
    const content = message.content?.[0] as
      | IDataContent<{ name?: string; call_id?: string }>
      | undefined;
    return content?.data?.call_id || content?.data?.name;
  }

  static mergeToolMessages(messages: IAgentScopeRuntimeMessage[]) {
    const pendingInputs = new Map<string, number[]>();
    const resMessages: IAgentScopeRuntimeMessage[] = [];

    for (const message of messages) {
      if (
        AgentScopeRuntimeResponseBuilder.maybeToolInput(message) &&
        message.content?.length
      ) {
        const key = AgentScopeRuntimeResponseBuilder.getToolMessageKey(message);
        if (!key) {
          resMessages.push(message);
          continue;
        }
        const indexes = pendingInputs.get(key) || [];
        indexes.push(resMessages.length);
        pendingInputs.set(key, indexes);
        resMessages.push(message);
      } else if (
        AgentScopeRuntimeResponseBuilder.maybeToolOutput(message) &&
        message.content?.length
      ) {
        const content = message.content[0] as IDataContent;
        const key = AgentScopeRuntimeResponseBuilder.getToolMessageKey(message);
        if (!key) {
          resMessages.push(message);
          continue;
        }
        const indexes = pendingInputs.get(key);
        const inputIndex = indexes?.shift();

        if (inputIndex !== undefined) {
          const inputMessage = resMessages[inputIndex];
          resMessages[inputIndex] = {
            ...message,
            content: [...inputMessage.content, content],
          };
          if (indexes?.length === 0) pendingInputs.delete(key);
        } else {
          // Preserve unmatched outputs instead of silently dropping them.
          resMessages.push(message);
        }
      } else {
        resMessages.push(message);
      }
    }

    return resMessages;
  }

  static maybeToolOutput(message: IAgentScopeRuntimeMessage) {
    return [
      AgentScopeRuntimeMessageType.FUNCTION_CALL_OUTPUT,
      AgentScopeRuntimeMessageType.PLUGIN_CALL_OUTPUT,
      AgentScopeRuntimeMessageType.TOOL_CALL_OUTPUT,
      AgentScopeRuntimeMessageType.COMPONENT_CALL_OUTPUT,
      AgentScopeRuntimeMessageType.MCP_CALL_OUTPUT,
    ].includes(message.type);
  }

  static maybeToolInput(message: IAgentScopeRuntimeMessage) {
    return [
      AgentScopeRuntimeMessageType.FUNCTION_CALL,
      AgentScopeRuntimeMessageType.PLUGIN_CALL,
      AgentScopeRuntimeMessageType.TOOL_CALL,
      AgentScopeRuntimeMessageType.COMPONENT_CALL,
      AgentScopeRuntimeMessageType.MCP_CALL,
    ].includes(message.type);
  }

  static maybeGenerating(data: { status: AgentScopeRuntimeRunStatus }) {
    return [
      AgentScopeRuntimeRunStatus.InProgress,
      AgentScopeRuntimeRunStatus.Created,
    ].includes(data.status);
  }

  static maybeDone(data: { status: AgentScopeRuntimeRunStatus }) {
    return [
      AgentScopeRuntimeRunStatus.Completed,
      AgentScopeRuntimeRunStatus.Canceled,
      AgentScopeRuntimeRunStatus.Failed,
    ].includes(data.status);
  }

  data: IAgentScopeRuntimeResponse;

  constructor({
    id,
    status,
    created_at,
  }: Pick<IAgentScopeRuntimeResponse, 'id' | 'status' | 'created_at'>) {
    this.data = {
      id,
      output: [],
      object: 'response',
      status: status || AgentScopeRuntimeRunStatus.Created,
      created_at: created_at ?? Math.floor(Date.now() / 1000),
    };
  }

  handleResponse(data: IAgentScopeRuntimeResponse) {
    this.data = produce(this.data, (draft) => {
      const existingOutput = draft.output || [];
      const incomingOutput = data.output;

      Object.assign(draft, data);

      // If incoming response has no output or empty output, preserve the
      // accumulated output from streaming to avoid losing intermediate
      // tool-call messages that were already collected.
      if (!incomingOutput || incomingOutput.length === 0) {
        draft.output = existingOutput;
      } else if (existingOutput.length > 0) {
        // Merge by id: prefer the version with non-empty content to avoid
        // a partial-update response wiping out previously accumulated
        // tool-call data (Bug 2 of issue #4644).
        const existingMap = new Map(existingOutput.map((m) => [m.id, m]));
        const incomingIds = new Set(incomingOutput.map((m) => m.id));
        const merged = incomingOutput.map((incoming) => {
          const existing = existingMap.get(incoming.id);
          if (!existing) return incoming;
          // Prefer the message with content already populated.
          const incomingHasContent = incoming.content?.length > 0;
          const existingHasContent = existing.content?.length > 0;
          if (existingHasContent && !incomingHasContent) {
            return { ...incoming, content: existing.content };
          }
          return incoming;
        });
        // Append existing-only messages (not present in incoming).
        for (const existing of existingOutput) {
          if (!incomingIds.has(existing.id)) {
            merged.push(existing);
          }
        }
        draft.output = merged;
      }
    });
  }

  handleMessage(data: IAgentScopeRuntimeMessage) {
    this.data = produce(this.data, (draft) => {
      if (!draft.output) {
        draft.output = [];
      }

      const existingIndex = draft.output.findIndex((msg) => msg.id === data.id);

      if (existingIndex >= 0) {
        const existingContent = draft.output[existingIndex].content;
        Object.assign(draft.output[existingIndex], data);
        if (!data.content || data.content.length === 0) {
          draft.output[existingIndex].content = existingContent;
        }
      } else {
        draft.output.push(data);
      }
    });
  }

  handleContent(data: IContent) {
    this.data = produce(this.data, (draft) => {
      const msg = draft.output.find((m) => m.id === data.msg_id);

      if (!msg) {
        console.warn('Message not found for content:', data.msg_id);
        return;
      }

      if (!msg.content) {
        msg.content = [];
      }

      if (data.delta) {
        const lastContent = msg.content[msg.content.length - 1];

        if (lastContent && lastContent.delta) {
          if (
            data.type === AgentScopeRuntimeContentType.TEXT &&
            lastContent.type === AgentScopeRuntimeContentType.TEXT
          ) {
            (lastContent as ITextContent).text += (data as ITextContent).text;
          } else if (data.type === AgentScopeRuntimeContentType.IMAGE) {
            (lastContent as IImageContent).image_url = (
              data as IImageContent
            ).image_url;
          } else if (data.type === AgentScopeRuntimeContentType.DATA) {
            const isStreamingToolInput = [
              AgentScopeRuntimeMessageType.PLUGIN_CALL,
              AgentScopeRuntimeMessageType.TOOL_CALL,
              AgentScopeRuntimeMessageType.MCP_CALL,
            ].includes(msg.type as AgentScopeRuntimeMessageType);

            if (isStreamingToolInput) {
              const oldData = (lastContent as IDataContent).data || {};
              const newData = (data as IDataContent).data || {};
              const merged: Record<string, any> = { ...oldData };
              for (const [key, value] of Object.entries(newData)) {
                if (
                  typeof value === 'string' &&
                  typeof merged[key] === 'string'
                ) {
                  merged[key] = merged[key] + value;
                } else {
                  merged[key] = value;
                }
              }
              (lastContent as IDataContent).data = merged;
            } else {
              (lastContent as IDataContent).data = (data as IDataContent).data;
            }
          }
        } else {
          msg.content.push(data);
        }
      } else {
        if (msg.content.length > 0) {
          Object.assign(msg.content[msg.content.length - 1], data);
        } else {
          msg.content.push(data);
        }
      }
    });
  }

  handleError(data: IAgentScopeRuntimeMessage) {
    this.data = produce(this.data, (draft) => {
      draft.status = AgentScopeRuntimeRunStatus.Failed;

      draft.output.push({
        status: AgentScopeRuntimeRunStatus.Failed,
        type: AgentScopeRuntimeMessageType.ERROR,
        content: [],
        id: uuid(),
        role: 'assistant',
        code: data.code,
        message:
          typeof data.message === 'string'
            ? data.message
            : JSON.stringify(data.message),
      });
    });
  }

  handle(
    data: IAgentScopeRuntimeResponse | IAgentScopeRuntimeMessage | IContent,
  ) {
    if (data.object === 'response') {
      this.handleResponse(data);
    } else if (data.object === 'message') {
      if (data.type === AgentScopeRuntimeMessageType.HEARTBEAT)
        return this.data;
      this.handleMessage(data);
    } else if (data.object === 'content') {
      this.handleContent(data);
    } else {
      this.handleError(data);
    }

    return this.data;
  }

  static cancelResponse(data: IAgentScopeRuntimeResponse) {
    return produce(data, (draft) => {
      const pendingToolInputs = new Map<string, number[]>();
      const unmatchedToolInputIndexes = new Set<number>();
      draft.output?.forEach((message, index) => {
        const key = AgentScopeRuntimeResponseBuilder.getToolMessageKey(message);
        if (!key) return;
        if (AgentScopeRuntimeResponseBuilder.maybeToolInput(message)) {
          const indexes = pendingToolInputs.get(key) || [];
          indexes.push(index);
          pendingToolInputs.set(key, indexes);
          unmatchedToolInputIndexes.add(index);
          return;
        }
        if (AgentScopeRuntimeResponseBuilder.maybeToolOutput(message)) {
          const inputIndex = pendingToolInputs.get(key)?.shift();
          if (inputIndex !== undefined) {
            unmatchedToolInputIndexes.delete(inputIndex);
          }
        }
      });

      if (AgentScopeRuntimeResponseBuilder.maybeGenerating(draft)) {
        draft.status = AgentScopeRuntimeRunStatus.Canceled;
      }
      draft.output?.forEach((msg, index) => {
        if (
          AgentScopeRuntimeResponseBuilder.maybeGenerating(msg) ||
          unmatchedToolInputIndexes.has(index)
        ) {
          msg.status = AgentScopeRuntimeRunStatus.Canceled;
        }
        msg.content?.forEach((content) => {
          if (AgentScopeRuntimeResponseBuilder.maybeGenerating(content)) {
            content.status = AgentScopeRuntimeRunStatus.Canceled;
          }
        });
      });
    });
  }

  cancel() {
    this.data = AgentScopeRuntimeResponseBuilder.cancelResponse(this.data);
    return this.data;
  }
}

export default AgentScopeRuntimeResponseBuilder;
