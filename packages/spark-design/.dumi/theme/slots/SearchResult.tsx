import { useIntl } from 'dumi';
import React, { useMemo } from 'react';

/**
 * 修复 dumi 搜索报错：Objects are not valid as a React child
 *
 * 根因：
 * - .dumirc.ts 的 nav[].title 是多语言对象 { 'en-US': string, 'zh-CN': string }
 * - useSiteSearch() 返回的搜索结果分组标题直接取自 nav 配置，没有做 locale 归一
 * - dumi 默认 SearchResult 直接把 title 渲染成 <dt>{title}</dt>
 * - React 不允许对象作为子节点，所以报错
 *
 * 修复：用 wrapper 把 title 按当前 locale 转成字符串，再交给默认 SearchResult 渲染
 */

// eslint-disable-next-line @typescript-eslint/no-var-requires
const SearchResultOriginal = require('dumi/theme-default/slots/SearchResult')
  .default as React.ComponentType<any>;

type LocaleText = Record<string, string>;

function normalizeLocaleText(value: unknown, locale: string): string | undefined {
  if (value == null) return undefined;
  if (typeof value === 'string') return value;
  if (typeof value !== 'object') return String(value);

  const obj = value as LocaleText;
  // 优先取当前 locale，兜底 zh-CN / en-US / 第一个 string 值
  if (typeof obj[locale] === 'string') return obj[locale];
  if (typeof obj['zh-CN'] === 'string') return obj['zh-CN'];
  if (typeof obj['en-US'] === 'string') return obj['en-US'];

  const first = Object.values(obj).find((v) => typeof v === 'string');
  return typeof first === 'string' ? first : undefined;
}

export default function SearchResult(props: {
  data: any[];
  loading?: boolean;
  onItemSelect?: any;
}) {
  const intl = useIntl();
  const locale = intl.locale;

  // 把每个分组的 title 从多语言对象归一成当前 locale 的字符串
  const normalizedData = useMemo(() => {
    const data = Array.isArray(props.data) ? props.data : [];
    return data.map((group) => {
      if (!group || typeof group !== 'object') return group;
      if (!('title' in group)) return group;

      const title = normalizeLocaleText((group as any).title, locale);
      return { ...(group as any), title };
    });
  }, [locale, props.data]);

  return <SearchResultOriginal {...props} data={normalizedData} />;
}
