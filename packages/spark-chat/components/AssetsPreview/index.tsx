import { useProviderContext } from '../Provider';
import Style from './style';
import cls from 'classnames';
import { IImage, IVideo, IAudio } from './types';
import Image from './Image';
import Video from './Video';
import Audio from './Audio';
import { useCallback, useEffect, useRef, useState } from 'react';
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
  const Component = {
    image: Image,
    video: Video,
    audio: Audio,
  }[props.type];
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => { }, [props.data.length])
  const { height = 144 } = props;
  const [arrowTop, setArrowTop] = useState<number>(0);
  const [arrowShow, setArrowShow] = useState<'left' | 'right' | ''>('');
  const maxWidth = useRef<number>(0);


  const onScroll = useCallback((e) => {

    if (e.target.scrollLeft > 0) {
      setArrowShow('right');
    }

    if (e.target.scrollLeft >= maxWidth.current) {
      setArrowShow('left')
    }
  }, [])


  useEffect(() => {
    setArrowTop(height / 2 - 12 - 6);
  }, [height])


  useEffect(() => {
    if (ref.current) {
      maxWidth.current = ref.current.scrollWidth - ref.current.clientWidth;
      if (maxWidth.current > 0) {
        setArrowShow('right');
      } else {
      }
    }
  }, [])


  const toArrow = useCallback((direct: 'left' | 'right') => {
    const width = ref.current.clientWidth / props.data.length;
    ref.current.scrollLeft = ref.current.scrollLeft + width * (direct === 'left' ? -1 : 1)
  }, [props.data])


  return <>
    <Style />
    <div className={cls(`${prefixCls}`, props.className)}>
      <div className={cls(`${prefixCls}-container`, props.className)} style={{ height }} onScroll={onScroll} ref={ref}>
        {
          props.data.map((item, index) => {
            return <Component key={index} {...item as any} />;
          })
        }
      </div>
      <div className={cls(`${prefixCls}-left-edge`)} />
      <div className={cls(`${prefixCls}-right-edge`)} />


      {
        arrowTop ? <>
          {
            arrowShow === 'left' && <IconButton onClick={() => toArrow('left')} style={{ top: arrowTop }} className={cls(`${prefixCls}-left-arrow`, `${prefixCls}-arrow`)} size="small" shape='circle' icon={<SparkLeftLine />}></IconButton>
          }

          {
            arrowShow === 'right' && <IconButton onClick={() => toArrow('right')} style={{ top: arrowTop }} className={cls(`${prefixCls}-right-arrow`, `${prefixCls}-arrow`)} size="small" shape='circle' icon={<SparkRightLine />}></IconButton>
          }

        </> : null
      }

    </div>
  </>
}


export default AssetsPreview;