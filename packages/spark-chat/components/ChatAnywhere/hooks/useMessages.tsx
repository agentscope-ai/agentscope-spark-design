import React from 'react';
import { useChatAnywhere } from "./ChatAnywhereProvider";
import { IChatAnywhereRef, TMessage } from './types';
export function useMessages() {
  const { messages, setMessages, getMessages } = useChatAnywhere(v => ({
    messages: v.messages,
    setMessages: v.setMessages,
    getMessages: v.getMessages,
  }));


  const updateMessage = React.useCallback<IChatAnywhereRef['updateMessage']>((...args) => {

    const id = args[0]?.id || args[0];
    const message = args[1] || args[0];


    setMessages?.((prev) => {
      const index = prev.findIndex((item) => item.id === id);
      if (index > -1) {
        const nextMessage = {
          ...prev[index],
          ...message
        };
        return [...prev.slice(0, index), nextMessage, ...prev.slice(index + 1)];
      } else {
        return [...prev, message];
      }
    });



    // @ts-ignore
  }, []);


  const removeMessage = React.useCallback((message: Partial<TMessage>) => {
    setMessages(prev => {
      return prev.filter(item => item.id !== message.id);
    })
  }, []);


  const removeAllMessages = React.useCallback(() => {
    setMessages([]);
  }, []);

  const getMessage = React.useCallback((id: string) => {
    return getMessages().find(item => item.id === id);
  }, []);



  return {
    messages,
    getMessage,
    setMessages,
    getMessages,
    updateMessage,
    removeMessage,
    removeAllMessages,
  }
}