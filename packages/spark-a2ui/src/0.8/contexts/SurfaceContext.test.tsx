/**
 * SurfaceContext Tests
 *
 * Tests for the Surface context provider and hook.
 */

import { describe, it, expect, vi } from 'vitest'
import { render, screen, act } from '@testing-library/react'
import { renderHook } from '@testing-library/react'
import { SurfaceProvider, useSurfaceContext } from './SurfaceContext'
import type { ReactNode } from 'react'
import type { ComponentDefinition } from '../types'

describe('SurfaceContext', () => {
  // Helper to render hook with provider
  const wrapper = ({ children }: { children: ReactNode }) => (
    <SurfaceProvider>{children}</SurfaceProvider>
  )

  describe('SurfaceProvider', () => {
    it('should render children', () => {
      render(
        <SurfaceProvider>
          <div data-testid="child">Child content</div>
        </SurfaceProvider>
      )
      expect(screen.getByTestId('child')).toBeInTheDocument()
    })

    it('should provide context value', () => {
      const { result } = renderHook(() => useSurfaceContext(), { wrapper })
      expect(result.current).toBeDefined()
      expect(result.current.surfaces).toBeInstanceOf(Map)
    })
  })

  describe('useSurfaceContext', () => {
    it('should throw error when used outside provider', () => {
      const consoleError = vi
        .spyOn(console, 'error')
        .mockImplementation(() => {})

      expect(() => {
        renderHook(() => useSurfaceContext())
      }).toThrow('useSurfaceContext must be used within a SurfaceProvider')

      consoleError.mockRestore()
    })
  })

  describe('initSurface', () => {
    it('should initialize surface with root and empty components', () => {
      const { result } = renderHook(() => useSurfaceContext(), { wrapper })

      act(() => {
        result.current.initSurface('surface-1', 'root-component')
      })

      const surface = result.current.getSurface('surface-1')
      expect(surface).toBeDefined()
      expect(surface?.surfaceId).toBe('surface-1')
      expect(surface?.root).toBe('root-component')
      expect(surface?.components).toBeInstanceOf(Map)
      expect(surface?.components.size).toBe(0)
    })

    it('should initialize surface with styles', () => {
      const { result } = renderHook(() => useSurfaceContext(), { wrapper })

      act(() => {
        result.current.initSurface('surface-1', 'root', {
          font: 'Arial',
          primaryColor: '#ff0000',
        })
      })

      const surface = result.current.getSurface('surface-1')
      expect(surface?.styles).toEqual({
        font: 'Arial',
        primaryColor: '#ff0000',
      })
    })

    it('should preserve existing components when reinitializing', () => {
      const { result } = renderHook(() => useSurfaceContext(), { wrapper })

      const component: ComponentDefinition = {
        id: 'comp-1',
        component: { Text: { text: { literalString: 'Hello' } } },
      }

      act(() => {
        result.current.updateSurface('surface-1', [component])
      })

      act(() => {
        result.current.initSurface('surface-1', 'new-root')
      })

      const surface = result.current.getSurface('surface-1')
      expect(surface?.root).toBe('new-root')
      expect(surface?.components.get('comp-1')).toEqual(component)
    })

    it('should update root and styles on reinitialize', () => {
      const { result } = renderHook(() => useSurfaceContext(), { wrapper })

      act(() => {
        result.current.initSurface('surface-1', 'old-root', { font: 'Arial' })
      })

      act(() => {
        result.current.initSurface('surface-1', 'new-root', {
          font: 'Helvetica',
        })
      })

      const surface = result.current.getSurface('surface-1')
      expect(surface?.root).toBe('new-root')
      expect(surface?.styles?.font).toBe('Helvetica')
    })
  })

  describe('updateSurface', () => {
    it('should add components to existing surface', () => {
      const { result } = renderHook(() => useSurfaceContext(), { wrapper })

      const component: ComponentDefinition = {
        id: 'comp-1',
        component: { Text: { text: { literalString: 'Hello' } } },
      }

      act(() => {
        result.current.initSurface('surface-1', 'root')
        result.current.updateSurface('surface-1', [component])
      })

      const surface = result.current.getSurface('surface-1')
      expect(surface?.components.get('comp-1')).toEqual(component)
    })

    it('should update existing component', () => {
      const { result } = renderHook(() => useSurfaceContext(), { wrapper })

      const component1: ComponentDefinition = {
        id: 'comp-1',
        component: { Text: { text: { literalString: 'Hello' } } },
      }

      const component2: ComponentDefinition = {
        id: 'comp-1',
        component: { Text: { text: { literalString: 'Updated' } } },
      }

      act(() => {
        result.current.initSurface('surface-1', 'root')
        result.current.updateSurface('surface-1', [component1])
      })

      act(() => {
        result.current.updateSurface('surface-1', [component2])
      })

      const surface = result.current.getSurface('surface-1')
      expect(surface?.components.get('comp-1')).toEqual(component2)
    })

    it('should add multiple components at once', () => {
      const { result } = renderHook(() => useSurfaceContext(), { wrapper })

      const components: ComponentDefinition[] = [
        { id: 'comp-1', component: { Text: { text: { literalString: 'A' } } } },
        { id: 'comp-2', component: { Text: { text: { literalString: 'B' } } } },
        { id: 'comp-3', component: { Text: { text: { literalString: 'C' } } } },
      ]

      act(() => {
        result.current.initSurface('surface-1', 'root')
        result.current.updateSurface('surface-1', components)
      })

      const surface = result.current.getSurface('surface-1')
      expect(surface?.components.size).toBe(3)
      expect(surface?.components.get('comp-1')).toEqual(components[0])
      expect(surface?.components.get('comp-2')).toEqual(components[1])
      expect(surface?.components.get('comp-3')).toEqual(components[2])
    })

    it('should create surface if not exists (surfaceUpdate before beginRendering)', () => {
      const { result } = renderHook(() => useSurfaceContext(), { wrapper })

      const component: ComponentDefinition = {
        id: 'comp-1',
        component: { Text: { text: { literalString: 'Hello' } } },
      }

      act(() => {
        result.current.updateSurface('surface-1', [component])
      })

      const surface = result.current.getSurface('surface-1')
      expect(surface).toBeDefined()
      expect(surface?.surfaceId).toBe('surface-1')
      expect(surface?.root).toBe('')
      expect(surface?.components.get('comp-1')).toEqual(component)
    })
  })

  describe('getSurface', () => {
    it('should return undefined for non-existent surface', () => {
      const { result } = renderHook(() => useSurfaceContext(), { wrapper })
      expect(result.current.getSurface('non-existent')).toBeUndefined()
    })

    it('should return surface for existing surface', () => {
      const { result } = renderHook(() => useSurfaceContext(), { wrapper })

      act(() => {
        result.current.initSurface('surface-1', 'root')
      })

      const surface = result.current.getSurface('surface-1')
      expect(surface).toBeDefined()
      expect(surface?.surfaceId).toBe('surface-1')
    })
  })

  describe('getComponent', () => {
    it('should return undefined for non-existent surface', () => {
      const { result } = renderHook(() => useSurfaceContext(), { wrapper })
      expect(
        result.current.getComponent('non-existent', 'comp-1')
      ).toBeUndefined()
    })

    it('should return undefined for non-existent component', () => {
      const { result } = renderHook(() => useSurfaceContext(), { wrapper })

      act(() => {
        result.current.initSurface('surface-1', 'root')
      })

      expect(
        result.current.getComponent('surface-1', 'non-existent')
      ).toBeUndefined()
    })

    it('should return component for existing component', () => {
      const { result } = renderHook(() => useSurfaceContext(), { wrapper })

      const component: ComponentDefinition = {
        id: 'comp-1',
        component: { Text: { text: { literalString: 'Hello' } } },
      }

      act(() => {
        result.current.initSurface('surface-1', 'root')
        result.current.updateSurface('surface-1', [component])
      })

      expect(result.current.getComponent('surface-1', 'comp-1')).toEqual(
        component
      )
    })
  })

  describe('deleteSurface', () => {
    it('should delete surface', () => {
      const { result } = renderHook(() => useSurfaceContext(), { wrapper })

      act(() => {
        result.current.initSurface('surface-1', 'root')
      })

      act(() => {
        result.current.deleteSurface('surface-1')
      })

      expect(result.current.getSurface('surface-1')).toBeUndefined()
    })

    it('should not affect other surfaces', () => {
      const { result } = renderHook(() => useSurfaceContext(), { wrapper })

      act(() => {
        result.current.initSurface('surface-1', 'root1')
        result.current.initSurface('surface-2', 'root2')
      })

      act(() => {
        result.current.deleteSurface('surface-1')
      })

      expect(result.current.getSurface('surface-1')).toBeUndefined()
      expect(result.current.getSurface('surface-2')).toBeDefined()
    })

    it('should handle deleting non-existent surface gracefully', () => {
      const { result } = renderHook(() => useSurfaceContext(), { wrapper })

      expect(() => {
        act(() => {
          result.current.deleteSurface('non-existent')
        })
      }).not.toThrow()
    })
  })

  describe('clearSurfaces', () => {
    it('should clear all surfaces', () => {
      const { result } = renderHook(() => useSurfaceContext(), { wrapper })

      act(() => {
        result.current.initSurface('surface-1', 'root1')
        result.current.initSurface('surface-2', 'root2')
      })

      act(() => {
        result.current.clearSurfaces()
      })

      expect(result.current.surfaces.size).toBe(0)
      expect(result.current.getSurface('surface-1')).toBeUndefined()
      expect(result.current.getSurface('surface-2')).toBeUndefined()
    })
  })

  describe('surfaces state', () => {
    it('should provide access to all surfaces via surfaces property', () => {
      const { result } = renderHook(() => useSurfaceContext(), { wrapper })

      act(() => {
        result.current.initSurface('surface-1', 'root')
      })

      expect(result.current.surfaces.has('surface-1')).toBe(true)
    })
  })
})
