import { useGetState } from 'ahooks';
import React, { useState } from 'react';


type TContext = {
  model: string;
  enableSearch: boolean;
  enableThinking: boolean;
  mode?: string;
  initial?: boolean;
  canvas: boolean;
}

export const DemoContext = React.createContext<{
  demoContext: TContext,
  setDemoContext: (data: Partial<TContext>) => void,
  getDemoContext: () => TContext
}>(undefined);




export default function (props: { children: React.ReactNode }) {
  const [demoContext, setDemoContext, getDemoContext] = useGetState<TContext>({
    model: 'chatgpt-4o',
    enableSearch: false,
    enableThinking: false,
    initial: true,
    mode: 'DeepResearch',
    canvas: false,
  });


  return <DemoContext.Provider value={{
    demoContext, setDemoContext(data) {
      setDemoContext(v => {
        return { ...v, ...data }
      })
    }, getDemoContext
  }}>
    {props.children}
  </DemoContext.Provider>
}