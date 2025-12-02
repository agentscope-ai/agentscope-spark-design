import { IAgentScopeRuntimeWebUIMessage, IAgentScopeRuntimeWebUIMessagesContext } from "@agentscope-ai/chat";
import { useGetState } from 'ahooks';
import React from "react";
import { createContext, useContextSelector } from 'use-context-selector';


export const ChatAnywhereMessagesContext = createContext<IAgentScopeRuntimeWebUIMessagesContext>({
  messages: [],
  setMessages: () => { },
  getMessages: () => [],
});


export function ChatAnywhereMessagesContextProvider(props: {
  children: React.ReactNode | React.ReactNode[];
}) {

  const [messages, setMessages, getMessages] = useGetState<IAgentScopeRuntimeWebUIMessage[]>([]);

  const value = {
    messages,
    setMessages,
    getMessages,
  };


  return <ChatAnywhereMessagesContext.Provider value={value}>
    {props.children}
  </ChatAnywhereMessagesContext.Provider>;
}

export const useChatAnywhereMessages = () => {
  const { setMessages, getMessages } = useContextSelector(ChatAnywhereMessagesContext, v => ({
    messages: v.messages,
    setMessages: v.setMessages,
    getMessages: v.getMessages,
  }));

  const removeAllMessages = React.useCallback(() => {
    setMessages([]);
  }, []);


  const getMessage = React.useCallback((id: string) => {
    return getMessages().find(item => item.id === id);
  }, []);


  const removeMessage = React.useCallback((message: Partial<IAgentScopeRuntimeWebUIMessage>) => {
    // @ts-ignore
    setMessages(prev => {
      return prev.filter(item => item.id !== message.id);
    })
  }, []);

  const updateMessage = React.useCallback((message: Partial<IAgentScopeRuntimeWebUIMessage> & { id: string }) => {
    // @ts-ignore
    setMessages((prev) => {
      const index = prev.findIndex((item) => item.id === message.id);
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
  }, []);



  return {
    getMessages,
    removeAllMessages,
    getMessage,
    removeMessage,
    updateMessage,
  };
}

