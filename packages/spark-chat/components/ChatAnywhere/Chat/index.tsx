import React, { forwardRef, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import Bubble from '../../Bubble';
import Input from '../Input';
import { useProviderContext } from '@agentscope-ai/chat';
import cls from 'classnames';
import { useTimeout } from 'ahooks';
import { Disclaimer } from '@agentscope-ai/chat';
import { useChatAnywhere } from '../hooks/ChatAnywhereProvider';
import Style from './style';
import { TMessage } from '../hooks/types';
import { flushSync } from 'react-dom';

const PAGE_SIZE = 10;

/**
 * 前端历史分页 Hook（仅在无外部 onLoadMore 时启用）
 *
 * 依赖 TMessage.history 标记区分消息类型：
 * - history: true  → session 加载时存在的历史消息，按页展示
 * - history: false/undefined → 本次对话新产生的消息，始终全量展示
 */
function useFrontendHistoryPagination(
  messages: TMessage[],
  currentSessionKey: string | undefined,
) {
  const safeMessages = useMemo(() => [...(messages || [])].reverse(), [messages]);
  const [displayCount, setDisplayCount] = useState(PAGE_SIZE);

  useEffect(() => {
    setDisplayCount(PAGE_SIZE);
  }, [currentSessionKey]);

  const historyMessages = useMemo(() => safeMessages.filter(m => m.history), [safeMessages]);
  const newMessages = useMemo(() => safeMessages.filter(m => !m.history), [safeMessages]);

  const visibleHistory = historyMessages.slice(0, displayCount);
  const noMore = displayCount >= historyMessages.length;

  // 新消息在前（最新），历史分页消息在后（较旧）
  const visibleMessages = useMemo(
    () => [...newMessages, ...visibleHistory],
    [newMessages, visibleHistory],
  );

  const loadMore = useCallback(
    () =>
      new Promise<void>((resolve) => {
        setTimeout(() => {
          flushSync(() => setDisplayCount((prev) => prev + PAGE_SIZE));
          resolve();
        }, 300);
      }),
    [],
  );

  return { visibleMessages, noMore, loadMore };
}

export default forwardRef(function (_, ref) {
  const messages = useChatAnywhere(v => v.messages);
  const setMessages = useChatAnywhere(v => v.setMessages);
  const onLoadMore = useChatAnywhere(v => v.onLoadMore);
  const { getPrefixCls } = useProviderContext();
  const prefixCls = getPrefixCls('chat-anywhere');
  const uiConfig = useChatAnywhere(v => v.uiConfig);
  const currentSessionKey = useChatAnywhere(v => v.currentSessionKey);
  const [ready, setReady] = useState(false);
  const [backendNoMore, setBackendNoMore] = useState(false);
  const loadingMoreRef = useRef(false);

  const isBackendPagination = typeof onLoadMore === 'function';

  const {
    visibleMessages,
    noMore: frontendNoMore,
    loadMore: frontendLoadMore,
  } = useFrontendHistoryPagination(
    isBackendPagination ? [] : (messages ?? []),
    currentSessionKey,
  );

  useEffect(() => {
    setBackendNoMore(false);
    loadingMoreRef.current = false;
  }, [currentSessionKey]);

  useTimeout(() => {
    setReady(true);
  }, 300);

  const handleBackendLoadMore = useCallback(async () => {
    if (!onLoadMore || loadingMoreRef.current) return;
    loadingMoreRef.current = true;
    try {
      const result = await onLoadMore();
      if (result?.messages?.length) {
        setMessages(prev => [...result.messages, ...prev]);
      }
      setBackendNoMore(result?.noMore ?? false);
    } finally {
      loadingMoreRef.current = false;
    }
  }, [onLoadMore, setMessages]);

  const displayMessages = isBackendPagination
    ? [...(messages || [])].reverse()
    : visibleMessages;
  const noMore = isBackendPagination ? backendNoMore : frontendNoMore;
  const handleLoadMore = isBackendPagination ? handleBackendLoadMore : frontendLoadMore;

  const chatClassName = cls(
    `${prefixCls}-chat`,
    {
      [`${prefixCls}-chat-hide`]: !ready,
    }
  );

  // 用实际 messages 数量判断空态，避免分页时 welcome 屏闪烁
  const emptyMessage = (messages || []).length === 0;

  return <>
    <Style />
    <div className={chatClassName}>
      <Bubble.List
        onLoadMore={noMore ? undefined : handleLoadMore}
        noMore={noMore}
        order="desc"
        style={{ height: 0, flex: emptyMessage ? 0 : 1 }}
        // @ts-ignore
        ref={ref.chatRef}
        items={displayMessages}
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
