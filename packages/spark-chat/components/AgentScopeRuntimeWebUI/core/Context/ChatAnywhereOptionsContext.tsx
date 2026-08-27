import {
  ConfigProvider,
  generateTheme,
  generateThemeByToken,
} from '@agentscope-ai/design';
import { useResponsive } from 'ahooks';
import React, { useMemo } from 'react';
import { createContext, useContextSelector } from 'use-context-selector';
import type {
  IAgentScopeRuntimeWebUIOptions,
  IAgentScopeRuntimeWebUISenderOptions,
  IAgentScopeRuntimeWebUISessionAPI,
  IAgentScopeRuntimeWebUISessionOptions,
  IAgentScopeRuntimeWebUIThemeOptions,
  IAgentScopeRuntimeWebUIWelcomeOptions,
} from '../types';
import { createDefaultSessionApi } from './defaultSessionApi';

type NormalizedChatAnywhereOptions = Omit<
  IAgentScopeRuntimeWebUIOptions,
  'theme' | 'welcome' | 'sender' | 'session'
> & {
  theme: IAgentScopeRuntimeWebUIThemeOptions;
  welcome: IAgentScopeRuntimeWebUIWelcomeOptions;
  sender: IAgentScopeRuntimeWebUISenderOptions;
  session: Omit<IAgentScopeRuntimeWebUISessionOptions, 'api'> & {
    api: IAgentScopeRuntimeWebUISessionAPI;
  };
};

const fallbackSessionApi = createDefaultSessionApi(false);
const fallbackOptions: NormalizedChatAnywhereOptions = {
  api: {},
  session: { multiple: false, api: fallbackSessionApi },
  theme: {},
  welcome: {},
  sender: {},
};

const ChatAnywhereOptionsContext =
  createContext<NormalizedChatAnywhereOptions>(fallbackOptions);

export function useChatAnywhereOptions<Selected>(
  selector: (value: NormalizedChatAnywhereOptions) => Selected,
) {
  return useContextSelector(ChatAnywhereOptionsContext, selector);
}

export function ChatAnywhereOptionsContextProvider(props: {
  children: React.ReactNode;
  options: IAgentScopeRuntimeWebUIOptions;
}) {
  const { children } = props;
  const responsive = useResponsive();

  const defaultSessionApi = useMemo(
    () => createDefaultSessionApi(!!props.options.session?.multiple),
    [props.options.session?.multiple],
  );

  const options = useMemo<NormalizedChatAnywhereOptions>(() => {
    const theme = props.options.theme || {};
    const session = props.options.session || {};

    return {
      ...props.options,
      api: props.options.api || {},
      welcome: props.options.welcome || {},
      sender: props.options.sender || {},
      session: {
        ...session,
        multiple: !!session.multiple,
        api: {
          ...defaultSessionApi,
          ...session.api,
        },
      },
      theme: {
        ...theme,
        narrowMode: !responsive.lg || !!theme.narrowMode,
      },
    };
  }, [defaultSessionApi, props.options, responsive.lg]);

  const themeToken = useMemo(() => {
    const { colorPrimary, colorBgBase, colorTextBase, darkMode } =
      options.theme;
    if (!colorPrimary && !darkMode) return undefined;

    return generateThemeByToken(
      generateTheme({
        primaryHex: colorPrimary,
        bgBaseHex: colorBgBase,
        textBaseHex: colorTextBase,
        darkMode,
      }),
    );
  }, [
    options.theme.colorBgBase,
    options.theme.colorPrimary,
    options.theme.colorTextBase,
    options.theme.darkMode,
  ]);

  const content = (
    <ChatAnywhereOptionsContext.Provider value={options}>
      {children}
    </ChatAnywhereOptionsContext.Provider>
  );

  if (!themeToken) return content;

  const prefix = options.theme.prefix || 'agentscope-runtime-webui';
  return (
    <ConfigProvider
      {...themeToken}
      style={{ height: '100%' }}
      prefix={prefix}
      prefixCls={prefix}
    >
      {content}
    </ConfigProvider>
  );
}

export default ChatAnywhereOptionsContext;
