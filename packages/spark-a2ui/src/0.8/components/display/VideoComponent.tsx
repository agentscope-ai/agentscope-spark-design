/**
 * VideoComponent - Displays video content.
 */

import React, { memo } from 'react'
import type { VideoComponentProps } from '@/0.8/types'
import { useDataBinding } from '@/0.8/hooks/useDataBinding'

/**
 * Video component for displaying video content.
 */
export const VideoComponent = memo(function VideoComponent({
  surfaceId,
  url,
}: VideoComponentProps) {
  const videoUrl = useDataBinding<string>(surfaceId, url, '')

  if (!videoUrl) {
    return null
  }

  return (
    <video src={videoUrl} controls style={{ borderRadius: 8 }}>
      <track kind="captions" />
      Your browser does not support the video tag.

    </video>
  )
})

VideoComponent.displayName = 'A2UI.Video'
