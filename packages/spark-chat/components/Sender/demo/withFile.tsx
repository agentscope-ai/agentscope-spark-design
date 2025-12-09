import React from 'react';
import { Attachments, ChatInput } from '@agentscope-ai/chat';
import { Button, GetProp, Upload } from 'antd';
import { IconButton } from '@agentscope-ai/design';
import { SparkAttachmentLine } from '@agentscope-ai/icons';

export default function () {
  // mock data
  const [attachedFiles, setAttachedFiles] = React.useState<GetProp<typeof Attachments, 'items'>>([
    {
      uid: '-1',
      name: 'file.pdf',
      status: 'done',
      size: 1000,
    },
    {
      uid: '-2',
      name: 'file.pdf',
      status: 'done',
      size: 2000,

    },
    {
      uid: '-3',
      name: 'file.pdf',
      status: 'done',
      size: 3000,
    },
  ]);

  const handleFileChange: GetProp<typeof Attachments, 'onChange'> = async ({ fileList }) => {
    console.log('fileList: ', fileList);
    setAttachedFiles(fileList);
  }

  const senderHeader = (
    <ChatInput.Header
      closable={false}
      open={attachedFiles?.length > 0}
    >
      <Attachments
        items={attachedFiles}
        onChange={handleFileChange}
      />
    </ChatInput.Header>
  );
  const attachmentsNode = (
    <Upload onChange={handleFileChange} fileList={attachedFiles} showUploadList={false} key="upload">
      <IconButton icon={<SparkAttachmentLine />} bordered={false} />
    </Upload>
  );

  return <ChatInput placeholder='Please type here...' header={senderHeader}
    prefix={attachmentsNode}></ChatInput>
}