/**
 * useA2UIMessageHandler - Hook for processing A2UI messages.
 */

import { useCallback } from 'react'
import type { A2UIMessage } from '../types'
import { useSurfaceContext } from '../contexts/SurfaceContext'
import { useDataModelContext } from '../contexts/DataModelContext'
import { contentsToObject } from '../utils/dataBinding'

/**
 * Return type for the message handler hook.
 */
export interface A2UIMessageHandler {
  /** Processes a single A2UI message */
  processMessage: (message: A2UIMessage) => void

  /** Processes multiple A2UI messages */
  processMessages: (messages: A2UIMessage[]) => void

  /** Clears all surfaces and data models */
  clear: () => void
}

/**
 * Hook that returns functions to process A2UI messages.
 *
 * @returns Object with processMessage, processMessages, and clear functions
 *
 * @example
 * ```tsx
 * function MyComponent() {
 *   const { processMessage, processMessages, clear } = useA2UIMessageHandler();
 *
 *   useEffect(() => {
 *     // Process initial messages
 *     processMessages(initialMessages);
 *
 *     // Listen for SSE updates
 *     const handler = (event) => {
 *       processMessage(event.detail.message);
 *     };
 *     window.addEventListener('a2ui-message', handler);
 *
 *     return () => {
 *       window.removeEventListener('a2ui-message', handler);
 *       clear();
 *     };
 *   }, []);
 * }
 * ```
 */
export function useA2UIMessageHandler(): A2UIMessageHandler {
  const { initSurface, updateSurface, deleteSurface, clearSurfaces } =
    useSurfaceContext()

  const { updateDataModel, initDataModel, deleteDataModel, clearDataModels } =
    useDataModelContext()

  const processMessage = useCallback(
    (messages: A2UIMessage) => {
      // Handle beginRendering - marks the surface as ready to render
      // Note: surfaceUpdate may have already populated components before this
      if (messages.beginRendering) {
        const { surfaceId, root, styles } = messages.beginRendering
        initSurface(surfaceId, root, styles)
        initDataModel(surfaceId)
        return
      }

      // Handle surfaceUpdate
      if (messages.surfaceUpdate) {
        const { surfaceId, components } = messages.surfaceUpdate
        updateSurface(surfaceId, components)
        return
      }

      // Handle dataModelUpdate
      if (messages.dataModelUpdate) {
        const { surfaceId, path = '/', contents } = messages.dataModelUpdate
        const data = contentsToObject(contents)
        updateDataModel(surfaceId, path, data)
        return
      }

      // Handle deleteSurface
      if (messages.deleteSurface) {
        const { surfaceId } = messages.deleteSurface
        deleteSurface(surfaceId)
        deleteDataModel(surfaceId)
        return
      }
    },
    [
      initSurface,
      updateSurface,
      deleteSurface,
      initDataModel,
      updateDataModel,
      deleteDataModel,
    ]
  )

  const processMessages = useCallback(
    (messages: A2UIMessage[]) => {
      for (const message of messages) {
        processMessage(message)
      }
    },
    [processMessage]
  )

  const clear = useCallback(() => {
    clearSurfaces()
    clearDataModels()
  }, [clearSurfaces, clearDataModels])

  return {
    processMessage,
    processMessages,
    clear,
  }
}
