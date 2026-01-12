/**
 * ColumnComponent - Vertical flex container.
 */

import { memo } from 'react'
import type { ColumnComponentProps, Distribution, Alignment } from '@/0.8/types'
import { useDataModel } from '@/0.8/hooks/useDataBinding'
import { cn } from '@/lib/utils'
import { getValueByPath } from '@/0.8/utils/pathUtils'
import { ComponentRenderer } from '../ComponentRenderer'

/**
 * Maps distribution values to Tailwind justify-content classes.
 */
const distributionStyles: Record<Distribution, string> = {
  start: 'justify-start',
  center: 'justify-center',
  end: 'justify-end',
  spaceBetween: 'justify-between',
  spaceAround: 'justify-around',
  spaceEvenly: 'justify-evenly',
}

/**
 * Maps alignment values to Tailwind align-items classes.
 */
const alignmentStyles: Record<Alignment, string> = {
  start: 'items-start',
  center: 'items-center',
  end: 'items-end',
  stretch: 'items-stretch',
}

/**
 * Column component - vertical flex container.
 */
export const ColumnComponent = memo(function ColumnComponent({
  surfaceId,
  children,
  distribution = 'start',
  alignment = 'stretch',
}: ColumnComponentProps) {
  const dataModel = useDataModel(surfaceId)

  const className = cn(
    'flex flex-col gap-4',
    distributionStyles[distribution],
    alignmentStyles[alignment]
  )

  // Render explicit list of children
  if (children?.explicitList) {
    return (
      <div className={className}>
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
      return <div className={className} />
    }

    const items = Object.entries(listData as Record<string, unknown>)

    return (
      <div className={className}>
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

  return <div className={className} />
})

ColumnComponent.displayName = 'A2UI.Column'
