/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_WS_HOST?: string
  readonly VITE_GATEWAY_TOKEN?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
