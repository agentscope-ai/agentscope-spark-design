import { SparkCopyLine } from '@agentscope-ai/icons';
import React from 'react';
import Bubble from '../../../../Bubble';
import { copy } from '../../../../Util/copy';
import { useChatAnywhereOptions } from '../../Context/ChatAnywhereOptionsContext';
import {
  AgentScopeRuntimeContentType,
  IAgentScopeRuntimeRequest,
} from '../types';

function getTextContent(data: IAgentScopeRuntimeRequest): string {
  return data.input
    .flatMap((i) => i.content)
    .filter((c) => c.type === AgentScopeRuntimeContentType.TEXT)
    .map((c) => (c as { text: string }).text)
    .join('\n');
}

export default function RequestActions(props: {
  data: IAgentScopeRuntimeRequest;
}) {
  const requestActionsOptions = useChatAnywhereOptions((v) => v.requestActions);
  if (!requestActionsOptions) return null;

  const text = getTextContent(props.data);

  const defaultActions = text
    ? [
        {
          icon: <SparkCopyLine />,
          onClick: () => {
            copy(text);
          },
        },
      ]
    : [];

  const actions = (requestActionsOptions.list || defaultActions).map((i) => {
    const res = { ...i } as any;
    if (i.render) {
      res.children = React.createElement(i.render, { data: props.data });
    }
    return {
      ...res,
      onClick: () => {
        i.onClick?.({ data: props.data });
      },
    };
  });

  if (!actions.length) return null;

  return <Bubble.Footer right={<Bubble.Footer.Actions data={actions} />} />;
}
