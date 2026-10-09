import React, { useEffect, useState } from 'react';
import ToolCall from '../../../../OperateCard/preset/ToolCall';
import { useChatAnywhereOptions } from '../../Context/ChatAnywhereOptionsContext';
import {
  AgentScopeRuntimeMessageType,
  AgentScopeRuntimeRunStatus,
  IAgentScopeRuntimeMessage,
  IDataContent,
} from '../types';
import Approval from './Approval';

// output展示后，2s自动关闭
const OUTPUT_AUTO_COLLAPSE_MS = 2000;

const Tool = React.memo(function ({
  data,
  isApproval = false,
}: {
  data: IAgentScopeRuntimeMessage;
  isApproval?: boolean;
}) {
  const customToolRenderConfig =
    useChatAnywhereOptions((v) => v.customToolRenderConfig) || {};

  const isOutput = [
    AgentScopeRuntimeMessageType.PLUGIN_CALL_OUTPUT,
    AgentScopeRuntimeMessageType.TOOL_CALL_OUTPUT,
    AgentScopeRuntimeMessageType.FUNCTION_CALL_OUTPUT,
    AgentScopeRuntimeMessageType.COMPONENT_CALL_OUTPUT,
    AgentScopeRuntimeMessageType.MCP_CALL_OUTPUT,
  ].includes(data.type);

  // Already-completed outputs start collapsed so the 2s auto-collapse timer
  // below skips them entirely — otherwise every historical output would
  // mount with key='open' and then unmount/remount to key='collapsed' 2s
  // later, churning component instances on page load.
  const [autoCollapsed, setAutoCollapsed] = useState(
    () => data.status !== AgentScopeRuntimeRunStatus.InProgress,
  );
  useEffect(() => {
    if (!isOutput || autoCollapsed) return;
    const timer = setTimeout(
      () => setAutoCollapsed(true),
      OUTPUT_AUTO_COLLAPSE_MS,
    );
    return () => clearTimeout(timer);
  }, [isOutput, autoCollapsed]);

  if (!data.content?.length) return null;
  const content = data.content as IDataContent<{
    name: string;
    server_label?: string;
    arguments: Record<string, any>;
    output: Record<string, any>;
  }>[];
  const loading = data.status === AgentScopeRuntimeRunStatus.InProgress;
  const toolName = content[0].data.name;
  const serverLabel = `${
    content[0].data.server_label ? content[0].data.server_label + ' / ' : ''
  }`;
  const title = `${serverLabel}${toolName}`;

  // Only the actively-running tool call shows its args/output expanded.
  // Historical (completed) tool calls stay collapsed so OperateCard does
  // not mount the body subtree — each input/output Block holds a
  // CodeMirror EditorView (~380ms init); 30 historical tool calls would
  // otherwise mount 60 editors at once, locking the UI for ~22s on long
  // conversations. Users click the card header to view past args/output.
  const defaultOpen = loading;

  let node;

  if (customToolRenderConfig[toolName]) {
    const C = customToolRenderConfig[toolName];
    node = <C data={data} />;
  } else {
    node = (
      <ToolCall
        key={autoCollapsed ? 'collapsed' : 'open'}
        loading={loading}
        defaultOpen={defaultOpen}
        title={title === 'undefined' ? '' : title}
        input={content[0]?.data?.arguments}
        output={content[1]?.data?.output}
      ></ToolCall>
    );
  }

  return (
    <>
      {node}
      {isApproval && <Approval data={data} />}
    </>
  );
});

export default Tool;
