import { useMemo } from "react";
import { AgentScopeRuntimeMessageType, IAgentScopeRuntimeResponse } from "../types";
import AgentScopeRuntimeResponseBuilder from "./Builder";
import Message from "./Message";
import Tool from "./Tool";
import Reasoning from "./Reasoning";
import Error from "./Error";
import { Bubble } from "@agentscope-ai/chat";
import Actions from "./Actions";

export default function AgentScopeRuntimeResponseCard(props: {
  data: IAgentScopeRuntimeResponse;
  isLast?: boolean;
}) {
  const messages = useMemo(() => {
    return AgentScopeRuntimeResponseBuilder.mergeToolMessages(props.data.output);
  }, [props.data.output])


  if (!messages?.length && AgentScopeRuntimeResponseBuilder.maybeGenerating(props.data)) return <Bubble.Spin />;

  return <>{
    messages.map(item => {
      switch (item.type) {
        case AgentScopeRuntimeMessageType.MESSAGE:
          return <Message key={item.id} data={item} />
        case AgentScopeRuntimeMessageType.PLUGIN_CALL:
        case AgentScopeRuntimeMessageType.PLUGIN_CALL_OUTPUT:
          return <Tool key={item.id} data={item} />
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
    <Actions {...props} />
  </>
}
