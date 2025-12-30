import React, { memo } from 'react';
import './index.less';
import classNames from 'classnames';

interface IFlowPanel {
  children?: React.ReactNode[] | React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export default memo(function FlowPanel(props: IFlowPanel) {
  return (
    <div className={classNames("spark-flow-panel-group absolute flex gap-[16px] flex-nowrap", props.className)} style={props.style}>
      {props.children}
    </div>
  );
});
