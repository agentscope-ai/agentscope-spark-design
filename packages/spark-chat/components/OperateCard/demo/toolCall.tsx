import { ToolCall } from "@agentscope-ai/chat";


export default function () {
  return <div style={{ display: 'flex', gap: 16, flexDirection: 'column' }}>
    <ToolCall
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

    <ToolCall
      simple
      defaultOpen={false}
      title="Call Tool"
      subTitle="I am the name of a tool that is being called"
      input={{
        foo: 'bar',
        baz: 'qux',
      }}
      outputBlock={{ language: 'text' }}
      output={{
        result: 'result',
      }}
    />
  </div>
}