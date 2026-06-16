import { useCallback } from "react";
import { useProviderContext, ChatInput, Disclaimer } from '@agentscope-ai/chat';
import { useChatAnywhereOptions } from "../../Context/ChatAnywhereOptionsContext";
import { useGetState } from 'ahooks';
import { useChatAnywhereInput } from "../../Context/ChatAnywhereInputContext";
import useAttachments from "./useAttachments";
import { IAgentScopeRuntimeWebUIInputData } from "@agentscope-ai/chat";
import InputQueuePanel from "../InputQueue/Panel";
import type { QueuedInputItem } from "../InputQueue";

export interface InputProps {
  onCancel: () => void;
  onSubmit: (data: IAgentScopeRuntimeWebUIInputData) => void;
  queue?: {
    items: QueuedInputItem[];
    onEnqueue: (data: IAgentScopeRuntimeWebUIInputData) => void;
    onRemove: (id: string) => void;
    onClear: () => void;
    onRetry: (id: string) => void;
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


  const handleSubmit = useCallback(async () => {
    const next = await beforeSubmit();
    if (!next) return;

    const fileList = (getFileList?.() || []).filter(i => i.response?.url);
    const data = { query: getContent(), fileList };
    if (inputContext.loading || props.queue?.items.length) {
      props.queue?.onEnqueue(data);
    } else {
      props.onSubmit(data);
    }
    setContent('');
    setFileList?.([]);
  }, [beforeSubmit, getContent, getFileList, inputContext.loading, props.onSubmit, props.queue, setContent, setFileList]);

  const handleKeyDownCapture = useCallback((event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key !== 'Enter' || event.shiftKey) return;
    if (event.nativeEvent?.isComposing) return;
    if (!inputContext.loading && !props.queue?.items.length) return;

    const fileList = (getFileList?.() || []).filter(i => i.response?.url);
    if (!getContent().trim() && fileList.length === 0) return;

    event.preventDefault();
    event.stopPropagation();
    void handleSubmit();
  }, [getContent, getFileList, handleSubmit, inputContext.loading, props.queue?.items.length]);

  const handleCancel = useCallback(() => {
    props.onCancel();
  }, []);

  return <div className={prefixCls} onKeyDownCapture={handleKeyDownCapture}>
    <div className={`${prefixCls}-wrapper`}>
      {beforeUI}
      {props.queue?.items.length ? <InputQueuePanel
        items={props.queue.items}
        onRemove={props.queue.onRemove}
        onClear={props.queue.onClear}
        onRetry={props.queue.onRetry}
      /> : null}
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
