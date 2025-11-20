import { type GetProp, GetRef, Upload, type UploadProps } from 'antd';
import classnames from 'classnames';
import React from 'react';
import { useProviderContext } from '@agentscope-ai/chat';

import { useEvent, useMergedState } from 'rc-util';
import DropArea from './DropArea';
import FileList, { type FileListProps } from './FileList';
import FileListCard from './FileList/FileListCard';
import PlaceholderUploader, {
  type PlaceholderProps,
  type PlaceholderType,
} from './PlaceholderUploader';
import SilentUploader from './SilentUploader';
import { AttachmentContext } from './context';
import Style from './style';

export type SemanticType = 'list' | 'item' | 'placeholder';

export type Attachment = GetProp<UploadProps, 'fileList'>[number] & {
  description?: React.ReactNode;
};

export interface AttachmentsProps extends Omit<UploadProps, 'fileList'> {
  /**
   * @description 自定义CSS类名前缀，用于样式隔离和主题定制
   * @descriptionEn Custom CSS class name prefix for style isolation and theme customization
   */
  prefixCls?: string;
  /**
   * @description 自定义根容器的CSS类名，用于覆盖默认样式
   * @descriptionEn Custom CSS class name for the root container to override default styles
   */
  rootClassName?: string;
  /**
   * @description 根容器的内联样式对象
   * @descriptionEn Inline style object for the root container
   */
  rootStyle?: React.CSSProperties;
  /**
   * @description 组件容器的内联样式对象
   * @descriptionEn Inline style object for the component container
   */
  style?: React.CSSProperties;
  /**
   * @description 组件的CSS类名
   * @descriptionEn CSS class name for the component
   */
  className?: string;
  /**
   * @description 语义化CSS类名，用于为不同区域添加自定义类名
   * @descriptionEn Semantic CSS class names for adding custom classes to different areas
   */
  classNames?: Partial<Record<SemanticType, string>>;
  /**
   * @description 语义化样式对象，用于精确控制不同区域的样式
   * @descriptionEn Semantic style object for precise control of different area styles
   */
  styles?: Partial<Record<SemanticType, React.CSSProperties>>;
  /**
   * @description 自定义子元素，用于扩展组件功能
   * @descriptionEn Custom child elements for extending component functionality
   */
  children?: React.ReactElement;
  /**
   * @description 是否禁用整个附件组件，包括拖拽和点击上传
   * @descriptionEn Whether to disable the entire attachment component, including drag and click upload
   */
  disabled?: boolean;
  /**
   * @description 占位符配置，支持静态内容或动态函数返回
   * @descriptionEn Placeholder configuration, supports static content or dynamic function return
   */
  placeholder?: PlaceholderType | ((type: 'inline' | 'drop') => PlaceholderType);
  /**
   * @description 获取拖拽容器的函数，用于自定义拖拽区域
   * @descriptionEn Function to get drag container for customizing drag area
   */
  getDropContainer?: null | (() => HTMLElement | null | undefined);
  /**
   * @description 附件列表数据，用于显示已上传的文件
   * @descriptionEn Attachment list data for displaying uploaded files
   */
  items?: Attachment[];
  /**
   * @description 文件列表溢出处理方式，影响多文件的显示效果
   * @descriptionEn File list overflow handling method, affects display effect of multiple files
   */
  overflow?: FileListProps['overflow'];
  /**
   * @description 渲染类型，目前仅支持默认渲染模式
   * @descriptionEn Render type, currently only supports default render mode
   */
  renderType?: 'default',
}

export interface AttachmentsRef {
  /**
   * @description 组件的原生DOM元素引用，用于直接操作DOM
   * @descriptionEn Native DOM element reference of the component for direct DOM manipulation
   */
  nativeElement: HTMLDivElement | null;
  /**
   * @description 手动触发文件上传的方法，接收File对象作为参数
   * @descriptionEn Method to manually trigger file upload, accepts File object as parameter
   */
  upload: (file: File) => void;
}

function Attachments(props: AttachmentsProps, ref: React.Ref<AttachmentsRef>) {
  const {
    prefixCls: customizePrefixCls,
    rootClassName,
    rootStyle,
    className,
    style,
    items,
    children,
    getDropContainer,
    placeholder,
    onChange,
    overflow,
    disabled,
    classNames = {},
    styles = {},
    ...uploadProps
  } = props;
  const { direction, getPrefixCls } = useProviderContext();
  const prefixCls = getPrefixCls('attachment');
  const containerRef = React.useRef<HTMLDivElement>(null);
  const uploadRef = React.useRef<GetRef<typeof Upload>>(null);

  React.useImperativeHandle(ref, () => ({
    nativeElement: containerRef.current,
    upload: (file) => {
      const fileInput = uploadRef.current?.nativeElement?.querySelector('input[type="file"]');

      // Trigger native change event
      if (fileInput) {
        const dataTransfer = new DataTransfer();
        dataTransfer.items.add(file);
        // @ts-ignore
        fileInput.files = dataTransfer.files;

        fileInput.dispatchEvent(new Event('change', { bubbles: true }));
      }
    },
  }));

  const [fileList, setFileList] = useMergedState([], {
    value: items,
  });

  const triggerChange: GetProp<AttachmentsProps, 'onChange'> = useEvent((info) => {
    setFileList(info.fileList);
    onChange?.(info);
  });

  const mergedUploadProps: UploadProps = {
    ...uploadProps,
    fileList,
    onChange: triggerChange,
  };

  const onItemRemove = (item: Attachment) => {
    const newFileList = fileList.filter((fileItem) => fileItem.uid !== item.uid);
    triggerChange({
      file: item,
      fileList: newFileList,
    });
  };

  let renderChildren: React.ReactElement;

  const getPlaceholderNode = (
    type: 'inline' | 'drop',
    props?: Pick<PlaceholderProps, 'style'>,
    ref?: React.RefObject<GetRef<typeof Upload>>,
  ) => {
    const placeholderContent = typeof placeholder === 'function' ? placeholder(type) : placeholder;

    return (
      <PlaceholderUploader
        placeholder={placeholderContent}
        upload={mergedUploadProps}
        prefixCls={prefixCls}
        className={classnames(classNames.placeholder)}
        style={{
          ...styles.placeholder,
          ...props?.style,
        }}
        ref={ref}
      />
    );
  };

  if (children) {
    renderChildren = (
      <>
        <SilentUploader upload={mergedUploadProps} rootClassName={rootClassName} ref={uploadRef}>
          {children}
        </SilentUploader>
        <DropArea
          getDropContainer={getDropContainer}
          prefixCls={prefixCls}
          className={classnames(rootClassName)}
        >
          {getPlaceholderNode('drop')}
        </DropArea>
      </>
    );
  } else {
    const hasFileList = fileList.length > 0;

    renderChildren = (
      <div
        className={classnames(
          prefixCls,
          {
            [`${prefixCls}-rtl`]: direction === 'rtl',
          },
          className,
          rootClassName,
        )}
        style={{
          ...rootStyle,
          ...style,
        }}
        dir={direction || 'ltr'}
        ref={containerRef}
      >
        <FileList
          prefixCls={prefixCls}
          items={fileList}
          onRemove={onItemRemove}
          overflow={overflow}
          upload={mergedUploadProps}
          listClassName={classnames(classNames.list)}
          listStyle={{
            ...styles.list,
            ...(!hasFileList && { display: 'none' }),
          }}
          itemClassName={classnames(classNames.item)}
          itemStyle={{
            ...styles.item,
          }}
          renderType={props.renderType}
        />
        {getPlaceholderNode('inline', hasFileList ? { style: { display: 'none' } } : {}, uploadRef)}
      </div>
    );
  }

  return <>
    <Style />
    <AttachmentContext.Provider
      value={{
        disabled,
      }}
    >
      {renderChildren}
    </AttachmentContext.Provider>
  </>
}

const ForwardAttachments = React.forwardRef(Attachments) as React.ForwardRefExoticComponent<
  AttachmentsProps & React.RefAttributes<AttachmentsRef>
> & {
  FileCard: typeof FileListCard;
};

ForwardAttachments.FileCard = FileListCard;

export default ForwardAttachments;
