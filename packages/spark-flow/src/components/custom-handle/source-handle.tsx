import { useNodesInteraction } from '@/hooks';
import { SparkPlusLine } from '@agentscope-ai/icons';
import { Handle, Position } from '@xyflow/react';
import React, { useState } from 'react';
import { PopoverNodeMenu } from '../node-menu';
import classNames from 'classnames';

interface IProps {
  handleId: string;
  nodeType: string;
  nodeId: string;
  className?: string;
  parentId?: string;
}

export default function SourceHandle(props: IProps) {
  const [open, setOpen] = useState(false);
  const { handleSelectNode } = useNodesInteraction();

  return (
    <PopoverNodeMenu
      source={{
        id: props.nodeId,
        type: props.nodeType,
        handleId: props.handleId,
      }}
      parentId={props.parentId}
      onOpenChange={(val) => {
        if (val) {
          handleSelectNode(props.nodeId);
        }
        setOpen(val);
      }}
    >
      <Handle
        onClick={(e) => {
          e.stopPropagation();
          e.preventDefault();
        }}
        className={classNames('spark-flow-source-handle','flex-center', open ? 'spark-flow-source-handle-open' : '', props.className)}
        type="source"
        position={Position.Right}
        id={props.handleId}
      >
        <SparkPlusLine size={14} className="spark-flow-source-handle-add-btn" />
      </Handle>
    </PopoverNodeMenu>
  );
}
