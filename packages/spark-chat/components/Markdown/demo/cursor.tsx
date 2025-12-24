import { Markdown } from '@agentscope-ai/chat';


const content = `Hello, world!`;

export default function () {
  return <Markdown content={content} cursor="underline" />;
}