import { Markdown } from '@agentscope-ai/chat';


const content = `Here is a simple footnote[^1].

A footnote can also have multiple lines[^2].

[^1]: [My reference](https://www.google.com)
[^2]: [To add line breaks within a footnote, prefix new lines with 2 spaces](https://www.google.com)`;


export default function () {
  return <Markdown
    content={content}
  />;
}