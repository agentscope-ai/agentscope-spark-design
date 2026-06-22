import { useCallback, type ReactNode } from "react";
import { useProviderContext, ChatInput, Disclaimer } from '@agentscope-ai/chat';
import { useChatAnywhereOptions } from "../../Context/ChatAnywhereOptionsContext";
import { useGetState } from 'ahooks';
import { useChatAnywhereInput } from "../../Context/ChatAnywhereInputContext";
import useAttachments from "./useAttachments";
import { IAgentScopeRuntimeWebUIInputData } from "@agentscope-ai/chat";
import type { QueueEnqueueResult, QueuedInputItem } from "../InputQueue";

export interface InputProps {
  onCancel: () => void;
  onSubmit: (data: IAgentScopeRuntimeWebUIInputData) => void;
  queue?: {
    items: QueuedInputItem[];
    isOwner: boolean;
    panel?: ReactNode;
    onEnqueue: (data: IAgentScopeRuntimeWebUIInputData) => QueueEnqueueResult | Promise<QueueEnqueueResult>;
  };
}

export default function Input(props: InputProps) {
  const [content, setContent, getContent] = useGetState('');
  const prefixCls = useProviderContext().getPrefixCls('chat-anywhere-input');
  const senderOptions = useChatAnywhereOptions(v => v.sender);
  const inputContext = useChatAnywhereInput(v => v);

  const {
    placeholder = '',
    disclaimer = '',
    maxLength,
    beforeSubmit = () => Promise.resolve(true),
    beforeUI,
    afterUI,
    attachments,
    prefix,
    allowSpeech,
    suggestions,
  } = senderOptions || {};

  const {
    getFileList,
    setFileList,
    handlePasteFile,
    uploadIconButton,
    uploadFileListHeader
  } = useAttachments(attachments, { disabled: !!inputContext.disabled });

  const getSubmittableData = useCallback(() => {
    const fileList = (getFileList?.() || []).filter(i => i.response?.url);
    const query = getContent();
    if (!query.trim() && fileList.length === 0) return;

    return {
      query,
      text: query,
      fileList,
      attachments: fileList,
    };
  }, [getContent, getFileList]);

  const clearInput = useCallback(() => {
    setContent('');
    setFileList?.([]);
  }, [setContent, setFileList]);

  const handleEnqueue = useCallback(async () => {
    const next = await beforeSubmit();
    if (!next) return;

    const data = getSubmittableData();
    if (!data) return;
    if (!props.queue) return;

    const result = await props.queue.onEnqueue(data);
    if (result.ok) {
      clearInput();
    }
  }, [beforeSubmit, clearInput, getSubmittableData, props.queue]);

  const handleSubmit = useCallback(async () => {
    const next = await beforeSubmit();
    if (!next) return;

    const data = getSubmittableData();
    if (!data) return;

    if (props.queue && (
      inputContext.loading ||
      props.queue.items.length ||
      props.queue.isOwner === false
    )) {
      const result = await props.queue.onEnqueue(data);
      if (result.ok) {
        clearInput();
      }
    } else {
      props.onSubmit(data);
      clearInput();
    }
  }, [beforeSubmit, clearInput, getSubmittableData, inputContext.loading, props.onSubmit, props.queue]);

  const handleKeyDownCapture = useCallback((event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key !== 'Enter' || event.shiftKey) return;
    if (event.nativeEvent?.isComposing) return;
    if (!props.queue) return;
    const forceEnqueue = event.ctrlKey || event.metaKey;
    if (!forceEnqueue && !inputContext.loading && !props.queue?.items.length) return;

    const data = getSubmittableData();
    if (!data) return;

    event.preventDefault();
    event.stopPropagation();
    void (forceEnqueue ? handleEnqueue() : handleSubmit());
  }, [getSubmittableData, handleEnqueue, handleSubmit, inputContext.loading, props.queue, props.queue?.items.length]);

  const handleCancel = useCallback(() => {
    props.onCancel();
  }, [props.onCancel]);

  return <div className={prefixCls} onKeyDownCapture={handleKeyDownCapture}>
    <div className={`${prefixCls}-wrapper`}>
      {beforeUI}
      {props.queue?.panel}
      <ChatInput
        loading={inputContext.loading}
        disabled={inputContext.disabled}
        placeholder={placeholder}
        value={content}
        prefix={<>
          {uploadIconButton}
          {prefix}
        </>}
        header={uploadFileListHeader}
        onChange={setContent}
        maxLength={maxLength}
        onSubmit={handleSubmit}
        onCancel={handleCancel}
        allowSubmitWhenLoading={!!props.queue}
        allowSpeech={allowSpeech}
        onPasteFile={handlePasteFile}
        suggestions={suggestions}
      />
      {afterUI}
    </div>
    {
      disclaimer ? <Disclaimer desc={disclaimer} /> : <div className={`${prefixCls}-blank`}></div>
    }
  </div>;
}
