import { ToolCall } from "@agentscope-ai/chat";
export default function () {
  return <ToolCall
    title="Call Tool"
    subTitle="I am the name of a tool that is being called"
    input={{
      foo: 'bar',
      baz: 'qux',
    }}
    output={{
      result: 'result',
    }}
  />
}