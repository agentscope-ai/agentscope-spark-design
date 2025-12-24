import { IAgentScopeRuntimeWebUISenderAttachmentsOptions } from "@agentscope-ai/chat";
import { Upload } from 'antd';
import { IconButton } from "@agentscope-ai/design";
import { SparkAttachmentLine } from "@agentscope-ai/icons";
import { Sender, Attachments } from '@agentscope-ai/chat';
import { useGetState } from "ahooks";
import React from "react";

export default function useAttachments(
  attachments: IAgentScopeRuntimeWebUISenderAttachmentsOptions,
  options?: {
    disabled?: boolean;
  }
) {
  const [fileList, setFileList, getFileList] = useGetState([]);
  const { trigger, ...rest } = attachments || {};

  if (rest?.customRequest) {
    const uploadIconButton = <Upload
      fileList={fileList}
      showUploadList={false}
      onChange={(info) => {
        setFileList(info.fileList);
      }}
      {...rest}
      disabled={options?.disabled}
    >
      {
        trigger ? React.createElement(trigger, { disabled: options?.disabled }) : <IconButton
          disabled={options?.disabled}
          icon={<SparkAttachmentLine />}
          bordered={false}
        />
      }
    </Upload>


    const uploadFileListHeader = <Sender.Header
      closable={false}
      open={fileList?.length > 0}
    >
      <Attachments
        items={fileList}
        onChange={(info) => setFileList(info.fileList)}
      />
    </Sender.Header>


    return {
      fileList,
      getFileList,
      setFileList,
      uploadIconButton,
      uploadFileListHeader
    }

  } else {
    return {
      enabled: false,
    };
  }
}