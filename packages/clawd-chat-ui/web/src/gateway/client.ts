import type {
  GatewayRequest,
  GatewayResponse,
  GatewayEvent,
  ConnectionStatus,
  HelloOk,
} from './types'

type EventListener = (payload: unknown) => void
type StatusListener = (status: ConnectionStatus) => void

interface PendingRequest {
  resolve: (payload: unknown) => void
  reject: (error: Error) => void
  timer: ReturnType<typeof setTimeout>
}

const PROTOCOL_VERSION = 3
const REQUEST_TIMEOUT = 30000
const RECONNECT_DELAYS = [1000, 2000, 4000, 8000, 16000, 30000]

export function generateUUID(): string {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0
    const v = c === 'x' ? r : (r & 0x3) | 0x8
    return v.toString(16)
  })
}

export interface GatewayClientOptions {
  url: string
  token?: string
}

export class GatewayClient {
  private ws: WebSocket | null = null
  private url: string
  private token?: string
  private status: ConnectionStatus = 'disconnected'
  private pendingRequests = new Map<string, PendingRequest>()
  private eventListeners = new Map<string, Set<EventListener>>()
  private statusListeners = new Set<StatusListener>()
  private reconnectAttempt = 0
  private reconnectTimer: ReturnType<typeof setTimeout> | null = null
  private policy: { tickIntervalMs: number } | null = null
  private shouldReconnect = true
  challengeNonce: string | null = null

  constructor(options: GatewayClientOptions) {
    this.url = options.url
    this.token = options.token
  }

  connect(): void {
    if (this.ws && this.status !== 'disconnected') {
      return
    }

    console.log('[Gateway] Connecting to:', this.url)
    this.shouldReconnect = true
    this.setStatus('connecting')
    this.ws = new WebSocket(this.url)

    this.ws.onopen = () => {
      console.log('[Gateway] WebSocket connected, waiting for challenge...')
    }

    this.ws.onmessage = (event) => {
      this.handleMessage(event.data)
    }

    this.ws.onerror = (error) => {
      console.error('[Gateway] WebSocket error:', error)
    }

    this.ws.onclose = (event) => {
      console.log('[Gateway] WebSocket closed, code:', event.code, 'reason:', event.reason)
      this.cleanup()
      this.setStatus('disconnected')
      this.scheduleReconnect()
    }
  }

  disconnect(): void {
    this.shouldReconnect = false
    if (this.reconnectTimer) {
      clearTimeout(this.reconnectTimer)
      this.reconnectTimer = null
    }
    if (this.ws) {
      this.ws.close()
      this.ws = null
    }
    this.cleanup()
    this.setStatus('disconnected')
  }

  private cleanup(): void {
    // Reject all pending requests
    for (const [id, pending] of this.pendingRequests) {
      clearTimeout(pending.timer)
      pending.reject(new Error('Connection closed'))
      this.pendingRequests.delete(id)
    }
  }

  private scheduleReconnect(): void {
    if (!this.shouldReconnect) return

    const delay = RECONNECT_DELAYS[Math.min(this.reconnectAttempt, RECONNECT_DELAYS.length - 1)]
    console.log(`[Gateway] Reconnecting in ${delay}ms (attempt ${this.reconnectAttempt + 1})`)
    
    this.reconnectTimer = setTimeout(() => {
      this.reconnectAttempt++
      this.connect()
    }, delay)
  }

  private handleMessage(data: string): void {
    try {
      const frame = JSON.parse(data)
      
      if (frame.type === 'event') {
        this.handleEvent(frame as GatewayEvent)
      } else if (frame.type === 'res') {
        this.handleResponse(frame as GatewayResponse)
      }
    } catch (error) {
      console.error('[Gateway] Failed to parse message:', error)
    }
  }

  private handleEvent(event: GatewayEvent): void {
    console.log('[Gateway] Event received:', event.event, event.payload)

    if (event.event === 'connect.challenge') {
      const challenge = event.payload as { nonce: string; ts: number }
      this.challengeNonce = challenge.nonce
      this.sendConnect()
    } else {
      // Dispatch to listeners
      const listeners = this.eventListeners.get(event.event)
      if (listeners) {
        for (const listener of listeners) {
          listener(event.payload)
        }
      }
      // Also dispatch to wildcard listeners
      const wildcardListeners = this.eventListeners.get('*')
      if (wildcardListeners) {
        for (const listener of wildcardListeners) {
          listener({ event: event.event, payload: event.payload })
        }
      }
    }
  }

  private handleResponse(response: GatewayResponse): void {
    const pending = this.pendingRequests.get(response.id)
    if (!pending) {
      console.warn('[Gateway] Received response for unknown request:', response.id)
      return
    }

    clearTimeout(pending.timer)
    this.pendingRequests.delete(response.id)

    if (response.ok) {
      // Check if this is hello-ok
      const payload = response.payload as HelloOk | undefined
      if (payload?.type === 'hello-ok') {
        this.policy = payload.policy
        this.reconnectAttempt = 0
        this.setStatus('connected')
        console.log('[Gateway] Connected with policy:', this.policy)
      }
      pending.resolve(response.payload)
    } else {
      console.error('[Gateway] Request failed:', response.id, response.error)
      // Emit connect error event for UI handling
      if (response.error?.code === 'NOT_PAIRED' || response.error?.code === 'AUTH_FAILED') {
        this.emitEvent('connect.error', response.error)
        // Don't auto-reconnect for auth errors
        this.shouldReconnect = false
      }
      pending.reject(new Error(response.error?.message || 'Request failed'))
    }
  }

  private sendConnect(): void {
    // 完全匹配原页面的请求格式
    const params = {
      minProtocol: PROTOCOL_VERSION,
      maxProtocol: PROTOCOL_VERSION,
      client: {
        id: 'clawdbot-control-ui',
        version: 'dev',
        platform: navigator.platform,
        mode: 'webchat',
      },
      role: 'operator',
      scopes: ['operator.admin', 'operator.approvals', 'operator.pairing'],
      caps: [] as string[],
      auth: {
        token: this.token || '',
      },
      userAgent: navigator.userAgent,
      locale: navigator.language,
    }

    console.log('[Gateway] Sending connect request:', params)
    this.send('connect', params).catch((error) => {
      console.error('[Gateway] Connect request failed:', error)
    })
  }

  async send(method: string, params: Record<string, unknown>): Promise<unknown> {
    return new Promise((resolve, reject) => {
      if (!this.ws || this.ws.readyState !== WebSocket.OPEN) {
        reject(new Error('Not connected'))
        return
      }

      const id = generateUUID()
      const request: GatewayRequest = {
        type: 'req',
        id,
        method,
        params,
      }

      const timer = setTimeout(() => {
        this.pendingRequests.delete(id)
        reject(new Error('Request timeout'))
      }, REQUEST_TIMEOUT)

      this.pendingRequests.set(id, { resolve, reject, timer })
      this.ws.send(JSON.stringify(request))
    })
  }

  on(event: string, listener: EventListener): () => void {
    if (!this.eventListeners.has(event)) {
      this.eventListeners.set(event, new Set())
    }
    this.eventListeners.get(event)!.add(listener)
    
    return () => {
      this.eventListeners.get(event)?.delete(listener)
    }
  }

  onStatusChange(listener: StatusListener): () => void {
    this.statusListeners.add(listener)
    // Immediately call with current status
    listener(this.status)
    return () => {
      this.statusListeners.delete(listener)
    }
  }

  private setStatus(status: ConnectionStatus): void {
    this.status = status
    for (const listener of this.statusListeners) {
      listener(status)
    }
  }

  private emitEvent(event: string, payload: unknown): void {
    const listeners = this.eventListeners.get(event)
    if (listeners) {
      for (const listener of listeners) {
        listener(payload)
      }
    }
  }

  getStatus(): ConnectionStatus {
    return this.status
  }
}
