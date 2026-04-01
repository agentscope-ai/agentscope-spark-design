import React, { forwardRef, useState } from 'react';
import Bubble from '../../Bubble';
import Input from '../Input';
import { useProviderContext } from '@agentscope-ai/chat';
import cls from 'classnames';
import { useTimeout } from 'ahooks';
import { Disclaimer } from '@agentscope-ai/chat';
import { useChatAnywhere } from '../hooks/ChatAnywhereProvider';
import Style from './style';

export default forwardRef(function (_, ref) {
  const messages = useChatAnywhere(v => v.messages);
  const safeMessages = [...(messages || [])].reverse();
  const { getPrefixCls } = useProviderContext();
  const prefixCls = getPrefixCls('chat-anywhere');
  const uiConfig = useChatAnywhere(v => v.uiConfig);
  const [ready, setReady] = useState(false);
  const prevMessagesLengthRef = React.useRef(safeMessages.length);

  React.useEffect(() => {
    if (safeMessages.length > prevMessagesLengthRef.current) {
      // New messages in desc mode should always bring viewport to latest bottom.
      (ref as any)?.chatRef?.current?.scrollToBottom?.();
    }
    prevMessagesLengthRef.current = safeMessages.length;
  }, [safeMessages.length, ref]);

  useTimeout(() => {
    setReady(true);
  }, 300);


  const chatClassName = cls(
    `${prefixCls}-chat`,
    {
      [`${prefixCls}-chat-hide`]: !ready,
    }
  );

  const emptyMessage = safeMessages.length === 0;

  return <>
    <Style />
    <div className={chatClassName}>
      <Bubble.List
        pagination={uiConfig?.bubbleList?.pagination}
        order="desc"
        style={{ height: 0, flex: emptyMessage ? 0 : 1 }}
        // @ts-ignore
        ref={ref.chatRef}
        items={safeMessages}
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