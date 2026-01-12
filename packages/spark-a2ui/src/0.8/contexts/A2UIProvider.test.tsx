/**
 * A2UIProvider Tests
 *
 * Tests for the combined A2UI provider component.
 */

import { describe, it, expect } from 'vitest'
import { render, screen, act } from '@testing-library/react'
import { renderHook } from '@testing-library/react'
import { A2UIProvider } from './A2UIProvider'
import { useSurfaceContext } from './SurfaceContext'
import { useDataModelContext } from './DataModelContext'
import { useComponentsMapContext } from './ComponentsMapContext'
import type { ReactNode } from 'react'
import type { A2UIMessage } from '../types'

describe('A2UIProvider', () => {
  describe('rendering', () => {
    it('should render children', () => {
      render(
        <A2UIProvider messages={[]}>
          <div data-testid="child">Child content</div>
        </A2UIProvider>
      )
      expect(screen.getByTestId('child')).toBeInTheDocument()
    })
  })

  describe('context availability', () => {
    // Wrapper for hooks
    const wrapper = ({ children }: { children: ReactNode }) => (
      <A2UIProvider messages={[]}>{children}</A2UIProvider>
    )

    it('should provide SurfaceContext', () => {
      const { result } = renderHook(() => useSurfaceContext(), { wrapper })
      expect(result.current).toBeDefined()
      expect(result.current.surfaces).toBeInstanceOf(Map)
      expect(result.current.initSurface).toBeDefined()
    })

    it('should provide DataModelContext', () => {
      const { result } = renderHook(() => useDataModelContext(), { wrapper })
      expect(result.current).toBeDefined()
      expect(result.current.dataModels).toBeInstanceOf(Map)
      expect(result.current.setDataValue).toBeDefined()
    })

    it('should provide ComponentsMapContext', () => {
      const { result } = renderHook(() => useComponentsMapContext(), {
        wrapper,
      })
      expect(result.current).toBeDefined()
      expect(result.current.getComponent).toBeDefined()
    })
  })

  describe('messages prop', () => {
    it('should process messages and populate surfaces', () => {
      const messages: A2UIMessage[] = [
        { beginRendering: { surfaceId: 'test-surface', root: 'root-1' } },
        {
          surfaceUpdate: {
            surfaceId: 'test-surface',
            components: [{ id: 'root-1', component: { Text: {} } }],
          },
        },
      ]

      const wrapper = ({ children }: { children: ReactNode }) => (
        <A2UIProvider messages={messages}>{children}</A2UIProvider>
      )

      const { result } = renderHook(() => useSurfaceContext(), { wrapper })

      expect(result.current.surfaces.has('test-surface')).toBe(true)
      expect(result.current.getSurface('test-surface')?.root).toBe('root-1')
    })

    it('should process data model updates', () => {
      const messages: A2UIMessage[] = [
        { beginRendering: { surfaceId: 'test-surface', root: 'root-1' } },
        {
          dataModelUpdate: {
            surfaceId: 'test-surface',
            path: '/',
            contents: [{ key: 'name', valueString: 'John' }],
          },
        },
      ]

      const wrapper = ({ children }: { children: ReactNode }) => (
        <A2UIProvider messages={messages}>{children}</A2UIProvider>
      )

      const { result } = renderHook(() => useDataModelContext(), { wrapper })

      expect(result.current.getDataValue('test-surface', '/name')).toBe('John')
    })
  })

  describe('components prop', () => {
    it('should provide custom components via ComponentsMapContext', () => {
      function CustomButton() {
        return <button>Custom</button>
      }

      const customComponents = new Map([['Button', CustomButton]])

      const wrapper = ({ children }: { children: ReactNode }) => (
        <A2UIProvider messages={[]} components={customComponents}>
          {children}
        </A2UIProvider>
      )

      const { result } = renderHook(() => useComponentsMapContext(), {
        wrapper,
      })

      expect(result.current.getComponent('Button')).toBe(CustomButton)
    })
  })

  describe('integration', () => {
    it('should allow interaction between contexts', () => {
      // Test component that uses contexts
      function TestComponent() {
        const { initSurface, updateSurface, getSurface } = useSurfaceContext()
        const { setDataValue, getDataValue } = useDataModelContext()

        return (
          <div>
            <button
              onClick={() => {
                initSurface('test-surface', 'root')
                updateSurface('test-surface', [
                  { id: 'text-1', component: { Text: {} } },
                ])
              }}
            >
              Init Surface
            </button>
            <button
              onClick={() => {
                setDataValue('test-surface', '/name', 'John')
              }}
            >
              Set Data
            </button>
            <span data-testid="surface-exists">
              {getSurface('test-surface') ? 'yes' : 'no'}
            </span>
            <span data-testid="data-value">
              {String(getDataValue('test-surface', '/name') ?? 'none')}
            </span>
          </div>
        )
      }

      render(
        <A2UIProvider messages={[]}>
          <TestComponent />
        </A2UIProvider>
      )

      // Initially no surface
      expect(screen.getByTestId('surface-exists').textContent).toBe('no')
      expect(screen.getByTestId('data-value').textContent).toBe('none')

      // Init surface
      act(() => {
        screen.getByText('Init Surface').click()
      })
      expect(screen.getByTestId('surface-exists').textContent).toBe('yes')

      // Set data
      act(() => {
        screen.getByText('Set Data').click()
      })
      expect(screen.getByTestId('data-value').textContent).toBe('John')
    })

    it('should maintain separate data for multiple surfaces', () => {
      function TestComponent() {
        const { initSurface } = useSurfaceContext()
        const { setDataValue, getDataValue } = useDataModelContext()

        return (
          <div>
            <button
              onClick={() => {
                initSurface('surface-1', 'root')
                initSurface('surface-2', 'root')
                setDataValue('surface-1', '/name', 'John')
                setDataValue('surface-2', '/name', 'Jane')
              }}
            >
              Setup
            </button>
            <span data-testid="surface-1-name">
              {String(getDataValue('surface-1', '/name') ?? '')}
            </span>
            <span data-testid="surface-2-name">
              {String(getDataValue('surface-2', '/name') ?? '')}
            </span>
          </div>
        )
      }

      render(
        <A2UIProvider messages={[]}>
          <TestComponent />
        </A2UIProvider>
      )

      act(() => {
        screen.getByText('Setup').click()
      })

      expect(screen.getByTestId('surface-1-name').textContent).toBe('John')
      expect(screen.getByTestId('surface-2-name').textContent).toBe('Jane')
    })
  })
})
