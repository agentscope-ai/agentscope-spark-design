import { useGetState } from 'ahooks';
import { Children, useCallback, useRef, type ReactNode } from 'react';
import Disclaimer from '../../../../Disclaimer';
import { useProviderContext } from '../../../../Provider';
import ChatInput from '../../../../Sender';
import { useChatAnywhereInput } from '../../Context/ChatAnywhereInputContext';
import { useChatAnywhereOptions } from '../../Context/ChatAnywhereOptionsContext';
import type { IAgentScopeRuntimeWebUIInputData } from '../../types';
import type { QueueEnqueueResult, QueuedInputItem } from '../InputQueue';
import {
  getInputSubmissionCleanup,
  hasSubmittableAttachments,
  hasUploadingAttachments,
  hasUploadingInputAttachments,
  isSubmittableAttachment,
  submitInputWithAcceptance,
  type InputSubmissionSnapshot,
} from './submission';
import useAttachments, { type AttachmentUploadFile } from './useAttachments';
import useLongTextUpload from './useLongTextUpload';
import useMentions from './useMentions';

export interface InputProps {
  onCancel: () => void;
  onSubmit: (
    data: IAgentScopeRuntimeWebUIInputData,
    options?: {
      /** Called when the backend accepts the request, before its stream ends. */
      onAccepted?: () => void;
    },
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
  const [content, setContentState, getContent] = useGetState('');
  const contentRevisionRef = useRef(0);
  const setContent = useCallback(
    (nextContent: string) => {
      contentRevisionRef.current += 1;
      setContentState(nextContent);
    },
    [setContentState],
  );
  const prefixCls = useProviderContext().getPrefixCls('chat-anywhere-input');
  const senderOptions = useChatAnywhereOptions((v) => v.sender);
  const loading = useChatAnywhereInput((value) => value.loading);
  const disabled = useChatAnywhereInput((value) => value.disabled);
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
    !!disabled,
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
    disabled: !!disabled || longTextUploadController.uploading,
  });
  uploadFileRef.current = uploadFile;
  const mentionControllerRef = useRef(mentionController);
  mentionControllerRef.current = mentionController;
  const attachmentsUploading = hasUploadingAttachments(fileList);

  const getSubmittableData = useCallback<
    () => IAgentScopeRuntimeWebUIInputData | undefined
  >(() => {
    const fileList = getFileList().filter(isSubmittableAttachment);
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

  const clearSubmittedInput = useCallback(
    (snapshot: InputSubmissionSnapshot) => {
      const cleanup = getInputSubmissionCleanup(snapshot, {
        contentRevision: contentRevisionRef.current,
        mentionsRevision: mentionControllerRef.current.getRevision(),
        fileList: getFileList(),
      });
      if (cleanup.clearContent) {
        longTextUploadController.resetPromptState();
        setContent('');
        mentionControllerRef.current.clear();
      }
      setFileList(cleanup.fileList);
    },
    [getFileList, longTextUploadController, setContent, setFileList],
  );

  const prepareSubmissionData = useCallback(async () => {
    if (
      disabled ||
      longTextUploadController.isUploading() ||
      hasUploadingAttachments(getFileList())
    )
      return;

    const data = getSubmittableData();
    if (!data) return;

    const snapshot: InputSubmissionSnapshot = {
      contentRevision: contentRevisionRef.current,
      mentionsRevision: mentionControllerRef.current.getRevision(),
      attachmentUids: (data.fileList || []).map((file) => file.uid),
    };
    const beforeSubmitResult = await beforeSubmit(data);
    const normalizedResult =
      typeof beforeSubmitResult === 'boolean'
        ? { proceed: beforeSubmitResult }
        : beforeSubmitResult;

    // A beforeSubmit hook may transform the outgoing attachment payload.
    if (normalizedResult.proceed && hasUploadingInputAttachments(data)) return;
    if (normalizedResult.clear) clearSubmittedInput(snapshot);
    if (!normalizedResult.proceed) return;

    return {
      snapshot,
      data: {
        ...data,
        query: normalizedResult.query ?? data.query,
        text: normalizedResult.query ?? data.text,
        session_id: normalizedResult.session_id ?? data.session_id,
        context: normalizedResult.context ?? data.context,
        biz_params: normalizedResult.biz_params ?? data.biz_params,
      },
    };
  }, [
    beforeSubmit,
    clearSubmittedInput,
    disabled,
    getFileList,
    getSubmittableData,
    longTextUploadController,
  ]);

  const handleEnqueue = useCallback(async () => {
    const submission = await prepareSubmissionData();
    if (!submission || !props.queue) return;

    const result = await props.queue.onEnqueue(submission.data);
    if (result.ok) clearSubmittedInput(submission.snapshot);
  }, [clearSubmittedInput, prepareSubmissionData, props.queue]);

  const handleSubmit = useCallback(async () => {
    const submission = await prepareSubmissionData();
    if (!submission) return;
    const { data, snapshot } = submission;

    if (
      props.queue &&
      (loading || props.queue.items.length || props.queue.isOwner === false)
    ) {
      const result = await props.queue.onEnqueue(data);
      if (result.ok) clearSubmittedInput(snapshot);
    } else {
      try {
        await submitInputWithAcceptance(
          (onAccepted) => props.onSubmit(data, { onAccepted }),
          () => clearSubmittedInput(snapshot),
        );
      } catch (error) {
        console.error('chat submission failed:', error);
      }
    }
  }, [
    clearSubmittedInput,
    loading,
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
      if (!forceEnqueue && !loading && !props.queue?.items.length) return;

      const data = getSubmittableData();
      if (!data) return;

      event.preventDefault();
      event.stopPropagation();
      void (forceEnqueue ? handleEnqueue() : handleSubmit());
    },
    [
      handleEnqueue,
      handleSubmit,
      loading,
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
            loading={loading}
            disabled={disabled || longTextUploadController.uploading}
            sendDisabled={attachmentsUploading}
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
