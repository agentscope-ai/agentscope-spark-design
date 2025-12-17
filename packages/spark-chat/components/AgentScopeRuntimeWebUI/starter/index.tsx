import { AgentScopeRuntimeWebUI, IAgentScopeRuntimeWebUIRef } from '@agentscope-ai/chat';
import OptionsPanel from './OptionsPanel';
import { useMemo, useRef, useState } from 'react';
import sessionApi from './sessionApi';
import defaultConfig from './OptionsPanel/defaultConfig';
import { useLocalStorageState } from 'ahooks';
import Weather from './Weather';

export default function () {

  const chatRef = useRef<IAgentScopeRuntimeWebUIRef>(null);
  // @ts-ignore
  window.chatRef = chatRef;

  const [optionsConfig, setOptionsConfig] = useLocalStorageState('agent-scope-runtime-webui-options', {
    defaultValue: defaultConfig(),
    listenStorageChange: true,
  });

  const options = useMemo(() => {
    const rightHeader = <OptionsPanel value={optionsConfig} onChange={v => {
      setOptionsConfig(prev => ({
        ...prev,
        ...v,
      }));
    }} />;

    return {
      ...optionsConfig,
      customToolRenderConfig: {
        // 'weather search mock': Weather,
      },
      session: {
        multiple: true,
        api: sessionApi,
      },
      sender: {
        ...optionsConfig.sender,
        attachments: optionsConfig.sender.attachments ? {
          customRequest(options) {
            // 模拟上传进度
            options.onProgress({
              percent: 100,
            });
            // 当前是一个 mock 的上传行为
            // 实际情况需要具体实现一个文件上传服务，将文件转化为 url
            options.onSuccess({
              url: URL.createObjectURL(options.file as Blob)
            });
          }
        } : undefined,
      },
      theme: {
        ...optionsConfig.theme,
        rightHeader,
      },
    };
  }, [optionsConfig]);

  return <div style={{ height: '100dvh' }}>
    <AgentScopeRuntimeWebUI
      ref={chatRef}
      options={options}
    />
  </div>;
}