import React, { useMemo, useState } from 'react';
import { Button, IconButton, Tabs } from '@agentscope-ai/design';
import styles from './Preview.module.less';
import { IParseData } from '../type';

interface ViewProps {
  data: IParseData;
  /** 返回按钮点击回调 */
  activeTab: string;
  onTabChange?: (key: string) => void;
}

const PreviewHeader: React.FC<ViewProps> = ({ data, activeTab, onTabChange }) => {
  const items = useMemo(() => {
    const list = [];

    if (data.result?.content) {
      list.push({
        key: 'report',
        label: 'Report',
      });
    }

    if (Array.isArray(data.steps) && data.steps.length > 0) {
      list.push({
        key: 'process',
        label: 'Process',
      });
    }

    if (Array.isArray(data.site?.list) && data.site.list.length > 0) {
      list.push({
        key: 'source',
        label: 'Source',
      });
    }

    return list;
  }, [data]);

  const handleTabChange = (key: string) => {
    onTabChange?.(key);
  };

  const handleExport = () => {
    if (!data.result?.fileKey) {
      return;
    }
  };

  return (
    <div className={styles.tabsContainer}>
      <Tabs type="segmented" items={items} activeKey={activeTab} onChange={handleTabChange} />
    </div>
  );
};

export default PreviewHeader;
