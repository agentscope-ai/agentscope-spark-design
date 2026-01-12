/**
 * pathUtils Tests
 *
 * Tests for path utility functions used in A2UI data model operations.
 */

import { describe, it, expect } from 'vitest'
import {
  getValueByPath,
  setValueByPath,
  mergeAtPath,
  normalizePath,
  joinPaths,
} from './pathUtils'
import type { DataModel } from '../types'

describe('pathUtils', () => {
  describe('getValueByPath', () => {
    const testModel: DataModel = {
      user: {
        name: 'John',
        age: 30,
        profile: {
          email: 'john@example.com',
          active: true,
        },
      },
      items: ['a', 'b', 'c'],
      count: 42,
    }

    it('should return entire data model for empty path', () => {
      expect(getValueByPath(testModel, '')).toEqual(testModel)
    })

    it('should return entire data model for root path', () => {
      expect(getValueByPath(testModel, '/')).toEqual(testModel)
    })

    it('should get top-level string value', () => {
      const model = { name: 'test' }
      expect(getValueByPath(model, '/name')).toBe('test')
    })

    it('should get top-level number value', () => {
      expect(getValueByPath(testModel, '/count')).toBe(42)
    })

    it('should get top-level array value', () => {
      expect(getValueByPath(testModel, '/items')).toEqual(['a', 'b', 'c'])
    })

    it('should get nested object value', () => {
      expect(getValueByPath(testModel, '/user')).toEqual({
        name: 'John',
        age: 30,
        profile: {
          email: 'john@example.com',
          active: true,
        },
      })
    })

    it('should get deeply nested string value', () => {
      expect(getValueByPath(testModel, '/user/name')).toBe('John')
    })

    it('should get deeply nested number value', () => {
      expect(getValueByPath(testModel, '/user/age')).toBe(30)
    })

    it('should get deeply nested object value', () => {
      expect(getValueByPath(testModel, '/user/profile')).toEqual({
        email: 'john@example.com',
        active: true,
      })
    })

    it('should get very deeply nested value', () => {
      expect(getValueByPath(testModel, '/user/profile/email')).toBe(
        'john@example.com'
      )
      expect(getValueByPath(testModel, '/user/profile/active')).toBe(true)
    })

    it('should return undefined for non-existent path', () => {
      expect(getValueByPath(testModel, '/nonexistent')).toBeUndefined()
    })

    it('should return undefined for non-existent nested path', () => {
      expect(getValueByPath(testModel, '/user/nonexistent')).toBeUndefined()
    })

    it('should return undefined for path through non-object', () => {
      expect(getValueByPath(testModel, '/count/nested')).toBeUndefined()
    })

    it('should return undefined when intermediate value is null', () => {
      const model = { user: null }
      expect(getValueByPath(model, '/user/name')).toBeUndefined()
    })

    it('should return undefined when intermediate value is undefined', () => {
      const model = { user: undefined }
      expect(
        getValueByPath(model as unknown as DataModel, '/user/name')
      ).toBeUndefined()
    })

    it('should handle paths without leading slash', () => {
      expect(getValueByPath(testModel, 'user/name')).toBe('John')
    })

    it('should handle empty data model', () => {
      expect(getValueByPath({}, '/user/name')).toBeUndefined()
    })
  })

  describe('setValueByPath', () => {
    it('should return merged object for empty path with object value', () => {
      const model = { a: 1 }
      const result = setValueByPath(model, '', { b: 2 })
      expect(result).toEqual({ a: 1, b: 2 })
    })

    it('should return merged object for root path with object value', () => {
      const model = { a: 1 }
      const result = setValueByPath(model, '/', { b: 2 })
      expect(result).toEqual({ a: 1, b: 2 })
    })

    it('should return original model for root path with non-object value', () => {
      const model = { a: 1 }
      const result = setValueByPath(model, '/', 'string')
      expect(result).toEqual({ a: 1 })
    })

    it('should return original model for root path with array value', () => {
      const model = { a: 1 }
      const result = setValueByPath(model, '/', [1, 2, 3])
      expect(result).toEqual({ a: 1 })
    })

    it('should set top-level value', () => {
      const model = { a: 1 }
      const result = setValueByPath(model, '/b', 2)
      expect(result).toEqual({ a: 1, b: 2 })
    })

    it('should update existing top-level value', () => {
      const model = { a: 1 }
      const result = setValueByPath(model, '/a', 2)
      expect(result).toEqual({ a: 2 })
    })

    it('should set nested value in existing object', () => {
      const model = { user: { name: 'John' } }
      const result = setValueByPath(model, '/user/age', 30)
      expect(result).toEqual({ user: { name: 'John', age: 30 } })
    })

    it('should update existing nested value', () => {
      const model = { user: { name: 'John' } }
      const result = setValueByPath(model, '/user/name', 'Jane')
      expect(result).toEqual({ user: { name: 'Jane' } })
    })

    it('should create nested structure if not exists', () => {
      const model = {}
      const result = setValueByPath(
        model,
        '/user/profile/email',
        'test@test.com'
      )
      expect(result).toEqual({
        user: { profile: { email: 'test@test.com' } },
      })
    })

    it('should replace non-object with object when setting nested path', () => {
      const model = { user: 'string' }
      const result = setValueByPath(model, '/user/name', 'John')
      expect(result).toEqual({ user: { name: 'John' } })
    })

    it('should be immutable - not modify original model', () => {
      const model = { user: { name: 'John' } }
      const result = setValueByPath(model, '/user/name', 'Jane')
      expect(model).toEqual({ user: { name: 'John' } })
      expect(result).toEqual({ user: { name: 'Jane' } })
    })

    it('should handle setting null value', () => {
      const model = { user: { name: 'John' } }
      const result = setValueByPath(model, '/user/name', null)
      expect(result).toEqual({ user: { name: null } })
    })

    it('should handle setting array value', () => {
      const model = { items: [] }
      const result = setValueByPath(model, '/items', ['a', 'b'])
      expect(result).toEqual({ items: ['a', 'b'] })
    })

    it('should handle setting object value', () => {
      const model = { user: null }
      const result = setValueByPath(model, '/user', { name: 'John' })
      expect(result).toEqual({ user: { name: 'John' } })
    })
  })

  describe('mergeAtPath', () => {
    it('should merge at root for empty path', () => {
      const model = { a: 1 }
      const result = mergeAtPath(model, '', { b: 2 })
      expect(result).toEqual({ a: 1, b: 2 })
    })

    it('should merge at root for root path', () => {
      const model = { a: 1 }
      const result = mergeAtPath(model, '/', { b: 2 })
      expect(result).toEqual({ a: 1, b: 2 })
    })

    it('should overwrite existing keys at root', () => {
      const model = { a: 1, b: 2 }
      const result = mergeAtPath(model, '/', { b: 3, c: 4 })
      expect(result).toEqual({ a: 1, b: 3, c: 4 })
    })

    it('should merge at nested path', () => {
      const model = { user: { name: 'John' } }
      const result = mergeAtPath(model, '/user', { age: 30 })
      expect(result).toEqual({ user: { name: 'John', age: 30 } })
    })

    it('should overwrite existing keys at nested path', () => {
      const model = { user: { name: 'John', age: 25 } }
      const result = mergeAtPath(model, '/user', { age: 30 })
      expect(result).toEqual({ user: { name: 'John', age: 30 } })
    })

    it('should create path if not exists', () => {
      const model = {}
      const result = mergeAtPath(model, '/user', { name: 'John' })
      expect(result).toEqual({ user: { name: 'John' } })
    })

    it('should replace non-object at path with merged result', () => {
      const model = { user: 'string' }
      const result = mergeAtPath(model, '/user', { name: 'John' })
      expect(result).toEqual({ user: { name: 'John' } })
    })

    it('should handle array at path by treating as non-object', () => {
      const model = { items: [1, 2, 3] }
      const result = mergeAtPath(model, '/items', { a: 1 })
      expect(result).toEqual({ items: { a: 1 } })
    })

    it('should be immutable - not modify original model', () => {
      const model = { user: { name: 'John' } }
      const result = mergeAtPath(model, '/user', { age: 30 })
      expect(model).toEqual({ user: { name: 'John' } })
      expect(result).toEqual({ user: { name: 'John', age: 30 } })
    })
  })

  describe('normalizePath', () => {
    it('should add leading slash if missing', () => {
      expect(normalizePath('user/name')).toBe('/user/name')
    })

    it('should keep existing leading slash', () => {
      expect(normalizePath('/user/name')).toBe('/user/name')
    })

    it('should remove trailing slash', () => {
      expect(normalizePath('/user/name/')).toBe('/user/name')
    })

    it('should remove trailing slash but keep single root slash', () => {
      expect(normalizePath('/')).toBe('/')
    })

    it('should handle single slash path', () => {
      expect(normalizePath('/')).toBe('/')
    })

    it('should add leading and remove trailing slash', () => {
      expect(normalizePath('user/name/')).toBe('/user/name')
    })

    it('should trim whitespace', () => {
      expect(normalizePath('  /user/name  ')).toBe('/user/name')
    })

    it('should handle empty string', () => {
      expect(normalizePath('')).toBe('/')
    })

    it('should handle whitespace only', () => {
      expect(normalizePath('   ')).toBe('/')
    })

    it('should handle multiple trailing slashes', () => {
      expect(normalizePath('/user/name//')).toBe('/user/name/')
      // Note: only removes one trailing slash
    })
  })

  describe('joinPaths', () => {
    it('should join base and relative paths', () => {
      expect(joinPaths('/user', 'name')).toBe('/user/name')
    })

    it('should handle leading slash in relative path', () => {
      expect(joinPaths('/user', '/name')).toBe('/user/name')
    })

    it('should handle trailing slash in base path', () => {
      expect(joinPaths('/user/', 'name')).toBe('/user/name')
    })

    it('should handle both leading and trailing slashes', () => {
      expect(joinPaths('/user/', '/name/')).toBe('/user/name')
    })

    it('should return base path for empty relative path', () => {
      expect(joinPaths('/user', '')).toBe('/user')
    })

    it('should handle root base path', () => {
      expect(joinPaths('/', 'user')).toBe('/user')
    })

    it('should handle root base path with leading slash in relative', () => {
      expect(joinPaths('/', '/user')).toBe('/user')
    })

    it('should normalize base path without leading slash', () => {
      expect(joinPaths('user', 'name')).toBe('/user/name')
    })

    it('should handle multi-segment relative path', () => {
      expect(joinPaths('/base', 'a/b/c')).toBe('/base/a/b/c')
    })

    it('should handle whitespace in relative path', () => {
      expect(joinPaths('/user', '  name  ')).toBe('/user/name')
    })
  })
})
