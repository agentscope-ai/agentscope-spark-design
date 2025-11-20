import React, { forwardRef, useMemo, useRef, useState } from 'react';
import Layout from './Layout';
import SessionList from './SessionList';
import Chat from './Chat';
import Header from './Header';
import { v4 as uuid } from 'uuid';
import { CustomCardsProvider } from '@agentscope-ai/chat';
import { ChatAnywhereProvider, ChatAnywhereRef, useChatAnywhere } from './hooks/ChatAnywhereProvider';
import ContextRef from './Chat/Ref';
import { IChatAnywhereConfig } from './hooks/types';
import { useMessages } from './hooks/useMessages';
import { useInput } from './hooks/useInput';
import { useSessionList } from './hooks/useSessionList';


export type { ChatAnywhereRef }
export { uuid, useChatAnywhere, useMessages, useInput, useSessionList };
export type { TMessage, TSession } from './hooks/types';

export default forwardRef(function (chatanywhereConfig: IChatAnywhereConfig, ref) {
  const [key, setKey] = useState(0);
  const { cardConfig, ...rest } = chatanywhereConfig;
  const chatRef = useRef(null);
  const inputRef = useRef(null);
  const contextRef = useRef(null);

  React.useImperativeHandle(ref, () => {
    return {
      ...chatRef.current,
      ...inputRef.current,
      ...contextRef.current,
      reload: () => {
        setKey(key => key + 1);
      },
    };
  });

  return <ChatAnywhereProvider {...rest} key={key}>
    <CustomCardsProvider cardConfig={cardConfig}>
      <Layout
        top={rest.uiConfig?.header ? <Header /> : null}
        left={rest.onSessionKeyChange ? <SessionList /> : null}
        // @ts-ignore
        right={<Chat ref={{ chatRef, inputRef }} />}
      />
      <ContextRef ref={contextRef} />
    </CustomCardsProvider>
  </ChatAnywhereProvider>
});