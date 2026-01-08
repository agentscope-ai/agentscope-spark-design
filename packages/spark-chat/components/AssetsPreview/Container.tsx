import React from 'react';
import { useProviderContext } from '../Provider';
import cls from 'classnames';


interface IContainerProps {
  className?: string;
  children: React.ReactNode;
  height?: number;
}
export default function Container(props: IContainerProps) {
  const prefixCls = useProviderContext().getPrefixCls('assets-preview');
  const { height = 144 } = props;

  return <div className={cls(`${prefixCls}-container`, props.className)} style={{ height }}>
    {
      props.children
    }
  </div>;
}