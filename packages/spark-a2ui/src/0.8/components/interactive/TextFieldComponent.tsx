/**
 * TextFieldComponent - Text input field with two-way binding.
 */
import React from 'react';
import { memo, useCallback } from 'react'
import type { TextFieldComponentProps } from '@/0.8/types'
import { useDataBinding, useFormBinding } from '@/0.8/hooks/useDataBinding'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'

/**
 * Maps textFieldType to HTML input type.
 */
const inputTypeMap: Record<string, string> = {
  shortText: 'text',
  longText: 'text', // Uses textarea
  number: 'number',
  date: 'date',
  obscured: 'password',
}

/**
 * TextField component - text input with label.
 */
export const TextFieldComponent = memo(function TextFieldComponent({
  surfaceId,
  componentId,
  label,
  text,
  textFieldType = 'shortText',
}: TextFieldComponentProps) {
  const labelText = useDataBinding<string>(surfaceId, label, '')
  const [value, setValue] = useFormBinding<string>(surfaceId, text, '')

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setValue(e.target.value)
    },
    [setValue]
  )

  const id = `textfield-${componentId}`
  const inputType = inputTypeMap[textFieldType] || 'text'
  const isLongText = textFieldType === 'longText'

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      {labelText && <Label htmlFor={id}>{labelText}</Label>}
      {isLongText ? (
        <Textarea
          id={id}
          value={value}
          onChange={handleChange}
          style={{ minHeight: 100 }}
        />
      ) : (
        <Input id={id} type={inputType} value={value} onChange={handleChange} />
      )}
    </div>
  )
})

TextFieldComponent.displayName = 'A2UI.TextField'
