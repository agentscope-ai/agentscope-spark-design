/**
 * SliderComponent - Slider input with two-way binding.
 */

import { memo, useCallback } from 'react'
import type { SliderComponentProps } from '@/0.8/types'
import { useFormBinding } from '@/0.8/hooks/useDataBinding'
import { Slider } from '@/components/ui/slider'
import { cn } from '@/lib/utils'

/**
 * Slider component - range slider input.
 */
export const SliderComponent = memo(function SliderComponent({
  surfaceId,
  value,
  minValue = 0,
  maxValue = 100,
}: SliderComponentProps) {
  const [sliderValue, setSliderValue] = useFormBinding<number>(
    surfaceId,
    value,
    minValue
  )

  const handleChange = useCallback(
    (values: number[]) => {
      if (values.length > 0) {
        setSliderValue(values[0])
      }
    },
    [setSliderValue]
  )

  return (
    <div className={cn('flex flex-col gap-2 py-2')}>
      <Slider
        value={[sliderValue]}
        onValueChange={handleChange}
        min={minValue}
        max={maxValue}
        step={1}
      />
      <div className="flex justify-between text-sm text-muted-foreground">
        <span>{minValue}</span>
        <span className="font-medium text-foreground">{sliderValue}</span>
        <span>{maxValue}</span>
      </div>
    </div>
  )
})

SliderComponent.displayName = 'A2UI.Slider'
