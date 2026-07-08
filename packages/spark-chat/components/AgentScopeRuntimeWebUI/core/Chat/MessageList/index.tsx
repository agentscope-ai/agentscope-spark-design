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
const ANCHOR_JUMP_WINDOW_BEFORE = 24;
const ANCHOR_JUMP_WINDOW_AFTER = 36;

type MessageWithHistory = IAgentScopeRuntimeWebUIMessage & { history?: boolean };
type HistoryRange = { start: number; end: number };
const INITIAL_HISTORY_RANGE: HistoryRange = { start: 0, end: PAGE_SIZE };

function waitForNextFrame() {
  return new Promise<void>((resolve) => {
    requestAnimationFrame(() => resolve());
  });
}

function getAnchorJumpHistoryRange(historyIndex: number, historyLength: number): HistoryRange {
  return {
    start: Math.max(0, historyIndex - ANCHOR_JUMP_WINDOW_BEFORE),
    end: Math.min(historyLength, historyIndex + ANCHOR_JUMP_WINDOW_AFTER),
  };
}

function areHistoryRangesEqual(prev: HistoryRange, next: HistoryRange) {
  return prev.start === next.start && prev.end === next.end;
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
  const [historyRange, setHistoryRangeState] = useState<HistoryRange>(INITIAL_HISTORY_RANGE);
  const historyRangeRef = React.useRef<HistoryRange>(INITIAL_HISTORY_RANGE);
  const ensureMessageSequenceRef = React.useRef(0);

  const setHistoryRange = useCallback((nextRange: HistoryRange) => {
    historyRangeRef.current = nextRange;
    setHistoryRangeState((prev) => areHistoryRangesEqual(prev, nextRange) ? prev : nextRange);
  }, []);

  const updateHistoryRange = useCallback((updater: (prev: HistoryRange) => HistoryRange) => {
    const nextRange = updater(historyRangeRef.current);
    historyRangeRef.current = nextRange;
    setHistoryRangeState((prev) => areHistoryRangesEqual(prev, nextRange) ? prev : nextRange);
  }, []);

  React.useLayoutEffect(() => {
    ensureMessageSequenceRef.current += 1;
    setHistoryRange(INITIAL_HISTORY_RANGE);
  }, [sessionId, setHistoryRange]);

  const historyMessages = useMemo(
    () => allMessages.filter((m) => m.history),
    [allMessages],
  );
  const newMessages = useMemo(
    () => allMessages.filter((m) => !m.history),
    [allMessages],
  );

  const visibleHistory = historyMessages.slice(historyRange.start, historyRange.end);
  const noMore = historyRange.end >= historyMessages.length;

  // 新消息在前（最新），历史分页消息在后（较旧）
  const visibleMessages = useMemo(
    () => [...newMessages, ...visibleHistory],
    [newMessages, visibleHistory],
  );

  const loadMore = useCallback(() => {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        flushSync(() => {
          updateHistoryRange((prev) => ({
            start: prev.start,
            end: Math.min(historyMessages.length, prev.end + PAGE_SIZE),
          }));
        });
        resolve();
      }, 300);
    });
  }, [historyMessages.length, updateHistoryRange]);

  const ensureMessageVisible = useCallback(async (messageId: string) => {
    const sequence = ensureMessageSequenceRef.current + 1;
    ensureMessageSequenceRef.current = sequence;

    const historyIndex = historyMessages.findIndex((message) => message.id === messageId);
    await waitForNextFrame();

    if (ensureMessageSequenceRef.current !== sequence) {
      throw new Error('Message visibility request was superseded');
    }

    if (historyIndex >= 0) {
      const currentRange = historyRangeRef.current;
      const targetVisible = historyIndex >= currentRange.start && historyIndex < currentRange.end;
      if (!targetVisible) {
        const nextRange = getAnchorJumpHistoryRange(historyIndex, historyMessages.length);
        if (!areHistoryRangesEqual(currentRange, nextRange)) {
          flushSync(() => {
            setHistoryRange(nextRange);
          });
        }
      }
    }

    if (ensureMessageSequenceRef.current !== sequence) {
      throw new Error('Message visibility request was superseded');
    }
    await waitForNextFrame();
  }, [historyMessages, setHistoryRange]);

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
