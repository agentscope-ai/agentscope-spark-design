import React, { useEffect, useState } from 'react';
import { IconFont, IconButton } from '@agentscope-ai/design';
import styles from './Chat.module.less';
import { formatDuration } from '../lib/time';
import { IParseData } from '../type';
import classNames from 'classnames';
import { SparkPaperLine } from '@agentscope-ai/icons';

interface IProps {
  /**
   * 开始时间
   */
  startTime: number;
  /**
   * 数据
   */
  data: IParseData;
  /**
   * 标题
   */
  title: string;
  /**
   * 缩略模式
   */
  thumbnail: boolean;
  /**
   * 是否完成
   */
  finished: boolean;
  /**
   * 全屏
   */
  onFullscreen: () => void;
  /**
   * 自定义样式
   */
  className?: string;
}

const ChatHeader: React.FC<IProps> = (props) => {
  const { title, startTime, data, thumbnail, finished, onFullscreen, className } = props;
  const [endTime, setEndTime] = useState(finished ? data.result?.endTime : Date.now());

  useEffect(() => {
    let clock;

    if (!finished) {
      clock = setInterval(() => {
        setEndTime(Date.now());
      }, 1000);
    } else {
      setEndTime(data.result.endTime);
    }

    return () => {
      clearInterval(clock);
    };
  }, [finished]);

  const durationText = formatDuration(startTime, endTime);

  return (
    <div
      className={classNames(styles.container, className, {
        [styles.thumbnail]: thumbnail,
      })}
    >
      <div className={styles.leftContent}>
        <SparkPaperLine style={{ fontSize: 20 }} />
        <span className={styles.title}>{title}</span>
      </div>
      <div className={styles.rightContent}>
        <span className={styles.duration}>{durationText}</span>
        <IconButton
          className={styles.fullscreenBtn}
          iconType="spark-fullscreen-line"
          onClick={onFullscreen}
          bordered={false}
        />
      </div>
    </div>
  );
};

export default ChatHeader;
