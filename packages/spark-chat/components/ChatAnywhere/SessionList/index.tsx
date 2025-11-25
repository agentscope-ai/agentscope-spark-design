import React, { useContext, useEffect, useMemo } from 'react';
import { Conversations } from '@agentscope-ai/chat';
import cls from 'classnames';
import { useProviderContext } from '@agentscope-ai/chat';
import { Button, IconButton } from '@agentscope-ai/design';
import { useChatAnywhere } from '../hooks/ChatAnywhereProvider';
import { useSessionList } from '../hooks/useSessionList';
import { useMessages } from '../hooks/useMessages';
import { isMobileHook } from '../Layout';
import Style from './style';
import { SparkOperateLeftLine, SparkOperateRightLine, SparkPlusLine, SparkDeleteLine } from "@agentscope-ai/icons";


export default function () {
  const { getPrefixCls } = useProviderContext();
  const prefixCls = getPrefixCls('chat-anywhere-session-list');
  const sessionListShow = useChatAnywhere(v => v.sessionListShow);

  return <>
    <Style />
    <div className={cls(`${prefixCls}`, sessionListShow ? '' : `${prefixCls}-hide`)}>
      <InnerAdder />
      <InnerSession />
    </div>
  </>
}

export function InnerSession() {
  const { getPrefixCls } = useProviderContext();
  const prefixCls = getPrefixCls('chat-anywhere-session-list');

  const {
    currentSessionKey,
    setCurrentSessionKey,
    currentRegenerateIndex,
    sessionList,
    getMessagesBySession,
    setSessionListShow
  } = useSessionList();
  const { setMessages } = useMessages();
  const getLoading = useChatAnywhere(v => v.getLoading);
  const onSessionKeyChange = useChatAnywhere(v => v.onSessionKeyChange);
  const isMobile = isMobileHook();


  useEffect(() => {
    const messages = getMessagesBySession(currentSessionKey, currentRegenerateIndex);
    setMessages(messages);
  }, [currentSessionKey, currentRegenerateIndex]);

  return <div className={`${prefixCls}-session`} >
    <Conversations
      menu={[
        {
          key: 'delete',
          icon: <SparkDeleteLine />,
          danger: true,
          onClick: (session) => { },
        },
      ]}
      activeKey={currentSessionKey}
      items={sessionList}
      onActiveChange={key => {
        if (getLoading()) return;
        if (isMobile) {
          setSessionListShow(false);
        }

        requestIdleCallback(() => {
          setCurrentSessionKey(key);
          onSessionKeyChange(key);
        })
      }}
    />
  </div>
}

export function InnerAdder() {
  const { getPrefixCls } = useProviderContext();
  const prefixCls = getPrefixCls('chat-anywhere-session-list');
  const {
    currentSessionKey,
    setCurrentSessionKey,
    deleteSession,
    createSession,
    sessionList,
    sessionListShow,
    setSessionListShow
  } = useSessionList();
  const uiConfig = useChatAnywhere(v => v.uiConfig);
  const isMobile = isMobileHook();


  return <>
    <div className={`${prefixCls}-logo`}>
      {uiConfig?.logo}
      <IconButton
        bordered={false}
        onClick={() => setSessionListShow(!sessionListShow)}
        icon={
          sessionListShow ? <SparkOperateLeftLine /> : <SparkOperateRightLine />
        }></IconButton>

    </div>

    <div className={`${prefixCls}-adder`}>
      <Button
        type="primary"
        block
        icon={<SparkPlusLine />}
        onClick={() => {
          if (isMobile) {
            setSessionListShow(false);
          }
          createSession();
        }}
      >
        New Session
      </Button>
    </div>
  </>
}