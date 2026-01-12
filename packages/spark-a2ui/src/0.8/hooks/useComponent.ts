/**
 * useComponent - Hook to get a component from a Surface.
 */

import { useMemo } from 'react'
import type { ComponentDefinition } from '../types'
import { useSurfaceContext } from '../contexts/SurfaceContext'

/**
 * Gets a component from a Surface by its ID.
 *
 * @param surfaceId - The surface ID
 * @param componentId - The component ID to look up
 * @returns The ComponentDefinition, or undefined if not found
 *
 * @example
 * ```tsx
 * function MyComponent({ surfaceId, componentId }) {
 *   const component = useComponent(surfaceId, componentId);
 *
 *   if (!component) {
 *     return null;
 *   }
 *
 *   const [type, props] = Object.entries(component.component)[0];
 *   // Render based on type...
 * }
 * ```
 */
export function useComponent(
  surfaceId: string,
  componentId: string
): ComponentDefinition | undefined {
  const { getComponent } = useSurfaceContext()

  return useMemo(() => {
    return getComponent(surfaceId, componentId)
  }, [getComponent, surfaceId, componentId])
}
