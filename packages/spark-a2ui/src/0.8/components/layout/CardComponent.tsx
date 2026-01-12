/**
 * CardComponent - Card container.
 */

import { memo } from 'react'
import type { CardComponentProps } from '@/0.8/types'
import { Card, CardContent } from '@/components/ui/card'
import { ComponentRenderer } from '../ComponentRenderer'

/**
 * Card component - container with card styling.
 */
export const CardComponent = memo(function CardComponent({
  surfaceId,
  child,
}: CardComponentProps) {
  if (!child) {
    return <Card />
  }

  return (
    <Card>
      <CardContent className="p-4">
        <ComponentRenderer surfaceId={surfaceId} componentId={child} />
      </CardContent>
    </Card>
  )
})

CardComponent.displayName = 'A2UI.Card'
