import { Drawer } from 'antd';
import { useContext } from 'react';
import { useProviderContext } from '../../../Provider';
import { ChatAnyWhereLayoutContext } from '../Context/ChatAnywhereLayoutContext';
import { useChatAnywhereOptions } from '../Context/ChatAnywhereOptionsContext';
import { InnerAdder, InnerHeader, InnerList } from '../Sessions';
import Style from './styles';

export default function Header() {
  const prefixCls = useProviderContext().getPrefixCls('chat-anywhere');
  const { narrowMode, rightHeader } = useChatAnywhereOptions((v) => v.theme);
  const hideBuiltInSessionList = useChatAnywhereOptions(
    (v) => v.session?.hideBuiltInSessionList,
  );
  const { toggleCollapsed, collapsed } = useContext(ChatAnyWhereLayoutContext);
  const showNarrowSessionList = narrowMode && !hideBuiltInSessionList;

  return (
    <>
      <Style />

      <div className={`${prefixCls}-layout-right-header`}>
        {showNarrowSessionList ? (
          <InnerHeader className={`${prefixCls}-default-header-inner`} />
        ) : null}
        {rightHeader && (
          <div className={`${prefixCls}-default-header-right`}>
            {rightHeader}
          </div>
        )}
      </div>

      {showNarrowSessionList && (
        <Drawer
          width="80vw"
          styles={{ body: { padding: 0 } }}
          open={collapsed}
          onClose={toggleCollapsed}
          title={null}
          closable={false}
          placement="left"
        >
          <div className={`${prefixCls}-sessions`}>
            <InnerList narrowMode />
            <InnerAdder narrowMode />
          </div>
        </Drawer>
      )}
    </>
  );
}
