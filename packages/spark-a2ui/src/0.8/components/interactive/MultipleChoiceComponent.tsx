/**
 * MultipleChoiceComponent - Dropdown/Select input with two-way binding.
 * Supports both single selection (dropdown) and multi-selection (checkboxes).
 */

import { memo, useCallback } from 'react'
import type { MultipleChoiceComponentProps, ValueSource } from '@/0.8/types'
import { useDataBinding, useFormBinding } from '@/0.8/hooks/useDataBinding'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import { cn } from '@/lib/utils'

/**
 * MultipleChoice component - dropdown/select input.
 * When maxAllowedSelections === 1, renders as a dropdown.
 * When maxAllowedSelections > 1 or undefined, renders as checkboxes for multi-select.
 */
export const MultipleChoiceComponent = memo(function MultipleChoiceComponent({
  surfaceId,
  componentId,
  selections,
  options,
  maxAllowedSelections,
}: MultipleChoiceComponentProps) {
  const [selectedValue, setSelectedValue] = useFormBinding<string | string[]>(
    surfaceId,
    selections,
    maxAllowedSelections === 1 ? '' : []
  )

  const handleSingleChange = useCallback(
    (value: string) => {
      setSelectedValue(value)
    },
    [setSelectedValue]
  )

  const handleMultiChange = useCallback(
    (value: string, checked: boolean) => {
      const currentSelections = Array.isArray(selectedValue)
        ? selectedValue
        : selectedValue
          ? [selectedValue]
          : []

      if (checked) {
        // Check if we've reached the max allowed selections
        if (
          maxAllowedSelections !== undefined &&
          currentSelections.length >= maxAllowedSelections
        ) {
          return
        }
        setSelectedValue([...currentSelections, value])
      } else {
        setSelectedValue(currentSelections.filter((v) => v !== value))
      }
    },
    [selectedValue, setSelectedValue, maxAllowedSelections]
  )

  const id = `multiplechoice-${componentId}`

  if (!options || options.length === 0) {
    return null
  }

  // Single selection mode - use dropdown
  if (maxAllowedSelections === 1) {
    const currentValue = Array.isArray(selectedValue)
      ? selectedValue[0] || ''
      : selectedValue

    return (
      <div className={cn('flex flex-col gap-2')}>
        <Select value={currentValue} onValueChange={handleSingleChange}>
          <SelectTrigger id={id}>
            <SelectValue placeholder="Select an option" />
          </SelectTrigger>
          <SelectContent>
            {options.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                <OptionLabel surfaceId={surfaceId} label={option.label} />
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    )
  }

  // Multi-selection mode - use checkboxes
  const currentSelections = Array.isArray(selectedValue)
    ? selectedValue
    : selectedValue
      ? [selectedValue]
      : []

  const isMaxReached =
    maxAllowedSelections !== undefined &&
    currentSelections.length >= maxAllowedSelections

  return (
    <div className={cn('flex flex-col gap-2')}>
      {options.map((option) => {
        const isChecked = currentSelections.includes(option.value)
        const isDisabled = !isChecked && isMaxReached
        const checkboxId = `${id}-${option.value}`

        return (
          <div key={option.value} className="flex items-center gap-2">
            <Checkbox
              id={checkboxId}
              checked={isChecked}
              disabled={isDisabled}
              onCheckedChange={(checked) =>
                handleMultiChange(option.value, checked === true)
              }
            />
            <Label
              htmlFor={checkboxId}
              className={cn(
                'cursor-pointer',
                isDisabled && 'cursor-not-allowed opacity-50'
              )}
            >
              <OptionLabel surfaceId={surfaceId} label={option.label} />
            </Label>
          </div>
        )
      })}
    </div>
  )
})

/**
 * Helper component to resolve option labels.
 */
function OptionLabel({
  surfaceId,
  label,
}: {
  surfaceId: string
  label: ValueSource | undefined
}) {
  const labelText = useDataBinding<string>(surfaceId, label, '')
  return <>{labelText}</>
}

MultipleChoiceComponent.displayName = 'A2UI.MultipleChoice'
