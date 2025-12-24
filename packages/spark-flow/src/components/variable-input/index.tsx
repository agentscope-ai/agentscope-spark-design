import $i18n from '@/i18n';
import { IValueType } from '@/types/work-flow';
import { defaultValueMap } from '@/utils/default-values';
import { Input, InputNumber, Select, Space } from 'antd';
import React, { memo, useMemo } from 'react';
import CodeInput from '../code-input';
import { VariableTypeSelect } from '../custom-outputs-form';
import VarTypePrefix from '../var-type-prefix';
import './index.less';

interface IVariableInputProps {
  value?: string;
  type?: IValueType;
  onChange: (value: { value?: string; type?: IValueType }) => void;
  placeholder?: string;
  disabled?: boolean;
  isCompact?: boolean;
  prefix?: string;
  variant?: 'borderless';
  enabledTypes?: IValueType[]; // 支持的类型，白名单策略，优先于disabledTypes
  disabledTypes?: IValueType[]; // 禁用的类型，黑名单策略，如果设置了enabledTypes，这个参数失效
  onErrorChange?: (hasErrors: boolean, errors?: string[]) => void;
  className?: string;
  style?: React.CSSProperties;
}

export const VariableBaseInput = memo(
  ({
    value,
    onChange,
    type = 'String',
    placeholder,
    disabled,
    prefix,
    variant,
    isCompact,
    className,
    style,
    onErrorChange,
  }: IVariableInputProps) => {
    const renderType = useMemo(() => {
      switch (type) {
        case 'Number':
          return (
            <InputNumber
              className="w-full"
              placeholder={
                placeholder ||
                $i18n.get({
                  id: 'main.components.VariableBaseInput.index.inputValue',
                  dm: '输入变量值',
                })
              }
              stringMode
              prefix={prefix ? <VarTypePrefix prefix={prefix} /> : undefined}
              variant={variant}
              disabled={disabled}
              value={value}
              onChange={(val) =>
                onChange({ value: val ? val.toString() : undefined })
              }
            />
          );
        case 'String':
          return (
            <Input
              disabled={disabled}
              prefix={prefix ? <VarTypePrefix prefix={prefix} /> : undefined}
              variant={variant}
              placeholder={
                placeholder ||
                $i18n.get({
                  id: 'spark-flow.components.VariableInput.index.inputVariableValue',
                  dm: '输入变量值',
                })
              }
              value={value}
              onChange={(e) => onChange({ value: e.target.value })}
            />
          );

        case 'Boolean':
          return (
            <Select
              disabled={disabled}
              className="w-full"
              value={value}
              placeholder={$i18n.get({
                id: 'spark-flow.components.VariableInput.index.select',
                dm: '请选择',
              })}
              options={[
                {
                  label: $i18n.get({
                    id: 'spark-flow.components.VariableInput.index.yes',
                    dm: '是',
                  }),
                  value: 'true',
                },
                {
                  label: $i18n.get({
                    id: 'spark-flow.components.VariableInput.index.no',
                    dm: '否',
                  }),
                  value: 'false',
                },
              ]}
              onChange={(val) => onChange({ value: val })}
              variant={variant}
            />
          );

        case 'Object':
        case 'Array<Object>':
        case 'Array<String>':
        case 'Array<Number>':
        case 'Array<Boolean>':
        case 'File':
        case 'Array<File>':
          return (
            <CodeInput
              style={{ overflow: 'auto', ...style }}
              className={className}
              isCompact={isCompact}
              disabled={disabled}
              type={type}
              value={value}
              onChange={(val) => onChange({ value: val })}
              onErrorChange={onErrorChange}
            />
          );
        default:
          return null;
      }
    }, [type, value, onChange]);
    return renderType;
  },
);

const VariableInput = ({
  value,
  type,
  onChange,
  disabled,
  enabledTypes,
  disabledTypes = ['File', 'Array<File>'],
}: IVariableInputProps) => {
  return (
    <Space.Compact block className="variable-input-container flex-1 w-[1px]">
      <VariableTypeSelect
        type={type}
        className="variable-type-select"
        style={{ width: 70 }}
        disabled={disabled}
        isMini
        enabledTypes={enabledTypes}
        disabledTypes={disabledTypes}
        handleChange={(val) =>
          onChange({ type: val, value: defaultValueMap[val] })
        }
      />

      <div className="variable-input-content flex-1 w-[1px]">
        <VariableBaseInput
          disabled={disabled}
          isCompact
          value={value}
          type={type}
          onChange={onChange}
        />
      </div>
    </Space.Compact>
  );
};

export default memo(VariableInput);
