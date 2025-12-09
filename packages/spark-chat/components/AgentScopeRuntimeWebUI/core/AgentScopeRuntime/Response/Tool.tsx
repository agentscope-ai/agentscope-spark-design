import React from "react";
import { AgentScopeRuntimeRunStatus, IAgentScopeRuntimeMessage, IDataContent } from "../types";
import { Bubble, ToolCall } from '@agentscope-ai/chat';

const Tool = React.memo(function ({ data }: { data: IAgentScopeRuntimeMessage }) {

  if (!data.content?.length) return null;
  const content = data.content as IDataContent<{
    name: string;
    server_label?: string;
    arguments: Record<string, any>;
    output: Record<string, any>;
  }>[]
  const loading = !content[1]?.data || data.status === AgentScopeRuntimeRunStatus.InProgress;

  const toolName = `${content[0].data.server_label ? content[0].data.server_label + ' / ' : ''}${content[0].data.name}`

  return <ToolCall loading={loading} defaultOpen={false} title={toolName} input={content[0]?.data?.arguments} output={content[1]?.data?.output}></ToolCall>
})

export default Tool;

