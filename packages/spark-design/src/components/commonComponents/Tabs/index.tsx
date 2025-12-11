import { getCommonConfig } from '@/config';
import useMergedState from '@rc-component/util/lib/hooks/useMergedState';
import { Segmented, Tabs, TabsProps } from 'antd';
import classNames from 'classnames';
import { useStyle } from './index.style';

export interface SparkTabsProps extends Omit<TabsProps, 'type'> {
  /**
   * @description 类型
   * @descriptionEn Type
   * @default true
   */
  type?: 'line' | 'card' | 'editable-card' | 'segmented';
}

const SparkTabs = (props: SparkTabsProps) => {
  const { type, centered, ...restProps } = props;
  const { sparkPrefix } = getCommonConfig();
  const [mergedActiveKey, setMergedActiveKey] = useMergedState<string>(
    () => restProps.items?.[0]?.key,
    {
      value: restProps.activeKey,
      defaultValue: restProps.defaultActiveKey,
    },
  );

  const Style = useStyle();
  if (type === 'segmented') {
    const handleChange = (key: string) => {
      setMergedActiveKey(key);
      props.onChange?.(key);
    };

    return (
      <>
        <Style />
        <Tabs
          animated={false}
          {...restProps}
          activeKey={mergedActiveKey}
          renderTabBar={(tabProps) => {
            const options =
              props.items?.map((item) => ({
                label: item.label,
                value: item.key,
                disabled: item.disabled,
              })) || [];

            return (
              <Segmented
                options={options}
                onChange={handleChange}
                className={classNames(`${sparkPrefix}-segmented-tab-bar`, {
                  [`${sparkPrefix}-segmented-tab-bar-centered`]: centered,
                })}
                value={mergedActiveKey}
                size={props.size}
              />
            );
          }}
        ></Tabs>
      </>
    );
  }
  return (
    <>
      <Style />
      <Tabs {...props} type={type} ></Tabs>
    </>
  );
};

SparkTabs.TabPane = Tabs.TabPane;

export default SparkTabs;
