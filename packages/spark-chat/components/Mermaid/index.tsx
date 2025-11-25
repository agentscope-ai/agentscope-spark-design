import { Image } from '@agentscope-ai/design';
import { useAsyncEffect } from 'ahooks';
import { theme as AntdTheme } from 'antd';
import { kebabCase } from 'lodash';
import { MermaidConfig, Mermaid as MermaidInstance } from 'mermaid';
import React, { useEffect, useId, useMemo, useState } from 'react';
import { useProviderContext } from '@agentscope-ai/chat';
import { createGlobalStyle } from 'antd-style';

const Style = createGlobalStyle`
.${p => p.theme.prefixCls}-mermaid {
  &-preview img {
    background: ${(p) => p.theme.colorBgBase};
  }
}
`;

// 懒加载 Mermaid 实例
let mermaidPromise: Promise<MermaidInstance | undefined>;
const genMermaidPromise = async () => {
  if (mermaidPromise) return mermaidPromise;
  mermaidPromise = import('mermaid').then(module => module.default);
  return mermaidPromise;
}


export interface IMermaidProps {
  /**
   * @description Mermaid 图表的源代码，包含图表定义和配置
   * @descriptionEn Mermaid chart source code containing chart definition and configuration
   */
  content: string;
  /**
   * @description 图表的宽度，支持数字（像素）或字符串（CSS单位）
   * @descriptionEn Width of the chart, supports number (pixels) or string (CSS units)
   */
  width?: number | string;
  /**
   * @description 图表的高度，支持数字（像素）或字符串（CSS单位）
   * @descriptionEn Height of the chart, supports number (pixels) or string (CSS units)
   */
  height?: number | string;
}

export default function Mermaid(props: IMermaidProps) {
  const { content, width, height } = props;
  const { theme, getPrefixCls } = useProviderContext();
  const prefixCls = getPrefixCls('mermaid');

  const mermaidConfig: MermaidConfig = useMemo(
    () => ({
      theme: theme?.algorithm === AntdTheme.darkAlgorithm ? 'dark' : 'default',
      securityLevel: 'loose',

      startOnLoad: false,
    }),
    [theme?.algorithm, theme?.token.fontFamily],
  );

  const [renderedContent, setRenderedContent] = useState('');
  const [blobUrl, setBlobUrl] = useState<string>();

  const id = useId();
  const mermaidId = kebabCase(`mermaid-${id}`);

  useAsyncEffect(async () => {
    try {
      const mermaidInstance = await genMermaidPromise();
      if (!mermaidInstance) {
        setRenderedContent(content);
        return;
      }
      const isValid = await mermaidInstance.parse(content);
      if (isValid) {
        mermaidInstance.initialize(mermaidConfig);
        const { svg } = await mermaidInstance.render(mermaidId, content);
        setRenderedContent(svg);
      } else {
        throw new Error('Invalid Mermaid syntax');
      }
    } catch (error) {
      if (!renderedContent) console.error('Mermaid parse error: ', error);
      setRenderedContent(renderedContent || '');
    }
  }, [content, mermaidConfig]);


  useEffect(() => {
    if (renderedContent) {
      const blob = new Blob([renderedContent], { type: 'image/svg+xml' });
      const url = URL.createObjectURL(blob);
      setBlobUrl(url);
      return () => {
        URL.revokeObjectURL(url);
      };

    }
  }, [renderedContent]);

  if (!blobUrl) return null;


  return (
    <>
      <Style />
      <Image
        className={prefixCls}
        src={blobUrl}
        alt={'mermaid'}
        width={width}
        height={height}
        preview={{
          rootClassName: `${prefixCls}-preview`
        }}
      />
    </>
  );
}
