import { Accordion } from '@agentscope-ai/chat';
import { useProviderContext } from '@agentscope-ai/chat';
import { theme as AntdTheme } from 'antd'
import cls from 'classnames';


export interface IDeepThinking {
  /**
   * @description 深度思考过程的标题，用于描述思考的主题或方向
   * @descriptionEn Title of the deep thinking process for describing the topic or direction of thinking
   */
  title?: string;
  /**
   * @description 是否正在生成思考内容，影响显示状态和动画效果
   * @descriptionEn Whether the thinking content is being generated, affects display state and animation effects
   */
  loading?: boolean;
  /**
   * @description 深度思考的具体内容，包含思考过程和结果
   * @descriptionEn Specific content of deep thinking, including thinking process and results
   */
  content?: string;
  /**
   * @description 组件初始化时是否默认展开，控制初始显示状态
   * @descriptionEn Whether to expand by default when component initializes, controls initial display state
   */
  defaultOpen?: boolean;
  /**
   * @description 受控模式：控制组件是否展开
   * @descriptionEn Controlled mode: controls whether the component is expanded
   */
  open?: boolean;
  /**
   * @description 生成结束后是否自动关闭（默认 false）
   * @descriptionEn Whether to automatically close after generation is complete (default false)
   */
  autoCloseOnFinish?: boolean;
  /**
   * @description 内容区域的最大高度（单位：像素）
   * @descriptionEn Maximum height of the content area (in pixels)
   */
  maxHeight?: number;
  /**
   * @description 组件的CSS类名，用于自定义样式
   * @descriptionEn CSS class name for the component for custom styling
   */
  className?: string;
}

export default function (props: IDeepThinking) {
  const { theme: providerTheme, getPrefixCls } = useProviderContext();
  const prefixCls = getPrefixCls('accordion-deep-thinking');
  const isDarkMode = providerTheme?.algorithm === AntdTheme.darkAlgorithm;
  const icon = <img style={{ display: 'block', width: 16, height: 16, filter: isDarkMode ? 'invert(1)  brightness(100%) saturate(0%)' : '' }} src="https://img.alicdn.com/imgextra/i2/O1CN01QZgWRv1I4JM0BAZ9O_!!6000000000839-54-tps-56-56.apng" />
  
  // 构建标题文本
  let titleText = props.title || 'Deep thinking';
  if (props.loading) {
    titleText += '...';
  }
  
  // 构建标题
  const title = props.loading ? (
    <Accordion.SoftLightTitle>{titleText}</Accordion.SoftLightTitle>
  ) : titleText;

  // 构建 bodyStyle，添加 maxHeight 支持
  const bodyStyle: React.CSSProperties = props.maxHeight 
    ? { maxHeight: props.maxHeight, overflowY: 'auto' as const }
    : {};

  // 确定默认展开状态：如果设置了 autoCloseOnFinish 且不在 loading 状态，默认关闭
  const finalDefaultOpen = props.defaultOpen !== undefined 
    ? props.defaultOpen 
    : (props.autoCloseOnFinish && !props.loading) ? false : undefined;

  return <Accordion
    title={title}
    status={props.loading ? 'generating' : 'finished'}
    icon={props.loading ? icon : null}
    defaultOpen={finalDefaultOpen}
    open={props.open}
    bodyStyle={bodyStyle}
    inline
  >
    <div className={cls(prefixCls, props.className)}>{props.content || '...'}</div>
  </Accordion>
}



