import { useChatAnywhereMessages } from '../Context/ChatAnywhereMessagesContext';
import {
  IAgentScopeRuntimeWebUIInputData,
  IAgentScopeRuntimeWebUIQueueEnqueueResult,
} from './IChatAnywhere';

export interface IAgentScopeRuntimeWebUIRef {
  messages: ReturnType<typeof useChatAnywhereMessages>;
  input: {
    setDisabled: (disabled: boolean) => void;
    submit: (
      data: IAgentScopeRuntimeWebUIInputData,
    ) => Promise<void | IAgentScopeRuntimeWebUIQueueEnqueueResult>;
  };
}
