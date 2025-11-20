import { UserMessageProps } from "../props";
import { Bubble } from "@agentscope-ai/chat";

export const UserMessage = (props: UserMessageProps) => {
  return <Bubble
    role="user"
    content={props.rawData.content}
    id={props.rawData.id}
  ></Bubble>
};
