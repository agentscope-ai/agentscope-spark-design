import { SparkCopyLine } from "@agentscope-ai/icons";
import { AgentScopeRuntimeContentType, IAgentScopeRuntimeRequest } from "../types";
import { Bubble } from "@agentscope-ai/chat";
import { copy } from "../../../../Util/copy";
import { useChatAnywhereOptions } from "../../Context/ChatAnywhereOptionsContext";

function getTextContent(data: IAgentScopeRuntimeRequest): string {
  return data.input
    .flatMap(i => i.content)
    .filter(c => c.type === AgentScopeRuntimeContentType.TEXT)
    .map(c => (c as { text: string }).text)
    .join('\n');
}

export default function RequestActions(props: {
  data: IAgentScopeRuntimeRequest;
}) {
  const requestActionsOptions = useChatAnywhereOptions(v => v.requestActions);
  if (!requestActionsOptions) return null;

  const text = getTextContent(props.data);

  const defaultActions = text ? [
    {
      icon: <SparkCopyLine />,
      onClick: () => { copy(text); },
    },
  ] : [];

  const actions = (requestActionsOptions.list || defaultActions).map(i => ({
    ...i,
    onClick: () => { i.onClick?.({ data: props.data }); },
  }));

  if (!actions.length) return null;

  return (
    <Bubble.Footer
      right={<Bubble.Footer.Actions data={actions} />}
    />
  );
}
