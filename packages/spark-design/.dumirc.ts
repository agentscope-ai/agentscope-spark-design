import { defineConfig } from 'dumi';
import path from 'path';
import pkg from './package.json';

export default defineConfig({
  history: { type: 'browser' },
  alias: {
    '@': ['/src'],
    '@dumi': ['/.dumi'],
    '@agentscope-ai/design/lib/antd/themes': ['/src/antd/themes'],
    '@agentscope-ai/design/lib': ['/src'],
    '@agentscope-ai/design': ['/src'],
    '@ant-design/icons': ['@agentscope-ai/icons-override-antd'],
    '@ant-design/icons-svg': ['@agentscope-ai/icons-svg-override-antd'],
  },
  base: process.env.GITHUB_PAGES ? '/sd-doc/' : '/',
  publicPath: process.env.GITHUB_PAGES ? '/sd-doc/' : '/',
  outputPath: '../../dist/spark-design',
  hash: false,
  themeConfig: {
    demoTitle: {
      llmTxtBase: `https://unpkg.com/browse/@agentscope-ai/design@${pkg.version
      }/llms/components/commonComponents`,
    },
    hd: { rules: [] },
    logo: 'https://img.alicdn.com/imgextra/i1/O1CN01ipemFb1EzmZI9LiTe_!!6000000000423-55-tps-28-28.svg',
    name: 'Basic Components',
    type: 'docs',
    prefersColor: { default: 'light', switch: false },
    nav: [
      {
        title: {
          'en-US': 'Components',
          'zh-CN': '组件',
        },
        link: '/components',
        icon: 'spark-osWidget-line',
        order: 2,
      },
      {
        title: {
          'en-US': 'Guide',
          'zh-CN': '指南',
        },
        link: '/guide',
        icon: 'spark-fileCode-line',
        order: 1,
      },
    ],
  },
  locales: [
    { id: 'en-US', name: 'English' },
    { id: 'zh-CN', name: '中文' },
  ],
  resolve: {
    atomDirs: [
      // 基础antd组件
      {
        type: 'component',
        dir: 'src/components/commonComponents',
      },
      // hooks
      { type: 'hook', dir: 'src/hooks' },
      // 工具函数
      {
        type: 'hook',
        dir: 'src/libs',
      },
    ],
    entryFile: './src/index.ts',
  },
  lessLoader: {
    javascriptEnabled: true,
    modifyVars: {
      'bl-prefix': 'bl',
      'ant-prefix': 'bl-ant',
    },
  },
  postcssLoader: {
    plugins: {
      '@tailwindcss/postcss': {},
    },
  },
  plugins: [
    'dumi-plugin-code-snippets',
    '@alibot/dumi-plugin-api-parser',
    '@alibot/dumi-plugin-llms',
  ],
  llms: {
    // 输出目录，会将本地参与dumi编译的md文件转到到目录，保持原目录结构。建议不要和原始md文件使用相同目录
    outputDir: 'llms',
    // 输出文件扩展名
    outputExt: '.llms.txt',
    // 所有文件合并产出
    fullFile: 'all.llms.txt',
    // 索引文件
    indexFile: 'index.llms.txt',
    // 文件匹配，可以禁止某些文件被解析, 例如['**/*.md', '!src/test.md]则禁止输出src/test.md文件
    patterns: ['**/*.zh-CN.md'],
    // 自定义产出文件路径, (filename, {cwd, outputDir, outputExt}) => string
    outputFilePath: (filename, { cwd, outputDir, outputExt }) => {
      // 忽略首层src文件路径
      return path.resolve(
        cwd,
        outputDir,
        filename.replace(/^src\//, '').replace(/\.md$/, outputExt),
      );
    },
    /** 是否禁用，假如禁用则不会执行解析 */
    disabled: false,
    /** 自定义json处理方法，可以在将树转换成markdown前做自定义处理, 注意返回新的tree对象，不要对原始tree进行修改，并保持原始tree结构 */
    // transformTree?: (tree: HastRoot, filename: string) => HastRoot;
    /** 自定义转换成markdown的方法, 可以对处理后的md进行转换，例如：将md中的图片转换为base64 */
    transformMarkdown: (md: string, filename: string) => {
      // 删除 </DemoTitle> 到第一个 #### API 之间的字符串，其中API之前的 # 数量1-4
      let result = md
        .replace(/<\/DemoTitle>[\s\S]*?(?=#{1,5}.*API)/g, '\n')
        .replace(/<div data-embed-hidden><\/div>/g, '');

      // 处理 markdown table 中的 HTML 标签
      // 将文档按行分割，只处理 markdown table 行
      const lines = result.split('\n');
      const processedLines = lines.map((line) => {
        // 判断是否为 markdown table 行（包含 | 并且不是代码块内）
        const isTableLine =
          line.trim().includes('|') &&
          !line.trim().startsWith('```') &&
          !line.trim().startsWith('    '); // 排除代码块

        if (isTableLine) {
          let processedLine = line;

          // 1. 删除 <span class="lang-en"></span> 标签和标签中的内容
          processedLine = processedLine.replace(
            /<span\s+class="lang-en"[^>]*>.*?<\/span>/g,
            '',
          );

          // 2. 删除 HTML 标签，保留里面的文本内容
          // 先处理成对的 HTML 标签（不包含嵌套）
          processedLine = processedLine.replace(
            /<([^>]+)>([^<]*)<\/\1>/g,
            '$2',
          );

          // 处理自闭合标签
          processedLine = processedLine.replace(/<[^>]+\/>/g, '');

          // 处理剩余的开始和结束标签
          processedLine = processedLine.replace(/<\/?[^>]+>/g, '');

          return processedLine;
        }

        return line;
      });

      return processedLines.join('\n');
    },
  },
  'third:apiParser': {
    intlText:
      '<div><span class="lang-en">{en}</span><span class="lang-cn">{cn}</span></div>',
    langEn: {
      attribute: 'Attribute',
      describe: 'Description',
    },
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
});
