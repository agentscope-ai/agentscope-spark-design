import React, { forwardRef } from 'react';
import { useContextSelector } from 'use-context-selector';
import { ChatAnywhereMessagesContext, useChatAnywhereMessages } from '../Context/ChatAnywhereMessagesContext';
import { ChatAnywhereInputContext, useChatAnywhereInput } from '../Context/ChatAnywhereInputContext';

// 逐步放开
function Ref(_, ref) {
  const messages = useChatAnywhereMessages()
  const setDisabled = useContextSelector(ChatAnywhereInputContext, v => v.setDisabled);

  React.useImperativeHandle(ref, () => {
    return {
      messages,
      input: {
        setDisabled
      },

    }
  }, []);


  return null;
}


export default forwardRef(Ref);