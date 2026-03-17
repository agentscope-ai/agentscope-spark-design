import type { MenuProps } from 'antd';
import classnames from 'classnames';
import React, { useRef } from 'react';

import GroupTitle, { GroupTitleContext } from './GroupTitle';
import ConversationsItem, { type ConversationsItemProps } from './Item';

import useMergedState from 'rc-util/lib/hooks/useMergedState';
import { useProviderContext } from '@agentscope-ai/chat';
import useGroupable from './hooks/useGroupable';
import Style from './style';


import pickAttrs from 'rc-util/lib/pickAttrs';
import type { Conversation, Groupable } from './interface';
import { useInViewport } from 'ahooks';

export interface ConversationsProps extends React.HTMLAttributes<HTMLUListElement> {
  /**
   * @description 会话列表的数据源数组，包含所有会话信息
   * @descriptionEn Data source array for the conversation list containing all conversation information
   */
  items?: Conversation[];

  /**
   * @description 当前激活的会话标识符，用于高亮显示选中项
   * @descriptionEn Currently active conversation identifier for highlighting selected item
   */
  activeKey?: Conversation['key'];

  /**
   * @description 组件初始化时的默认选中会话标识符
   * @descriptionEn Default selected conversation identifier when component initializes
   */
  defaultActiveKey?: Conversation['key'];

  /**
   * @description 会话选择发生变化时的回调函数，接收新的会话标识符
   * @descriptionEn Callback function when conversation selection changes, receives new conversation identifier
   */
  onActiveChange?: (value: string) => void;

  /**
   * @description 是否开启批量选择模式
   * @descriptionEn Whether to enable batch selection mode
   */
  selectable?: boolean;

  /**
   * @description 当前选中的会话 key 列表
   * @descriptionEn Currently selected conversation key list
   */
  selectedKeys?: string[];

  /**
   * @description 批量选择变化时的回调函数
   * @descriptionEn Callback when batch selection changes
   */
  onSelectChange?: (selectedKeys: string[]) => void;

  /**
   * @description 会话操作菜单配置
   * @descriptionEn Conversation operation menu configuration
   */
  menu?: {
    label?: string;
    key?: string;
    icon?: React.ReactNode;
    danger?: boolean;
    onClick?: (info: Conversation) => void;
    onEdit?: (label: string, session: Conversation) => Promise<void>;
    disabled?: boolean;
  }[];

  /**
   * @description 语义化样式对象，用于精确控制不同区域的样式
   * @descriptionEn Semantic style object for precise control of different area styles
   */
  styles?: Partial<Record<'item', React.CSSProperties>>;

  /**
   * @description 语义化CSS类名，用于为不同区域添加自定义类名
   * @descriptionEn Semantic CSS class names for adding custom classes to different areas
   */
  classNames?: Partial<Record<'item', string>>;

  /**
   * @description 自定义CSS类名前缀，用于样式隔离和主题定制
   * @descriptionEn Custom CSS class name prefix for style isolation and theme customization
   */
  prefixCls?: string;

  /**
   * @description 自定义根容器的CSS类名，用于覆盖默认样式
   * @descriptionEn Custom CSS class name for the root container to override default styles
   */
  rootClassName?: string;
}

const Conversations: React.FC<ConversationsProps & { groupable?: boolean | Groupable }> = (props) => {
  
  const {
    prefixCls: customizePrefixCls,
    rootClassName,
    items,
    activeKey,
    defaultActiveKey,
    onActiveChange,
    selectable: propsSelectable,
    selectedKeys,
    onSelectChange,
    menu,
    styles = {},
    classNames = {},
    groupable,
    className,
    style,
    ...restProps
  } = props;

  const domProps = pickAttrs(restProps, {
    attr: true,
    aria: true,
    data: true,
  });

  const [mergedActiveKey, setMergedActiveKey] = useMergedState<ConversationsProps['activeKey']>(
    defaultActiveKey,
    {
      value: activeKey,
    },
  );

  const [groupList, enableGroup] = useGroupable(groupable, items);

  const { direction, getPrefixCls } = useProviderContext();
  const prefixCls = getPrefixCls('conversations');
  const mergedCls = classnames(
    prefixCls,
    className,
    rootClassName,
    {
      [`${prefixCls}-rtl`]: direction === 'rtl',
    },
  );

  const onActiveChangeRef = React.useRef(onActiveChange);
  onActiveChangeRef.current = onActiveChange;

  const onConversationItemClick: ConversationsItemProps['onClick'] = React.useCallback((info) => {
    setMergedActiveKey(info.key);
    onActiveChangeRef.current?.(info.key);
  }, [setMergedActiveKey]);

  const selectedKeysRef = React.useRef(selectedKeys);
  selectedKeysRef.current = selectedKeys;

  const onSelectChangeRef = React.useRef(onSelectChange);
  onSelectChangeRef.current = onSelectChange;

  const handleItemSelect = React.useCallback((key: string, selected: boolean) => {
    if (!onSelectChangeRef.current) return;
    const keys = selectedKeysRef.current || [];
    const next = selected ? [...keys, key] : keys.filter(k => k !== key);
    onSelectChangeRef.current(next);
  }, []);

  return <>
    <Style />
    <ul
      {...domProps}
      style={style}
      className={mergedCls}
    >
      {groupList.map((groupInfo, groupIndex) => {
        const convItems = groupInfo.data.map((convInfo: Conversation, convIndex: number) => {
          const itemSelectable = propsSelectable ?? convInfo.selectable;
          const itemSelected = itemSelectable
            ? (selectedKeys ? selectedKeys.includes(convInfo.key) : convInfo.selected)
            : false;
          const itemOnSelect = onSelectChange ? handleItemSelect : convInfo.onSelect;

          return (
            <ConversationsItem
              key={convInfo.key || `key-${convIndex}`}
              info={convInfo}
              prefixCls={prefixCls}
              direction={direction}
              className={classnames(classNames.item)}
              style={styles.item}
              menu={menu}
              active={mergedActiveKey === convInfo.key}
              selectable={itemSelectable}
              selected={itemSelected}
              onSelect={itemOnSelect}
              onClick={onConversationItemClick}
            />
          )
        });

        if (enableGroup) {
          return (
            <li key={groupInfo.name || `key-${groupIndex}`}>
              <GroupTitleContext.Provider value={{ prefixCls }}>
                {groupInfo.title?.(groupInfo.name!, { components: { GroupTitle } }) || (
                  <GroupTitle key={groupInfo.name}>{groupInfo.name}</GroupTitle>
                )}
              </GroupTitleContext.Provider>
              <ul className={`${prefixCls}-list`}>{convItems}</ul>
            </li>
          );
        }

        return convItems;
      })}
    </ul></>
};


export type { Conversation };
export default Conversations;
