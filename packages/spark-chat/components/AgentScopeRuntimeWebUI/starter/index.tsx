import { AgentScopeRuntimeWebUI, IAgentScopeRuntimeWebUIRef } from '@agentscope-ai/chat';
import OptionsPanel from './OptionsPanel';
import { useMemo, useRef } from 'react';
import defaultConfig from './OptionsPanel/defaultConfig';
import { useLocalStorageState } from 'ahooks';
import { Button, Flex } from 'antd';
import MessageImport from './MessageImport';

const encoder = new TextEncoder();

const sleep = (ms: number) => new Promise(resolve => {
  setTimeout(resolve, ms);
});

function getLastUserText(input: any[] = []) {
  const lastMessage = input[input.length - 1];
  const content = lastMessage?.content || [];
  return content
    .filter((item: any) => item?.type === 'text')
    .map((item: any) => item.text)
    .join('\n');
}

async function createMockQueueResponse(data: {
  input?: any[];
  signal?: AbortSignal;
}) {
  const userText = getLastUserText(data.input);
  const messageId = `queue-demo-${Date.now()}`;
  const chunks = [
    {
      object: 'message',
      id: messageId,
      role: 'assistant',
      type: 'message',
      status: 'in_progress',
      content: [],
    },
    {
      object: 'content',
      msg_id: messageId,
      type: 'text',
      status: 'in_progress',
      delta: true,
      text: `Received: ${userText || 'attachment message'}\n\n`,
    },
    {
      object: 'content',
      msg_id: messageId,
      type: 'text',
      status: 'in_progress',
      delta: true,
      text: 'This mock response is intentionally slow, ',
    },
    {
      object: 'content',
      msg_id: messageId,
      type: 'text',
      status: 'in_progress',
      delta: true,
      text: 'so later inputs can enter the queue.',
    },
    {
      object: 'response',
      id: messageId,
      status: 'completed',
      created_at: Math.floor(Date.now() / 1000),
      output: [],
    },
  ];

  const stream = new ReadableStream({
    async start(controller) {
      for (const chunk of chunks) {
        if (data.signal?.aborted) {
          controller.close();
          return;
        }
        await sleep(700);
        controller.enqueue(
          encoder.encode(`data: ${JSON.stringify(chunk)}\n\n`),
        );
      }
      controller.close();
    },
  });

  return new Response(stream, {
    headers: {
      'Content-Type': 'text/event-stream',
    },
  });
}


export default function () {

  const chatRef = useRef<IAgentScopeRuntimeWebUIRef>(null);
  // @ts-ignore
  window.chatRef = chatRef;

  const [optionsConfig, setOptionsConfig] = useLocalStorageState('agent-scope-runtime-webui-options', {
    defaultValue: defaultConfig(),
    listenStorageChange: true,
  });

  const options = useMemo(() => {
    const rightHeader = <Flex gap={16}>
      <Button size="small" onClick={() => {
        chatRef.current?.input.submit({ query: 'Queue demo 1: slow response' });
        window.setTimeout(() => {
          chatRef.current?.input.submit({ query: 'Queue demo 2: queued while busy' });
        }, 400);
        window.setTimeout(() => {
          chatRef.current?.input.submit({ query: 'Queue demo 3: sent after demo 2' });
        }, 800);
      }}>Queue demo</Button>

      <OptionsPanel value={optionsConfig} onChange={v => {
        setOptionsConfig(prev => ({
          ...prev,
          ...v,
        }));
      }} />

      <MessageImport />
    </Flex>;

    return {
      ...optionsConfig,
      customToolRenderConfig: {
        // 'weather search mock': Weather,
      },
      session: {
        multiple: true,
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
        bubbleList: {
          ...optionsConfig.theme?.bubbleList,
          userMessageAnchors: {
            variant: 'navigator',
            ...optionsConfig.theme?.bubbleList?.userMessageAnchors,
          },
        },
        rightHeader,
      },
      api: {
        ...optionsConfig.api,
        ...(!optionsConfig.api.baseURL ? { fetch: createMockQueueResponse } : {}),
        cancel: (data) => {
          console.log('cancel', data);
        },
      },
    };
  }, [optionsConfig]);



  return <div style={{ height: '100dvh' }}>
    <AgentScopeRuntimeWebUI
      ref={chatRef}
      // @ts-ignore
      options={options}
    />
  </div>;
}
