import { getCommonConfig } from '@/config';
import useMergedState from '@rc-component/util/lib/hooks/useMergedState';
import { Segmented, Tabs, TabsProps } from 'antd';
import classNames from 'classnames';
import { useCallback, useMemo } from 'react';
import { useStyle } from './index.style';

export interface SparkTabsProps extends Omit<TabsProps, 'type'> {
  /**
   * @description 类型
   * @descriptionEn Type
   * @default true
   */
  type?: 'line' | 'card' | 'editable-card' | 'segmented';
  /**
   * @description 类名
   * @descriptionEn ClassName
   * @default ''
   */
  className?: string;
}

const SparkTabs = (props: SparkTabsProps) => {
  const { type, centered, className,...restProps } = props;
  const { sparkPrefix } = getCommonConfig();
  const [mergedActiveKey, setMergedActiveKey] = useMergedState<string>(
    () => restProps.items?.[0]?.key,
    {
      value: restProps.activeKey,
      defaultValue: restProps.defaultActiveKey,
    },
  );

  const Style = useStyle();

  // 缓存 onChange 回调
  const handleChange = useCallback(
    (key: string) => {
      setMergedActiveKey(key);
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
      }, className),
    [sparkPrefix, centered, className],
  );

  // 获取当前选中 tab 的内容
  const activeContent = useMemo(() => {
    const activeItem = props.items?.find((item) => item.key === mergedActiveKey);
    return activeItem?.children;
  }, [props.items, mergedActiveKey]);

  // segmented 类型：分离 Segmented 和内容渲染，避免 renderTabBar 导致的样式问题
  if (type === 'segmented') {
    return (
      <>
        <Style />
        <Segmented
          options={segmentedOptions}
          value={mergedActiveKey}
          onChange={handleChange}
          className={segmentedClassName}
          size={props.size}
        />
        <div className={`${sparkPrefix}-segmented-tab-content`}>
          {activeContent}
        </div>
      </>
    );
  }
  return (
    <>
      <Style />
      <Tabs {...restProps} type={type} className={className} />
    </>
  );
};

SparkTabs.TabPane = Tabs.TabPane;

export default SparkTabs;
