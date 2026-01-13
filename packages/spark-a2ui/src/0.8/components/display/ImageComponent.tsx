/**
 * ImageComponent - Displays an image with configurable sizing and fit.
 */
import React, { useMemo } from 'react'
import { memo } from 'react'
import type { ImageComponentProps } from '@/0.8/types'
import { useDataBinding } from '@/0.8/hooks/useDataBinding'
import { Image as AntdImage } from 'antd'

/**
 * Maps fit property to CSS objectFit values.
 */
const fitStyles: Record<string, React.CSSProperties['objectFit']> = {
  contain: 'contain',
  cover: 'cover',
  fill: 'fill',
  none: 'none',
  'scale-down': 'scale-down',
}

/**
 * Maps usageHint to size and style objects.
 */
const usageHintStyles: Record<string, React.CSSProperties> = {
  icon: { width: 24, height: 24 },
  avatar: { width: 40, height: 40, borderRadius: '50%' },
  smallFeature: { width: 64, height: 64 },
  mediumFeature: { width: 128, height: 128 },
  largeFeature: { width: 192, height: 192 },
  header: { width: '100%', height: 192 },
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

  const style: React.CSSProperties = useMemo(
    () => ({
      objectFit: fitStyles[fit] || fitStyles.cover,
      ...(usageHint && usageHintStyles[usageHint]),
    }),
    [fit, usageHint]
  )

  if (!imageUrl) {
    return null
  }

  

  return <AntdImage src={imageUrl} alt="" style={style} loading="lazy" />
})

ImageComponent.displayName = 'A2UI.Image'
