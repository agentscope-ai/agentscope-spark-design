import React, { forwardRef, useState } from 'react';
import Bubble from '../../Bubble';
import Input from '../Input';
import { useInput, useProviderContext } from '@agentscope-ai/chat';
import cls from 'classnames';
import { useTimeout } from 'ahooks';
import { Disclaimer } from '@agentscope-ai/chat';
import { useChatAnywhere } from '../hooks/ChatAnywhereProvider';
import Style from './style';

export default forwardRef(function (_, ref) {
  const messages = useChatAnywhere(v => v.messages);
  const { getPrefixCls } = useProviderContext();
  const prefixCls = getPrefixCls('chat-anywhere');
  const uiConfig = useChatAnywhere(v => v.uiConfig);
  const [ready, setReady] = useState(false);
  const inputContext = useInput();

  useTimeout(() => {
    setReady(true);
  }, 300);


  const chatClassName = cls(
    `${prefixCls}-chat`,
    {
      [`${prefixCls}-chat-hide`]: !ready,
    }
  );

  const emptyMessage = !messages?.length;

  return <>
    <Style />
    <div className={chatClassName}>
      <Bubble.List
        smooth={!!inputContext.loading}
        style={{ height: 0, flex: emptyMessage ? 0 : 1 }}
        // @ts-ignore
        ref={ref.chatRef}
        items={messages}
      />
      {
        emptyMessage ? <div className={`${chatClassName}-welcome`}>{uiConfig?.welcome}</div> : null
      }
      <div
        className={`${chatClassName}-sender`}
        style={uiConfig?.disclaimer ? { marginBottom: 16 } : {}}
      >
        {/* @ts-ignore */}
        <Input ref={ref.inputRef} />
      </div>
      {
        uiConfig?.disclaimer && <Disclaimer style={{ position: 'absolute', bottom: 0, width: '100%' }} desc={uiConfig?.disclaimer} />
      }
    </div>
  </>
})