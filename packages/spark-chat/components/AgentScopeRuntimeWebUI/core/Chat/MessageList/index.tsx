import { Bubble, useProviderContext } from "@agentscope-ai/chat";
import { IAgentScopeRuntimeWebUIMessage } from "../../types/IMessages";
import { ChatAnywhereMessagesContext } from "../../Context/ChatAnywhereMessagesContext";
import { useContextSelector } from "use-context-selector";
import { ChatAnywhereSessionsContext } from "../../Context/ChatAnywhereSessionsContext";
import { useChatAnywhereOptions } from "../../Context/ChatAnywhereOptionsContext";
import cls from 'classnames';
import Welcome from "../Welcome";
import React, { useCallback, useMemo, useState } from "react";
import { flushSync } from "react-dom";
import UserMessageAnchors from "./UserMessageAnchors";

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

  React.useLayoutEffect(() => {
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

  React.useLayoutEffect(() => {
    if (historyMessages.length > PAGE_SIZE) {
      setHistoryDisplayCount(historyMessages.length);
    }
  }, [historyMessages.length, sessionId]);

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

  const ensureMessageVisible = useCallback((messageId: string) => {
    return new Promise<void>((resolve) => {
      const historyIndex = historyMessages.findIndex((message) => message.id === messageId);
      if (historyIndex >= historyDisplayCount) {
        flushSync(() => {
          setHistoryDisplayCount(historyIndex + 1);
        });
      }

      requestAnimationFrame(() => {
        resolve();
      });
    });
  }, [historyDisplayCount, historyMessages]);

  return { visibleMessages, noMore, loadMore, ensureMessageVisible };
}

export default function MessageList(props: { onSubmit: (data: { query: string; fileList?: any[] }) => void }) {
  const messages = useContextSelector(ChatAnywhereMessagesContext, v => v.messages);
  const safeMessages = React.useMemo(() => [...(messages || [])].reverse(), [messages]);
  const prefixCls = useProviderContext().getPrefixCls('chat-anywhere-message-list');
  const scrollContainerClassName = `${prefixCls}-bubble-scroll`;
  const currentSessionId = useContextSelector(ChatAnywhereSessionsContext, v => v.currentSessionId);
  const userMessageAnchorsOptions = useChatAnywhereOptions(v => v.theme?.bubbleList?.userMessageAnchors);
  const listRef = React.useRef<{ scrollToBottom: () => void } | null>(null);
  const prevMessagesLengthRef = React.useRef(safeMessages.length);

  const { visibleMessages, noMore, loadMore, ensureMessageVisible } = useSimulatedMessagePagination(safeMessages, currentSessionId);
  const renderedItemsKey = useMemo(() => visibleMessages.map((message) => message.id).join('|'), [visibleMessages]);

  React.useEffect(() => {
    if (safeMessages.length > prevMessagesLengthRef.current) {
      listRef.current?.scrollToBottom();
    }
    prevMessagesLengthRef.current = safeMessages.length;
  }, [safeMessages.length]);

  if (safeMessages.length === 0) return <div className={cls(prefixCls, `${prefixCls}-welcome`)}>
    <Welcome onSubmit={props.onSubmit} />
  </div>;

  return <div className={prefixCls}>
    <Bubble.List
      ref={listRef}
      onLoadMore={noMore ? undefined : loadMore}
      noMore={noMore}
      order="desc"
      key={currentSessionId}
      classNames={{
        wrapper: `${prefixCls}-bubble-wrapper`,
        list: scrollContainerClassName,
      }}
      items={visibleMessages}
    />
    <UserMessageAnchors
      enabled={userMessageAnchorsOptions?.enabled !== false}
      items={safeMessages}
      minGap={userMessageAnchorsOptions?.minGap}
      minCount={userMessageAnchorsOptions?.minCount}
      onEnsureMessageVisible={ensureMessageVisible}
      prefixCls={prefixCls}
      renderedItemsKey={renderedItemsKey}
      scrollContainerClassName={scrollContainerClassName}
    />
  </div>
}
