/**
 * ButtonComponent - Clickable button that triggers actions.
 */

import { memo, useCallback } from 'react'
import type { ButtonComponentProps } from '@/0.8/types'
import { useDispatchAction } from '@/0.8/hooks/useDispatchAction'
import { Button } from '@/components/ui/button'
import { ComponentRenderer } from '../ComponentRenderer'

/**
 * Button component - triggers actions on click.
 */
export const ButtonComponent = memo(function ButtonComponent({
  surfaceId,
  componentId,
  child,
  primary = false,
  action,
}: ButtonComponentProps) {
  const dispatchAction = useDispatchAction()

  const handleClick = useCallback(() => {
    if (action) {
      dispatchAction(surfaceId, componentId, action)
    }
  }, [dispatchAction, surfaceId, componentId, action])

  return (
    <Button
      variant={primary ? 'default' : 'outline'}
      onClick={handleClick}
      className="inline-flex items-center justify-center"
    >
      {child ? (
        <ComponentRenderer surfaceId={surfaceId} componentId={child} />
      ) : (
        'Button'
      )}
    </Button>
  )
})

ButtonComponent.displayName = 'A2UI.Button'
