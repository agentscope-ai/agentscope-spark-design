import { IAgentScopeRuntimeWebUIInputData } from "@agentscope-ai/chat";
import { IAgentScopeRuntimeWebUIMessage } from "@agentscope-ai/chat";
import { AgentScopeRuntimeContentType, AgentScopeRuntimeMessageType, AgentScopeRuntimeRunStatus, IAudioContent, IAgentScopeRuntimeRequest, IContent, IFileContent, IImageContent, ITextContent, IVideoContent } from "../types";

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

  isVideoFile(file: IAgentScopeRuntimeWebUIInputData['fileList'][number]) {
    return file.type.indexOf('video/') === 0;
  }

  isAudioFile(file: IAgentScopeRuntimeWebUIInputData['fileList'][number]) {
    return file.type.indexOf('audio/') === 0;
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

  buildVideoContent(videoFile: IAgentScopeRuntimeWebUIInputData['fileList'][number]): IVideoContent {
    return {
      type: AgentScopeRuntimeContentType.VIDEO,
      video_url: videoFile.response?.url,
      status: AgentScopeRuntimeRunStatus.Created,
    }
  }

  buildAudioContent(audioFile: IAgentScopeRuntimeWebUIInputData['fileList'][number]): IAudioContent {
    return {
      type: AgentScopeRuntimeContentType.AUDIO,
      audio_url: audioFile.response?.url,
      data: audioFile.response?.url,
      format: audioFile.type?.replace('audio/', ''),
      status: AgentScopeRuntimeRunStatus.Created,
    }
  }

  buildFileContent(file: IAgentScopeRuntimeWebUIInputData['fileList'][number]): IFileContent {
    return {
      type: AgentScopeRuntimeContentType.FILE,
      file_url: file.response?.url,
      file_id: file.file_id,
      file_name: file.name,
      file_size: file.size,
      status: AgentScopeRuntimeRunStatus.Created,
    }
  }



  constructor() { }

  handle(data: IAgentScopeRuntimeWebUIInputData) {
    this.data = { input: [] };

    const content: IContent[] = [
      this.buildTextContent(data.query),
    ];

    if (data.fileList?.length) {
      data.fileList.forEach(item => {
        if (this.isImageFile(item)) {
          content.push(this.buildImageContent(item));
        } else if (this.isVideoFile(item)) {
          content.push(this.buildVideoContent(item));
        } else if (this.isAudioFile(item)) {
          content.push(this.buildAudioContent(item));
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
    return this.data
  }

  handleApproval(input) {
    this.data = { input };
    return this.data;
  }
}


export default AgentScopeRuntimeRequestBuilder;