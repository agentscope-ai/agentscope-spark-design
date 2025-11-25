import React from 'react';
import { ChatInput } from '@agentscope-ai/chat';
import { SparkMagicNoteLine } from '@agentscope-ai/icons';

export default function () {
  const [mode, setMode] = React.useState('');
  return <div style={{ width: '100%' }}>
    <ChatInput.ModeSelect options={[
      {
        icon: <SparkMagicNoteLine style={{ fontSize: 16 }} />,
        label: '文本',
        value: 'text',
        tooltip: '文本 tooltip'
      },
      {
        icon: <SparkMagicNoteLine style={{ fontSize: 16 }} />,
        label: '图片',
        selectedLabel: <div style={{
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
        }}>图片图片图片图片图片图片图片图片图片图片图片图片图片图片图片图片图片图片图片图片图片图片图片图片图片图片图片图片图片图片图片图片图片图片图片图片图片图片图片图片图片图片图片图片图片图片图片图片图片图片图片图片图片图片图片图片图片图片图片图片图片',
        </div>,
        value: 'image',
      },
      {
        icon: <SparkMagicNoteLine style={{ fontSize: 16 }} />,
        label: '文件',
        value: 'file',
      },
    ]}
      value={mode}
      closeTip='close tooltip'
      onChange={setMode}
      desc={<div
        style={{ fontSize: 12 }}
        onClick={() => {
          setMode('')
        }}>
        description of {mode}
      </div>}
    />
    <ChatInput placeholder='Please type here...' ></ChatInput>
  </div>
}