import { getCommonConfig } from '@/config';
import { InputNumber, Slider } from '@agentscope-ai/design';
import cls from 'classnames';
import { useStyle } from './index.style';

export interface SliderSelectorProps {
  className?: string;
  onChange?: (val: number | null) => void;
  value?: number | null;
  min: number;
  max: number;
  step: number;
  marks?: any;
  gutter?: number;
  precision?: number;
  disabled?: boolean;
  onBlur?: () => void;
  inputNumberWrapperStyle?: React.CSSProperties;
}

export default function SliderSelector(props: SliderSelectorProps) {
  const { sparkPrefix } = getCommonConfig();
  const Style = useStyle();
  const onNumberChange = (val: number | string | null) => {
    /**InputNumber为受控组件，会导致min和max失效，所以需要手动处理 */
    const numVal = typeof val === 'string' ? parseFloat(val) : val;
    if (numVal === null || isNaN(numVal as number)) {
      props.onChange?.(null);
      return;
    }
    if (numVal < props.min) {
      props.onChange?.(props.min);
    } else if (numVal > props.max) {
      props.onChange?.(props.max);
    } else {
      props.onChange?.(numVal);
    }
  };
  return (
    <>
      <Style />
      <div
        onMouseUp={() => props.onBlur?.()}
        className={cls(`${sparkPrefix}-slider-selector`, props.className)}
      >
        <Slider
          disabled={props.disabled}
          onChange={onNumberChange}
          value={props.value === null ? undefined : props.value}
          min={props.min}
          max={props.max}
          step={props.step}
          marks={
            props.marks || { [props.min]: props.min, [props.max]: props.max }
          }
          tooltip={{ getPopupContainer: (triggerNode) => triggerNode }}
        />
        <div style={{ width: '48px', ...props.inputNumberWrapperStyle }}>
          <InputNumber
            disabled={props.disabled}
            controls={false}
            min={props.min}
            max={props.max}
            onBlur={() => props.onBlur?.()}
            step={props.step}
            value={props.value}
            onChange={onNumberChange}
            precision={props.precision}
          />
        </div>
      </div>
    </>
  );
}
