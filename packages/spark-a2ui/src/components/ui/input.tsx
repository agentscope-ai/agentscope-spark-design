import * as React from 'react'
import { Input as AntInput, type InputRef } from 'antd'
import type { InputProps as AntInputProps } from 'antd'

export type InputProps = AntInputProps

const Input = React.forwardRef<InputRef, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <AntInput
        ref={ref}
        type={type}
        data-slot="input"
        className={className}
        {...props}
      />
    )
  }
)

Input.displayName = 'Input'

export { Input }
