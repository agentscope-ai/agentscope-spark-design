/**
 * SliderComponent - Slider input with two-way binding.
 */

import React, { memo, useCallback } from 'react'
import { Slider } from 'antd'
import type { SliderComponentProps } from '@/0.8/types'
import { useFormBinding } from '@/0.8/hooks/useDataBinding'

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
    (val: number) => {
      setSliderValue(val)
    },
    [setSliderValue]
  )

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8, padding: '8px 0' }}>
      <Slider
        value={sliderValue}
        onChange={handleChange}
        min={minValue}
        max={maxValue}
        step={1}
      />
      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 14, color: 'rgba(0, 0, 0, 0.45)' }}>
        <span>{minValue}</span>
        <span style={{ fontWeight: 500, color: 'rgba(0, 0, 0, 0.88)' }}>{sliderValue}</span>
        <span>{maxValue}</span>
      </div>
    </div>
  )
})

SliderComponent.displayName = 'A2UI.Slider'
