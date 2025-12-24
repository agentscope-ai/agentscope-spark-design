import { useProviderContext } from '@agentscope-ai/chat';
import Style from './styles';
import cls from 'classnames';
import { useChatAnywhereOptions } from '../Context/ChatAnywhereOptionsContext';
import { forwardRef, useContext } from 'react';
import Chat from '../Chat';
import Sessions from '../Sessions';
import { ChatAnyWhereLayoutContext } from '../Context/ChatAnywhereLayoutContext';
import Header from '../Header';
import React from 'react';
import Ref from '../Ref';

interface IProps {
  className?: string;
  left?: React.ReactNode;
  right?: React.ReactNode;
}

function Layout(props: IProps, ref: React.Ref<any>) {
  const { className } = props;
  const prefixCls = useProviderContext().getPrefixCls('chat-anywhere-layout');
  const narrowMode = useChatAnywhereOptions(v => v.theme.narrowMode);
  const { session } = useChatAnywhereOptions(v => ({ session: v.session }));
  const { collapsed } = useContext(ChatAnyWhereLayoutContext);
  const showLeft = !narrowMode && session && session.multiple;


  return <>
    <Style />
    <div className={cls(`${prefixCls}`, className)}>
      {
        showLeft && <div className={cls(`${prefixCls}-left`, {
          [`${prefixCls}-left-collapsed`]: collapsed,
        })}>
          <Sessions />
        </div>
      }
      <div className={cls(`${prefixCls}-right`, {
        [`${prefixCls}-right-has-header`]: true,
      })}>
        <Header />
        <Chat />
      </div>
    </div>
    <Ref ref={ref} />
  </>;
}

export default forwardRef(Layout);