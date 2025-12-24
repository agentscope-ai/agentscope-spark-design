import { Bubble, useProviderContext } from "@agentscope-ai/chat";
import { ChatAnywhereMessagesContext } from "../../Context/ChatAnywhereMessagesContext";
import { useContextSelector } from "use-context-selector";
import { ChatAnywhereSessionsContext } from "../../Context/ChatAnywhereSessionsContext";
import cls from 'classnames';
import Welcome from "../Welcome";
import { ChatAnywhereInputContext } from "../../Context/ChatAnywhereInputContext";


export default function MessageList(props: { onSubmit: (data: { query: string; fileList?: any[] }) => void }) {
  const loading = useContextSelector(ChatAnywhereInputContext, v => v.loading);
  const messages = useContextSelector(ChatAnywhereMessagesContext, v => v.messages);
  const prefixCls = useProviderContext().getPrefixCls('chat-anywhere-message-list');
  const currentSessionId = useContextSelector(ChatAnywhereSessionsContext, v => v.currentSessionId);

  if (messages.length === 0) return <div className={cls(prefixCls, `${prefixCls}-welcome`)}>
    <Welcome onSubmit={props.onSubmit} />
  </div>;

  return <>
    <Bubble.List
      smooth={loading}
      key={currentSessionId}
      classNames={{
        wrapper: prefixCls,
      }}
      items={messages}
    />
  </>;
}