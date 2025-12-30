import { Divider } from 'antd';
import React, { memo } from 'react';
import AddNodeBtn from './add-node-btn';
import HistoryBtn from './history-btn';
import './index.less';
import LayoutBtn from './layout-btn';
import MiniMapBtn from './mini-map-btn';
import ScaleBtn from './scale-btn';
import ShortKeyBtn from './short-key-btn';
import TouchModeBtn from './touch-mode-btn';
import classNames from 'classnames';

export interface IFlowToolsProps {
  className?: string;
  style?: React.CSSProperties;
}

export default memo(function FlowTools(props: IFlowToolsProps) {
  return (
    <div
      id="spark-flow-bottom-tools-container"
      className={classNames("nopan absolute items-center flex left-[16px] bottom-[16px] gap-[12px]", props.className)}
      style={props.style}
    >
      <div className="spark-flow-tools gap-[8px] items-center flex">
        <MiniMapBtn />
        <Divider type="vertical" className="m-0" />
        <ScaleBtn />
      </div>
      <div className="spark-flow-tools gap-[8px] items-center flex">
        <AddNodeBtn />
        <LayoutBtn />
        <Divider type="vertical" className="m-0" />
        <TouchModeBtn />
        <Divider type="vertical" className="m-0" />
        <ShortKeyBtn />
      </div>
      <HistoryBtn />
    </div>
  );
});
