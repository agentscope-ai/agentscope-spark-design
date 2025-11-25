import React from 'react';
import { Steps } from 'antd';
import { IStep } from '../type';
import styles from './index.module.less';
import { Tooltip } from '@agentscope-ai/design';
import { SparkCheckCircleLine, SparkLoadingLine } from '@agentscope-ai/icons';

interface StepsProps {
  // 步骤列表
  list?: IStep[];
  onStepClick?: (index: number) => void;
}

const StepsList: React.FC<StepsProps> = ({ list = [], onStepClick }) => {
  return (
    <div className={styles.stepsContainer}>
      <Steps
        direction="vertical"
        size="small"
        items={list.map((step, index) => ({
          title: <Tooltip title={step.title}>{step.title}</Tooltip>,
          status:
            step.status === 'RUNNING' ? 'process' : step.status === 'FINISHED' ? 'finish' : 'wait',
          icon: step.status === 'RUNNING' ? <SparkLoadingLine className={styles.loading} /> : <SparkCheckCircleLine />,
          onClick: () => {
            // onStepClick?.(index);
          },
        }))}
      />
    </div>
  );
};

export default StepsList;
