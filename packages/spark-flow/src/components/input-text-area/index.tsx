import {
  SparkClearLine,
  SparkDeleteLine,
  SparkFoldLine,
  SparkFoldLine2,
} from '@agentscope-ai/icons';
import classNames from 'classnames';
import React, { memo, useRef, useState } from 'react';
import VarInputTextArea, {
  IVariableInputReferProps,
} from '../var-input-text-area';
import { IVarTreeItem } from '../variable-tree-select';
import './index.less';

interface IInputTextAreaProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  maxLength?: number;
  showCount?: boolean;
  title?: React.ReactNode;
  onDelete?: () => void;
  disabled?: boolean;
  variableList: IVarTreeItem[];
}

export default memo(function InputTextArea(props: IInputTextAreaProps) {
  const [fold, setFold] = useState(true);
  const editorRef = useRef<IVariableInputReferProps>(null);
  return (
    <div
      className={classNames('spark-flow-input-text-area', {
        ['spark-flow-input-text-area-fold']: fold,
        ['spark-flow-input-text-area-fold-disabled']: props.disabled,
      })}
    >
      <div className="spark-flow-input-text-area-header">
        <div className="spark-flow-input-text-area-header-title">
          {props.title}
        </div>
        <div className="flex gap-[8px] items-center">
          <SparkDeleteLine
            size={16}
            style={{ cursor: props.disabled ? 'not-allowed' : 'pointer' }}
            onClick={props.disabled ? undefined : props.onDelete}
            className={props.disabled ? 'spark-flow-disabled-icon-btn' : ''}
          />
          <SparkClearLine
            size={16}
            style={{ cursor: props.disabled ? 'not-allowed' : 'pointer' }}
            onClick={
              props.disabled
                ? undefined
                : () => {
                    editorRef.current?.setEditorValue('');
                  }
            }
            className={props.disabled ? 'spark-flow-disabled-icon-btn' : ''}
          />
          {fold ? (
            <SparkFoldLine
              size={16}
              style={{ cursor: props.disabled ? 'not-allowed' : 'pointer' }}
              onClick={props.disabled ? undefined : () => setFold(!fold)}
              className={props.disabled ? 'spark-flow-disabled-icon-btn' : ''}
            />
          ) : (
            <SparkFoldLine2
              size={16}
              style={{ cursor: props.disabled ? 'not-allowed' : 'pointer' }}
              onClick={props.disabled ? undefined : () => setFold(!fold)}
              className={props.disabled ? 'spark-flow-disabled-icon-btn' : ''}
            />
          )}
        </div>
      </div>
      <VarInputTextArea
        ref={editorRef}
        variableList={props.variableList}
        disabled={props.disabled}
        value={props.value}
        onChange={(val) => props.onChange(val || '')}
      />
    </div>
  );
});
