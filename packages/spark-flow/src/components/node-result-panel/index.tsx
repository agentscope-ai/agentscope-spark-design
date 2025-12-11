import { useStore } from '@/flow/context';
import $i18n from '@/i18n';
import { IWorkFlowNodeResultItem, IWorkFlowStatus } from '@/types/work-flow';
import { Pagination } from '@agentscope-ai/design';
import { SparkUpLine } from '@agentscope-ai/icons';
import { Typography } from 'antd';
import classNames from 'classnames';
import React, { memo, useMemo, useState } from 'react';
import './index.less';
interface INodeResultPanelProps {
  data: IWorkFlowNodeResultItem;
  onNodeClick?: (nodeId: string) => void;
}

const statusNameMap: Record<IWorkFlowStatus, string> = {
  success: $i18n.get({
    id: 'spark-flow.components.NodeResultPanel.index.success',
    dm: '成功',
  }),
  executing: $i18n.get({
    id: 'spark-flow.components.NodeResultPanel.index.executing',
    dm: '执行中',
  }),
  skip: $i18n.get({
    id: 'spark-flow.components.NodeResultPanel.index.skipped',
    dm: '跳过',
  }),
  fail: $i18n.get({
    id: 'spark-flow.components.NodeResultPanel.index.failed',
    dm: '失败',
  }),
  stop: $i18n.get({
    id: 'spark-flow.components.NodeResultPanel.index.stopped',
    dm: '停止',
  }),
  wait: $i18n.get({
    id: 'spark-flow.components.NodeResultPanel.index.paused',
    dm: '暂停',
  }),
};

const ResultContent = (props: {
  input?: string;
  output?: string;
  className?: string;
}) => {
  const { input, output, className } = props;
  const slots = useStore((state) => state.slots);
  const resultContent = slots.nodeResultContentRenderer?.(props) || null;
  return (
    <div className={classNames('spark-flow-node-result-content', className)}>
      {resultContent || (
        <>
          {!!input && (
            <>
              <div className="spark-flow-node-result-content-title">
                {$i18n.get({
                  id: 'spark-flow.components.NodeResultPanel.index.input',
                  dm: '输入',
                })}
              </div>
              <div className="spark-flow-node-result-content-area">{input}</div>
            </>
          )}
          {!!output && (
            <>
              <div className="spark-flow-node-result-content-title">
                {$i18n.get({
                  id: 'spark-flow.components.NodeResultPanel.index.output',
                  dm: '输出',
                })}
              </div>
              <div className="spark-flow-node-result-content-area">
                {output}
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
};

const NodeResultPanel = (props: INodeResultPanelProps) => {
  const [expand, setExpand] = useState(false);
  const isBatch = props.data.isBatch && !!props.data.batches;
  const [batchIndex, setBatchIndex] = useState(1);

  const inputContent = useMemo(() => {
    if (isBatch) {
      return props.data.batches[batchIndex - 1]?.input;
    }
    return props.data.input;
  }, [props.data, batchIndex]);

  const outputContent = useMemo(() => {
    if (isBatch) {
      return props.data.batches[batchIndex - 1]?.output;
    }
    return props.data.output;
  }, [props.data, batchIndex]);

  const errorInfoContent = useMemo(() => {
    if (isBatch) {
      return props.data.batches[batchIndex - 1]?.errorInfo;
    }
    return props.data.errorInfo;
  }, [props.data, batchIndex]);

  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
      }}
      className={classNames(
        `spark-flow-node-result-panel nodrag spark-flow-node-result-panel-${props.data.nodeStatus}`,
        {
          ['spark-flow-node-result-panel-hidden']: !expand,
        },
      )}
    >
      <div
        className="spark-flow-node-result-header flex flex-col gap-[4px]"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div
          className="flex-justify-between"
          onClick={(e) => {
            setExpand(!expand);
          }}
        >
          <div className="flex-center gap-[8px]">
            <span className="spark-flow-node-result-status">
              {statusNameMap[props.data.nodeStatus]}
            </span>
            <span className="spark-flow-node-result-time">
              {props.data.nodeExecTime}
            </span>
          </div>
          {props.data.nodeStatus !== 'skip' && (
            <SparkUpLine className="text-base spark-flow-node-result-expand-icon" />
          )}
        </div>
        {expand && isBatch && (
          <Pagination
            current={batchIndex}
            total={props.data.batches.length}
            pageSize={1}
            onChange={(page) => setBatchIndex(page)}
            simple
            // @ts-ignore
            hideTips
            hideSwitchButton
            onClick={(e: React.MouseEvent<HTMLDivElement>) =>
              e.stopPropagation()
            }
          />
        )}
        {expand && props.data.nodeStatus === 'fail' && (
          <Typography.Text
            ellipsis={{
              tooltip: {
                title: errorInfoContent,
                destroyTooltipOnHide: true,
              },
            }}
            className={'spark-flow-node-result-error-info'}
          >
            {errorInfoContent}
          </Typography.Text>
        )}
      </div>
      {expand && (!!inputContent || !!outputContent) && (
        <>
          <ResultContent
            input={inputContent}
            output={outputContent}
            className="nowheel"
          />
        </>
      )}
    </div>
  );
};

export default memo(NodeResultPanel);
