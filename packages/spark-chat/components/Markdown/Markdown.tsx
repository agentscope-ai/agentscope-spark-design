import { memo, useMemo } from 'react';
import MarkdownX from './core';
import type { MarkdownProps } from './types';
import useTyping from './core/hooks/useTyping';
import { useProviderContext } from '@agentscope-ai/chat';
import classNames from 'classnames';
import Null from './core/components/Null';
import CodeBlock from './core/components/CodeBlock';
import DisabledImage from './core/components/DisableImage';
import Media from './core/components/Media';
import Raw from './core/components/Raw';
import { ErrorBoundary } from "react-error-boundary";
import useCitationsData from './core/hooks/useCitationsData';
import Latex from '@ant-design/x-markdown/plugins/Latex';
import { citationsExtension } from './core/plugins/citations';
import { CursorComponent, cursorExtension } from './core/plugins/cursor';
import markedFootnote from 'marked-footnote'
import Link from './core/components/Link';


// 缓存不变的 dompurify 配置
const EMPTY_DOMPURIFY_CONFIG = {
  ALLOWED_TAGS: [],
};

/**
 * 检测浏览器是否支持正则表达式的 lookbehind assertions
 * iOS Safari < 16.4 不支持此特性
 */
function supportsLookbehindAssertions(): boolean {
  try {
    // 尝试创建包含正向后行断言的正则表达式
    new RegExp('(?<=a)b');
    return true;
  } catch (e) {
    return false;
  }
}

const isSupportsLookbehindAssertions = supportsLookbehindAssertions();


export default memo(function (props: MarkdownProps) {
  const baseFontSize = props.baseFontSize || 14;
  const baseLineHeight = props.baseLineHeight || 1.7;
  const content = useTyping({ content: props.content, typing: props.typing && !props.animation });
  const prefixCls = useProviderContext().getPrefixCls('markdown');
  const {
    raw = false,
    allowHtml = false,
  } = props;

  const {
    citationsData,
    citationsDataCount,
    CitationComponent
  } = useCitationsData({ citations: props.citations, citationsMap: props.citationsMap });

  const components = useMemo(() => ({
    code: CodeBlock,
    style: Null,
    script: Null,
    img: props.disableImage ? DisabledImage : Media,
    citation: CitationComponent,
    'custom-cursor': CursorComponent,
    a: Link,
    ...props.components,
  }), [props.disableImage, CitationComponent, props.components]);

  const dompurifyConfig = useMemo(() => ({
    ADD_TAGS: ['custom-cursor', 'citation']
  }), []);

  // 使用 useMemo 缓存 extensions 配置
  const { extensions, walkTokens } = useMemo(() => {
    const exts = Latex()
    exts.push(cursorExtension());
    if (citationsDataCount > 0) exts.push(citationsExtension(citationsData));

    const f = markedFootnote({
      sectionClass: `${prefixCls}-footnotes`
    });
    exts.push(...f.extensions);
    return { extensions: exts, walkTokens: f.walkTokens };
  }, [citationsDataCount, citationsData]);

  // // 使用 useMemo 缓存 config 对象
  const config = useMemo(() => ({
    extensions,
    walkTokens,
    // 当 allowHtml 为 false 时，转义 HTML 标签使其显示为字符串
    ...(!allowHtml && {
      renderer: {
        html(token: { text?: string; raw?: string }) {
          const text = token.text || token.raw || '';
          return text.replace(/</g, '&lt;').replace(/>/g, '&gt;');
        }
      }
    })
  }), [extensions, allowHtml]);

  const fallback = <Raw content={content || ''} baseFontSize={baseFontSize} baseLineHeight={baseLineHeight} />;

  if (raw || !isSupportsLookbehindAssertions) return fallback;

  return <ErrorBoundary fallback={fallback}>
    <MarkdownX
      dompurifyConfig={dompurifyConfig}
      cursor={props.cursor}
      animation={props.animation}
      // @ts-ignore
      components={components}
      style={{ fontSize: baseFontSize, lineHeight: baseLineHeight }}
      openLinksInNewTab={true}
      className={classNames(prefixCls, props.className)}
      content={content || ''}
      config={config}
    />
  </ErrorBoundary>

});