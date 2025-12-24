import { useStore } from '@/flow/context';
import { MiniMap, Node } from '@xyflow/react';
import { useMemoizedFn } from 'ahooks';
import classNames from 'classnames';
import React, { memo } from 'react';
import './index.less';

export default memo(function FlowMiniMap() {
  const showMiniMap = useStore((state) => state.showMiniMap);

  const getNodeClassName = useMemoizedFn((node: Node) => {
    return classNames(
      'spark-flow-mini-map-node',
      node.type && `spark-flow-mini-map-node_${node.type}`,
    );
  });

  return (
    showMiniMap && (
      <MiniMap
        ariaLabel={null}
        pannable
        draggable
        zoomable
        style={{ width: 220, height: 120 }}
        className="spark-flow-mini-map"
        nodeClassName={getNodeClassName}
      />
    )
  );
});
