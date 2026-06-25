import type { IAgentScopeRuntimeWebUIMessage } from "../../../types/IMessages";

export type AttachmentPreview = {
  type: string;
  name: string;
};

export type UserMessageAnchor = {
  id: string;
  preview: string;
  attachments: AttachmentPreview[];
  orderPercent: number;
};

export type UserMessageAnchorsProps = {
  enabled?: boolean;
  items: IAgentScopeRuntimeWebUIMessage[];
  minGap?: number;
  minCount?: number;
  prefixCls: string;
  renderedItemsKey: string;
  scrollContainerClassName: string;
  onEnsureMessageVisible: (messageId: string) => Promise<void>;
};
