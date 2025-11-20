import React from 'react';
import styles from './index.module.less';
import { SparkLinkLine, SparkRightLine } from '@agentscope-ai/icons';

interface IProps {
  count: number;
  onClick: () => void;
}

const More: React.FC<IProps> = ({ count, onClick }) => {
  return (
    <div className={styles.moreWrapper} onClick={onClick}>
      <div className={styles.more}>
        <SparkLinkLine className={styles.linkIcon} />
        <span className={styles.title}>Read More ({count})</span>
      </div>
      <SparkRightLine className={styles.rightIcon} />
    </div>
  );
};

export default More;
