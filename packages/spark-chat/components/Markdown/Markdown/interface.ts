import type { Config as DOMPurifyConfig } from 'dompurify';
import type { DOMNode } from 'html-react-parser';
import type { MarkedExtension, Tokens } from 'marked';
import type { CSSProperties, JSX } from 'react';

export interface AnimationConfig {
  /**
   * @description 淡入动画的持续时间（毫秒）
   * @description The duration of the fade-in animation in milliseconds
   * @default 200
   */
  fadeDuration?: number;
  /**
   * @description 动画的缓动函数
   * @description Easing function for the animation
   * @default 'ease-in-out'
   */
  easing?: string;
}

type Token = Tokens.Generic;

interface SteamingOption {
  /**
   * @description 指示是否还有后续内容块，为 false 时刷新所有缓存并完成渲染
   * @description Indicates whether more content chunks are expected. When false, flushes all cached content and completes rendering
   * @default false
   */
  hasNextChunk?: boolean;
  /**
   * @description 为块级元素（p、li、h1、h2、h3、h4）启用文字淡入动画
   * @description Enables text fade-in animation for block elements (p, li, h1, h2, h3, h4)
   * @default false
   */
  enableAnimation?: boolean;
  /**
   * @description 文字出现动画效果的配置
   * @description Configuration for text appearance animation effects
   */
  animationConfig?: AnimationConfig;
  /**
   * @description 启用英文单词缓存，单词会在遇到空格或标点后才整体显示
   * @description Enable English word caching, words will be displayed as a whole after encountering spaces or punctuation
   * @default false
   */
  enableWordCaching?: boolean;
  /**
   * @description 启用 LaTeX 公式缓存，公式会在完整后才整体显示（$...$、$$...$$、\(...\)、\[...\]）
   * @description Enable LaTeX formula caching, formulas will be displayed as a whole when complete ($...$, $$...$$, \(...\), \[...\])
   * @default true
   */
  enableMathCaching?: boolean;
}

type StreamStatus = 'loading' | 'done';

type ComponentProps<
  T extends Record<string, unknown> = Record<string, unknown>,
> = React.HTMLAttributes<HTMLElement> & {
  /**
   * @description 组件对应的 DOM 节点，包含解析后的 DOM 节点信息
   * @description Component Element from html-react-parser, contains the parsed DOM node information
   */
  domNode: DOMNode;
  /**
   * @description 流式状态，`loading` 表示正在加载，`done` 表示加载完成
   * @description Streaming status, `loading` indicates streaming in progress, `done` indicates streaming complete
   */
  streamStatus: StreamStatus;
} & T;

interface MarkdownProps {
  citations?: {
    /**
     * @description 引用的标题
     * @descriptionEn Title of the citation
     */
    title?: string;
    /**
     * @description 引用的URL地址
     * @descriptionEn URL address of the citation
     */
    url?: string;
    /**
     * @description 引用的内容
     * @descriptionEn Content of the citation
     */
    content?: string;
    /**
     * @description 引用的渲染函数
     * @descriptionEn Rendering function of the citation
     */
    render?: (props: {
      text: string;
      url: string;
      title: string;
      content: string;
    }) => React.ReactNode;
  }[];
  /**
   * @description 引用映射对象，用于快速查找引用信息
   * @descriptionEn Citation mapping object for quick lookup of reference information
   */
  citationsMap?: Record<
    string,
    {
      /**
       * @description 引用的标题
       * @descriptionEn Title of the citation
       */
      title?: string;
      /**
       * @description 引用的URL地址
       * @descriptionEn URL address of the citation
       */
      url?: string;
      /**
       * @description 引用的内容
       * @descriptionEn Content of the citation
       */
      content?: string;
      /**
       * @description 引用的渲染函数
       * @descriptionEn Rendering function of the citation
       */
      render?: (props: {
        text: string;
        url: string;
        title: string;
        content: string;
      }) => React.ReactNode;
    }
  >;
  /**
   * @description 光标样式类型，支持点状、下划线或布尔值控制
   * @description Cursor style type, supports dot, underline, or boolean control
   */
  cursor?: boolean | 'dot' | 'underline';
  /**
   * @description 基础字体大小，影响整个Markdown内容的字体大小
   * @description Base font size that affects the font size of the entire Markdown content
   */
  baseFontSize?: number;
  /**
   * @description 基础行高，影响文本的行间距
   * @description Base line height that affects text line spacing
   */
  baseLineHeight?: number;
  /**
   * @description 需要渲染的 Markdown 内容
   * @description Markdown content to be rendered
   */
  content?: string;
  /**
   * @description Markdown 内容，作为 `content` 属性的别名
   * @description Markdown content, alias for `content` property
   */
  children?: string;
  /**
   * @description 用于替换 HTML 元素的自定义 React 组件映射，组件会接收 domNode、streamStatus 等属性
   * @description Custom React components to replace HTML elements, components receive domNode, streamStatus, etc.
   */
  components?: {
    [tagName: string]:
      | React.ComponentType<ComponentProps>
      | keyof JSX.IntrinsicElements;
  };
  /**
   * @description 流式渲染行为的配置
   * @description Configuration for streaming rendering behavior
   */
  streaming?: SteamingOption;
  /**
   * @description Markdown 解析和扩展的 Marked.js 配置
   * @description Marked.js configuration for Markdown parsing and extensions
   */
  config?: MarkedExtension;
  /**
   * @description 根元素的额外 CSS 类名
   * @description Additional CSS class name for the root container
   */
  rootClassName?: string;
  /**
   * @description 根容器的额外 CSS 类名
   * @description Additional CSS class name for the root container
   */
  className?: string;
  /**
   * @description 段落元素的自定义 HTML 标签，防止自定义组件包含块级元素时的验证错误
   * @description Custom HTML tag for paragraph elements, prevents validation errors when custom components contain block-level elements
   * @default 'p'
   */
  paragraphTag?: keyof JSX.IntrinsicElements;
  /**
   * @description 根容器的内联样式
   * @description Inline styles for the root container
   */
  style?: CSSProperties;
  /**
   * @description 组件的 CSS 类名前缀
   * @description CSS class name prefix for the component
   */
  prefixCls?: string;
  /**
   * @description 是否为所有锚点标签添加 `target="_blank"`
   * @description Whether to add `target="_blank"` to all anchor tags
   * @default false
   */
  openLinksInNewTab?: boolean;
  /**
   * @description HTML 净化和 XSS 防护的 DOMPurify 配置
   * @description DOMPurify configuration for HTML sanitization and XSS protection
   */
  dompurifyConfig?: DOMPurifyConfig;
}

export type { ComponentProps, MarkdownProps, StreamStatus, Token, Tokens };
