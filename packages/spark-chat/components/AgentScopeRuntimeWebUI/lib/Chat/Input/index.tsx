import React, { useCallback } from "react";
import { useProviderContext, ChatInput, Disclaimer } from '@agentscope-ai/chat';
import { useChatAnywhereOptions } from "../../Context/ChatAnywhereOptionsContext";
import { useGetState } from 'ahooks';
import { useChatAnywhereInput } from "../../Context/ChatAnywhereInputContext";
import useAttachments from "./useAttachments";
import { IAgentScopeRuntimeWebUIInputData } from "@agentscope-ai/chat";

export interface InputProps {
  onCancel: () => void;
  onSubmit: (data: IAgentScopeRuntimeWebUIInputData) => void;
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
    scalable = true,
    attachments
  } = senderOptions || {};

  const {
    getFileList,
    setFileList,
    uploadIconButton,
    uploadFileListHeader
  } = useAttachments(attachments);

  const handleSubmit = useCallback(async () => {
    const next = await beforeSubmit();
    if (!next) return;

    props.onSubmit({ query: getContent(), fileList: getFileList?.() || [] });
    setContent('');
    setFileList([]);

  }, []);

  const handleCancel = useCallback(() => {
    props.onCancel();
  }, []);

  return <div className={prefixCls}>
    <div className={`${prefixCls}-wrapper`}>
      {beforeUI}
      <ChatInput
        loading={inputContext.loading}
        scalable={scalable}
        placeholder={placeholder}
        value={content}
        prefix={<>
          {uploadIconButton}
        </>}
        header={uploadFileListHeader}
        onChange={setContent}
        maxLength={maxLength}
        onSubmit={handleSubmit}
        onCancel={handleCancel}
      />
      {afterUI}
    </div>
    {
      disclaimer ? <Disclaimer desc={disclaimer} /> : <div className={`${prefixCls}-blank`}></div>
    }
  </div>;
}