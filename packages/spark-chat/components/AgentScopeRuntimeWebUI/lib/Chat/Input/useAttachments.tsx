import { IAgentScopeRuntimeWebUISenderAttachmentsOptions } from "@agentscope-ai/chat";
import { Upload } from 'antd';
import { IconButton } from "@agentscope-ai/design";
import { SparkAttachmentLine } from "@agentscope-ai/icons";
import { Sender, Attachments } from '@agentscope-ai/chat';
import { useGetState } from "ahooks";

export default function useAttachments(
  attachments: IAgentScopeRuntimeWebUISenderAttachmentsOptions
) {
  const [fileList, setFileList, getFileList] = useGetState([]);

  if (attachments?.customRequest) {
    const uploadIconButton = <Upload
      customRequest={attachments.customRequest}
      fileList={fileList}
      showUploadList={false}
      onChange={(info) => {
        setFileList(info.fileList);
      }}
    >
      <IconButton
        icon={<SparkAttachmentLine />}
        bordered={false}
      />
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