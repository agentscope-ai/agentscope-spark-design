import React, { forwardRef, useMemo } from 'react';
import AgentScopeRuntimeRequestCard from '../AgentScopeRuntime/Request/Card';
import AgentScopeRuntimeResponseCard from '../AgentScopeRuntime/Response/Card';
import Layout from '../Layout';
import type {
  IAgentScopeRuntimeWebUIOptions,
  IAgentScopeRuntimeWebUIRef,
} from '../types';
import ComposedProvider from './ComposedProvider';

interface IProps {
  options: IAgentScopeRuntimeWebUIOptions;
}
function ChatAnywhere(
  props: IProps,
  ref: React.Ref<IAgentScopeRuntimeWebUIRef>,
) {
  const { options = {} as IAgentScopeRuntimeWebUIOptions } = props;
  const cards = useMemo(() => {
    const res = {
      AgentScopeRuntimeRequestCard,
      AgentScopeRuntimeResponseCard,
      ...options.cards,
    };
    return res;
  }, [options.cards]);

  return (
    <>
      <ComposedProvider
        key={options.session?.storageScope}
        options={options}
        cards={cards}
      >
        <Layout ref={ref} />
      </ComposedProvider>
    </>
  );
}

export default forwardRef<IAgentScopeRuntimeWebUIRef, IProps>(ChatAnywhere);
