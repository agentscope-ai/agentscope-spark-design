import { requestSse } from '@agentscope-ai/design';

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

const ResolveHeader = {
  status: 200,
  headers: {
    get: (name: string) => {
      if (name === 'content-type') return 'text/event-stream';
      return null;
    },
  },
};

const RejectHeader = {
  status: 200,
  headers: {
    get: (name: string) => {
      if (name === 'content-type') return 'json';
      return null;
    },
  },
};

describe('requestSSE', () => {
  it('发送请求并获取结果', async () => {
    const sseData =
      'event: test1\nid: 1\ndata: line1\n\nevent: test2\nid:2\ndata: line2\n\n';

    (global.fetch as jest.Mock).mockResolvedValue({
      ...ResolveHeader,
      body: new MockReadableStream(sseData),
      ok: true,
    });

    const result: any[] = [];
    await requestSse('/api/sse', {
      onmessage(msg) {
        // console.log('onmessage:', msg);
        result.push(msg);
      },
    });
    // expect(fetch).toHaveBeenCalledWith('/api/sse', {});
    // console.log('result:', result);
    expect(result.map((one) => one.data).join('\n')).toEqual('line1\nline2');
    expect(result.map((one) => one.event).join('\n')).toEqual('test1\ntest2');
    expect(result.map((one) => one.id).join('\n')).toEqual('1\n2');
  });

  it('结果header务必是text/event-stream', async () => {
    const sseData = 'data: line1\n\ndata: line2\n\n';

    (global.fetch as jest.Mock).mockResolvedValue({
      ...RejectHeader,
      body: new MockReadableStream(sseData),
      ok: true,
    });

    const result: any[] = [];
    await expect(
      requestSse('/api/sse', {
        onmessage(msg) {
          // console.log('onmessage:', msg);
          result.push(msg.data);
        },
      }),
    ).rejects.toThrow(
      'Expected content-type to be text/event-stream, Actual: json',
    );
  });
});
