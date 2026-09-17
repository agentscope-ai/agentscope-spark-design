import { XMarkdownProps } from '@ant-design/x-markdown';


export interface MarkdownProps {
  /**
   * @description 需要渲染的 Markdown 内容
   * @descriptionEn Markdown content to be rendered
   */
  content?: string;
  /**
   * @description 光标样式类型，支持点状、下划线或布尔值控制
   * @descriptionEn Cursor style type, supports dot, underline, or boolean control
   */
  cursor?: boolean | 'dot' | 'underline';
  /**
   * @description 基础字体大小，影响整个Markdown内容的字体大小
   * @descriptionEn Base font size that affects the font size of the entire Markdown content
   */
  baseFontSize?: number;
  /**
   * @description 基础行高，影响文本的行间距
   * @descriptionEn Base line height that affects text line spacing
   */
  baseLineHeight?: number;

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
   * @description 是否以原始文本形式显示，跳过Markdown解析
   * @descriptionEn Whether to display as raw text, skipping Markdown parsing
   */
  raw?: boolean;

  /**
   * @description 是否启用打字机效果，逐字显示内容
   * @descriptionEn Whether to enable typewriter effect for character-by-character display
   */
  typing?: boolean | number;


  /**
   * @description 组件的CSS类名
   * @descriptionEn CSS class name for the component
   */
  className?: string;
  animation?: boolean;
  /**
   * @description 淡入动画配置，仅 animation 开启时生效；fadeDuration 单位为毫秒（默认 200），easing 默认 ease-in-out。
   * @descriptionEn Fade-in options, effective only when animation is enabled; fadeDuration is in milliseconds (default 200), easing defaults to ease-in-out.
   */
  animationConfig?: NonNullable<XMarkdownProps['streaming']>['animationConfig'];
  
  components?: XMarkdownProps['components'];
  citations?: {
    title?: string;
    url?: string;
    content?: string;
    render?: (props: {
      text: string;
      url: string;
      title: string;
      content: string;
    }) => React.ReactNode;
  }[];
  citationsMap?: Record<
    string,
    {
      title?: string;
      url?: string;
      content?: string;
      render?: (props: {
        text: string;
        url: string;
        title: string;
        content: string;
      }) => React.ReactNode;
    }
  >;
}


export interface InnerMarkdownXProps extends XMarkdownProps {
  /**
   * @description 光标样式类型，支持点状、下划线或布尔值控制
   * @descriptionEn Cursor style type, supports dot, underline, or boolean control
   */
  cursor?: MarkdownProps['cursor'];
  animation?: MarkdownProps['animation'];
  animationConfig?: MarkdownProps['animationConfig'];
}