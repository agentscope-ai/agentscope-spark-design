
import { produce } from "immer";
import { IAgentScopeRuntimeResponse, AgentScopeRuntimeRunStatus, IAgentScopeRuntimeMessage, IContent, AgentScopeRuntimeContentType, ITextContent, IImageContent, IDataContent, AgentScopeRuntimeMessageType } from "../types";
import { uuid } from "@agentscope-ai/chat";

class AgentScopeRuntimeResponseBuilder {

  static mergeToolMessages(messages: IAgentScopeRuntimeMessage[]) {
    const bufferMessagesMap = new Map<string, IDataContent>();
    let resMessages: IAgentScopeRuntimeMessage[] = [];

    for (const message of messages) {

      if (AgentScopeRuntimeResponseBuilder.maybeToolInput(message) && message.content?.length) {
        const content = message.content[0] as IDataContent<{
          name: string;
          call_id?: string;
        }>;
        const key = content.data.call_id || content.data.name;
        bufferMessagesMap.set(key, content);
        resMessages.push(message);

      } else if (AgentScopeRuntimeResponseBuilder.maybeToolOutput(message)) {
        const content = message.content[0] as IDataContent<{
          name: string;
          call_id?: string;
        }>;
        const key = content.data.call_id || content.data.name;
        const bufferContent = bufferMessagesMap.get(key);

        if (bufferContent) {

          resMessages = resMessages.map(i => {
            if (!AgentScopeRuntimeResponseBuilder.maybeToolInput(i)) return i;
            const preContent = i.content[0] as IDataContent<{
              name: string;
              call_id?: string;
            }>;

            const preKey = preContent.data.call_id || preContent.data.name;

            if (preKey === key) {
              return { ...message, content: [...i.content, content] };
            } else {
              return i;
            }
          });
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
      AgentScopeRuntimeMessageType.COMPONENT_CALL_OUTPUT,
      AgentScopeRuntimeMessageType.MCP_CALL_OUTPUT,
    ].includes(message.type);
  }

  static maybeToolInput(message: IAgentScopeRuntimeMessage) {
    return [
      AgentScopeRuntimeMessageType.FUNCTION_CALL,
      AgentScopeRuntimeMessageType.PLUGIN_CALL,
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

  constructor({ id, status, created_at }: Pick<IAgentScopeRuntimeResponse, 'id' | 'status' | 'created_at'>) {
    this.data = {
      id: id,
      output: [],
      object: 'response',
      status: status || AgentScopeRuntimeRunStatus.Created,
      created_at: created_at || Date.now(),
    };
  }

  handleResponse(data: IAgentScopeRuntimeResponse) {
    this.data = produce(this.data, (draft) => {
      if (!data.output) {
        data.output = [];
      }
      Object.assign(draft, data);
    });
  }

  handleMessage(data: IAgentScopeRuntimeMessage) {
    this.data = produce(this.data, (draft) => {

      if (!draft.output) {
        draft.output = [];
      }

      const existingIndex = draft.output.findIndex(msg => msg.id === data.id);

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
      const msg = draft.output.find(m => m.id === data.msg_id);

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
          if (data.type === AgentScopeRuntimeContentType.TEXT && lastContent.type === AgentScopeRuntimeContentType.TEXT) {
            (lastContent as ITextContent).text += (data as ITextContent).text;
          } else if (data.type === AgentScopeRuntimeContentType.IMAGE) {
            (lastContent as IImageContent).image_url = (data as IImageContent).image_url;
          } else if (data.type === AgentScopeRuntimeContentType.DATA) {

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
        message: typeof data.message === 'string' ? data.message : JSON.stringify(data.message),
      })
    });
  }

  handle(data: IAgentScopeRuntimeResponse | IAgentScopeRuntimeMessage | IContent) {
    if (data.object === 'response') {
      this.handleResponse(data);
    } else if (data.object === 'message') {
      this.handleMessage(data);
    } else if (data.object === 'content') {
      this.handleContent(data);
    } else {
      this.handleError(data);
    }

    return this.data;
  }

  cancel() {
    this.data = produce(this.data, (draft) => {
      if (AgentScopeRuntimeResponseBuilder.maybeGenerating(draft)) {
        draft.status = AgentScopeRuntimeRunStatus.Canceled;
      }
      draft.output.forEach(msg => {
        if (AgentScopeRuntimeResponseBuilder.maybeGenerating(msg)) {
          msg.status = AgentScopeRuntimeRunStatus.Canceled;
          msg.content.forEach(content => {
            if (AgentScopeRuntimeResponseBuilder.maybeGenerating(content)) {
              content.status = AgentScopeRuntimeRunStatus.Canceled;
            }
          });
        }
      });
    });

    return this.data;
  }

}



export default AgentScopeRuntimeResponseBuilder;