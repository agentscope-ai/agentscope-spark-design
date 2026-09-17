import { useChatAnywhereMessages } from '../Context/ChatAnywhereMessagesContext';
import {
  IAgentScopeRuntimeWebUIInputData,
  IAgentScopeRuntimeWebUIQueueEnqueueResult,
} from './IChatAnywhere';
import type { IAgentScopeRuntimeWebUIExecutionController } from './IExecution';

export interface IAgentScopeRuntimeWebUIRef {
  messages: ReturnType<typeof useChatAnywhereMessages>;
  /** 产品化的单次请求执行控制器，供宿主自有队列和外部编排使用 */
  execution: IAgentScopeRuntimeWebUIExecutionController;
  input: {
    setDisabled: (disabled: boolean) => void;
    submit: (
      data: IAgentScopeRuntimeWebUIInputData,
    ) => Promise<void | IAgentScopeRuntimeWebUIQueueEnqueueResult>;
  };
}
