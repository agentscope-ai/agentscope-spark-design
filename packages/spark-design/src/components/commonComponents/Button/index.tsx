import { Tooltip } from '@agentscope-ai/design';
import { SparkLoadingLine } from '@agentscope-ai/icons';
import { Button as AntdButton, ButtonProps, ConfigProvider, theme } from 'antd';
import classNames from 'classnames';
import React, { ReactNode, forwardRef, useMemo } from 'react';
import IconFont, { SparkIconFontProps } from '../IconFont';

// @ts-ignore
export interface SparkButtonProps extends ButtonProps {
  /**
   * @description 按钮大小
   * @descriptionEn size of the button
   * @default 'middle'
   */
  size?: 'small' | 'middle' | 'large';
  /**
   * @description 类型
   * @descriptionEn type of the button
   * @default 'deafult'
   */
  type?:
    | 'primary'
    | 'dashed'
    | 'link'
    | 'text'
    | 'default'
    | 'primaryLess'
    | 'textCompact';
  /**
   * @description hover上去tooltip的内容
   * @descriptionEn content of the tooltip
   */
  tooltipContent?: string | ReactNode;
  /**
   * @description 百炼图标iconfont的key，依赖ConfigProvider传入的iconfont，例如bl-icon-add
   * @descriptionEn key of the iconfont, depends on the iconfont of the ConfigProvider, such as bl-icon-add
   */
  iconType?: string;
  /**
   * @description 图标大小
   * @descriptionEn size of the icon
   */
  iconSize?: SparkIconFontProps['size'];
}

const Button = forwardRef<any, SparkButtonProps>((props, ref) => {
  const token = theme.useToken();
  const { iconSize, loading, iconType, tooltipContent, ...restProps } = props;

  const buttonType = React.useMemo(() => {
    // @ts-ignore
    if (restProps.type === 'primaryLess') return 'primary';
    // @ts-ignore
    if (restProps.type === 'textCompact') return 'link';
    return restProps.type;
  }, [restProps.type]);

  const mergedLoading = useMemo(() => {
    // 更改默认 loading icon 为 SparkLoadingLine
    if (loading) {
      if (typeof loading === 'boolean') {
        return {
          icon: <SparkLoadingLine spin />,
        };
      }
      if (typeof loading === 'object') {
        return {
          icon: <SparkLoadingLine spin />,
          ...loading,
        };
      }
    }
    return loading;
  }, [loading]);

  const icon = React.useMemo(() => {
    if (loading && typeof loading === 'object' && loading.icon) {
      return loading?.icon;
    }
    if (iconType)
      return (
        <IconFont type={iconType} size={iconSize ?? restProps.size} />
      ); // 注意 size 也需要传入下去
    // 只透传显式传入的 iconSize。Button 的 size 是 'small' | 'middle' | 'large'
    // 这类 CSS 关键字：给 IconFont 当 font-size 用没问题，但 lucide 等第三方图标
    // 会把它当作 svg 的 width/height 属性，浏览器会报
    // `<svg> attribute width: Expected length, "small"`。
    // IconButton 也是只给自己的 IconFont 传 size、对外来节点原样透传，这里保持一致。
    if (restProps.icon) {
      const iconNode = restProps.icon as React.ReactElement;
      return iconSize === undefined
        ? iconNode
        : React.cloneElement(iconNode, { size: iconSize });
    }
    return null;
  }, [iconType, restProps.icon, iconSize, restProps.size, loading]);

  const button = (
    <AntdButton
      {...restProps}
      loading={mergedLoading}
      ref={ref}
      type={buttonType}
      icon={icon}
      style={{
        fontWeight: 500,
        lineHeight: 1,
        ...restProps.style,
      }}
      className={classNames(restProps.className, 'spark-button', {
        'spark-button-primaryLess': restProps.type === 'primaryLess',
      })}
    />
  );

  // @ts-ignore
  if (restProps.type === 'primaryLess') {
    return (
      <ConfigProvider
        theme={{
          token: {
            // @ts-ignore
            colorPrimary: token.token.colorSlate,
            // @ts-ignore
            colorPrimaryHover: token.token.colorSlateHover,
            // @ts-ignore
            colorPrimaryActive: token.token.colorSlate,
          } as any,
        }}
      >
        <Tooltip title={tooltipContent}>{button}</Tooltip>
      </ConfigProvider>
    );
    // @ts-ignore
  } else if (restProps.type === 'textCompact') {
    return (
      <Tooltip title={tooltipContent}>
        {/* @ts-ignore */}
        <AntdButton
          {...restProps}
          ref={ref}
          icon={icon}
          color="default"
          variant="link"
          style={{
            fontWeight: 500,
            paddingLeft: 0,
            paddingRight: 0,
            lineHeight: 1,
            ...restProps.style,
          }}
          className={classNames(restProps.className, 'spark-button')}
        />
      </Tooltip>
    );
  } else {
    return <Tooltip title={tooltipContent}>{button}</Tooltip>;
  }
});

export default Button;
