/**
 * DateTimeInputComponent - Date and/or time input with two-way binding.
 * Uses shadcn/ui Calendar and Popover components.
 */

import { memo, useCallback, useMemo } from 'react'
import { CalendarIcon } from 'lucide-react'
import { format, parse, isValid } from 'date-fns'
import type { DateTimeInputComponentProps } from '@/0.8/types'
import { useFormBinding } from '@/0.8/hooks/useDataBinding'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { Input } from '@/components/ui/input'

/**
 * DateTimeInput component - date/time picker using Calendar and Popover.
 */
export const DateTimeInputComponent = memo(function DateTimeInputComponent({
  surfaceId,
  componentId,
  value,
  enableDate = true,
  enableTime = false,
}: DateTimeInputComponentProps) {
  const [dateValue, setDateValue] = useFormBinding<string>(surfaceId, value, '')

  // Parse the string value to Date object
  const selectedDate = useMemo(() => {
    if (!dateValue) return undefined

    let date: Date | undefined
    if (enableDate && enableTime) {
      // datetime-local format: "YYYY-MM-DDTHH:mm"
      date = parse(dateValue, "yyyy-MM-dd'T'HH:mm", new Date())
    } else if (enableDate) {
      // date format: "YYYY-MM-DD"
      date = parse(dateValue, 'yyyy-MM-dd', new Date())
    } else if (enableTime) {
      // time format: "HH:mm" - create a date with today's date
      date = parse(dateValue, 'HH:mm', new Date())
    }

    return date && isValid(date) ? date : undefined
  }, [dateValue, enableDate, enableTime])

  // Extract time parts for time input
  const timeValue = useMemo(() => {
    if (!selectedDate || !enableTime) return ''
    return format(selectedDate, 'HH:mm')
  }, [selectedDate, enableTime])

  // Handle date selection from calendar
  const handleDateSelect = useCallback(
    (date: Date | undefined) => {
      if (!date) {
        setDateValue('')
        return
      }

      if (enableDate && enableTime) {
        // Preserve existing time if any
        const existingTime = selectedDate
          ? format(selectedDate, 'HH:mm')
          : '00:00'
        const [hours, minutes] = existingTime.split(':').map(Number)
        date.setHours(hours, minutes)
        setDateValue(format(date, "yyyy-MM-dd'T'HH:mm"))
      } else {
        setDateValue(format(date, 'yyyy-MM-dd'))
      }
    },
    [setDateValue, enableDate, enableTime, selectedDate]
  )

  // Handle time change
  const handleTimeChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const newTime = e.target.value
      if (!newTime) return

      const [hours, minutes] = newTime.split(':').map(Number)

      if (enableDate && enableTime) {
        // Update time on existing date or use today
        const baseDate = selectedDate || new Date()
        baseDate.setHours(hours, minutes)
        setDateValue(format(baseDate, "yyyy-MM-dd'T'HH:mm"))
      } else if (enableTime && !enableDate) {
        // Time only mode
        setDateValue(newTime)
      }
    },
    [setDateValue, enableDate, enableTime, selectedDate]
  )

  // Format display text
  const displayText = useMemo(() => {
    if (!selectedDate) {
      if (enableDate && enableTime) return '选择日期和时间'
      if (enableDate) return '选择日期'
      return '选择时间'
    }

    if (enableDate && enableTime) {
      return format(selectedDate, 'yyyy-MM-dd HH:mm')
    } else if (enableDate) {
      return format(selectedDate, 'yyyy-MM-dd')
    } else {
      return format(selectedDate, 'HH:mm')
    }
  }, [selectedDate, enableDate, enableTime])

  const id = `datetime-${componentId}`

  // Time-only mode: just show time input
  if (enableTime && !enableDate) {
    return (
      <div className={cn('flex flex-col gap-2')}>
        <Input
          id={id}
          type="time"
          value={dateValue}
          onChange={handleTimeChange}
          className="w-full"
        />
      </div>
    )
  }

  return (
    <div className={cn('flex flex-col gap-2')}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id={id}
            variant="outline"
            className={cn(
              'w-full justify-start text-left font-normal',
              !selectedDate && 'text-muted-foreground'
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {displayText}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            mode="single"
            selected={selectedDate}
            onSelect={handleDateSelect}
            captionLayout="dropdown"
            initialFocus
          />
          {enableTime && (
            <div className="border-t p-3">
              <Input
                type="time"
                value={timeValue}
                onChange={handleTimeChange}
                className="w-full"
              />
            </div>
          )}
        </PopoverContent>
      </Popover>
    </div>
  )
})

DateTimeInputComponent.displayName = 'A2UI.DateTimeInput'
