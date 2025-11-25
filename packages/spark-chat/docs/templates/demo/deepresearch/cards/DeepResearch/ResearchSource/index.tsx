import React from 'react';
import { IUrl } from '../type';
import styles from './index.module.less';
import SiteDetailList from '../SiteList/Detail';

interface IProps {
  list: IUrl[];
}

const ResearchSource: React.FC<IProps> = (props) => {
  const { list } = props;
  return (
    <div className={styles.container}>
      <div className={styles.title}>Searched {list.length} web pages</div>
      <div className={styles.content}>
        <SiteDetailList list={list} />
      </div>
    </div>
  );
};

export default ResearchSource;
