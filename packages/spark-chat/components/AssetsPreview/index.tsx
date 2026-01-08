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
import { useDebounce } from 'ahooks';

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
  const ref = useRef();

  useEffect(() => { }, [props.data.length])
  const { height = 144 } = props;
  const [value, setValue] = useState<string>();
  const debouncedValue = useDebounce(value, { wait: 500 });


  const onScroll = useCallback((e) => {
    console.log(e.target.scrollLeft, e.target.scrollWidth - e.target.clientWidth);
  }, [])


  return <>
    <Style />
    <div className={cls(`${prefixCls}`, props.className)}>
      <div className={cls(`${prefixCls}-container`, props.className)} style={{ height }} onScroll={onScroll}>
        {
          props.data.map((item, index) => {
            return <Component key={index} {...item as any} />;
          })
        }
      </div>
      <div className={cls(`${prefixCls}-left-edge`)} />
      <div className={cls(`${prefixCls}-right-edge`)} />
      <IconButton className={cls(`${prefixCls}-left-arrow`, `${prefixCls}-arrow`)} size="small" shape='circle' icon={<SparkLeftLine />}></IconButton>
      <IconButton className={cls(`${prefixCls}-right-arrow`, `${prefixCls}-arrow`)} size="small" shape='circle' icon={<SparkRightLine />}></IconButton>
    </div>
  </>
}


export default AssetsPreview;