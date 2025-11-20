import { ArrowUpOutlined, SendOutlined } from '@ant-design/icons';
import type { ButtonProps } from 'antd';
import * as React from 'react';
import ActionButton from './ActionButton';
import { createStyles } from 'antd-style';


function SendButton(props: ButtonProps, ref: React.Ref<HTMLButtonElement>) {


  return (
    <ActionButton
      icon={<ArrowUpOutlined />}
      type="primary"
      {...props}
      action="onSend"
      ref={ref}
    />
  );
}

export default React.forwardRef(SendButton);
