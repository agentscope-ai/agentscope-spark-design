/**
 * ComponentsMapContext - Context for custom component overrides.
 *
 * This context allows users to provide custom component implementations
 * that override or extend the default component registry.
 */

import {
  createContext,
  useContext,
  useMemo,
  type ReactNode,
  type ComponentType,
} from 'react'
import type { BaseComponentProps } from '../types'

/**
 * Type for a component in the components map.
 */
export type A2UIComponent = ComponentType<
  BaseComponentProps & Record<string, unknown>
>

/**
 * Map of component type names to React components.
 */
export type ComponentsMap = Map<string, A2UIComponent>

/**
 * Context value for ComponentsMapContext.
 */
export interface ComponentsMapContextValue {
  /** Custom components provided by the user */
  customComponents: ComponentsMap
  /** Get a component by type name (custom first, then default) */
  getComponent: (type: string) => A2UIComponent | undefined
}

/**
 * Context for custom component overrides.
 */
export const ComponentsMapContext =
  createContext<ComponentsMapContextValue | null>(null)

/**
 * Props for ComponentsMapProvider.
 */
export interface ComponentsMapProviderProps {
  /** Custom components to override or extend defaults */
  components?: ComponentsMap
  /** Default component registry */
  defaultComponents: Record<string, A2UIComponent>
  children: ReactNode
}

/**
 * Provider for custom component overrides.
 *
 * @example
 * ```tsx
 * const customComponents = new Map([
 *   ['Button', CustomButton],
 *   ['Switch', CustomSwitch],
 * ])
 *
 * <ComponentsMapProvider components={customComponents} defaultComponents={defaultRegistry}>
 *   <App />
 * </ComponentsMapProvider>
 * ```
 */
export function ComponentsMapProvider({
  components,
  defaultComponents,
  children,
}: ComponentsMapProviderProps) {
  const value = useMemo<ComponentsMapContextValue>(() => {
    const customComponents = components ?? new Map()

    const getComponent = (type: string): A2UIComponent | undefined => {
      // Custom components take precedence over defaults
      if (customComponents.has(type)) {
        return customComponents.get(type)
      }
      return defaultComponents[type]
    }

    return {
      customComponents,
      getComponent,
    }
  }, [components, defaultComponents])

  return (
    <ComponentsMapContext.Provider value={value}>
      {children}
    </ComponentsMapContext.Provider>
  )
}

/**
 * Hook to access the ComponentsMap context.
 *
 * @throws Error if used outside of ComponentsMapProvider
 */
export function useComponentsMapContext(): ComponentsMapContextValue {
  const context = useContext(ComponentsMapContext)
  if (!context) {
    throw new Error(
      'useComponentsMapContext must be used within a ComponentsMapProvider'
    )
  }
  return context
}

/**
 * Hook to get a component by type name.
 * Returns custom component if available, otherwise default.
 *
 * @param type - The component type name
 * @returns The component or undefined if not found
 */
export function useComponentFromMap(type: string): A2UIComponent | undefined {
  const { getComponent } = useComponentsMapContext()
  return getComponent(type)
}
