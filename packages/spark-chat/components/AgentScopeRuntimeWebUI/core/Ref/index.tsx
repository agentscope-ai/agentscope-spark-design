import React, { forwardRef } from 'react';
import { useContextSelector } from 'use-context-selector';
import { ChatAnywhereInputContext } from '../Context/ChatAnywhereInputContext';
import { useChatAnywhereMessages } from '../Context/ChatAnywhereMessagesContext';
import { useChatAnywhereCommandDispatcher } from '../Context/useChatAnywhereEventEmitter';
import { IAgentScopeRuntimeWebUIInputData } from '../types';

// 逐步放开
function Ref(_, ref) {
  const messages = useChatAnywhereMessages();
  const dispatch = useChatAnywhereCommandDispatcher();
  const setDisabled = useContextSelector(
    ChatAnywhereInputContext,
    (v) => v.setDisabled,
  );

  React.useImperativeHandle(
    ref,
    () => {
      return {
        messages,
        input: {
          setDisabled,
          submit: (data: IAgentScopeRuntimeWebUIInputData) =>
            dispatch('handleSubmit', data),
        },
      };
    },
    [dispatch, messages, setDisabled],
  );

  return null;
}

export default forwardRef(Ref);
