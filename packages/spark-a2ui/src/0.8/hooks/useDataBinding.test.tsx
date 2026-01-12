/**
 * useDataBinding Tests
 *
 * Tests for the useDataBinding, useDataModel, and useFormBinding hooks.
 */

import { describe, it, expect, vi } from 'vitest'
import { renderHook, act } from '@testing-library/react'
import { useDataBinding, useDataModel, useFormBinding } from './useDataBinding'
import {
  DataModelProvider,
  useDataModelContext,
} from '../contexts/DataModelContext'
import type { ReactNode } from 'react'
import type { ValueSource } from '../types'

describe('useDataBinding', () => {
  // Helper to render hook with provider
  const wrapper = ({ children }: { children: ReactNode }) => (
    <DataModelProvider>{children}</DataModelProvider>
  )

  describe('useDataBinding', () => {
    it('should return default value when source is undefined', () => {
      const { result } = renderHook(
        () => useDataBinding<string>('surface-1', undefined, 'default'),
        { wrapper }
      )
      expect(result.current).toBe('default')
    })

    it('should resolve literalString', () => {
      const source: ValueSource = { literalString: 'Hello' }
      const { result } = renderHook(
        () => useDataBinding<string>('surface-1', source),
        { wrapper }
      )
      expect(result.current).toBe('Hello')
    })

    it('should resolve literalNumber', () => {
      const source: ValueSource = { literalNumber: 42 }
      const { result } = renderHook(
        () => useDataBinding<number>('surface-1', source),
        { wrapper }
      )
      expect(result.current).toBe(42)
    })

    it('should resolve literalBoolean', () => {
      const source: ValueSource = { literalBoolean: true }
      const { result } = renderHook(
        () => useDataBinding<boolean>('surface-1', source),
        { wrapper }
      )
      expect(result.current).toBe(true)
    })

    it('should resolve literalArray', () => {
      const source: ValueSource = { literalArray: ['a', 'b', 'c'] }
      const { result } = renderHook(
        () => useDataBinding<string[]>('surface-1', source),
        { wrapper }
      )
      expect(result.current).toEqual(['a', 'b', 'c'])
    })

    it('should resolve path reference from data model', () => {
      const { result } = renderHook(
        () => {
          const value = useDataBinding<string>(
            'surface-1',
            { path: '/user/name' },
            ''
          )
          const { setDataValue } = useDataModelContext()
          return { value, setDataValue }
        },
        { wrapper }
      )

      // Initially empty
      expect(result.current.value).toBe('')

      // Set data
      act(() => {
        result.current.setDataValue('surface-1', '/user/name', 'John')
      })

      expect(result.current.value).toBe('John')
    })

    it('should return default when path not found', () => {
      const { result } = renderHook(
        () =>
          useDataBinding<string>(
            'surface-1',
            { path: '/nonexistent' },
            'default'
          ),
        { wrapper }
      )
      expect(result.current).toBe('default')
    })

    it('should update when data model changes', () => {
      const { result } = renderHook(
        () => {
          const value = useDataBinding<number>(
            'surface-1',
            { path: '/count' },
            0
          )
          const { setDataValue } = useDataModelContext()
          return { value, setDataValue }
        },
        { wrapper }
      )

      expect(result.current.value).toBe(0)

      act(() => {
        result.current.setDataValue('surface-1', '/count', 10)
      })
      expect(result.current.value).toBe(10)

      act(() => {
        result.current.setDataValue('surface-1', '/count', 20)
      })
      expect(result.current.value).toBe(20)
    })

    it('should throw error when used outside provider', () => {
      const consoleError = vi
        .spyOn(console, 'error')
        .mockImplementation(() => {})

      expect(() => {
        renderHook(() => useDataBinding('test', undefined))
      }).toThrow('useDataModelContext must be used within a DataModelProvider')

      consoleError.mockRestore()
    })
  })

  describe('useDataModel', () => {
    it('should return empty object for non-existent surface', () => {
      const { result } = renderHook(() => useDataModel('non-existent'), {
        wrapper,
      })
      expect(result.current).toEqual({})
    })

    it('should return data model for surface', () => {
      const { result } = renderHook(
        () => {
          const dataModel = useDataModel('surface-1')
          const { setDataValue } = useDataModelContext()
          return { dataModel, setDataValue }
        },
        { wrapper }
      )

      act(() => {
        result.current.setDataValue('surface-1', '/name', 'John')
        result.current.setDataValue('surface-1', '/age', 30)
      })

      expect(result.current.dataModel).toEqual({ name: 'John', age: 30 })
    })

    it('should update when data model changes', () => {
      const { result } = renderHook(
        () => {
          const dataModel = useDataModel('surface-1')
          const { setDataValue } = useDataModelContext()
          return { dataModel, setDataValue }
        },
        { wrapper }
      )

      act(() => {
        result.current.setDataValue('surface-1', '/name', 'John')
      })

      expect(result.current.dataModel).toEqual({ name: 'John' })

      act(() => {
        result.current.setDataValue('surface-1', '/name', 'Jane')
      })

      expect(result.current.dataModel).toEqual({ name: 'Jane' })
    })
  })

  describe('useFormBinding', () => {
    it('should return value and setter', () => {
      const { result } = renderHook(
        () => useFormBinding<string>('surface-1', { path: '/name' }, ''),
        { wrapper }
      )

      expect(result.current).toHaveLength(2)
      expect(typeof result.current[0]).toBe('string')
      expect(typeof result.current[1]).toBe('function')
    })

    it('should return default value initially', () => {
      const { result } = renderHook(
        () => useFormBinding<string>('surface-1', { path: '/name' }, 'default'),
        { wrapper }
      )

      expect(result.current[0]).toBe('default')
    })

    it('should update data model when setValue is called', () => {
      const { result } = renderHook(
        () => {
          const [value, setValue] = useFormBinding<string>(
            'surface-1',
            { path: '/name' },
            ''
          )
          const { getDataValue } = useDataModelContext()
          return { value, setValue, getDataValue }
        },
        { wrapper }
      )

      act(() => {
        result.current.setValue('John')
      })

      expect(result.current.value).toBe('John')
      expect(result.current.getDataValue('surface-1', '/name')).toBe('John')
    })

    it('should not update when source is literal', () => {
      const { result } = renderHook(
        () => {
          const [value, setValue] = useFormBinding<string>(
            'surface-1',
            { literalString: 'constant' },
            ''
          )
          const { getDataModel } = useDataModelContext()
          return { value, setValue, getDataModel }
        },
        { wrapper }
      )

      expect(result.current.value).toBe('constant')

      // Try to set value - should not throw but also not update
      act(() => {
        result.current.setValue('new value')
      })

      // Value should still be the literal
      expect(result.current.value).toBe('constant')
    })

    it('should not update when source is undefined', () => {
      const { result } = renderHook(
        () => {
          const [value, setValue] = useFormBinding<string>(
            'surface-1',
            undefined,
            'default'
          )
          return { value, setValue }
        },
        { wrapper }
      )

      expect(result.current.value).toBe('default')

      // Try to set value - should not throw
      act(() => {
        result.current.setValue('new value')
      })

      // Value should still be default
      expect(result.current.value).toBe('default')
    })

    it('should work with different value types', () => {
      // Number
      const { result: numberResult } = renderHook(
        () => useFormBinding<number>('surface-1', { path: '/count' }, 0),
        { wrapper }
      )

      act(() => {
        numberResult.current[1](42)
      })
      expect(numberResult.current[0]).toBe(42)

      // Boolean
      const { result: boolResult } = renderHook(
        () => useFormBinding<boolean>('surface-2', { path: '/active' }, false),
        { wrapper }
      )

      act(() => {
        boolResult.current[1](true)
      })
      expect(boolResult.current[0]).toBe(true)
    })

    it('should reflect external data model changes', () => {
      const { result } = renderHook(
        () => {
          const [value, setValue] = useFormBinding<string>(
            'surface-1',
            { path: '/name' },
            ''
          )
          const { setDataValue } = useDataModelContext()
          return { value, setValue, setDataValue }
        },
        { wrapper }
      )

      // Set via external setDataValue
      act(() => {
        result.current.setDataValue('surface-1', '/name', 'External')
      })

      expect(result.current.value).toBe('External')
    })
  })
})
