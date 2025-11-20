import React, { useContext, useEffect } from 'react';
import classnames from 'classnames';
import { useProviderContext } from '@agentscope-ai/chat';
import { Drawer } from 'antd';
import { useResponsive } from 'ahooks';
import { useChatAnywhere } from '../hooks/ChatAnywhereProvider';
import Style from './style';

interface IProps {
  top?: React.ReactNode;
  left?: React.ReactNode;
  right?: React.ReactNode;
}


function Left(props: IProps) {
  const {
    sessionListShow,
    setSessionListShow,
  } = useChatAnywhere(v => ({ sessionListShow: v.sessionListShow, setSessionListShow: v.setSessionListShow }))
  const { getPrefixCls } = useProviderContext();
  const prefixCls = getPrefixCls('chat-anywhere-layout');
  const isMobile = isMobileHook();

  useEffect(() => {
    setSessionListShow(!isMobile)
  }, [isMobile])

  if (!props.left) return null;

  if (!isMobile)
    return <div className={classnames(`${prefixCls}-left`, sessionListShow ? '' : `${prefixCls}-left-hide`)}>
      {props.left}
    </div>

  return <Drawer width={"80vw"} styles={{ body: { padding: 0 } }} open={sessionListShow} onClose={() => { setSessionListShow(false) }} title={null} closable={false} placement="left">
    <div style={{ display: 'flex', flexDirection: 'column', }}>
      {props.left}
    </div>
  </Drawer>;
}

export default function (props: IProps) {
  const { getPrefixCls } = useProviderContext();
  const prefixCls = getPrefixCls('chat-anywhere-layout');
  const uiConfig = useChatAnywhere(state => state.uiConfig);


  return <>
    <Style />
    <div className={prefixCls}>
      <div className={`${prefixCls}-main`}>
        <Left {...props} />

        <div className={`${prefixCls}-right`} style={{
          background: uiConfig?.background,
        }}>
          {props.top}
          {props.right}
        </div>
      </div>
    </div></>;
}

export const isMobileHook = () => {
  const responsive = useResponsive();
  const uiConfig = useChatAnywhere(state => state.uiConfig);

  return !responsive.md || uiConfig?.narrowScreen;
}