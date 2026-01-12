/**
 * ActionContext - Manages action dispatching for A2UI components.
 *
 * Actions are triggered by user interactions (button clicks, form changes, etc.)
 * and are forwarded to the parent application for handling.
 */

import {
  createContext,
  useContext,
  useMemo,
  useCallback,
  type ReactNode,
} from 'react'
import type { Action, ActionPayload, ActionHandler } from '../types'
import { useDataModelContext } from './DataModelContext'
import { resolveActionContext } from '../utils/dataBinding'

/**
 * Action context value interface.
 */
export interface ActionContextValue {
  /** Dispatches an action with resolved context */
  dispatchAction: (
    surfaceId: string,
    componentId: string,
    action: Action
  ) => void

  /** The action handler callback (if set) */
  onAction: ActionHandler | null
}

/**
 * Action context for A2UI rendering.
 */
export const ActionContext = createContext<ActionContextValue | null>(null)

/**
 * Props for ActionProvider.
 */
export interface ActionProviderProps {
  /** Callback when an action is dispatched */
  onAction?: ActionHandler
  children: ReactNode
}

/**
 * Provider component for Action dispatching.
 */
export function ActionProvider({ onAction, children }: ActionProviderProps) {
  const { getDataModel } = useDataModelContext()

  const dispatchAction = useCallback(
    (surfaceId: string, componentId: string, action: Action) => {
      if (!onAction) {
        console.warn('A2UI: Action dispatched but no handler is registered')
        return
      }

      // Get the data model for this surface
      const dataModel = getDataModel(surfaceId)

      // Resolve the action context values
      const resolvedContext = resolveActionContext(action.context, dataModel)

      // Create the action payload
      const payload: ActionPayload = {
        surfaceId,
        name: action.name,
        context: resolvedContext,
        sourceComponentId: componentId,
      }

      // Call the handler
      onAction(payload)
    },
    [onAction, getDataModel]
  )

  const value = useMemo<ActionContextValue>(
    () => ({
      dispatchAction,
      onAction: onAction ?? null,
    }),
    [dispatchAction, onAction]
  )

  return (
    <ActionContext.Provider value={value}>{children}</ActionContext.Provider>
  )
}

/**
 * Hook to access the Action context.
 *
 * @throws Error if used outside of ActionProvider
 */
export function useActionContext(): ActionContextValue {
  const context = useContext(ActionContext)
  if (!context) {
    throw new Error('useActionContext must be used within an ActionProvider')
  }
  return context
}
