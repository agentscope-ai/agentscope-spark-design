import React from 'react';
import { Markdown } from '@agentscope-ai/chat';
import { IResult } from '../type';
import styles from './index.module.less';

interface IProps {
  data: IResult;
}

const Result: React.FC<IProps> = (props) => {
  const { data } = props;
  return <Markdown content={data.content} className={styles.container} />
};

export default Result;
