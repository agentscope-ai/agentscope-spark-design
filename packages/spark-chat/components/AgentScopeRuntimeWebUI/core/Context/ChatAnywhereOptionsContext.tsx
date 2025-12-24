import { useResponsive } from "ahooks";
import { IAgentScopeRuntimeWebUIOptions } from "@agentscope-ai/chat";
import { createContext, useContextSelector } from 'use-context-selector';
import { useMemo } from "react";
import { ConfigProvider, generateTheme, generateThemeByToken } from '@agentscope-ai/design';


const ChatAnywhereOptionsContext = createContext<IAgentScopeRuntimeWebUIOptions>(undefined);

export function useChatAnywhereOptions<Selected>(selector: (value: IAgentScopeRuntimeWebUIOptions) => Selected) {
  try {
    const context = useContextSelector(ChatAnywhereOptionsContext, selector);
    return context;

  } catch (error) {
    return {} as Selected;
  }
};


export function ChatAnywhereOptionsContextProvider(props: { children: React.ReactNode, options: IAgentScopeRuntimeWebUIOptions }) {
  const { children } = props;
  const responsive = useResponsive();

  const options = useMemo(() => {
    const theme = props.options.theme || {};

    return {
      ...props.options,
      theme: {
        ...theme,
        narrowMode: !responsive.lg || theme.narrowMode,
      }
    };
  }, [props.options, responsive.lg]);

  const themeToken = useMemo(() => {
    const colorPrimary = options.theme.colorPrimary;
    const colorBgBase = options.theme.colorBgBase;
    const colorTextBase = options.theme.colorTextBase;
    const darkMode = options.theme.darkMode;
    if (colorPrimary || darkMode) {
      const res = generateThemeByToken(generateTheme({
        primaryHex: colorPrimary,
        bgBaseHex: colorBgBase,
        textBaseHex: colorTextBase,
        darkMode: darkMode,
      }));

      return res;
    }
    return
  }, [options.theme.colorPrimary, options.theme.colorBgBase, options.theme.colorTextBase, options.theme.darkMode]);


  const content = <ChatAnywhereOptionsContext.Provider value={options}>
    {children}
  </ChatAnywhereOptionsContext.Provider>;

  if (themeToken) {
    const prefix = options.theme.prefix || 'agentscope-runtime-webui';

    return <ConfigProvider
      {...themeToken}
      style={{ height: '100%' }}
      prefix={prefix}
      prefixCls={prefix}
    >
      {content}
    </ConfigProvider>
  }

  return content;
}

export default ChatAnywhereOptionsContext;
