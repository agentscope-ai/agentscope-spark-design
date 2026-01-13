/**
 * DateTimeInputComponent - Date and/or time input with two-way binding.
 * Uses Ant Design DatePicker and TimePicker components.
 */

import React, { memo, useCallback, useMemo } from 'react'
import { DatePicker, TimePicker } from 'antd'
import type { Dayjs } from 'dayjs'
import dayjs from 'dayjs'
import type { DateTimeInputComponentProps } from '@/0.8/types'
import { useFormBinding } from '@/0.8/hooks/useDataBinding'

/**
 * DateTimeInput component - date/time picker using Ant Design DatePicker.
 */
export const DateTimeInputComponent = memo(function DateTimeInputComponent(props: DateTimeInputComponentProps) {
  const {
    surfaceId,
    componentId,
    value,
    enableDate = true,
    enableTime = false,
  } = props;

  const [dateValue, setDateValue] = useFormBinding<string>(surfaceId, value, '')

  // Parse the string value to Dayjs object
  const selectedDate = useMemo((): Dayjs | null => {
    if (!dateValue) return null

    let date: Dayjs | null = null
    if (enableDate && enableTime) {
      // datetime-local format: "YYYY-MM-DDTHH:mm"
      date = dayjs(dateValue, 'YYYY-MM-DDTHH:mm')
    } else if (enableDate) {
      // date format: "YYYY-MM-DD"
      date = dayjs(dateValue, 'YYYY-MM-DD')
    } else if (enableTime) {
      // time format: "HH:mm"
      date = dayjs(dateValue, 'HH:mm')
    }

    return date?.isValid() ? date : null
  }, [dateValue, enableDate, enableTime])

  // Handle date/datetime change from DatePicker
  const handleDateChange = useCallback(
    (date: Dayjs | null) => {
      if (!date) {
        setDateValue('')
        return
      }

      if (enableDate && enableTime) {
        setDateValue(date.format('YYYY-MM-DDTHH:mm'))
      } else if (enableDate) {
        setDateValue(date.format('YYYY-MM-DD'))
      }
    },
    [setDateValue, enableDate, enableTime]
  )

  // Handle time change from TimePicker
  const handleTimeChange = useCallback(
    (time: Dayjs | null) => {
      if (!time) {
        setDateValue('')
        return
      }
      setDateValue(time.format('HH:mm'))
    },
    [setDateValue]
  )

  // Format display placeholder
  const placeholder = useMemo(() => {
    if (enableDate && enableTime) return '选择日期和时间'
    if (enableDate) return '选择日期'
    return '选择时间'
  }, [enableDate, enableTime])

  const id = `datetime-${componentId}`

  // Time-only mode: use TimePicker
  if (enableTime && !enableDate) {
    return (
      <TimePicker
        id={id}
        value={selectedDate}
        onChange={handleTimeChange}
        format="HH:mm"
        placeholder={placeholder}
        style={{ width: '100%' }}
      />
    )
  }

  // Date or DateTime mode: use DatePicker
  return (
    <DatePicker
      id={id}
      value={selectedDate}
      onChange={handleDateChange}
      showTime={enableTime ? { format: 'HH:mm' } : false}
      format={enableDate && enableTime ? 'YYYY-MM-DD HH:mm' : 'YYYY-MM-DD'}
      placeholder={placeholder}
      style={{ width: '100%' }}
    />
  )
})

DateTimeInputComponent.displayName = 'A2UI.DateTimeInput'
