/**
 * AudioPlayerComponent - Displays an audio player.
 */

import React, { memo } from 'react'
import type { AudioPlayerComponentProps } from '@/0.8/types'
import { useDataBinding } from '@/0.8/hooks/useDataBinding'

/**
 * AudioPlayer component for playing audio content.
 */
export const AudioPlayerComponent = memo(function AudioPlayerComponent({
  surfaceId,
  url,
  description,
}: AudioPlayerComponentProps) {
  const audioUrl = useDataBinding<string>(surfaceId, url, '')
  const descriptionText = useDataBinding<string>(surfaceId, description, '')

  if (!audioUrl) {
    return null
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      {descriptionText && (
        <p style={{ fontSize: 14, color: '#6b7280', margin: 0 }}>{descriptionText}</p>
      )}
      <audio src={audioUrl} controls style={{ width: '100%' }}>
        Your browser does not support the audio element.
      </audio>
    </div>
  )
})

AudioPlayerComponent.displayName = 'A2UI.AudioPlayer'
