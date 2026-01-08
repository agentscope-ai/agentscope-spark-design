import { useProviderContext } from '../Provider';
import Style from './style';
import Container from './Container';
import cls from 'classnames';
import { IImage, IVideo, IAudio } from './types';
import Image from './Image';
import Video from './Video';
import Audio from './Audio';

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

  return <>
    <Style />
    <div className={cls(`${prefixCls}-assets-preview`, props.className)}>
      <Container height={props.height}>
        {
          props.data.map((item, index) => {
            return <Component key={index} {...item as any} />;
          })
        }
      </Container>
    </div>
  </>
}


export default AssetsPreview;