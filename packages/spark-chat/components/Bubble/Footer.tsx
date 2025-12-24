import React, { ReactElement } from 'react';
import { useProviderContext } from '@agentscope-ai/chat';
import { IconButton } from '@agentscope-ai/design';
import Style from './style/footer';

export default function Footer(props: {
  left?: React.ReactElement;
  right?: React.ReactElement;

}) {
  const { getPrefixCls } = useProviderContext();
  const prefixCls = getPrefixCls('bubble-footer');
  const { left, right } = props;
  if ((left && !left.type) || (right && !right.type)) return null;

  return <>
    <Style />
    <div className={prefixCls}>
      <div className={`${prefixCls}-left`}>{props.left}</div>
      <div className={`${prefixCls}-right`}>{props.right}</div>
    </div>
  </>;
}

interface IAction {
  icon: string | ReactElement,
  label?: string,
  onClick: () => void
  children?: React.ReactElement;
}

export function FooterActions(props: {
  data: (IAction)[]
}) {
  const { getPrefixCls } = useProviderContext();
  const prefixCls = getPrefixCls('bubble-footer-actions');

  return <div className={prefixCls}>
    {props.data.map((item, index) => {
      if (item.children) {
        return React.cloneElement(item.children, { key: index });
      } else {
        return <IconButton
          bordered={false}
          key={index}
          icon={item.icon}
          size='small'
          onClick={item.onClick}
        ></IconButton>
      }
    })}
  </div>;
};


export function FooterCount(props: {
  data: [string | number, string | number][]
}) {
  const { getPrefixCls } = useProviderContext();
  const prefixCls = getPrefixCls('bubble-footer-count');

  return <div className={prefixCls}>
    {props.data.map(item => {
      return <div className={`${prefixCls}-item`} key={item[0]}>{item[0]}：{item[1]}</div>
    })}
  </div>;
}

Footer.Actions = FooterActions;
Footer.Count = FooterCount;