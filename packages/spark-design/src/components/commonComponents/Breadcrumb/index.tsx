import { SparkDownLine } from '@agentscope-ai/icons';
import { Breadcrumb, BreadcrumbProps } from 'antd';
import { Avatar, Dropdown } from '@agentscope-ai/design';
import React from 'react';
import { getCommonConfig } from '../../../config';
import { useStyle } from './index.style';

export interface SparkBreadcrumbItem {
  /**
   * @description 面包屑项标题
   * @descriptionEn Breadcrumb Item Title
   * @default ''
   */
  title: string | React.ReactNode;
  /**
   * @description 图标地址
   * @descriptionEn Icon URL
   * @default ''
   */
  iconUrl?: string;
  /**
   * @description 下拉菜单配置
   * @descriptionEn Dropdown Menu Configuration
   * @default
   */
  dropdown?: {
    items: Array<{
      key: string;
      label: React.ReactNode;
    }>;
  };
}

export interface SparkBreadcrumbProps extends Omit<BreadcrumbProps, 'items'> {
  /** 面包屑项配置 */
  items?: SparkBreadcrumbItem[];
}

const SparkBreadcrumb: React.FC<SparkBreadcrumbProps> = ({
  items = [],
  ...restProps
}) => {
  const { sparkPrefix } = getCommonConfig();
  const Style = useStyle();
  const processedItems = React.useMemo(() => {
    return items.map((item) => {
      let titleContent = item.title;
      const contentParts = [];

      if (item.iconUrl) {
        contentParts.push(<Avatar key="avatar" size={20} src={item.iconUrl} />);
      }

      if (item.dropdown) {
        contentParts.push(
          <span
            key="title"
            className={`${sparkPrefix}-breadcrumb-dropdown-title`}
          >
            {item.title}
            <SparkDownLine size={16} />
          </span>,
        );
      } else {
        contentParts.push(<span key="title">{item.title}</span>);
      }

      if (item.dropdown) {
        titleContent = (
          <Dropdown
            menu={{ items: item.dropdown.items }}
            trigger={['click']}
            placement="bottomCenter"
            className={`${sparkPrefix}-breadcrumb-dropdown`}
          >
            <span>{contentParts}</span>
          </Dropdown>
        );
      } else if (item.iconUrl || contentParts.length > 1) {
        titleContent = (
          <span className={`${sparkPrefix}-breadcrumb-item-content`}>
            {contentParts}
          </span>
        );
      }

      return {
        ...item,
        title: titleContent,
      };
    });
  }, [items]);

  return (
    <>
      <Style />
      <Breadcrumb
        {...restProps}
        items={processedItems}
        className={`${sparkPrefix}-breadcrumb ${restProps.className || ''}`}
      />
    </>
  );
};

export default SparkBreadcrumb;
