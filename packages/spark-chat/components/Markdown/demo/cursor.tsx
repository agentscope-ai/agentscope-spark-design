import { Markdown } from '@agentscope-ai/chat';
import { Space } from 'antd';

const text = `Hello, world!`


export default function () {
  return <Space direction="vertical" ><Markdown content={text} cursor="dot" /> <Markdown content={text} cursor="underline" /></Space>;
}