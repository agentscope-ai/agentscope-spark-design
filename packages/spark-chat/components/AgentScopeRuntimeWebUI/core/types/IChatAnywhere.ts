import { UploadProps } from 'antd';
import type { SenderComponents } from '../../../Sender';
import {
  IAgentScopeRuntimeMessage,
  IAgentScopeRuntimeRequest,
  IAgentScopeRuntimeResponse,
  IContent,
} from '../AgentScopeRuntime/types';
import {
  IAgentScopeRuntimeWebUICreateSessionReturn,
  IAgentScopeRuntimeWebUISession,
} from './ISessions';

/** Immutable routing identity shared by submit, cancel and reconnect. */
export interface IAgentScopeRuntimeWebUITransportContext {
  /** Backend Runtime identity, not the SDK chat id. */
  session_id: string;
  chatSessionId?: string;
  user_id?: string;
  channel?: string;
  agent_id?: string;
  context?: IAgentScopeRuntimeWebUIRequestContext;
  /** SDK identifiers for host correlation; not a server idempotency guarantee. */
  runId?: string;
  clientRequestId?: string;
}

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
  fetch?: (
    data: IAgentScopeRuntimeWebUITransportContext & {
      input: any[];
      biz_params?: IAgentScopeRuntimeWebUIInputData['biz_params'];
      mentions?: IAgentScopeRuntimeWebUISenderMentionData[];
      submission?: IAgentScopeRuntimeWebUISubmissionContext;
      signal?: AbortSignal;
    },
  ) => Promise<Response>;

  /**
   * @description 自定义取消当前会话生成。提供该回调时 SDK 默认保留原 SSE；如需立即终止本地流，请调用 abort。
   * @descriptionEn Custom cancellation for the current session. When provided, the SDK keeps the original SSE open by default; call abort to terminate the local stream immediately.
   */
  cancel?: (
    data: IAgentScopeRuntimeWebUITransportContext & {
      /** 当前请求的信号，可用于判断本地流是否已终止 / Signal for the active request */
      signal?: AbortSignal;
      /** 立即终止本地 SSE 并将运行态标记为 canceled / Abort the local SSE and mark running states as canceled */
      abort: () => void;
    },
  ) => void | Promise<void>;

  /**
   * @description 重连会话流式响应
   * @descriptionEn Reconnect session stream response
   */
  reconnect?: (
    data: IAgentScopeRuntimeWebUITransportContext & {
      signal?: AbortSignal;
    },
  ) => Promise<Response>;

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
    chunk: string,
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

export interface IAgentScopeRuntimeWebUISubmissionContext {
  runId?: string;
  clientRequestId?: string;
  /**
   * @description 请求来源
   * @descriptionEn Request submission source.
   */
  source: 'direct' | 'queue' | 'host-queue';
  /**
   * @description 输入队列条目 id，仅队列请求存在
   * @descriptionEn Input queue item id, present only for queued requests.
   */
  queueItemId?: string;
}

/**
 * @description 由宿主提供并随单次提交完整透传的请求上下文
 * @descriptionEn Host-provided request context preserved for one submission
 */
export type IAgentScopeRuntimeWebUIRequestContext = Record<string, unknown>;

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
  /** 提交时使用的值 / Value used when submitting the mention */
  value: string;
  /** 候选项和胶囊中展示的内容 / Display content */
  label?: React.ReactNode;
  /** 候选项和胶囊中展示的图标 / Display icon */
  icon?: React.ReactNode;
  /** 可选的业务类型，例如 file 或 folder / Optional business type */
  type?: string;
  /** 是否禁用该候选项 / Whether this option is disabled */
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
  /** 是否继续由组件提交当前消息 / Whether submission should continue */
  proceed: boolean;
  /** 可选的最终提交文本 / Optional final query override */
  query?: string;
  /** 即使中止提交也清空输入区 / Clear input even when intercepted */
  clear?: boolean;
  /** 显式请求会话 / Explicit request session */
  session_id?: string;
  /** 单次提交的业务上下文 / Business context for this submission */
  context?: IAgentScopeRuntimeWebUIRequestContext;
  /** 单次提交的业务参数 / Business parameters for this submission */
  biz_params?: IAgentScopeRuntimeWebUIInputData['biz_params'];
}

/**
 * @description 输入框提及配置
 * @descriptionEn Sender mention configuration
 */
export interface IAgentScopeRuntimeWebUISenderMentionsOptions {
  items:
    | IAgentScopeRuntimeWebUISenderMentionItem[]
    | ((context: {
        signal: AbortSignal;
      }) =>
        | IAgentScopeRuntimeWebUISenderMentionItem[]
        | Promise<IAgentScopeRuntimeWebUISenderMentionItem[]>);
  trigger?: string;
  maxOptions?: number;
  emptyText?: React.ReactNode;
  loadingText?: React.ReactNode;
  displayMode?: 'header' | 'inline';
  getInsertText?: (
    item: IAgentScopeRuntimeWebUISenderMentionItem,
    trigger: string,
  ) => string;
  cacheItems?: boolean;
  allowDuplicates?: boolean;
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
   * @description 输入队列配置，默认关闭。传 true 或配置对象时启用。
   * @descriptionEn Input queue configuration. Disabled by default; pass true or an options object to enable it.
   */
  queue?: boolean | IAgentScopeRuntimeWebUIQueueOptions;
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
   * @descriptionEn Generic mention configuration
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
  enabled?: boolean;
  customRequest?: UploadProps['customRequest'];
  prompt?: string | (() => string);
  fileName?: string;
}

export interface IAgentScopeRuntimeWebUIQueueRequestContext {
  session_id?: string;
  user_id?: string;
  channel?: string;
  agent_id?: string;
  context?: IAgentScopeRuntimeWebUIRequestContext;
}

export interface IAgentScopeRuntimeWebUIQueueSessionContext {
  /**
   * @description 当前聊天会话 id，用于宿主查询后端运行状态
   * @descriptionEn Current chat session id for host applications to query backend running state.
   */
  sessionId?: string;
  /**
   * @description 输入队列持久化和跨标签页通信使用的不透明 key
   * @descriptionEn Opaque key used for queue persistence and cross-tab communication.
   */
  queueSessionId?: string;
  /**
   * @description 入队请求上下文
   * @descriptionEn Request context used by queued inputs.
   */
  requestContext?: IAgentScopeRuntimeWebUIQueueRequestContext;
}

export interface IAgentScopeRuntimeWebUIQueueErrorContext
  extends IAgentScopeRuntimeWebUIQueueSessionContext {
  /**
   * @description 发送失败的原始队列输入
   * @descriptionEn Original queued input whose submission failed.
   */
  data: IAgentScopeRuntimeWebUIInputData;
  /**
   * @description 发送或流消费期间抛出的错误
   * @descriptionEn Error thrown while submitting or consuming the response stream.
   */
  error: unknown;
}

export type IAgentScopeRuntimeWebUIQueuedInputStatus =
  | 'pending'
  | 'submitting'
  | 'failed';

/**
 * @description 输入队列条目
 * @descriptionEn Input queue item
 */
export interface IAgentScopeRuntimeWebUIQueuedInputItem {
  id: string;
  data: IAgentScopeRuntimeWebUIInputData;
  status: IAgentScopeRuntimeWebUIQueuedInputStatus;
  retryCount: number;
  errorMessage?: string;
  submissionOwnerTabId?: string;
  submissionStartedAt?: number;
  createdAt: number;
}

export interface IAgentScopeRuntimeWebUIQueueEnqueueResult {
  ok: boolean;
  item?: IAgentScopeRuntimeWebUIQueuedInputItem;
  reason?: 'full' | 'session-not-ready';
}

/**
 * @description 队列条目操作上下文
 * @descriptionEn Queue item action context
 */
export interface IAgentScopeRuntimeWebUIQueueItemActionContext {
  item: IAgentScopeRuntimeWebUIQueuedInputItem;
  index: number;
  isOwner: boolean;
  remove: () => void;
  updateQuery: (query: string) => void;
  sendNow: () => void;
  retry: () => void;
}

export type IAgentScopeRuntimeWebUIQueueItemActionValue<T> =
  | T
  | ((context: IAgentScopeRuntimeWebUIQueueItemActionContext) => T);

/**
 * @description 队列条目自定义操作。业务行为由宿主实现，SDK 仅负责展示和提供队列操作上下文。
 * @descriptionEn Custom queue item action. The host owns the business behavior; the SDK only renders it and provides queue helpers.
 */
export interface IAgentScopeRuntimeWebUIQueueItemAction {
  /** 唯一且稳定的操作标识 / Unique and stable action key */
  key: string;
  /** 按钮提示及无障碍名称 / Button tooltip and accessible name */
  label: IAgentScopeRuntimeWebUIQueueItemActionValue<React.ReactNode>;
  /** 按钮图标 / Button icon */
  icon: IAgentScopeRuntimeWebUIQueueItemActionValue<React.ReactNode>;
  /** 是否展示，默认为 true / Whether to render, defaults to true */
  visible?: IAgentScopeRuntimeWebUIQueueItemActionValue<boolean>;
  /** 是否禁用；submitting 状态始终禁用 / Whether disabled; submitting items are always disabled */
  disabled?: IAgentScopeRuntimeWebUIQueueItemActionValue<boolean>;
  /** 是否仅队列 owner 展示，默认为 true / Whether only the queue owner can see it, defaults to true */
  ownerOnly?: boolean;
  /** 是否使用危险操作样式 / Whether to use the danger style */
  danger?: boolean;
  /** 点击回调 / Click handler */
  onClick: (
    context: IAgentScopeRuntimeWebUIQueueItemActionContext,
  ) => void | Promise<void>;
}

export interface IAgentScopeRuntimeWebUIQueueOptions {
  /**
   * @description 队列持久化与跨标签页通信的命名空间。多智能体或多租户页面必须设置稳定且唯一的 scope。
   * @descriptionEn Namespace for queue persistence and cross-tab communication. Multi-agent or multi-tenant hosts should provide a stable unique scope.
   */
  scope?: string;
  /**
   * @description 是否启用输入队列。传 false 可关闭队列。
   * @descriptionEn Whether to enable the input queue. Pass false to disable it.
   */
  enable?: boolean;
  /**
   * @description 队列最大条目数
   * @descriptionEn Maximum number of queued inputs
   */
  maxSize?: number;
  /**
   * @description 队列条目自定义操作，展示在编辑与立即发送操作之间
   * @descriptionEn Custom queue item actions rendered between edit and send-now
   */
  itemActions?: readonly IAgentScopeRuntimeWebUIQueueItemAction[];
  /**
   * @description 根据聊天会话 id 生成稳定且唯一的队列 key。它用于持久化和跨标签页隔离，不应返回后端请求的 session_id。
   * @descriptionEn Resolve a stable unique queue key from the chat session id. It is used for persistence and cross-tab isolation and must not return the backend request session_id.
   */
  getQueueKey?: (sessionId?: string) => string | undefined;
  /**
   * @deprecated 使用 getQueueKey。该别名仅用于兼容旧配置。
   * @deprecatedEn Use getQueueKey. This alias is retained only for backward compatibility.
   */
  getSessionId?: (sessionId?: string) => string | undefined;
  /**
   * @description 获取入队请求上下文，用于会话/用户/渠道/智能体切换后仍能发送到原上下文
   * @descriptionEn Resolve request context for queued inputs so they keep their original session/user/channel/agent after switching.
   */
  getRequestContext?: (
    sessionId?: string,
  ) => IAgentScopeRuntimeWebUIQueueRequestContext | undefined;
  /**
   * @description 判断当前会话是否仍在宿主后端运行。返回 true 时，SDK 会把新的输入加入队列并延后出队。
   * @descriptionEn Whether the host backend is still running for the current session. When true, new input is queued and draining waits.
   */
  isSessionRunning?: (
    context: IAgentScopeRuntimeWebUIQueueSessionContext,
  ) => boolean | Promise<boolean>;
  /**
   * @description 判断发送失败后是否应把输入恢复到队列。宿主已确认请求被后端接受时可返回 false，避免切换会话或组件卸载后重复发送。
   * @descriptionEn Whether a failed submission should be restored to the queue. Hosts may return false after confirming backend acceptance to prevent duplicate delivery after a session switch or component unmount.
   */
  shouldRestoreOnError?: (
    context: IAgentScopeRuntimeWebUIQueueErrorContext,
  ) => boolean | Promise<boolean>;
  /**
   * @description 队列满时的回调
   * @descriptionEn Called when the queue reaches maxSize
   */
  onFull?: (maxSize: number) => void;
  /**
   * @description 当前会话还未准备好，无法加入输入队列时的回调
   * @descriptionEn Called when the current session is not ready for input queueing
   */
  onSessionNotReady?: () => void;
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
  getSessionList: () => Promise<IAgentScopeRuntimeWebUISession[]>;
  /**
   * @description 获取会话详情
   * @descriptionEn Get session details
   */
  getSession: (
    sessionId: string,
  ) => Promise<IAgentScopeRuntimeWebUISession | undefined>;
  /**
   * @description 更新会话
   * @descriptionEn Update session
   */
  updateSession: (
    session: Partial<IAgentScopeRuntimeWebUISession>,
  ) => Promise<IAgentScopeRuntimeWebUISession[]>;
  /**
   * @description 创建会话
   * @descriptionEn Create session
   */
  createSession: (
    session: Partial<IAgentScopeRuntimeWebUISession>,
  ) => Promise<IAgentScopeRuntimeWebUICreateSessionReturn>;
  /**
   * @description 删除会话
   * @descriptionEn Remove session
   */
  removeSession: (
    session: Partial<IAgentScopeRuntimeWebUISession>,
  ) => Promise<IAgentScopeRuntimeWebUISession[]>;
}

/**
 * @description 会话配置选项
 * @descriptionEn Session configuration options
 */
export interface IAgentScopeRuntimeWebUISessionOptions {
  /**
   * 默认 localStorage 的隔离命名空间，建议使用 tenant:user:workspace:agent。
   * 未配置时兼容旧存储；配置后不自动读取/迁移旧历史。变更会重挂载会话状态。
   * Namespace for default storage. Omit for legacy storage; scoped stores never
   * import unscoped history. Changing it remounts the session runtime.
   */
  storageScope?: string;
  /**
   * @description 是否支持多会话
   * @descriptionEn Whether to support multiple sessions
   */
  multiple?: boolean;
  /**
   * @description 当前会话 ID。传入该字段后，会话状态会跟随外部路由；传 undefined 表示新建会话页。
   * @descriptionEn Current session id. When provided, the session state follows the external route; undefined means the new-chat page.
   */
  currentSessionId?: string;
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
  /**
   * @description 当前会话切换回调，可用于同步业务路由
   * @descriptionEn Called when current session changes. Useful for syncing external routes.
   */
  onCurrentSessionChange?: (sessionId: string | undefined) => void;
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
  setSessionLoading: (sessionId: string, loading: boolean | string) => void;
  getSessionLoading: (sessionId: string) => boolean | string;
  /**
   * @description 禁用状态
   * @descriptionEn Disabled state
   */
  disabled: boolean | string;
  /**
   * @description 设置禁用状态
   * @descriptionEn Set disabled state
   */
  setDisabled: (disabled: boolean | string) => void;
  /**
   * @description 获取禁用状态
   * @descriptionEn Get disabled state
   */
  getDisabled: () => boolean | string;
  setSessionDisabled: (sessionId: string, disabled: boolean | string) => void;
  getSessionDisabled: (sessionId: string) => boolean | string;
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
   * @description 队列文本字段，兼容后续完整消息体扩展
   * @descriptionEn Queue text field for future full-message-body extensions
   */
  text?: string;
  /**
   * @description 文件列表
   * @descriptionEn File list
   */
  fileList?: (UploadProps['fileList'][number] & { file_id?: string })[];
  /**
   * @description 队列附件引用
   * @descriptionEn Queued attachment references
   */
  attachments?: (UploadProps['fileList'][number] & { file_id?: string })[];
  /**
   * @description 图片引用
   * @descriptionEn Image references
   */
  images?: { url: string; thumbUrl?: string; name?: string }[];
  /**
   * @description 提及信息
   * @descriptionEn Mention data
   */
  mentions?: IAgentScopeRuntimeWebUISenderMentionData[];
  /**
   * @description 引用消息
   * @descriptionEn Quoted message
   */
  quote?: { messageId: string; text: string };
  /**
   * @description 请求所属会话
   * @descriptionEn Session id for this request
   */
  session_id?: string;
  /**
   * @description 请求所属用户
   * @descriptionEn User id for this request
   */
  user_id?: string;
  /**
   * @description 请求所属渠道
   * @descriptionEn Channel for this request
   */
  channel?: string;
  /**
   * @description 请求所属智能体
   * @descriptionEn Agent id for this request
   */
  agent_id?: string;
  /**
   * @description 随当前提交完整透传的业务上下文
   * @descriptionEn Business context preserved for this submission
   */
  context?: IAgentScopeRuntimeWebUIRequestContext;
  /**
   * @description 业务参数
   * @descriptionEn Business parameters
   */
  biz_params?: {
    user_prompt_params?: Record<string, string>;
  } & Record<string, unknown>;
}
