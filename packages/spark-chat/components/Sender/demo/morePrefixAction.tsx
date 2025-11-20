import React from 'react';
import { Attachments, ChatInput } from '@agentscope-ai/chat';
import { GetProp, Upload } from 'antd';
import { IconButton, Button } from '@agentscope-ai/design';
import { SparkAttachmentLine, SparkDeepSearchLine, SparkKeyboardLine } from '@agentscope-ai/icons';

export default function () {
  const [search, setSearch] = React.useState(false);
  const [attachedFiles, setAttachedFiles] = React.useState<GetProp<typeof Attachments, 'items'>>([]);
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

  return <ChatInput
    placeholder='Please type here...'
    zoomable
    header={senderHeader}
    prefix={[
      attachmentsNode,
      <Button type="text" color={search ? 'primary' : 'default'} variant={search ? 'filled' : 'text'} icon={<SparkDeepSearchLine />} style={{ padding: '0 6px', gap: 6 }} onClick={() => setSearch(!search)}>联网搜索</Button>,
    ]}>
  </ChatInput>
}
