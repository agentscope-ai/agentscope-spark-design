import React, { useContext, useState } from "react";
import { useProviderContext } from "@agentscope-ai/chat";
import { isMobileHook } from "../Layout";
import { useChatAnywhere } from "../hooks/ChatAnywhereProvider";
import { useSessionList } from "../hooks/useSessionList";
import Style from './style';
import { IconButton } from "@agentscope-ai/design";
import { SparkOperateLeftLine, SparkOperateRightLine } from "@agentscope-ai/icons";

export default function () {
  const { getPrefixCls } = useProviderContext();
  const prefixCls = getPrefixCls('chat-anywhere-header');
  const uiConfig = useChatAnywhere(v => v.uiConfig)
  const {
    sessionListShow,
    setSessionListShow
  } = useSessionList();
  const isMobile = isMobileHook();

  return <>
    <Style />
    <div className={prefixCls}>
      {
        isMobile && <IconButton
          style={{ marginLeft: 12 }}
          bordered={false}
          onClick={() => setSessionListShow(!sessionListShow)}
          icon={
            sessionListShow ? <SparkOperateLeftLine /> : <SparkOperateRightLine />
          }>
        </IconButton>
      }

      {uiConfig.header}
    </div>
  </>
}