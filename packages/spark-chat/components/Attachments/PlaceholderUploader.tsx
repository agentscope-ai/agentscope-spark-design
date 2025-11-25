import { Flex, GetRef, Typography, Upload, type UploadProps } from 'antd';
import classNames from 'classnames';
import React from 'react';
import { AttachmentContext } from './context';

export interface PlaceholderConfig {
  /**
   * @description 占位符的图标元素，用于视觉引导
   * @descriptionEn Icon element for the placeholder for visual guidance
   */
  icon?: React.ReactNode;
  /**
   * @description 占位符的主标题文本，用于说明功能
   * @descriptionEn Main title text for the placeholder for explaining functionality
   */
  title?: React.ReactNode;
  /**
   * @description 占位符的描述文本，用于提供详细说明
   * @descriptionEn Description text for the placeholder for providing detailed explanation
   */
  description?: React.ReactNode;
}

export type PlaceholderType = PlaceholderConfig | React.ReactElement;

export interface PlaceholderProps {
  /**
   * @description 自定义CSS类名前缀，用于样式隔离和主题定制
   * @descriptionEn Custom CSS class name prefix for style isolation and theme customization
   */
  prefixCls: string;
  /**
   * @description 占位符配置，支持配置对象或自定义React元素
   * @descriptionEn Placeholder configuration, supports config object or custom React elements
   */
  placeholder?: PlaceholderType;
  /**
   * @description 上传组件的属性配置，用于控制上传行为
   * @descriptionEn Upload component props configuration for controlling upload behavior
   */
  upload?: UploadProps;
  /**
   * @description 组件的CSS类名
   * @descriptionEn CSS class name for the component
   */
  className?: string;
  /**
   * @description 组件的内联样式对象
   * @descriptionEn Inline style object for the component
   */
  style?: React.CSSProperties;
}

function Placeholder(props: PlaceholderProps, ref: React.Ref<GetRef<typeof Upload>>) {
  const { prefixCls, placeholder = {}, upload, className, style } = props;

  const placeholderCls = `${prefixCls}-placeholder`;

  const placeholderConfig = (placeholder || {}) as PlaceholderConfig;

  const { disabled } = React.useContext(AttachmentContext);

  const [dragIn, setDragIn] = React.useState(false);

  const onDragEnter = () => {
    setDragIn(true);
  };

  const onDragLeave = (e: React.DragEvent) => {
    // Leave the div should end
    if (!(e.currentTarget as HTMLElement).contains(e.relatedTarget as HTMLElement)) {
      setDragIn(false);
    }
  };

  const onDrop = () => {
    setDragIn(false);
  };

  const node = React.isValidElement(placeholder) ? (
    placeholder
  ) : (
    <Flex align="center" justify="center" vertical className={`${placeholderCls}-inner`}>
      <Typography.Text className={`${placeholderCls}-icon`}>
        {placeholderConfig.icon}
      </Typography.Text>
      <Typography.Title className={`${placeholderCls}-title`} level={5}>
        {placeholderConfig.title}
      </Typography.Title>
      <Typography.Text className={`${placeholderCls}-description`} type="secondary">
        {placeholderConfig.description}
      </Typography.Text>
    </Flex>
  );

  return (
    <div
      className={classNames(
        placeholderCls,
        {
          [`${placeholderCls}-drag-in`]: dragIn,
          [`${placeholderCls}-disabled`]: disabled,
        },
        className,
      )}
      onDragEnter={onDragEnter}
      onDragLeave={onDragLeave}
      onDrop={onDrop}
      aria-hidden={disabled}
      style={style}
    >
      <Upload.Dragger
        showUploadList={false}
        {...upload}
        ref={ref}
        style={{ padding: 0, border: 0, background: 'transparent' }}
      >
        {node}
      </Upload.Dragger>
    </div>
  );
}

export default React.forwardRef(Placeholder);
