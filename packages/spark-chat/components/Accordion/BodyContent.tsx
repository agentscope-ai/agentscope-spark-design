import React from "react";
import { useProviderContext } from "../Provider";


interface IBodyContentProps {
  children: React.ReactNode;
  headerLeft?: React.ReactNode;
  headerRight?: React.ReactNode;
}

export default function (props: IBodyContentProps) {
  const { getPrefixCls } = useProviderContext();
  const prefixCls = getPrefixCls('accordion-content-body');

  return <div className={prefixCls}>
    {
      (props.headerLeft || props.headerRight) ?
        <div className={`${prefixCls}-header`}>
          {props.headerLeft}
          <div style={{ flex: 1 }} />
          {props.headerRight}
        </div> : null
    }
    <div className={`${prefixCls}-body`}>
      {props.children}
    </div>
  </div>
}