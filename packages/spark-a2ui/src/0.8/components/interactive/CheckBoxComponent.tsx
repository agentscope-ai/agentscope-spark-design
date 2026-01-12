/**
 * CheckBoxComponent - Checkbox input with two-way binding.
 */

import React, { memo, useCallback } from 'react'
import type { CheckBoxComponentProps } from '@/0.8/types'
import { useDataBinding, useFormBinding } from '@/0.8/hooks/useDataBinding'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'

/**
 * CheckBox component - checkbox input with label.
 */
export const CheckBoxComponent = memo(function CheckBoxComponent({
  surfaceId,
  componentId,
  label,
  value,
}: CheckBoxComponentProps) {
  const labelText = useDataBinding<string>(surfaceId, label, '')
  const [checked, setChecked] = useFormBinding<boolean>(surfaceId, value, false)

  const handleChange = useCallback(
    (newChecked: boolean) => {
      setChecked(newChecked)
    },
    [setChecked]
  )

  const id = `checkbox-${componentId}`

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
      <Checkbox id={id} checked={checked} onCheckedChange={handleChange} />
      {labelText && (
        <Label htmlFor={id} style={{ cursor: 'pointer' }}>
          {labelText}
        </Label>
      )}
    </div>
  )
})

CheckBoxComponent.displayName = 'A2UI.CheckBox'
