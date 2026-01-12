/**
 * useA2UIMessageHandler Tests
 *
 * Tests for the useA2UIMessageHandler hook.
 */

import { describe, it, expect, vi } from 'vitest'
import { renderHook, act } from '@testing-library/react'
import { useA2UIMessageHandler } from './useA2UIMessageHandler'
import { A2UIProvider } from '../contexts/A2UIProvider'
import { useSurfaceContext } from '../contexts/SurfaceContext'
import { useDataModelContext } from '../contexts/DataModelContext'
import type { ReactNode } from 'react'
import type { A2UIMessage } from '../types'

describe('useA2UIMessageHandler', () => {
  // Helper to render hook with provider
  const wrapper = ({ children }: { children: ReactNode }) => (
    <A2UIProvider>{children}</A2UIProvider>
  )

  describe('processMessage', () => {
    it('should handle beginRendering message', () => {
      const { result } = renderHook(
        () => {
          const handler = useA2UIMessageHandler()
          const { getSurface } = useSurfaceContext()
          const { getDataModel } = useDataModelContext()
          return { handler, getSurface, getDataModel }
        },
        { wrapper }
      )

      const message: A2UIMessage = {
        beginRendering: {
          surfaceId: 'surface-1',
          root: 'root-component',
          styles: { font: 'Arial' },
        },
      }

      act(() => {
        result.current.handler.processMessage(message)
      })

      const surface = result.current.getSurface('surface-1')
      expect(surface).toBeDefined()
      expect(surface?.surfaceId).toBe('surface-1')
      expect(surface?.root).toBe('root-component')
      expect(surface?.styles?.font).toBe('Arial')

      // Data model should be initialized
      expect(result.current.getDataModel('surface-1')).toEqual({})
    })

    it('should handle surfaceUpdate message', () => {
      const { result } = renderHook(
        () => {
          const handler = useA2UIMessageHandler()
          const { getSurface, getComponent } = useSurfaceContext()
          return { handler, getSurface, getComponent }
        },
        { wrapper }
      )

      // First init surface
      act(() => {
        result.current.handler.processMessage({
          beginRendering: {
            surfaceId: 'surface-1',
            root: 'root',
          },
        })
      })

      // Then update with components
      const message: A2UIMessage = {
        surfaceUpdate: {
          surfaceId: 'surface-1',
          components: [
            {
              id: 'text-1',
              component: { Text: { text: { literalString: 'Hello' } } },
            },
            {
              id: 'button-1',
              component: { Button: { action: { name: 'click' } } },
            },
          ],
        },
      }

      act(() => {
        result.current.handler.processMessage(message)
      })

      expect(result.current.getComponent('surface-1', 'text-1')).toBeDefined()
      expect(result.current.getComponent('surface-1', 'button-1')).toBeDefined()
    })

    it('should handle surfaceUpdate before beginRendering', () => {
      const { result } = renderHook(
        () => {
          const handler = useA2UIMessageHandler()
          const { getSurface, getComponent } = useSurfaceContext()
          return { handler, getSurface, getComponent }
        },
        { wrapper }
      )

      // surfaceUpdate first
      act(() => {
        result.current.handler.processMessage({
          surfaceUpdate: {
            surfaceId: 'surface-1',
            components: [{ id: 'text-1', component: { Text: {} } }],
          },
        })
      })

      // Component should exist
      expect(result.current.getComponent('surface-1', 'text-1')).toBeDefined()

      // Then beginRendering
      act(() => {
        result.current.handler.processMessage({
          beginRendering: {
            surfaceId: 'surface-1',
            root: 'text-1',
          },
        })
      })

      // Surface should have root set and component preserved
      const surface = result.current.getSurface('surface-1')
      expect(surface?.root).toBe('text-1')
      expect(result.current.getComponent('surface-1', 'text-1')).toBeDefined()
    })

    it('should handle dataModelUpdate message', () => {
      const { result } = renderHook(
        () => {
          const handler = useA2UIMessageHandler()
          const { getDataValue } = useDataModelContext()
          return { handler, getDataValue }
        },
        { wrapper }
      )

      // Init surface first
      act(() => {
        result.current.handler.processMessage({
          beginRendering: {
            surfaceId: 'surface-1',
            root: 'root',
          },
        })
      })

      // Update data model
      const message: A2UIMessage = {
        dataModelUpdate: {
          surfaceId: 'surface-1',
          path: '/',
          contents: [
            { key: 'name', valueString: 'John' },
            { key: 'age', valueNumber: 30 },
            { key: 'active', valueBoolean: true },
          ],
        },
      }

      act(() => {
        result.current.handler.processMessage(message)
      })

      expect(result.current.getDataValue('surface-1', '/name')).toBe('John')
      expect(result.current.getDataValue('surface-1', '/age')).toBe(30)
      expect(result.current.getDataValue('surface-1', '/active')).toBe(true)
    })

    it('should handle dataModelUpdate with nested path', () => {
      const { result } = renderHook(
        () => {
          const handler = useA2UIMessageHandler()
          const { getDataValue } = useDataModelContext()
          return { handler, getDataValue }
        },
        { wrapper }
      )

      act(() => {
        result.current.handler.processMessage({
          beginRendering: { surfaceId: 'surface-1', root: 'root' },
        })
      })

      act(() => {
        result.current.handler.processMessage({
          dataModelUpdate: {
            surfaceId: 'surface-1',
            path: '/user',
            contents: [
              { key: 'name', valueString: 'John' },
              { key: 'email', valueString: 'john@example.com' },
            ],
          },
        })
      })

      expect(result.current.getDataValue('surface-1', '/user/name')).toBe(
        'John'
      )
      expect(result.current.getDataValue('surface-1', '/user/email')).toBe(
        'john@example.com'
      )
    })

    it('should handle dataModelUpdate with default path', () => {
      const { result } = renderHook(
        () => {
          const handler = useA2UIMessageHandler()
          const { getDataValue } = useDataModelContext()
          return { handler, getDataValue }
        },
        { wrapper }
      )

      act(() => {
        result.current.handler.processMessage({
          beginRendering: { surfaceId: 'surface-1', root: 'root' },
        })
      })

      // No path specified - should default to '/'
      act(() => {
        result.current.handler.processMessage({
          dataModelUpdate: {
            surfaceId: 'surface-1',
            contents: [{ key: 'name', valueString: 'John' }],
          },
        })
      })

      expect(result.current.getDataValue('surface-1', '/name')).toBe('John')
    })

    it('should handle deleteSurface message', () => {
      const { result } = renderHook(
        () => {
          const handler = useA2UIMessageHandler()
          const { getSurface } = useSurfaceContext()
          const { getDataModel } = useDataModelContext()
          return { handler, getSurface, getDataModel }
        },
        { wrapper }
      )

      // Create surface
      act(() => {
        result.current.handler.processMessage({
          beginRendering: { surfaceId: 'surface-1', root: 'root' },
        })
        result.current.handler.processMessage({
          dataModelUpdate: {
            surfaceId: 'surface-1',
            contents: [{ key: 'name', valueString: 'John' }],
          },
        })
      })

      expect(result.current.getSurface('surface-1')).toBeDefined()

      // Delete surface
      act(() => {
        result.current.handler.processMessage({
          deleteSurface: { surfaceId: 'surface-1' },
        })
      })

      expect(result.current.getSurface('surface-1')).toBeUndefined()
      expect(result.current.getDataModel('surface-1')).toEqual({})
    })

    it('should handle empty message gracefully', () => {
      const { result } = renderHook(() => useA2UIMessageHandler(), { wrapper })

      // Should not throw
      expect(() => {
        act(() => {
          result.current.processMessage({} as A2UIMessage)
        })
      }).not.toThrow()
    })
  })

  describe('processMessages', () => {
    it('should process multiple messages in order', () => {
      const { result } = renderHook(
        () => {
          const handler = useA2UIMessageHandler()
          const { getSurface, getComponent } = useSurfaceContext()
          const { getDataValue } = useDataModelContext()
          return { handler, getSurface, getComponent, getDataValue }
        },
        { wrapper }
      )

      const messages: A2UIMessage[] = [
        {
          beginRendering: { surfaceId: 'surface-1', root: 'root' },
        },
        {
          surfaceUpdate: {
            surfaceId: 'surface-1',
            components: [{ id: 'text-1', component: { Text: {} } }],
          },
        },
        {
          dataModelUpdate: {
            surfaceId: 'surface-1',
            contents: [{ key: 'name', valueString: 'John' }],
          },
        },
      ]

      act(() => {
        result.current.handler.processMessages(messages)
      })

      expect(result.current.getSurface('surface-1')).toBeDefined()
      expect(result.current.getComponent('surface-1', 'text-1')).toBeDefined()
      expect(result.current.getDataValue('surface-1', '/name')).toBe('John')
    })

    it('should handle empty messages array', () => {
      const { result } = renderHook(() => useA2UIMessageHandler(), { wrapper })

      expect(() => {
        act(() => {
          result.current.processMessages([])
        })
      }).not.toThrow()
    })
  })

  describe('clear', () => {
    it('should clear all surfaces and data models', () => {
      const { result } = renderHook(
        () => {
          const handler = useA2UIMessageHandler()
          const { surfaces } = useSurfaceContext()
          const { dataModels } = useDataModelContext()
          return { handler, surfaces, dataModels }
        },
        { wrapper }
      )

      // Create multiple surfaces
      act(() => {
        result.current.handler.processMessages([
          { beginRendering: { surfaceId: 'surface-1', root: 'root' } },
          { beginRendering: { surfaceId: 'surface-2', root: 'root' } },
          {
            dataModelUpdate: {
              surfaceId: 'surface-1',
              contents: [{ key: 'name', valueString: 'John' }],
            },
          },
        ])
      })

      expect(result.current.surfaces.size).toBe(2)
      expect(result.current.dataModels.size).toBe(2)

      // Clear all
      act(() => {
        result.current.handler.clear()
      })

      expect(result.current.surfaces.size).toBe(0)
      expect(result.current.dataModels.size).toBe(0)
    })
  })

  describe('error handling', () => {
    it('should throw error when used outside provider', () => {
      const consoleError = vi
        .spyOn(console, 'error')
        .mockImplementation(() => {})

      expect(() => {
        renderHook(() => useA2UIMessageHandler())
      }).toThrow()

      consoleError.mockRestore()
    })
  })
})
