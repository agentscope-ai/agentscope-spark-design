import { createContext, useCallback, useMemo, useState } from "react";

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

  const value = useMemo(() => ({
    collapsed,
    toggleCollapsed,
  }), [collapsed, toggleCollapsed]);

  return <ChatAnyWhereLayoutContext.Provider value={value}>
    {props.children}
  </ChatAnyWhereLayoutContext.Provider>;
}