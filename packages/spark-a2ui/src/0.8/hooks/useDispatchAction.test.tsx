/**
 * useDispatchAction Tests
 *
 * Tests for the useDispatchAction hooks.
 */

import { describe, it, expect, vi } from 'vitest'
import { renderHook, act } from '@testing-library/react'
import { useDispatchAction } from './useDispatchAction'
import { ActionProvider } from '../contexts/ActionContext'
import { DataModelProvider } from '../contexts/DataModelContext'
import type { ReactNode } from 'react'
import type { Action, ActionPayload } from '../types'

describe('useDispatchAction', () => {
  // Helper to create wrapper with providers
  const createWrapper =
    (onAction?: (action: ActionPayload) => void) =>
    ({ children }: { children: ReactNode }) => (
      <DataModelProvider>
        <ActionProvider onAction={onAction}>{children}</ActionProvider>
      </DataModelProvider>
    )

  it('should return dispatch function', () => {
    const wrapper = createWrapper()
    const { result } = renderHook(() => useDispatchAction(), { wrapper })
    expect(typeof result.current).toBe('function')
  })

  it('should dispatch action with correct payload', () => {
    const onAction = vi.fn()
    const wrapper = createWrapper(onAction)

    const { result } = renderHook(() => useDispatchAction(), { wrapper })

    const action: Action = {
      name: 'submit',
      context: [{ key: 'type', value: { literalString: 'form' } }],
    }

    act(() => {
      result.current('surface-1', 'button-1', action)
    })

    expect(onAction).toHaveBeenCalledWith({
      surfaceId: 'surface-1',
      name: 'submit',
      context: { type: 'form' },
      sourceComponentId: 'button-1',
    })
  })

  it('should dispatch action without context', () => {
    const onAction = vi.fn()
    const wrapper = createWrapper(onAction)

    const { result } = renderHook(() => useDispatchAction(), { wrapper })

    const action: Action = { name: 'cancel' }

    act(() => {
      result.current('surface-1', 'button-1', action)
    })

    expect(onAction).toHaveBeenCalledWith({
      surfaceId: 'surface-1',
      name: 'cancel',
      context: {},
      sourceComponentId: 'button-1',
    })
  })

  it('should throw error when used outside provider', () => {
    const consoleError = vi.spyOn(console, 'error').mockImplementation(() => {})

    expect(() => {
      renderHook(() => useDispatchAction())
    }).toThrow('useActionContext must be used within an ActionProvider')

    consoleError.mockRestore()
  })
})
