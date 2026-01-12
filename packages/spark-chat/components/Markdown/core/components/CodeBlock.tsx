import { Bubble, CodeHighlighter, Mermaid } from '@ant-design/x';
import { type ComponentProps } from '@ant-design/x-markdown';
import { useProviderContext } from "@agentscope-ai/chat";
import { useState } from 'react';
import { SparkCopyLine, SparkTrueLine } from '@agentscope-ai/icons';


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


  return <div className={prefixCls}>
    <div className={`${prefixCls}-lang`}>{lang}</div>


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


}


export default Code;