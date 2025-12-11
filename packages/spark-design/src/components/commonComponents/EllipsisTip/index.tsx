import { getCommonConfig } from '@/config';
import { TooltipProps, Typography } from 'antd';
import classNames from 'classnames';
import React, { CSSProperties } from 'react';
import { useStyle } from './index.style';

export interface EllipsisTipProps {
  className?: string;
  style?: CSSProperties;
  /** 内容 */
  children: React.ReactNode;
  /** 最多几行; 默认1行 */
  rows?: number;
  /** 省略时hover的提示内容; 默认值为children */
  tooltip?: React.ReactNode | TooltipProps;
  /**
   * @description tooltip的最大高度
   * @descriptionEn tooltip max height
   * @default '90vh'
   */
  tooltipMaxHeight?: number | string;
}
/** 超过展示范围时展示tooltip */
export default function EllipsisTip(props: EllipsisTipProps) {
  const {
    className = '',
    style = {},
    children,
    rows = 1,
    tooltip,
    tooltipMaxHeight = '90vh',
  } = props;
  const { sparkPrefix } = getCommonConfig();
  const Style = useStyle();

  function getTooltip() {
    const defaultBodyStyle = {
      maxHeight: tooltipMaxHeight,
      overflow: 'auto',
    };
    if (typeof tooltip === 'object') {
      const { title, styles } = tooltip as any;
      return {
        title: title || children,
        styles: {
          ...styles,
          body: {
            ...defaultBodyStyle,
            ...styles?.body,
          },
        },
      };
    }

    return {
      title: tooltip || children,
      styles: {
        body: defaultBodyStyle,
      },
    };
  }

  return (
    <>
      <Style />
      <Typography.Paragraph
        className={classNames(`${sparkPrefix}-ellipsis-tip`, className)}
        style={style}
        ellipsis={{ rows, tooltip: getTooltip() }}
      >
        {children}
      </Typography.Paragraph>
    </>
  );
}
