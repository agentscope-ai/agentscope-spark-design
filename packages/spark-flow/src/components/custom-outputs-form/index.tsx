import { FILE_PROPERTIES, VALUE_TYPE_OPTIONS } from '@/constant';
import $i18n from '@/i18n';
import {
  INodeDataOutputParamItem,
  IValueType,
  IValueTypeOption,
} from '@/types/work-flow';
import {
  Button,
  Form,
  getCommonConfig,
  Input,
  Tooltip,
} from '@agentscope-ai/design';
import {
  SparkDeleteLine,
  SparkPlusLine,
  SparkUpLine,
} from '@agentscope-ai/icons';
import { Cascader } from 'antd';
import classNames from 'classnames';
import React, { memo, useEffect, useMemo, useState } from 'react';
import { typeAbbr } from '../var-type-prefix';
import './index.less';

const displayRender = (labels: string[], isMini?: boolean) => {
  const lastLabel = labels[labels.length - 1];
  if (isMini) {
    return (
      <span className="text-[12px]">
        {typeAbbr[lastLabel as keyof typeof typeAbbr]}
      </span>
    );
  }
  return lastLabel;
};
const parseType = (type?: IValueType) => {
  if (!type) return [];
  if (type.includes('Array')) return ['Array' as 'Array', type];
  return [type] as IValueType[];
};

export interface IVariableTypeSelectProps {
  handleChange: (type: IValueType) => void;
  type?: IValueType;
  disabled?: boolean;
  style?: React.CSSProperties;
  isMini?: boolean;
  className?: string;
  enabledTypes?: (IValueType | 'Array')[]; // 支持的类型，白名单策略，优先于disabledTypes
  disabledTypes?: (IValueType | 'Array')[]; // 禁用的类型，黑名单策略，如果设置了enabledTypes，这个参数失效
}

export const VariableTypeSelect = memo((props: IVariableTypeSelectProps) => {
  const {
    handleChange,
    type,
    style = {},
    enabledTypes,
    disabledTypes = [],
  } = props;

  const typeOptions = useMemo(() => {
    // 如果既没有白名单也没有黑名单，返回所有选项
    if (
      (!enabledTypes || !enabledTypes.length) &&
      (!disabledTypes || !disabledTypes.length)
    ) {
      return VALUE_TYPE_OPTIONS;
    }

    const list: IValueTypeOption[] = [];

    // 白名单优先：如果设置了enabledTypes，只有在白名单中的类型才可用
    if (enabledTypes && enabledTypes.length > 0) {
      VALUE_TYPE_OPTIONS.forEach((item) => {
        if (!enabledTypes.includes(item.value)) return;
        list.push({
          ...item,
          children: item.children?.filter((child) =>
            enabledTypes.includes(child.value),
          ),
        });
      });
    }
    // 黑名单策略：如果没有设置enabledTypes，使用disabledTypes
    else if (disabledTypes && disabledTypes.length > 0) {
      VALUE_TYPE_OPTIONS.forEach((item) => {
        if (disabledTypes.includes(item.value)) return;
        list.push({
          ...item,
          children: item.children?.filter(
            (child) => !disabledTypes.includes(child.value),
          ),
        });
      });
    }

    return list;
  }, [enabledTypes, disabledTypes]);

  return (
    <Cascader
      className={`spark-flow-variable-type-select ${props.className}`}
      allowClear={false}
      style={{ width: 140, flexShrink: 0, ...style }}
      options={typeOptions}
      placeholder={$i18n.get({
        id: 'spark-flow.components.CustomOutputsForm.index.selectVariableType',
        dm: '请选择变量类型',
      })}
      // getPopupContainer={(ele) => ele}
      value={parseType(type)}
      onChange={(selectedList) => {
        const type = selectedList[selectedList.length - 1] as IValueType;
        handleChange(type);
      }}
      displayRender={(payload) => displayRender(payload, props.isMini)}
      disabled={props.disabled}
    />
  );
});

export interface ICustomOutputsFormProps {
  value?: INodeDataOutputParamItem[];
  onChange?: (params: INodeDataOutputParamItem[]) => void;
  readyOnly?: boolean | boolean[] | string[][];
  isRoot?: boolean;
  enabledTypes?: (IValueType | 'Array')[]; // 支持的类型，白名单策略，优先于disabledTypes
  disabledTypes?: (IValueType | 'Array')[]; // 禁用的类型，黑名单策略，如果设置了enabledTypes，这个参数失效
  tier?: number;
  maxTier?: number;
}

const getDisableStatus = (
  index: number,
  readyOnly: boolean | boolean[] | string[][] | undefined,
  key?: string,
) => {
  if (readyOnly === undefined || readyOnly === null) {
    return false;
  }
  if (typeof readyOnly === 'boolean') {
    return readyOnly;
  }
  const detail = readyOnly[index];
  if (!detail) {
    return false;
  }
  if (typeof detail === 'boolean') {
    return detail;
  }
  return detail.includes(key || '');
};

/**
 * 创建变量名验证规则
 * @param allValues 所有变量的值数组，用于检查重复
 * @param currentIndex 当前编辑的变量索引
 */
const createVariableNameRules = (
  allValues: INodeDataOutputParamItem[],
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
              id: 'spark-flow.components.CustomOutputsForm.index.variableNameCannotStartWithNumber',
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
              id: 'spark-flow.components.CustomOutputsForm.index.variableNameOnlyAllowLettersNumbersUnderscores',
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
              id: 'spark-flow.components.CustomOutputsForm.index.variableNameDuplicate',
              dm: '变量名不能重复',
            }),
          ),
        );
      }

      return Promise.resolve();
    },
  },
];

export const CustomOutputsForm = memo(function ({
  value = [] as INodeDataOutputParamItem[],
  onChange,
  readyOnly,
  isRoot = false,
  enabledTypes,
  disabledTypes,
  tier = 0,
  maxTier = -1,
}: ICustomOutputsFormProps) {
  const [form] = Form.useForm();
  const [expand, setExpand] = useState(true);

  // 同步 value 到 form
  useEffect(() => {
    const formValues: Record<string, string> = {};
    value.forEach((item, index) => {
      formValues[`var_${index}`] = item.key;
    });
    form.setFieldsValue(formValues);
  }, [value, form]);

  const handleChange = (
    ind: number,
    payload: Partial<INodeDataOutputParamItem>,
  ) => {
    const newValue = value.map((item, index) => {
      if (index === ind)
        return {
          ...item,
          ...payload,
        };
      return item;
    });
    onChange?.(newValue);
  };

  const handleAdd = () => {
    onChange?.(
      value.concat({
        key: '',
        type: 'String',
        desc: '',
      }),
    );
  };

  const handleDelete = (index: number) => {
    onChange?.(value.filter((_, i) => i !== index));
  };

  const { antPrefix } = getCommonConfig();
  return (
    <Form form={form} component={false}>
      {value.map((item, index) => {
        const hasProperties =
          item.type === 'Array<Object>' || item.type === 'Object';
        return (
          <div
            key={index}
            className={classNames('flex flex-col gap-[8px]', {
              ['spark-flow-inputs-form-parent-node']: hasProperties,
              ['spark-flow-inputs-form-parent-node-hidden']: !expand,
            })}
          >
            <div className="spark-flow-inputs-form-item flex gap-[8px] align-center">
              <Form.Item
                name={`var_${index}`}
                style={{ flex: 1, marginBottom: 0 }}
                validateTrigger={['onChange', 'onBlur']}
                rules={createVariableNameRules(value, index)}
              >
                <Input
                  disabled={getDisableStatus(index, readyOnly, 'key')}
                  placeholder={$i18n.get({
                    id: 'spark-flow.components.CustomOutputsForm.index.enterVariableName',
                    dm: '请输入变量名',
                  })}
                  onChange={(e) => handleChange(index, { key: e.target.value })}
                />
              </Form.Item>

              <VariableTypeSelect
                type={item.type}
                disabled={getDisableStatus(index, readyOnly, 'type')}
                handleChange={(type) => {
                  handleChange(index, {
                    type,
                    properties: type.includes('File') ? FILE_PROPERTIES : [],
                  });
                }}
                enabledTypes={enabledTypes}
                disabledTypes={disabledTypes}
              />

              <Input
                style={{ width: 100, flexShrink: 0, height: 32 }}
                disabled={getDisableStatus(index, readyOnly, 'desc')}
                value={item.desc}
                placeholder={$i18n.get({
                  id: 'spark-flow.components.CustomOutputsForm.index.enterVariableDescription',
                  dm: '请输入变量描述',
                })}
                onChange={(e) => handleChange(index, { desc: e.target.value })}
              />

              {!getDisableStatus(index, readyOnly, 'delete') && (
                <SparkDeleteLine
                  className="flex-shrink-0 cursor-pointer"
                  style={{
                    color: `var(--${antPrefix}-color-text-tertiary)`,
                    height: 32,
                  }}
                  onClick={() => handleDelete(index)}
                  size={16}
                />
              )}
            </div>
            {hasProperties && (
              <>
                <SparkUpLine
                  onClick={() => setExpand(!expand)}
                  className="spark-flow-inputs-expand-btn cursor-pointer"
                  size={16}
                />

                {expand && (
                  <div className="pl-[16px] flex flex-col gap-[8px]">
                    <CustomOutputsForm
                      value={item.properties}
                      readyOnly={getDisableStatus(index, readyOnly, '')}
                      onChange={(properties) =>
                        handleChange(index, { properties })
                      }
                      enabledTypes={enabledTypes}
                      disabledTypes={disabledTypes}
                      tier={tier + 1}
                      maxTier={maxTier}
                    />
                  </div>
                )}
              </>
            )}
          </div>
        );
      })}
      {readyOnly !== true && (
        <Tooltip
          title={
            maxTier !== -1 && tier >= maxTier
              ? $i18n.get({
                  id: 'spark-flow.components.CustomOutputsForm.index.maxTierReached',
                  dm: '最大层级已达到，无法添加子变量',
                })
              : null
          }
        >
          <Button
            type="link"
            onClick={handleAdd}
            size="small"
            className="self-start spark-flow-text-btn"
            icon={<SparkPlusLine />}
            disabled={maxTier !== -1 && tier >= maxTier}
          >
            {isRoot
              ? $i18n.get({
                  id: 'spark-flow.components.CustomOutputsForm.index.addVariable',
                  dm: '添加变量',
                })
              : $i18n.get({
                  id: 'spark-flow.components.CustomOutputsForm.index.addSubVariable',
                  dm: '添加子变量',
                })}
          </Button>
        </Tooltip>
      )}
    </Form>
  );
});

export const CustomOutputsFormWrap = memo(function (
  props: ICustomOutputsFormProps,
) {
  const { value, onChange, readyOnly, enabledTypes, disabledTypes, tier, maxTier } = props;

  return (
    <div className="flex flex-col gap-[8px]">
      <div className="spark-flow-inputs-form-label flex gap-[8px]">
        <div style={{ flex: 1 }}>
          {$i18n.get({
            id: 'spark-flow.components.CustomOutputsForm.index.variableName',
            dm: '变量名',
          })}
        </div>
        <div style={{ width: 140 }}>
          {$i18n.get({
            id: 'spark-flow.components.CustomOutputsForm.index.type',
            dm: '类型',
          })}
        </div>
        <div style={{ width: readyOnly ? 100 : 124 }}>
          {$i18n.get({
            id: 'spark-flow.components.CustomOutputsForm.index.description',
            dm: '描述',
          })}
        </div>
      </div>
      <CustomOutputsForm
        value={value}
        onChange={onChange}
        readyOnly={readyOnly}
        isRoot
        enabledTypes={enabledTypes}
        disabledTypes={disabledTypes}
        tier={tier}
        maxTier={maxTier}
      />
    </div>
  );
});
