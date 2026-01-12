/**
 * ModalComponent - Modal/Dialog container.
 */

import { memo, useState } from 'react'
import type { ModalComponentProps } from '@/0.8/types'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import { ComponentRenderer } from '../ComponentRenderer'

/**
 * Modal component - dialog container with trigger.
 */
export const ModalComponent = memo(function ModalComponent({
  surfaceId,
  entryPointChild,
  contentChild,
}: ModalComponentProps) {
  const [open, setOpen] = useState(false)

  if (!entryPointChild || !contentChild) {
    return null
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <div className="cursor-pointer">
          <ComponentRenderer
            surfaceId={surfaceId}
            componentId={entryPointChild}
          />
        </div>
      </DialogTrigger>
      <DialogContent>
        <ComponentRenderer surfaceId={surfaceId} componentId={contentChild} />
      </DialogContent>
    </Dialog>
  )
})

ModalComponent.displayName = 'A2UI.Modal'
