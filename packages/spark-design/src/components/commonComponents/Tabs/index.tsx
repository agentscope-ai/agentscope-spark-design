import { getCommonConfig } from '@/config';
import useMergedState from '@rc-component/util/lib/hooks/useMergedState';
import { Segmented, Tabs, TabsProps } from 'antd';
import classNames from 'classnames';
import { useCallback, useMemo } from 'react';
import { flushSync } from 'react-dom';
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

  // 缓存 onChange 回调，使用 flushSync 强制同步更新，防止卡顿时选中态丢失
  const handleChange = useCallback(
    (key: string) => {
      flushSync(() => {
        setMergedActiveKey(key);
      });
      props.onChange?.(key);
    },
    [setMergedActiveKey, props.onChange],
  );

  // 缓存 options 配置
  const segmentedOptions = useMemo(
    () =>
      props.items?.map((item) => ({
        label: item.label,
        value: item.key,
        disabled: item.disabled,
      })) || [],
    [props.items],
  );

  // 缓存 className
  const segmentedClassName = useMemo(
    () =>
      classNames(`${sparkPrefix}-segmented-tab-bar`, {
        [`${sparkPrefix}-segmented-tab-bar-centered`]: centered,
      }),
    [sparkPrefix, centered],
  );

  // 缓存 renderTabBar 函数
  const renderTabBar = useCallback(
    () => (
      <Segmented
        options={segmentedOptions}
        onChange={handleChange}
        className={segmentedClassName}
        value={mergedActiveKey}
        size={props.size}
      />
    ),
    [segmentedOptions, handleChange, segmentedClassName, mergedActiveKey, props.size],
  );

  if (type === 'segmented') {
    return (
      <>
        <Style />
        <Tabs
          animated={false}
          {...restProps}
          activeKey={mergedActiveKey}
          renderTabBar={renderTabBar}
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
