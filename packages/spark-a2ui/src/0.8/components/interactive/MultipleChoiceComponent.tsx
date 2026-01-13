/**
 * MultipleChoiceComponent - Dropdown/Select input with two-way binding.
 * Supports both single selection (dropdown) and multi-selection (checkboxes).
 */

import React, { memo, useCallback, useMemo } from 'react'
import { Select, Checkbox } from 'antd'
import type { MultipleChoiceComponentProps, ValueSource } from '@/0.8/types'
import { useDataBinding, useFormBinding } from '@/0.8/hooks/useDataBinding'

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
      ? selectedValue[0] || undefined
      : selectedValue || undefined

    return (
      <Select
        id={id}
        value={currentValue}
        onChange={handleSingleChange}
        placeholder="Select an option"
        style={{ width: '100%' }}
        options={options.map((option) => ({
          value: option.value,
          label: <OptionLabel surfaceId={surfaceId} label={option.label} />,
        }))}
      />
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
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      {options.map((option) => {
        const isChecked = currentSelections.includes(option.value)
        const isDisabled = !isChecked && isMaxReached
        const checkboxId = `${id}-${option.value}`

        return (
          <Checkbox
            key={option.value}
            id={checkboxId}
            checked={isChecked}
            disabled={isDisabled}
            onChange={(e) => handleMultiChange(option.value, e.target.checked)}
            style={isDisabled ? { opacity: 0.5 } : undefined}
          >
            <OptionLabel surfaceId={surfaceId} label={option.label} />
          </Checkbox>
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
