/**
 * ActionContext Tests
 *
 * Tests for the Action context provider and hook.
 */

import { describe, it, expect, vi } from 'vitest'
import { render, screen, act } from '@testing-library/react'
import { renderHook } from '@testing-library/react'
import { ActionProvider, useActionContext } from './ActionContext'
import { DataModelProvider, useDataModelContext } from './DataModelContext'
import type { ReactNode } from 'react'
import type { Action, ActionPayload } from '../types'

describe('ActionContext', () => {
  // Helper to render hook with providers
  const createWrapper =
    (onAction?: (action: ActionPayload) => void) =>
    ({ children }: { children: ReactNode }) => (
      <DataModelProvider>
        <ActionProvider onAction={onAction}>{children}</ActionProvider>
      </DataModelProvider>
    )

  describe('ActionProvider', () => {
    it('should render children', () => {
      render(
        <DataModelProvider>
          <ActionProvider>
            <div data-testid="child">Child content</div>
          </ActionProvider>
        </DataModelProvider>
      )
      expect(screen.getByTestId('child')).toBeInTheDocument()
    })

    it('should provide context value', () => {
      const wrapper = createWrapper()
      const { result } = renderHook(() => useActionContext(), { wrapper })
      expect(result.current).toBeDefined()
      expect(result.current.dispatchAction).toBeDefined()
    })
  })

  describe('useActionContext', () => {
    it('should throw error when used outside provider', () => {
      const consoleError = vi
        .spyOn(console, 'error')
        .mockImplementation(() => {})

      expect(() => {
        renderHook(() => useActionContext())
      }).toThrow('useActionContext must be used within an ActionProvider')

      consoleError.mockRestore()
    })
  })

  describe('dispatchAction', () => {
    it('should call onAction with resolved payload', () => {
      const onAction = vi.fn()
      const wrapper = createWrapper(onAction)

      const { result } = renderHook(() => useActionContext(), { wrapper })

      const action: Action = {
        name: 'submit',
        context: [{ key: 'type', value: { literalString: 'form' } }],
      }

      act(() => {
        result.current.dispatchAction('surface-1', 'button-1', action)
      })

      expect(onAction).toHaveBeenCalledWith({
        surfaceId: 'surface-1',
        name: 'submit',
        context: { type: 'form' },
        sourceComponentId: 'button-1',
      })
    })

    it('should resolve path references from data model', () => {
      const onAction = vi.fn()

      // Custom wrapper that sets up data model
      const TestWrapper = ({ children }: { children: ReactNode }) => {
        return (
          <DataModelProvider>
            <DataModelSetup>
              <ActionProvider onAction={onAction}>{children}</ActionProvider>
            </DataModelSetup>
          </DataModelProvider>
        )
      }

      // Component to set up data model
      function DataModelSetup({ children }: { children: ReactNode }) {
        const { setDataValue } = useDataModelContext()
        React.useEffect(() => {
          setDataValue('surface-1', '/form/name', 'John')
          setDataValue('surface-1', '/form/age', 30)
        }, [setDataValue])
        return <>{children}</>
      }

      const { result } = renderHook(() => useActionContext(), {
        wrapper: TestWrapper,
      })

      const action: Action = {
        name: 'submit',
        context: [
          { key: 'userName', value: { path: '/form/name' } },
          { key: 'userAge', value: { path: '/form/age' } },
        ],
      }

      act(() => {
        result.current.dispatchAction('surface-1', 'button-1', action)
      })

      expect(onAction).toHaveBeenCalledWith({
        surfaceId: 'surface-1',
        name: 'submit',
        context: { userName: 'John', userAge: 30 },
        sourceComponentId: 'button-1',
      })
    })

    it('should handle action without context', () => {
      const onAction = vi.fn()
      const wrapper = createWrapper(onAction)

      const { result } = renderHook(() => useActionContext(), { wrapper })

      const action: Action = {
        name: 'cancel',
      }

      act(() => {
        result.current.dispatchAction('surface-1', 'button-1', action)
      })

      expect(onAction).toHaveBeenCalledWith({
        surfaceId: 'surface-1',
        name: 'cancel',
        context: {},
        sourceComponentId: 'button-1',
      })
    })

    it('should handle empty context array', () => {
      const onAction = vi.fn()
      const wrapper = createWrapper(onAction)

      const { result } = renderHook(() => useActionContext(), { wrapper })

      const action: Action = {
        name: 'reset',
        context: [],
      }

      act(() => {
        result.current.dispatchAction('surface-1', 'button-1', action)
      })

      expect(onAction).toHaveBeenCalledWith({
        surfaceId: 'surface-1',
        name: 'reset',
        context: {},
        sourceComponentId: 'button-1',
      })
    })

    it('should warn when no handler is registered', () => {
      const consoleWarn = vi.spyOn(console, 'warn').mockImplementation(() => {})
      const wrapper = createWrapper() // No onAction

      const { result } = renderHook(() => useActionContext(), { wrapper })

      const action: Action = {
        name: 'submit',
      }

      act(() => {
        result.current.dispatchAction('surface-1', 'button-1', action)
      })

      expect(consoleWarn).toHaveBeenCalledWith(
        'A2UI: Action dispatched but no handler is registered'
      )

      consoleWarn.mockRestore()
    })

    it('should resolve literal values correctly', () => {
      const onAction = vi.fn()
      const wrapper = createWrapper(onAction)

      const { result } = renderHook(() => useActionContext(), { wrapper })

      const action: Action = {
        name: 'test',
        context: [
          { key: 'str', value: { literalString: 'hello' } },
          { key: 'num', value: { literalNumber: 42 } },
          { key: 'bool', value: { literalBoolean: true } },
        ],
      }

      act(() => {
        result.current.dispatchAction('surface-1', 'button-1', action)
      })

      expect(onAction).toHaveBeenCalledWith({
        surfaceId: 'surface-1',
        name: 'test',
        context: { str: 'hello', num: 42, bool: true },
        sourceComponentId: 'button-1',
      })
    })
  })

  describe('onAction property', () => {
    it('should return null when no handler is registered', () => {
      const wrapper = createWrapper()
      const { result } = renderHook(() => useActionContext(), { wrapper })
      expect(result.current.onAction).toBeNull()
    })

    it('should return handler when registered', () => {
      const handler = vi.fn()
      const wrapper = createWrapper(handler)
      const { result } = renderHook(() => useActionContext(), { wrapper })
      expect(result.current.onAction).toBe(handler)
    })
  })
})

// Import React for the test component
import React from 'react'
