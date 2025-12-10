import { SparkCopyLine, SparkReplaceLine } from "@agentscope-ai/icons";
import { IAgentScopeRuntimeResponse } from "../types";
import AgentScopeRuntimeResponseBuilder from "./Builder";
import { Bubble } from "@agentscope-ai/chat";
import { copy } from "@agentscope-ai/design";
import compact from 'lodash/compact';
import { emit } from "../../Context/useChatAnywhereEventEmitter";
import { useChatAnywhereOptions } from "../../Context/ChatAnywhereOptionsContext";


export default function Tools(props: {
  data: IAgentScopeRuntimeResponse
  isLast?: boolean;
}) {
  const actionsOptionsList = useChatAnywhereOptions(v => v.actions?.list) || [
    {
      icon: <SparkCopyLine />,
      onClick: () => {
        copy(JSON.stringify(props.data));
      }
    }
  ];

  const actions = compact([
    ...actionsOptionsList.map(i => {
      return {
        ...i,
        onClick: () => {
          i.onClick(props);
        }
      }
    }),
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

