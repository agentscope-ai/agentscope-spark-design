export interface IAgentScopeRuntimeWebUIMessageCard<T = string | any> {
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
  data?: T;
}

export interface IAgentScopeRuntimeWebUIMessage<T = string | any> {
  /**
   * @description 消息的唯一标识符
   * @descriptionEn Unique identifier for the message
   */
  id: string;

  /**
   * @description 消息中的卡片组件配置
   * @descriptionEn Card component configuration in the message
   */
  cards?: IAgentScopeRuntimeWebUIMessageCard<T>[];
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

export interface IAgentScopeRuntimeWebUIMessagesContext {
  messages: IAgentScopeRuntimeWebUIMessage[];
  setMessages: (messages: IAgentScopeRuntimeWebUIMessage[]) => void;
  getMessages: () => IAgentScopeRuntimeWebUIMessage[];
}