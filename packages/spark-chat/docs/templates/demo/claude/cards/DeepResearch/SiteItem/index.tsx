import React from 'react';
import { IUrl } from '../type';
import styles from './index.module.less';
import classNames from 'classnames';

interface ISiteItemProps {
  data: IUrl;
  type: 'detail' | 'simple';
}

const SiteItem: React.FC<ISiteItemProps> = ({ data, type = 'simple' }) => {
  return (
    <div
      className={classNames(styles.urlWrapper, styles[type])}
      onClick={() => {
        if (data.url) {
          window.open(data.url, '_blank');
        }
      }}
    >
      <div className={styles.url}>
        <div className={styles.icon}>
          {data.icon && <img src={data.icon} className={styles.iconImage} alt="" />}
        </div>
        <span className={styles.title}>{data.title}</span>
        <span className={styles.description}>{data.description}</span>
      </div>
    </div>
  );
};

export default SiteItem;
