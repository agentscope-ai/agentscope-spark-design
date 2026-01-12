/**
 * SurfaceContext - Manages the Surface state for A2UI rendering.
 *
 * A Surface is the top-level container that holds:
 * - surfaceId: Unique identifier
 * - root: The root component ID
 * - components: Map of all components
 * - styles: Optional style configuration
 */

import {
  createContext,
  useContext,
  useState,
  useMemo,
  useCallback,
  type ReactNode,
} from 'react'
import type { Surface, ComponentDefinition, SurfaceStyles } from '../types'

/**
 * Surface context value interface.
 */
export interface SurfaceContextValue {
  /** Map of all surfaces by surfaceId */
  surfaces: Map<string, Surface>

  /**
   * Initializes a surface with root and styles.
   * If the surface already exists, preserves existing components.
   * Called when beginRendering message is received.
   */
  initSurface: (surfaceId: string, root: string, styles?: SurfaceStyles) => void

  /** Updates components in a surface */
  updateSurface: (surfaceId: string, components: ComponentDefinition[]) => void

  /** Deletes a surface */
  deleteSurface: (surfaceId: string) => void

  /** Gets a surface by ID */
  getSurface: (surfaceId: string) => Surface | undefined

  /** Gets a component from a surface */
  getComponent: (
    surfaceId: string,
    componentId: string
  ) => ComponentDefinition | undefined

  /** Clears all surfaces */
  clearSurfaces: () => void
}

/**
 * Surface context for A2UI rendering.
 */
export const SurfaceContext = createContext<SurfaceContextValue | null>(null)

/**
 * Props for SurfaceProvider.
 */
export interface SurfaceProviderProps {
  children: ReactNode
}

/**
 * Provider component for Surface state management.
 */
export function SurfaceProvider({ children }: SurfaceProviderProps) {
  const [surfaces, setSurfaces] = useState<Map<string, Surface>>(new Map())

  const initSurface = useCallback(
    (surfaceId: string, root: string, styles?: SurfaceStyles) => {
      setSurfaces((prev) => {
        const existing = prev.get(surfaceId)
        const next = new Map(prev)

        // Preserve existing components if surface already exists
        // This handles the case where surfaceUpdate comes before beginRendering
        next.set(surfaceId, {
          surfaceId,
          root,
          components: existing?.components ?? new Map(),
          styles,
        })
        return next
      })
    },
    []
  )

  const updateSurface = useCallback(
    (surfaceId: string, components: ComponentDefinition[]) => {
      setSurfaces((prev) => {
        const surface = prev.get(surfaceId)
        if (!surface) {
          // Surface doesn't exist yet, create it with empty root
          // This can happen if surfaceUpdate comes before beginRendering
          const newSurface: Surface = {
            surfaceId,
            root: '',
            components: new Map(),
          }

          for (const comp of components) {
            newSurface.components.set(comp.id, comp)
          }

          const next = new Map(prev)
          next.set(surfaceId, newSurface)
          return next
        }

        // Update existing surface's components
        const next = new Map(prev)
        const componentMap = new Map(surface.components)

        for (const comp of components) {
          componentMap.set(comp.id, comp)
        }

        next.set(surfaceId, {
          ...surface,
          components: componentMap,
        })

        return next
      })
    },
    []
  )

  const deleteSurface = useCallback((surfaceId: string) => {
    setSurfaces((prev) => {
      const next = new Map(prev)
      next.delete(surfaceId)
      return next
    })
  }, [])

  const getSurface = useCallback(
    (surfaceId: string) => {
      return surfaces.get(surfaceId)
    },
    [surfaces]
  )

  const getComponent = useCallback(
    (surfaceId: string, componentId: string) => {
      const surface = surfaces.get(surfaceId)
      return surface?.components.get(componentId)
    },
    [surfaces]
  )

  const clearSurfaces = useCallback(() => {
    setSurfaces(new Map())
  }, [])

  const value = useMemo<SurfaceContextValue>(
    () => ({
      surfaces,
      initSurface,
      updateSurface,
      deleteSurface,
      getSurface,
      getComponent,
      clearSurfaces,
    }),
    [
      surfaces,
      initSurface,
      updateSurface,
      deleteSurface,
      getSurface,
      getComponent,
      clearSurfaces,
    ]
  )

  return (
    <SurfaceContext.Provider value={value}>{children}</SurfaceContext.Provider>
  )
}

/**
 * Hook to access the Surface context.
 *
 * @throws Error if used outside of SurfaceProvider
 */
export function useSurfaceContext(): SurfaceContextValue {
  const context = useContext(SurfaceContext)
  if (!context) {
    throw new Error('useSurfaceContext must be used within a SurfaceProvider')
  }
  return context
}
