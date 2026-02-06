import type { ButtonProps } from 'antd';
import classNames from 'classnames';
import * as React from 'react';
import StopLoadingIcon from '../StopLoading';
import ActionButton, { ActionButtonContext } from './ActionButton';
import { Tooltip } from '@agentscope-ai/design';

function LoadingButton(props: ButtonProps & { loading?: boolean | string }, ref: React.Ref<HTMLButtonElement>) {
  const { prefixCls } = React.useContext(ActionButtonContext);
  const { className, loading, ...restProps } = props;

  const node = <ActionButton
    icon={<StopLoadingIcon className={`${prefixCls}-loading-icon`} />}
    type="primary"
    variant="text"
    {...restProps}
    className={classNames(className, `${prefixCls}-loading-button`)}
    action="onCancel"
    ref={ref}
  >

  </ActionButton>;

  if (typeof props.loading === 'string') {
    return <Tooltip title={props.loading}>
      {node}
    </Tooltip>
  }

  return node;
}

export default React.forwardRef(LoadingButton);
