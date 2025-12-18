import React, { ReactNode } from 'react';
import Style from './style';
import { useProviderContext } from '../Provider';
import { ConfigProvider, Image } from 'antd';
import { Locale } from 'antd/es/locale';
import { SparkCheckCircleFill } from '@agentscope-ai/icons';
import Dot from '../Markdown/core/plugins/cursor/Dot';

export interface IImageGeneratorProps {
  /**
   * @description 生成图片的宽度，单位为像素
   * @descriptionEn Width of the generated image in pixels
   * @default 320
   */
  width?: number;
  /**
   * @description 生成图片的高度，单位为像素
   * @descriptionEn Height of the generated image in pixels
   * @default 320
   */
  height?: number;
  /**
   * @description 图片的URL地址，为空时显示加载状态
   * @descriptionEn URL address of the image, shows loading state when empty
   * @default ''
   */
  src?: string;
  /**
   * @description 图片生成过程中的提示文本
   * @descriptionEn Prompt text during image generation process
   * @default 'Painting...'
   */
  loadingText?: string;
  /**
   * @description 图片生成完成后的提示文本
   * @descriptionEn Prompt text after image generation is completed
   * @default 'Paint Completed'
   */
  doneText?: string;
  /**
   * @description 自定义骨架屏组件，用于加载状态显示
   * @descriptionEn Custom skeleton screen component for loading state display
   * @default null
   */
  skeleton?: ReactNode;
  /**
   * @description 自定义骨架屏组件的加载态提示
   * @descriptionEn Custom skeleton screen component prompt text
   * @default 'Painting...'
   */
  skeletonText?: string;

  /**
   * @description 是否为块级元素，使得图片宽高比为 width / height
   * @descriptionEn Whether to be a block element, make the image width / height ratio
   * @default false
   */
  block?: boolean;
}


const ImageGenerator: React.FC<IImageGeneratorProps> = (props) => {
  const { getPrefixCls } = useProviderContext();

  const prefixCls = getPrefixCls('image-generator');
  const { block, skeletonText, width = 320, height = 320, src, loadingText = 'Painting...', doneText = 'Paint Completed' } = props;

  const skeleton = props.skeleton || <div className={`${prefixCls}-default-skeleton`} style={{ width: '100%', height: '100%' }}>
    <div
      className={`${prefixCls}-default-skeleton-bg`}
    >
      <div className={`${prefixCls}-default-skeleton-bg-animate`} />
    </div>
    <div className={`${prefixCls}-default-skeleton-content`}>
      <img
        className={`${prefixCls}-default-skeleton-icon`}
        src="https://img.alicdn.com/imgextra/i2/O1CN01M1X8yM1MWUC7u3Go5_!!6000000001442-54-tps-72-72.apng"
      />
      {
        skeletonText && <div className={`${prefixCls}-default-skeleton-text`}>{skeletonText}</div>
      }

    </div>
  </div>;

  const loading = !src;

  const size: React.CSSProperties = block ? { aspectRatio: `${width}/${height}` } : { width, height };

  return <>
    <Style />
    <div className={prefixCls}>
      <div className={`${prefixCls}-text`}>
        {
          loading ? <Dot /> : <SparkCheckCircleFill className={`${prefixCls}-text-success`} />
        }
        {
          loading ? <span style={{ paddingLeft: 20 }}>{loadingText}</span> : doneText
        }
      </div>

      <div className={`${prefixCls}-wrapper`} style={size}>
        {
          loading ? skeleton : <ConfigProvider
            locale={{
              Image: { preview: '' }
            } as Locale}
          ><Image
              width={'100%'}
              height={'100%'}
              src={src}
            /></ConfigProvider>
        }
      </div>
    </div>
  </>
};


export default ImageGenerator;



