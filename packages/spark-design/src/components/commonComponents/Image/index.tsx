// @ts-nocheck
import $18n from '@/i18n';
import { getCommonConfig } from '@agentscope-ai/design/config';
import { SparkVisibleLine } from '@agentscope-ai/icons';
import { Image as AntdImage, ImageProps } from 'antd';
import { useMemo } from 'react';
import { useStyle } from './index.style';

const Image: React.FC<ImageProps> = function (props) {
  const Style = useStyle();

  const { antPrefix } = getCommonConfig();

  const preview = useMemo(() => {
    const basePreview = { transitionName: '' };
    const { preview } = props;
    if (preview === false) return false;
    if (preview === true) return basePreview;
    return {
      mask: (
        <div className={`${antPrefix}-image-mask-info`}>
          <SparkVisibleLine className={`${antPrefix}-image-mask-info-icon`} />
          <span className={`${antPrefix}-image-mask-info-text`}>
            {$18n.get({
              id: 'components.commonComponents.Image.Preview',
              dm: '预览',
            })}
          </span>
        </div>
      ),
      ...preview,
      ...basePreview,
    };
  }, [props.preview]);

  return (
    <>
      <Style />
      <AntdImage preview={preview} {...props} />
    </>
  );
};

export type { ImageProps };

// 定义接口避免TypeScript内部类型推断
interface ImageComponentType extends React.FC<ImageProps> {
  PreviewGroup: any;
}

// 使用接口和类型断言避免TS4023错误
const ImageComponent = Image as ImageComponentType;
ImageComponent.PreviewGroup = AntdImage.PreviewGroup;

export default ImageComponent;
