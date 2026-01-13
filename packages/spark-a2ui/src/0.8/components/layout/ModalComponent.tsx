/**
 * ModalComponent - Modal/Dialog container.
 */

import React, { memo, useState } from 'react'
import type { ModalComponentProps } from '@/0.8/types'
import { Modal } from 'antd'
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
    <>
      <div style={{ cursor: 'pointer' }} onClick={() => setOpen(true)}>
        <ComponentRenderer
          surfaceId={surfaceId}
          componentId={entryPointChild}
        />
      </div>
      <Modal
        open={open}
        onCancel={() => setOpen(false)}
        footer={null}
        destroyOnClose
      >
        <ComponentRenderer surfaceId={surfaceId} componentId={contentChild} />
      </Modal>
    </>
  )
})

ModalComponent.displayName = 'A2UI.Modal'
