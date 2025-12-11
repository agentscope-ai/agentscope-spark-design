import { getCommonConfig } from '@/config';
import { SparkTrueLine } from '@agentscope-ai/icons';
import { Steps, StepsProps } from 'antd';
import classNames from 'classnames';
import { useMemo } from 'react';
import { useStyle } from './index.style';

const SparkSteps = (props: StepsProps) => {
  const { sparkPrefix } = getCommonConfig();
  const Style = useStyle();

  const items = useMemo(() => {
    if (!props.items) return undefined;

    return props.items.map((item, index) => {
      // 计算当前步骤的实际状态（与 Ant Design 保持一致）
      let actualStatus = item.status;
      if (!actualStatus && props.current !== undefined) {
        if (index < props.current) {
          actualStatus = 'finish';
        } else if (index === props.current) {
          actualStatus = 'process';
        } else {
          actualStatus = 'wait';
        }
      }

      // 只替换 finish 状态的图标
      if (actualStatus === 'finish') {
        return {
          ...item,
          icon: <SparkTrueLine className={`${sparkPrefix}-finish-icon`} />,
        };
      }

      return item;
    });
  }, [props.items, props.current]);

  return (
    <>
      <Style />
      <Steps
        {...props}
        items={items}
        className={classNames(`${sparkPrefix}-steps`, props.className)}
      />
    </>
  );
};

export default SparkSteps;
