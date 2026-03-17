import { CustomCardsProvider } from "@agentscope-ai/chat";
import { ChatAnywhereInputContextProvider } from "../Context/ChatAnywhereInputContext";
import { ChatAnywhereOptionsContextProvider } from "../Context/ChatAnywhereOptionsContext";
import { ChatAnywhereSessionsContextProvider } from "../Context/ChatAnywhereSessionsContext";
import { ChatAnywhereMessagesContextProvider } from "../Context/ChatAnywhereMessagesContext";
import { ChatAnyWhereLayoutContextProvider } from "../Context/ChatAnywhereLayoutContext";
import { ChatAnywhereI18nContextProvider, Locale } from "../Context/ChatAnywhereI18nContext";

function ComposedProvider(props: { options, cards, children }) {
  const { options, cards, children } = props;
  const providers = [
    [ChatAnywhereI18nContextProvider, { defaultLocale: options.theme.locale }],
    [ChatAnywhereOptionsContextProvider, { options }],
    [CustomCardsProvider, { cardConfig: cards }],
    [ChatAnywhereSessionsContextProvider, {}],
    [ChatAnywhereMessagesContextProvider, {}],
    [ChatAnywhereInputContextProvider, {}],
    [ChatAnyWhereLayoutContextProvider, {}],
  ];

  return providers.reduceRight(
    // @ts-ignore
    (children, [Provider, props]) => <Provider {...props}>{children}</Provider>,
    children
  );
}


export default ComposedProvider;  