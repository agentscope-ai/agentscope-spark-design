import { Bubble, useProviderContext } from "@agentscope-ai/chat";
import { IAgentScopeRuntimeWebUIMessage } from "../../types/IMessages";
import { ChatAnywhereMessagesContext } from "../../Context/ChatAnywhereMessagesContext";
import { useContextSelector } from "use-context-selector";
import { ChatAnywhereSessionsContext } from "../../Context/ChatAnywhereSessionsContext";
import cls from 'classnames';
import Welcome from "../Welcome";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { flushSync } from "react-dom";

const PAGE_SIZE = 10;

type MessageWithHistory = IAgentScopeRuntimeWebUIMessage & { history?: boolean };

/**
 * 模拟后端分页 Hook：
 * - history 消息（会话加载时的历史记录）按页展示，滚动触底时加载更多
 * - 当前会话新产生的消息（非 history）始终全量展示
 */
function useSimulatedMessagePagination(
  allMessages: MessageWithHistory[],
  sessionId: string | undefined,
) {
  const [historyDisplayCount, setHistoryDisplayCount] = useState(PAGE_SIZE);

  useEffect(() => {
    setHistoryDisplayCount(PAGE_SIZE);
  }, [sessionId]);

  const historyMessages = useMemo(
    () => allMessages.filter((m) => m.history),
    [allMessages],
  );
  const newMessages = useMemo(
    () => allMessages.filter((m) => !m.history),
    [allMessages],
  );

  const visibleHistory = historyMessages.slice(0, historyDisplayCount);
  const noMore = historyDisplayCount >= historyMessages.length;

  // 新消息在前（最新），历史分页消息在后（较旧）
  const visibleMessages = useMemo(
    () => [...newMessages, ...visibleHistory],
    [newMessages, visibleHistory],
  );

  const loadMore = useCallback(() => {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        flushSync(() => {
          setHistoryDisplayCount((prev) => prev + PAGE_SIZE);
        });
        resolve();
      }, 300);
    });
  }, []);

  return { visibleMessages, noMore, loadMore };
}

export default function MessageList(props: { onSubmit: (data: { query: string; fileList?: any[] }) => void }) {
  const messages = useContextSelector(ChatAnywhereMessagesContext, v => v.messages);
  const safeMessages = React.useMemo(() => [...(messages || [])].reverse(), [messages]);
  const prefixCls = useProviderContext().getPrefixCls('chat-anywhere-message-list');
  const currentSessionId = useContextSelector(ChatAnywhereSessionsContext, v => v.currentSessionId);
  const listRef = React.useRef<{ scrollToBottom: () => void } | null>(null);
  const prevMessagesLengthRef = React.useRef(safeMessages.length);

  const { visibleMessages, noMore, loadMore } = useSimulatedMessagePagination(safeMessages, currentSessionId);

  React.useEffect(() => {
    if (safeMessages.length > prevMessagesLengthRef.current) {
      listRef.current?.scrollToBottom();
    }
    prevMessagesLengthRef.current = safeMessages.length;
  }, [safeMessages.length]);

  if (safeMessages.length === 0) return <div className={cls(prefixCls, `${prefixCls}-welcome`)}>
    <Welcome onSubmit={props.onSubmit} />
  </div>;

  return <Bubble.List
    ref={listRef}
    onLoadMore={noMore ? undefined : loadMore}
    noMore={noMore}
    order="desc"
    key={currentSessionId}
    classNames={{
      wrapper: prefixCls,
    }}
    items={visibleMessages}
  />
}
