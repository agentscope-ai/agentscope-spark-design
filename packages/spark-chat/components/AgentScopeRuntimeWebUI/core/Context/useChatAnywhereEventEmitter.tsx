import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
} from 'react';
import type { IAgentScopeRuntimeMessage } from '../AgentScopeRuntime/types';
import type { IAgentScopeRuntimeWebUIInputData } from '../types';

export interface ChatAnywhereCommandMap {
  handleReconnect: { session_id: string };
  handleSessionLoaded: { session_id: string; generating: boolean };
  handleReplace: { id: string };
  handleSubmit: IAgentScopeRuntimeWebUIInputData;
  handleApproval: { input: IAgentScopeRuntimeMessage[] };
}

type ChatAnywhereCommandType = keyof ChatAnywhereCommandMap;

interface ChatAnywhereCommandBus {
  target: EventTarget;
}

const ChatAnywhereCommandContext = createContext<ChatAnywhereCommandBus | null>(
  null,
);

export function ChatAnywhereCommandProvider(props: {
  children: React.ReactNode;
}) {
  const busRef = useRef<ChatAnywhereCommandBus>();
  if (!busRef.current) {
    busRef.current = { target: new EventTarget() };
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
    event: CustomEvent<ChatAnywhereCommandMap[Type]>,
  ) => void | Promise<void>;
}) {
  const bus = useChatAnywhereCommandBus();
  const callbackRef = useRef(props.callback);
  callbackRef.current = props.callback;

  useEffect(() => {
    const listener: EventListener = (event) => {
      void Promise.resolve(
        callbackRef.current(event as CustomEvent<ChatAnywhereCommandMap[Type]>),
      ).catch((error) => {
        console.error(
          `AgentScopeRuntimeWebUI command ${props.type} failed:`,
          error,
        );
      });
    };
    bus.target.addEventListener(props.type, listener);
    return () => {
      bus.target.removeEventListener(props.type, listener);
    };
  }, [bus, props.type]);
}

export function useChatAnywhereCommandDispatcher() {
  const bus = useChatAnywhereCommandBus();

  return useCallback(
    <Type extends ChatAnywhereCommandType>(
      type: Type,
      data: ChatAnywhereCommandMap[Type],
    ) => {
      bus.target.dispatchEvent(new CustomEvent(type, { detail: data }));
    },
    [bus],
  );
}
