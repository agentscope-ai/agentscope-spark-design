import { getCommonConfig } from '@/config';
import {
  Button,
  ButtonProps,
  Drawer,
  DrawerProps,
} from '@agentscope-ai/design';
import React from 'react';
import { useStyle } from './index.style';

export interface DrawerConfirmProps extends DrawerProps {
  /**
   * @description 自定义底部内容
   * @descriptionEn custom footer content
   */
  footer?: React.ReactNode;
  /**
   * @description 点击确定回调
   * @descriptionEn click ok button callback
   */
  onOk?: () => void;
  /**
   * @description 确认按钮文字
   * @descriptionEn ok button text
   */
  okText?: string;
  /**
   * @description 确认按钮属性
   * @descriptionEn ok button props
   */
  okButtonProps?: ButtonProps;
  /**
   * @description 点击取消回调
   * @descriptionEn click cancel button callback
   */
  onCancel?: () => void;
  /**
   * @description 取消按钮文字
   * @descriptionEn cancel button text
   */
  cancelText?: string;
  /**
   * @description 取消按钮属性
   * @descriptionEn cancel button props
   */
  cancelButtonProps?: ButtonProps;
  /**
   * @description 底部额外内容
   * @descriptionEn footer extra content
   */
  info?: React.ReactNode;
}

const DrawerConfirm: React.FC<DrawerConfirmProps> = (props) => {
  const {
    onOk,
    onCancel,
    okText = '确定',
    okButtonProps,
    cancelText = '取消',
    cancelButtonProps,
    info,
    footer,
    ...rest
  } = props;
  const Style = useStyle();
  const commonConfig = getCommonConfig();
  const { antPrefix } = commonConfig;

  const handleCancel = (e) => {
    if (onCancel) {
      onCancel();
    } else {
      rest.onClose?.(e);
    }
  };

  return (
    <>
      <Style />
      <Drawer
        {...rest}
        footer={
          footer || (
            <>
              <div className={`${antPrefix}-drawer-footer-info`}>{info}</div>
              <div className={`${antPrefix}-drawer-footer-buttons`}>
                <Button onClick={handleCancel} {...cancelButtonProps}>
                  {cancelText}
                </Button>
                <Button type="primary" onClick={onOk} {...okButtonProps}>
                  {okText}
                </Button>
              </div>
            </>
          )
        }
      />
    </>
  );
};

export default DrawerConfirm;
