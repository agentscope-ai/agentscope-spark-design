import React, { useMemo, useRef, useState } from 'react';
import { GetProp } from 'antd';
import { SparkAttachmentLine } from '@agentscope-ai/icons';
import { ChatInput, Attachments } from '@agentscope-ai/chat';
import { AIGC } from '@agentscope-ai/chat';
import { useClickAway, useFocusWithin } from 'ahooks';

type AttachedFiles = GetProp<typeof Attachments, 'items'>;

export default function () {
  const [value, setValue] = useState('Hello, Alibaba Cloud Spark Chat!');
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
  const [focus, setFocus] = React.useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useFocusWithin(containerRef, {
    onFocus: () => setFocus(true),
  });

  useClickAway(() => setFocus(false), [containerRef]);

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
        header={
          <AIGC.SenderHeader 
            focus={focus} 
            enableFocusVisible={true}
            onUpload={onUpload}
            attachedFiles={attachedFiles} 
            onFileChange={handleFileChange} 
          />
        }
        placeholder='Please type here...'
        value={value}
        onChange={setValue}
      />
    </div>
  )
}