import { useChatAnywhereOptions } from "../Context/ChatAnywhereOptionsContext";
import { InnerHeader, InnerList, InnerAdder } from '../Sessions';
import { useProviderContext } from "@agentscope-ai/chat";
import Style from './styles';
import { useContext } from "react";
import { Drawer } from 'antd';
import { ChatAnyWhereLayoutContext } from "../Context/ChatAnywhereLayoutContext";


export default function Header() {
  const prefixCls = useProviderContext().getPrefixCls('chat-anywhere');
  const { narrowMode, rightHeader } = useChatAnywhereOptions(v => v.theme);
  const hideBuiltInSessionList = useChatAnywhereOptions(v => v.session?.hideBuiltInSessionList);
  const { toggleCollapsed, collapsed } = useContext(ChatAnyWhereLayoutContext);
  const showNarrowSessionList = narrowMode && !hideBuiltInSessionList;

  return <>
    <Style />

    <div
      className={`${prefixCls}-layout-right-header`}
    >
      {
        showNarrowSessionList ? <InnerHeader className={`${prefixCls}-default-header-inner`} /> : null
      }
      {
        rightHeader && <div className={`${prefixCls}-default-header-right`}>{rightHeader}</div>
      }
    </div>

    {
      showNarrowSessionList && <Drawer
        width="80vw"
        styles={{ body: { padding: 0 } }}
        open={collapsed}
        onClose={toggleCollapsed}
        title={null}
        closable={false} placement="left">

        <div className={`${prefixCls}-sessions`}>
          <InnerList narrowMode />
          <InnerAdder narrowMode />
        </div>
      </Drawer>
    }
  </>;
}