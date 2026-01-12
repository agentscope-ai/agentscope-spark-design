/**
 * A2UIProvider - Combined provider for all A2UI contexts.
 *
 * This component wraps all the necessary context providers for A2UI rendering.
 * It should be placed at the top level of any component tree that uses A2UI.
 *
 * @example
 * ```tsx
 * import { A2UIProvider, A2UIRenderer, A2UIMessage, A2UIAction } from '@easyops-cn/a2ui-react/0.8'
 *
 * function App() {
 *   const messages: A2UIMessage[] = [...]
 *   const handleAction = (action: A2UIAction) => {
 *     console.log('Action:', action)
 *   }
 *   return (
 *     <A2UIProvider messages={messages}>
 *       <A2UIRenderer onAction={handleAction} />
 *     </A2UIProvider>
 *   )
 * }
 *
 * // With custom middleware component
 * function AppWithMiddleware() {
 *   return (
 *     <A2UIProvider messages={messages}>
 *       <MyCustomMiddleware>
 *         <A2UIRenderer onAction={handleAction} />
 *       </MyCustomMiddleware>
 *     </A2UIProvider>
 *   )
 * }
 * ```
 */

import { useEffect, type ReactNode, type ComponentType } from 'react'
import { SurfaceProvider } from './SurfaceContext'
import { DataModelProvider } from './DataModelContext'
import { ComponentsMapProvider } from './ComponentsMapContext'
import { componentRegistry } from '../components/ComponentRenderer'
import type { A2UIMessage, BaseComponentProps } from '../types'
import { useA2UIMessageHandler } from '../hooks/useA2UIMessageHandler'

/**
 * Type for custom component map.
 */
export type ComponentsMap = Map<
  string,
  ComponentType<BaseComponentProps & Record<string, unknown>>
>

/**
 * Props for A2UIProvider.
 */
export interface A2UIProviderProps {
  /** Array of A2UI messages to render */
  messages: A2UIMessage[]
  /** Custom component overrides */
  components?: ComponentsMap
  children: ReactNode
}

/**
 * Internal component that handles message processing.
 */
function A2UIMessageProcessor({
  messages,
  children,
}: {
  messages: A2UIMessage[]
  children: ReactNode
}) {
  const { processMessages, clear } = useA2UIMessageHandler()

  // Process messages when they change
  useEffect(() => {
    // Clear existing state and process new messages
    clear()
    if (messages && messages.length > 0) {
      processMessages(messages)
    }
  }, [messages, processMessages, clear])

  return <>{children}</>
}

/**
 * Combined provider for all A2UI contexts.
 *
 * Provides:
 * - SurfaceContext: Component tree management
 * - DataModelContext: Data model state
 * - ComponentsMapContext: Custom component overrides
 *
 * @param props - Component props
 * @param props.messages - Array of A2UI messages to render
 * @param props.components - Optional custom component overrides
 * @param props.children - Child components (typically A2UIRenderer)
 *
 * @example
 * ```tsx
 * // Basic usage
 * <A2UIProvider messages={messages}>
 *   <A2UIRenderer onAction={handleAction} />
 * </A2UIProvider>
 *
 * // With custom components
 * const customComponents = new Map([
 *   ['Button', CustomButton],
 *   ['Switch', CustomSwitch],
 * ])
 * <A2UIProvider
 *   messages={messages}
 *   components={customComponents}
 * >
 *   <A2UIRenderer onAction={handleAction} />
 * </A2UIProvider>
 *
 * // With custom middleware for hooks access
 * <A2UIProvider messages={messages}>
 *   <MyCustomComponent />
 *   <A2UIRenderer onAction={handleAction} />
 * </A2UIProvider>
 * ```
 */
export function A2UIProvider({
  messages,
  components,
  children,
}: A2UIProviderProps) {
  // Handle null/undefined messages gracefully
  const safeMessages = messages ?? []

  return (
    <SurfaceProvider>
      <DataModelProvider>
        <ComponentsMapProvider
          components={components}
          defaultComponents={componentRegistry}
        >
          <A2UIMessageProcessor messages={safeMessages}>
            {children}
          </A2UIMessageProcessor>
        </ComponentsMapProvider>
      </DataModelProvider>
    </SurfaceProvider>
  )
}
