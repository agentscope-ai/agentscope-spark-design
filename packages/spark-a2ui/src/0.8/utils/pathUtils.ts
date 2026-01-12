/**
 * Path utility functions for A2UI data model operations.
 */

import type { DataModel, DataModelValue } from '../types'

/**
 * Gets a value from the data model by path.
 *
 * @param dataModel - The data model to read from
 * @param path - The path to the value (e.g., "/user/name")
 * @returns The value at the path, or undefined if not found
 *
 * @example
 * const model = { user: { name: "John" } };
 * getValueByPath(model, "/user/name"); // "John"
 * getValueByPath(model, "/user/age");  // undefined
 */
export function getValueByPath(
  dataModel: DataModel,
  path: string
): DataModelValue | undefined {
  if (!path || path === '/') {
    return dataModel as DataModelValue
  }

  // Split path: "/user/name" -> ["user", "name"]
  const keys = path.split('/').filter(Boolean)
  let current: unknown = dataModel

  for (const key of keys) {
    if (current === null || current === undefined) {
      return undefined
    }

    if (typeof current !== 'object') {
      return undefined
    }

    current = (current as Record<string, unknown>)[key]
  }

  return current as DataModelValue | undefined
}

/**
 * Sets a value in the data model by path, returning a new data model.
 * This function is immutable - it does not modify the original data model.
 *
 * @param dataModel - The data model to update
 * @param path - The path to set (e.g., "/user/name")
 * @param value - The value to set
 * @returns A new data model with the value set
 *
 * @example
 * const model = { user: { name: "John" } };
 * setValueByPath(model, "/user/name", "Jane");
 * // Returns: { user: { name: "Jane" } }
 */
export function setValueByPath(
  dataModel: DataModel,
  path: string,
  value: unknown
): DataModel {
  if (!path || path === '/') {
    // Replace the entire data model
    if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
      return { ...dataModel, ...(value as DataModel) }
    }
    return dataModel
  }

  // Split path: "/user/name" -> ["user", "name"]
  const keys = path.split('/').filter(Boolean)

  // Recursive helper to build the new object structure
  function setNested(
    obj: DataModel,
    remainingKeys: string[],
    val: unknown
  ): DataModel {
    if (remainingKeys.length === 0) {
      // This shouldn't happen, but handle gracefully
      if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
        return { ...obj, ...(val as DataModel) }
      }
      return obj
    }

    const [key, ...rest] = remainingKeys

    if (rest.length === 0) {
      // Last key - set the value
      return {
        ...obj,
        [key]: val as DataModelValue,
      }
    }

    // Intermediate key - recurse
    const existingValue = obj[key]
    const nestedObj =
      typeof existingValue === 'object' &&
      existingValue !== null &&
      !Array.isArray(existingValue)
        ? (existingValue as DataModel)
        : {}

    return {
      ...obj,
      [key]: setNested(nestedObj, rest, val),
    }
  }

  return setNested(dataModel, keys, value)
}

/**
 * Merges data into the data model at a given path.
 * This is used for dataModelUpdate messages where contents are merged.
 *
 * @param dataModel - The data model to update
 * @param path - The path to merge at (e.g., "/form")
 * @param data - The data to merge
 * @returns A new data model with the data merged
 */
export function mergeAtPath(
  dataModel: DataModel,
  path: string,
  data: Record<string, unknown>
): DataModel {
  if (!path || path === '/') {
    // Merge at root
    return { ...dataModel, ...data } as DataModel
  }

  // Get current value at path
  const current = getValueByPath(dataModel, path)
  const currentObj =
    typeof current === 'object' && current !== null && !Array.isArray(current)
      ? (current as DataModel)
      : {}

  // Merge and set
  const merged = { ...currentObj, ...data }
  return setValueByPath(dataModel, path, merged)
}

/**
 * Normalizes a path to ensure it starts with "/" and has no trailing "/".
 *
 * @param path - The path to normalize
 * @returns The normalized path
 *
 * @example
 * normalizePath("user/name");   // "/user/name"
 * normalizePath("/user/name/"); // "/user/name"
 */
export function normalizePath(path: string): string {
  let normalized = path.trim()

  // Ensure starts with /
  if (!normalized.startsWith('/')) {
    normalized = '/' + normalized
  }

  // Remove trailing / (except for root path)
  if (normalized.length > 1 && normalized.endsWith('/')) {
    normalized = normalized.slice(0, -1)
  }

  return normalized
}

/**
 * Joins two paths together.
 *
 * @param basePath - The base path
 * @param relativePath - The relative path to join
 * @returns The joined path
 *
 * @example
 * joinPaths("/user", "name");     // "/user/name"
 * joinPaths("/user", "/name");    // "/user/name"
 * joinPaths("/user/", "/name/");  // "/user/name"
 */
export function joinPaths(basePath: string, relativePath: string): string {
  const base = normalizePath(basePath)
  const relative = relativePath.trim().replace(/^\/+/, '').replace(/\/+$/, '')

  if (!relative) {
    return base
  }

  if (base === '/') {
    return '/' + relative
  }

  return base + '/' + relative
}
