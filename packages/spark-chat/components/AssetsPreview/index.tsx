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
  data: (IImage | IVideo | IAudio)[];

}

function AssetsPreview(props: IAssetsPreviewProps) {
  const prefixCls = useProviderContext().getPrefixCls('assets-preview');

  return <>
    <Style />
    <div className={cls(`${prefixCls}-assets-preview`, props.className)}>
      <Container height={props.height}>
        {
          props.data.map((item) => {
            if (item.type === 'image') {
              return <Image key={item.src} {...item} />;
            } else if (item.type === 'video') {
              return <Video key={item.src} {...item} />;
            } else if (item.type === 'audio') {
              return <Audio key={item.src} {...item} />;
            }
          })
        }
      </Container>
    </div>
  </>
}



export default AssetsPreview;