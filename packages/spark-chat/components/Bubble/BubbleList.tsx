import Bubble from './Bubble';
import type { BubbleProps } from './interface';
import ScrollToBottom from './ScrollToBottom';
import { StickToBottom, useStickToBottomContext } from '../StickToBottom';
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
   * @description 是否启用平滑滚动效果，影响滚动动画的流畅度
   * @descriptionEn Whether to enable smooth scrolling effect, affects scrolling animation smoothness
   */
  smooth?: boolean;
  /**
   * @description 语义化CSS类名，用于为不同区域添加自定义类名
   * @descriptionEn Semantic CSS class names for adding custom classes to different areas
   */
  classNames?: {
    wrapper?: string;
    list?: string;
  };
  pagination?: boolean;
}

interface BubbleListContentProps {
  items: BubbleDataType[];
  paginationItems: (BubbleDataType & { history?: boolean })[];
  noMore: boolean;
  loadMore: (scrollRef?: React.RefObject<HTMLElement | null>) => Promise<void>;
  prefixCls: string;
  listClassName?: string;
  children?: React.ReactNode | React.ReactNode[];
}

function BubbleListContent({ items, paginationItems, noMore, loadMore, prefixCls, listClassName, children }: BubbleListContentProps) {
  const { scrollRef } = useStickToBottomContext();

  const handleLoadMore = useCallback(() => {
    return loadMore(scrollRef as React.RefObject<HTMLElement | null>);
  }, [loadMore, scrollRef]);

  return (
    <StickToBottom.Content className={cls(`${prefixCls}`, listClassName)}>
      {noMore ? null : <LoadMore handleLoadMore={handleLoadMore} />}
      {children ? children : paginationItems.map(({ key, ...bubble }, index) => {
        const isLast = index === items.length - 1;
        return (
          <Bubble
            {...bubble}
            isLast={isLast}
            key={bubble.id || key}
          />
        )
      })}
    </StickToBottom.Content>
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
    smooth = true,
  } = props;

  const [initial, setInitial] = useState(false);
  const scrollToBottomRef = React.useRef();
  const { getPrefixCls } = useProviderContext();
  const prefixCls = getPrefixCls('bubble-list');

  React.useImperativeHandle(ref, () => ({
    scrollToBottom: () => {
      // @ts-ignore
      scrollToBottomRef.current.scrollToBottom()
    }
  }));

  useMount(() => {
    setInitial(true);
  });

  const resize = initial ? (smooth ? 'smooth' : 'instant') : 'instant';
  const { items: paginationItems, noMore, loadMore } = usePaginationItems(items, {
    enable: props.pagination,
  });

  return <>
    <Style />
    <StickToBottom
      enabled={!!smooth || !initial}
      id={props.id}
      className={cls(`${prefixCls}-wrapper`, props.classNames?.wrapper)}
      resize={resize}
      initial="instant"
      style={props.style}
    >
      <BubbleListContent
        items={items}
        paginationItems={paginationItems}
        noMore={noMore}
        loadMore={loadMore}
        prefixCls={prefixCls}
        listClassName={props.classNames?.list}
      >
        {props.children}
      </BubbleListContent>
      <ScrollToBottom ref={scrollToBottomRef}></ScrollToBottom>
    </StickToBottom>
  </>;
};

const ForwardBubbleList = React.forwardRef(BubbleList);

export default ForwardBubbleList;
