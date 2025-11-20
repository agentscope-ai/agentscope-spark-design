import React, { useEffect, useRef } from 'react';
import { Markdown } from '@agentscope-ai/chat';
import { IStep } from '../type';
import styles from './index.module.less';
import SiteList from '../SiteList';
import classNames from 'classnames';

interface IProps {
  list: IStep[];
  viewIndex?: number;
}

const Process: React.FC<IProps> = (props) => {
  const { list } = props;
  const viewRefList = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    // if (props.viewIndex !== undefined) {
    //   viewRefList.current[props.viewIndex]?.scrollIntoView({ behavior: 'smooth' });
    // }
  }, [props.viewIndex]);

  return (
    <div className={styles.container}>
      {list.map((d, index) => (
        <div key={index} ref={(el) => (viewRefList.current[index] = el)}>
          {d.list?.map((item) => (
            <>
              <Markdown content={item.content} className={styles.content} />
              {Array.isArray(item.siteList) && item.siteList.length > 0 && (
                <div className={classNames(styles.siteList)}>
                  <div className={styles.siteListTitle}>Research websites</div>
                  <SiteList list={item.siteList} />
                </div>
              )}
            </>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Process;
