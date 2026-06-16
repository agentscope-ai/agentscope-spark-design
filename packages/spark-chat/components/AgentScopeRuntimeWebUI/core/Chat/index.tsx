import { useProviderContext } from "@agentscope-ai/chat";
import Input from "./Input";
import MessageList from "./MessageList";
import Style from './styles';
import useChatController from "./hooks/useChatController";
import { useChatAnywhereSessionLoader } from "../Context/ChatAnywhereSessionsContext";

export default function Chat() {
  const prefixCls = useProviderContext().getPrefixCls('chat-anywhere-chat');
  const {
    handleSubmit,
    handleCancel,
    inputQueue,
    enqueueQueuedInput,
    removeQueuedInput,
    clearQueuedInputs,
    retryQueuedInput,
  } = useChatController();
  useChatAnywhereSessionLoader();

  return <>
    <Style />
    <div className={prefixCls}>
      <MessageList onSubmit={handleSubmit} />
      <Input
        onCancel={handleCancel}
        onSubmit={handleSubmit}
        queue={{
          items: inputQueue,
          onEnqueue: enqueueQueuedInput,
          onRemove: removeQueuedInput,
          onClear: clearQueuedInputs,
          onRetry: retryQueuedInput,
        }}
      />
    </div>
  </>;
}
