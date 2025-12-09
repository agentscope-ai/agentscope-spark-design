import React from 'react';
import { UploadFile } from 'antd';
import { TMessage, TSession, IChatAnywhereConfig } from './types';
import { useGetState } from 'ahooks';
import { useSessionList } from './useSessionList';
import { createContext, useContextSelector } from 'use-context-selector';
import { useMessages } from './useMessages';
import { useInput } from './useInput';
import { ScrollToBottomOptions } from 'use-stick-to-bottom';


export function ChatAnywhereProvider(props:
  IChatAnywhereConfig &
  { children: React.ReactNode, }
) {

  const [sessionList, setSessionList, getSessionList] = useGetState<TSession[]>([]);
  const [currentSessionKey, setCurrentSessionKey, getCurrentSessionKey] = useGetState<string>('0');
  const [currentRegenerateIndex, setCurrentRegenerateIndex, getCurrentRegenerateIndex] = useGetState<number>(0);
  const [messages, setMessages, getMessages] = useGetState<TMessage[]>([]);
  const [loading, setLoading, getLoading] = useGetState<boolean>(false);
  const [disabled, setDisabled, getDisabled] = useGetState<boolean>(false);
  const [sessionListShow, setSessionListShow, getSessionListShow] = useGetState<boolean>(true);

  const { children, ...rest } = props;

  const value = {
    sessionList,
    setSessionList,
    getSessionList,
    currentSessionKey,
    setCurrentSessionKey,
    getCurrentSessionKey,
    messages,
    setMessages,
    getMessages,
    loading,
    setLoading,
    getLoading,
    disabled,
    setDisabled,
    getDisabled,
    sessionListShow,
    setSessionListShow,
    getSessionListShow,
    currentRegenerateIndex,
    setCurrentRegenerateIndex,
    getCurrentRegenerateIndex,
    ...rest,
  }



  return <ChatAnywhereContext.Provider value={value}>
    {children}
  </ChatAnywhereContext.Provider>
}

export const ChatAnywhereContext = createContext<IChatAnywhereContext>(undefined);

export function useChatAnywhere<Selected>(selector: (value: IChatAnywhereContext) => Selected) {
  try {
    const context = useContextSelector(ChatAnywhereContext, selector);
    return context;

  } catch (error) {
    return {} as Selected;
  }
};

export interface IChatAnywhereContext {
  /**
   * @description 会话列表数据，包含所有可用的聊天会话
   * @descriptionEn Session list data containing all available chat sessions
   */
  sessionList: TSession[];
  /**
   * @description 设置会话列表的状态更新函数
   * @descriptionEn State update function for setting session list
   */
  setSessionList: React.Dispatch<React.SetStateAction<TSession[]>>
  /**
   * @description 获取当前会话列表的同步函数
   * @descriptionEn Synchronous function to get current session list
   */
  getSessionList: () => TSession[];

  /**
   * @description 当前激活会话的唯一标识符
   * @descriptionEn Unique identifier for the currently active session
   */
  currentSessionKey: string;
  /**
   * @description 设置当前会话标识符的状态更新函数
   * @descriptionEn State update function for setting current session identifier
   */
  setCurrentSessionKey: React.Dispatch<React.SetStateAction<string>>;
  /**
   * @description 获取当前会话标识符的同步函数
   * @descriptionEn Synchronous function to get current session identifier
   */
  getCurrentSessionKey: () => string;

  /**
   * @description 当前会话的消息列表
   * @descriptionEn Message list for the current session
   */
  messages: TMessage[];
  /**
   * @description 设置消息列表的状态更新函数
   * @descriptionEn State update function for setting message list
   */
  setMessages: React.Dispatch<React.SetStateAction<TMessage[]>>;
  /**
   * @description 获取当前消息列表的同步函数
   * @descriptionEn Synchronous function to get current message list
   */
  getMessages: () => TMessage[];

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

  /**
   * @description 是否显示会话列表，控制侧边栏的可见性
   * @descriptionEn Whether to show session list, controls sidebar visibility
   */
  sessionListShow: boolean;
  /**
   * @description 设置会话列表显示状态的状态更新函数
   * @descriptionEn State update function for setting session list display state
   */
  setSessionListShow: React.Dispatch<React.SetStateAction<boolean>>;
  /**
   * @description 获取当前会话列表显示状态的同步函数
   * @descriptionEn Synchronous function to get current session list display state
   */
  getSessionListShow: () => boolean;

  /**
   * @description 当前重新生成的消息索引，用于定位重新生成的消息
   * @descriptionEn Current regenerate message index for locating regenerated messages
   */
  currentRegenerateIndex: number;
  /**
   * @description 设置重新生成索引的状态更新函数
   * @descriptionEn State update function for setting regenerate index
   */
  setCurrentRegenerateIndex: React.Dispatch<React.SetStateAction<number>>;
  /**
   * @description 获取当前重新生成索引的同步函数
   * @descriptionEn Synchronous function to get current regenerate index
   */
  getCurrentRegenerateIndex: () => number;

  /**
   * @description 输入事件的处理函数，用于处理用户输入
   * @descriptionEn Input event handler for processing user input
   */
  onInput?: IChatAnywhereConfig['onInput'];
  /**
   * @description 停止生成事件的处理函数，用于中断AI响应
   * @descriptionEn Stop generation event handler for interrupting AI responses
   */
  onStop?: IChatAnywhereConfig['onStop'];
  /**
   * @description 文件上传事件的处理函数，用于处理文件上传
   * @descriptionEn File upload event handler for processing file uploads
   */
  onUpload?: IChatAnywhereConfig['onUpload'];
  /**
   * @description 会话切换事件的处理函数，用于处理会话变更
   * @descriptionEn Session change event handler for processing session switches
   */
  onSessionKeyChange?: IChatAnywhereConfig['onSessionKeyChange'];
  /**
   * @description UI配置对象，用于自定义界面外观和行为
   * @descriptionEn UI configuration object for customizing interface appearance and behavior
   */
  uiConfig?: IChatAnywhereConfig['uiConfig'];
};


export type ChatAnywhereRef =
  ReturnType<typeof useMessages> &
  ReturnType<typeof useInput> &
  ReturnType<typeof useSessionList> &
  {
    setInputContent: (content: string, fileList?: UploadFile[][]) => void;
    scrollToBottom: (options?: ScrollToBottomOptions) => void;
    reload: () => void;
  };
