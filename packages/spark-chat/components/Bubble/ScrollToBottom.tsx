import React from 'react';
import { useProviderContext } from '@agentscope-ai/chat';
import cls from 'classnames';
import { IconButton } from '@agentscope-ai/design';
import { SparkDownArrowLine } from '@agentscope-ai/icons';


interface ScrollToBottomProps {
  visible: boolean;
  onClick: () => void;
}

const ScrollToBottomButton = ({ visible, onClick }: ScrollToBottomProps) => {
  const { getPrefixCls } = useProviderContext();

  const prefixCls = getPrefixCls('bubble-list-scroll-to-bottom');

  return (
    <div className={cls(prefixCls, `${prefixCls}-${visible ? 'show' : 'hide'}`)}>

      <IconButton
        icon={<SparkDownArrowLine />}
        shape='circle'
        onClick={onClick}
      />

    </div>
  );
};

export default ScrollToBottomButton;
