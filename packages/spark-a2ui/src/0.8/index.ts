/**
 * A2UI React Renderer - Public API
 *
 * This is the main entry point for the A2UI React renderer library.
 * Import from '@easyops-cn/a2ui-react/0.8'
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
 *     <A2UIProvider messages={messages} onAction={handleAction}>
 *       <A2UIRenderer />
 *     </A2UIProvider>
 *   )
 * }
 *
 * // With custom middleware component that uses hooks
 * function AppWithMiddleware() {
 *   return (
 *     <A2UIProvider messages={messages} onAction={handleAction}>
 *       <MyCustomMiddleware>
 *         <A2UIRenderer />
 *       </MyCustomMiddleware>
 *     </A2UIProvider>
 *   )
 * }
 * ```
 */

// ============ Types ============

export type {
  A2UIMessage,
  ActionPayload as A2UIAction,
  Action,
  ValueSource,
} from './types'

export type { A2UIProviderProps, ComponentsMap } from './contexts/A2UIProvider'
export type { A2UIRendererProps } from './A2UIRenderer'

// ============ Components ============

export { A2UIProvider } from './contexts/A2UIProvider'
export { A2UIRenderer } from './A2UIRenderer'
export { ComponentRenderer } from './components/ComponentRenderer'

// ============ Hooks ============

export { useDispatchAction } from './hooks/useDispatchAction'
export { useDataBinding, useFormBinding } from './hooks/useDataBinding'
export { useSurfaceContext } from './contexts/SurfaceContext'
export { useDataModelContext } from './contexts/DataModelContext'
