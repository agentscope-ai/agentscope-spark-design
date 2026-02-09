import { useEffect, useRef, useState } from 'react';

interface IProps {
  /**
   * @description 图片地址
   */
  svgUrl: string;
  /**
   * @description 映射关系
   */
  tokenMap?: Record<string, string>;
  /** 自定义类名 */
  className?: string;
  /** 尺寸 */
  size: number | string;
}

function escapeRegExp(str: string) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

/** 模块级缓存：svgUrl -> 原始 SVG 文本，避免重复网络请求 */
const svgRawCache = new Map<string, string>();
/** 模块级请求去重：svgUrl -> Promise，避免并发重复请求 */
const svgFetchTasks = new Map<string, Promise<string>>();

/**
 * 获取 SVG 原始文本，带缓存和请求去重
 */
async function fetchSvgText(url: string): Promise<string> {
  const cached = svgRawCache.get(url);
  if (cached !== undefined) return cached;

  const existing = svgFetchTasks.get(url);
  if (existing) return existing;

  const task = (async () => {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(`HTTP ${res.status}`);
    }
    const text = await res.text();
    svgRawCache.set(url, text);
    return text;
  })().finally(() => {
    svgFetchTasks.delete(url);
  });

  svgFetchTasks.set(url, task);
  return task;
}

/**
 * 将原始 SVG 文本中的颜色替换为 CSS 变量
 */
function replaceSvgColors(raw: string, tokenMap: Record<string, string>): string {
  let result = raw;
  Object.keys(tokenMap).forEach((key) => {
    result = result.replace(new RegExp(escapeRegExp(key), 'g'), tokenMap[key]);
  });
  return result;
}

export default function Illustrate(props: IProps) {
  const { svgUrl, tokenMap = {}, className, size } = props;
  const isSvg = svgUrl.includes('.svg');
  const [rawSvg, setRawSvg] = useState<string>(() => svgRawCache.get(svgUrl) || '');
  const mountedRef = useRef(true);

  useEffect(() => {
    mountedRef.current = true;
    return () => {
      mountedRef.current = false;
    };
  }, []);

  useEffect(() => {
    if (!isSvg) return;

    // 如果缓存中已有，直接使用
    const cached = svgRawCache.get(svgUrl);
    if (cached) {
      setRawSvg(cached);
      return;
    }

    fetchSvgText(svgUrl)
      .then((text) => {
        if (mountedRef.current) {
          setRawSvg(text);
        }
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.warn('[SparkDesign][Empty][Illustrate] load svg failed:', svgUrl, err);
      });
  }, [svgUrl]);

  if (!isSvg) {
    return <img src={svgUrl} className={className} style={{ width: size, height: size }} />;
  }

  if (!rawSvg) return null;

  // 每次渲染时根据当前 tokenMap 做颜色替换
  const svgString = replaceSvgColors(rawSvg, tokenMap);

  return (
    <div
      className={className}
      dangerouslySetInnerHTML={{ __html: svgString }}
      style={{ width: size, height: size }}
    />
  );
}
