import { UploadProps } from 'antd';
import type { SenderComponents } from '../../../Sender';
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
    mentions?: IAgentScopeRuntimeWebUISenderMentionData[];
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
  onFileCardClick?: (file: {
    url?: string;
    name?: string;
    size?: number;
  }) => void;
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
    /**
     * @description 用户消息锚点配置
     * @descriptionEn User message anchor configuration
     */
    userMessageAnchors?: IAgentScopeRuntimeWebUIUserMessageAnchorsOptions;
  };
  /**
   * @description 语言
   * @descriptionEn Language
   * @default 'en'
   */
  locale?: 'en' | 'cn';
}

export interface IAgentScopeRuntimeWebUIUserMessageAnchorsOptions {
  /**
   * @description 锚点导航样式：minimap 为右侧横杠缩略图，navigator 为上/目录/下三按钮导航
   * @descriptionEn Anchor navigation style: minimap renders right-side bars, navigator renders up/directory/down buttons
   * @default 'minimap'
   */
  variant?: 'minimap' | 'navigator';
  /**
   * @description 是否展示用户消息锚点
   * @descriptionEn Whether to show user message anchors
   * @default true
   */
  enabled?: boolean;
  /**
   * @description 至少多少条用户消息时展示锚点
   * @descriptionEn Minimum user message count before showing anchors
   * @default 3
   */
  minCount?: number;
  /**
   * @description 导航数量徽标展示上限，超过后展示为 `${badgeMaxCount}+`
   * @descriptionEn Maximum count shown in the navigator badge; larger counts render as `${badgeMaxCount}+`
   * @default 99
   */
  badgeMaxCount?: number;
  /**
   * @description 锚点之间的最小展示间距，单位 px；距离更近时会聚合展示
   * @descriptionEn Minimum visual gap between anchors in px; closer anchors are grouped
   * @default 6
   */
  minGap?: number;
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

export interface IAgentScopeRuntimeWebUISenderActionInfo {
  value: string;
  count: number;
  maxLength?: number;
  loading?: boolean | string;
  disabled?: boolean | string;
  sendDisabled: boolean;
}

/**
 * @description 输入框中的通用提及项
 * @descriptionEn Generic mention item used by the sender
 */
export interface IAgentScopeRuntimeWebUISenderMentionItem {
  /**
   * @description 提交时使用的值
   * @descriptionEn Value used when submitting the mention
   */
  value: string;
  /**
   * @description 候选项和胶囊中展示的内容，默认使用 value
   * @descriptionEn Content displayed in the option and capsule, defaults to value
   */
  label?: React.ReactNode;
  /**
   * @description 候选项和胶囊中展示的图标
   * @descriptionEn Icon displayed in the option and capsule
   */
  icon?: React.ReactNode;
  /**
   * @description 可选的业务类型，例如 file 或 folder
   * @descriptionEn Optional business type, for example file or folder
   */
  type?: string;
  /**
   * @description 是否禁用该候选项
   * @descriptionEn Whether this option is disabled
   */
  disabled?: boolean;
}

/**
 * @description 可安全序列化并传递给业务请求的提及数据
 * @descriptionEn Serializable mention data passed to business requests
 */
export interface IAgentScopeRuntimeWebUISenderMentionData {
  value: string;
  type?: string;
}

export interface IAgentScopeRuntimeWebUISenderBeforeSubmitResult {
  /**
   * @description 是否继续由组件提交当前消息
   * @descriptionEn Whether the component should continue submitting
   */
  proceed: boolean;
  /**
   * @description 可选的最终提交文本
   * @descriptionEn Optional final query override
   */
  query?: string;
  /**
   * @description 即使中止提交也清空输入区，例如消息已转入宿主队列
   * @descriptionEn Clear the sender even when submission is intercepted, for example after host-side queueing
   */
  clear?: boolean;
}

/**
 * @description 输入框提及配置
 * @descriptionEn Sender mention configuration
 */
export interface IAgentScopeRuntimeWebUISenderMentionsOptions {
  /**
   * @description 静态候选项或按需加载候选项的函数
   * @descriptionEn Static items or a function that lazily loads items
   */
  items:
    | IAgentScopeRuntimeWebUISenderMentionItem[]
    | ((context: {
        signal: AbortSignal;
      }) =>
        | IAgentScopeRuntimeWebUISenderMentionItem[]
        | Promise<IAgentScopeRuntimeWebUISenderMentionItem[]>);
  /**
   * @description 触发字符，默认为 @
   * @descriptionEn Trigger character, defaults to @
   */
  trigger?: string;
  /**
   * @description 最多展示的候选项数量，默认为 50
   * @descriptionEn Maximum number of visible options, defaults to 50
   */
  maxOptions?: number;
  /**
   * @description 无匹配候选项时展示的内容
   * @descriptionEn Content displayed when no option matches
   */
  emptyText?: React.ReactNode;
  /**
   * @description 候选项加载中展示的内容
   * @descriptionEn Content displayed while options are loading
   */
  loadingText?: React.ReactNode;
  /**
   * @description 胶囊展示位置，默认为 header；inline 模式会把格式化后的文本写回输入值
   * @descriptionEn Capsule display mode. Defaults to header; inline mode writes formatted text back to the input value
   */
  displayMode?: 'header' | 'inline';
  /**
   * @description inline 模式下生成提交文本的方法
   * @descriptionEn Builds the submitted text inserted for an inline mention
   */
  getInsertText?: (
    item: IAgentScopeRuntimeWebUISenderMentionItem,
    trigger: string,
  ) => string;
  /**
   * @description 是否缓存异步候选项，默认为 true；设为 false 时每次打开重新加载
   * @descriptionEn Whether to cache lazy items. Defaults to true; false reloads whenever the menu opens
   */
  cacheItems?: boolean;
  /**
   * @description 是否允许重复选择相同 value，默认为 false
   * @descriptionEn Whether the same value can be selected more than once. Defaults to false
   */
  allowDuplicates?: boolean;
  /**
   * @description 已选项变化回调
   * @descriptionEn Callback fired when selected mentions change
   */
  onChange?: (items: IAgentScopeRuntimeWebUISenderMentionItem[]) => void;
}

/**
 * @description 输入框配置选项
 * @descriptionEn Sender configuration options
 */
export interface IAgentScopeRuntimeWebUISenderOptions {
  /**
   * @description 自定义输入组件等发送器内部组件
   * @descriptionEn Custom sender internals such as the input component
   */
  components?: SenderComponents;
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
   * @description 是否显示字符数，默认在设置 maxLength 时显示
   * @descriptionEn Whether to show character count, defaults to true when maxLength is set
   */
  showCharacterCount?: boolean;
  /**
   * @description 自定义字符数渲染
   * @descriptionEn Custom character count renderer
   */
  characterCountRender?: (
    info: IAgentScopeRuntimeWebUISenderActionInfo,
  ) => React.ReactNode;
  /**
   * @description 右下角操作区附加内容，展示在字符数右侧、发送按钮左侧
   * @descriptionEn Extra content in the bottom-right action area, placed after character count and before send button
   */
  actionAffix?:
    | React.ReactNode
    | ((info: IAgentScopeRuntimeWebUISenderActionInfo) => React.ReactNode);
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
  beforeSubmit?: (
    data: IAgentScopeRuntimeWebUIInputData,
  ) => Promise<boolean | IAgentScopeRuntimeWebUISenderBeforeSubmitResult>;
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
   * @description 超过 maxLength 时自动转 txt 附件上传配置
   * @descriptionEn Upload text over maxLength as a txt attachment automatically
   */
  longTextUpload?: false | IAgentScopeRuntimeWebUILongTextUploadOptions;
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
  /**
   * @description 通用提及配置，例如通过 @ 选择文件或文件夹路径
   * @descriptionEn Generic mention configuration, for example selecting file or folder paths with @
   */
  mentions?: IAgentScopeRuntimeWebUISenderMentionsOptions;
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
 * @description 超过 sender.maxLength 时自动转 txt 附件上传配置
 * @descriptionEn Upload text over sender.maxLength as a txt attachment automatically
 */
export interface IAgentScopeRuntimeWebUILongTextUploadOptions {
  /**
   * @description 是否开启，默认为 true；设为 false 可关闭
   * @descriptionEn Whether enabled, defaults to true; set false to disable
   */
  enabled?: boolean;
  /**
   * @description 上传接口；不传时复用 attachments.customRequest
   * @descriptionEn Upload request; falls back to attachments.customRequest when omitted
   */
  customRequest?: UploadProps['customRequest'];
  /**
   * @description 超长文本转附件后替换输入框内容的 prompt；支持传方法用于国际化
   * @descriptionEn Prompt used to replace input content after overlong text is uploaded; supports function form for i18n
   */
  prompt?: string | (() => string);
  /**
   * @description 生成的 txt 附件文件名
   * @descriptionEn Generated txt attachment file name
   */
  fileName?: string;
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
    render?: ({
      data,
    }: {
      data: IAgentScopeRuntimeRequest;
    }) => React.ReactElement;
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
  right?:
    | false
    | {
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
   * @description 已选择的提及项
   * @descriptionEn Selected mention items
   */
  mentions?: IAgentScopeRuntimeWebUISenderMentionData[];
  /**
   * @description 业务参数
   * @descriptionEn Business parameters
   */
  biz_params?: {
    user_prompt_params?: Record<string, string>;
  };
}
