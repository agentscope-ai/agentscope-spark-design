import { useCallback } from 'react'
import { useGateway } from '../hooks/useGateway'
import { Flex } from 'antd'
import { Messages } from './Messages'
import Input from './Input'

interface ChatPageProps {
  wsUrl: string
  session: string
  token?: string
}


export function ChatPage({ wsUrl, session, token }: ChatPageProps) {
  const { status, messages, isSending, error, sendMessage, clearMessages } = useGateway({
    url: wsUrl,
    session,
    token,
  })

  const handleSend = useCallback((input: string = '') => {
    const trimmed = input.trim()
    if (trimmed && !isSending && status === 'connected') {
      sendMessage(trimmed)

    }
  }, [sendMessage, isSending, status])

  return <Flex vertical style={{ height: '100dvh', backgroundColor: 'var(--clawd-color-bg-elevated)' }}>
    <Messages messages={messages} />
    <Input onSend={handleSend} loading={isSending} />
  </Flex>
}
