import { Button, IconButton, type ButtonProps } from '@agentscope-ai/design';
import classNames from 'classnames';
import * as React from 'react';

export interface ActionButtonContextProps {
  /**
   * @description 自定义CSS类名前缀，用于样式隔离和主题定制
   * @descriptionEn Custom CSS class name prefix for style isolation and theme customization
   */
  prefixCls: string;
  /**
   * @description 发送消息的回调函数
   * @descriptionEn Callback function for sending messages
   */
  onSend?: VoidFunction;
  /**
   * @description 是否禁用发送按钮
   * @descriptionEn Whether to disable the send button
   */
  onSendDisabled?: boolean;
  /**
   * @description 清空输入的回调函数
   * @descriptionEn Callback function for clearing input
   */
  onClear?: VoidFunction;
  /**
   * @description 是否禁用清空按钮
   * @descriptionEn Whether to disable the clear button
   */
  onClearDisabled?: boolean;
  /**
   * @description 取消操作的回调函数
   * @descriptionEn Callback function for canceling operations
   */
  onCancel?: VoidFunction;
  /**
   * @description 是否禁用取消按钮
   * @descriptionEn Whether to disable the cancel button
   */
  onCancelDisabled?: boolean;
  /**
   * @description 语音输入的回调函数
   * @descriptionEn Callback function for voice input
   */
  onSpeech?: VoidFunction;
  /**
   * @description 是否禁用语音按钮
   * @descriptionEn Whether to disable the speech button
   */
  onSpeechDisabled?: boolean;
  /**
   * @description 是否正在录音，影响语音按钮的显示状态
   * @descriptionEn Whether currently recording, affects the display state of the speech button
   */
  speechRecording?: boolean;
  /**
   * @description 是否禁用所有操作按钮
   * @descriptionEn Whether to disable all action buttons
   */
  disabled?: boolean;
}

export const ActionButtonContext = React.createContext<ActionButtonContextProps>(null!);

export interface ActionButtonProps {
  /**
   * @description 按钮的操作类型，决定按钮的行为和样式
   * @descriptionEn Action type of the button, determines button behavior and style
   */
  action: 'onSend' | 'onClear' | 'onCancel' | 'onSpeech';
  onClick?: (e) => void;
  className?: string;
  disabled?: boolean;
}

export function ActionButton(props: ActionButtonProps) {
  const { className, action, onClick: outClick, ...restProps } = props;
  const context = React.useContext(ActionButtonContext);
  const { prefixCls, disabled: rootDisabled } = context;

  const onClick = context[action];
  const mergedDisabled = rootDisabled || restProps.disabled || context[`${action}Disabled`] || false;

  return (
    <IconButton
      bordered={false}
      disabled={mergedDisabled}
      {...restProps}
      onClick={(e) => {
        if (!mergedDisabled) {
          if (onClick) {
            onClick();
          }
          if (outClick) {
            outClick(e);
          }
        }
      }}
      className={classNames(prefixCls, className, {
        [`${prefixCls}-disabled`]: mergedDisabled,
      })}
    />
  );
}

export default React.forwardRef(ActionButton);
