import React, { useMemo, useState } from 'react';
import { IData, IParseData } from './type';
import styles from './index.module.less';
import ChatHeader from './Header/Chat';
import StepsList from './Steps';
import Process from './Process';
import classNames from 'classnames';
import Preview from './Preview';
import ReactDOM from 'react-dom';
import useFullscreen from '../../hooks/useFullscreen';

interface IProps {
  data: IData;
}

const DeepResearch: React.FC<IProps> = (props) => {
  const [preview, setPreview] = useFullscreen();
  const [viewIndex, setViewIndex] = useState(0);

  const cardCreateTime = useMemo(() => {
    return Date.now();
  }, []);

  const data: IParseData = useMemo(() => {
    const { steps = [], result, ...rest } = props.data?.data || {};

    return {
      steps: steps.map((step) => {
        return {
          ...step,
          startTime: parseInt(step.startTime || `0`),
          endTime: parseInt(step.endTime || `0`),
        };
      }),
      result: {
        ...result,
        startTime: parseInt(result?.startTime || `0`),
        endTime: parseInt(result?.endTime || `0`),
      },
      ...rest,
    };
  }, [props.data?.data]);

  const startTime = useMemo(() => {
    const time = Math.min(
      data.steps.reduce((acc, step) => {
        return Math.min(acc, step.startTime);
      }, Number.MAX_SAFE_INTEGER),
      data.result.startTime || Number.MAX_SAFE_INTEGER,
    );

    return time === Number.MAX_SAFE_INTEGER ? cardCreateTime : time;
  }, [data.steps, data.result, cardCreateTime]);

  const finished = useMemo(() => {
    return props.data.msgStatus === 'finished';
  }, [props.data.msgStatus]);

  return (
    <div
      className={classNames(styles.container, {
        [styles.thumbnail]: preview,
      })}
    >
      <ChatHeader
        className={styles.header}
        title={data.title}
        startTime={startTime}
        data={data}
        finished={finished}
        thumbnail={preview}
        onFullscreen={() => setPreview(true)}
      />
      <div className={styles.content}>
        <div className={styles.list}>
          <StepsList list={data.steps} onStepClick={setViewIndex} />
        </div>
        <div className={styles.view}>
          <Process list={data.steps} viewIndex={viewIndex} />
        </div>
      </div>
      {
        preview && ReactDOM.createPortal(<Preview data={data} />, document.getElementById('right-panel'))
      }
    </div>
  );
};

export default DeepResearch;
