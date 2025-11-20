import { ConfigProvider } from "@agentscope-ai/design";
import React from "react";
import { CustomCardsProvider, CustomCardsContext, useCustomCardsContext } from './CustomCardsProvider';
import { GlobalProvider, GlobalContext, useGlobalContext } from './GlobalProvider';
import type { ProviderProps } from './types';


const SparkChatProvider = (props: ProviderProps) => {
  const { children, cardConfig, markdown } = props;
  return <GlobalProvider markdown={markdown}>
    <CustomCardsProvider cardConfig={cardConfig}>
      {children}
    </CustomCardsProvider>
  </GlobalProvider>
};


export function useProviderContext() {
  const context = React.useContext(ConfigProvider.ConfigContext);
  return context;
}


export default SparkChatProvider;
export {
  useCustomCardsContext,
  CustomCardsProvider,
  useGlobalContext,
  CustomCardsContext,
  GlobalProvider,
  GlobalContext,
  ProviderProps
}
