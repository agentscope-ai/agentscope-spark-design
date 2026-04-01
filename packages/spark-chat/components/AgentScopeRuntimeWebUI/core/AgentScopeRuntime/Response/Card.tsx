import { useMemo } from "react";
import { AgentScopeRuntimeMessageType, IAgentScopeRuntimeResponse } from "../types";
import AgentScopeRuntimeResponseBuilder from "./Builder";
import Message from "./Message";
import Tool from "./Tool";
import Reasoning from "./Reasoning";
import Error from "./Error";
import { Bubble } from "@agentscope-ai/chat";
import Actions from "./Actions";
import { Avatar, Flex } from 'antd';
import { useChatAnywhereOptions } from "../../Context/ChatAnywhereOptionsContext";

export default function AgentScopeRuntimeResponseCard(props: {
  data: IAgentScopeRuntimeResponse;
  isLast?: boolean;
}) {
  const avatar = useChatAnywhereOptions(v => v.welcome.avatar);
  const nick = useChatAnywhereOptions(v => v.welcome.nick);
  const messages = useMemo(() => {
    return AgentScopeRuntimeResponseBuilder.mergeToolMessages(props.data.output);
  }, [props.data.output])


  if (!messages?.length && AgentScopeRuntimeResponseBuilder.maybeGenerating(props.data)) return <Bubble.Spin />;

  return <>
    {avatar && <Flex align="center" gap={8} style={{ marginBottom: 8 }}>
      <Avatar src={avatar} />
      {nick && <span>{nick as string}</span>}
    </Flex>}
    {

      messages.map(item => {
        switch (item.type) {
          case AgentScopeRuntimeMessageType.MESSAGE:
            return <Message key={item.id} data={item} />
          case AgentScopeRuntimeMessageType.PLUGIN_CALL:
          case AgentScopeRuntimeMessageType.PLUGIN_CALL_OUTPUT:
          case AgentScopeRuntimeMessageType.MCP_CALL:
          case AgentScopeRuntimeMessageType.MCP_CALL_OUTPUT:
            return <Tool key={item.id} data={item} />
          case AgentScopeRuntimeMessageType.MCP_APPROVAL_REQUEST:
            return <Tool key={item.id} data={item} isApproval={true} />
          case AgentScopeRuntimeMessageType.REASONING:
            return <Reasoning key={item.id} data={item} />
          case AgentScopeRuntimeMessageType.ERROR:
            return <Error key={item.id} data={item} />
          case AgentScopeRuntimeMessageType.HEARTBEAT:
            return null;
          default:
            console.warn(`[WIP] Unknown message type: ${item.type}`);
            return null;
        }
      })
    }
    {
      props.data.error && <Error data={props.data.error} />
    }
    <Actions {...props} />
  </>
}
