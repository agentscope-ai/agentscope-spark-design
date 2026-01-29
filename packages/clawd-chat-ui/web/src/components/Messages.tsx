import { Bubble } from '@agentscope-ai/chat'
import type { ChatMessage } from '../gateway/types'


export function Messages({ messages }: { messages: ChatMessage[] }) {

  return <div style={{ flex: 1, height: 0, }}><Bubble.List style={{ height: '100%' }} items={
    messages.map(message => ({
      id: message.id,
      role: message.role,
      content: message.content,
      msgStatus: message.isStreaming ? 'generating' : 'finished',
    }))
  } /></div>

}