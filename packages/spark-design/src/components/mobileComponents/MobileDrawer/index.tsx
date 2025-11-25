import { getCommonConfig } from '@/config';

import { SparkFalseLine } from '@agentscope-ai/icons';
import { Drawer, DrawerProps } from 'antd';
import classNames from 'classnames';
import SparkConfirm from './Confirm';
import { useStyle } from './index.style';

export interface SparkMobileDrawerProps extends DrawerProps {
  /**
   * @description 是否显示分割线
   * @descriptionEn whether to show divider
   * @default true
   */
  showDivider?: boolean;
}

type CompoundedComponent = React.FC<SparkMobileDrawerProps> & {
  Confirm: typeof SparkConfirm;
};

const SparkMobileDrawer: React.FC<SparkMobileDrawerProps> = (props) => {
  const {
    children,
    className,
    style,
    showDivider = true,
    ...restProps
  } = props;
  const Style = useStyle();
  const commonConfig = getCommonConfig();
  const { sparkPrefix, antPrefix } = commonConfig;
  return (
    <>
      <Style />
      <Drawer
        closeIcon={<SparkFalseLine size={24} />}
        className={classNames(`${sparkPrefix}-drawer`, className, {
          [`${antPrefix}-show-divider`]: showDivider,
        })}
        style={{ ...style }}
        {...restProps}
      >
        {children}
      </Drawer>
    </>
  );
};

Object.assign(SparkMobileDrawer, {
  Confirm: SparkConfirm,
});

export default SparkMobileDrawer as CompoundedComponent;
