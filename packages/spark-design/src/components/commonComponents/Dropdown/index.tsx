import { getCommonConfig } from '@/config';
import { SparkTrueLine } from '@agentscope-ai/icons';
import { Dropdown, DropdownProps } from 'antd';
import { useMemo } from 'react';
import { useStyle } from './index.style';

export type { DropdownProps };

const SparkDropdown = (props: DropdownProps) => {
  const commonConfig = getCommonConfig();
  const { antPrefix } = commonConfig;

  const menuItems = useMemo(() => {
    if (!props.menu?.selectable || !props.menu) {
      return props.menu?.items || [];
    }

    return props.menu.items.map((d) => {
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
  }, [props.menu?.items, props.menu?.selectable]);

  const Style = useStyle();

  return (
    <>
      <Style />
      <Dropdown
        {...props}
        menu={{
          ...props.menu,
          items: menuItems,
        }}
        overlayStyle={{ ...props.overlayStyle }}
      >
        <span>{props.children}</span>
      </Dropdown>
    </>
  );
};

export default SparkDropdown;
