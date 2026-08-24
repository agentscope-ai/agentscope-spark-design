import {
  ChatInput,
  Disclaimer,
  IAgentScopeRuntimeWebUIInputData,
  useProviderContext,
} from '@agentscope-ai/chat';
import { useGetState } from 'ahooks';
import { Children, useCallback, useRef } from 'react';
import { useChatAnywhereInput } from '../../Context/ChatAnywhereInputContext';
import { useChatAnywhereOptions } from '../../Context/ChatAnywhereOptionsContext';
import useAttachments, { type AttachmentUploadFile } from './useAttachments';
import useLongTextUpload from './useLongTextUpload';
import useMentions from './useMentions';

export interface InputProps {
  onCancel: () => void;
  onSubmit: (data: IAgentScopeRuntimeWebUIInputData) => void;
}

export default function Input(props: InputProps) {
  const [content, setContent, getContent] = useGetState('');
  const prefixCls = useProviderContext().getPrefixCls('chat-anywhere-input');
  const senderOptions = useChatAnywhereOptions((v) => v.sender);
  const inputContext = useChatAnywhereInput((v) => v);
  const uploadFileRef = useRef<AttachmentUploadFile | null>(null);

  const {
    placeholder = '',
    disclaimer = '',
    maxLength,
    showCharacterCount,
    characterCountRender,
    actionAffix,
    beforeSubmit = () => Promise.resolve(true),
    beforeUI,
    afterUI,
    attachments,
    prefix,
    allowSpeech,
    suggestions,
    mentions,
    components,
    longTextUpload,
  } = senderOptions || {};

  const mentionController = useMentions(
    mentions,
    content,
    setContent,
    !!inputContext.disabled,
  );

  const uploadLongTextFile = useCallback<AttachmentUploadFile>(
    (fileToUpload, uploadOptions) => {
      if (!uploadFileRef.current) {
        return Promise.reject(new Error('Upload request is not available.'));
      }

      return uploadFileRef.current(fileToUpload, uploadOptions);
    },
    [],
  );

  const longTextUploadController = useLongTextUpload({
    options: longTextUpload,
    fallbackCustomRequest: attachments?.customRequest,
    maxLength,
    getContent,
    setContent,
    clearMentions: mentionController.clear,
    uploadFile: uploadLongTextFile,
    onContentChange: mentionController.handleValueChange,
  });

  const {
    getFileList,
    setFileList,
    uploadFile,
    handlePasteFile,
    handleDropFile,
    uploadIconButton,
    uploadFileListHeader,
  } = useAttachments(attachments, {
    disabled: !!inputContext.disabled || longTextUploadController.uploading,
  });
  uploadFileRef.current = uploadFile;

  const handleSubmit = useCallback(async () => {
    if (longTextUploadController.isUploading()) return;

    const fileList = (getFileList?.() || []).filter((i) => i.response?.url);
    const inputData: IAgentScopeRuntimeWebUIInputData = {
      query: mentionController.getQuery(getContent()),
      fileList,
      mentions: mentionController.mentions.map(({ value, type }) => ({
        value,
        type,
      })),
    };
    const beforeSubmitResult = await beforeSubmit(inputData);
    const normalizedResult =
      typeof beforeSubmitResult === 'boolean'
        ? { proceed: beforeSubmitResult }
        : beforeSubmitResult;

    if (normalizedResult.clear) {
      longTextUploadController.resetPromptState();
      setContent('');
      setFileList?.([]);
      mentionController.clear();
    }
    if (!normalizedResult.proceed) return;

    props.onSubmit({
      ...inputData,
      query: normalizedResult.query ?? inputData.query,
    });
    longTextUploadController.resetPromptState();
    setContent('');
    setFileList?.([]);
    mentionController.clear();
  }, [
    beforeSubmit,
    getContent,
    getFileList,
    longTextUploadController,
    mentionController,
    props,
    setContent,
    setFileList,
  ]);

  const handleCancel = useCallback(() => {
    props.onCancel();
  }, []);

  return (
    <div className={prefixCls}>
      <div className={`${prefixCls}-wrapper`}>
        {beforeUI}
        {mentionController.wrapInput(
          <ChatInput
            loading={inputContext.loading}
            disabled={
              inputContext.disabled || longTextUploadController.uploading
            }
            placeholder={placeholder}
            value={content}
            prefix={Children.toArray([uploadIconButton, prefix])}
            header={Children.toArray([
              uploadFileListHeader,
              mentionController.header,
            ])}
            onChange={longTextUploadController.handleContentChange}
            onKeyDown={mentionController.handleKeyDown}
            onSelectionChange={mentionController.handleSelectionChange}
            onBlur={mentionController.close}
            submitType={mentionController.open ? false : 'enter'}
            allowEmptySubmit={mentionController.mentions.length > 0}
            maxLength={maxLength}
            truncateOnMaxLength={!longTextUploadController.enabled}
            showCharacterCount={showCharacterCount}
            characterCountRender={characterCountRender}
            actionAffix={actionAffix}
            onSubmit={handleSubmit}
            onCancel={handleCancel}
            allowSpeech={allowSpeech}
            onPaste={longTextUploadController.handlePaste}
            onPasteFile={handlePasteFile}
            onDropFile={handleDropFile}
            suggestions={suggestions}
            components={components}
          />,
        )}
        {afterUI}
      </div>
      {disclaimer ? (
        <Disclaimer desc={disclaimer} />
      ) : (
        <div className={`${prefixCls}-blank`}></div>
      )}
    </div>
  );
}
