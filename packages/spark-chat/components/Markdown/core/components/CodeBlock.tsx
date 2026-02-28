import { Bubble, CodeHighlighter, Mermaid } from '@ant-design/x';
import { type ComponentProps } from '@ant-design/x-markdown';
import { useProviderContext } from "@agentscope-ai/chat";
import { useCallback, useState } from 'react';
import { SparkCopyLine, SparkDownloadLine, SparkTrueLine } from '@agentscope-ai/icons';

const LANG_EXT_MAP: Record<string, string> = {
  javascript: 'js', typescript: 'ts', python: 'py', ruby: 'rb',
  rust: 'rs', kotlin: 'kt', csharp: 'cs', markdown: 'md',
  yaml: 'yml', shell: 'sh', bash: 'sh', zsh: 'sh',
  mermaid: 'mmd', jsx: 'jsx', tsx: 'tsx',
};

const Code: React.FC<ComponentProps> = (props) => {
  const { className, children } = props;
  const lang = className?.match(/language-(\w+)/)?.[1] || '';

  if (typeof children !== 'string') return null;
  if (lang === 'mermaid') {
    return <Mermaid header={<CodeHeader lang='mermaid' content={children} />}>{children}</Mermaid>;
  }
  return <CodeHighlighter lang={lang} header={<CodeHeader lang={lang} content={children} />}>{children}</CodeHighlighter>;
};


function CodeHeader({ lang, content }: { lang: string, content: string }) {
  const [copied, setCopied] = useState(false);
  const { getPrefixCls } = useProviderContext();
  const prefixCls = getPrefixCls('code-header');

  const handleDownload = useCallback(() => {
    const ext = LANG_EXT_MAP[lang] || lang || 'txt';
    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `code.${ext}`;
    a.click();
    URL.revokeObjectURL(url);
  }, [lang, content]);

  return <div className={prefixCls}>
    <div className={`${prefixCls}-lang`}>{lang}</div>


    <div className={`${prefixCls}-actions`}>
      <SparkDownloadLine className={`${prefixCls}-download`} onClick={handleDownload} />
      {
        copied ? <SparkTrueLine className={`${prefixCls}-copied`} /> : <SparkCopyLine className={`${prefixCls}-icon`} onClick={() => {
          navigator.clipboard.writeText(content);
          setCopied(true);
          setTimeout(() => {
            setCopied(false);
          }, 1000);
        }} />
      }
    </div>
  </div>


}


export default Code;