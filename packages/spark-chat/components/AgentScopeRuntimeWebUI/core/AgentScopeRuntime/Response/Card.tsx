import React, { useMemo } from "react";
import { AgentScopeRuntimeMessageType, IAgentScopeRuntimeResponse } from "../types";
import AgentScopeRuntimeResponseBuilder from "./Builder";
import Message from "./Message";
import Tool from "./Tool";
import Reasoning from "./Reasoning";
import Error from "./Error";
import { Bubble } from "@agentscope-ai/chat";
import Actions from "./Actions";
import { Avatar, Flex } from 'antd';
import { useChatAnywhereOptions } from "../../Context/ChatAnywhereOptionsContext";

function sortByOrder<T extends { order?: number }>(arr: T[]): T[] {
  return arr.slice().sort((a, b) => (a.order ?? 100) - (b.order ?? 100));
}

/**
 * Default SDK rendering of the assistant response bubble, extracted so
 * plugin `response.render` can opt back into the original via fallback().
 *
 * `contentPrepend` / `contentAppend` are slot props for host integrations
 * that need to inject UI BETWEEN the messages and the action bar (e.g.
 * per-response footers, char counts, etc). They land in a position where
 * Actions stay anchored at the end of the card — separate from the
 * outer `responseOptions.prepend / append` lists, which sit OUTSIDE the
 * card and are intended for surrounding banners.
 */
function DefaultResponseRender(props: {
  data: IAgentScopeRuntimeResponse;
  isLast?: boolean;
  contentPrepend?: React.ReactNode;
  contentAppend?: React.ReactNode;
}) {
  const avatar = useChatAnywhereOptions(v => v.welcome.avatar);
  const nick = useChatAnywhereOptions(v => v.welcome.nick);
  const nickNode = typeof nick === 'string' || React.isValidElement(nick)
    ? nick
    : null;
  const messages = useMemo(() => {
    return AgentScopeRuntimeResponseBuilder.mergeToolMessages(props.data.output);
  }, [props.data.output])


  if (!messages?.length && AgentScopeRuntimeResponseBuilder.maybeGenerating(props.data)) return <Bubble.Spin />;

  return <>
    {avatar && <Flex align="center" gap={8} style={{ marginBottom: 8 }}>
      <Avatar src={avatar} />
      {nickNode && <span>{nickNode}</span>}
    </Flex>}
    {props.contentPrepend ?? null}
    {

      messages.map(item => {
        switch (item.type) {
          case AgentScopeRuntimeMessageType.MESSAGE:
            return <Message key={item.id} data={item} />
          case AgentScopeRuntimeMessageType.PLUGIN_CALL:
          case AgentScopeRuntimeMessageType.PLUGIN_CALL_OUTPUT:
          case AgentScopeRuntimeMessageType.TOOL_CALL:
          case AgentScopeRuntimeMessageType.TOOL_CALL_OUTPUT:
          case AgentScopeRuntimeMessageType.MCP_CALL:
          case AgentScopeRuntimeMessageType.MCP_CALL_OUTPUT:
            return <Tool key={item.id} data={item} />
          case AgentScopeRuntimeMessageType.MCP_APPROVAL_REQUEST:
            return <Tool key={item.id} data={item} isApproval={true} />
          case AgentScopeRuntimeMessageType.REASONING:
            return <Reasoning key={item.id} data={item} />
          case AgentScopeRuntimeMessageType.ERROR:
            return <Error key={item.id} data={item} />
          case AgentScopeRuntimeMessageType.HEARTBEAT:
            return null;
          default:
            console.warn(`[WIP] Unknown message type: ${item.type}`);
            return null;
        }
      })
    }
    {
      props.data.error && <Error data={props.data.error} />
    }
    {props.contentAppend ?? null}
    <Actions {...props} />
  </>
}

export default function AgentScopeRuntimeResponseCard(props: {
  data: IAgentScopeRuntimeResponse;
  isLast?: boolean;
  contentPrepend?: React.ReactNode;
  contentAppend?: React.ReactNode;
}) {
  const responseOptions = useChatAnywhereOptions(v => v.response);

  const fallback = () => (
    <DefaultResponseRender
      data={props.data}
      isLast={props.isLast}
      contentPrepend={props.contentPrepend}
      contentAppend={props.contentAppend}
    />
  );

  const main = responseOptions?.render
    ? responseOptions.render({
        data: props.data,
        isLast: props.isLast,
        fallback,
      })
    : fallback();

  const prependList = sortByOrder(responseOptions?.prepend ?? []);
  const appendList = sortByOrder(responseOptions?.append ?? []);

  if (
    !responseOptions?.render &&
    prependList.length === 0 &&
    appendList.length === 0
  ) {
    return fallback();
  }

  return <>
    {prependList.map((e, i) => (
      <React.Fragment key={e.id ?? `pre-${i}`}>
        {e.render({ data: props.data, isLast: props.isLast })}
      </React.Fragment>
    ))}
    {main}
    {appendList.map((e, i) => (
      <React.Fragment key={e.id ?? `post-${i}`}>
        {e.render({ data: props.data, isLast: props.isLast })}
      </React.Fragment>
    ))}
  </>
}
