import classnames from 'classnames';
import React from 'react';
import { createPortal } from 'react-dom';
import { AttachmentContext } from './context';

export interface DropUploaderProps {
  /**
   * @description 自定义CSS类名前缀，用于样式隔离和主题定制
   * @descriptionEn Custom CSS class name prefix for style isolation and theme customization
   */
  prefixCls: string;
  /**
   * @description 拖拽区域的CSS类名
   * @descriptionEn CSS class name for the drop area
   */
  className: string;
  /**
   * @description 获取拖拽容器的函数，用于自定义拖拽区域
   * @descriptionEn Function to get drop container for customizing drop area
   */
  getDropContainer?: null | (() => HTMLElement | null | undefined);
  /**
   * @description 拖拽区域内的子元素，用于显示拖拽提示内容
   * @descriptionEn Child elements within the drop area for displaying drop prompt content
   */
  children?: React.ReactNode;
}

export default function DropArea(props: DropUploaderProps) {
  const { getDropContainer, className, prefixCls, children } = props;
  const { disabled } = React.useContext(AttachmentContext);

  const [container, setContainer] = React.useState<HTMLElement | null | undefined>();
  const [showArea, setShowArea] = React.useState<boolean | null>(null);

  React.useEffect(() => {
    const nextContainer = getDropContainer?.();
    if (container !== nextContainer) {
      setContainer(nextContainer);
    }
  }, [getDropContainer]);

  React.useEffect(() => {
    // Add global drop event
    if (container) {
      const onDragEnter = () => {
        setShowArea(true);
      };

      // Should prevent default to make drop event work
      const onDragOver = (e: DragEvent) => {
        e.preventDefault();
      };

      const onDragLeave = (e: DragEvent) => {
        if (!e.relatedTarget) {
          setShowArea(false);
        }
      };
      const onDrop = (e: DragEvent) => {
        setShowArea(false);
        e.preventDefault();
      };

      document.addEventListener('dragenter', onDragEnter);
      document.addEventListener('dragover', onDragOver);
      document.addEventListener('dragleave', onDragLeave);
      document.addEventListener('drop', onDrop);
      return () => {
        document.removeEventListener('dragenter', onDragEnter);
        document.removeEventListener('dragover', onDragOver);
        document.removeEventListener('dragleave', onDragLeave);
        document.removeEventListener('drop', onDrop);
      };
    }
  }, [!!container]);

  const showDropdown = getDropContainer && container && !disabled;

  if (!showDropdown) {
    return null;
  }

  const areaCls = `${prefixCls}-drop-area`;

  return createPortal(
    <div
      className={classnames(areaCls, className, {
        [`${areaCls}-on-body`]: container.tagName === 'BODY',
      })}
      style={{ display: showArea ? 'block' : 'none' }}
    >
      {children}
    </div>,
    container,
  );
}
