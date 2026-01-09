import { useProviderContext } from '../Provider';
import Style from './style';
import cls from 'classnames';
import { IImage, IVideo, IAudio } from './types';
import Image from './Image';
import Video from './Video';
import Audio from './Audio';
import { useCallback, useDeferredValue, useEffect, useRef, useState } from 'react';
import { SparkLeftLine, SparkRightLine } from '@agentscope-ai/icons';
import { IconButton } from '@agentscope-ai/design';

export interface IAssetsPreviewProps {
  className?: string;
  classNames?: {
    container?: string;
  };
  height?: number;
  type: 'image' | 'video' | 'audio';
  data: (IImage | IVideo | IAudio)[];
}

function AssetsPreview(props: IAssetsPreviewProps) {
  const prefixCls = useProviderContext().getPrefixCls('assets-preview');
  const ref = useRef<HTMLDivElement>(null);
  const { height = 144 } = props;
  const [arrowTop, setArrowTop] = useState<number>(0);
  const maxWidth = useRef<number>(0);
  const [scrollLeft, setScrollLeft] = useState<number>(0);
  const deferScrollLeft = useDeferredValue(scrollLeft);

  const onScroll = useCallback((e) => {
    setScrollLeft(e.target.scrollLeft);
  }, [])

  useEffect(() => {
    setArrowTop(height / 2 - 12 - 6);
  }, [height])

  useEffect(() => {
    if (ref.current && props.type !== 'audio') {
      maxWidth.current = ref.current.scrollWidth - ref.current.clientWidth;
    }
  }, [])


  const toArrow = useCallback((direct: 'left' | 'right') => {
    const width = ref.current.scrollWidth / props.data.length;
    ref.current.scrollLeft = ref.current.scrollLeft + width * (direct === 'left' ? -1 : 1)
  }, [props.data])

  const Component = {
    image: Image,
    video: Video,
    audio: Audio,
  }[props.type];

  return <>
    <Style />
    <div className={cls(`${prefixCls}`, props.className)}>
      <div className={cls(`${prefixCls}-container`, props.className)} style={props.type !== 'audio' ? { height } : {
        flexDirection: 'column'
      }} onScroll={onScroll} ref={ref}>
        {
          props.data.map((item, index) => {
            return <Component key={index} {...item as any} />;
          })
        }
      </div>

      {
        arrowTop && props.type !== 'audio' ? <>
          {
            deferScrollLeft > 50 && <>
              <div className={cls(`${prefixCls}-left-edge`)} />
              <IconButton onClick={() => toArrow('left')} style={{ top: arrowTop }} className={cls(`${prefixCls}-left-arrow`, `${prefixCls}-arrow`)} size="small" shape='circle' icon={<SparkLeftLine />}></IconButton>
            </>
          }

          {
            deferScrollLeft < maxWidth.current - 50 && <>
              <div className={cls(`${prefixCls}-right-edge`)} />
              <IconButton onClick={() => toArrow('right')} style={{ top: arrowTop }} className={cls(`${prefixCls}-right-arrow`, `${prefixCls}-arrow`)} size="small" shape='circle' icon={<SparkRightLine />}></IconButton>
            </>
          }

        </> : null
      }

    </div>
  </>
}


export default AssetsPreview;