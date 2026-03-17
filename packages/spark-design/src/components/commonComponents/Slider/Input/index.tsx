import { getCommonConfig } from '@/config';
import { InputNumber, InputNumberProps } from 'antd';
import { SliderSingleProps } from 'antd/es/slider';
import classnames from 'classnames';
import { SparkSliderBasic } from '../index';
import { useStyle } from './index.style';
export type SliderInputProps = Omit<
  SliderSingleProps,
  'classNames' | 'styles' | 'className' | 'style'
> & {
  classNames?: {
    slider?: string;
    inputNumber?: string;
    wrapper?: string;
  };
  styles?: {
    slider?: React.CSSProperties;
    inputNumber?: React.CSSProperties;
    wrapper?: React.CSSProperties;
  };
  sliderProps?: SliderSingleProps;
  inputNumberProps?: InputNumberProps;
};

export default function SliderSelector(props: SliderInputProps) {
  const { sparkPrefix } = getCommonConfig();

  const { styles, classNames, sliderProps, inputNumberProps, ...restProps } =
    props;
  const Style = useStyle();
  const originalMarks = props.marks || props.sliderProps?.marks || null;
  const mergedMarks = originalMarks || {
    [props.min]: props.min,
    [props.max]: props.max,
  };
  const hasMarks = originalMarks && Object.keys(originalMarks)?.length > 0;
  const onNumberChange = (val: number | string | null) => {
    /**InputNumber为受控组件，会导致min和max失效，所以需要手动处理 */
    const numVal = typeof val === 'string' ? parseFloat(val) : val;
    if (numVal === null || isNaN(numVal as number)) {
      props.onChange(null);
      return;
    }
    if (numVal < props.min) {
      props.onChange(props.min);
    } else if (numVal > props.max) {
      props.onChange(props.max);
    } else {
      props.onChange(numVal);
    }
  };
  return (
    <>
      <Style />
      <div
        style={styles?.wrapper}
        className={classnames(
          `${sparkPrefix}-slider-input`,
          {
            [`${sparkPrefix}-slider-input-has-marks`]: hasMarks,
          },
          classNames?.wrapper,
        )}
        onMouseUp={() => {
          // @ts-ignore
          props.onBlur?.();
        }}
      >
        <SparkSliderBasic
          disabled={props.disabled}
          min={props.min}
          max={props.max}
          step={props.step}
          tooltip={{
            getPopupContainer: (triggerNode) => triggerNode,
          }}
          {...restProps}
          {...sliderProps}
          marks={mergedMarks}
          style={{
            ...styles?.slider,
            ...sliderProps?.style,
            width: '100%',
          }}
          className={classnames(classNames?.slider, sliderProps?.className)}
          onChange={onNumberChange}
          value={props.value === null ? undefined : props.value}
        />

        <InputNumber
          controls={false}
          step={props.step}
          min={props.min}
          max={props.max}
          disabled={props.disabled}
          {...inputNumberProps}
          onBlur={() => {
            // @ts-ignore
            props.onBlur?.();
          }}
          value={props.value}
          onChange={onNumberChange}
          style={{
            ...styles?.inputNumber,
            ...inputNumberProps?.style,
          }}
          className={classnames(
            classNames?.inputNumber,
            inputNumberProps?.className,
          )}
        />
      </div>
    </>
  );
}
