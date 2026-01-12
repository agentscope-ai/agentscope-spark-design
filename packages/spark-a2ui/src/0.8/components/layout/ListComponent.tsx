/**
 * ListComponent - List container with vertical or horizontal direction.
 */

import React, { memo, useMemo } from 'react'
import type { ListComponentProps, Alignment } from '@/0.8/types'
import { useDataModel } from '@/0.8/hooks/useDataBinding'
import { getValueByPath } from '@/0.8/utils/pathUtils'
import { ComponentRenderer } from '../ComponentRenderer'

/**
 * Maps alignment values to CSS alignItems values.
 */
const alignmentStyles: Record<Alignment, React.CSSProperties['alignItems']> = {
  start: 'flex-start',
  center: 'center',
  end: 'flex-end',
  stretch: 'stretch',
}

/**
 * List component - container for list items.
 */
export const ListComponent = memo(function ListComponent({
  surfaceId,
  children,
  direction = 'vertical',
  alignment = 'stretch',
}: ListComponentProps) {
  const dataModel = useDataModel(surfaceId)

  const style: React.CSSProperties = useMemo(
    () => ({
      display: 'flex',
      gap: 12,
      flexDirection: direction === 'horizontal' ? 'row' : 'column',
      alignItems: alignmentStyles[alignment],
    }),
    [direction, alignment]
  )

  // Render explicit list of children
  if (children?.explicitList) {
    return (
      <div style={style}>
        {children.explicitList.map((childId) => (
          <ComponentRenderer
            key={childId}
            surfaceId={surfaceId}
            componentId={childId}
          />
        ))}
      </div>
    )
  }

  // Render template-based children
  if (children?.template) {
    const { componentId, dataBinding } = children.template
    const listData = getValueByPath(dataModel, dataBinding)

    if (!listData || typeof listData !== 'object') {
      return <div style={style} />
    }

    const items = Object.entries(listData as Record<string, unknown>)

    return (
      <div style={style}>
        {items.map(([key]) => (
          <ComponentRenderer
            key={key}
            surfaceId={surfaceId}
            componentId={componentId}
          />
        ))}
      </div>
    )
  }

  return <div style={style} />
})

ListComponent.displayName = 'A2UI.List'
