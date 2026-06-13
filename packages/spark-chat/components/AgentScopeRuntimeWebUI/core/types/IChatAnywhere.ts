import { UploadProps } from 'antd';
import {
  IAgentScopeRuntimeMessage,
  IAgentScopeRuntimeRequest,
  IAgentScopeRuntimeResponse,
  IContent,
} from '../AgentScopeRuntime/types';
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
  baseURL?: string;
  /**
   * @description 鉴权参数
   * @descriptionEn Authorization Token
   */
  token?: string;
  /**
   * @description 请求函数
   * @descriptionEn Request function
   * @param data
   * @returns
   */
  fetch?: (data: {
    input: any[];
    biz_params?: IAgentScopeRuntimeWebUIInputData['biz_params'];
    signal?: AbortSignal;
  }) => Promise<Response>;

  /**
   * @description 取消当前会话生成
   * @descriptionEn Cancel current session generation
   */
  cancel?: (data: { session_id: string }) => void;

  /**
   * @description 重连会话流式响应
   * @descriptionEn Reconnect session stream response
   */
  reconnect?: (data: {
    session_id: string;
    signal?: AbortSignal;
  }) => Promise<Response>;

  /**
   * @description 是否在请求中携带历史消息
   * @descriptionEn Whether to include history messages in request
   */
  enableHistoryMessages?: boolean;

  /**
   * @description 自定义流式数据解析函数（默认 JSON.parse）
   * @descriptionEn Custom parser for stream chunks (default JSON.parse)
   */
  responseParser?: (
    response: Response,
  ) => IAgentScopeRuntimeResponse | IAgentScopeRuntimeMessage | IContent;

  /**
   * @description 自定义媒体资源地址转换（如加签、CDN 替换）
   * @descriptionEn Custom media URL transformer (e.g. sign URL, replace CDN domain)
   */
  replaceMediaURL?: (url: string) => string;

  /**
   * @description 自定义文件点击事件（桌面端可通过此钩子调用原生 API 打开文件链接），不传则默认 window.open
   * @descriptionEn Custom file click handler (desktop apps can use native APIs to open file URLs), defaults to window.open
   */
  onFileCardClick?: (file: { url?: string; name?: string; size?: number }) => void;
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
  /**
   * @description 背景色
   * @descriptionEn Background color
   */
  background?: string;
  /**
   * @description 气泡列表配置
   * @descriptionEn Bubble list configuration
   */
  bubbleList?: {
    /**
     * @description 是否启用分页
     * @descriptionEn Whether to enable pagination
     */
    pagination?: boolean;
  };
  /**
   * @description 语言
   * @descriptionEn Language
   * @default 'en'
   */
  locale?: 'en' | 'cn';
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
   * @description 昵称
   * @descriptionEn Nickname
   */
  nick?: string | React.ReactElement;
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
  /**
   * @description 输入框前缀 UI，显示在输入框底部操作栏
   * @descriptionEn Prefix UI displayed in the bottom action bar of the input
   */
  prefix?: React.ReactNode | React.ReactNode[];
  /**
   * @description 是否支持语音输入
   * @descriptionEn Whether to allow speech input
   */
  allowSpeech?: boolean;
  /**
   * @description 建议列表
   * @descriptionEn Suggestions list
   * @example [
   *   { label: 'Draw a picture', value: 'draw' },
   *   { label: 'Check some knowledge', value: 'knowledge' },
   * ]
   */
  suggestions?: { label?: string | React.ReactNode; value: string }[];
}

/**
 * @description 附件配置选项
 * @descriptionEn Attachments configuration options
 */
export interface IAgentScopeRuntimeWebUISenderAttachmentsOptions
  extends UploadProps {
  /**
   * @description 触发器
   * @descriptionEn Trigger
   */
  trigger?: React.FC<{
    disabled?: boolean;
  }>;
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
  updateSession?: (
    session: Partial<IAgentScopeRuntimeWebUISession>,
  ) => Promise<IAgentScopeRuntimeWebUISession[]>;
  /**
   * @description 创建会话
   * @descriptionEn Create session
   */
  createSession?: (
    session: Partial<IAgentScopeRuntimeWebUISession>,
  ) => Promise<IAgentScopeRuntimeWebUISession[]>;
  /**
   * @description 删除会话
   * @descriptionEn Remove session
   */
  removeSession?: (
    session: Partial<IAgentScopeRuntimeWebUISession>,
  ) => Promise<IAgentScopeRuntimeWebUISession[]>;
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
   * @description 隐藏内置的会话列表面板，由外部自行实现
   * @descriptionEn Hide the built-in session list panel, allowing external custom implementation
   */
  hideBuiltInSessionList?: boolean;
  /**
   * @description 会话 API 接口
   * @descriptionEn Session API interface
   */
  api?: IAgentScopeRuntimeWebUISessionAPI;
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
  /**
   * @description 自定义工具渲染
   * @descriptionEn Custom tool render
   */
  customToolRenderConfig?: IAgentScopeRuntimeWebUICardsOptions;

  /**
   * @description 操作按钮配置（助手消息）
   * @descriptionEn Actions configuration (assistant messages)
   */
  actions?: IAgentScopeRuntimeWebUIActionsOptions;

  /**
   * @description 用户消息操作按钮配置
   * @descriptionEn Actions configuration (user messages)
   */
  requestActions?: IAgentScopeRuntimeWebUIRequestActionsOptions;

  /**
   * @description 用户请求气泡自定义槽。可整段替换或在气泡前后追加节点。
   * @descriptionEn Customization slots for the user request bubble: whole-bubble render override and before/after slots.
   */
  request?: IAgentScopeRuntimeWebUIRequestOptions;

  /**
   * @description AI 响应气泡自定义槽。可整段替换或在气泡前后追加节点。
   * @descriptionEn Customization slots for the assistant response bubble: whole-bubble render override and before/after slots.
   */
  response?: IAgentScopeRuntimeWebUIResponseOptions;
}

/**
 * @description 用户请求气泡前后追加的插槽项
 * @descriptionEn Prepend/append slot item rendered around the user request bubble.
 */
export interface IAgentScopeRuntimeWebUIRequestSlot {
  /** 稳定 id,用于 React key 与去重 / Stable id for React key + de-duplication. */
  id?: string;
  /** 排序权重,小在前;默认 100 / Order weight, smaller renders first; defaults to 100. */
  order?: number;
  /** 渲染函数,可访问当前请求数据;返回 null 表示该气泡不渲染本槽 / Render fn receiving the current request data; returning null skips this bubble. */
  render: (ctx: { data: IAgentScopeRuntimeRequest }) => React.ReactNode;
}

/**
 * @description 用户请求气泡自定义槽配置
 * @descriptionEn Customization options for the user request bubble.
 */
export interface IAgentScopeRuntimeWebUIRequestOptions {
  /**
   * @description 整段替换默认 user 气泡。调用 fallback() 可拿到 SDK 默认渲染。
   * @descriptionEn Replace the default user bubble entirely. Call fallback() to obtain the SDK default render.
   */
  render?: (ctx: {
    data: IAgentScopeRuntimeRequest;
    fallback: () => React.ReactNode;
  }) => React.ReactNode;
  /**
   * @description 在 user 气泡之前追加的插槽列表(按 order 排序)
   * @descriptionEn Slots rendered above the user bubble (sorted by order).
   */
  prepend?: IAgentScopeRuntimeWebUIRequestSlot[];
  /**
   * @description 在 user 气泡之后追加的插槽列表(按 order 排序)
   * @descriptionEn Slots rendered below the user bubble (sorted by order).
   */
  append?: IAgentScopeRuntimeWebUIRequestSlot[];
}

/**
 * @description AI 响应气泡前后追加的插槽项
 * @descriptionEn Prepend/append slot item rendered around the assistant response bubble.
 */
export interface IAgentScopeRuntimeWebUIResponseSlot {
  id?: string;
  order?: number;
  render: (ctx: {
    data: IAgentScopeRuntimeResponse;
    isLast?: boolean;
  }) => React.ReactNode;
}

/**
 * @description AI 响应气泡自定义槽配置
 * @descriptionEn Customization options for the assistant response bubble.
 */
export interface IAgentScopeRuntimeWebUIResponseOptions {
  /**
   * @description 整段替换默认 AI 气泡。调用 fallback() 可拿到 SDK 默认渲染。
   * @descriptionEn Replace the default AI bubble entirely. Call fallback() to obtain the SDK default render.
   */
  render?: (ctx: {
    data: IAgentScopeRuntimeResponse;
    isLast?: boolean;
    fallback: () => React.ReactNode;
  }) => React.ReactNode;
  prepend?: IAgentScopeRuntimeWebUIResponseSlot[];
  append?: IAgentScopeRuntimeWebUIResponseSlot[];
}

export interface IAgentScopeRuntimeWebUIRequestActionsOptions {
  /**
   * @description 操作按钮列表
   * @descriptionEn Actions button list
   */
  list?: {
    icon?: React.ReactElement;
    children?: React.ReactElement;
    render?: ({ data }: { data: IAgentScopeRuntimeRequest }) => React.ReactElement;
    onClick?: ({ data }: { data: IAgentScopeRuntimeRequest }) => void;
  }[];
}

export interface IAgentScopeRuntimeWebUIActionsOptions {
  /**
   * @description 操作按钮列表（左侧）
   * @descriptionEn Actions button list (left side)
   */
  list: {
    icon?: React.ReactElement;
    children?: React.ReactElement;
    render?: ({
      data,
    }: {
      data: IAgentScopeRuntimeResponse;
    }) => React.ReactElement;
    onClick?: ({ data }: { data: IAgentScopeRuntimeResponse }) => void;
  }[];

  /**
   * @description 右侧操作按钮列表；不传时默认展示 token 用量；传空数组或 false 隐藏右侧
   * @descriptionEn Right-side actions; defaults to token usage; pass [] or false to hide
   */
  right?: false | {
    icon?: React.ReactElement;
    children?: React.ReactElement;
    render?: ({ data }: { data: IAgentScopeRuntimeResponse }) => React.ReactElement;
    onClick?: ({ data }: { data: IAgentScopeRuntimeResponse }) => void;
  }[];

  /**
   * @description 是否显示重新生成按钮
   * @descriptionEn Whether to show the replace button
   */
  replace?: boolean;
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
  loading: boolean | string;
  /**
   * @description 设置加载状态
   * @descriptionEn Set loading state
   */
  setLoading: (loading: boolean | string) => void;
  /**
   * @description 获取加载状态
   * @descriptionEn Get loading state
   */
  getLoading: () => boolean | string;
  /**
   * @description 禁用状态
   * @descriptionEn Disabled state
   */
  disabled: boolean | string;
  /**
   * @description 设置禁用状态
   * @descriptionEn Set disabled state
   */
  setDisabled: (disabled: boolean) => void;
  /**
   * @description 获取禁用状态
   * @descriptionEn Get disabled state
   */
  getDisabled: () => boolean | string;
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
  fileList?: (UploadProps['fileList'][number] & { file_id?: string })[];
  /**
   * @description 业务参数
   * @descriptionEn Business parameters
   */
  biz_params?: {
    user_prompt_params?: Record<string, string>;
  };
}
