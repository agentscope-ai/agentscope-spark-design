import { getCommonConfig } from '@/config';
import { Flex } from 'antd';
import { useMemo } from 'react';
import Button, { SparkButtonProps } from '../Button';
import { useStyle } from './index.style';
import Illustrate from './svg/Illustrate';

export interface SparkEmptyProps {
  /**
   * @description 空状态类型
   * @descriptionEn type of the empty
   * @default 'noData'
   */
  type?:
    | 'noData'
    | 'networkError'
    | '404'
    | 'arrears'
    | 'desktopOnly'
    | 'noAudio'
    | 'noImage'
    | 'noVideo'
    | 'noAccess'
    | 'error'
    | 'noModel'
    | 'noApp'
    | 'success'
    | 'failed'
    | 'inProgress'
    | 'stayTuned';
  /**
   * @description 是否显示纹理
   * @descriptionEn whether to show texture
   * @default true
   */
  texture?: boolean;
  /**
   * @description 图片地址
   * @descriptionEn image url
   * @default 默认是no data的图片
   */
  image?: string;
  /**
   * @description 图片样式
   * @descriptionEn image style
   */
  imageStyle?: React.CSSProperties;
  /**
   * @description 标题内容
   * @descriptionEn title content
   */
  title?: React.ReactNode;
  /**
   * @description 自定义描述内容
   * @descriptionEn custom description content
   */
  description?: React.ReactNode;
  /**
   * @description ok按钮的点击事件
   * @descriptionEn ok button click event
   */
  onOk?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  /**
   * @description ok按钮的文本
   * @descriptionEn ok button text
   */
  okText?: React.ReactNode;
  /**
   * @description ok按钮的类型
   * @descriptionEn ok button type
   * @default 'primary'
   */
  okType?: SparkButtonProps['type'];
  /**
   * @description ok按钮的props
   * @descriptionEn ok button props
   */
  okButtonProps?: SparkButtonProps;
  /**
   * @description 自定义空状态的内容
   * @descriptionEn custom empty content
   */
  children?: React.ReactNode;
  /**
   * @description 自定义空状态的类名
   * @descriptionEn custom empty class name
   */
  className?: string;
  /**
   * @description 自定义空状态的样式
   * @descriptionEn custom empty style
   */
  style?: React.CSSProperties;
  /**
   * @description 自定义空状态的大小
   * @descriptionEn custom empty size
   */
  size?: React.CSSProperties['width'];
  /**
   * @description 是否自适应容器宽度，当容器宽度小于 size 时自动缩放
   * @descriptionEn whether to auto fit the container width, auto scale when container width is less than size
   * @default false
   */
  autoFit?: boolean;
}

const TEXTURE_MAP = {
  url: 'https://gw.alicdn.com/imgextra/i3/O1CN01r3f3Si24iFTRz9Bho_!!6000000007424-55-tps-320-320.svg',
  tokenMap: {
    '#CDD0DC': 'color-border',
  },
};

const IMAGE_MAP = {
  noData: {
    url: 'https://gw.alicdn.com/imgextra/i2/O1CN01mWN5tE1MAxb2z7LwA_!!6000000001395-55-tps-108-108.svg',
    tokenMap: {
      '#E6E8EE': 'color-border-secondary',
      '#BCB5FF': 'color-primary-border-hover',
      '#FFFFFF': 'color-bg-base',
      '#615CED': 'color-primary',
      '#1ACDD0DC': 'color-fill-quaternary',
      '#CDD0DC': 'color-border',
    },
  },
  networkError: {
    url: 'https://gw.alicdn.com/imgextra/i2/O1CN01su6GHG1RupL5K5TOQ_!!6000000002172-55-tps-108-108.svg',
    tokenMap: {
      '#CDD0DC': 'color-border',
      '#FFFFFF': 'color-bg-base',
      '#615CED': 'color-primary',
    },
  },
  '404': {
    url: 'https://gw.alicdn.com/imgextra/i4/O1CN01GE0jXZ1xpqjvMjCZh_!!6000000006493-55-tps-108-108.svg',
    tokenMap: {
      '#E6E8EE': 'color-border-secondary',
      '#26CDD0DC': 'color-fill-tertiary',
      '#CDD0DC': 'color-border',
      '#F3F0FF': 'color-primary-bg',
      '#FFFFFF': 'color-bg-base',
      '#615CED': 'color-primary',
    },
  },
  arrears: {
    url: 'https://gw.alicdn.com/imgextra/i3/O1CN01xN8uYv1Dz2MLvrFAF_!!6000000000286-55-tps-108-108.svg',
    tokenMap: {
      '#CDD0DC': 'color-border',
      '#FFFFFF': 'color-bg-base',
      '#F3F0FF': 'color-primary-bg',
      '#615CED': 'color-primary',
    },
  },
  desktopOnly: {
    url: 'https://gw.alicdn.com/imgextra/i2/O1CN01ZzNku41rshVhRVh9x_!!6000000005687-55-tps-108-108.svg',
    tokenMap: {
      '#E6E8EE': 'color-border-secondary',
      '#CDD0DC': 'color-border',
      '#FFFFFF': 'color-bg-base',
      '#615CED': 'color-primary',
    },
  },
  noAudio: {
    url: 'https://gw.alicdn.com/imgextra/i2/O1CN01fTQ6vi1GXxnIrmizf_!!6000000000633-55-tps-108-108.svg',
    tokenMap: {
      '#FFFFFF': 'color-bg-base',
      '#CDD0DC': 'color-border',
      '#26CDD0DC': 'color-fill-tertiary',
      '#615CED': 'color-primary',
      '#E6E8EE': 'color-border-secondary',
    },
  },
  noImage: {
    url: 'https://gw.alicdn.com/imgextra/i4/O1CN01zQAH9A1oJUD9XDtmi_!!6000000005204-55-tps-108-108.svg',
    tokenMap: {
      '#FFFFFF': 'color-bg-base',
      '#CDD0DC': 'color-border',
      '#26CDD0DC': 'color-fill-tertiary',
      '#E6E8EE': 'color-border-secondary',
      '#615CED': 'color-primary',
    },
  },
  noVideo: {
    url: 'https://gw.alicdn.com/imgextra/i1/O1CN01kqss5i1JuoOrJ8fNV_!!6000000001089-55-tps-108-108.svg',
    tokenMap: {
      '#FFFFFF': 'color-bg-base',
      '#CDD0DC': 'color-border',
      '#26CDD0DC': 'color-fill-tertiary',
      '#E6E8EE': 'color-border-secondary',
      '#615CED': 'color-primary',
    },
  },
  noAccess: {
    url: 'https://gw.alicdn.com/imgextra/i3/O1CN01RwpRz91oGHREFlmdY_!!6000000005197-55-tps-108-108.svg',
    tokenMap: {
      '#FFFFFF': 'color-bg-base',
      '#CDD0DC': 'color-border',
      '#615CED': 'color-primary',
    },
  },
  error: {
    url: 'https://gw.alicdn.com/imgextra/i1/O1CN01TlQR4c1L3nn4DkG2z_!!6000000001244-55-tps-108-108.svg',
    tokenMap: {
      '#FFFFFF': 'color-bg-base',
      '#CDD0DC': 'color-border',
      '#E6E8EE': 'color-border-secondary',
      '#615CED': 'color-primary',
    },
  },
  noModel: {
    url: 'https://gw.alicdn.com/imgextra/i2/O1CN01BSPmLi1iaXGByjbne_!!6000000004429-55-tps-108-108.svg',
    tokenMap: {
      '#FFFFFF': 'color-bg-base',
      '#CDD0DC': 'color-border',
      '#26CDD0DC': 'color-fill-tertiary',
      '#5CCDD0DC': 'color-fill',
      '#615CED': 'color-primary',
    },
  },
  noApp: {
    url: 'https://gw.alicdn.com/imgextra/i3/O1CN01stSIP31fzmEtpppWc_!!6000000004078-55-tps-108-108.svg',
    tokenMap: {
      '#E6E8EE': 'color-border-secondary',
      '#FFFFFF': 'color-bg-base',
      '#CDD0DC': 'color-border',
      '#33CDD0DC': 'color-fill-secondary',
      '#615CED': 'color-primary',
    },
  },
  success: {
    url: 'https://gw.alicdn.com/imgextra/i3/O1CN01sGzZ5B1Bx5RQAjUe5_!!6000000000011-55-tps-108-108.svg',
    tokenMap: {
      '#FFFFFF': 'color-bg-base',
      '#E6E8EE': 'color-border-secondary',
      '#CDD0DC': 'color-border',
      '#5BB98B': 'color-success',
      '#615CED': 'color-primary',
      '#26CDD0DC': 'color-fill-tertiary',
      '#33CDD0DC': 'color-fill-secondary',
      '#1aCDD0DC': 'color-fill-quaternary',
    },
  },
  failed: {
    url: 'https://gw.alicdn.com/imgextra/i4/O1CN01Fd1Gmx1QNYxQ8hj0H_!!6000000001964-55-tps-108-108.svg',
    tokenMap: {
      '#FFFFFF': 'color-bg-base',
      '#E6E8EE': 'color-border-secondary',
      '#CDD0DC': 'color-border',
      '#FF7875': 'color-error-hover',
      '#615CED': 'color-primary',
      '#26CDD0DC': 'color-fill-tertiary',
      '#33CDD0DC': 'color-fill-secondary',
      '#1aCDD0DC': 'color-fill-quaternary',
    },
  },
  inProgress: {
    url: 'https://gw.alicdn.com/imgextra/i4/O1CN01w2RXic1LADKqVxH56_!!6000000001258-55-tps-108-108.svg',
    tokenMap: {
      '#FFFFFF': 'color-bg-base',
      '#E6E8EE': 'color-border-secondary',
      '#CDD0DC': 'color-border',
      '#9189FA': 'color-primary-hover',
      '#615CED': 'color-primary',
      '#26CDD0DC': 'color-fill-tertiary',
      '#33CDD0DC': 'color-fill-secondary',
      '#1aCDD0DC': 'color-fill-quaternary',
    },
  },
  stayTuned: {
    url: 'https://gw.alicdn.com/imgextra/i4/O1CN01W2Kbyc26dmqmatyoB_!!6000000007685-55-tps-108-108.svg',
    tokenMap: {
      '#FFFFFF': 'color-bg-base',
      '#CDD0DC': 'color-border',
      '#615CED': 'color-primary',
    },
  },
};

const Empty = (props: SparkEmptyProps) => {
  const {
    imageStyle,
    title,
    description = 'No Data',
    children,
    texture = true,
    size = 320,
    autoFit = true,
    okText,
    okType = 'primary',
    okButtonProps,
    onOk,
  } = props;
  const type = props.type || 'noData';
  const commonConfig = getCommonConfig();
  const { sparkPrefix, isDarkMode, antPrefix } = commonConfig;
  const image = props.image || IMAGE_MAP[type].url;

  const tokenMap = useMemo(() => {
    const tokenMap = { ...IMAGE_MAP[type]?.tokenMap };

    if (tokenMap) {
      Object.keys(tokenMap).forEach((key) => {
        tokenMap[key] = `var(--${antPrefix}-${tokenMap[key]})`;
      });
    }

    return tokenMap;
  }, [type]);

  const textureTokenMap = useMemo(() => {
    const tokenMap = { ...TEXTURE_MAP.tokenMap };
    Object.keys(tokenMap).forEach((key) => {
      tokenMap[key] = `var(--${antPrefix}-${tokenMap[key]})`;
    });

    return tokenMap;
  }, [isDarkMode]);

  const Style = useStyle();

  const parsedSize =
    typeof size === 'string' ? parseFloat(size.replace(/px/i, '')) : size ?? 0;

  /** 自适应容器样式 */
  const autoFitStyle: React.CSSProperties = autoFit
    ? {
        maxWidth: '100%',
        aspectRatio: '1 / 1',
        width: size,
        height: 'auto',
      }
    : {
        width: size,
        height: size,
      };

  return (
    <>
      <Style />
      <div
        className={`${sparkPrefix}-empty ${props.className || ''}`}
        style={{ ...autoFitStyle, ...imageStyle }}
      >
        {texture && (
          <Illustrate
            size={autoFit ? '100%' : size}
            svgUrl={TEXTURE_MAP.url}
            tokenMap={textureTokenMap}
            className={`${sparkPrefix}-empty-texture`}
          />
        )}
        <Illustrate
          size={autoFit ? '100%' : size}
          svgUrl={image}
          tokenMap={tokenMap}
          className={`${sparkPrefix}-empty-image`}
        />
        <Flex vertical align="center" style={{ marginTop: '52.5%' }}>
          {title && (
            <div
              className={`${sparkPrefix}-empty-title`}
              style={{ marginBottom: description ? 0.025 * parsedSize : 0 }}
            >
              {title}
            </div>
          )}
          {description && (
            <div className={`${sparkPrefix}-empty-description`}>
              {description}
            </div>
          )}
          {!!okText && (
            <div style={{ marginTop: 0.05 * parsedSize }}>
              <Button type={okType} onClick={onOk} {...okButtonProps}>
                {okText}
              </Button>
            </div>
          )}
          {!!children && (
            <div style={{ marginTop: 0.05 * parsedSize }}>{children}</div>
          )}
        </Flex>
      </div>
    </>
  );
};

export default Empty;
