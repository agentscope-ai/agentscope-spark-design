export { ConfigProvider } from 'antd';

export { default as version } from './Version';


export {
  CustomCardsContext,
  CustomCardsProvider,
  default as SparkChatProvider,
  useCustomCardsContext,
  useGlobalContext,
  useProviderContext,
} from './Provider';

export { default as Stream } from './Stream';
export type { StreamOptions as StreamOptions } from './Stream';

export { createCard } from './Bubble/Cards';
export {
  default as ChatAnywhere,
  useChatAnywhere,
  useInput,
  useMessages,
  useSessionList,
  uuid,
} from './ChatAnywhere';
export type { ChatAnywhereRef, TMessage, TSession } from './ChatAnywhere';
export * as DefaultCards from './DefaultCards';

export { default as AgentScopeRuntimeWebUI } from './AgentScopeRuntimeWebUI';
export * from './AgentScopeRuntimeWebUI/core/types';

export {
  Accordion,
  Accordion as Process,
  type IAccordionProps,
  type IAccordionProps as IProcess,
} from './Accordion';
export {
  default as DeepThink,
  default as DeepThinking,
  type IDeepThinking,
} from './Accordion/DeepThinking';
export {
  default as Attachments,
  type AttachmentsProps,
  type AttachmentsProps as IAttachmentsProps,
} from './Attachments';
export {
  default as Bubble,
  type BubbleProps,
  type BubbleProps as IBubbleProps,
} from './Bubble';
export {
  default as Conversations,
  default as HistoryPanel,
  type ConversationsProps,
  type ConversationsProps as IHistoryPanel,
} from './Conversations';
export {
  default as DeviceAction,
  type IDeviceActionProps,
} from './DeviceAction';
export { default as Disclaimer, type IDisclaimerProps } from './Disclaimer';
export {
  default as ImageGenerator,
  type IImageGeneratorProps,
} from './ImageGenerator';
export { default as Mermaid, type IMermaidProps } from './Mermaid';
export { default as OperateCard, type IOperateCardProps } from './OperateCard';
export * from './OperateCard/preset';
export {
  default as ChatInput,
  default as Sender,
  type SenderProps as IChatInputProps,
  type SenderProps,
} from './Sender';
export { default as StatusCard, type IStatusCardProps } from './StatusCard';
export { default as sleep } from './Util/sleep';
export { default as Welcome, type IWelcomeProps } from './Welcome';

export {
  default as Markdown,
  type MarkdownProps as IMarkdownProps,
  type MarkdownProps,
} from './Markdown';