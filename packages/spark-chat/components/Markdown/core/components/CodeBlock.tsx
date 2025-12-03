import React, { useMemo, useState } from 'react';
import type { FC } from 'react';
import { CodeBlock as Code, CodeBlockLangExtensionsMap, } from '@agentscope-ai/design';
import { createStyles } from 'antd-style';
import { useProviderContext, Mermaid } from '@agentscope-ai/chat';
import { theme as AntdTheme } from 'antd'
import { SparkCopyLine, SparkTrueLine } from '@agentscope-ai/icons';

const supportedLanguages = Object.keys(CodeBlockLangExtensionsMap);

const countLines = (str: string): number => {
  const regex = /\n/g;
  const matches = str.match(regex);
  return matches ? matches.length : 1;
};

const useCode = (raw: any) => {
  if (!raw) return {};

  const { children, className } = raw.props;

  if (!children) return {};

  const content = Array.isArray(children) ? (children[0] as string) : children;
  const lang = className?.replace('language-', '') || 'txt';
  const isSingleLine = countLines(content) <= 1 && content.length <= 32;

  return {
    content,
    isSingleLine,
    lang,
  };
};

interface CodeBlockProps {
  children: any;
  enableMermaid?: boolean;
}

const CodeBlock: FC<CodeBlockProps> = ({ children, enableMermaid }) => {
  const code = useCode(children);
  const { styles, cx } = useStyles();
  const { getPrefixCls, theme } = useProviderContext();
  const isDarkMode = theme?.algorithm === AntdTheme.darkAlgorithm;
  const [copied, setCopied] = useState(false);


  const { content: _content = '', lang = '' } = code;
  const content = useMemo(() => {
    return _content.replace(/ :(dot|underline):/g, '');
  }, [_content])


  if (!content) return null;
  if (lang === 'mermaid') {
    return (
      <Mermaid content={content} width={"50%"} />
    );
  }
  if (supportedLanguages.indexOf(lang) === -1) return <pre><code>{content}</code></pre>;

  return <div className={styles.container}>
    <div className={styles.header}>
      <div className={styles.lang}>{lang}</div>
      {
        copied ? <SparkTrueLine className={styles.copied} /> : <SparkCopyLine className={styles.icon} onClick={() => {
          navigator.clipboard.writeText(content);
          setCopied(true);
          setTimeout(() => {
            setCopied(false);
          }, 1000);
        }} />
      }
    </div>
    <Code value={content} language={lang} theme={isDarkMode ? 'dark' : 'light'} readOnly={true}></Code>
  </div>
};

const useStyles = createStyles(({ css, token }) => ({
  copied: css`
    color: ${token.colorSuccess};
    cursor: pointer;
    font-size: 16px;
  `,
  container: css`
    border: 1px solid ${token.colorBorderSecondary};
    border-radius: 6px;
    overflow: hidden;
    font-size: 0.8571428571428571em;
    margin: 1em 0;
  `,
  header: css`
    display: flex;
    justify-content: space-between;
    background: ${token.colorFillSecondary};
    height: 28px;
    line-height: 28px;
    border-radius: 4px 4px 0 0;
    align-items: center;
    user-select: none;
    position: relative;
    padding: 0 12px;
  `,
  icon: css`
    fontsize: 16px;
    cursor: pointer;
  `,
  lang: {
    textTransform: 'capitalize'
  }
}));

export default CodeBlock;