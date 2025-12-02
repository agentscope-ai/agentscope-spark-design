import { AgentScopeRuntimeRunStatus, IAgentScopeRuntimeMessage, ITextContent } from "../types";
import { Thinking } from "@agentscope-ai/chat";

export default function Reasoning({ data }: { data: IAgentScopeRuntimeMessage }) {

  if (data.status === AgentScopeRuntimeRunStatus.Created) return null;

  const content = data?.content?.[0] as ITextContent;
  if (!content) return null;

  return <Thinking
    title="Thinking"
    content={content.text}

  ></Thinking>;
}