import React, { useState, useEffect } from 'react';
import { useProviderContext } from '@agentscope-ai/chat';
import cls from 'classnames';
import { ScrollToBottomOptions, useStickToBottomContext } from 'use-stick-to-bottom';
import { IconButton } from '@agentscope-ai/design';
import { SparkDownArrowLine } from '@agentscope-ai/icons';


const ScrollToBottomButton: React.ForwardRefRenderFunction<{
  scrollToBottom(options?: ScrollToBottomOptions): void
}> = (_, ref) => {
  const { getPrefixCls } = useProviderContext();
  const { isAtBottom, scrollToBottom } = useStickToBottomContext();

  React.useImperativeHandle(ref, () => ({
    scrollToBottom: (options?: ScrollToBottomOptions) => {
      options = options || {
        animation: 'instant'
      }
      scrollToBottom(options)
    },
  }));


  const prefixCls = getPrefixCls('bubble-list-scroll-to-bottom');

  return (
    <div className={cls(prefixCls, `${prefixCls}-${!isAtBottom ? 'show' : 'hide'}`)}>

      <IconButton
        icon={<SparkDownArrowLine />}
        shape='circle'
        onClick={() => scrollToBottom({
          animation: 'instant'
        })}
      />

    </div>
  );
};

export default React.forwardRef(ScrollToBottomButton);
