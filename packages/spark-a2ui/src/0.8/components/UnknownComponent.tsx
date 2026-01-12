/**
 * UnknownComponent - Placeholder for unknown component types in development mode.
 *
 * In development mode, renders a visible placeholder to help developers
 * identify missing or misspelled component types.
 * In production mode, this component should not be rendered (ComponentRenderer skips unknown types).
 */

import type { BaseComponentProps } from '../types'

/**
 * Props for UnknownComponent.
 */
export interface UnknownComponentProps extends BaseComponentProps {
  /** The unknown component type name */
  componentType: string
}

/**
 * Placeholder component for unknown types in development mode.
 *
 * Displays a warning box with the unknown component type name
 * to help developers identify configuration issues.
 */
export function UnknownComponent({
  componentId,
  componentType,
}: UnknownComponentProps) {
  return (
    <div
      style={{
        padding: '8px 12px',
        margin: '4px',
        backgroundColor: '#fff3cd',
        border: '1px solid #ffc107',
        borderRadius: '4px',
        color: '#856404',
        fontSize: '12px',
        fontFamily: 'monospace',
      }}
    >
      <strong>Unknown component:</strong> {componentType}
      <br />
      <span style={{ opacity: 0.7 }}>ID: {componentId}</span>
    </div>
  )
}

UnknownComponent.displayName = 'A2UI.UnknownComponent'
