import Layout from '../Layout';
import type { IAgentScopeRuntimeWebUIOptions } from '@agentscope-ai/chat';
import { forwardRef, useMemo, useState } from 'react';
import AgentScopeRuntimeRequestCard from '../AgentScopeRuntime/Request/Card';
import AgentScopeRuntimeResponseCard from '../AgentScopeRuntime/Response/Card';
import ComposedProvider from './ComposedProvider';
import React from 'react';

interface IProps {
  options: IAgentScopeRuntimeWebUIOptions;
}
function ChatAnywhere(props: IProps, ref: React.Ref<any>) {
  const { options = {} as IAgentScopeRuntimeWebUIOptions } = props;
  const cards = useMemo(() => {
    const res = {
      AgentScopeRuntimeRequestCard,
      AgentScopeRuntimeResponseCard,
      ...options.cards,
    };
    return res;
  }, [options.cards]);


  return <>
    <ComposedProvider options={options} cards={cards}>
      <Layout ref={ref} />
    </ComposedProvider>
  </>;
}


export default forwardRef(ChatAnywhere);