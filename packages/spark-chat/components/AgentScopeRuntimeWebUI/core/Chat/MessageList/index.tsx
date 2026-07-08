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

const PAGE_SIZE = 20;
const INITIAL_VISIBLE_MESSAGE_COUNT = 60;
const ANCHOR_JUMP_RENDER_BUFFER = 24;

type MessageWithHistory = IAgentScopeRuntimeWebUIMessage & { history?: boolean };
type HistoryRange = { start: number; end: number };
const INITIAL_HISTORY_RANGE: HistoryRange = { start: 0, end: INITIAL_VISIBLE_MESSAGE_COUNT };

function waitForNextFrame() {
  return new Promise<void>((resolve) => {
    requestAnimationFrame(() => resolve());
  });
}

function getAnchorJumpHistoryRange(historyIndex: number, historyLength: number): HistoryRange {
  const safeIndex = Math.min(
    Math.max(historyIndex, 0),
    Math.max(historyLength - 1, 0),
  );
  const desiredStart = Math.max(0, safeIndex - ANCHOR_JUMP_RENDER_BUFFER);
  const desiredEnd = Math.min(
    historyLength,
    Math.max(
      safeIndex + ANCHOR_JUMP_RENDER_BUFFER + 1,
      desiredStart + INITIAL_VISIBLE_MESSAGE_COUNT,
    ),
  );
  const start = Math.max(
    0,
    Math.min(desiredStart, desiredEnd - INITIAL_VISIBLE_MESSAGE_COUNT),
  );

  return {
    start,
    end: desiredEnd,
  };
}

function areHistoryRangesEqual(prev: HistoryRange, next: HistoryRange) {
  return prev.start === next.start && prev.end === next.end;
}

/**
 * Render only the newest window of the conversation, then reveal older
 * messages on demand. Sessions loaded from storage and messages produced in
 * the current run use the same window so long-running chats do not accumulate
 * an unbounded number of mounted bubbles.
 */
function useMessageWindowPagination(
  allMessages: MessageWithHistory[],
  sessionId: string | undefined,
  enabled: boolean,
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
    setHistoryRange(enabled
      ? INITIAL_HISTORY_RANGE
      : { start: 0, end: allMessages.length });
  }, [allMessages.length, enabled, sessionId, setHistoryRange]);

  React.useEffect(() => {
    if (!enabled) {
      setHistoryRange({ start: 0, end: allMessages.length });
      return;
    }

    updateHistoryRange((prev) => {
      if (allMessages.length <= prev.end) return prev;
      return {
        start: 0,
        end: Math.min(
          allMessages.length,
          Math.max(prev.end, INITIAL_VISIBLE_MESSAGE_COUNT),
        ),
      };
    });
  }, [allMessages.length, enabled, setHistoryRange, updateHistoryRange]);

  const noMore = !enabled || historyRange.end >= allMessages.length;

  const visibleMessages = useMemo(
    () => enabled ? allMessages.slice(historyRange.start, historyRange.end) : allMessages,
    [allMessages, enabled, historyRange.end, historyRange.start],
  );

  const loadMore = useCallback(() => {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        flushSync(() => {
          updateHistoryRange((prev) => ({
            start: prev.start,
            end: Math.min(allMessages.length, prev.end + PAGE_SIZE),
          }));
        });
        resolve();
      }, 300);
    });
  }, [allMessages.length, updateHistoryRange]);

  const ensureMessageVisible = useCallback(async (messageId: string) => {
    if (!enabled) {
      await waitForNextFrame();
      return;
    }

    const sequence = ensureMessageSequenceRef.current + 1;
    ensureMessageSequenceRef.current = sequence;

    const historyIndex = allMessages.findIndex((message) => message.id === messageId);
    await waitForNextFrame();

    if (ensureMessageSequenceRef.current !== sequence) {
      throw new Error('Message visibility request was superseded');
    }

    if (historyIndex >= 0) {
      const currentRange = historyRangeRef.current;
      const targetVisible = historyIndex >= currentRange.start && historyIndex < currentRange.end;
      if (!targetVisible) {
        const nextRange = getAnchorJumpHistoryRange(historyIndex, allMessages.length);
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
  }, [allMessages, enabled, setHistoryRange]);

  return { visibleMessages, noMore, loadMore, ensureMessageVisible };
}

export default function MessageList(props: { onSubmit: (data: { query: string; fileList?: any[] }) => void }) {
  const messages = useContextSelector(ChatAnywhereMessagesContext, v => v.messages);
  const safeMessages = React.useMemo(() => [...(messages || [])].reverse(), [messages]);
  const prefixCls = useProviderContext().getPrefixCls('chat-anywhere-message-list');
  const scrollContainerClassName = `${prefixCls}-bubble-scroll`;
  const currentSessionId = useContextSelector(ChatAnywhereSessionsContext, v => v.currentSessionId);
  const bubbleListOptions = useChatAnywhereOptions(v => v.theme?.bubbleList);
  const userMessageAnchorsOptions = bubbleListOptions?.userMessageAnchors;
  const paginationEnabled = bubbleListOptions?.pagination !== false;
  const listRef = React.useRef<{ scrollToBottom: () => void } | null>(null);
  const prevMessagesLengthRef = React.useRef(safeMessages.length);

  const { visibleMessages, noMore, loadMore, ensureMessageVisible } = useMessageWindowPagination(
    safeMessages,
    currentSessionId,
    paginationEnabled,
  );
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
