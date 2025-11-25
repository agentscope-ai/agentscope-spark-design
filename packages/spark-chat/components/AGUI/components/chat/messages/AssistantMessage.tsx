import { AssistantMessageProps } from "../props";
import { Bubble } from "@agentscope-ai/chat";
import compact from 'lodash/compact'

export const AssistantMessage = (props: AssistantMessageProps) => {
  if (props.subComponent) return props.subComponent;

  const hasThink = props.rawData.content?.includes('<think>');
  const msgStatus = props.isCurrentMessage && props.isGenerating ? "generating" : void 0;

  if (!hasThink) return <Bubble
    role="assistant"
    content={props.rawData.content}
    id={props.rawData.id}
    msgStatus={msgStatus}
  ></Bubble>;

  const hasThinkEnd = props.rawData.content.includes('</think>');

  const { content, think } = parseThinkContentIf(props.rawData.content);

  return <Bubble
    role="assistant"
    cards={compact([
      hasThink && {
        code: 'DeepThink',
        data: {
          title: 'AI思考',
          loading: !hasThinkEnd,
          content: think,
        },
      },
      {
        code: 'Text',
        data: {
          content: content,
          msgStatus: msgStatus
        },
      }
    ])}
    id={props.rawData.id}
    msgStatus={msgStatus}
  ></Bubble>;
};

function parseThinkContentIf(content) {
  const reg0 = /<think>([\s\S]*?)<\/think>/g;
  const reg1 = /<think>([\s\S]*)/g;



  const reg0Result = content.match(reg0);
  if (reg0Result) return {
    think: reg0Result[0].replace(/<think>/, '').replace(/<\/think>/g, ''),
    content: content.replace(reg0Result[0], '')
  }

  const reg1Result = content.match(reg1);

  if (reg1Result) return {
    think: reg1Result[0].replace(/<think>/, ''),
    content: content.replace(reg1Result[0], '')
  }

  return {
    think: '',
    content
  }
}
