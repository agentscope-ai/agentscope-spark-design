import { requestPopSse } from '@agentscope-ai/design';

// Mock ReadableStream for Jest environment
class MockReadableStream {
  private data: string;
  private index: number = 0;

  constructor(data: string) {
    this.data = data;
  }

  getReader() {
    return {
      read: async () => {
        if (this.index >= this.data.length) {
          return { done: true, value: undefined };
        }
        const chunk = new TextEncoder().encode(this.data);
        this.index = this.data.length; // Mark as done after first read
        return { done: false, value: chunk };
      },
    };
  }
}

global.fetch = jest.fn();
global.ReadableStream = MockReadableStream as any;

describe('requestPopSse', () => {
  it('should make POP SSE Request And Get Result', async () => {
    const mockTokenData = {
      code: '200',
      data: {
        path: '/llm-2setzb9xb8mx6vrc/quanmiao/lightapp/runCommentGeneration',
        headers: {
          Authorization:
            'ACS3-HMAC-SHA256 Credential=TMP.3KeMDxG4yrN7Zt2PZcu384bfNBJzfUYwJgCTU9Pc1CaDVJ28D1F98VqwKjQa3fqs2FSzfXXwqSjwKYJFmJ9uXeVzeMrzGV,SignedHeaders=content-type;host;x-acs-accept-language;x-acs-action;x-acs-content-sha256;x-acs-date;x-acs-secure-transport;x-acs-signature-nonce;x-acs-source-ip;x-acs-source-tls-version;x-acs-version;x-acs-web-code,Signature=07eb4a4a80e495eff64c4800bbaf3d542f360d125ffdea75e2795eb947b4adeb',
          'x-acs-source-tls-version': 'TLSv1.2',
          'x-acs-action': 'RunCommentGeneration',
          'x-acs-accept-language': 'zh-CN',
          'x-acs-secure-transport': 'true',
          'x-acs-date': '2024-11-19T09:13:35Z',
          'x-acs-version': '2024-08-01',
          'x-acs-content-sha256':
            '9aebb4fa6ed183307344a2cea3f23eb44de87537b5f231dccda7881ac03134aa',
          'x-acs-signature-nonce': '4a46f7de-e39e-480e-acf7-7849e16807a5',
          'x-acs-web-code': 'default',
          'Content-Type': 'application/json',
          'x-acs-source-ip': '100.66.76.185',
        },
        method: 'POST',
        query: {},
        body: '{"type":{"emotion":"20","opinion":"20","interaction":"20","experience":"20","humor":"20"},"sentiment":{"positive":"100","neutral":"0","negative":"0"},"lengthRange":{"short":"50","medium":"50","long":"0"},"allowEmoji":true,"modelId":"qwen-max","sourceMaterial":"知名科技博主小李通过自己的直播间开启了一场特别的直播活动——"A品牌电脑狂欢购"。小李热情洋溢地向观众们介绍起今天要推荐的产品，桌上摆放着几款不同颜色、配置各异但都极其吸引眼球的A品牌笔记本。小李拿起其中一台银色版本开始详细介绍："这款电脑采用了最新的处理器技术，无论是处理日常办公软件还是运行大型游戏都能游刃有余；而其轻薄便携的设计更是让随时随地工作成为可能。"他边说边演示了快速启动应用程序、多任务切换等功能，流畅的操作体验让屏幕前的网友们惊叹不已。","numComments":20,"extraInfo":""}',
        uri: 'https://quanmiaolightapp-pre.cn-hangzhou.aliyuncs.com/',
      },
      requestId: '1a0e949f17320076152332314ebb7a',
      successResponse: true,
    };
    const mockData = {
      header: {
        taskId: 'taskId',
      },
      payload: {
        output: {
          text: 'text',
        },
        usage: {
          outputToken: 10,
        },
      },
    };

    const sseData = `data: ${JSON.stringify(mockData)}\n\n`;

    (global.fetch as jest.Mock)
      .mockResolvedValueOnce(
        new Response(JSON.stringify(mockTokenData), {
          status: 200,
          headers: {
            'Content-Type': 'application/json',
          },
        }),
      )
      .mockResolvedValueOnce({
        status: 200,
        headers: {
          get: (name: string) => {
            if (name === 'content-type') return 'text/event-stream';
            return null;
          },
        },
        body: new MockReadableStream(sseData),
        ok: true,
      });

    const result: any[] = [];
    const onMessagePromise = () => {
      return new Promise((resolve) => {
        requestPopSse({
          action: 'RunMarketingInformationExtract',
          product: 'QuanMiaoLightApp',
          region: 'cn-hangzhou',
          version: '2024-08-01',
          params: { workspaceId: 'llm-2setzb9xb8mx6vrc' },
          body: {},
          onMessage(msg) {
            result.push(msg);
            resolve(true);
          },
        });
      });
    };
    await onMessagePromise();
    expect(result[0]).toEqual(mockData);
  });
});
