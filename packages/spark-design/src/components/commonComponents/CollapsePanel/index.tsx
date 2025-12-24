import { getCommonConfig } from '@agentscope-ai/design';
import { SparkDownLine, SparkUpLine } from '@agentscope-ai/icons';
import classNames from 'classnames';
import { useEffect, useRef, useState } from 'react';
import { useStyle } from './index.style';

export interface CollapsePanelProps {
  /**
   * @description 收起状态下显示的内容高度
   * @default 0
   */
  collapsedHeight?: number;
  /**
   * @description 展开状态下的内容高度，设置后内容超出时可滚动，不设置则自适应内容高度
   * @default 300
   */
  expandedHeight?: number;
  /**
   * @description 面板标题
   * @default ""
   */
  title?: string | React.ReactNode;
  /**
   * @description 是否允许点击整个面板进行展开
   * @default false
   */
  expandOnPanelClick?: boolean;
  /**
   * @description 面板右侧内容
   */
  extra?: React.ReactNode;
  /**
   * @description 面板内容
   */
  children?: React.ReactNode;
  /**
   * @description 是否默认展开
   * @default false
   */
  defaultExpanded?: boolean;
  /**
   * @description 语义化的classNames
   * @descriptionEn Semantic classNames
   */
  classNames?: Partial<Record<'wrapper' | 'header' | 'content', string>>;
  /**
   * @description 语义化的styles
   * @descriptionEn Semantic styles
   */
  styles?: Partial<
    Record<'wrapper' | 'header' | 'content', React.CSSProperties>
  >;
}

const CollapsePanel = (props: CollapsePanelProps) => {
  const {
    collapsedHeight,
    expandedHeight,
    title = '',
    expandOnPanelClick,
    extra,
    children,
    defaultExpanded,
  } = props;
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);
  const [isHovered, setIsHovered] = useState(true);
  const [contentHeight, setContentHeight] = useState(collapsedHeight);
  const contentRef = useRef(null);
  const commonConfig = getCommonConfig();
  const { sparkPrefix, antPrefix } = commonConfig;
  const Style = useStyle();

  useEffect(() => {
    if (contentRef.current) {
      if (isExpanded && expandedHeight) {
        setContentHeight(expandedHeight);
      } else if (isExpanded) {
        setContentHeight(contentRef.current.scrollHeight);
      } else {
        setContentHeight(collapsedHeight);
      }
    }
  }, [isExpanded, collapsedHeight, expandedHeight, children]);

  const handleHeaderClick = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setIsExpanded((prev) => !prev);
  };

  const handlePanelClick = (e) => {
    e.stopPropagation();
    e.preventDefault();
    if (!isExpanded) {
      setIsExpanded(true);
    }
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(true);
  };

  return (
    <>
      <Style />
      <div
        className={classNames(
          `${sparkPrefix}-collapse-panel`,
          { collapsible: !isExpanded && expandOnPanelClick },
          props.classNames?.wrapper,
        )}
        style={props.styles?.wrapper}
        onClick={expandOnPanelClick ? handlePanelClick : undefined}
        onMouseEnter={expandOnPanelClick ? handleMouseEnter : undefined}
        onMouseLeave={expandOnPanelClick ? handleMouseLeave : undefined}
      >
        <div
          className={classNames(
            `${sparkPrefix}-collapse-panel-header`,
            props.classNames?.header,
          )}
          style={props.styles?.header}
          onClick={handleHeaderClick}
        >
          <span className={`${sparkPrefix}-collapse-panel-title`}>
            {title}
            <div className={`${sparkPrefix}-collapse-panel-icon-wrapper`}>
              {!isExpanded && isHovered && expandOnPanelClick && (
                <SparkDownLine style={{ fontSize: '18px' }} />
              )}
              {isExpanded && isHovered && expandOnPanelClick && (
                <SparkUpLine style={{ fontSize: '18px' }} />
              )}
            </div>
          </span>

          {extra && (
            <div
              className={`${sparkPrefix}-collapse-panel-extra`}
              onClick={(e) => {
                e.stopPropagation();
                e.preventDefault();
              }}
            >
              {extra}
            </div>
          )}
        </div>
        <div
          className={classNames(
            `${sparkPrefix}-collapse-panel-content`,
            { [`${sparkPrefix}-collapse-panel-expanded`]: isExpanded },
            props.classNames?.content,
          )}
          style={{ height: contentHeight, ...props.styles?.content }}
        >
          <div
            ref={contentRef}
            className={`${`${sparkPrefix}-collapse-panel-contentWrapper`} ${
              isExpanded && expandedHeight ? 'scrollable' : ''
            }`}
          >
            {children}
          </div>
          {!isExpanded && (
            <div className={`${sparkPrefix}-collapse-panel-mask`} />
          )}
        </div>
      </div>
    </>
  );
};

export default CollapsePanel;
