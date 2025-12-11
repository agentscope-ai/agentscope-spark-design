// @ts-nocheck
import { defineConfig } from 'dumi';
import compact from 'lodash/compact';
import path from 'path';
import pkg from './package.json';

const buildArgv = require('yargs-parser')(process.env.BUILD_ARGV_STR || '');
const env = buildArgv['def_publish_env'];

export default defineConfig({
  title: 'Spark Chat',
  favicons: [
    'https://gw.alicdn.com/imgextra/i1/O1CN01n7R7cy1MkE5OYeXV9_!!6000000001472-55-tps-24-24.svg',
  ],
  copy: !process.env.LLM
    ? [
        {
          from: 'llms',
          to: 'dist/llms',
        },
      ]
    : [],
  plugins: [
    '@umijs/plugins/dist/tailwindcss',
    '@alibot/dumi-plugin-api-parser',
    '@alibot/dumi-plugin-llms',
  ],
  llms: {
    outputDir: 'llms',
    outputExt: '.llms.txt',
    fullFile: 'all.llms.txt',
    indexFile: 'index.llms.txt',
    patterns: ['**/*.zh-CN.md'],
    outputFilePath: (filename, { cwd, outputDir, outputExt }) => {
      return path.resolve(
        cwd,
        outputDir,
        filename.replace(/^src\//, '').replace(/\.md$/, outputExt),
      );
    },
    disabled: !process.env.LLM,
    transformMarkdown: (md: string, filename: string) => {
      try {
        return md
          .replace(/(```[\s\S]*?```)\s*([^`\n]+(?:\n[^`\n]+)*)/g, '## $2\n\n$1')
          .replace(/<Install>|<\/Install>/g, '')
          .replace(
            /<div><span class="lang-en">[^<]*<\/span><span class="lang-cn">([^<]*)<\/span><\/div>/g,
            '$1',
          )
          .replace(
            /<DemoTitle title="([^"]*)" desc="([^"]*)"><\/DemoTitle>/g,
            '# $1\n$2',
          );
      } catch (error) {
        return md;
      }
    },
  },
  'third:apiParser': {
    intlText:
      '<div><span class="lang-en">{en}</span><span class="lang-cn">{cn}</span></div>',
    langCn: {
      parameter: '参数',
      attribute: '属性名',
      describe: '描述',
      type: '类型',
      isRequired: '是否必填',
      default: '默认值',
      return: '返回值',
      required: '(必填)',
    },
    // 自定义英文文案
    langEn: {
      parameter: 'Parameter',
      attribute: 'Attribute',
      describe: 'Desc',
      type: 'Type',
      isRequired: 'Is Required?',
      default: 'Default',
      return: 'Return',
      required: '(Required)',
    },
  },
  metas: [{ name: 'aplus-core', content: 'aplus.js' }],
  history: {
    type: 'hash',
  },
  headScripts: [
    `
  (function(w, d, s, q) {
    w[q] = w[q] || [];
    var f = d.getElementsByTagName(s)[0],j = d.createElement(s);
    j.async = true;
    j.id = 'beacon-aplus';
    j.setAttribute('exparams','userid=&aplus&sidx=aplusSidex&ckx=aplusCkx');
    j.src = "//g.alicdn.com/alilog/mlog/aplus_v2.js";
    j.crossorigin = 'anonymous';
    f.parentNode.insertBefore(j, f);
  })(window, document, 'script', 'aplus_queue');
`,
    'https://g.alicdn.com/aes/??tracker/3.3.13/index.js,tracker-plugin-pv/3.0.6/index.js',
  ],
  hash: false,
  publicPath: env
    ? `https://${
        buildArgv['def_publish_env'] === 'daily' ? 'dev.' : ''
      }g.alicdn.com/code/npm/@ali/agentscope-ai-chat/${pkg.version}/docs/`
    : '/',
  outputPath: '../../dist/spark-chat',
  mfsu: false,
  crossorigin: {},
  themeConfig: {
    demoTitle: {
      llmTxtBase:
        'https://g.alicdn.com/code/npm/@ali/agentscope-ai-chat/1.1.13/llms/components',
    },
    name: 'Chat',
    nav: compact([
      {
        title: {
          'en-US': 'Documents',
          'zh-CN': '开发文档',
        },
        link: '/documents',
        icon: 'spark-document-line',
      },
      {
        title: {
          'en-US': 'Components',
          'zh-CN': '原子组件',
        },
        link: '/components',
        icon: 'spark-plugin-line',
      },
      !env && {
        title: {
          'en-US': 'Templates',
          'zh-CN': '样板间',
        },
        link: '/templates',
        icon: 'spark-cardAddition-line',
      },
    ]),
  },
  conventionRoutes: {
    // to avoid generate routes for .dumi/pages/index/components/xx
    exclude: [/index\/components\//],
  },
  locales: [
    { id: 'en-US', name: 'English' },
    { id: 'zh-CN', name: '中文' },
  ],
  resolve: {
    atomDirs: [{ type: 'component', dir: 'components' }],
  },
  lessLoader: {},
  tailwindcss: {},
  clickToComponent: {
    editor: 'cursor',
  },
  alias: {
    '@agentscope-ai/chat': path.join(__dirname, 'components'),
    '@ant-design/icons': ['/node_modules/@agentscope-ai/icons-override-antd'],
    '@ant-design/icons-svg': [
      '/node_modules/@agentscope-ai/icons-svg-override-antd',
    ],
  },
});
