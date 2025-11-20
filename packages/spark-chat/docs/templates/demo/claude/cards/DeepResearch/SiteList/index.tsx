import React, { useMemo, useState } from 'react';
import { IUrl } from '../type';
import styles from './index.module.less';
import SiteItem from '../SiteItem';
import More from '../SiteItem/More';
import { Button } from '@agentscope-ai/design';
import { SparkUpLine } from '@agentscope-ai/icons';

interface IProps {
  list: IUrl[];
}

const SiteList: React.FC<IProps> = ({ list }) => {
  const [expand, setExpand] = useState(false);

  const [currentList, restCount] = useMemo(() => {
    if (list.length <= 8 || expand) {
      return [list, 0];
    }

    return [list.slice(0, 7), list.length - 7];
  }, [list, expand]);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {currentList.map((item) => (
          <SiteItem key={item.title} data={item} type="simple" />
        ))}
        {restCount > 0 && <More count={restCount} onClick={() => setExpand(true)} />}
      </div>
      {expand && (
        <Button
          size="small"
          type="textCompact"
          icon={<SparkUpLine />}
          onClick={() => setExpand(false)}
          className={styles.collapseButton}
        >
          Collapse
        </Button>
      )}
    </div>
  );
};

export default SiteList;
