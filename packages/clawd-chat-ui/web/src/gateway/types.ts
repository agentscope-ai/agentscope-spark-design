// Gateway Protocol Types

export interface GatewayFrame {
  type: 'req' | 'res' | 'event'
}

export interface GatewayRequest extends GatewayFrame {
  type: 'req'
  id: string
  method: string
  params?: Record<string, unknown>
}

export interface GatewayResponse extends GatewayFrame {
  type: 'res'
  id: string
  ok: boolean
  payload?: unknown
  error?: { code: string; message: string }
}

export interface GatewayEvent extends GatewayFrame {
  type: 'event'
  event: string
  payload?: unknown
  seq?: number
  stateVersion?: number
}

export interface ConnectChallenge {
  nonce: string
  ts: number
}

export interface HelloOk {
  type: 'hello-ok'
  protocol: number
  policy: {
    tickIntervalMs: number
  }
  auth?: {
    deviceToken: string
    role: string
    scopes: string[]
  }
}

export interface ConnectParams {
  minProtocol: number
  maxProtocol: number
  client: {
    id: string
    version: string
    platform: string
    mode: string
  }
  role: 'operator' | 'node'
  scopes: string[]
  caps: string[]
  commands: string[]
  permissions: Record<string, boolean>
  auth?: { token?: string }
  locale: string
  userAgent: string
  device?: {
    id: string
    publicKey?: string
    signature?: string
    signedAt?: number
    nonce?: string
  }
}

export type ConnectionStatus = 'disconnected' | 'connecting' | 'connected'

export interface ChatMessage {
  id: string
  role: 'user' | 'assistant' | 'system'
  content: string
  timestamp: number
  isStreaming?: boolean
}
