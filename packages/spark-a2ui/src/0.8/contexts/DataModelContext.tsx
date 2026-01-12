/**
 * DataModelContext - Manages the data model state for A2UI rendering.
 *
 * The data model is a hierarchical key-value store.
 * Components reference data using paths like "/user/name".
 */

import {
  createContext,
  useContext,
  useState,
  useMemo,
  useCallback,
  type ReactNode,
} from 'react'
import type { DataModel, DataModelValue } from '../types'
import { getValueByPath, setValueByPath, mergeAtPath } from '../utils/pathUtils'

/**
 * DataModel context value interface.
 */
export interface DataModelContextValue {
  /** Map of data models by surfaceId */
  dataModels: Map<string, DataModel>

  /** Updates the data model at a path with merge behavior */
  updateDataModel: (
    surfaceId: string,
    path: string,
    data: Record<string, unknown>
  ) => void

  /** Gets a value from the data model */
  getDataValue: (surfaceId: string, path: string) => DataModelValue | undefined

  /** Sets a value in the data model (used by form inputs) */
  setDataValue: (surfaceId: string, path: string, value: unknown) => void

  /** Gets the entire data model for a surface */
  getDataModel: (surfaceId: string) => DataModel

  /** Initializes the data model for a surface */
  initDataModel: (surfaceId: string) => void

  /** Deletes the data model for a surface */
  deleteDataModel: (surfaceId: string) => void

  /** Clears all data models */
  clearDataModels: () => void
}

/**
 * DataModel context for A2UI rendering.
 */
export const DataModelContext = createContext<DataModelContextValue | null>(
  null
)

/**
 * Props for DataModelProvider.
 */
export interface DataModelProviderProps {
  children: ReactNode
}

/**
 * Provider component for DataModel state management.
 */
export function DataModelProvider({ children }: DataModelProviderProps) {
  const [dataModels, setDataModels] = useState<Map<string, DataModel>>(
    new Map()
  )

  const updateDataModel = useCallback(
    (surfaceId: string, path: string, data: Record<string, unknown>) => {
      setDataModels((prev) => {
        const next = new Map(prev)
        const current = next.get(surfaceId) ?? {}
        const updated = mergeAtPath(current, path, data)
        next.set(surfaceId, updated)
        return next
      })
    },
    []
  )

  const getDataValue = useCallback(
    (surfaceId: string, path: string): DataModelValue | undefined => {
      const model = dataModels.get(surfaceId)
      if (!model) {
        return undefined
      }
      return getValueByPath(model, path)
    },
    [dataModels]
  )

  const setDataValue = useCallback(
    (surfaceId: string, path: string, value: unknown) => {
      setDataModels((prev) => {
        const next = new Map(prev)
        const current = next.get(surfaceId) ?? {}
        const updated = setValueByPath(current, path, value)
        next.set(surfaceId, updated)
        return next
      })
    },
    []
  )

  const getDataModel = useCallback(
    (surfaceId: string): DataModel => {
      return dataModels.get(surfaceId) ?? {}
    },
    [dataModels]
  )

  const initDataModel = useCallback((surfaceId: string) => {
    setDataModels((prev) => {
      if (prev.has(surfaceId)) {
        return prev
      }
      const next = new Map(prev)
      next.set(surfaceId, {})
      return next
    })
  }, [])

  const deleteDataModel = useCallback((surfaceId: string) => {
    setDataModels((prev) => {
      const next = new Map(prev)
      next.delete(surfaceId)
      return next
    })
  }, [])

  const clearDataModels = useCallback(() => {
    setDataModels(new Map())
  }, [])

  const value = useMemo<DataModelContextValue>(
    () => ({
      dataModels,
      updateDataModel,
      getDataValue,
      setDataValue,
      getDataModel,
      initDataModel,
      deleteDataModel,
      clearDataModels,
    }),
    [
      dataModels,
      updateDataModel,
      getDataValue,
      setDataValue,
      getDataModel,
      initDataModel,
      deleteDataModel,
      clearDataModels,
    ]
  )

  return (
    <DataModelContext.Provider value={value}>
      {children}
    </DataModelContext.Provider>
  )
}

/**
 * Hook to access the DataModel context.
 *
 * @throws Error if used outside of DataModelProvider
 */
export function useDataModelContext(): DataModelContextValue {
  const context = useContext(DataModelContext)
  if (!context) {
    throw new Error(
      'useDataModelContext must be used within a DataModelProvider'
    )
  }
  return context
}
