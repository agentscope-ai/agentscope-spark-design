import type {
  IAgentScopeRuntimeWebUILongTextUploadOptions,
  IAgentScopeRuntimeWebUISenderAttachmentsOptions,
} from '@agentscope-ai/chat';
import type { ChangeEvent, ClipboardEvent, ClipboardEventHandler } from 'react';
import { useCallback, useEffect, useRef, useState } from 'react';
import type { AttachmentUploadFile } from './useAttachments';

const DEFAULT_LONG_TEXT_UPLOAD_PROMPT =
  'please read the file as prompt then answer it';
const LONG_TEXT_FILE_TYPE = 'text/plain;charset=utf-8';

function getPastedValue(
  event: ClipboardEvent<HTMLElement>,
  currentValue: string,
) {
  const pastedText = event.clipboardData?.getData('text');
  if (!pastedText) return undefined;

  const target = event.target as HTMLTextAreaElement | null;
  const sourceValue = target?.value ?? currentValue;
  const selectionStart = target?.selectionStart ?? sourceValue.length;
  const selectionEnd = target?.selectionEnd ?? selectionStart;

  return `${sourceValue.slice(
    0,
    selectionStart,
  )}${pastedText}${sourceValue.slice(selectionEnd)}`;
}

function getLongTextFileName(fileName?: string) {
  const resolvedFileName = fileName?.trim() || `prompt-${Date.now()}.txt`;
  return resolvedFileName.toLowerCase().endsWith('.txt')
    ? resolvedFileName
    : `${resolvedFileName}.txt`;
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

interface UseLongTextUploadParams {
  options?: false | IAgentScopeRuntimeWebUILongTextUploadOptions;
  fallbackCustomRequest?: IAgentScopeRuntimeWebUISenderAttachmentsOptions['customRequest'];
  maxLength?: number;
  getContent: () => string;
  setContent: (content: string) => void;
  clearMentions: () => void;
  uploadFile: AttachmentUploadFile;
  onContentChange: (
    content: string,
    event?: ChangeEvent<HTMLTextAreaElement>,
  ) => void;
}

export default function useLongTextUpload({
  options,
  fallbackCustomRequest,
  maxLength,
  getContent,
  setContent,
  clearMentions,
  uploadFile,
  onContentChange,
}: UseLongTextUploadParams) {
  const [uploading, setUploading] = useState(false);
  const uploadingRef = useRef(false);
  const promptActiveRef = useRef(false);
  const promptContentRef = useRef('');
  const config = options || undefined;
  const uploadRequest = config?.customRequest || fallbackCustomRequest;
  const enabled = !!(
    config &&
    config.enabled !== false &&
    uploadRequest &&
    maxLength &&
    maxLength > 0
  );

  const resetPromptState = useCallback(() => {
    promptActiveRef.current = false;
    promptContentRef.current = '';
  }, []);

  const setPromptContent = useCallback(
    (promptContent: string) => {
      promptActiveRef.current = true;
      promptContentRef.current = promptContent;
      clearMentions();
      setContent(promptContent);
    },
    [clearMentions, setContent],
  );

  useEffect(() => {
    if (!promptActiveRef.current || !config) return;

    const currentContent = getContent();
    if (currentContent !== promptContentRef.current) {
      promptActiveRef.current = false;
      return;
    }

    const nextPromptContent = resolveLongTextUploadPrompt(config.prompt);
    if (nextPromptContent !== currentContent) {
      setPromptContent(nextPromptContent);
    }
  }, [config, getContent, setPromptContent]);

  const handleLongTextUpload = useCallback(
    async (text: string) => {
      if (!enabled || !config || !uploadRequest || uploadingRef.current) {
        return false;
      }

      uploadingRef.current = true;
      setUploading(true);
      setPromptContent(resolveLongTextUploadPrompt(config.prompt));

      try {
        const fileName = getLongTextFileName(config.fileName);
        const file = createLongTextFile(text, fileName);
        await uploadFile(file, {
          customRequest: uploadRequest,
          fileName,
          fileType: LONG_TEXT_FILE_TYPE,
        });
        return true;
      } catch (error) {
        console.error('long text upload rejected:', error);
        return false;
      } finally {
        uploadingRef.current = false;
        setUploading(false);
      }
    },
    [config, enabled, setPromptContent, uploadFile, uploadRequest],
  );

  const handleContentChange = useCallback(
    (nextContent: string, event?: ChangeEvent<HTMLTextAreaElement>) => {
      if (enabled && maxLength && nextContent.length > maxLength) {
        void handleLongTextUpload(nextContent);
        return;
      }

      if (promptActiveRef.current && nextContent !== promptContentRef.current) {
        promptActiveRef.current = false;
      }

      onContentChange(nextContent, event);
    },
    [enabled, handleLongTextUpload, maxLength, onContentChange],
  );

  const handlePaste = useCallback<ClipboardEventHandler<HTMLElement>>(
    (event) => {
      if (!enabled || !maxLength) return;

      const nextContent = getPastedValue(event, getContent());
      if (!nextContent || nextContent.length <= maxLength) return;

      event.preventDefault();
      void handleLongTextUpload(nextContent);
    },
    [enabled, getContent, handleLongTextUpload, maxLength],
  );

  const isUploading = useCallback(() => uploadingRef.current, []);

  return {
    enabled,
    handleContentChange,
    handlePaste,
    isUploading,
    resetPromptState,
    uploading,
  };
}
