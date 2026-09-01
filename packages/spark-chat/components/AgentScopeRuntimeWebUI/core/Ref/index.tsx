import React, { forwardRef } from 'react';
import { useContextSelector } from 'use-context-selector';
import { ChatAnywhereInputContext } from '../Context/ChatAnywhereInputContext';
import { useChatAnywhereMessages } from '../Context/ChatAnywhereMessagesContext';
import { useChatAnywhereCommandDispatcher } from '../Context/useChatAnywhereEventEmitter';
import { useChatAnywhereExecutionSubscriber } from '../Context/useChatAnywhereEventEmitter';
import { IAgentScopeRuntimeWebUIInputData } from '../types';

// 逐步放开
function Ref(_, ref) {
  const messages = useChatAnywhereMessages();
  const dispatch = useChatAnywhereCommandDispatcher();
  const subscribe = useChatAnywhereExecutionSubscriber();
  const setDisabled = useContextSelector(
    ChatAnywhereInputContext,
    (v) => v.setDisabled,
  );

  React.useImperativeHandle(
    ref,
    () => {
      return {
        messages,
        execution: {
          execute: (data, options) =>
            dispatch('handleExecute', { data, options }),
          cancel: (target) => dispatch('handleCancelExecution', target),
          resume: (options) => dispatch('handleResumeExecution', options),
          getActiveRun: (sessionId) =>
            dispatch('handleGetActiveRun', { sessionId }),
          subscribe,
        },
        input: {
          setDisabled,
          submit: (data: IAgentScopeRuntimeWebUIInputData) =>
            dispatch('handleSubmit', data),
        },
      };
    },
    [dispatch, messages, setDisabled, subscribe],
  );

  return null;
}

export default forwardRef(Ref);
