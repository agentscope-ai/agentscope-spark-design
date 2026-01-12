import { ChatInput } from "@agentscope-ai/chat";

export default function () {
  return <div style={{ width: '100%' }}>
    <ChatInput.BeforeUIContainer leftChildren={<div>Left</div>} rightChildren={<div>Right</div>} />
    <ChatInput placeholder='Please type here...' ></ChatInput>
  </div>
}