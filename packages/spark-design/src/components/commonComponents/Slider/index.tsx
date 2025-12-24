import { getCommonConfig } from '@agentscope-ai/design';
import { Slider } from 'antd';
import { SliderRangeProps, SliderSingleProps } from 'antd/es/slider';
import classNames from 'classnames';
import { SliderRef } from 'rc-slider';
import React from 'react';
import { useStyle } from './index.style';
import SliderInput from './Input';

type CompoundedComponent = React.ForwardRefExoticComponent<
  (SliderSingleProps | SliderRangeProps) & React.RefAttributes<SliderRef>
> & {
  Input: typeof SliderInput;
};

export const SparkSliderBasic = React.forwardRef<
  SliderRef,
  SliderSingleProps | SliderRangeProps
>((props, ref) => {
  const { sparkPrefix, antPrefix } = getCommonConfig();
  const Style = useStyle();

  return (
    <>
      <Style />
      <Slider
        {...props}
        className={classNames(
          `${sparkPrefix}-slider`,
          {
            [`${sparkPrefix}-slider-no-marks`]: !Object.keys(props.marks || {})
              .length,
            [`${antPrefix}-slider-reverse`]: props.reverse,
          },
          props.className,
        )}
        ref={ref}
      />
    </>
  );
});

const SparkSlider = SparkSliderBasic as CompoundedComponent;
Object.assign(SparkSlider, {
  Input: SliderInput,
});

export default SparkSlider;
export type { SliderInputProps } from './Input';
