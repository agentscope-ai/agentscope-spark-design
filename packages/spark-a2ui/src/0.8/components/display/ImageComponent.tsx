/**
 * ImageComponent - Displays an image with configurable sizing and fit.
 */

import { memo } from 'react'
import type { ImageComponentProps } from '@/0.8/types'
import { useDataBinding } from '@/0.8/hooks/useDataBinding'
import { cn } from '@/lib/utils'

/**
 * Maps fit property to CSS object-fit values.
 */
const fitStyles: Record<string, string> = {
  contain: 'object-contain',
  cover: 'object-cover',
  fill: 'object-fill',
  none: 'object-none',
  'scale-down': 'object-scale-down',
}

/**
 * Maps usageHint to size and style classes.
 */
const usageHintStyles: Record<string, string> = {
  icon: 'w-6 h-6',
  avatar: 'w-10 h-10 rounded-full',
  smallFeature: 'w-16 h-16',
  mediumFeature: 'w-32 h-32',
  largeFeature: 'w-48 h-48',
  header: 'w-full h-48',
}

/**
 * Image component for displaying images.
 * Supports different sizes via usageHint and object-fit via fit property.
 */
export const ImageComponent = memo(function ImageComponent({
  surfaceId,
  url,
  fit = 'cover',
  usageHint,
}: ImageComponentProps) {
  const imageUrl = useDataBinding<string>(surfaceId, url, '')

  if (!imageUrl) {
    return null
  }

  const className = cn(
    fitStyles[fit] || fitStyles.cover,
    usageHint && usageHintStyles[usageHint]
  )

  return <img src={imageUrl} alt="" className={className} loading="lazy" />
})

ImageComponent.displayName = 'A2UI.Image'
