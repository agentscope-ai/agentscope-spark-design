import { requestSse } from '@agentscope-ai/design';
import { describe, expect, test, vi } from 'vitest';

global.fetch = vi.fn();

const ResolveHeader = {
  status: 200,
  headers: {
    'content-type': 'text/event-stream',
  },
};

const RejectHeader = {
  status: 200,
  headers: {
    'content-type': 'json',
  },
};

describe('requestSSE', () => {
  test('发送请求并获取结果', async () => {
    vi.mocked(global.fetch).mockResolvedValue(
      new Response(
        'event: test1\nid: 1\ndata: line1\n\nevent: test2\nid:2\ndata: line2\n\n',
        ResolveHeader,
      ),
    );
    const result = [];
    await requestSse('/api/sse', {
      onmessage(msg) {
        result.push(msg);
      },
    });
    expect(result.map((one) => one.data).join('\n')).toEqual('line1\nline2');
    expect(result.map((one) => one.event).join('\n')).toEqual('test1\ntest2');
    expect(result.map((one) => one.id).join('\n')).toEqual('1\n2');
  });

  test('结果header务必是text/event-stream', async () => {
    vi.mocked(global.fetch).mockResolvedValue(
      new Response('data: line1\n\ndata: line2\n\n', RejectHeader),
    );
    const result = [];
    await expect(
      requestSse('/api/sse', {
        onmessage(msg) {
          result.push(msg.data);
        },
      }),
    ).rejects.toThrow(
      'Expected content-type to be text/event-stream, Actual: json',
    );
  });

  // test('autoRetryTime 验证', async () => {
  //   const response = new Response(
  //     'data: line1\n\ndata: line2\n\n',
  //     ResolveHeader,
  //   );
  //   const rejectResponse = new Response(
  //     'data: line1\n\ndata: line2\n\n',
  //     RejectHeader,
  //   );
  //   vi.mocked(global.fetch)
  //     .mockReturnValue(Promise.resolve(response))
  //     .mockReturnValueOnce(Promise.reject(rejectResponse))
  //     .mockReturnValueOnce(Promise.reject(rejectResponse));
  //   const result = [];
  //   try {
  //     await requestSse('/api/sse', {
  //       autoRetryTime: 4,
  //       debug: true,
  //       onmessage(msg) {
  //         result.push(msg.data);
  //       },
  //     });
  //   } catch {}
  //   expect(global.fetch).toBeCalledTimes(3);
  //   expect(result).toEqual(['line1', 'line2']);
  // });
});
