import React, { useEffect, useState } from "react";
import { AgentScopeRuntimeMessageType, AgentScopeRuntimeRunStatus, IAgentScopeRuntimeMessage, IDataContent } from "../types";
import { ToolCall } from '@agentscope-ai/chat';
import { useChatAnywhereOptions } from "../../Context/ChatAnywhereOptionsContext";
import Approval from "./Approval";

// output展示后，2s自动关闭
const OUTPUT_AUTO_COLLAPSE_MS = 2000;

const Tool = React.memo(function ({ data, isApproval = false }: { data: IAgentScopeRuntimeMessage, isApproval?: boolean }) {
  const customToolRenderConfig = useChatAnywhereOptions(v => v.customToolRenderConfig) || {};

  const isOutput = [
    AgentScopeRuntimeMessageType.PLUGIN_CALL_OUTPUT,
    AgentScopeRuntimeMessageType.TOOL_CALL_OUTPUT,
    AgentScopeRuntimeMessageType.MCP_CALL_OUTPUT,
  ].includes(data.type);

  const [autoCollapsed, setAutoCollapsed] = useState(false);
  useEffect(() => {
    if (!isOutput || autoCollapsed) return;
    const timer = setTimeout(() => setAutoCollapsed(true), OUTPUT_AUTO_COLLAPSE_MS);
    return () => clearTimeout(timer);
  }, [isOutput, autoCollapsed]);

  if (!data.content?.length) return null;
  const content = data.content as IDataContent<{
    name: string;
    server_label?: string;
    arguments: Record<string, any>;
    output: Record<string, any>;
  }>[]
  const loading = data.status === AgentScopeRuntimeRunStatus.InProgress;
  const toolName = content[0].data.name;
  const serverLabel = `${content[0].data.server_label ? content[0].data.server_label + ' / ' : ''}`
  const title = `${serverLabel}${toolName}`

  const isInput = [
    AgentScopeRuntimeMessageType.PLUGIN_CALL,
    AgentScopeRuntimeMessageType.TOOL_CALL,
    AgentScopeRuntimeMessageType.MCP_CALL,
  ].includes(data.type);

  const defaultOpen = isInput || (isOutput && !autoCollapsed);

  let node

  if (customToolRenderConfig[toolName]) {
    const C = customToolRenderConfig[toolName];
    node = <C data={data} />
  } else {
    node = <ToolCall key={autoCollapsed ? 'collapsed' : 'open'} loading={loading} defaultOpen={defaultOpen} title={title === 'undefined' ? '' : title} input={content[0]?.data?.arguments} output={content[1]?.data?.output}></ToolCall>
  }

  return <>
    {node}
    {isApproval && <Approval data={data}/>}
  </>;
})


export default Tool;