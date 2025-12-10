import React from "react";
import { AgentScopeRuntimeRunStatus, IAgentScopeRuntimeMessage, IDataContent } from "../types";
import { ToolCall } from '@agentscope-ai/chat';
import { useChatAnywhereOptions } from "../../Context/ChatAnywhereOptionsContext";

const Tool = React.memo(function ({ data }: { data: IAgentScopeRuntimeMessage }) {
  const customToolRenderConfig = useChatAnywhereOptions(v => v.customToolRenderConfig) || {};

  if (!data.content?.length) return null;
  const content = data.content as IDataContent<{
    name: string;
    server_label?: string;
    arguments: Record<string, any>;
    output: Record<string, any>;
  }>[]
  const loading = !content[1]?.data || data.status === AgentScopeRuntimeRunStatus.InProgress;
  const toolName = content[0].data.name;
  const serverLabel = `${content[0].data.server_label ? content[0].data.server_label + ' / ' : ''}`
  const title = `${serverLabel}${toolName}`

  if (customToolRenderConfig[toolName]) {
    const C = customToolRenderConfig[toolName];
    return <C data={data} />
  } else {
    return <ToolCall loading={loading} defaultOpen={false} title={title} input={content[0]?.data?.arguments} output={content[1]?.data?.output}></ToolCall>
  }
})

export default Tool;

