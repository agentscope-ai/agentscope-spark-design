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
   * @default '90vh'
   */
  maxHeight?: number | string;
}

const SparkTooltip = forwardRef<any, SparkTooltipProps & TooltipProps>(
  (props, ref) => {
    const Style = useStyle();
    const {
      mode = 'dark',
      maxHeight = '90vh',
      styles = {},
      arrow,
      overlayClassName,
      getPopupContainer,
      align,
      ...restProps
    } = props;
    const { sparkPrefix, antPrefix } = getCommonConfig();
    return (
      <>
        <Style />
        <Tooltip
          {...restProps}
          styles={{
            ...styles,
            body: {
              maxHeight,
              overflow: 'auto',
              ...styles.body,
            },
          }}
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
