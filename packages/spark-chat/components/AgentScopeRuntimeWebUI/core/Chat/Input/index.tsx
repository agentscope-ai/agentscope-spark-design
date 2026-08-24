import {
  ChatInput,
  Disclaimer,
  IAgentScopeRuntimeWebUIInputData,
  IAgentScopeRuntimeWebUILongTextUploadOptions,
  useProviderContext,
} from '@agentscope-ai/chat';
import { useGetState } from 'ahooks';
import { Children, useCallback, useEffect, useRef, useState } from 'react';
import type { ChangeEvent, ClipboardEvent, ClipboardEventHandler } from 'react';
import { useChatAnywhereInput } from '../../Context/ChatAnywhereInputContext';
import { useChatAnywhereOptions } from '../../Context/ChatAnywhereOptionsContext';
import useAttachments from './useAttachments';
import useMentions from './useMentions';

const DEFAULT_LONG_TEXT_UPLOAD_PROMPT = 'please read the file as prompt then answer it';
const LONG_TEXT_FILE_TYPE = 'text/plain;charset=utf-8';

function getPastedValue(event: ClipboardEvent<HTMLElement>, currentValue: string) {
  const pastedText = event.clipboardData?.getData('text');
  if (!pastedText) return undefined;

  const target = event.target as HTMLTextAreaElement | null;
  const sourceValue = target?.value ?? currentValue;
  const selectionStart = target?.selectionStart ?? sourceValue.length;
  const selectionEnd = target?.selectionEnd ?? selectionStart;

  return `${sourceValue.slice(0, selectionStart)}${pastedText}${sourceValue.slice(selectionEnd)}`;
}

function getLongTextFileName(fileName?: string) {
  const resolvedFileName = fileName?.trim() || `prompt-${Date.now()}.txt`;
  return resolvedFileName.toLowerCase().endsWith('.txt') ? resolvedFileName : `${resolvedFileName}.txt`;
}

function createLongTextFile(text: string, fileName: string) {
  if (typeof File === 'function') {
    return new File([text], fileName, { type: LONG_TEXT_FILE_TYPE });
  }

  return Object.assign(new Blob([text], { type: LONG_TEXT_FILE_TYPE }), {
    name: fileName,
    lastModified: Date.now(),
  }) as File;
}

function resolveLongTextUploadPrompt(
  prompt: IAgentScopeRuntimeWebUILongTextUploadOptions['prompt'],
) {
  if (typeof prompt === 'function') {
    return prompt() || DEFAULT_LONG_TEXT_UPLOAD_PROMPT;
  }

  return prompt || DEFAULT_LONG_TEXT_UPLOAD_PROMPT;
}

export interface InputProps {
  onCancel: () => void;
  onSubmit: (data: IAgentScopeRuntimeWebUIInputData) => void;
}

export default function Input(props: InputProps) {
  const [content, setContent, getContent] = useGetState('');
  const [longTextUploading, setLongTextUploading] = useState(false);
  const longTextUploadingRef = useRef(false);
  const longTextPromptActiveRef = useRef(false);
  const longTextPromptContentRef = useRef('');
  const prefixCls = useProviderContext().getPrefixCls('chat-anywhere-input');
  const senderOptions = useChatAnywhereOptions((v) => v.sender);
  const inputContext = useChatAnywhereInput((v) => v);

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
  const longTextUploadConfig = longTextUpload || undefined;
  const longTextUploadRequest = longTextUploadConfig?.customRequest || attachments?.customRequest;
  const longTextUploadEnabled = !!(
    longTextUploadConfig &&
    longTextUploadConfig.enabled !== false &&
    longTextUploadRequest &&
    maxLength &&
    maxLength > 0
  );

  const {
    getFileList,
    setFileList,
    uploadFile,
    handlePasteFile,
    handleDropFile,
    uploadIconButton,
    uploadFileListHeader,
  } = useAttachments(attachments, { disabled: !!inputContext.disabled || longTextUploading });

  const mentionController = useMentions(
    mentions,
    content,
    setContent,
    !!inputContext.disabled,
  );

  const setLongTextPromptContent = useCallback((promptContent: string) => {
    longTextPromptActiveRef.current = true;
    longTextPromptContentRef.current = promptContent;
    mentionController.clear();
    setContent(promptContent);
  }, [mentionController, setContent]);

  useEffect(() => {
    if (!longTextPromptActiveRef.current || !longTextUploadConfig) return;

    const currentContent = getContent();
    if (currentContent !== longTextPromptContentRef.current) {
      longTextPromptActiveRef.current = false;
      return;
    }

    const nextPromptContent = resolveLongTextUploadPrompt(longTextUploadConfig.prompt);
    if (nextPromptContent !== currentContent) {
      setLongTextPromptContent(nextPromptContent);
    }
  }, [getContent, longTextUploadConfig, setLongTextPromptContent]);

  const handleLongTextUpload = useCallback(async (text: string) => {
    if (
      !longTextUploadEnabled ||
      !longTextUploadConfig ||
      !longTextUploadRequest ||
      longTextUploadingRef.current
    ) {
      return false;
    }

    longTextUploadingRef.current = true;
    setLongTextUploading(true);
    setLongTextPromptContent(resolveLongTextUploadPrompt(longTextUploadConfig.prompt));

    try {
      const fileName = getLongTextFileName(longTextUploadConfig.fileName);
      const file = createLongTextFile(text, fileName);
      await uploadFile(file, {
        customRequest: longTextUploadRequest,
        fileName,
        fileType: LONG_TEXT_FILE_TYPE,
      });
      return true;
    } catch (error) {
      console.error('long text upload rejected:', error);
      return false;
    } finally {
      longTextUploadingRef.current = false;
      setLongTextUploading(false);
    }
  }, [
    longTextUploadConfig,
    longTextUploadEnabled,
    longTextUploadRequest,
    setLongTextPromptContent,
    uploadFile,
  ]);

  const handleContentChange = useCallback((
    nextContent: string,
    event?: ChangeEvent<HTMLTextAreaElement>,
  ) => {
    if (
      longTextUploadEnabled &&
      maxLength &&
      nextContent.length > maxLength
    ) {
      void handleLongTextUpload(nextContent);
      return;
    }

    if (longTextPromptActiveRef.current && nextContent !== longTextPromptContentRef.current) {
      longTextPromptActiveRef.current = false;
    }

    mentionController.handleValueChange(nextContent, event);
  }, [handleLongTextUpload, longTextUploadEnabled, maxLength, mentionController]);

  const handlePaste = useCallback<ClipboardEventHandler<HTMLElement>>((event) => {
    if (!longTextUploadEnabled || !maxLength) return;

    const nextContent = getPastedValue(event, getContent());
    if (!nextContent || nextContent.length <= maxLength) return;

    event.preventDefault();
    void handleLongTextUpload(nextContent);
  }, [getContent, handleLongTextUpload, longTextUploadEnabled, maxLength]);

  const handleSubmit = useCallback(async () => {
    if (longTextUploadingRef.current) return;

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
      longTextPromptActiveRef.current = false;
      longTextPromptContentRef.current = '';
      setContent('');
      setFileList?.([]);
      mentionController.clear();
    }
    if (!normalizedResult.proceed) return;

    props.onSubmit({
      ...inputData,
      query: normalizedResult.query ?? inputData.query,
    });
    longTextPromptActiveRef.current = false;
    longTextPromptContentRef.current = '';
    setContent('');
    setFileList?.([]);
    mentionController.clear();
  }, [
    beforeSubmit,
    getContent,
    getFileList,
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
            disabled={inputContext.disabled || longTextUploading}
            placeholder={placeholder}
            value={content}
            prefix={Children.toArray([uploadIconButton, prefix])}
            header={Children.toArray([
              uploadFileListHeader,
              mentionController.header,
            ])}
            onChange={handleContentChange}
            onKeyDown={mentionController.handleKeyDown}
            onSelectionChange={mentionController.handleSelectionChange}
            onBlur={mentionController.close}
            submitType={mentionController.open ? false : 'enter'}
            allowEmptySubmit={mentionController.mentions.length > 0}
            maxLength={maxLength}
            truncateOnMaxLength={!longTextUploadEnabled}
            showCharacterCount={showCharacterCount}
            characterCountRender={characterCountRender}
            actionAffix={actionAffix}
            onSubmit={handleSubmit}
            onCancel={handleCancel}
            allowSpeech={allowSpeech}
            onPaste={handlePaste}
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
