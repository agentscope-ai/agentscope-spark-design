import * as React from 'react'
import { Input as AntInput, type InputRef } from 'antd'
import type { InputProps as AntInputProps } from 'antd'

import { cn } from '@/lib/utils'

export type InputProps = AntInputProps

const Input = React.forwardRef<InputRef, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <AntInput
        ref={ref}
        type={type}
        data-slot="input"
        className={cn(className)}
        {...props}
      />
    )
  }
)

Input.displayName = 'Input'

export { Input }
