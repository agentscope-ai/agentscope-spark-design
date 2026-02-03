import { getCommonConfig } from '@/config';
import { findClosestBySelector } from '@/libs/dom';
import { Tooltip, TooltipProps } from 'antd';
import classNames from 'classnames';
import { forwardRef } from 'react';
import { useStyle } from './index.style';

export interface SparkTooltipProps {
  /**
   * @description 颜色模式
   * @descriptionEn color mode
   * @default 'dark'
   */
  mode?: 'dark' | 'light';
  /**
   * @description 最大高度
   * @descriptionEn max height
   * @default '60vh'
   */
  maxHeight?: number | string;
}

const SparkTooltip = forwardRef<any, SparkTooltipProps & TooltipProps>(
  (props, ref) => {
    const Style = useStyle();
    const {
      mode = 'dark',
      maxHeight = '60vh',
      styles,
      arrow,
      overlayClassName,
      getPopupContainer,
      align,
      ...restProps
    } = props;
    const { sparkPrefix, antPrefix } = getCommonConfig();

    // 处理 styles 可能是函数的情况
    const stylesObj = typeof styles === 'function' ? {} : (styles ?? {});
    const mergedStyles = {
      ...stylesObj,
      container: {
        overflow: 'auto' as const,
        ...stylesObj.container,
        maxHeight, // maxHeight 放最后，确保优先级最高
      },
    };

    return (
      <>
        <Style />
        <Tooltip
          {...restProps}
          styles={mergedStyles}
          arrow={arrow ?? false}
          overlayClassName={classNames(
            overlayClassName,
            mode === 'light' && `${sparkPrefix}-tooltip-light`,
          )}
          getPopupContainer={
            getPopupContainer ||
            ((triggerNode) => {
              return findClosestBySelector(triggerNode, `.${antPrefix}-app`); // 默认放到App组件下，获取自定义css变量
            })
          }
          ref={ref}
        />
      </>
    );
  },
);

export default SparkTooltip;
