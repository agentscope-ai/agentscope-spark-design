import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
} from 'react';
import type { IAgentScopeRuntimeMessage } from '../AgentScopeRuntime/types';
import type {
  IAgentScopeRuntimeWebUIInputData,
  IAgentScopeRuntimeWebUIQueueEnqueueResult,
} from '../types';

export interface ChatAnywhereCommandMap {
  handleReconnect: { session_id: string };
  handleSessionLoaded: { session_id: string; generating: boolean };
  handleReplace: { id: string };
  handleSubmit: IAgentScopeRuntimeWebUIInputData;
  handleApproval: { input: IAgentScopeRuntimeMessage[] };
}

type ChatAnywhereCommandType = keyof ChatAnywhereCommandMap;

interface ChatAnywhereCommandResultMap {
  handleReconnect: void;
  handleSessionLoaded: void;
  handleReplace: void;
  handleSubmit: void | IAgentScopeRuntimeWebUIQueueEnqueueResult;
  handleApproval: void;
}

type ChatAnywhereCommandHandler = (data: unknown) => unknown | Promise<unknown>;

interface ChatAnywhereCommandBus {
  handlers: Map<ChatAnywhereCommandType, Set<ChatAnywhereCommandHandler>>;
}

const ChatAnywhereCommandContext = createContext<ChatAnywhereCommandBus | null>(
  null,
);

export function ChatAnywhereCommandProvider(props: {
  children: React.ReactNode;
}) {
  const busRef = useRef<ChatAnywhereCommandBus>();
  if (!busRef.current) {
    busRef.current = { handlers: new Map() };
  }

  return (
    <ChatAnywhereCommandContext.Provider value={busRef.current}>
      {props.children}
    </ChatAnywhereCommandContext.Provider>
  );
}

function useChatAnywhereCommandBus() {
  const bus = useContext(ChatAnywhereCommandContext);
  if (!bus) {
    throw new Error(
      'AgentScopeRuntimeWebUI command hooks must be used inside ChatAnywhereCommandProvider.',
    );
  }
  return bus;
}

export default function useChatAnywhereEventEmitter<
  Type extends ChatAnywhereCommandType,
>(props: {
  type: Type;
  callback: (
    data: ChatAnywhereCommandMap[Type],
  ) =>
    | ChatAnywhereCommandResultMap[Type]
    | Promise<ChatAnywhereCommandResultMap[Type]>;
}) {
  const bus = useChatAnywhereCommandBus();
  const callbackRef = useRef(props.callback);
  callbackRef.current = props.callback;

  useEffect(() => {
    const listener: ChatAnywhereCommandHandler = (data) =>
      callbackRef.current(data as ChatAnywhereCommandMap[Type]);
    const listeners = bus.handlers.get(props.type) || new Set();
    listeners.add(listener);
    bus.handlers.set(props.type, listeners);
    return () => {
      listeners.delete(listener);
      if (listeners.size === 0) bus.handlers.delete(props.type);
    };
  }, [bus, props.type]);
}

export function useChatAnywhereCommandDispatcher() {
  const bus = useChatAnywhereCommandBus();

  return useCallback(
    async <Type extends ChatAnywhereCommandType>(
      type: Type,
      data: ChatAnywhereCommandMap[Type],
    ): Promise<ChatAnywhereCommandResultMap[Type]> => {
      const handlers = Array.from(bus.handlers.get(type) || []);
      if (handlers.length === 0) {
        return undefined as ChatAnywhereCommandResultMap[Type];
      }
      const results = await Promise.all(
        handlers.map((handler) => handler(data)),
      );
      return results[0] as ChatAnywhereCommandResultMap[Type];
    },
    [bus],
  );
}
