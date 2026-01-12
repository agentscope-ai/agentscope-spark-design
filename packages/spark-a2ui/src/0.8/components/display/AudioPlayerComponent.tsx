/**
 * AudioPlayerComponent - Displays an audio player.
 */

import { memo } from 'react'
import type { AudioPlayerComponentProps } from '@/0.8/types'
import { useDataBinding } from '@/0.8/hooks/useDataBinding'
import { cn } from '@/lib/utils'

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
    <div className={cn('flex flex-col gap-2')}>
      {descriptionText && (
        <p className="text-sm text-muted-foreground">{descriptionText}</p>
      )}
      <audio src={audioUrl} controls className="w-full">
        Your browser does not support the audio element.
      </audio>
    </div>
  )
})

AudioPlayerComponent.displayName = 'A2UI.AudioPlayer'
