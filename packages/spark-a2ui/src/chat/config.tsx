import sessionApi from './sessions';

export default () => {
  return {
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
      // @ts-ignore
      attachments: true,
      maxLength: 10000,
      disclaimer:
        'AI can also make mistakes, so please check carefully and use it with caution',
    },
    session: {
      multiple: true,
      api: sessionApi,
    },
    api: {
      baseURL: 'http://localhost:8099/process',
      token: '',
    },
  };
};
