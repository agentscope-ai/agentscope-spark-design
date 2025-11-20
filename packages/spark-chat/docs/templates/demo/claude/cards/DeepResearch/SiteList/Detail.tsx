import React from 'react';
import { IUrl } from '../type';
import styles from './Detail.module.less';
import SiteItem from '../SiteItem';

interface IProps {
  list: IUrl[];
}

const SiteDetailList: React.FC<IProps> = ({ list }) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {list.map((item) => (
          <SiteItem key={item.title} data={item} type="detail" />
        ))}
      </div>
    </div>
  );
};

export default SiteDetailList;
