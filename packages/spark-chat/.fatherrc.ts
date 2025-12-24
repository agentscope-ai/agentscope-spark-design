import { defineConfig } from 'father';

const alias = {
  '@ant-design/icons': '@agentscope-ai/icons-override-antd',
  '@ant-design/icons-svg': '@agentscope-ai/icons-svg-override-antd',
};


export default defineConfig({
  alias: alias,
  esm: {
    output: 'lib',
    input: 'components',
    ignores: ['**/demo/**', '**/__tests__/**'],
  },
});
