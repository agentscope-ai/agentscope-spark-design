import type React from 'react';
import type { AnyObject } from '../Util/type';
import type { GroupTitleProps } from './GroupTitle';

type GroupType = string;

export interface Conversation extends AnyObject {
  /**
   * @description 会话的唯一标识符，用于区分不同的聊天会话
   * @descriptionEn Unique identifier for the conversation to distinguish different chat sessions
   */
  key: string;

  /**
   * @description 会话的显示名称，支持文本或React元素
   * @descriptionEn Display name for the conversation, supports text or React elements
   */
  label?: React.ReactNode;

  /**
   * @description 会话创建或最后活动的时间戳，用于排序和显示
   * @descriptionEn Timestamp of conversation creation or last activity for sorting and display
   */
  timestamp?: number;
  

  /**
   * @description 会话的图标元素，用于视觉识别
   * @descriptionEn Icon element for the conversation for visual identification
   */
  icon?: React.ReactNode;

  /**
   * @description 是否禁用该会话，影响交互功能
   * @descriptionEn Whether to disable this conversation, affects interaction functionality
   */
  disabled?: boolean;

  /**
   * @description 是否在时间线中显示该会话，用于分组显示
   * @descriptionEn Whether to show this conversation in timeline for grouped display
   */
  timeline?: boolean;
}

export type GroupSorter = Parameters<GroupType[]['sort']>[0];

export type GroupTitleRenderComponents = {
  components: {
    GroupTitle: React.ComponentType<GroupTitleProps>;
  };
};

export type GroupTitleRender =
  | ((group: GroupType, info: GroupTitleRenderComponents) => React.ReactNode)
  | undefined;

export interface Groupable {
  /**
   * @description 会话分组的排序函数，用于自定义排序逻辑
   * @descriptionEn Sorting function for conversation grouping for custom sorting logic
   */
  sort?: GroupSorter;
  /**
   * @description 自定义分组标题的渲染函数，用于个性化显示
   * @descriptionEn Custom rendering function for group titles for personalized display
   */
  title?: GroupTitleRender;
}
