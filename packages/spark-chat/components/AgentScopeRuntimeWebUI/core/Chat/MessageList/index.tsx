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
const ANCHOR_JUMP_RENDER_CHUNK_SIZE = 40;

type MessageWithHistory = IAgentScopeRuntimeWebUIMessage & { history?: boolean };

function waitForNextFrame() {
  return new Promise<void>((resolve) => {
    requestAnimationFrame(() => resolve());
  });
}

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
  const ensureMessageSequenceRef = React.useRef(0);

  React.useLayoutEffect(() => {
    ensureMessageSequenceRef.current += 1;
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

  const ensureMessageVisible = useCallback(async (messageId: string) => {
    const sequence = ensureMessageSequenceRef.current + 1;
    ensureMessageSequenceRef.current = sequence;

    const historyIndex = historyMessages.findIndex((message) => message.id === messageId);
    const nextHistoryDisplayCount = historyIndex >= 0
      ? Math.min(historyMessages.length, historyIndex + PAGE_SIZE * 2)
      : historyDisplayCount;

    await waitForNextFrame();

    let renderedCount = historyDisplayCount;
    while (renderedCount < nextHistoryDisplayCount) {
      if (ensureMessageSequenceRef.current !== sequence) {
        throw new Error('Message visibility request was superseded');
      }

      const chunkDisplayCount = Math.min(
        nextHistoryDisplayCount,
        renderedCount + ANCHOR_JUMP_RENDER_CHUNK_SIZE,
      );

      flushSync(() => {
        setHistoryDisplayCount((prev) => {
          renderedCount = Math.max(prev, chunkDisplayCount);
          return renderedCount;
        });
      });

      if (renderedCount < nextHistoryDisplayCount) {
        await waitForNextFrame();
      }
    }

    await waitForNextFrame();
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
      badgeMaxCount={userMessageAnchorsOptions?.badgeMaxCount}
      enabled={userMessageAnchorsOptions?.enabled !== false}
      items={safeMessages}
      minGap={userMessageAnchorsOptions?.minGap}
      minCount={userMessageAnchorsOptions?.minCount}
      onEnsureMessageVisible={ensureMessageVisible}
      prefixCls={prefixCls}
      renderedItemsKey={renderedItemsKey}
      scrollContainerClassName={scrollContainerClassName}
      variant={userMessageAnchorsOptions?.variant}
    />
  </div>
}
