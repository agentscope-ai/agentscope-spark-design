import { IAgentScopeRuntimeWebUIInputData } from "@agentscope-ai/chat";
import { IAgentScopeRuntimeWebUIMessage } from "@agentscope-ai/chat";
import { AgentScopeRuntimeContentType, AgentScopeRuntimeMessageType, AgentScopeRuntimeRunStatus, IAgentScopeRuntimeRequest, IContent, IFileContent, IImageContent, ITextContent } from "../types";

class AgentScopeRuntimeRequestBuilder {
  data: IAgentScopeRuntimeRequest;


  static getHistoryMessages(messages: IAgentScopeRuntimeWebUIMessage[]) {
    return messages.reduce((p, c) => {
      if (!c.cards?.length) {
        return p;
      } else {
        return p.concat(c.cards[0].data.input || c.cards[0].data.output)
      }
    }, [])
  }


  isImageFile(file: IAgentScopeRuntimeWebUIInputData['fileList'][number]) {
    return file.type.indexOf('image/') === 0;
  }


  buildImageContent(imageFile: IAgentScopeRuntimeWebUIInputData['fileList'][number]): IImageContent {
    return {
      type: AgentScopeRuntimeContentType.IMAGE,
      image_url: imageFile.response?.url,
      status: AgentScopeRuntimeRunStatus.Created,
    }
  }

  buildTextContent(text: string): ITextContent {
    return {
      type: AgentScopeRuntimeContentType.TEXT,
      text: text,
      status: AgentScopeRuntimeRunStatus.Created,
    }
  }

  buildFileContent(file: IAgentScopeRuntimeWebUIInputData['fileList'][number]): IFileContent {
    return {
      type: AgentScopeRuntimeContentType.FILE,
      file_url: file.response?.url,
      file_name: file.name,
      file_size: file.size,
      status: AgentScopeRuntimeRunStatus.Created,
    }
  }



  constructor(data: IAgentScopeRuntimeWebUIInputData) {
    const content: IContent[] = [
      this.buildTextContent(data.query),
    ];

    if (data.fileList?.length) {
      data.fileList.forEach(item => {
        if (this.isImageFile(item)) {
          content.push(this.buildImageContent(item));
        } else {
          content.push(this.buildFileContent(item));
        }
      });
    }

    this.data = {
      input: [
        {
          role: 'user',
          type: AgentScopeRuntimeMessageType.MESSAGE,
          content: content,
        }
      ],
    };

  }
}


export default AgentScopeRuntimeRequestBuilder;