import { useNodesReadOnly } from '@/hooks';
import $i18n from '@/i18n';
import { SparkAddCircleFill } from '@agentscope-ai/icons';
import { Tooltip } from 'antd';
import classNames from 'classnames';
import React, { memo } from 'react';
import { PopoverNodeMenu } from '../node-menu';

const AddNodeBtn = () => {
  const { nodesReadOnly } = useNodesReadOnly();
  return (
    <PopoverNodeMenu placement="top">
      <Tooltip
        title={$i18n.get({
          id: 'spark-flow.components.FlowTools.AddNodeBtn.addNode',
          dm: '添加节点',
        })}
      >
        <div
          className={classNames(
            'spark-flow-tool-icon-btn size-[32px] flex-center',
            {
              'spark-flow-tool-icon-btn-disabled': nodesReadOnly,
            },
          )}
        >
          <SparkAddCircleFill className="text-[20px]" />
        </div>
      </Tooltip>
    </PopoverNodeMenu>
  );
};

export default memo(AddNodeBtn);
