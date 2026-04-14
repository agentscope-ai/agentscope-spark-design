import { IAgentScopeRuntimeWebUIOptions } from '@agentscope-ai/chat';
import Weather from '../Cards/Weather';


const config: IAgentScopeRuntimeWebUIOptions = {
  customToolRenderConfig: {
    'weather search mock': Weather,
  },
  theme: {
    colorPrimary: '#615CED',
    darkMode: true,
    prefix: 'agentscope-runtime-webui',
    leftHeader: {
      logo: 'https://img.alicdn.com/imgextra/i2/O1CN01lmoGYn1kjoXATy4PX_!!6000000004720-2-tps-200-200.png',
      title: 'Runtime WebUI',
    },
  },
  sender: {
    maxLength: 10000,
    disclaimer:
      'AI can also make mistakes, so please check carefully and use it with caution',
  },
  session: {
    multiple: false,
  },

  welcome: {
    greeting: 'Hello, how can I help you today?',
    description:
      'I am a helpful assistant that can help you with your questions.',
    avatar:
      'https://img.alicdn.com/imgextra/i2/O1CN01lmoGYn1kjoXATy4PX_!!6000000004720-2-tps-200-200.png',
    prompts: [
      {
        value: 'Hello',
      },
      {
        value: 'How are you?',
      },
      {
        value: 'What can you do?',
      },
    ],
  },
  api: {
    baseURL: 'https://fake-api.cn-beijing.fcapp.run/process',
    token: 'fake-token',
    enableHistoryMessages: true,
  },
};



export default config 