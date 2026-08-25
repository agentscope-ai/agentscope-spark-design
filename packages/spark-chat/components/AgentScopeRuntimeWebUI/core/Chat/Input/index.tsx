import {
  ChatInput,
  Disclaimer,
  IAgentScopeRuntimeWebUIInputData,
  useProviderContext,
} from '@agentscope-ai/chat';
import { useGetState } from 'ahooks';
import { Children, useCallback, useRef, type ReactNode } from 'react';
import { useChatAnywhereInput } from '../../Context/ChatAnywhereInputContext';
import { useChatAnywhereOptions } from '../../Context/ChatAnywhereOptionsContext';
import type { QueueEnqueueResult, QueuedInputItem } from '../InputQueue';
import { hasSubmittableAttachments } from './submission';
import useAttachments, { type AttachmentUploadFile } from './useAttachments';
import useLongTextUpload from './useLongTextUpload';
import useMentions from './useMentions';

export interface InputProps {
  onCancel: () => void;
  onSubmit: (
    data: IAgentScopeRuntimeWebUIInputData,
  ) => void | QueueEnqueueResult | Promise<void | QueueEnqueueResult>;
  queue?: {
    items: QueuedInputItem[];
    isOwner: boolean;
    panel?: ReactNode;
    onEnqueue: (
      data: IAgentScopeRuntimeWebUIInputData,
    ) => QueueEnqueueResult | Promise<QueueEnqueueResult>;
  };
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
    fileList,
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

  const getSubmittableData = useCallback<
    () => IAgentScopeRuntimeWebUIInputData | undefined
  >(() => {
    const fileList = (getFileList?.() || []).filter((i) => i.response?.url);
    const query = mentionController.getQuery(getContent());
    if (
      !query.trim() &&
      fileList.length === 0 &&
      mentionController.mentions.length === 0
    )
      return;

    return {
      query,
      text: query,
      fileList,
      attachments: fileList,
      mentions: mentionController.mentions.map(({ value, type }) => ({
        value,
        type,
      })),
    };
  }, [getContent, getFileList, mentionController]);

  const clearInput = useCallback(() => {
    longTextUploadController.resetPromptState();
    setContent('');
    setFileList?.([]);
    mentionController.clear();
  }, [longTextUploadController, mentionController, setContent, setFileList]);

  const prepareSubmissionData = useCallback(async () => {
    if (longTextUploadController.isUploading()) return;

    const data = getSubmittableData();
    if (!data) return;

    const beforeSubmitResult = await beforeSubmit(data);
    const normalizedResult =
      typeof beforeSubmitResult === 'boolean'
        ? { proceed: beforeSubmitResult }
        : beforeSubmitResult;

    if (normalizedResult.clear) clearInput();
    if (!normalizedResult.proceed) return;

    return {
      ...data,
      query: normalizedResult.query ?? data.query,
      text: normalizedResult.query ?? data.text,
      session_id: normalizedResult.session_id ?? data.session_id,
      context: normalizedResult.context ?? data.context,
      biz_params: normalizedResult.biz_params ?? data.biz_params,
    };
  }, [beforeSubmit, clearInput, getSubmittableData, longTextUploadController]);

  const handleEnqueue = useCallback(async () => {
    const data = await prepareSubmissionData();
    if (!data) return;
    if (!props.queue) return;

    const result = await props.queue.onEnqueue(data);
    if (result.ok) {
      clearInput();
    }
  }, [clearInput, prepareSubmissionData, props.queue]);

  const handleSubmit = useCallback(async () => {
    const data = await prepareSubmissionData();
    if (!data) return;

    if (
      props.queue &&
      (inputContext.loading ||
        props.queue.items.length ||
        props.queue.isOwner === false)
    ) {
      const result = await props.queue.onEnqueue(data);
      if (result.ok) {
        clearInput();
      }
    } else {
      const result = await props.onSubmit(data);
      if (result && !result.ok) return;
      clearInput();
    }
  }, [
    clearInput,
    inputContext.loading,
    prepareSubmissionData,
    props.onSubmit,
    props.queue,
  ]);

  const handleKeyDownCapture = useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      if (event.key !== 'Enter' || event.shiftKey) return;
      if (event.nativeEvent?.isComposing) return;
      if (!props.queue) return;
      if (mentionController.open) return;
      const forceEnqueue = event.ctrlKey || event.metaKey;
      if (!forceEnqueue && !inputContext.loading && !props.queue?.items.length)
        return;

      const data = getSubmittableData();
      if (!data) return;

      event.preventDefault();
      event.stopPropagation();
      void (forceEnqueue ? handleEnqueue() : handleSubmit());
    },
    [
      handleEnqueue,
      handleSubmit,
      inputContext.loading,
      mentionController.open,
      props.queue,
      props.queue?.items.length,
    ],
  );

  const handleCancel = useCallback(() => {
    props.onCancel();
  }, [props.onCancel]);

  return (
    <div className={prefixCls} onKeyDownCapture={handleKeyDownCapture}>
      <div className={`${prefixCls}-wrapper`}>
        {beforeUI}
        {props.queue?.panel}
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
            allowEmptySubmit={
              mentionController.mentions.length > 0 ||
              hasSubmittableAttachments(fileList)
            }
            allowSubmitWhenLoading={!!props.queue}
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
