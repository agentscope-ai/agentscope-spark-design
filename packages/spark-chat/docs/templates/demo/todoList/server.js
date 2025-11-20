import {
  CopilotRuntime,
  OpenAIAdapter,
  copilotRuntimeNodeHttpEndpoint,
} from '@copilotkit/runtime';
import { createServer } from 'node:http';
import OpenAI from 'openai';

const serviceAdapter = new OpenAIAdapter({
  keepSystemRole: true,
  model: 'qwen-plus',
  openai: new OpenAI({
    apiKey: '???',
    baseURL: 'https://dashscope.aliyuncs.com/compatible-mode/v1',
  }),
});

const server = createServer((req, res) => {
  const runtime = new CopilotRuntime();
  const handler = copilotRuntimeNodeHttpEndpoint({
    endpoint: '/copilotkit',
    runtime,
    serviceAdapter,
  });

  return handler(req, res);
});

server.listen(4000, () => {
  console.log('Listening at http://localhost:4000/copilotkit');
});
