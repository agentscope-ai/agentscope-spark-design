import { UploadProps } from 'antd';
import { IAgentScopeRuntimeWebUISession } from './ISessions';

/**
 * @description API 配置选项
 * @descriptionEn API configuration options
 */
export interface IAgentScopeRuntimeWebUIAPIOptions {
  /**
   * @description 基础URL
   * @descriptionEn Base URL
   */
  baseURL: string;
  /**
   * @description 鉴权参数
   * @descriptionEn Authorization Token
   */
  token?: string;
}

/**
 * @description 主题配置选项
 * @descriptionEn Theme configuration options
 */
export interface IAgentScopeRuntimeWebUIThemeOptions {
  /**
   * @description 主题色
   * @descriptionEn Primary color
   */
  colorPrimary?: string;
  /**
   * @description 背景色
   * @descriptionEn Background color
   */
  colorBgBase?: string;
  /**
   * @description 文本颜色
   * @descriptionEn Text color
   */
  colorTextBase?: string;
  /**
   * @description 是否开启暗色模式
   * @descriptionEn Enable dark mode
   */
  darkMode?: boolean;
  /**
   * @description 是否开启窄屏模式
   * @descriptionEn Enable narrow mode
   */
  narrowMode?: boolean;
  /**
   * @description CSS 类名前缀
   * @descriptionEn CSS class name prefix
   */
  prefix?: string;
  /**
   * @description 左侧头部配置
   * @descriptionEn Left header configuration
   */
  leftHeader?: IAgentScopeRuntimeWebUILeftHeader | React.ReactElement;
  /**
   * @description 右侧头部配置
   * @descriptionEn Right header configuration
   */
  rightHeader?: React.ReactElement | React.ReactElement[];
  /**
   * @description 排版配置
   * @descriptionEn Typography configuration
   */
  typography?: IAgentScopeRuntimeWebUITypography;
}

export interface IAgentScopeRuntimeWebUITypography {
  /**
   * @description 基础字体大小
   * @descriptionEn Base font size
   */
  baseFontSize?: number;
  /**
   * @description 基础行高
   * @descriptionEn Base line height
   */
  baseLineHeight?: number;
}

export interface IAgentScopeRuntimeWebUILeftHeader {
  /**
   * @description Logo 图片地址
   * @descriptionEn Logo image URL
   */
  logo?: string;
  /**
   * @description 标题
   * @descriptionEn Title
   */
  title?: string;
}

/**
 * @description 欢迎页配置选项
 * @descriptionEn Welcome page configuration options
 */
export interface IAgentScopeRuntimeWebUIWelcomeOptions {
  /**
   * @description 问候语
   * @descriptionEn Greeting message
   */
  greeting?: string | React.ReactElement;
  /**
   * @description 描述信息
   * @descriptionEn Description text
   */
  description?: string | React.ReactElement;
  /**
   * @description 头像
   * @descriptionEn Avatar
   */
  avatar?: string | React.ReactElement;
  /**
   * @description 提示语列表
   * @descriptionEn Prompt list
   */
  prompts?: (
    | { label?: string; value: string; icon?: React.ReactElement }
    | string
  )[];
  /**
   * @description 自定义渲染函数
   * @descriptionEn Custom render function
   */
  render?: (
    props: Pick<
      IAgentScopeRuntimeWebUIWelcomeOptions,
      'greeting' | 'description' | 'avatar' | 'prompts'
    > & { onSubmit: (data: { query: string; fileList?: any[] }) => void },
  ) => React.ReactElement;
}

/**
 * @description 输入框配置选项
 * @descriptionEn Sender configuration options
 */
export interface IAgentScopeRuntimeWebUISenderOptions {
  /**
   * @description 输入框占位符
   * @descriptionEn Input placeholder
   */
  placeholder?: string;
  /**
   * @description 最大输入长度
   * @descriptionEn Maximum input length
   */
  maxLength?: number;
  /**
   * @description 是否可缩放
   * @descriptionEn Whether scalable
   */
  scalable?: boolean;
  /**
   * @description 输入框前置UI
   * @descriptionEn UI before input
   */
  beforeUI?: React.ReactElement | React.ReactElement[];
  /**
   * @description 输入框后置UI
   * @descriptionEn UI after input
   */
  afterUI?: React.ReactElement | React.ReactElement[];
  /**
   * @description 提交前的钩子函数
   * @descriptionEn Hook function before submit
   */
  beforeSubmit?: () => Promise<Boolean>;
  /**
   * @description 提交回调函数
   * @descriptionEn Submit callback function
   */
  onSubmit?: (data: { query: string; fileList?: any[] }) => void;
  /**
   * @description 取消回调函数
   * @descriptionEn Cancel callback function
   */
  onCancel?: () => void;
  /**
   * @description 免责声明
   * @descriptionEn Disclaimer
   */
  disclaimer?: string | React.ReactElement;
  /**
   * @description 附件配置
   * @descriptionEn Attachments configuration
   */
  attachments?: IAgentScopeRuntimeWebUISenderAttachmentsOptions;
}

/**
 * @description 附件配置选项
 * @descriptionEn Attachments configuration options
 */
export interface IAgentScopeRuntimeWebUISenderAttachmentsOptions {
  /**
   * @description 自定义上传请求
   * @descriptionEn Custom upload request
   */
  customRequest?: UploadProps['customRequest'];
}

/**
 * @description 会话 API 接口
 * @descriptionEn Session API interface
 */
export interface IAgentScopeRuntimeWebUISessionAPI {
  /**
   * @description 获取会话列表
   * @descriptionEn Get session list
   */
  getSessionList?: () => Promise<IAgentScopeRuntimeWebUISession[]>;
  /**
   * @description 获取会话详情
   * @descriptionEn Get session details
   */
  getSession?: (sessionId: string) => Promise<IAgentScopeRuntimeWebUISession>;
  /**
   * @description 更新会话
   * @descriptionEn Update session
   */
  updateSession?: (session: Partial<IAgentScopeRuntimeWebUISession>) => Promise<IAgentScopeRuntimeWebUISession[]>;
  /**
   * @description 创建会话
   * @descriptionEn Create session
   */
  createSession?: (session: Partial<IAgentScopeRuntimeWebUISession>) => Promise<IAgentScopeRuntimeWebUISession[]>;
  /**
   * @description 删除会话
   * @descriptionEn Remove session
   */
  removeSession?: (session: Partial<IAgentScopeRuntimeWebUISession>) => Promise<IAgentScopeRuntimeWebUISession[]>;
}

/**
 * @description 会话配置选项
 * @descriptionEn Session configuration options
 */
export interface IAgentScopeRuntimeWebUISessionOptions {
  /**
   * @description 是否支持多会话
   * @descriptionEn Whether to support multiple sessions
   */
  multiple?: boolean;
  /**
   * @description 会话 API 接口
   * @descriptionEn Session API interface
   */
  api: IAgentScopeRuntimeWebUISessionAPI;
}

/**
 * @description 自定义卡片组件配置
 * @descriptionEn Custom cards component configuration
 */
export interface IAgentScopeRuntimeWebUICardsOptions {
  /**
   * @description 卡片组件映射表，key 为卡片类型，value 为对应的 React 组件
   * @descriptionEn Card component mapping, key is card type, value is corresponding React component
   */
  [key: string]: React.FC<any>;
}

/**
 * @description AgentScope Runtime WebUI 主配置选项
 * @descriptionEn AgentScope Runtime WebUI main configuration options
 */
export interface IAgentScopeRuntimeWebUIOptions {
  /**
   * @description API 配置
   * @descriptionEn API configuration
   */
  api: IAgentScopeRuntimeWebUIAPIOptions;
  /**
   * @description 主题配置
   * @descriptionEn Theme configuration
   */
  theme?: IAgentScopeRuntimeWebUIThemeOptions;
  /**
   * @description 欢迎页配置
   * @descriptionEn Welcome page configuration
   */
  welcome?: IAgentScopeRuntimeWebUIWelcomeOptions;
  /**
   * @description 输入框配置
   * @descriptionEn Sender configuration
   */
  sender?: IAgentScopeRuntimeWebUISenderOptions;
  /**
   * @description 会话配置
   * @descriptionEn Session configuration
   */
  session: IAgentScopeRuntimeWebUISessionOptions;
  /**
   * @description 自定义卡片配置
   * @descriptionEn Custom cards configuration
   */
  cards?: IAgentScopeRuntimeWebUICardsOptions;
}

/**
 * @description 输入框上下文状态接口
 * @descriptionEn Input context state interface
 */
export interface IAgentScopeRuntimeWebUIInputContext {
  /**
   * @description 加载状态
   * @descriptionEn Loading state
   */
  loading: boolean;
  /**
   * @description 设置加载状态
   * @descriptionEn Set loading state
   */
  setLoading: (loading: boolean) => void;
  /**
   * @description 获取加载状态
   * @descriptionEn Get loading state
   */
  getLoading: () => boolean;
  /**
   * @description 禁用状态
   * @descriptionEn Disabled state
   */
  disabled: boolean;
  /**
   * @description 设置禁用状态
   * @descriptionEn Set disabled state
   */
  setDisabled: (disabled: boolean) => void;
  /**
   * @description 获取禁用状态
   * @descriptionEn Get disabled state
   */
  getDisabled: () => boolean;
}

/**
 * @description 输入数据接口
 * @descriptionEn Input data interface
 */
export interface IAgentScopeRuntimeWebUIInputData {
  /**
   * @description 查询文本
   * @descriptionEn Query text
   */
  query: string;
  /**
   * @description 文件列表
   * @descriptionEn File list
   */
  fileList?: UploadProps['fileList'];
}
