import React, { useEffect, useMemo, useState } from 'react';
import * as SparkIcons from '@agentscope-ai/icons';
import { Input, Radio, message, copy } from '@agentscope-ai/design';
import { createStyles } from 'antd-style';
import { useLocale } from 'dumi';
import { SparkSearchLine } from '@agentscope-ai/icons';
import { categorizeIcon, ICON_CATEGORIES } from './iconCategories';
import $i18n from '@/i18n';

/**
 * Icons Library
 * - 自动枚举并展示 @agentscope-ai/icons 的全部导出图标
 * - 支持搜索、点击复制
 */

interface IconItem {
  /** 图标导出名称 */
  name: string;
  /** 图标 React 组件 */
  Icon: React.ComponentType<any>;
  /** 图标分类 */
  category: string;
}

type CopyMode = 'name' | 'import' | 'jsx';

const useStyles = createStyles(() => ({
  container: {
    padding: 16,
  },
  toolbar: {
    display: 'flex',
    gap: 12,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  toolbarLeft: {
    display: 'flex',
    gap: 12,
    alignItems: 'center',
  },
  toolbarRight: {
    display: 'flex',
    gap: 12,
    alignItems: 'center',
    justifyContent: 'flex-end',
    flexWrap: 'wrap',
  },
  search: {
    maxWidth: 240,
  },
  count: {
    color: 'var(--sps-color-text-tertiary)',
    fontSize: 12,
  },
  groups: {
    marginTop: 16,
    display: 'flex',
    flexDirection: 'column',
    gap: 24,
  },
  groupTitle: {
    fontSize: 14,
    fontWeight: 600,
    color: 'var(--sps-color-text-base)',
    marginBottom: 12,
  },
  groupCount: {
    marginLeft: 8,
    fontSize: 12,
    fontWeight: 400,
    color: 'var(--sps-color-text-tertiary)',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))',
    gap: 12,
  },
  card: {
    padding: 12,
    borderRadius: 8,
    cursor: 'pointer',
    border: '1px solid var(--sps-color-border-secondary)',
    background: 'var(--sps-color-bg-base)',
  },
  iconWrap: {
    width: 48,
    height: 48,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  name: {
    marginTop: 8,
    fontSize: 12,
    lineHeight: '16px',
    color: 'var(--sps-color-text-tertiary)',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    width: '100%',
    fontFamily:
      'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
  },
}));

export default function IconLibrary() {
  const { styles } = useStyles();
  const locale = useLocale();
  const [keyword, setKeyword] = useState<string>('');
  const [copyMode, setCopyMode] = useState<CopyMode>('name');

  useEffect(() => {
    // 同步 dumi 站点语言到 $i18n（$i18n 识别 zh-cn / en）
    $i18n.updateLocale(locale.id === 'zh-CN' ? 'zh-cn' : 'en');
  }, [locale.id]);

  const excludedIcons = useMemo(
    () =>
      new Set([
        'SparkDelete01LineCopy',
        'SparkA2d2dFill',
        'SparkA3d3dFill',
        'SparkBoldLine1',
        'SparkShanguangdengweikaiqiFlashlightOffLine',
        'SparkZhinengshengchengAiGenerateLine',
        'SparkQqkongjianQzoneFill',
        'SparkAccountManagementFill',
      ]),
    [],
  );

  const allIcons = useMemo<IconItem[]>(() => {
    return Object.entries(SparkIcons)
      .filter(([name, Icon]) => {
        if (!name.startsWith('Spark')) return false;
        if (excludedIcons.has(name)) return false;
        return typeof Icon === 'function';
      })
      .map(([name, Icon]) => ({
        name,
        Icon: Icon as React.ComponentType<any>,
        category: categorizeIcon(name),
      }))
      .sort((a, b) => a.name.localeCompare(b.name));
  }, [excludedIcons]);

  const filteredIcons = useMemo<IconItem[]>(() => {
    const q = keyword.trim().toLowerCase();
    if (!q) return allIcons;
    return allIcons.filter((item) => item.name.toLowerCase().includes(q));
  }, [allIcons, keyword]);

  const groupedIcons = useMemo<Record<string, IconItem[]>>(() => {
    return filteredIcons.reduce<Record<string, IconItem[]>>((acc, icon) => {
      const key = icon.category;
      if (!acc[key]) acc[key] = [];
      acc[key].push(icon);
      return acc;
    }, {});
  }, [filteredIcons]);

  const orderedCategories = useMemo<string[]>(() => {
    const configOrder = Object.keys(ICON_CATEGORIES);
    const existing = new Set(Object.keys(groupedIcons));
    const ordered = configOrder.filter((k) => existing.has(k));
    const rest = Object.keys(groupedIcons)
      .filter((k) => !configOrder.includes(k))
      .sort((a, b) => a.localeCompare(b));
    return [...ordered, ...rest];
  }, [groupedIcons]);

  const handleCopy = (item: IconItem) => {
    let text = item.name;
    if (copyMode === 'import') {
      text = `import { ${item.name} } from '@agentscope-ai/icons';`;
    }
    if (copyMode === 'jsx') {
      text = `<${item.name} style={{ fontSize: 24 }} />`;
    }

    copy(text);
    message.success(
      $i18n.get({
        id: 'docs.icons.IconLibrary.CopySuccess',
        dm: '已复制',
      }),
    );
  };

  return (
    <div className={styles.container}>
      <div className={styles.toolbar}>
        <div className={styles.toolbarLeft}>
          <Input
            placeholder={$i18n.get({
              id: 'docs.icons.IconLibrary.SearchPlaceholder',
              dm: '搜索图标（按导出名）',
            })}
            value={keyword}
            onChange={(e) => setKeyword((e?.target as any)?.value || '')}
            className={styles.search}
            prefix={<SparkSearchLine style={{ fontSize: 16 }} />}
            allowClear
          />
        </div>

        <div className={styles.toolbarRight}>
          <Radio.Group
            value={copyMode}
            onChange={(e) => setCopyMode(e.target.value)}
            optionType="button"
            buttonStyle="solid"
            options={[
              {
                label: $i18n.get({
                  id: 'docs.icons.IconLibrary.CopyName',
                  dm: '复制名称',
                }),
                value: 'name',
              },
              {
                label: $i18n.get({
                  id: 'docs.icons.IconLibrary.CopyImport',
                  dm: '复制 import',
                }),
                value: 'import',
              },
              {
                label: $i18n.get({
                  id: 'docs.icons.IconLibrary.CopyJSX',
                  dm: '复制 JSX',
                }),
                value: 'jsx',
              },
            ]}
          />
          <div className={styles.count}>
            {$i18n.get(
              {
                id: 'docs.icons.IconLibrary.TotalCount',
                dm: '共 {count} 个',
              },
              { count: String(filteredIcons.length) },
            )}
          </div>
        </div>
      </div>

      <div className={styles.groups}>
        {orderedCategories.map((category) => {
          const list = groupedIcons[category] || [];
          return (
            <div key={category}>
              <div className={styles.groupTitle}>
                {category}
                <span className={styles.groupCount}>({list.length})</span>
              </div>

              <div className={styles.grid}>
                {list.map((item) => {
                  const Icon = item.Icon;
                  return (
                    <div
                      key={item.name}
                      className={styles.card}
                      onClick={() => handleCopy(item)}
                    >
                      <div className={styles.iconWrap}>
                        <Icon style={{ fontSize: 24 }} />
                      </div>
                      <div className={styles.name} title={item.name}>
                        {item.name}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

