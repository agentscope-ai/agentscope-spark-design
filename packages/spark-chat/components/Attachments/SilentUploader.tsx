import { type GetRef, Upload, type UploadProps } from 'antd';
import React from 'react';

export interface SilentUploaderProps {
  /**
   * @description 要包装的子元素，通常是触发上传的按钮或区域
   * @descriptionEn Child element to be wrapped, usually a button or area that triggers upload
   */
  children: React.ReactElement;
  /**
   * @description 上传组件的属性配置，用于控制上传行为
   * @descriptionEn Upload component props configuration for controlling upload behavior
   */
  upload: UploadProps;
  /**
   * @description 自定义根容器的CSS类名，用于覆盖默认样式
   * @descriptionEn Custom CSS class name for the root container to override default styles
   */
  rootClassName?: string;
}

/**
 * SilentUploader is only wrap children with antd Upload component.
 */
function SilentUploader(props: SilentUploaderProps, ref: React.Ref<GetRef<typeof Upload>>) {
  const { children, upload, rootClassName } = props;

  const uploadRef = React.useRef<GetRef<typeof Upload>>(null);
  React.useImperativeHandle(ref, () => uploadRef.current!);

  // ============================ Render ============================
  return (
    <Upload {...upload} showUploadList={false} rootClassName={rootClassName} ref={uploadRef}>
      {children}
    </Upload>
  );
}

export default React.forwardRef(SilentUploader);
