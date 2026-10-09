import type { ReactNode } from 'react';
import { CustomCardsProvider } from '../../../Provider/CustomCardsProvider';
import { ChatAnywhereI18nContextProvider } from '../Context/ChatAnywhereI18nContext';
import { ChatAnywhereInputContextProvider } from '../Context/ChatAnywhereInputContext';
import { ChatAnyWhereLayoutContextProvider } from '../Context/ChatAnywhereLayoutContext';
import { ChatAnywhereMessagesContextProvider } from '../Context/ChatAnywhereMessagesContext';
import { ChatAnywhereOptionsContextProvider } from '../Context/ChatAnywhereOptionsContext';
import { ChatAnywhereSessionsContextProvider } from '../Context/ChatAnywhereSessionsContext';
import { ChatAnywhereCommandProvider } from '../Context/useChatAnywhereEventEmitter';
import type {
  IAgentScopeRuntimeWebUICardsOptions,
  IAgentScopeRuntimeWebUIOptions,
} from '../types';

export default function ComposedProvider(props: {
  options: IAgentScopeRuntimeWebUIOptions;
  cards: IAgentScopeRuntimeWebUICardsOptions;
  children: ReactNode;
}) {
  const { options, cards, children } = props;

  return (
    <ChatAnywhereCommandProvider>
      <ChatAnywhereI18nContextProvider defaultLocale={options.theme?.locale}>
        <ChatAnywhereOptionsContextProvider options={options}>
          <CustomCardsProvider cardConfig={cards}>
            <ChatAnywhereSessionsContextProvider>
              <ChatAnywhereMessagesContextProvider>
                <ChatAnywhereInputContextProvider>
                  <ChatAnyWhereLayoutContextProvider>
                    {children}
                  </ChatAnyWhereLayoutContextProvider>
                </ChatAnywhereInputContextProvider>
              </ChatAnywhereMessagesContextProvider>
            </ChatAnywhereSessionsContextProvider>
          </CustomCardsProvider>
        </ChatAnywhereOptionsContextProvider>
      </ChatAnywhereI18nContextProvider>
    </ChatAnywhereCommandProvider>
  );
}
