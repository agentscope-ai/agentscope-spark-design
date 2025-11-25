import type { AvatarProps } from 'antd';
import type { AnyObject } from '../Util/type';

type SemanticType = 'avatar' | 'content' | 'header' | 'footer';

export type BubbleContentType = React.ReactNode | AnyObject;

export interface BubbleProps<ContentType extends BubbleContentType = string>
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'content'> {
  /**
   * @description 自定义CSS类名前缀，用于样式隔离和主题定制
   * @descriptionEn Custom CSS class name prefix for style isolation and theme customization
   */
  prefixCls?: string;
  /**
   * @description 自定义根容器的CSS类名，用于覆盖默认样式
   * @descriptionEn Custom CSS class name for the root container to override default styles
   */
  rootClassName?: string;

  /**
   * @description 语义化样式对象，用于精确控制不同区域的样式
   * @descriptionEn Semantic style object for precise control of different area styles
   */
  styles?: Partial<Record<SemanticType, React.CSSProperties>>;
  /**
   * @description 语义化CSS类名，用于为不同区域添加自定义类名
   * @descriptionEn Semantic CSS class names for adding custom classes to different areas
   */
  classNames?: Partial<Record<SemanticType, string>>;

  /**
   * @description 用户头像配置，支持Antd Avatar属性或自定义React元素
   * @descriptionEn User avatar configuration, supports Antd Avatar props or custom React elements
   */
  avatar?: AvatarProps | React.ReactElement;
  /**
   * @description 是否显示加载状态，影响组件的视觉反馈
   * @descriptionEn Whether to display loading state, affects visual feedback of the component
   */
  loading?: boolean;
  /**
   * @description 气泡内容，支持文本、React元素或复杂数据结构
   * @descriptionEn Bubble content, supports text, React elements, or complex data structures
   */
  content?: BubbleContentType;

  /**
   * @description 自定义渲染卡片配置，用于展示特殊类型的内容
   * @descriptionEn Custom render card configuration for displaying special types of content
   */
  cards?: { code: string; data?: any; component?: any }[];

  /**
   * @description 消息处理状态，影响显示样式和交互行为
   * @descriptionEn Message processing status that affects display style and interaction behavior
   */
  msgStatus?: 'finished' | 'generating' | 'interrupted' | 'error';

  /**
   * @description 消息的唯一标识符，用于状态管理和事件处理
   * @descriptionEn Unique identifier for the message, used for state management and event handling
   */
  id?: any;

  /**
   * @description 是否是最后一条消息
   * @descriptionEn Whether the message is the last message
   */
  isLast?: boolean;
}
