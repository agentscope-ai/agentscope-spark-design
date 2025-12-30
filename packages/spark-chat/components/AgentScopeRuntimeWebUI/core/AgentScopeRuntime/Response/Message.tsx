import React from "react";
import { Markdown } from '@agentscope-ai/chat';
import { AgentScopeRuntimeContentType, AgentScopeRuntimeRunStatus, IAgentScopeRuntimeMessage } from "../types";

const Message = React.memo(function ({ data }: { data: IAgentScopeRuntimeMessage }) {
  if (!data.content?.length) return null;

  return <>
    {
      data.content.map((item, index) => {
        switch (item.type) {
          case AgentScopeRuntimeContentType.TEXT:
            return <Markdown key={index} content={item.text} cursor={item.status === AgentScopeRuntimeRunStatus.InProgress ? true : false}></Markdown>
          case AgentScopeRuntimeContentType.REFUSAL:
            return <Markdown raw key={index} content={item.refusal}></Markdown>
          default:
            return <div key={index}>{JSON.stringify(item)}</div>
        }
      })
    }
  </>
})

export default Message;

