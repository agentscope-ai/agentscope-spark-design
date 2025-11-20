import React, { createContext } from "react";
import { ProviderProps } from './types';
import { DefaultCards } from '@agentscope-ai/chat';


export const CustomCardsContext = createContext<ProviderProps['cardConfig']>(undefined);

export const CustomCardsProvider = function (props: Pick<ProviderProps, 'cardConfig' | 'children'>) {
  return <CustomCardsContext.Provider value={props.cardConfig}>
    {props.children}
  </CustomCardsContext.Provider>
}

export const useCustomCardsContext = () => {
  const cardConfig = React.useContext(CustomCardsContext);
  return React.useMemo(() => ({ ...DefaultCards, ...cardConfig }), [cardConfig]);
}