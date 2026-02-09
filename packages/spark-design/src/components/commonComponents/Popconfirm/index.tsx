import { ButtonProps, getCommonConfig } from '@/index';
import {
  CheckCircleOutlined,
  CloseCircleOutlined,
  ExclamationCircleOutlined,
  InfoCircleOutlined,
} from '@agentscope-ai/icons-override-antd';
import { Popconfirm, PopconfirmProps } from 'antd';
import React from 'react';

export interface SparkPopconfirmProps extends PopconfirmProps {
  /**
   * @description 类型
   * @descriptionEn type of the popconfirm
   * @default 'confirm'
   */
  type?: 'info' | 'warning' | 'error' | 'success' | 'confirm';
}
const SparkPopconfirm = React.forwardRef<any, SparkPopconfirmProps>(
  (props, ref) => {
    const { icon, type = 'confirm', okButtonProps, children, ...rest } = props;
    const { antPrefix } = getCommonConfig();

    const getMergedIcon = () => {
      if (icon) return icon;
      if (type === 'confirm')
        return (
          <ExclamationCircleOutlined
            style={{ color: `var(--${antPrefix}-color-warning)` }}
          />
        );
      if (type === 'info')
        return (
          <InfoCircleOutlined
            style={{ color: `var(--${antPrefix}-color-info)` }}
          />
        );
      if (type === 'warning')
        return (
          <ExclamationCircleOutlined
            style={{ color: `var(--${antPrefix}-color-warning)` }}
          />
        );
      if (type === 'error')
        return (
          <CloseCircleOutlined
            style={{ color: `var(--${antPrefix}-color-error)` }}
          />
        );
      if (type === 'success')
        return (
          <CheckCircleOutlined
            style={{ color: `var(--${antPrefix}-color-success)` }}
          />
        );
      return (
        <ExclamationCircleOutlined
          style={{ color: `var(--${antPrefix}-color-warning)` }}
        />
      );
    };
    const getMergedOkButtonProps = (): ButtonProps => {
      const innerOkButtonProps: ButtonProps = {};
      if (['warning', 'error'].includes(type)) {
        innerOkButtonProps.danger = true;
      }
      return {
        ...innerOkButtonProps,
        ...(okButtonProps || {}),
      };
    };
    return (
      <Popconfirm
        {...rest}
        ref={ref}
        icon={getMergedIcon()}
        // @ts-ignore
        okButtonProps={getMergedOkButtonProps()}
      >
        <span>{children}</span>
      </Popconfirm>
    );
  },
);

export default SparkPopconfirm;
