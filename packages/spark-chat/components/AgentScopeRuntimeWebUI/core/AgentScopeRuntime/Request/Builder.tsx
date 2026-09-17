import type {
  IAgentScopeRuntimeWebUIInputData,
  IAgentScopeRuntimeWebUIMessage,
} from '../../types';
import {
  AgentScopeRuntimeContentType,
  AgentScopeRuntimeMessageType,
  AgentScopeRuntimeRunStatus,
  IAgentScopeRuntimeMessage,
  IAgentScopeRuntimeRequest,
  IAudioContent,
  IContent,
  IFileContent,
  IImageContent,
  ITextContent,
  IVideoContent,
} from '../types';

class AgentScopeRuntimeRequestBuilder {
  data: IAgentScopeRuntimeRequest;

  static getHistoryMessages(messages: IAgentScopeRuntimeWebUIMessage[]) {
    return messages.flatMap((message) =>
      (message.cards || []).flatMap((card) => {
        if (card.code === 'AgentScopeRuntimeRequestCard') {
          return Array.isArray(card.data?.input) ? card.data.input : [];
        }
        if (card.code === 'AgentScopeRuntimeResponseCard') {
          return Array.isArray(card.data?.output) ? card.data.output : [];
        }
        return [];
      }),
    );
  }

  isImageFile(file: IAgentScopeRuntimeWebUIInputData['fileList'][number]) {
    return file.type?.startsWith('image/') || false;
  }

  isVideoFile(file: IAgentScopeRuntimeWebUIInputData['fileList'][number]) {
    return file.type?.startsWith('video/') || false;
  }

  isAudioFile(file: IAgentScopeRuntimeWebUIInputData['fileList'][number]) {
    return file.type?.startsWith('audio/') || false;
  }

  buildImageContent(
    imageFile: IAgentScopeRuntimeWebUIInputData['fileList'][number],
  ): IImageContent {
    return {
      type: AgentScopeRuntimeContentType.IMAGE,
      image_url: imageFile.response?.url,
      status: AgentScopeRuntimeRunStatus.Created,
    };
  }

  buildTextContent(text: string): ITextContent {
    return {
      type: AgentScopeRuntimeContentType.TEXT,
      text: text,
      status: AgentScopeRuntimeRunStatus.Created,
    };
  }

  buildVideoContent(
    videoFile: IAgentScopeRuntimeWebUIInputData['fileList'][number],
  ): IVideoContent {
    return {
      type: AgentScopeRuntimeContentType.VIDEO,
      video_url: videoFile.response?.url,
      status: AgentScopeRuntimeRunStatus.Created,
    };
  }

  buildAudioContent(
    audioFile: IAgentScopeRuntimeWebUIInputData['fileList'][number],
  ): IAudioContent {
    return {
      type: AgentScopeRuntimeContentType.AUDIO,
      audio_url: audioFile.response?.url,
      data: audioFile.response?.url,
      format: audioFile.type?.replace('audio/', ''),
      status: AgentScopeRuntimeRunStatus.Created,
    };
  }

  buildFileContent(
    file: IAgentScopeRuntimeWebUIInputData['fileList'][number],
  ): IFileContent {
    return {
      type: AgentScopeRuntimeContentType.FILE,
      file_url: file.response?.url,
      file_id: file.file_id,
      file_name: file.name,
      file_size: file.size,
      status: AgentScopeRuntimeRunStatus.Created,
    };
  }

  handle(data: IAgentScopeRuntimeWebUIInputData) {
    this.data = { input: [] };

    const content: IContent[] = [this.buildTextContent(data.query)];

    if (data.fileList?.length) {
      data.fileList.forEach((item) => {
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
      // Client-side send timestamp (seconds), aligns with response.created_at.
      // Backend has not yet returned, so this represents the local send moment.
      created_at: Math.floor(Date.now() / 1000),
      input: [
        {
          role: 'user',
          type: AgentScopeRuntimeMessageType.MESSAGE,
          content: content,
        },
      ],
    };
    return this.data;
  }

  handleApproval(input: IAgentScopeRuntimeMessage[]) {
    this.data = {
      created_at: Math.floor(Date.now() / 1000),
      input,
    };
    return this.data;
  }
}

export default AgentScopeRuntimeRequestBuilder;
