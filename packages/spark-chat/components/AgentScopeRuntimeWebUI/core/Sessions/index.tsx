import { useContextSelector } from "use-context-selector";
import { ChatAnywhereSessionsContext, useChatAnywhereSessions } from "../Context/ChatAnywhereSessionsContext";
import { Button, IconButton } from "@agentscope-ai/design";
import { ChatAnywhereInputContext } from "../Context/ChatAnywhereInputContext";
import { useProviderContext } from "@agentscope-ai/chat";
import { useChatAnywhereOptions } from "../Context/ChatAnywhereOptionsContext";
import React, { useContext, useMemo } from "react";
import { SparkDeleteLine, SparkOperateLeftLine, SparkOperateRightLine, SparkPlusLine } from "@agentscope-ai/icons";
import { HistoryPanel } from '@agentscope-ai/chat';
import { ChatAnyWhereLayoutContext } from "../Context/ChatAnywhereLayoutContext";
import cls from 'classnames';


export default function Sessions() {
  const { collapsed } = useContext(ChatAnyWhereLayoutContext);
  const prefixCls = useProviderContext().getPrefixCls('chat-anywhere-sessions');
  const leftHeader = useChatAnywhereOptions(v => v.theme?.leftHeader) || {};

  return <>
    <div className={`${prefixCls}`}>
      {
        React.isValidElement(leftHeader) ? leftHeader : <InnerHeader />
      }
      <div className={`${prefixCls}-content`} style={{ display: collapsed ? 'none' : 'flex' }}>
        <InnerAdder />
        <InnerList />
      </div>
    </div>
  </>;
}


export function InnerHeader({ className }: { className?: string }) {
  const leftHeader = useChatAnywhereOptions(v => v.theme?.leftHeader) || {};
  const prefixCls = useProviderContext().getPrefixCls('chat-anywhere-sessions');
  const { toggleCollapsed, collapsed } = useContext(ChatAnyWhereLayoutContext);
  const multiple = useChatAnywhereOptions(v => v.session.multiple);


  const {
    logo = 'https://img.alicdn.com/imgextra/i2/O1CN01lmoGYn1kjoXATy4PX_!!6000000004720-2-tps-200-200.png',
    title = 'Runtime WebUI'
  } = leftHeader as { logo?: string; title?: string };

  return <>
    <div className={cls(`${prefixCls}-header`, className)}>
      <div className={`${prefixCls}-header-left`}>
        <img src={logo} alt="logo" height={32} />
        <span>{title}</span>
      </div>

      {
        multiple && <IconButton
          className={`${prefixCls}-header-collapse`}
          bordered={false}
          icon={!collapsed ? <SparkOperateLeftLine /> : <SparkOperateRightLine />}
          onClick={toggleCollapsed}
        />
      }
    </div>
  </>
}

export function InnerAdder(props: { style?: React.CSSProperties; narrowMode?: boolean }) {
  const loading = useContextSelector(ChatAnywhereInputContext, v => v.loading);
  const { createSession } = useChatAnywhereSessions();
  const prefixCls = useProviderContext().getPrefixCls('chat-anywhere-sessions');
  const { toggleCollapsed } = useContext(ChatAnyWhereLayoutContext);

  return <div className={`${prefixCls}-adder`} style={props.style}>
    <Button block type="primary" icon={<SparkPlusLine />} disabled={loading} onClick={async() => {
      await createSession();
      if (props.narrowMode) {
        toggleCollapsed();
      }
    }}>
      New Chat
    </Button>
  </div>
}

export function InnerList(props: { style?: React.CSSProperties, narrowMode?: boolean }) {
  const prefixCls = useProviderContext().getPrefixCls('chat-anywhere-sessions');
  const sessions = useContextSelector(ChatAnywhereSessionsContext, v => v.sessions);
  const { changeCurrentSessionId, removeSession } = useChatAnywhereSessions();
  const currentSessionId = useContextSelector(ChatAnywhereSessionsContext, v => v.currentSessionId);
  const { toggleCollapsed } = useContext(ChatAnyWhereLayoutContext);

  const items = useMemo(() => sessions.map(session => ({
    key: session.id,
    label: session.name || 'New Chat',
  })), [sessions]);


  return <div className={`${prefixCls}-list`} style={props.style}>
    <HistoryPanel items={items}
      menu={[
        {
          key: 'delete',
          icon: <SparkDeleteLine />,
          danger: true,
          onClick: async (session) => await removeSession({ id: session.key }),
        },
      ]}
      activeKey={currentSessionId}
      onActiveChange={(key) => {
        changeCurrentSessionId(key);
        if (props.narrowMode) {
          toggleCollapsed();
        }
      }}
    />
  </div>;
}