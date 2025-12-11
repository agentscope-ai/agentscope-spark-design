import { useStore } from '@/flow/context';
import { useNodesInteraction } from '@/hooks';
import $i18n from '@/i18n';
import { ICheckListItem, IWorkFlowNode } from '@/types/work-flow';
import { Empty, IconButton } from '@agentscope-ai/design';
import {
  SparkFalseLine,
  SparkOrganizeAnswerFill,
  SparkWarningCircleLine,
} from '@agentscope-ai/icons';
import { useStore as useFlowStore } from '@xyflow/react';
import { Badge, Popover, Typography } from 'antd';
import { debounce } from 'lodash-es';
import React, { memo, useCallback, useEffect, useMemo } from 'react';
import FlowIcon from '../flow-icon';
import './index.less';

export default memo(function CheckListBtn() {
  const showCheckList = useStore((state) => state.showCheckList);
  const setShowCheckList = useStore((state) => state.setShowCheckList);
  const nodes = useFlowStore((store) => store.nodes) as IWorkFlowNode[];
  const edges = useFlowStore((store) => store.edges);
  const nodeSchemaMap = useStore((store) => store.nodeSchemaMap);
  const checkList = useStore((state) => state.checkList);
  const setCheckList = useStore((state) => state.setCheckList);
  const { handleNodeClickByNodeId } = useNodesInteraction();

  const checkNodesList = useCallback(() => {
    const list: ICheckListItem[] = [];

    nodes.forEach((item) => {
      const nodeInfo = nodeSchemaMap[item.type as string];
      if (!nodeInfo?.checkValid) return;
      const errorMsgs = nodeInfo.checkValid(item.data);
      if (errorMsgs.length > 0) {
        list.push({
          nodeId: item.id,
          errorMsgs,
          nodeType: item.type,
          nodeName: item.data.label,
        });
      }
    });

    setCheckList(list);
  }, [nodes, edges, nodeSchemaMap, setCheckList]);

  const debouncedCheckNodesList = useMemo(
    () => debounce(checkNodesList, 300),
    [checkNodesList],
  );

  useEffect(() => {
    debouncedCheckNodesList();
    return () => {
      debouncedCheckNodesList.cancel();
    };
  }, [nodes, edges, debouncedCheckNodesList]);

  const memoCheckList = useMemo(() => {
    return (
      <div>
        <div className="spark-flow-check-list-header flex-justify-between">
          <span className="spark-flow-check-list-header-title">
            {$i18n.get(
              {
                id: 'spark-flow.components.CheckListBtn.index.checklistVar1',
                dm: '检查清单 · {var1}',
              },
              { var1: `${checkList.length}` },
            )}
          </span>
          <div className="p-[4px] cursor-pointer">
            <SparkFalseLine
              onClick={() => setShowCheckList(false)}
              className="spark-flow-operator-icon-with-bg"
            />
          </div>
        </div>
        {!checkList.length ? (
          <div className="spark-flow-check-list-empty flex flex-col items-center">
            <Empty
              description={$i18n.get({
                id: 'spark-flow.components.CheckListBtn.index.allResolved',
                dm: '所有清单项已解决',
              })}
              type="success"
            />
          </div>
        ) : (
          <div className="spark-flow-check-list-content px-[8px] pb-[8px] overflow-y-auto flex flex-col gap-[8px]">
            {checkList.map((item) => (
              <div
                onClick={() => {
                  handleNodeClickByNodeId(item.nodeId);
                  setShowCheckList(false);
                }}
                key={item.nodeId}
                className="spark-flow-node-check-container"
              >
                <div className="spark-flow-node-check-container-header">
                  <FlowIcon size="small" nodeType={item.nodeType} />
                  <Typography.Text
                    ellipsis={{ tooltip: item.nodeName }}
                    className="spark-flow-node-check-container-header-title"
                  >
                    {item.nodeName}
                  </Typography.Text>
                </div>
                <div className="spark-flow-node-check-container-content">
                  {item.errorMsgs.map((msg, index) => (
                    <div
                      className="spark-flow-node-check-container-content-item"
                      key={index}
                    >
                      <SparkWarningCircleLine
                        size={16}
                        className="spark-flow-node-check-container-content-item-icon"
                      />

                      <span className="spark-flow-node-check-container-content-item-title">
                        {msg.label}
                      </span>
                      <span className="spark-flow-node-check-container-content-item-error">
                        {msg.error}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }, [showCheckList, checkList]);

  return (
    <Popover
      getPopupContainer={(ele) => ele}
      content={memoCheckList}
      trigger={'click'}
      placement="bottomRight"
      open={showCheckList}
      onOpenChange={setShowCheckList}
    >
      <div className="spark-flow-check-list-btn">
        <IconButton
          className="spark-flow-check-list-btn-child"
          icon={<SparkOrganizeAnswerFill />}
        >
          {!!checkList.length && (
            <Badge
              className="spark-flow-check-list-btn-count"
              showZero
              count={checkList.length}
              color="orange"
            />
          )}
        </IconButton>
      </div>
    </Popover>
  );
});
