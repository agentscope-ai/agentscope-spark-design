/**
 * DataModelContext Tests
 *
 * Tests for the DataModel context provider and hook.
 */

import { describe, it, expect, vi } from 'vitest'
import { render, screen, act } from '@testing-library/react'
import { renderHook } from '@testing-library/react'
import { DataModelProvider, useDataModelContext } from './DataModelContext'
import type { ReactNode } from 'react'

describe('DataModelContext', () => {
  // Helper to render hook with provider
  const wrapper = ({ children }: { children: ReactNode }) => (
    <DataModelProvider>{children}</DataModelProvider>
  )

  describe('DataModelProvider', () => {
    it('should render children', () => {
      render(
        <DataModelProvider>
          <div data-testid="child">Child content</div>
        </DataModelProvider>
      )
      expect(screen.getByTestId('child')).toBeInTheDocument()
    })

    it('should provide context value', () => {
      const { result } = renderHook(() => useDataModelContext(), { wrapper })
      expect(result.current).toBeDefined()
      expect(result.current.dataModels).toBeInstanceOf(Map)
    })
  })

  describe('useDataModelContext', () => {
    it('should throw error when used outside provider', () => {
      const consoleError = vi
        .spyOn(console, 'error')
        .mockImplementation(() => {})

      expect(() => {
        renderHook(() => useDataModelContext())
      }).toThrow('useDataModelContext must be used within a DataModelProvider')

      consoleError.mockRestore()
    })
  })

  describe('initDataModel', () => {
    it('should initialize empty data model for surface', () => {
      const { result } = renderHook(() => useDataModelContext(), { wrapper })

      act(() => {
        result.current.initDataModel('surface-1')
      })

      expect(result.current.getDataModel('surface-1')).toEqual({})
    })

    it('should not overwrite existing data model', () => {
      const { result } = renderHook(() => useDataModelContext(), { wrapper })

      act(() => {
        result.current.initDataModel('surface-1')
        result.current.setDataValue('surface-1', '/name', 'John')
      })

      act(() => {
        result.current.initDataModel('surface-1')
      })

      expect(result.current.getDataValue('surface-1', '/name')).toBe('John')
    })

    it('should initialize multiple surfaces independently', () => {
      const { result } = renderHook(() => useDataModelContext(), { wrapper })

      act(() => {
        result.current.initDataModel('surface-1')
        result.current.initDataModel('surface-2')
      })

      act(() => {
        result.current.setDataValue('surface-1', '/name', 'John')
        result.current.setDataValue('surface-2', '/name', 'Jane')
      })

      expect(result.current.getDataValue('surface-1', '/name')).toBe('John')
      expect(result.current.getDataValue('surface-2', '/name')).toBe('Jane')
    })
  })

  describe('getDataModel', () => {
    it('should return empty object for non-existent surface', () => {
      const { result } = renderHook(() => useDataModelContext(), { wrapper })
      expect(result.current.getDataModel('non-existent')).toEqual({})
    })

    it('should return data model for existing surface', () => {
      const { result } = renderHook(() => useDataModelContext(), { wrapper })

      act(() => {
        result.current.initDataModel('surface-1')
        result.current.updateDataModel('surface-1', '/', {
          name: 'John',
          age: 30,
        })
      })

      expect(result.current.getDataModel('surface-1')).toEqual({
        name: 'John',
        age: 30,
      })
    })
  })

  describe('getDataValue', () => {
    it('should return undefined for non-existent surface', () => {
      const { result } = renderHook(() => useDataModelContext(), { wrapper })
      expect(
        result.current.getDataValue('non-existent', '/name')
      ).toBeUndefined()
    })

    it('should return undefined for non-existent path', () => {
      const { result } = renderHook(() => useDataModelContext(), { wrapper })

      act(() => {
        result.current.initDataModel('surface-1')
      })

      expect(result.current.getDataValue('surface-1', '/name')).toBeUndefined()
    })

    it('should return value at path', () => {
      const { result } = renderHook(() => useDataModelContext(), { wrapper })

      act(() => {
        result.current.initDataModel('surface-1')
        result.current.updateDataModel('surface-1', '/', {
          user: { name: 'John' },
        })
      })

      expect(result.current.getDataValue('surface-1', '/user/name')).toBe(
        'John'
      )
    })
  })

  describe('setDataValue', () => {
    it('should set value at path', () => {
      const { result } = renderHook(() => useDataModelContext(), { wrapper })

      act(() => {
        result.current.setDataValue('surface-1', '/name', 'John')
      })

      expect(result.current.getDataValue('surface-1', '/name')).toBe('John')
    })

    it('should create nested path structure', () => {
      const { result } = renderHook(() => useDataModelContext(), { wrapper })

      act(() => {
        result.current.setDataValue(
          'surface-1',
          '/user/profile/email',
          'john@example.com'
        )
      })

      expect(
        result.current.getDataValue('surface-1', '/user/profile/email')
      ).toBe('john@example.com')
    })

    it('should update existing value', () => {
      const { result } = renderHook(() => useDataModelContext(), { wrapper })

      act(() => {
        result.current.setDataValue('surface-1', '/name', 'John')
      })

      act(() => {
        result.current.setDataValue('surface-1', '/name', 'Jane')
      })

      expect(result.current.getDataValue('surface-1', '/name')).toBe('Jane')
    })

    it('should create surface if not exists', () => {
      const { result } = renderHook(() => useDataModelContext(), { wrapper })

      act(() => {
        result.current.setDataValue('new-surface', '/name', 'John')
      })

      expect(result.current.getDataValue('new-surface', '/name')).toBe('John')
    })
  })

  describe('updateDataModel', () => {
    it('should merge data at root path', () => {
      const { result } = renderHook(() => useDataModelContext(), { wrapper })

      act(() => {
        result.current.initDataModel('surface-1')
        result.current.updateDataModel('surface-1', '/', { name: 'John' })
      })

      act(() => {
        result.current.updateDataModel('surface-1', '/', { age: 30 })
      })

      expect(result.current.getDataModel('surface-1')).toEqual({
        name: 'John',
        age: 30,
      })
    })

    it('should merge data at nested path', () => {
      const { result } = renderHook(() => useDataModelContext(), { wrapper })

      act(() => {
        result.current.initDataModel('surface-1')
        result.current.updateDataModel('surface-1', '/user', { name: 'John' })
      })

      act(() => {
        result.current.updateDataModel('surface-1', '/user', { age: 30 })
      })

      expect(result.current.getDataValue('surface-1', '/user')).toEqual({
        name: 'John',
        age: 30,
      })
    })

    it('should create surface if not exists', () => {
      const { result } = renderHook(() => useDataModelContext(), { wrapper })

      act(() => {
        result.current.updateDataModel('new-surface', '/user', { name: 'John' })
      })

      expect(result.current.getDataValue('new-surface', '/user/name')).toBe(
        'John'
      )
    })
  })

  describe('deleteDataModel', () => {
    it('should delete data model for surface', () => {
      const { result } = renderHook(() => useDataModelContext(), { wrapper })

      act(() => {
        result.current.initDataModel('surface-1')
        result.current.setDataValue('surface-1', '/name', 'John')
      })

      act(() => {
        result.current.deleteDataModel('surface-1')
      })

      expect(result.current.getDataModel('surface-1')).toEqual({})
    })

    it('should not affect other surfaces', () => {
      const { result } = renderHook(() => useDataModelContext(), { wrapper })

      act(() => {
        result.current.initDataModel('surface-1')
        result.current.initDataModel('surface-2')
        result.current.setDataValue('surface-1', '/name', 'John')
        result.current.setDataValue('surface-2', '/name', 'Jane')
      })

      act(() => {
        result.current.deleteDataModel('surface-1')
      })

      expect(result.current.getDataModel('surface-1')).toEqual({})
      expect(result.current.getDataValue('surface-2', '/name')).toBe('Jane')
    })

    it('should handle deleting non-existent surface gracefully', () => {
      const { result } = renderHook(() => useDataModelContext(), { wrapper })

      expect(() => {
        act(() => {
          result.current.deleteDataModel('non-existent')
        })
      }).not.toThrow()
    })
  })

  describe('clearDataModels', () => {
    it('should clear all data models', () => {
      const { result } = renderHook(() => useDataModelContext(), { wrapper })

      act(() => {
        result.current.initDataModel('surface-1')
        result.current.initDataModel('surface-2')
        result.current.setDataValue('surface-1', '/name', 'John')
        result.current.setDataValue('surface-2', '/name', 'Jane')
      })

      act(() => {
        result.current.clearDataModels()
      })

      expect(result.current.dataModels.size).toBe(0)
      expect(result.current.getDataModel('surface-1')).toEqual({})
      expect(result.current.getDataModel('surface-2')).toEqual({})
    })
  })

  describe('dataModels state', () => {
    it('should provide access to all data models via dataModels property', () => {
      const { result } = renderHook(() => useDataModelContext(), { wrapper })

      act(() => {
        result.current.initDataModel('surface-1')
        result.current.setDataValue('surface-1', '/name', 'John')
      })

      expect(result.current.dataModels.has('surface-1')).toBe(true)
      expect(result.current.dataModels.get('surface-1')).toEqual({
        name: 'John',
      })
    })
  })
})
