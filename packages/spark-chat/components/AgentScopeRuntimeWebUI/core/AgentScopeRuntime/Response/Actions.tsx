import { SparkCopyLine, SparkReplaceLine } from "@agentscope-ai/icons";
import { IAgentScopeRuntimeResponse } from "../types";
import AgentScopeRuntimeResponseBuilder from "./Builder";
import { Bubble } from "@agentscope-ai/chat";
import { Tooltip } from "@agentscope-ai/design";
import { copy } from "../../../../Util/copy";
import compact from 'lodash/compact';
import { emit } from "../../Context/useChatAnywhereEventEmitter";
import { useChatAnywhereOptions } from "../../Context/ChatAnywhereOptionsContext";
import { useTranslation } from "../../Context/ChatAnywhereI18nContext";
import React from "react";

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
  const { t } = useTranslation();
  const defaultActions = [
    {
      icon: <SparkCopyLine />,
      onClick: () => {
        copy(JSON.stringify(props.data));
      }
    }
  ];
  const configuredActions = useChatAnywhereOptions(v => v.actions?.list);
  const actionsOptionsList = Array.isArray(configuredActions)
    ? configuredActions
    : defaultActions;

  const replace = useChatAnywhereOptions(v => v.actions?.replace) ?? true;
  const rightOption = useChatAnywhereOptions(v => v.actions?.right);

  const actions = compact([
    ...actionsOptionsList.map(i => {
      const res = { ...i } as any;

      if (i.render) {
        res.children = React.createElement(i.render, { data: props });
      }
      return {
        ...res, onClick() {
          i.onClick?.(props);
        }
      }
    }),
    replace && props.isLast ? {
      icon: <Tooltip title={t?.('actions.regenerate') || '重新生成'}><SparkReplaceLine /></Tooltip>,
      onClick: () => {
        emit({
          type: 'handleReplace',
          data: props,
        })
      }
    } : null,
  ]);

  let rightNode: React.ReactElement | null;
  if (rightOption === false || (Array.isArray(rightOption) && rightOption.length === 0)) {
    rightNode = null;
  } else if (Array.isArray(rightOption)) {
    const rightActions = rightOption.map(i => {
      const res = { ...i } as any;
      if (i.render) {
        res.children = React.createElement(i.render, { data: props.data });
      }
      return { ...res, onClick: () => { i.onClick?.({ data: props.data }); } };
    });
    rightNode = <Bubble.Footer.Actions data={rightActions} />;
  } else {
    rightNode = <Usage input_tokens={props.data.usage?.input_tokens} output_tokens={props.data.usage?.output_tokens} />;
  }

  if (!AgentScopeRuntimeResponseBuilder.maybeDone(props.data)) return null;
  return <Bubble.Footer
    left={<Bubble.Footer.Actions data={actions} />}
    right={rightNode}
  />
}
