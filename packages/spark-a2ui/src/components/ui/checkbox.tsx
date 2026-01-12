import * as React from 'react'
import { Checkbox as AntCheckbox, type CheckboxRef } from 'antd'
import type { CheckboxChangeEvent } from 'antd/es/checkbox'

import { cn } from '@/lib/utils'

export interface CheckboxProps
  extends Omit<React.ComponentProps<typeof AntCheckbox>, 'onChange'> {
  /** 兼容 radix-ui 的 onCheckedChange 回调 */
  onCheckedChange?: (checked: boolean) => void
  /** antd 原生的 onChange 回调 */
  onChange?: (e: CheckboxChangeEvent) => void
}

const Checkbox = React.forwardRef<CheckboxRef, CheckboxProps>(
  ({ className, onCheckedChange, onChange, ...props }, ref) => {
    const handleChange = (e: CheckboxChangeEvent) => {
      onChange?.(e)
      onCheckedChange?.(e.target.checked)
    }

    return (
      <AntCheckbox
        ref={ref}
        data-slot="checkbox"
        className={cn(className)}
        onChange={handleChange}
        {...props}
      />
    )
  }
)

Checkbox.displayName = 'Checkbox'

export { Checkbox }
