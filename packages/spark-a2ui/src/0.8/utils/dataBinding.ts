/**
 * Data binding utility functions for A2UI.
 * Handles resolving value sources and converting data entries.
 */

import type {
  ValueSource,
  DataModel,
  DataEntry,
  DataModelValue,
} from '../types'
import { getValueByPath } from './pathUtils'

/**
 * Resolves a ValueSource to its actual value.
 *
 * @param source - The value source (literal or path reference)
 * @param dataModel - The data model for path lookups
 * @param defaultValue - Default value if source is undefined or path not found
 * @returns The resolved value
 *
 * @example
 * // Literal values
 * resolveValue({ literalString: "Hello" }, {}); // "Hello"
 * resolveValue({ literalNumber: 42 }, {});      // 42
 *
 * // Path references
 * const model = { user: { name: "John" } };
 * resolveValue({ path: "/user/name" }, model);  // "John"
 * resolveValue({ path: "/user/age" }, model, 0); // 0 (default)
 */
export function resolveValue<T = unknown>(
  source: ValueSource | undefined,
  dataModel: DataModel,
  defaultValue?: T
): T {
  if (source === undefined || source === null) {
    return defaultValue as T
  }

  if ('literalString' in source) {
    return source.literalString as T
  }

  if ('literalNumber' in source) {
    return source.literalNumber as T
  }

  if ('literalBoolean' in source) {
    return source.literalBoolean as T
  }

  if ('literalArray' in source) {
    return source.literalArray as T
  }

  if ('path' in source) {
    const value = getValueByPath(dataModel, source.path)
    if (value === undefined) {
      return defaultValue as T
    }
    return value as T
  }

  return defaultValue as T
}

/**
 * Checks if a value source is a path reference.
 *
 * @param source - The value source to check
 * @returns True if the source is a path reference
 */
export function isPathReference(
  source: ValueSource | undefined
): source is { path: string } {
  return source !== undefined && source !== null && 'path' in source
}

/**
 * Gets the path from a value source, or undefined if it's not a path reference.
 *
 * @param source - The value source
 * @returns The path string or undefined
 */
export function getPath(source: ValueSource | undefined): string | undefined {
  if (isPathReference(source)) {
    return source.path
  }
  return undefined
}

/**
 * Converts a DataEntry array to a plain object.
 * This is used for processing dataModelUpdate message contents.
 *
 * @param contents - Array of data entries from the server
 * @returns A plain object with the converted values
 *
 * @example
 * contentsToObject([
 *   { key: "name", valueString: "John" },
 *   { key: "age", valueNumber: 30 },
 *   { key: "active", valueBoolean: true },
 *   { key: "profile", valueMap: [
 *     { key: "email", valueString: "john@example.com" }
 *   ]}
 * ]);
 * // Returns: { name: "John", age: 30, active: true, profile: { email: "john@example.com" } }
 */
export function contentsToObject(
  contents: DataEntry[]
): Record<string, DataModelValue> {
  const result: Record<string, DataModelValue> = {}

  for (const entry of contents) {
    const key = normalizeKey(entry.key)

    if (entry.valueString !== undefined) {
      result[key] = entry.valueString
    } else if (entry.valueNumber !== undefined) {
      result[key] = entry.valueNumber
    } else if (entry.valueBoolean !== undefined) {
      result[key] = entry.valueBoolean
    } else if (entry.valueMap !== undefined) {
      result[key] = contentsToObject(entry.valueMap)
    }
  }

  return result
}

/**
 * Normalizes a key from the data entry format.
 * Keys can come as "/form/name" or just "name".
 *
 * @param key - The key to normalize
 * @returns The normalized key (last segment)
 */
function normalizeKey(key: string): string {
  // If key contains path separators, take the last segment
  if (key.includes('/')) {
    const segments = key.split('/').filter(Boolean)
    return segments[segments.length - 1] || key
  }
  return key
}

/**
 * Creates a literal string value source.
 *
 * @param value - The string value
 * @returns A ValueSource with literalString
 */
export function literalString(value: string): ValueSource {
  return { literalString: value }
}

/**
 * Creates a literal number value source.
 *
 * @param value - The number value
 * @returns A ValueSource with literalNumber
 */
export function literalNumber(value: number): ValueSource {
  return { literalNumber: value }
}

/**
 * Creates a literal boolean value source.
 *
 * @param value - The boolean value
 * @returns A ValueSource with literalBoolean
 */
export function literalBoolean(value: boolean): ValueSource {
  return { literalBoolean: value }
}

/**
 * Creates a path reference value source.
 *
 * @param path - The data model path
 * @returns A ValueSource with path
 */
export function pathRef(path: string): ValueSource {
  return { path }
}

/**
 * Resolves action context items to a plain object.
 * This is used when dispatching actions to resolve all context values.
 *
 * @param context - Array of action context items
 * @param dataModel - The data model for path lookups
 * @returns A plain object with resolved context values
 */
export function resolveActionContext(
  context: Array<{ key: string; value: ValueSource }> | undefined,
  dataModel: DataModel
): Record<string, unknown> {
  if (!context) {
    return {}
  }

  const result: Record<string, unknown> = {}

  for (const item of context) {
    result[item.key] = resolveValue(item.value, dataModel)
  }

  return result
}
