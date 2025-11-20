import React from 'react';
import { DemoContextProvider } from './DemoContext';
import Chat from './Chat';
import { ConfigProvider, carbonTheme } from '@agentscope-ai/design';


export default function () {
  return <div style={{ height: '100vh' }} >
    <ConfigProvider {...carbonTheme}
      prefix='sps'
      prefixCls="sps">
      <DemoContextProvider>
        <Chat />
      </DemoContextProvider>
    </ConfigProvider>
  </div>
}

