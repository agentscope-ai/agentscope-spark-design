import Thinking from '../../../../OperateCard/preset/Thinking';
import {
  AgentScopeRuntimeRunStatus,
  IAgentScopeRuntimeMessage,
  ITextContent,
} from '../types';

export default function Reasoning({
  data,
}: {
  data: IAgentScopeRuntimeMessage;
}) {
  if (data.status === AgentScopeRuntimeRunStatus.Created) return null;

  const content = data?.content?.[0] as ITextContent;
  if (!content) return null;

  return (
    <Thinking
      loading={data.status === AgentScopeRuntimeRunStatus.InProgress}
      title="Thinking"
      content={content.text}
    ></Thinking>
  );
}
