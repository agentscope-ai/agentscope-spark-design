import React, { useMemo, useRef, useState } from 'react';
import { GetProp, Select } from 'antd';
import { SparkAttachmentLine } from '@agentscope-ai/icons';
import { ChatInput, Attachments } from '@agentscope-ai/chat';
import { AIGC } from '@agentscope-ai/chat';

type AttachedFiles = GetProp<typeof Attachments, 'items'>;

export default function () {
  const [value, setValue] = useState('Hello, Alibaba Cloud Spark Chat!');
  const [selectValue, setSelectValue] = useState('1');
  const onUpload = useMemo(() => {
    return [{
      multiple: false,
      icon: <SparkAttachmentLine />,
      customRequest(options) {
        options.onSuccess({
          url: URL.createObjectURL(options.file as Blob),
        });
      }
    }]
  }, []);
  const resetData = new Array(onUpload.length).fill([]);
  const [attachedFiles, setAttachedFiles] = React.useState<AttachedFiles[]>(resetData);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleFileChange = async (index, fileList) => {
    setAttachedFiles(attachedFiles => {
      return attachedFiles.map((item, i) => {
        if (i === index) {
          return [...fileList];
        }
        return [...item];
      })
    })
  }
  
  return (
    <div ref={containerRef} style={{width: '100%'}}>
      <ChatInput
        enableFocusExpand={true}
        header={
          <AIGC.SenderHeader 
            onUpload={onUpload}
            attachedFiles={attachedFiles} 
            onFileChange={handleFileChange} 
          />
        }
        prefix={
          <Select
            value={selectValue}
            onChange={setSelectValue}
            options={[
              { label: 'Option 1', value: '1' },
              { label: 'Option 2', value: '2' },
              { label: 'Option 3', value: '3' },
            ]}
          />
        }
        placeholder='Please type here...'
        value={value}
        onChange={setValue}
      />
    </div>
  )
}