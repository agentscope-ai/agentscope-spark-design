import Bubble from './Bubble';
import type { BubbleProps } from './interface';
import ScrollToBottom from './ScrollToBottom';
import Style from './style/list';
import { useProviderContext } from '@agentscope-ai/chat';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import cls from 'classnames';
import { useInViewport, useMount, usePrevious } from 'ahooks';
import { usePaginationItems } from './hooks/usePaginationItemsData';
import { Spin } from 'antd';

export interface BubbleListRef {
  /**
   * @description 滚动到列表底部的方法，用于自动滚动到最新消息
   * @descriptionEn Method to scroll to the bottom of the list for auto-scrolling to latest messages
   */
  scrollToBottom(): void
}

export type BubbleDataType = BubbleProps & {
  key?: string | number;
  role?: string;
  id?: string;
};


export interface BubbleListProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * @description 气泡消息数据数组，用于渲染消息列表
   * @descriptionEn Bubble message data array for rendering message list
   */
  items?: BubbleDataType[];
  /**
   * @description 自定义子元素，用于扩展组件功能或自定义渲染
   * @descriptionEn Custom child elements for extending component functionality or custom rendering
   */
  children?: React.ReactNode | React.ReactNode[];
  /**
   * @description 语义化CSS类名，用于为不同区域添加自定义类名
   * @descriptionEn Semantic CSS class names for adding custom classes to different areas
   */
  classNames?: {
    wrapper?: string;
    list?: string;
  };
  pagination?: boolean;
  order?: 'asc' | 'desc';
}

interface BubbleListContentProps {
  order: 'asc' | 'desc';
  paginationItems: (BubbleDataType & { history?: boolean })[];
  noMore: boolean;
  loadMore: (scrollRef?: React.RefObject<HTMLElement | null>) => Promise<void>;
  scrollRef: React.RefObject<HTMLElement | null>;
  listClassName?: string;
  children?: React.ReactNode | React.ReactNode[];
}

function BubbleListContent({ order, paginationItems, noMore, loadMore, scrollRef, children }: BubbleListContentProps) {
  const handleLoadMore = useCallback(() => {
    return loadMore(scrollRef);
  }, [loadMore, scrollRef]);

  return (
    <>
      {order === 'asc' && !noMore ? <LoadMore handleLoadMore={handleLoadMore} /> : null}
      {children ? children : paginationItems.map(({ key, ...bubble }, index) => {
        const isLast = index === paginationItems.length - 1;
        return (
          <Bubble
            {...bubble}
            isLast={isLast}
            key={bubble.id || key || index}
          />
        )
      })}
      {order === 'desc' && !noMore ? <LoadMore handleLoadMore={handleLoadMore} /> : null}
    </>
  );
}

function LoadMore({ handleLoadMore }: { handleLoadMore: () => Promise<void> }) {
  const ref = useRef(null);
  const [inViewport] = useInViewport(ref)
  const [loading, setLoading] = useState(false)
  const previousInViewport = usePrevious(inViewport)
  const { getPrefixCls } = useProviderContext();
  const prefixCls = getPrefixCls('bubble-list');

  useEffect(() => {
    if (inViewport && previousInViewport === undefined) return;
    if (loading) return;
    if (inViewport) {
      setLoading(true);
      handleLoadMore().finally(() => {
        setLoading(false);
      });
    }

  }, [previousInViewport, inViewport, loading, handleLoadMore])

  return <div ref={ref} className={`${prefixCls}-load-more`}><Spin spinning={true} /></div>
}

const BubbleList: React.ForwardRefRenderFunction<BubbleListRef, BubbleListProps> = (props, ref) => {
  const {
    items = [],
    order = 'asc',
  } = props;

  const [showScrollToBottom, setShowScrollToBottom] = useState(false);
  const scrollRef = React.useRef<HTMLDivElement | null>(null);
  const isAtBottomRef = React.useRef(true);
  const { getPrefixCls } = useProviderContext();
  const prefixCls = getPrefixCls('bubble-list');
  const isDesc = order === 'desc';

  const checkIsAtBottom = useCallback(() => {
    const scrollEl = scrollRef.current;
    if (!scrollEl) return true;

    if (isDesc) {
      return scrollEl.scrollTop <= 2;
    }
    return scrollEl.scrollHeight - scrollEl.clientHeight - scrollEl.scrollTop <= 2;
  }, [isDesc]);

  const checkShowScrollToBottom = useCallback(() => {
    const scrollEl = scrollRef.current;
    if (!scrollEl) return false;

    const hasOverflow = scrollEl.scrollHeight - scrollEl.clientHeight > 2;
    if (!hasOverflow) return false;

    if (isDesc) {
      return scrollEl.scrollTop <= -10;
    }

    return scrollEl.scrollHeight - scrollEl.clientHeight - scrollEl.scrollTop > 10;
  }, [isDesc]);

  const scrollToBottom = useCallback((behavior: ScrollBehavior = 'auto') => {
    const scrollEl = scrollRef.current;
    if (!scrollEl) return;

    if (isDesc) {
      scrollEl.scrollTop = 0;
    } else {
      scrollEl.scrollTo({ top: scrollEl.scrollHeight, behavior });
    }
    isAtBottomRef.current = true;
    setShowScrollToBottom(false);
  }, [isDesc]);

  const handleScroll = useCallback(() => {
    const scrollEl = scrollRef.current;
    if (scrollEl) {
    }
    const isAtBottom = checkIsAtBottom();
    isAtBottomRef.current = isAtBottom;
    setShowScrollToBottom(checkShowScrollToBottom());
  }, [checkIsAtBottom, checkShowScrollToBottom]);

  React.useImperativeHandle(ref, () => ({
    scrollToBottom: () => {
      scrollToBottom('auto');
    }
  }), [scrollToBottom]);


  const { items: paginationItems, noMore, loadMore } = usePaginationItems(items, {
    enable: props.pagination,
    order,
  });

  useEffect(() => {
    scrollToBottom('auto');
  }, [items.length, scrollToBottom]);


  useEffect(() => {
    const scrollEl = scrollRef.current;
    if (!scrollEl) return;
  }, [items.length, order]);

  useEffect(() => {
    requestAnimationFrame(() => {
      const isAtBottom = checkIsAtBottom();
      isAtBottomRef.current = isAtBottom;
      setShowScrollToBottom(checkShowScrollToBottom());
    });
  }, [checkIsAtBottom, checkShowScrollToBottom, order]);

  return <>
    <Style />
    <div
      id={props.id}
      className={cls(`${prefixCls}-wrapper`, props.className, props.classNames?.wrapper)}
      style={props.style}
    >
      <div
        className={cls(
          `${prefixCls}-scroll`,
          `${prefixCls}`,
          `${prefixCls}-order-${order}`,
          props.classNames?.list,
        )}
        ref={scrollRef}
        onScroll={handleScroll}
      >
        {
          order === 'desc' && <div className={`${prefixCls}-order-desc-short`}></div>
        }
        <BubbleListContent
          order={order}
          paginationItems={paginationItems}
          noMore={noMore}
          loadMore={loadMore}
          scrollRef={scrollRef as React.RefObject<HTMLElement | null>}
        >
          {props.children}
        </BubbleListContent>
      </div>
      <ScrollToBottom
        visible={showScrollToBottom}
        onClick={() => scrollToBottom('auto')}
      />
    </div>
  </>;
};

const ForwardBubbleList = React.forwardRef(BubbleList);

export default ForwardBubbleList;
