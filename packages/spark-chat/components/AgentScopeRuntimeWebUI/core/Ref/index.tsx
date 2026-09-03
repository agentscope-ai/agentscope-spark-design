import React, { forwardRef } from 'react';
import { useContextSelector } from 'use-context-selector';
import { ChatAnywhereInputContext } from '../Context/ChatAnywhereInputContext';
import { useChatAnywhereMessages } from '../Context/ChatAnywhereMessagesContext';
import {
  useChatAnywhereCommandDispatcher,
  useChatAnywhereExecutionSubscriber,
} from '../Context/useChatAnywhereEventEmitter';
import type {
  IAgentScopeRuntimeWebUIInputData,
  IAgentScopeRuntimeWebUIRef,
} from '../types';

// 逐步放开
function Ref(
  _: Record<never, never>,
  ref: React.Ref<IAgentScopeRuntimeWebUIRef>,
) {
  const messages = useChatAnywhereMessages();
  const dispatch = useChatAnywhereCommandDispatcher();
  const subscribe = useChatAnywhereExecutionSubscriber();
  const setDisabled = useContextSelector(
    ChatAnywhereInputContext,
    (v) => v.setDisabled,
  );

  React.useImperativeHandle<
    IAgentScopeRuntimeWebUIRef,
    IAgentScopeRuntimeWebUIRef
  >(
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

export default forwardRef<IAgentScopeRuntimeWebUIRef, Record<never, never>>(
  Ref,
);
