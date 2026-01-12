/**
 * useComponent Tests
 *
 * Tests for the useComponent hook.
 */

import { describe, it, expect, vi } from 'vitest'
import { renderHook, act } from '@testing-library/react'
import { useComponent } from './useComponent'
import { SurfaceProvider, useSurfaceContext } from '../contexts/SurfaceContext'
import type { ReactNode } from 'react'
import type { ComponentDefinition } from '../types'

describe('useComponent', () => {
  // Helper to render hook with provider
  const wrapper = ({ children }: { children: ReactNode }) => (
    <SurfaceProvider>{children}</SurfaceProvider>
  )

  it('should return undefined for non-existent surface', () => {
    const { result } = renderHook(
      () => useComponent('non-existent', 'comp-1'),
      { wrapper }
    )
    expect(result.current).toBeUndefined()
  })

  it('should return undefined for non-existent component', () => {
    const { result } = renderHook(
      () => {
        const component = useComponent('test-surface', 'non-existent')
        const { initSurface } = useSurfaceContext()
        return { component, initSurface }
      },
      { wrapper }
    )

    act(() => {
      result.current.initSurface('test-surface', 'root')
    })

    expect(result.current.component).toBeUndefined()
  })

  it('should return component when it exists', () => {
    const testComponent: ComponentDefinition = {
      id: 'text-1',
      component: { Text: { text: { literalString: 'Hello' } } },
    }

    const { result } = renderHook(
      () => {
        const component = useComponent('test-surface', 'text-1')
        const { initSurface, updateSurface } = useSurfaceContext()
        return { component, initSurface, updateSurface }
      },
      { wrapper }
    )

    act(() => {
      result.current.initSurface('test-surface', 'root')
      result.current.updateSurface('test-surface', [testComponent])
    })

    expect(result.current.component).toEqual(testComponent)
  })

  it('should update when component changes', () => {
    const { result } = renderHook(
      () => {
        const component = useComponent('test-surface', 'text-1')
        const { initSurface, updateSurface } = useSurfaceContext()
        return { component, initSurface, updateSurface }
      },
      { wrapper }
    )

    act(() => {
      result.current.initSurface('test-surface', 'root')
      result.current.updateSurface('test-surface', [
        {
          id: 'text-1',
          component: { Text: { text: { literalString: 'Hello' } } },
        },
      ])
    })

    expect(result.current.component?.component.Text?.text).toEqual({
      literalString: 'Hello',
    })

    // Update component
    act(() => {
      result.current.updateSurface('test-surface', [
        {
          id: 'text-1',
          component: { Text: { text: { literalString: 'Updated' } } },
        },
      ])
    })

    expect(result.current.component?.component.Text?.text).toEqual({
      literalString: 'Updated',
    })
  })

  it('should memoize result based on surfaceId and componentId', () => {
    const { result, rerender } = renderHook(
      ({ surfaceId, componentId }) => {
        const component = useComponent(surfaceId, componentId)
        const { initSurface, updateSurface } = useSurfaceContext()
        return { component, initSurface, updateSurface }
      },
      {
        wrapper,
        initialProps: { surfaceId: 'surface-1', componentId: 'comp-1' },
      }
    )

    act(() => {
      result.current.initSurface('surface-1', 'root')
      result.current.updateSurface('surface-1', [
        { id: 'comp-1', component: { Text: { text: { literalString: 'A' } } } },
        { id: 'comp-2', component: { Text: { text: { literalString: 'B' } } } },
      ])
    })

    expect(result.current.component?.component.Text?.text).toEqual({
      literalString: 'A',
    })

    // Change componentId
    rerender({ surfaceId: 'surface-1', componentId: 'comp-2' })
    expect(result.current.component?.component.Text?.text).toEqual({
      literalString: 'B',
    })
  })

  it('should throw error when used outside provider', () => {
    const consoleError = vi.spyOn(console, 'error').mockImplementation(() => {})

    expect(() => {
      renderHook(() => useComponent('test', 'comp'))
    }).toThrow('useSurfaceContext must be used within a SurfaceProvider')

    consoleError.mockRestore()
  })
})
