import { GetProp, Upload, UploadFile } from 'antd';
import { ScrollToBottomOptions } from 'use-stick-to-bottom';
import { IChatAnywhereContext } from './ChatAnywhereProvider';

export interface TSession {
  /**
   * @description 会话的唯一标识符，用于区分不同的聊天会话
   * @descriptionEn Unique identifier for the session to distinguish different chat sessions
   */
  key: string;
  /**
   * @description 会话中的消息列表，按组进行组织
   * @descriptionEn Message list in the session, organized by groups
   */
  messages: TMessage[][];
  /**
   * @description 会话的显示名称
   * @descriptionEn Display name for the session
   */
  label: string;
}

export interface TMessageCard {
  /**
   * @description 卡片的唯一标识符
   * @descriptionEn Unique identifier for the card
   */
  id?: string;
  /**
   * @description 卡片的类型代码
   * @descriptionEn Type code for the card
   */
  code: string;
  /**
   * @description 卡片的渲染组件
   * @descriptionEn Rendering component for the card
   */
  component?: React.FC;
  /**
   * @description 卡片的数据内容
   * @descriptionEn Data content for the card
   */
  data?: string | any;
}

export interface TMessage {
  /**
   * @description 消息的唯一标识符
   * @descriptionEn Unique identifier for the message
   */
  id: string;
  /**
   * @description 消息的文本内容
   * @descriptionEn Text content of the message
   */
  content?: string;
  /**
   * @description 消息中的卡片组件配置
   * @descriptionEn Card component configuration in the message
   */
  cards?: TMessageCard[];
  /**
   * @description 消息的角色类型，区分用户、助手和系统消息
   * @descriptionEn Role type of the message to distinguish user, assistant, and system messages
   */
  role: 'user' | 'assistant' | 'system';
  /**
   * @description 消息的处理状态，影响显示效果
   * @descriptionEn Processing status of the message, affects display effects
   */
  msgStatus?: 'finished' | 'interrupted' | 'generating' | 'error';
}

export interface IChatAnywhereConfigUIConfig {
  /**
   * @description 是否启用窄屏模式，影响响应式布局
   * @descriptionEn Whether to enable narrow screen mode, affects responsive layout
   */
  narrowScreen?: boolean;
  /**
   * @description 背景样式配置
   * @descriptionEn Background style configuration
   */
  background?: string;
  /**
   * @description 自定义头部组件
   * @descriptionEn Custom header component
   */
  header?: React.ReactElement;
  /**
   * @description 快速输入组件，用于提供预设的输入选项
   * @descriptionEn Quick input component for providing preset input options
   */
  quickInput?: React.ReactElement | React.ReactElement[];
  /**
   * @description 应用logo组件
   * @descriptionEn Application logo component
   */
  logo?: React.ReactElement;
  /**
   * @description 欢迎页面组件
   * @descriptionEn Welcome page component
   */
  welcome?: React.ReactElement;
  /**
   * @description 免责声明组件或文本
   * @descriptionEn Disclaimer component or text
   */
  disclaimer?: React.ReactElement | string;
}

export interface IChatAnywhereConfigOnInput {
  /**
   * @description 设置输入框的变体
   * @descriptionEn Set the variant of the input field
   */
  variant?: 'default' | 'aigc';
  /**
   * @description 输入框前的UI组件
   * @descriptionEn UI component before the input field
   */
  beforeUI?: React.ReactElement;
  /**
   * @description 输入框后的UI组件
   * @descriptionEn UI component after the input field
   */
  afterUI?: React.ReactElement;
  /**
   * @description 更多前缀操作组件
   * @descriptionEn More prefix action components
   */
  morePrefixActions?: React.ReactElement | React.ReactElement[];
  /**
   * @description 是否隐藏输入框
   * @descriptionEn Whether to hide the input field
   */
  hide?: boolean;
  /**
   * @description 输入框头部组件
   * @descriptionEn Input field header components
   */
  header?: React.ReactElement | React.ReactElement[];
  /**
   * @description 是否启用上传组件的焦点可见性。仅未上传文件时有效，果已经上传文件了，则一定会展示
   * @descriptionEn Whether to enable the focus visibility of the upload component
   */
  enableHeaderFocusVisible?: boolean;
  /**
   * @description 提交消息时的回调函数
   * @descriptionEn Callback function when submitting messages
   */
  onSubmit(data: { query: string; fileList?: UploadFile[][] }): void;
  /**
   * @description 输入内容的最大长度限制
   * @descriptionEn Maximum length limit for input content
   */
  maxLength?: number;
  /**
   * @description 提交前的验证函数
   * @descriptionEn Validation function before submission
   */
  beforeSubmit?: () => Promise<Boolean>;
  /**
   * @description 是否支持缩放功能
   * @descriptionEn Whether to support zoom functionality
   */
  zoomable?: boolean;
  /**
   * @description 输入框的占位符文本
   * @descriptionEn Placeholder text for the input field
   */
  placeholder?: string;

  /**
   * @description 输入框是否禁用
   * @descriptionEn Whether the input field is disabled
   */
  disabled?: boolean;
}

export interface IChatAnywhereConfigOnUpload {
  /**
   * @description 上传组件的渲染类型，影响上传附件样式
   * @descriptionEn Render type for the upload component, affects the style of the uploaded attachment
   */
  renderType?: 'simple' | 'default';
  /**
   * @description 最大上传文件数量
   * @descriptionEn Maximum number of files to upload
   */
  maxCount?: GetProp<typeof Upload, 'maxCount'>;
  /**
   * @description 上传前的处理函数
   * @descriptionEn Pre-upload processing function
   */
  beforeUpload?: GetProp<typeof Upload, 'beforeUpload'>;
  /**
   * @description 自定义上传请求函数
   * @descriptionEn Custom upload request function
   */
  customRequest: GetProp<typeof Upload, 'customRequest'>;
  /**
   * @description 是否支持多文件上传
   * @descriptionEn Whether to support multiple file uploads
   */
  multiple?: boolean;
  /**
   * @description 接受的文件类型
   * @descriptionEn Accepted file types
   */
  accept?: string;
  /**
   * @description 上传按钮的图标
   * @descriptionEn Icon for the upload button
   */
  icon?: string | React.ReactElement;
  /**
   * @description 是否禁用上传组件
   * @descriptionEn Whether to disable the upload component
   */
  disabled?: boolean;
  /**
   * @description 上传组件的标题
   * @descriptionEn Title for the upload component
   */
  title?: string | React.ReactElement;
  /**
   * @description 上传组件的描述
   * @descriptionEn Description for the upload component
   */
  description?: string | React.ReactElement;
}

export interface IChatAnywhereConfig {
  /**
   * @description 卡片组件的配置映射，用于自定义不同类型卡片的渲染
   * @descriptionEn Card component configuration mapping for customizing rendering of different card types
   */
  cardConfig?: {
    [key: string]: React.FC<any>;
  };
  /**
   * @description UI界面的配置选项，用于自定义外观和布局
   * @descriptionEn UI interface configuration options for customizing appearance and layout
   */
  uiConfig?: IChatAnywhereConfigUIConfig;
  /**
   * @description 输入功能的配置选项
   * @descriptionEn Configuration options for input functionality
   */
  onInput: IChatAnywhereConfigOnInput;
  /**
   * @description 停止生成的回调函数
   * @descriptionEn Callback function for stopping generation
   */
  onStop?(): void;
  /**
   * @description 重新生成消息的回调函数
   * @descriptionEn Callback function for regenerating messages
   */
  onRegenerate?(msg: Partial<TMessage>): void;
  /**
   * @description 会话切换时的回调函数
   * @descriptionEn Callback function when switching sessions
   */
  onSessionKeyChange?(key: string): void;
  /**
   * @description 文件上传功能的配置选项
   * @descriptionEn Configuration options for file upload functionality
   */
  onUpload?: IChatAnywhereConfigOnUpload[];
}

export interface IChatAnywhereRef extends IChatAnywhereContext {
  /**
   * @description 设置输入框内容的方法
   * @descriptionEn Method to set input field content
   */
  setInputContent: (content: string) => void;
  /**
   * @description 滚动到底部的方法
   * @descriptionEn Method to scroll to bottom
   */
  scrollToBottom: (options?: ScrollToBottomOptions) => void;
  /**
   * @description 重新加载的方法
   * @descriptionEn Method to reload
   */
  reload: () => void;

  /**
   * @description 当前会话的消息列表
   * @descriptionEn Message list for the current session
   */
  messages: TMessage[];

  /**
   * @description 更新消息的方法
   * @descriptionEn Method to update message
   */
  updateMessage(message: Partial<TMessage> & { id: string }): void;
  updateMessage(id: string, message: Partial<TMessage> & { id: string }): void;

  /**
   * @description 获取当前消息列表的同步函数
   * @descriptionEn Synchronous function to get current message list
   */
  getMessages: () => TMessage[];

  /**
   * @description 删除消息的方法
   * @descriptionEn Method to remove message
   */
  removeMessage: (message: Partial<TMessage>) => void;

  /**
   * @description 删除所有消息的方法
   * @descriptionEn Method to remove all messages
   */
  removeAllMessages: () => void;

  /**
   * @description 是否正在加载状态，影响UI的交互性
   * @descriptionEn Whether in loading state, affects UI interactivity
   */
  loading: boolean;
  /**
   * @description 设置加载状态的状态更新函数
   * @descriptionEn State update function for setting loading state
   */
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  /**
   * @description 获取当前加载状态的同步函数
   * @descriptionEn Synchronous function to get current loading state
   */
  getLoading: () => boolean;

  /**
   * @description 是否禁用组件，影响所有交互功能
   * @descriptionEn Whether to disable the component, affects all interaction functionality
   */
  disabled: boolean;
  /**
   * @description 设置禁用状态的状态更新函数
   * @descriptionEn State update function for setting disabled state
   */
  setDisabled: React.Dispatch<React.SetStateAction<boolean>>;
  /**
   * @description 获取当前禁用状态的同步函数
   * @descriptionEn Synchronous function to get current disabled state
   */
  getDisabled: () => boolean;
}
