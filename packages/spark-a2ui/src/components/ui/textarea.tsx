import * as React from 'react'
import { Input as AntInput, type InputRef } from 'antd'

const Textarea = React.forwardRef<InputRef, any>(
  ({ className, type, ...props }, ref) => {
    return (
      <AntInput.TextArea
        ref={ref}
        data-slot="textarea"
        className={className}
        {...props}
      />
    )
  }
)

Textarea.displayName = 'Textarea'

export { Textarea }
