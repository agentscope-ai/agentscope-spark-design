import { useSetState } from 'ahooks';
import { SetState } from 'ahooks/lib/useSetState';
import React, { useState } from 'react';
import { useGetState } from 'ahooks';


type TContext = {
  model: string
  apikey: string
  theme: 'purple' | 'carbon' | string
  enable_thinking?: boolean;
}

export const DemoContext = React.createContext<{
  demoContext: TContext,
  setDemoContext: SetState<TContext>,
  getDemoContext: () => TContext
}>(undefined);

export const DemoContextProvider = function (props: { children: React.ReactNode }) {
  const [demoContext, setDemoContext, getDemoContext] = useGetState<TContext>({
    model: 'qwq-plus',
    apikey: localStorage.getItem('apikey') || '',
    theme: localStorage.getItem('theme') || 'carbon',
    enable_thinking: undefined,
  });


  return <DemoContext.Provider value={{
    demoContext, getDemoContext, setDemoContext: data => {
      return setDemoContext((state) => {
        const nextState = {
          ...state,
          ...data,
        }

        if (nextState.model === 'qwen3-32b' && nextState.enable_thinking === undefined) {
          nextState.enable_thinking = true
        }

        if (nextState.model !== 'qwen3-32b') {
          nextState.enable_thinking = undefined;
        }

        localStorage.setItem('apikey', nextState.apikey);
        localStorage.setItem('theme', nextState.theme);
        return nextState
      });
    }
  }}>
    {props.children}
  </DemoContext.Provider>
};


export const useDemoContext = function () {
  return React.useContext(DemoContext);
};


