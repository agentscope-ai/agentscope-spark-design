/**
 * DividerComponent - Displays a separator line.
 */

import React, { memo } from 'react'
import type { DividerComponentProps } from '@/0.8/types'
import { Separator } from '@/components/ui/separator'

/**
 * Divider component for visual separation.
 */
export const DividerComponent = memo(function DividerComponent({
  axis = 'horizontal',
}: DividerComponentProps) {
  return (
    <Separator
      orientation={axis}
    />
  )
})

DividerComponent.displayName = 'A2UI.Divider'
