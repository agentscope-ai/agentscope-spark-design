import Layout from '../Layout';
import type { IAgentScopeRuntimeWebUIOptions } from '@agentscope-ai/chat';
import { useMemo } from 'react';
import AgentScopeRuntimeRequestCard from '../AgentScopeRuntime/Request/Card';
import AgentScopeRuntimeResponseCard from '../AgentScopeRuntime/Response/Card';
import ComposedProvider from './ComposedProvider';

interface IProps {
  options: IAgentScopeRuntimeWebUIOptions;
}
export default function ChatAnywhere(props: IProps) {
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
      <Layout />
    </ComposedProvider>
  </>;
}