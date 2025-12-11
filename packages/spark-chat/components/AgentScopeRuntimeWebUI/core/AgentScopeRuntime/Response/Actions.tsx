import { SparkCopyLine, SparkReplaceLine } from "@agentscope-ai/icons";
import { IAgentScopeRuntimeResponse } from "../types";
import AgentScopeRuntimeResponseBuilder from "./Builder";
import { Bubble } from "@agentscope-ai/chat";
import { copy } from "@agentscope-ai/design";
import compact from 'lodash/compact';
import { emit } from "../../Context/useChatAnywhereEventEmitter";
import { useChatAnywhereOptions } from "../../Context/ChatAnywhereOptionsContext";


function Usage(props: {
  input_tokens: string;
  output_tokens: string;
}) {
  if (!props.input_tokens || !props.output_tokens) return null;
  return <Bubble.Footer.Count data={[
    ['Input', props.input_tokens],
    ['Output', props.output_tokens],
  ]} />
}

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
      const res = i;
      if (i.onClick) {
        res.onClick = () => {
          i.onClick(props);
        }
      }
      if (i.render) {
        res.children = i.render(props);
      }
      return res
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
    right={<Usage input_tokens={props.data.usage?.input_tokens} output_tokens={props.data.usage?.output_tokens} />}
  />
}

