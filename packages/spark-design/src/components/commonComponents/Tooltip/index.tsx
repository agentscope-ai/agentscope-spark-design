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
      children,
      ...restProps
    } = props;
    const { sparkPrefix, antPrefix } = getCommonConfig();

    const stylesObj = typeof styles === 'function' ? {} : (styles ?? {}) as Record<string, React.CSSProperties>;
    const mergedStyles = {
      ...stylesObj,
      container: {
        overflow: 'auto' as const,
        ...stylesObj.container,
        maxHeight,
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
              return findClosestBySelector(triggerNode, `.${antPrefix}-app`);
            })
          }
          ref={ref}
        >
          <span style={{ display: 'contents' }}>{children}</span>
        </Tooltip>
      </>
    );
  },
);

export default SparkTooltip;
