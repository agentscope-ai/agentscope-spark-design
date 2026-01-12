import { getCommonConfig } from '@/config';
import { InfoCircleOutlined } from '@ant-design/icons';
import { Form, FormItemProps, FormProps } from 'antd';
import ErrorList from 'antd/es/form/ErrorList';
import { useForm, useWatch } from 'antd/es/form/Form';
import FormItem from 'antd/es/form/FormItem';
import FormList from 'antd/es/form/FormList';
import { FormProvider } from 'antd/es/form/context';
import useFormInstance from 'antd/es/form/hooks/useFormInstance';
import classnames from 'classnames';
import React, { forwardRef, useImperativeHandle, useRef } from 'react';
import { useStyle } from './index.style';

export type SparkFormProps = FormProps & {
  labelMarginRight?: 'default' | 'small';
};

export type SparkFormRef = {
  formRef: React.MutableRefObject<any>;
};

type CompoundedComponent = React.ForwardRefExoticComponent<
  SparkFormProps & React.RefAttributes<SparkFormRef>
> & {
  useForm: typeof useForm;
  useFormInstance: typeof useFormInstance;
  useWatch: typeof useWatch;
  Item: typeof FormItem;
  List: typeof FormList;
  ErrorList: typeof ErrorList;
  Provider: typeof FormProvider;
  /** @deprecated Only for warning usage. Do not use. */
  create: () => void;
};

const InternalForm = forwardRef<SparkFormRef, SparkFormProps>((props, ref) => {
  const { labelMarginRight = undefined, ...restProps } = props;
  const formRef = useRef<any>(null);
  const { sparkPrefix } = getCommonConfig();
  const Style = useStyle();

  useImperativeHandle(ref, () => {
    return formRef.current;
  });

  return (
    <>
      <Style />
      {
        //@ts-ignore
        <Form
          {...restProps}
          className={classnames(
            props.className,
            `${sparkPrefix}-form`,
            labelMarginRight === 'small' &&
              `${sparkPrefix}-form-label-margin-small`,
          )}
          ref={formRef}
          requiredMark={(label, info) => {
            return (
              <>
                {label}
                {info.required && (
                  <span className={`${sparkPrefix}-required-mark`}>*</span>
                )}
              </>
            );
          }}
        />
      }
    </>
  );
});

const InternalFormItem = (props: FormItemProps) => {
  const { tooltip, ...restProps } = props;
  const defaultTooltipIcon = <InfoCircleOutlined />;

  function getTooltip() {
    if (!tooltip) {
      return undefined;
    }

    const _tooltip =
      typeof tooltip === 'object' && !React.isValidElement(tooltip)
        ? {
            ...(tooltip as any),
            icon: (tooltip as any).icon || defaultTooltipIcon,
          }
        : { title: tooltip, icon: defaultTooltipIcon };
    return _tooltip;
  }

  return (
    <Form.Item
      {...restProps}
      tooltip={getTooltip()}
      labelCol={
        props.labelCol ||
        (props.layout === 'vertical' ? { flex: 'unset' } : undefined)
      }
    />
  );
};

// 继承antd的Form.Item
const SparkFormItem = InternalFormItem as typeof FormItem;
SparkFormItem.useStatus = FormItem.useStatus;

// 继承antd的Form
const SparkForm = InternalForm as CompoundedComponent;

SparkForm.Item = SparkFormItem;
SparkForm.List = Form.List;
SparkForm.ErrorList = Form.ErrorList;
SparkForm.Provider = Form.Provider;
SparkForm.useForm = Form.useForm;
SparkForm.useFormInstance = Form.useFormInstance;
SparkForm.useWatch = Form.useWatch;
export default SparkForm;
