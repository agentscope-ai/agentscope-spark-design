import { useChatAnywhereMessages } from '../Context/ChatAnywhereMessagesContext';
import { IAgentScopeRuntimeWebUIInputData } from './IChatAnywhere';

export interface IAgentScopeRuntimeWebUIRef {
  messages: ReturnType<typeof useChatAnywhereMessages>;
  input: {
    setDisabled: (disabled: boolean) => void;
    submit: (data: IAgentScopeRuntimeWebUIInputData) => void;
  };
}
