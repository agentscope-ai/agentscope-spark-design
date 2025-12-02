import { useEffect } from "react";

interface IAgentScopeRuntimeWebUIEventEmitter {
  type: string;
  callback: (event: any) => void;
}


export default function useChatAnywhereEventEmitter(props: IAgentScopeRuntimeWebUIEventEmitter) {

  useEffect(() => {
    document.addEventListener(props.type, props.callback);
    return () => {
      document.removeEventListener(props.type, props.callback);
    }
  }, [])

}


export const emit = function (props: {
  type: string;
  data?: any;
}) {
  const { type, data } = props;

  document.dispatchEvent(new CustomEvent(type, {
    detail: data,
  }))
}