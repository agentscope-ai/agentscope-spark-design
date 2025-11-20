import type { ButtonProps } from 'antd';
import classNames from 'classnames';
import * as React from 'react';
import StopLoadingIcon from '../StopLoading';
import ActionButton, { ActionButtonContext } from './ActionButton';

function LoadingButton(props: ButtonProps, ref: React.Ref<HTMLButtonElement>) {
  const { prefixCls } = React.useContext(ActionButtonContext);
  const { className } = props;

  return (
    <ActionButton
      icon={<StopLoadingIcon className={`${prefixCls}-loading-icon`} />}
      type="primary"
      variant="text"
      {...props}
      className={classNames(className, `${prefixCls}-loading-button`)}
      action="onCancel"
      ref={ref}
    >
      
    </ActionButton>
  );
}

export default React.forwardRef(LoadingButton);
