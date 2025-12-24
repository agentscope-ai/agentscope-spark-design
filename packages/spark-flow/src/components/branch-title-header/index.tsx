import $i18n from '@/i18n';
import { IBranchItem } from '@/types/work-flow';
import { Select } from '@agentscope-ai/design';
import {
  SparkDeleteLine,
  SparkEditLine,
  SparkFalseLine,
  SparkTrueLine,
} from '@agentscope-ai/icons';
import { useSetState } from 'ahooks';
import { Flex, Input, message, Typography } from 'antd';
import React, { memo, useCallback, useRef } from 'react';
import './index.less';

export interface IBranchTitleHeaderProps {
  data: IBranchItem;
  onChange: (data: Partial<IBranchItem>) => void;
  deleteBranchItem: () => void;
  branches: IBranchItem[];
  disabled?: boolean;
}

export default memo(function BranchTitleHeader(props: IBranchTitleHeaderProps) {
  const [state, setState] = useSetState({
    isEdit: false,
    tempName: props.data.label,
  });
  const isComposingRef = useRef(false);

  const handleSure = () => {
    if (!state.tempName) {
      message.warning(
        $i18n.get({
          id: 'spark-flow.BranchTitleHeader.index.conditionGroupNameEmpty',
          dm: '条件组名称不能为空',
        }),
      );
      return;
    }
    if (
      props.branches.some(
        (item) => item.label === state.tempName && item.id !== props.data.id,
      )
    ) {
      message.warning(
        $i18n.get({
          id: 'spark-flow.BranchTitleHeader.index.conditionGroupNameExists',
          dm: '条件组名称已存在',
        }),
      );
      return;
    }
    props.onChange({ label: state.tempName });
    setState({ isEdit: false });
  };

  // handle Chinese input start event
  const handleCompositionStart = useCallback(() => {
    isComposingRef.current = true;
  }, []);

  // handle Chinese input end event
  const handleCompositionEnd = useCallback(() => {
    isComposingRef.current = false;
  }, []);

  // handle enter event
  const handlePressEnter = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      // if Chinese input is ongoing, do not handle enter event
      if (isComposingRef.current) {
        return;
      }

      // trigger confirm operation
      handleSure();

      // prevent default behavior (such as form submission)
      e.preventDefault();
    },
    [handleSure],
  );

  return (
    <Flex justify="space-between">
      {state.isEdit ? (
        <Flex className="flex-1" gap={8} align="center">
          <Input
            onCompositionStart={handleCompositionStart}
            onCompositionEnd={handleCompositionEnd}
            onPressEnter={handlePressEnter}
            value={state.tempName}
            onChange={(e) => setState({ tempName: e.target.value })}
            placeholder={$i18n.get({
              id: 'spark-flow.BranchTitleHeader.index.enterConditionGroupName',
              dm: '请输入条件组名称',
            })}
          />

          <SparkTrueLine
            onClick={handleSure}
            style={{ cursor: 'pointer' }}
            className="spark-flow-name-input-ok-btn"
          />

          <SparkFalseLine
            onClick={() =>
              setState({ isEdit: false, tempName: props.data.label })
            }
            style={{ cursor: 'pointer' }}
          />
        </Flex>
      ) : (
        <>
          <Flex align="center" gap={16}>
            <Typography.Text
              ellipsis={{ tooltip: props.data.label }}
              style={{ maxWidth: 120 }}
              className="spark-flow-panel-form-title"
            >
              {props.data.label}
            </Typography.Text>
            <Flex align="center" gap={4} className="text-[12px]">
              <span>
                {$i18n.get({
                  id: 'spark-flow.BranchTitleHeader.index.whenSatisfy',
                  dm: '当满足以下',
                })}
              </span>
              <Select
                disabled={props.disabled}
                className="spark-flow-logic-selector"
                value={props.data.logic}
                onChange={(val) => props.onChange({ logic: val })}
                options={[
                  {
                    label: $i18n.get({
                      id: 'spark-flow.BranchTitleHeader.index.all',
                      dm: '所有',
                    }),
                    value: 'and',
                  },
                  {
                    label: $i18n.get({
                      id: 'spark-flow.BranchTitleHeader.index.any',
                      dm: '任意',
                    }),
                    value: 'or',
                  },
                ]}
                popupMatchSelectWidth={false}
                size="small"
                variant="borderless"
              />

              <span>
                {$i18n.get({
                  id: 'spark-flow.BranchTitleHeader.index.conditions',
                  dm: '条件时',
                })}
              </span>
            </Flex>
          </Flex>
          <Flex gap={12}>
            <SparkEditLine
              className={props.disabled ? 'disabled-icon-btn' : ''}
              onClick={() => {
                if (props.disabled) return;
                setState({
                  isEdit: true,
                  tempName: props.data.label,
                });
              }}
              size={16}
              style={{ cursor: props.disabled ? 'not-allowed' : 'pointer' }}
            />

            <SparkDeleteLine
              onClick={props.disabled ? void 0 : props.deleteBranchItem}
              className={props.disabled ? 'disabled-icon-btn' : ''}
              size={16}
              style={{ cursor: props.disabled ? 'not-allowed' : 'pointer' }}
            />
          </Flex>
        </>
      )}
    </Flex>
  );
});
