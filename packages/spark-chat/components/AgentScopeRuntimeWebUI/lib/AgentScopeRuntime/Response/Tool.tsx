import React from "react";
import { AgentScopeRuntimeRunStatus, IAgentScopeRuntimeMessage, IDataContent } from "../types";
import { Bubble, ToolCall } from '@agentscope-ai/chat';

const Tool = React.memo(function ({ data }: { data: IAgentScopeRuntimeMessage }) {

  if (data.status === AgentScopeRuntimeRunStatus.InProgress || data.status === AgentScopeRuntimeRunStatus.Created) return null;
  const content = data.content as IDataContent<{
    name: string;
    arguments: Record<string, any>;
    output: Record<string, any>;
  }>[];
  const toolName = content[0].data.name;

  return <ToolCall title={toolName} input={content[0].data.arguments} output={content[1].data.output}></ToolCall>
})

export default Tool;

