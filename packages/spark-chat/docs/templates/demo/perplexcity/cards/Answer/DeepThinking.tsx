import { DeepThinking } from "@agentscope-ai/chat";

export default function ({ loading, content }) {
  return <DeepThinking
    defaultOpen
    content={content}
    loading={loading}
    title={loading ? 'Deep thinking' : 'Completed deep thinking'}
    className="perplexcity-deep-thinking"
  />

}