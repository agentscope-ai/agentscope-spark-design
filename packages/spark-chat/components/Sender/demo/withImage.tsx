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
      name: 'image.png',
      status: 'done',
      url: 'https://gw.alicdn.com/imgextra/i4/O1CN01sjZ4Uu1erFDOC6IkA_!!6000000003924-2-tps-396-224.png',
    },
    {
      uid: '-2',
      name: 'image.png',
      status: 'done',
      url: 'https://gw.alicdn.com/imgextra/i4/O1CN01sjZ4Uu1erFDOC6IkA_!!6000000003924-2-tps-396-224.png',
    },
    {
      uid: '-3',
      name: 'image.png',
      status: 'done',
      url: 'https://gw.alicdn.com/imgextra/i4/O1CN01sjZ4Uu1erFDOC6IkA_!!6000000003924-2-tps-396-224.png',
    },
  ]);
  const handleFileChange: GetProp<typeof Attachments, 'onChange'> = async ({ fileList }) => {
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