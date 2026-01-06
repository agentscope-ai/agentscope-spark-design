import IconFont from '@/components/commonComponents/IconFont';
import { Button, ButtonProps, getCommonConfig } from '@agentscope-ai/design';
import classNames from 'classnames';
import { ReactNode, useMemo } from 'react';
import { useStyle } from './index.style';

export interface SparkIconButtonProps extends ButtonProps {
  /**
   * @description icon
   */
  icon?: ReactNode | string;
  /** 百炼图标iconfont的key，依赖百炼的iconFont，例如bl-icon-add */
  iconType?: string;
  /**
   * @description 边框
   * @default true
   */
  bordered?: boolean;
  /**
   * @description 形状
   * @default 'default'
   */
  shape?: 'default' | 'circle';
}

export default (props: SparkIconButtonProps) => {
  const { className, iconType, bordered = true, icon: iconProp, ...restProps } = props;
  const config = getCommonConfig();
  const { iconfont } = config;

  const Style = useStyle();

  const icon = useMemo(() => {
    if (iconType) {
      return <IconFont type={iconType} size={props.size} />;
    } else if (typeof iconProp === 'string') {
      return <IconFont type={iconProp} size={props.size} />;
    } else {
      return iconProp;
    }
  }, [iconProp, iconType, iconfont]);

  return (
    <>
      <Style />
      <Button
        className={classNames(className, `${config.sparkPrefix}-icon-button`)}
        style={{ lineHeight: 1 }}
        type={bordered ? 'default' : 'text'}
        {...restProps}
        icon={icon}
      />
    </>
  );
};
