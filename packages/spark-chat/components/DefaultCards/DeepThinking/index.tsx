import React from 'react';
import { DeepThinking } from '@agentscope-ai/chat';

interface IProps {
  data: {
    block?: boolean;
    title?: string;
    subTitle?: string;
    loading?: boolean;
    content?: string;
    className?: string;
    defaultOpen?: boolean;
    open?: boolean;
    autoCloseOnFinish?: boolean;
    maxHeight?: number;
  }
}

export default function (props: IProps) {

  return <DeepThinking
    defaultOpen={props.data.defaultOpen !== undefined ? props.data.defaultOpen : true}
    title={props.data.title}
    loading={props.data.loading}
    content={props.data.content}
    className={props.data.className}
    open={props.data.open}
    autoCloseOnFinish={props.data.autoCloseOnFinish}
    maxHeight={props.data.maxHeight}
  />


}