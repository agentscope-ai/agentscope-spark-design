import Markdown from './Markdown';
import CodeBlock from './defaultComponents/CodeBlock';
import Media from './defaultComponents/Media';
import DisabledImage from './defaultComponents/DisabledImage';
import { useGlobalContext, useProviderContext } from '@agentscope-ai/chat';
import { useTyping } from './hooks/useTyping';
import type { MarkdownProps as InnerMarkdownProps } from './interface';
import { cursorExtension, CursorComponent } from '../plugins/cursor';
import { citationsExtension } from '../plugins/citations';
import latex from '../plugins/latex';
import useCitationsData from './hooks/useCitationsData';
import classnames from 'classnames';
import { ErrorBoundary } from "react-error-boundary";
import { memo, useMemo } from 'react';

export interface MarkdownProps {
  /**
   * @description 需要渲染的 Markdown 内容
   * @descriptionEn Markdown content to be rendered
   */
  content?: InnerMarkdownProps['content'];
  /**
   * @description 光标样式类型，支持点状、下划线或布尔值控制
   * @descriptionEn Cursor style type, supports dot, underline, or boolean control
   */
  cursor?: boolean | 'dot' | 'underline';
  /**
   * @description 基础字体大小，影响整个Markdown内容的字体大小
   * @descriptionEn Base font size that affects the font size of the entire Markdown content
   */
  baseFontSize?: InnerMarkdownProps['baseFontSize'];
  /**
   * @description 基础行高，影响文本的行间距
   * @descriptionEn Base line height that affects text line spacing
   */
  baseLineHeight?: InnerMarkdownProps['baseLineHeight'];
  /**
   * @description 引用数据数组，用于显示引用信息
   * @descriptionEn Citation data array for displaying reference information
   */
  citations?: InnerMarkdownProps['citations'];
  /**
   * @description 引用映射对象，用于快速查找引用信息
   * @descriptionEn Citation mapping object for quick lookup of reference information
   */
  citationsMap?: InnerMarkdownProps['citationsMap'];
  /**
   * @description 用于替换 HTML 元素的自定义 React 组件映射，组件会接收 domNode、streamStatus 等属性
   * @descriptionEn Custom React components to replace HTML elements, components receive domNode, streamStatus, etc.
   */
  components?: InnerMarkdownProps['components'];
  /**
   * @description 是否允许渲染HTML标签，影响安全性
   * @descriptionEn Whether to allow rendering HTML tags, affects security
   */
  allowHtml?: boolean;
  /**
   * @description 是否禁用图片渲染
   * @descriptionEn Whether to disable image rendering
   */
  disableImage?: boolean;
  /**
   * @description 是否启用打字机效果，逐字显示内容
   * @descriptionEn Whether to enable typewriter effect for character-by-character display
   */
  typing?: boolean | number;
  /**
   * @description 是否以原始文本形式显示，跳过Markdown解析
   * @descriptionEn Whether to display as raw text, skipping Markdown parsing
   */
  raw?: boolean;
  /**
   * @description 组件的CSS类名
   * @descriptionEn CSS class name for the component
   */
  className?: string;
  /**
   * @description 启用英文单词缓存，单词会在遇到空格或标点后才整体显示（仅在 typing 为 true 时生效）
   * @descriptionEn Enable English word caching, words will be displayed as a whole after encountering spaces or punctuation (only works when typing is true)
   * @default false
   */
  enableWordCaching?: boolean;
  /**
   * @description 启用 LaTeX 公式缓存，公式会在完整后才整体显示（仅在 typing 为 true 时生效）
   * @descriptionEn Enable LaTeX formula caching, formulas will be displayed as a whole when complete (only works when typing is true)
   * @default true
   */
  enableMathCaching?: boolean;
  /**
   * @description 启用文字出现动画效果
   * @descriptionEn Enable text appearance animation effects
   * @default false
   */
  enableAnimation?: boolean;
}

const Null = () => null;

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

console.log({ isSupportsLookbehindAssertions });

export default memo(function (props: MarkdownProps) {
  const baseFontSize = props.baseFontSize || 14;
  const baseLineHeight = props.baseLineHeight || 1.7;
  const { getPrefixCls, } = useProviderContext();
  const prefixCls = getPrefixCls('markdown');
  const {
    className,
    allowHtml = true,
    content: _content = '',
    typing = false,
    cursor = false,
    enableWordCaching = false,
    enableMathCaching = true,
    enableAnimation = false,
    ...restProps
  } = props;
  const content = useTyping({ content: _content, typing });
  const { citationsData, citationsDataCount, CitationComponent } = useCitationsData({ citations: props.citations, citationsMap: props.citationsMap });


  if (props.raw || !isSupportsLookbehindAssertions) return <div className={prefixCls} style={{ fontSize: baseFontSize, lineHeight: baseLineHeight }}>{content}</div>;

  // 使用 useMemo 缓存 extensions 配置
  const extensions = useMemo(() => {
    const exts = [
      cursorExtension(),
      ...latex()
    ];
    if (citationsDataCount > 0) exts.push(citationsExtension(citationsData));
    return exts;
  }, [citationsDataCount, citationsData]);

  // 使用 useMemo 缓存 config 对象
  const config = useMemo(() => ({
    extensions,
  }), [extensions]);

  // 使用 useMemo 缓存 streaming 配置
  const streaming = useMemo(() => ({
    hasNextChunk: Boolean(typing),
    enableWordCaching,
    enableMathCaching,
    enableAnimation
  }), [typing, enableWordCaching, enableMathCaching, enableAnimation]);

  // 使用 useMemo 缓存 components 对象
  const components = useMemo(() => ({
    // @ts-ignore
    pre: CodeBlock,
    style: Null,
    script: Null,
    img: props.disableImage ? DisabledImage : Media,
    cursor: CursorComponent,
    // @ts-ignore
    citation: CitationComponent,
  }), [props.disableImage, CitationComponent]);

  // 使用 useMemo 缓存 dompurifyConfig
  const dompurifyConfig = useMemo(() =>
    allowHtml ? undefined : EMPTY_DOMPURIFY_CONFIG
    , [allowHtml]);

  return <ErrorBoundary fallback={<div className={prefixCls} style={{ fontSize: baseFontSize, lineHeight: baseLineHeight }}>{content}</div>}>
    <Markdown
      baseFontSize={baseFontSize}
      baseLineHeight={baseLineHeight}
      dompurifyConfig={dompurifyConfig}
      streaming={streaming}
      cursor={cursor}
      className={classnames(prefixCls, className)}
      components={components as unknown as InnerMarkdownProps['components']}
      content={content}
      config={config}
      {...restProps}
    /></ErrorBoundary>
});
