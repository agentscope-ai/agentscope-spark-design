import { SparkCopyLine, SparkReplaceLine } from "@agentscope-ai/icons";
import { IAgentScopeRuntimeResponse } from "../types";
import AgentScopeRuntimeResponseBuilder from "./Builder";
import { Bubble } from "@agentscope-ai/chat";
import { copy, message } from "@agentscope-ai/design";
import compact from 'lodash/compact';
import { emit } from "../../Context/useChatAnywhereEventEmitter";


export default function Tools(props: {
  data: IAgentScopeRuntimeResponse
  isLast?: boolean;
}) {

  const actions = compact([
    {
      icon: <SparkCopyLine />,
      onClick: () => {
        copy(JSON.stringify(props.data));
      }
    },
    props.isLast ? {
      icon: <SparkReplaceLine />,
      onClick: () => {
        emit({
          type: 'handleReplace',
          data: props,
        })
      }
    } : null,
  ]);


  if (!AgentScopeRuntimeResponseBuilder.maybeDone(props.data)) return null;
  return <Bubble.Footer
    left={<Bubble.Footer.Actions data={actions} />}
  />
}

