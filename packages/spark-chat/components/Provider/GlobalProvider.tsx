
import React, { createContext } from "react";
import { ProviderProps } from './types';


export const GlobalContext = createContext<Pick<ProviderProps, 'markdown'>>(undefined);

export const GlobalProvider = function (props: Pick<ProviderProps, 'markdown' | 'children'>) {
  return <GlobalContext.Provider value={props}>
    {props.children}
  </GlobalContext.Provider>
}

export const useGlobalContext = () => {
  const context = React.useContext(GlobalContext);
  return context || {};
}