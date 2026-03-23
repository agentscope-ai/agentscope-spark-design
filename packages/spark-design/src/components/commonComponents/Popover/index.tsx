import { getCommonConfig } from '@/config';
import { findClosestBySelector } from '@/libs/dom';
import { ensureRefWrapped } from '@/libs/react';
import { Popover, PopoverProps } from 'antd';
import React from 'react';

const SparkPopover = React.forwardRef<any, PopoverProps>((props, ref) => {
  const { children, ...restProps } = props;
  const isContentEmpty =
    restProps.content === '' ||
    restProps.content === undefined ||
    restProps.content === null;
  const isTitleEmpty =
    restProps.title === '' || restProps.title === undefined || restProps.title === null;
  const open =
    restProps.open !== undefined && restProps.open !== null
      ? restProps.open
      : isContentEmpty && isTitleEmpty
      ? false
      : undefined;
  const { antPrefix } = getCommonConfig();

  return (
    <Popover
      {...restProps}
      arrow={restProps.arrow || false}
      open={open}
      ref={ref}
      getPopupContainer={
        restProps.getPopupContainer ||
        ((triggerNode) => {
          return findClosestBySelector(triggerNode, `.${antPrefix}-app`);
        })
      }
    >
      {ensureRefWrapped(children, 'Popover')}
    </Popover>
  );
});

export default SparkPopover;
