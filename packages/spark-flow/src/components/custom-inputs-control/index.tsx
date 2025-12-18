import $i18n from '@/i18n';
import { INodeDataInputParamItem, IValueType } from '@/types/work-flow';
import { extractVariables, matchVariableFromVarItem } from '@/utils';
import {
  Button,
  Form,
  getCommonConfig,
  Input,
  Select,
  SelectProps,
} from '@agentscope-ai/design';
import {
  SparkClearLine,
  SparkDeleteLine,
  SparkEditLine,
  SparkPlusLine,
  SparkQuotationLine,
} from '@agentscope-ai/icons';
import { theme, Typography } from 'antd';
import classNames from 'classnames';
import React, { memo, useCallback, useEffect, useMemo } from 'react';
import FlowIcon from '../flow-icon';
import VariableInput, { VariableBaseInput } from '../variable-input';
import VariableTreeSelect, {
  IVarItem,
  IVarTreeItem,
} from '../variable-tree-select';
import VarTypePrefix, { typeAbbr } from '../var-type-prefix';
import './index.less';

export interface ICustomInputsControlProps {
  value?: INodeDataInputParamItem[];
  onChange: (value: INodeDataInputParamItem[]) => void;
  variableList?: IVarTreeItem[];
  disabledValueFrom?: boolean;
  disabled?: boolean;
  disabledKey?: boolean;
  typeSwitchDisabled?: boolean;
  enabledTypes?: IValueType[]; // 支持的类型，白名单策略，优先于disabledTypes
  disabledTypes?: IValueType[]; // 禁用的类型，黑名单策略，如果设置了enabledTypes，这个参数失效
  defaultType?: IValueType;
  hideAdd?: boolean; // 隐藏添加变量按钮
  hideDelete?: boolean; // 隐藏删除变量按钮
  noValidate?: boolean; // 禁用变量名验证
}

export interface IVariableFormCompProps {
  data: Omit<INodeDataInputParamItem, 'key'>;
  onChange: (val: Partial<INodeDataInputParamItem>) => void;
  variableList?: IVarTreeItem[];
  disabled?: boolean;
  typeSwitchDisabled?: boolean;
  isCompact?: boolean;
  enabledTypes?: IValueType[]; // 支持的类型，白名单策略，优先于disabledTypes
  disabledTypes?: IValueType[]; // 禁用的类型，黑名单策略，如果设置了enabledTypes，这个参数失效
}

export const variableLabelRender = ({
  value,
  nodeInfo,
  hiddenType,
}: {
  value: Omit<INodeDataInputParamItem, 'key'>;
  nodeInfo?: { nodeName: string; variableKey: string; nodeType: string };
  hiddenType?: boolean;
}) => {
  if (!!value && !nodeInfo) {
    return (
      <>
        {$i18n.get({
          id: 'spark-flow.components.VarInputTextArea.index.invalidVariable',
          dm: '无效变量',
        })}
      </>
    );
  }
  if (value.valueFrom !== 'refer' || !value.value || !nodeInfo) {
    return null;
  }

  return (
    <div className="spark-flow-var-label flex text-[12px] items-center gap-[2px]">
      <FlowIcon noWidth nodeType={nodeInfo.nodeType} showBg={false} />
      <Typography.Text
        ellipsis={{ tooltip: nodeInfo.nodeName }}
        style={{ maxWidth: '35%' }}
      >
        {nodeInfo.nodeName}
      </Typography.Text>
      <Typography.Text
        ellipsis={{ tooltip: nodeInfo.variableKey }}
        className="spark-flow-var-name"
      >
        {`/${nodeInfo.variableKey}`}
      </Typography.Text>
      {!hiddenType && (
        <span className="spark-flow-var-type">{`[${typeAbbr[value.type as keyof typeof typeAbbr]}]`}</span>
      )}
    </div>
  );
};

/**
 * 标记指定类型的变量为禁用状态，但子变量不受影响
 * @param items 变量列表
 * @param enabledTypes 支持的类型，白名单策略
 * @param disabledTypes 要禁用的类型列表，黑名单策略
 * @returns 标记后的变量列表
 */
const markDisabledVarItems = (
  items: IVarItem[],
  enabledTypes?: IValueType[],
  disabledTypes?: IValueType[],
): IVarItem[] => {
  // 如果既没有白名单也没有黑名单，不做任何标记
  if (
    (!enabledTypes || !enabledTypes.length) &&
    (!disabledTypes || !disabledTypes.length)
  ) {
    return items;
  }

  return items.map((item) => {
    let isDisabled = false;

    // 白名单优先：如果设置了enabledTypes，只有在白名单中的类型才可用
    if (enabledTypes && enabledTypes.length > 0) {
      isDisabled = !enabledTypes.includes(item.type as IValueType);
    }
    // 黑名单策略：如果没有设置enabledTypes，使用disabledTypes
    else if (disabledTypes && disabledTypes.length > 0) {
      isDisabled = disabledTypes.includes(item.type as IValueType);
    }

    return {
      ...item,
      disabled: isDisabled,
      // 递归处理子变量，子变量不继承父变量的禁用状态
      children: item.children
        ? markDisabledVarItems(item.children, enabledTypes, disabledTypes)
        : undefined,
    };
  });
};

/**
 * 标记变量树列表中禁用类型的变量
 */
const markDisabledVarTreeItems = (
  treeItems: IVarTreeItem[],
  enabledTypes?: IValueType[],
  disabledTypes?: IValueType[],
): IVarTreeItem[] => {
  if (
    (!enabledTypes || !enabledTypes.length) &&
    (!disabledTypes || !disabledTypes.length)
  ) {
    return treeItems;
  }

  return treeItems.map((node) => ({
    ...node,
    children: markDisabledVarItems(node.children, enabledTypes, disabledTypes),
  }));
};

export const VariableSelector = memo(
  (props: {
    value: Omit<INodeDataInputParamItem, 'key'>;
    onChange: (val: Partial<INodeDataInputParamItem>) => void;
    variableList?: IVarTreeItem[];
    prefix?: SelectProps['prefix'];
    variant?: SelectProps['variant'];
    disabled?: boolean;
    enabledTypes?: IValueType[];
    disabledTypes?: IValueType[];
  }) => {
    const markedVariableList = useMemo(() => {
      if (
        !props.variableList ||
        ((!props.enabledTypes || !props.enabledTypes.length) &&
          (!props.disabledTypes || !props.disabledTypes.length))
      ) {
        return props.variableList;
      }
      return markDisabledVarTreeItems(
        props.variableList,
        props.enabledTypes,
        props.disabledTypes,
      );
    }, [props.variableList, props.enabledTypes, props.disabledTypes]);

    const nodeInfo = useMemo(() => {
      if (!props.value.value) return;
      const finalValue = extractVariables(
        props.value.value.replace(/[\[\]]/g, ''),
      )[0];
      const list = finalValue?.split('.');
      if (!list?.length) return;
      const [nodeId, ...variableKeyList] = list;
      const targetNode = markedVariableList?.find(
        (node) => node.nodeId === nodeId,
      );
      if (!targetNode) return;
      const targetVar = matchVariableFromVarItem(
        props.value.value,
        targetNode.children || [],
      );
      if (!targetVar) return;
      return {
        nodeName: targetNode.label as string,
        variableKey: variableKeyList.join('.'),
        nodeType: targetNode.nodeType,
      };
    }, [props.value, markedVariableList]);

    return (
      <VariableTreeSelect
        onChange={(val) => {
          props.onChange({
            value: val.value,
            type: val.type,
          });
        }}
        disabled={props.disabled}
        options={markedVariableList}
      >
        <Select
          disabled={props.disabled}
          placeholder={$i18n.get({
            id: 'spark-flow.components.CustomInputsControl.index.selectVariable',
            dm: '请选择变量',
          })}
          labelRender={() =>
            variableLabelRender({
              value: props.value,
              nodeInfo,
              hiddenType: !!props.prefix,
            })
          }
          className={classNames('w-full', 'spark-flow-variable-select')}
          open={false}
          value={!props.value.value ? undefined : props.value.value}
          prefix={
            props.prefix ? (
              <VarTypePrefix prefix={props.prefix as string} />
            ) : undefined
          }
          variant={props.variant}
        />
      </VariableTreeSelect>
    );
  },
);

export const VariableFormComp = memo((props: IVariableFormCompProps) => {
  if (props.data.valueFrom === 'clear')
    return (
      <Input
        className="flex-1"
        disabled
        placeholder={$i18n.get({
          id: 'spark-flow.components.CustomInputsControl.index.noInputNeeded',
          dm: '不需要输入值',
        })}
      />
    );
  if (props.data.valueFrom === 'refer')
    return (
      <VariableSelector
        disabled={props.disabled}
        value={props.data}
        onChange={props.onChange}
        variableList={props.variableList}
        enabledTypes={props.enabledTypes}
        disabledTypes={props.disabledTypes}
      />
    );

  if (props.data.valueFrom === 'input') {
    if (props.typeSwitchDisabled) {
      return (
        <div className="flex-1">
          <VariableBaseInput
            isCompact={props.isCompact}
            disabled={props.disabled}
            value={props.data.value}
            type={props.data.type}
            onChange={props.onChange}
            prefix={props.data.type}
          />
        </div>
      );
    }
    return (
      <VariableInput
        enabledTypes={props.enabledTypes}
        disabledTypes={props.disabledTypes}
        disabled={props.disabled}
        value={props.data.value}
        type={props.data.type}
        onChange={props.onChange}
      />
    );
  }
});

export const variableFromLabelRender = (value: string) => {
  if (value === 'refer') return <SparkQuotationLine size={16} />;
  if (value === 'input') return <SparkEditLine size={16} />;
  if (value === 'clear') return <SparkClearLine size={16} />;
  return null;
};

export const VALUE_FROM_OPTIONS = [
  {
    label: (
      <div className="flex items-center gap-[8px]">
        <SparkQuotationLine size={16} />
        {$i18n.get({
          id: 'spark-flow.components.CustomInputsControl.index.reference',
          dm: '引用',
        })}
      </div>
    ),

    value: 'refer',
  },
  {
    label: (
      <div className="flex items-center gap-[8px]">
        <SparkEditLine size={16} />
        {$i18n.get({
          id: 'spark-flow.components.CustomInputsControl.index.input',
          dm: '输入',
        })}
      </div>
    ),

    value: 'input',
  },
];

/**
 * 创建变量名验证规则
 * @param allValues 所有变量的值数组，用于检查重复
 * @param currentIndex 当前编辑的变量索引
 */
const createVariableNameRules = (
  allValues: INodeDataInputParamItem[],
  currentIndex: number,
) => [
  {
    validator: (_: any, value: string) => {
      if (!value || value.trim() === '') {
        return Promise.resolve();
      }

      // 检查是否以数字开头
      if (/^\d/.test(value)) {
        return Promise.reject(
          new Error(
            $i18n.get({
              id: 'spark-flow.components.CustomInputsControl.index.variableNameCannotStartWithNumber',
              dm: '变量名不能以数字开头',
            }),
          ),
        );
      }

      // 检查是否包含非法字符
      if (!/^[a-zA-Z_][a-zA-Z0-9_]*$/.test(value)) {
        return Promise.reject(
          new Error(
            $i18n.get({
              id: 'spark-flow.components.CustomInputsControl.index.variableNameOnlyAllowLettersNumbersUnderscores',
              dm: '变量名只能包含字母、数字和下划线',
            }),
          ),
        );
      }

      // 检查是否重复
      const isDuplicate = allValues.some(
        (item, index) =>
          index !== currentIndex && item.key === value && item.key !== '',
      );
      if (isDuplicate) {
        return Promise.reject(
          new Error(
            $i18n.get({
              id: 'spark-flow.components.CustomInputsControl.index.variableNameDuplicate',
              dm: '变量名不能重复',
            }),
          ),
        );
      }

      return Promise.resolve();
    },
  },
];

export default memo(function CustomInputsControl(
  props: ICustomInputsControlProps,
) {
  const { value = [] as INodeDataInputParamItem[] } = props;
  const { token } = theme.useToken();
  const [form] = Form.useForm();

  // 同步 value 到 form
  useEffect(() => {
    const formValues: Record<string, string> = {};
    value.forEach((item, index) => {
      formValues[`var_${index}`] = item.key;
    });
    form.setFieldsValue(formValues);
  }, [value, form]);

  const changeRowValue = useCallback(
    (ind: number, payload: Partial<INodeDataInputParamItem>) => {
      const newVal = value.map((item, index) => {
        if (index === ind) {
          if (payload.valueFrom === 'input' && !payload.type) {
            payload.type = 'String';
          }
          return { ...item, ...payload };
        }
        return item;
      });
      props.onChange(newVal);
    },
    [props.onChange, value],
  );

  const handleAddVar = useCallback(() => {
    props.onChange([
      ...value,
      { key: '', valueFrom: 'refer', type: props.defaultType || 'String' },
    ]);
  }, [props.defaultType, props.onChange, value]);

  const removeVariable = useCallback(
    (index: number) => {
      props.onChange(value.filter((_, i) => i !== index));
    },
    [props.onChange, value],
  );

  const { antPrefix } = getCommonConfig();

  return (
    <Form form={form} component={false}>
      <div className="spark-flow-inputs-form-label flex gap-[8px]">
        <div style={{ width: props.disabledValueFrom ? 146 : 84 }}>
          {$i18n.get({
            id: 'spark-flow.components.CustomInputsControl.index.variableName',
            dm: '变量名',
          })}
        </div>
        {!props.disabledValueFrom && (
          <div style={{ width: 60 }}>
            {$i18n.get({
              id: 'spark-flow.components.CustomInputsControl.index.referenceType',
              dm: '引用方式',
            })}
          </div>
        )}
        <div>
          {$i18n.get({
            id: 'spark-flow.components.CustomInputsControl.index.value',
            dm: '值',
          })}
        </div>
      </div>
      {value.map((item, index) => (
        <div
          key={index}
          className="spark-flow-inputs-form-item flex gap-[8px] items-stretch w-full"
        >
          <Form.Item
            name={`var_${index}`}
            style={{ width: props.disabledValueFrom ? 146 : 84, marginBottom: 0, flexShrink: 0 }}
            validateTrigger={['onChange', 'onBlur']}
            rules={props.noValidate ? [] : createVariableNameRules(value, index)}
          >
            <Input
              placeholder={$i18n.get({
                id: 'spark-flow.components.CustomInputsControl.index.enterVariableName',
                dm: '请输入变量名',
              })}
              onChange={(e) => changeRowValue(index, { key: e.target.value })}
              disabled={props.disabled || props.disabledKey}
              suffix={
                item.required ? (
                  <span
                    className="text-[14px]"
                    style={{ color: token.colorError }}
                  >
                    *
                  </span>
                ) : null
              }
            />
          </Form.Item>
          {!props.disabledValueFrom && (
            <Select
              style={{ width: 60 }}
              className="flex-shrink-0 spark-flow-variable-from-select"
              value={item.valueFrom}
              onChange={(val) =>
                changeRowValue(index, { valueFrom: val, value: void 0 })
              }
              disabled={props.disabled}
              options={VALUE_FROM_OPTIONS}
              labelRender={(props) =>
                variableFromLabelRender(props.value as string)
              }
              popupMatchSelectWidth={false}
            />
          )}
          <VariableFormComp
            onChange={(payload) => changeRowValue(index, payload)}
            data={item}
            disabled={props.disabled}
            variableList={props.variableList}
            typeSwitchDisabled={props.typeSwitchDisabled}
            enabledTypes={props.enabledTypes}
            disabledTypes={props.disabledTypes}
          />
          {!props.hideDelete && (
            <SparkDeleteLine
              onClick={() => {
                if (props.disabled) return;
                removeVariable(index);
              }}
              className={props.disabled ? 'spark-flow-disabled-icon-btn' : ''}
              style={{
                color: `var(--${antPrefix}-color-text-tertiary)`,
                cursor: props.disabled ? 'not-allowed' : 'pointer',
              }}
              size={16}
            />
          )}
        </div>
      ))}
      {!props.hideAdd && (
        <Button
          className="spark-flow-text-btn self-start"
          icon={<SparkPlusLine />}
          type="link"
          size="small"
          onClick={handleAddVar}
          disabled={props.disabled}
        >
          {$i18n.get({
            id: 'spark-flow.components.CustomInputsControl.index.addVariable',
            dm: '添加变量',
          })}
        </Button>
      )}
    </Form>
  );
});
