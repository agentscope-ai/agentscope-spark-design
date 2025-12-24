import { createContext, useCallback, useState } from "react";

export const ChatAnyWhereLayoutContext = createContext<{
  collapsed: boolean;
  toggleCollapsed: () => void;
}>({
  collapsed: false,
  toggleCollapsed: () => { },
});


export function ChatAnyWhereLayoutContextProvider(props: {
  children: React.ReactNode | React.ReactNode[];
}) {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = useCallback(() => {
    setCollapsed(prev => !prev);
  }, []);

  return <ChatAnyWhereLayoutContext.Provider value={{
    collapsed,
    toggleCollapsed,
  }}>
    {props.children}
  </ChatAnyWhereLayoutContext.Provider>;
}