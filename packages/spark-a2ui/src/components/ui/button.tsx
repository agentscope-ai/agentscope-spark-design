import React from 'react';
import { Button as SparkButton } from '@agentscope-ai/design';

export const Button = (props: any) => {
  const { primary, ...restProps } = props;
  const type = primary ? 'primary' : restProps.type;
  return (
    <SparkButton  {...restProps} type={type} />
  )
}
export const buttonVariants = (data: any) => '';