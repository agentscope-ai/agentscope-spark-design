import { useProviderContext } from '@agentscope-ai/chat';
import { useChatAnywhereOptions } from '../Context/ChatAnywhereOptionsContext';
import { useChatAnywhereSessionLoader } from '../Context/ChatAnywhereSessionsContext';
import useChatController from './hooks/useChatController';
import Input from './Input';
import InputQueuePanel from './InputQueue/Panel';
import MessageList from './MessageList';
import Style from './styles';

export default function Chat() {
  const prefixCls = useProviderContext().getPrefixCls('chat-anywhere-chat');
  const {
    handleSubmit,
    handleCancel,
    inputQueueEnabled,
    inputQueue,
    inputQueuePaused,
    inputQueueIsOwner,
    enqueueQueuedInput,
    removeQueuedInput,
    clearQueuedInputs,
    retryQueuedInput,
    toggleQueuePaused,
    reorderQueuedInput,
    updateQueuedInputQuery,
    sendQueuedInputNow,
  } = useChatController();
  const queueOptions = useChatAnywhereOptions((value) => value.sender?.queue);
  const inputQueueItemActions =
    queueOptions && typeof queueOptions === 'object'
      ? queueOptions.itemActions
      : undefined;
  useChatAnywhereSessionLoader();
  const inputQueuePanel = inputQueue.length ? (
    <InputQueuePanel
      items={inputQueue}
      paused={inputQueuePaused}
      isOwner={inputQueueIsOwner}
      itemActions={inputQueueItemActions}
      onRemove={removeQueuedInput}
      onClear={clearQueuedInputs}
      onRetry={retryQueuedInput}
      onTogglePaused={toggleQueuePaused}
      onReorder={reorderQueuedInput}
      onUpdateQuery={updateQueuedInputQuery}
      onSendNow={sendQueuedInputNow}
    />
  ) : null;

  return (
    <>
      <Style />
      <div className={prefixCls}>
        <MessageList onSubmit={handleSubmit} />
        <Input
          onCancel={handleCancel}
          onSubmit={handleSubmit}
          queue={
            inputQueueEnabled
              ? {
                  items: inputQueue,
                  isOwner: inputQueueIsOwner,
                  panel: inputQueuePanel,
                  onEnqueue: enqueueQueuedInput,
                }
              : undefined
          }
        />
      </div>
    </>
  );
}
