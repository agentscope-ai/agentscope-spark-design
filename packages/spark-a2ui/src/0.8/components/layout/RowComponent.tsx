/**
 * RowComponent - Horizontal flex container.
 */

import React, { memo, CSSProperties } from 'react'
import type { RowComponentProps, Distribution, Alignment } from '@/0.8/types'
import { useDataModel } from '@/0.8/hooks/useDataBinding'
import { getValueByPath } from '@/0.8/utils/pathUtils'
import { ComponentRenderer } from '../ComponentRenderer'

/**
 * Maps distribution values to CSS justify-content values.
 */
const distributionStyles: Record<Distribution, CSSProperties['justifyContent']> = {
  start: 'flex-start',
  center: 'center',
  end: 'flex-end',
  spaceBetween: 'space-between',
  spaceAround: 'space-around',
  spaceEvenly: 'space-evenly',
}

/**
 * Maps alignment values to CSS align-items values.
 */
const alignmentStyles: Record<Alignment, CSSProperties['alignItems']> = {
  start: 'flex-start',
  center: 'center',
  end: 'flex-end',
  stretch: 'stretch',
}

/**
 * Row component - horizontal flex container.
 */
export const RowComponent = memo(function RowComponent({
  surfaceId,
  children,
  distribution = 'start',
  alignment = 'stretch',
}: RowComponentProps) {
  const dataModel = useDataModel(surfaceId)

  const style: CSSProperties = {
    display: 'flex',
    flexDirection: 'row',
    gap: 12,
    justifyContent: distributionStyles[distribution],
    alignItems: alignmentStyles[alignment],
  }

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

    // listData is a Map-like object where each value represents an item
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

RowComponent.displayName = 'A2UI.Row'
