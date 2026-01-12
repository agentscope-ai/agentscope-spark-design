/**
 * dataBinding Tests
 *
 * Tests for data binding utility functions used in A2UI.
 */

import { describe, it, expect } from 'vitest'
import {
  resolveValue,
  isPathReference,
  getPath,
  contentsToObject,
  literalString,
  literalNumber,
  literalBoolean,
  pathRef,
  resolveActionContext,
} from './dataBinding'
import type { DataModel, ValueSource, DataEntry } from '../types'

describe('dataBinding', () => {
  describe('resolveValue', () => {
    const testModel: DataModel = {
      user: {
        name: 'John',
        age: 30,
        active: true,
      },
      items: ['a', 'b', 'c'],
      count: 42,
    }

    describe('with undefined/null source', () => {
      it('should return default value when source is undefined', () => {
        expect(resolveValue(undefined, testModel, 'default')).toBe('default')
      })

      it('should return default value when source is null', () => {
        expect(
          resolveValue(null as unknown as ValueSource, testModel, 'default')
        ).toBe('default')
      })

      it('should return undefined when no default provided and source is undefined', () => {
        expect(resolveValue(undefined, testModel)).toBeUndefined()
      })
    })

    describe('with literal values', () => {
      it('should resolve literalString', () => {
        const source: ValueSource = { literalString: 'Hello' }
        expect(resolveValue<string>(source, testModel)).toBe('Hello')
      })

      it('should resolve empty literalString', () => {
        const source: ValueSource = { literalString: '' }
        expect(resolveValue<string>(source, testModel, 'default')).toBe('')
      })

      it('should resolve literalNumber', () => {
        const source: ValueSource = { literalNumber: 42 }
        expect(resolveValue<number>(source, testModel)).toBe(42)
      })

      it('should resolve zero literalNumber', () => {
        const source: ValueSource = { literalNumber: 0 }
        expect(resolveValue<number>(source, testModel, 99)).toBe(0)
      })

      it('should resolve negative literalNumber', () => {
        const source: ValueSource = { literalNumber: -10 }
        expect(resolveValue<number>(source, testModel)).toBe(-10)
      })

      it('should resolve literalBoolean true', () => {
        const source: ValueSource = { literalBoolean: true }
        expect(resolveValue<boolean>(source, testModel)).toBe(true)
      })

      it('should resolve literalBoolean false', () => {
        const source: ValueSource = { literalBoolean: false }
        expect(resolveValue<boolean>(source, testModel, true)).toBe(false)
      })

      it('should resolve literalArray', () => {
        const source: ValueSource = { literalArray: ['x', 'y', 'z'] }
        expect(resolveValue<string[]>(source, testModel)).toEqual([
          'x',
          'y',
          'z',
        ])
      })

      it('should resolve empty literalArray', () => {
        const source: ValueSource = { literalArray: [] }
        expect(resolveValue<string[]>(source, testModel, ['default'])).toEqual(
          []
        )
      })
    })

    describe('with path references', () => {
      it('should resolve path to string value', () => {
        const source: ValueSource = { path: '/user/name' }
        expect(resolveValue<string>(source, testModel)).toBe('John')
      })

      it('should resolve path to number value', () => {
        const source: ValueSource = { path: '/count' }
        expect(resolveValue<number>(source, testModel)).toBe(42)
      })

      it('should resolve path to boolean value', () => {
        const source: ValueSource = { path: '/user/active' }
        expect(resolveValue<boolean>(source, testModel)).toBe(true)
      })

      it('should resolve path to nested object', () => {
        const source: ValueSource = { path: '/user' }
        expect(resolveValue(source, testModel)).toEqual({
          name: 'John',
          age: 30,
          active: true,
        })
      })

      it('should resolve path to array', () => {
        const source: ValueSource = { path: '/items' }
        expect(resolveValue<string[]>(source, testModel)).toEqual([
          'a',
          'b',
          'c',
        ])
      })

      it('should return default when path not found', () => {
        const source: ValueSource = { path: '/nonexistent' }
        expect(resolveValue<string>(source, testModel, 'default')).toBe(
          'default'
        )
      })

      it('should return undefined when path not found and no default', () => {
        const source: ValueSource = { path: '/nonexistent' }
        expect(resolveValue(source, testModel)).toBeUndefined()
      })

      it('should handle empty data model', () => {
        const source: ValueSource = { path: '/user/name' }
        expect(resolveValue<string>(source, {}, 'default')).toBe('default')
      })
    })

    describe('with unknown source structure', () => {
      it('should return default value for unknown source structure', () => {
        const source = { unknown: 'value' } as unknown as ValueSource
        expect(resolveValue(source, testModel, 'default')).toBe('default')
      })
    })
  })

  describe('isPathReference', () => {
    it('should return true for path reference', () => {
      expect(isPathReference({ path: '/user/name' })).toBe(true)
    })

    it('should return false for literalString', () => {
      expect(isPathReference({ literalString: 'Hello' })).toBe(false)
    })

    it('should return false for literalNumber', () => {
      expect(isPathReference({ literalNumber: 42 })).toBe(false)
    })

    it('should return false for literalBoolean', () => {
      expect(isPathReference({ literalBoolean: true })).toBe(false)
    })

    it('should return false for literalArray', () => {
      expect(isPathReference({ literalArray: ['a', 'b'] })).toBe(false)
    })

    it('should return false for undefined', () => {
      expect(isPathReference(undefined)).toBe(false)
    })

    it('should return false for null', () => {
      expect(isPathReference(null as unknown as ValueSource)).toBe(false)
    })
  })

  describe('getPath', () => {
    it('should return path from path reference', () => {
      expect(getPath({ path: '/user/name' })).toBe('/user/name')
    })

    it('should return undefined for literalString', () => {
      expect(getPath({ literalString: 'Hello' })).toBeUndefined()
    })

    it('should return undefined for literalNumber', () => {
      expect(getPath({ literalNumber: 42 })).toBeUndefined()
    })

    it('should return undefined for literalBoolean', () => {
      expect(getPath({ literalBoolean: true })).toBeUndefined()
    })

    it('should return undefined for literalArray', () => {
      expect(getPath({ literalArray: ['a'] })).toBeUndefined()
    })

    it('should return undefined for undefined source', () => {
      expect(getPath(undefined)).toBeUndefined()
    })
  })

  describe('contentsToObject', () => {
    it('should convert string entry', () => {
      const contents: DataEntry[] = [{ key: 'name', valueString: 'John' }]
      expect(contentsToObject(contents)).toEqual({ name: 'John' })
    })

    it('should convert number entry', () => {
      const contents: DataEntry[] = [{ key: 'age', valueNumber: 30 }]
      expect(contentsToObject(contents)).toEqual({ age: 30 })
    })

    it('should convert boolean entry', () => {
      const contents: DataEntry[] = [{ key: 'active', valueBoolean: true }]
      expect(contentsToObject(contents)).toEqual({ active: true })
    })

    it('should convert false boolean entry', () => {
      const contents: DataEntry[] = [{ key: 'active', valueBoolean: false }]
      expect(contentsToObject(contents)).toEqual({ active: false })
    })

    it('should convert zero number entry', () => {
      const contents: DataEntry[] = [{ key: 'count', valueNumber: 0 }]
      expect(contentsToObject(contents)).toEqual({ count: 0 })
    })

    it('should convert empty string entry', () => {
      const contents: DataEntry[] = [{ key: 'name', valueString: '' }]
      expect(contentsToObject(contents)).toEqual({ name: '' })
    })

    it('should convert nested map entry', () => {
      const contents: DataEntry[] = [
        {
          key: 'user',
          valueMap: [
            { key: 'name', valueString: 'John' },
            { key: 'age', valueNumber: 30 },
          ],
        },
      ]
      expect(contentsToObject(contents)).toEqual({
        user: { name: 'John', age: 30 },
      })
    })

    it('should convert deeply nested map entry', () => {
      const contents: DataEntry[] = [
        {
          key: 'user',
          valueMap: [
            {
              key: 'profile',
              valueMap: [{ key: 'email', valueString: 'john@example.com' }],
            },
          ],
        },
      ]
      expect(contentsToObject(contents)).toEqual({
        user: { profile: { email: 'john@example.com' } },
      })
    })

    it('should convert multiple entries', () => {
      const contents: DataEntry[] = [
        { key: 'name', valueString: 'John' },
        { key: 'age', valueNumber: 30 },
        { key: 'active', valueBoolean: true },
      ]
      expect(contentsToObject(contents)).toEqual({
        name: 'John',
        age: 30,
        active: true,
      })
    })

    it('should normalize path keys to last segment', () => {
      const contents: DataEntry[] = [
        { key: '/form/name', valueString: 'John' },
        { key: '/form/age', valueNumber: 30 },
      ]
      expect(contentsToObject(contents)).toEqual({
        name: 'John',
        age: 30,
      })
    })

    it('should handle empty contents array', () => {
      expect(contentsToObject([])).toEqual({})
    })

    it('should handle entry with no value type', () => {
      const contents: DataEntry[] = [{ key: 'empty' }]
      expect(contentsToObject(contents)).toEqual({})
    })
  })

  describe('literal factory functions', () => {
    describe('literalString', () => {
      it('should create literalString value source', () => {
        expect(literalString('Hello')).toEqual({ literalString: 'Hello' })
      })

      it('should create empty literalString', () => {
        expect(literalString('')).toEqual({ literalString: '' })
      })
    })

    describe('literalNumber', () => {
      it('should create literalNumber value source', () => {
        expect(literalNumber(42)).toEqual({ literalNumber: 42 })
      })

      it('should create zero literalNumber', () => {
        expect(literalNumber(0)).toEqual({ literalNumber: 0 })
      })

      it('should create negative literalNumber', () => {
        expect(literalNumber(-10)).toEqual({ literalNumber: -10 })
      })

      it('should create float literalNumber', () => {
        expect(literalNumber(3.14)).toEqual({ literalNumber: 3.14 })
      })
    })

    describe('literalBoolean', () => {
      it('should create true literalBoolean', () => {
        expect(literalBoolean(true)).toEqual({ literalBoolean: true })
      })

      it('should create false literalBoolean', () => {
        expect(literalBoolean(false)).toEqual({ literalBoolean: false })
      })
    })

    describe('pathRef', () => {
      it('should create path reference', () => {
        expect(pathRef('/user/name')).toEqual({ path: '/user/name' })
      })

      it('should create root path reference', () => {
        expect(pathRef('/')).toEqual({ path: '/' })
      })

      it('should create path without leading slash', () => {
        expect(pathRef('user/name')).toEqual({ path: 'user/name' })
      })
    })
  })

  describe('resolveActionContext', () => {
    const testModel: DataModel = {
      user: {
        name: 'John',
        age: 30,
      },
      selectedId: 'item-123',
    }

    it('should return empty object for undefined context', () => {
      expect(resolveActionContext(undefined, testModel)).toEqual({})
    })

    it('should return empty object for empty context array', () => {
      expect(resolveActionContext([], testModel)).toEqual({})
    })

    it('should resolve literalString values', () => {
      const context = [{ key: 'action', value: { literalString: 'submit' } }]
      expect(resolveActionContext(context, testModel)).toEqual({
        action: 'submit',
      })
    })

    it('should resolve literalNumber values', () => {
      const context = [{ key: 'count', value: { literalNumber: 5 } }]
      expect(resolveActionContext(context, testModel)).toEqual({ count: 5 })
    })

    it('should resolve literalBoolean values', () => {
      const context = [{ key: 'confirmed', value: { literalBoolean: true } }]
      expect(resolveActionContext(context, testModel)).toEqual({
        confirmed: true,
      })
    })

    it('should resolve path references', () => {
      const context = [{ key: 'userName', value: { path: '/user/name' } }]
      expect(resolveActionContext(context, testModel)).toEqual({
        userName: 'John',
      })
    })

    it('should resolve multiple context items', () => {
      const context = [
        { key: 'action', value: { literalString: 'update' } },
        { key: 'userId', value: { path: '/selectedId' } },
        { key: 'confirmed', value: { literalBoolean: true } },
      ]
      expect(resolveActionContext(context, testModel)).toEqual({
        action: 'update',
        userId: 'item-123',
        confirmed: true,
      })
    })

    it('should return undefined for non-existent path', () => {
      const context = [{ key: 'missing', value: { path: '/nonexistent' } }]
      expect(resolveActionContext(context, testModel)).toEqual({
        missing: undefined,
      })
    })

    it('should resolve nested path references', () => {
      const context = [
        { key: 'name', value: { path: '/user/name' } },
        { key: 'age', value: { path: '/user/age' } },
      ]
      expect(resolveActionContext(context, testModel)).toEqual({
        name: 'John',
        age: 30,
      })
    })
  })
})
