import useToken from 'antd/es/theme/useToken';
import { useEffect, useState } from 'react';

interface IProps {
  /**
   * @description 图片地址
   */
  svgUrl: string;
  /**
   * @description 映射关系
   */
  tokenMap?: Record<string, string>;

  className?: string;

  size: number | string;
}

const SVG_NS = 'http://www.w3.org/2000/svg';
const XLINK_NS = 'http://www.w3.org/1999/xlink';

// 避免多实例并发注入时互相覆盖：用任务 Map 去重同一个 svgId 的加载
const svgSymbolTasks = new Map<string, Promise<void>>();

let svgContainer: SVGSVGElement | null = null;
if (typeof document !== 'undefined') {
  svgContainer = document.querySelector('#empty-svg-container');
}

function escapeRegExp(str: string) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function toBase64Url(input: string) {
  // btoa 仅支持 latin1，这里 input 是 URL（ascii），可直接使用
  // 转成 base64url，避免 id 中出现 + / =
  return btoa(input).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/g, '');
}

function ensureSvgContainer() {
  if (svgContainer || typeof document === 'undefined') return svgContainer;

  const container = document.createElement('div');
  container.innerHTML = '<svg></svg>';
  svgContainer = container.querySelector('svg') as SVGSVGElement;
  svgContainer.id = 'empty-svg-container';
  svgContainer.setAttribute('aria-hidden', 'true');
  svgContainer.style.position = 'absolute';
  svgContainer.style.width = '0';
  svgContainer.style.height = '0';
  svgContainer.style.overflow = 'hidden';
  document.body.insertBefore(svgContainer, document.body.firstChild);
  return svgContainer;
}

function ensureSymbol(svgId: string) {
  if (!svgContainer) return null;
  const existed = document.getElementById(svgId);
  let symbol = (existed as unknown as SVGSymbolElement) || null;
  if (symbol) return symbol;

  symbol = document.createElementNS(SVG_NS, 'symbol') as SVGSymbolElement;
  symbol.id = svgId;
  symbol.setAttribute('data-loaded', 'false');
  svgContainer.appendChild(symbol);
  return symbol;
}

export default function Illustrate(props: IProps) {
  const [ , , , , cssVar] = useToken();
  const { svgUrl, tokenMap = {}, className, size } = props;
  const isSvg = svgUrl.includes('.svg');
  const [svgString, setSvgString] = useState('');

  useEffect(() => {
    ensureSvgContainer();
  }, []);

  useEffect(() => {
    if (svgContainer && cssVar?.key) {
      svgContainer.classList.forEach(key => svgContainer.classList.remove(key));
      svgContainer.classList.add(cssVar.key);
    }
  }, [cssVar?.key]);

  useEffect(() => {
    if (!isSvg) {
      return;
    }

    ensureSvgContainer();
    if (!svgContainer) return;

    const svgId = toBase64Url(svgUrl);
    setSvgString(
      `<svg width="100%" height="100%"><use href="#${svgId}" xlink:href="#${svgId}"></use></svg>`,
    );

    const symbol = ensureSymbol(svgId);
    if (!symbol) return;

    // 已经加载过，直接复用
    if (symbol.getAttribute('data-loaded') === 'true') return;

    // 同一个 svgId 的并发请求去重
    if (!svgSymbolTasks.has(svgId)) {
      const task = (async () => {
        try {
          const res = await fetch(svgUrl);
          if (!res.ok) {
            throw new Error(`HTTP ${res.status}`);
          }
          const raw = await res.text();

          let str = raw;
          Object.keys(tokenMap).forEach((key) => {
            str = str.replace(new RegExp(escapeRegExp(key), 'g'), tokenMap[key]);
          });

          // 提取 viewBox
          const viewBoxMatch = str.match(/viewBox="([^"]*)"/);
          const viewBox = viewBoxMatch ? viewBoxMatch[1] : '';

          // 只保留 <svg> 内部内容
          let symbolContentStr = str.replace(/<svg[^>]*>/, '');
          symbolContentStr = symbolContentStr.replace(/<\/svg>/, '');

          if (viewBox) {
            symbol.setAttribute('viewBox', viewBox);
          }

          // 使用 DOM API 写入，避免 innerHTML 触发 svgContainer 重建
          symbol.innerHTML = symbolContentStr;
          symbol.setAttribute('data-loaded', 'true');
          symbol.removeAttribute('data-error');
        } catch (err) {
          // 失败时保证不会进入“空壳已存在但永远不再加载”的状态
          symbol.setAttribute('data-loaded', 'false');
          symbol.setAttribute('data-error', 'true');
          symbol.innerHTML = '';
          // eslint-disable-next-line no-console
          console.warn('[SparkDesign][Empty][Illustrate] load svg failed:', svgUrl, err);
        }
      })().finally(() => {
        svgSymbolTasks.delete(svgId);
      });

      svgSymbolTasks.set(svgId, task);
    }
  }, [svgUrl]);

  if (isSvg) {
    return <div className={className} dangerouslySetInnerHTML={{ __html: svgString }} style={{ width: size, height: size }} />;
  }

  return <img src={svgUrl} className={className} style={{ width: size, height: size }} />;
}