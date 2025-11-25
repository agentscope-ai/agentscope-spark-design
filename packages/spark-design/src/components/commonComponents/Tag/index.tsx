import { getCommonConfig } from '@/config';
import { Tag, TagProps } from 'antd';
import classNames from 'classnames';
import { forwardRef } from 'react';
import { useStyle } from './index.style';

enum SparkTagColors {
  Purple = 'purple',
  Pink = 'pink',
  Yellow = 'yellow',
  Teal = 'teal',
  Blue = 'blue',
  Mauve = 'mauve',
  Transparent = 'transparent',
  Success = 'success',
  Error = 'error',
  Warning = 'warning',
  Info = 'info',
}

export interface SparkTagProps extends TagProps {
  /**
   * @description 尺寸
   * @descriptionEn size of the tag
   * @default 'middle'
   */
  size?: 'small' | 'middle';
  /**
   * @description 标签色
   * @descriptionEn color of the tag
   * @default 'purple'
   */
  color?: SparkTagColors | string;
}

const SparkTag = forwardRef<any, SparkTagProps>((props, ref) => {
  const {
    children,
    className,
    bordered = false,
    color = 'mauve',
    size = 'middle',
    ...restProps
  } = props;
  const Style = useStyle();
  const commonConfig = getCommonConfig();
  const { sparkPrefix } = commonConfig;
  const isSparkTagColor = Object.values(SparkTagColors).includes(
    color as SparkTagColors,
  );

  return (
    <>
      <Style />
      <Tag
        className={classNames(
          `${sparkPrefix}-tag ${sparkPrefix}-tag-${color} ${sparkPrefix}-tag-${size}`,
          className,
        )}
        bordered={bordered}
        color={isSparkTagColor ? undefined : color}
        {...restProps}
        ref={ref}
      >
        {children}
      </Tag>
    </>
  );
});

export default SparkTag;
