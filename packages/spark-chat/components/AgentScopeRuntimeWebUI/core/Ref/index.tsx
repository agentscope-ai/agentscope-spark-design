import React, { forwardRef } from 'react';
import { useContextSelector } from 'use-context-selector';
import { ChatAnywhereMessagesContext, useChatAnywhereMessages } from '../Context/ChatAnywhereMessagesContext';
import { ChatAnywhereInputContext, useChatAnywhereInput } from '../Context/ChatAnywhereInputContext';

// 逐步放开
function Ref(_, ref) {
  const messages = useChatAnywhereMessages()

  React.useImperativeHandle(ref, () => {
    return {
      messages,
      
    }
  }, []);


  return null;
}


export default forwardRef(Ref);