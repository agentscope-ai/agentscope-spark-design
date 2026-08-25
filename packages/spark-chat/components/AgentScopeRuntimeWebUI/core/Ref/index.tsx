import React, { forwardRef } from 'react';
import { useContextSelector } from 'use-context-selector';
import { ChatAnywhereInputContext } from '../Context/ChatAnywhereInputContext';
import { useChatAnywhereMessages } from '../Context/ChatAnywhereMessagesContext';
import { emit } from '../Context/useChatAnywhereEventEmitter';
import { IAgentScopeRuntimeWebUIInputData } from '../types';

// 逐步放开
function Ref(_, ref) {
  const messages = useChatAnywhereMessages();
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
          submit: (data: IAgentScopeRuntimeWebUIInputData) => {
            emit({ type: 'handleSubmit', data });
          },
        },
      };
    },
    [],
  );

  return null;
}

export default forwardRef(Ref);
