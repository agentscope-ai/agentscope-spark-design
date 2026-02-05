import { useEffect, useState, useRef, useCallback } from 'react'
import { GatewayClient, generateUUID } from '../gateway/client'
import type { ConnectionStatus, ChatMessage } from '../gateway/types'

interface UseGatewayOptions {
  url: string
  session: string
  token?: string
}

export function useGateway({ url, session, token }: UseGatewayOptions) {
  const clientRef = useRef<GatewayClient | null>(null)
  const [status, setStatus] = useState<ConnectionStatus>('disconnected')
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [isSending, setIsSending] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const client = new GatewayClient({ url, token })
    clientRef.current = client

    // Listen to status changes
    const unsubStatus = client.onStatusChange((newStatus) => {
      setStatus(newStatus)
      if (newStatus === 'disconnected') {
        setError('连接已断开，正在重连...')
      } else if (newStatus === 'connected') {
        setError(null)
      }
    })

    // Listen to connect errors
    const unsubConnectError = client.on('connect.error', (payload) => {
      const err = payload as { code: string; message: string }
      if (err.code === 'NOT_PAIRED') {
        setError('设备未配对：请在 Gateway 服务端批准此设备，或使用本地连接')
      } else {
        setError(`连接错误: ${err.message}`)
      }
    })

    // 监听 agent 事件 - 流式输出
    const unsubAgent = client.on('agent', (payload) => {
      const data = payload as {
        runId: string
        stream: string
        sessionKey: string
        data?: {
          text?: string
          delta?: string
          phase?: string
        }
      }

      // 只处理当前 session 的消息
      if (data.sessionKey !== session) return

      if (data.stream === 'assistant' && data.data) {
        const { text, delta } = data.data
        const msgId = `assistant-${data.runId}`

        setMessages((prev) => {
          const existingIndex = prev.findIndex((m) => m.id === msgId)
          if (existingIndex >= 0) {
            // 更新现有消息
            const updated = [...prev]
            updated[existingIndex] = {
              ...updated[existingIndex],
              content: text || updated[existingIndex].content + (delta || ''),
              isStreaming: true,
            }
            return updated
          }
          // 创建新消息
          return [
            ...prev,
            {
              id: msgId,
              role: 'assistant' as const,
              content: text || delta || '',
              timestamp: Date.now(),
              isStreaming: true,
            },
          ]
        })
      } else if (data.stream === 'lifecycle' && data.data?.phase === 'end') {
        // 流结束
        const msgId = `assistant-${data.runId}`
        setMessages((prev) =>
          prev.map((m) =>
            m.id === msgId ? { ...m, isStreaming: false } : m
          )
        )
        setIsSending(false)
      }
    })

    // 监听 chat 事件 - 完整消息状态
    const unsubChat = client.on('chat', (payload) => {
      const data = payload as {
        runId: string
        sessionKey: string
        state: string
        message?: {
          role: string
          content: Array<{ type: string; text?: string }>
          timestamp?: number
        }
      }

      // 只处理当前 session
      if (data.sessionKey !== session) return

      if (data.state === 'delta' && data.message) {
        const msgId = `assistant-${data.runId}`
        const textContent = data.message.content
          .filter((c) => c.type === 'text')
          .map((c) => c.text || '')
          .join('')

        setMessages((prev) => {
          const existingIndex = prev.findIndex((m) => m.id === msgId)
          if (existingIndex >= 0) {
            const updated = [...prev]
            updated[existingIndex] = {
              ...updated[existingIndex],
              content: textContent,
              isStreaming: true,
            }
            return updated
          }
          return [
            ...prev,
            {
              id: msgId,
              role: data.message!.role as 'user' | 'assistant' | 'system',
              content: textContent,
              timestamp: data.message!.timestamp || Date.now(),
              isStreaming: true,
            },
          ]
        })
      }
    })

    // Connect
    client.connect()

    return () => {
      unsubStatus()
      unsubConnectError()
      unsubAgent()
      unsubChat()
      client.disconnect()
    }
  }, [url, token])

  const sendMessage = useCallback(
    async (content: string) => {
      if (!clientRef.current || status !== 'connected' || isSending) {
        return
      }

      const userMessage: ChatMessage = {
        id: `user-${Date.now()}`,
        role: 'user',
        content,
        timestamp: Date.now(),
      }

      setMessages((prev) => [...prev, userMessage])
      setIsSending(true)
      setError(null)

      try {
        // 生成幂等性 key
        const idempotencyKey = generateUUID()
        
        await clientRef.current.send('chat.send', {
          sessionKey: session,
          message: content,
          deliver: false,
          idempotencyKey,
        })
      } catch (err) {
        setError(err instanceof Error ? err.message : '发送失败')
        setIsSending(false)
      }
    },
    [session, status, isSending]
  )

  const clearMessages = useCallback(() => {
    setMessages([])
  }, [])

  return {
    status,
    messages,
    isSending,
    error,
    sendMessage,
    clearMessages,
  }
}
