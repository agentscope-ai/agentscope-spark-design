import Bubble from './Bubble';
import type { BubbleProps } from './interface';
import ScrollToBottom from './ScrollToBottom';
import { StickToBottom } from '../StickToBottom';
import Style from './style/list';
import { useProviderContext } from '@agentscope-ai/chat';
import React, { useEffect, useRef, useState } from 'react';
import cls from 'classnames';
import { useMount } from 'ahooks';

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
  }
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

  return <>
    <Style />
    <StickToBottom
      enabled={!!smooth}
      id={props.id}
      className={cls(`${prefixCls}-wrapper`, props.classNames?.wrapper)}
      resize={resize}
      initial="instant"
      style={props.style}
    >
      <StickToBottom.Content className={cls(`${prefixCls}`, props.classNames?.list)}>
        {props.children ? props.children : items.map(({ key, ...bubble }, index) => {
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
      <ScrollToBottom ref={scrollToBottomRef}></ScrollToBottom>
    </StickToBottom>
  </>;
};

const ForwardBubbleList = React.forwardRef(BubbleList);

export default ForwardBubbleList;
