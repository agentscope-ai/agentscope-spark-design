import React, { forwardRef, useCallback, useRef, useState } from 'react';
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
  const setMessages = useChatAnywhere(v => v.setMessages);
  const onLoadMore = useChatAnywhere(v => v.onLoadMore);
  const safeMessages = [...(messages || [])].reverse();
  const { getPrefixCls } = useProviderContext();
  const prefixCls = getPrefixCls('chat-anywhere');
  const uiConfig = useChatAnywhere(v => v.uiConfig);
  const currentSessionKey = useChatAnywhere(v => v.currentSessionKey);
  const [ready, setReady] = useState(false);
  const [noMore, setNoMore] = useState(false);
  const isBackendPagination = typeof onLoadMore === 'function';
  const loadingMoreRef = useRef(false);

  React.useEffect(() => {
    setNoMore(false);
    loadingMoreRef.current = false;
  }, [currentSessionKey]);

  useTimeout(() => {
    setReady(true);
  }, 300);

  const handleLoadMore = useCallback(async () => {
    if (!onLoadMore || loadingMoreRef.current) return;
    loadingMoreRef.current = true;
    try {
      const result = await onLoadMore();
      if (result?.messages?.length) {
        setMessages(prev => [...result.messages, ...prev]);
      }
      setNoMore(result?.noMore ?? false);
    } finally {
      loadingMoreRef.current = false;
    }
  }, [onLoadMore, setMessages]);

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
        pagination={isBackendPagination ? false : uiConfig?.bubbleList?.pagination}
        onLoadMore={isBackendPagination ? handleLoadMore : undefined}
        noMore={isBackendPagination ? noMore : undefined}
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