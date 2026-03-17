import { getCommonConfig } from '@/config';
import { Steps, StepsProps } from 'antd';
import classNames from 'classnames';
import { useStyle } from './index.style';

const SparkSteps = (props: StepsProps) => {
  const { sparkPrefix } = getCommonConfig();
  const Style = useStyle();

  return (
    <>
      <Style />
      <Steps
        {...props}
        className={classNames(`${sparkPrefix}-steps`, props.className)}
      />
    </>
  );
};

export default SparkSteps;
