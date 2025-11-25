import classnames from 'classnames';
import React from 'react';
import { Parser, Renderer } from './core';
import { useAnimation, useStreaming } from './hooks';
import { MarkdownProps } from './interface';
import Style from './style';

const Markdown: React.FC<MarkdownProps> = (props) => {

  const {
    cursor,
    baseFontSize,
    baseLineHeight,
    streaming,
    config,
    components,
    paragraphTag = 'p',
    content,
    children,
    rootClassName,
    className,
    style,
    openLinksInNewTab,
    dompurifyConfig,
  } = props;
  const mergedCls = classnames(rootClassName, className);
  const mergedStyle: React.CSSProperties = {
    fontSize: baseFontSize,
    lineHeight: baseLineHeight,
    ...style,
  };
  const displayContent = useStreaming(content || children || '', streaming, cursor);
  const animationComponents = useAnimation(streaming);

  if (!displayContent) return null;

  const parser = new Parser({
    markedConfig: config,
    paragraphTag,
    openLinksInNewTab,
  });

  const renderComponents = { ...animationComponents, ...(components || {}) };
  const renderer = new Renderer({
    components: renderComponents,
    dompurifyConfig,
  });

  const htmlString = parser.parse(displayContent);
  return (
    <>
      <Style />
      <div className={mergedCls} style={mergedStyle}>
        {renderer.render(htmlString)}
      </div>
    </>
  );
};


export default Markdown;
