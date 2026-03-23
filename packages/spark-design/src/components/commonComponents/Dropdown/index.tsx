import { getCommonConfig } from '@/config';
import { ensureRefWrapped } from '@/libs/react';
import { SparkTrueLine } from '@agentscope-ai/icons';
import { Dropdown, DropdownProps } from 'antd';
import { useMemo } from 'react';
import { useStyle } from './index.style';

export type { DropdownProps };

const SparkDropdown = (props: DropdownProps) => {
  const { children, ...restProps } = props;
  const commonConfig = getCommonConfig();
  const { antPrefix } = commonConfig;

  const menuItems = useMemo(() => {
    if (!restProps.menu?.selectable || !restProps.menu) {
      return restProps.menu?.items || [];
    }

    return restProps.menu.items.map((d) => {
      const mergeData: any = {};
      // @ts-ignore
      const label = d.label;
      if (label) {
        mergeData.label = (
          <div className={`${antPrefix}-dropdown-check-wrapper`}>
            {label}
            <span className={`${antPrefix}-dropdown-check-icon`}>
              <SparkTrueLine />
            </span>
          </div>
        );
      }

      return {
        ...d,
        ...mergeData,
      };
    });
  }, [restProps.menu?.items, restProps.menu?.selectable]);

  const Style = useStyle();

  return (
    <>
      <Style />
      <Dropdown
        {...restProps}
        menu={{
          ...restProps.menu,
          items: menuItems,
        }}
        overlayStyle={{ ...restProps.overlayStyle }}
      >
        {ensureRefWrapped(children, 'Dropdown')}
      </Dropdown>
    </>
  );
};

export default SparkDropdown;
