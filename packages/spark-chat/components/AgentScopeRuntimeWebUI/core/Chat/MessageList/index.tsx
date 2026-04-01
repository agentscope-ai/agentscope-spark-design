import { Bubble, useProviderContext } from "@agentscope-ai/chat";
import { ChatAnywhereMessagesContext } from "../../Context/ChatAnywhereMessagesContext";
import { useContextSelector } from "use-context-selector";
import { ChatAnywhereSessionsContext } from "../../Context/ChatAnywhereSessionsContext";
import cls from 'classnames';
import Welcome from "../Welcome";
import { useChatAnywhereOptions } from "../../Context/ChatAnywhereOptionsContext";
import React from "react";


export default function MessageList(props: { onSubmit: (data: { query: string; fileList?: any[] }) => void }) {
  const messages = useContextSelector(ChatAnywhereMessagesContext, v => v.messages);
  const safeMessages = React.useMemo(() => [...(messages || [])].reverse(), [messages]);
  const prefixCls = useProviderContext().getPrefixCls('chat-anywhere-message-list');
  const currentSessionId = useContextSelector(ChatAnywhereSessionsContext, v => v.currentSessionId);
  const bubbleListOptions = useChatAnywhereOptions(v => v.theme?.bubbleList);
  const listRef = React.useRef<{ scrollToBottom: () => void } | null>(null);
  const prevMessagesLengthRef = React.useRef(safeMessages.length);

  React.useEffect(() => {
    if (safeMessages.length > prevMessagesLengthRef.current) {
      listRef.current?.scrollToBottom();
    }
    prevMessagesLengthRef.current = safeMessages.length;
  }, [safeMessages.length]);

  if (safeMessages.length === 0) return <div className={cls(prefixCls, `${prefixCls}-welcome`)}>
    <Welcome onSubmit={props.onSubmit} />
  </div>;

  return <Bubble.List
    ref={listRef}
    pagination={bubbleListOptions?.pagination ?? true}
    order="desc"
    key={currentSessionId}
    classNames={{
      wrapper: prefixCls,
    }}
    items={safeMessages}
  />
}