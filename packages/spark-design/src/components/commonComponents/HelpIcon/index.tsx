import { getCommonConfig } from '@agentscope-ai/design/config';
import { SparkInfoLine } from '@agentscope-ai/icons';
import { type PopoverProps } from 'antd';
import classNames from 'classnames';
import { CSSProperties, ReactNode } from 'react';
import IconButton from '../IconButton';
import { useStyle as useIconFontStyle } from '../IconFont/index.style';
import Tooltip from '../Tooltip';
import { useStyle } from './index.style';

/**
 * HelpIcon 组件属性
 * @id SparkHelpIconProps
 */
export interface HelpIconProps {
  /**
   * @description 提示内容
   * @descriptionEn Tooltip content
   */
  content: ReactNode;
  /**
   * @description 自定义类名
   * @descriptionEn Custom class name
   */
  className?: string;
  /**
   * @description Tooltip 组件的额外属性
   * @descriptionEn Additional props for Tooltip component
   */
  popoverProps?: PopoverProps;
  /**
   * @description 自定义样式
   * @descriptionEn Custom style
   */
  style?: CSSProperties;
}
export default function HelpIcon(props: HelpIconProps) {
  const IconFontStyle = useIconFontStyle();
  const Style = useStyle();
  const { style, content, className, popoverProps } = props;
  const { sparkPrefix } = getCommonConfig();
  return (
    <>
      <IconFontStyle />
      <Style />
      <Tooltip
        title={content}
        overlayInnerStyle={{ maxWidth: 376 }}
        trigger={'hover'}
        style={style}
        {...popoverProps}
      >
        <IconButton
          className={classNames(`${sparkPrefix}-help-icon`, className)}
          icon={<SparkInfoLine />}
          shape="circle"
          bordered={false}
          size="small"
        ></IconButton>
      </Tooltip>
    </>
  );
}
