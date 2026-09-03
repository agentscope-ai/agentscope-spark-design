import cls from 'classnames';
import React, { forwardRef, useContext } from 'react';
import { useProviderContext } from '../../../Provider';
import Chat from '../Chat';
import { ChatAnyWhereLayoutContext } from '../Context/ChatAnywhereLayoutContext';
import { useChatAnywhereOptions } from '../Context/ChatAnywhereOptionsContext';
import Header from '../Header';
import Ref from '../Ref';
import Sessions from '../Sessions';
import type { IAgentScopeRuntimeWebUIRef } from '../types';
import Style from './styles';

interface IProps {
  className?: string;
  left?: React.ReactNode;
  right?: React.ReactNode;
}

function Layout(props: IProps, ref: React.Ref<IAgentScopeRuntimeWebUIRef>) {
  const { className } = props;
  const prefixCls = useProviderContext().getPrefixCls('chat-anywhere-layout');
  const narrowMode = useChatAnywhereOptions((v) => v.theme.narrowMode);
  const background = useChatAnywhereOptions((v) => v.theme.background);
  const rightHeader = useChatAnywhereOptions((v) => v.theme.rightHeader);
  const { session } = useChatAnywhereOptions((v) => ({ session: v.session }));
  const { collapsed } = useContext(ChatAnyWhereLayoutContext);
  const showLeft =
    !narrowMode &&
    session &&
    session.multiple &&
    !session.hideBuiltInSessionList;

  return (
    <>
      <Style />
      <div className={cls(`${prefixCls}`, className)}>
        {showLeft && (
          <div
            className={cls(`${prefixCls}-left`, {
              [`${prefixCls}-left-collapsed`]: collapsed,
            })}
          >
            <Sessions />
          </div>
        )}
        <div
          className={cls(`${prefixCls}-right`, {
            [`${prefixCls}-right-has-header`]: !!rightHeader,
          })}
          style={{
            background: background,
          }}
        >
          {!!rightHeader && <Header />}
          <Chat />
        </div>
      </div>
      <Ref ref={ref} />
    </>
  );
}

export default forwardRef<IAgentScopeRuntimeWebUIRef, IProps>(Layout);
