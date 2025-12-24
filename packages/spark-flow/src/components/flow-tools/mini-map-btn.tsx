import { useStore } from '@/flow/context';
import $i18n from '@/i18n';
import { SparkFloatingLine24Px } from '@agentscope-ai/icons';
import { Tooltip } from 'antd';
import classNames from 'classnames';
import React, { memo } from 'react';

export default memo(function MiniMapBtn() {
  const showMiniMap = useStore((state) => state.showMiniMap);
  const setShowMiniMap = useStore((state) => state.setShowMiniMap);

  return (
    <Tooltip
      rootClassName="spark-flow-tool-tooltip"
      title={$i18n.get({
        id: 'spark-flow.components.FlowTools.MiniMapBtn.miniMap',
        dm: '缩略图',
      })}
    >
      <div
        onClick={() => setShowMiniMap(!showMiniMap)}
        className={classNames(
          'spark-flow-tool-icon-btn size-[32px] flex-center',
          {
            ['spark-flow-tool-icon-btn-active']: showMiniMap,
          },
        )}
      >
        <SparkFloatingLine24Px size={20} />
      </div>
    </Tooltip>
  );
});
