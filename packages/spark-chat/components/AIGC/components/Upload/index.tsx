import React from 'react';
import cls from 'classnames';
import { useProviderContext } from '@agentscope-ai/chat';
import { SparkPlusLine } from '@agentscope-ai/icons';
import { Upload } from 'antd';
import type { DraggerProps } from 'antd/es/upload';
import Style from './style';
import { IChatAnywhereConfigOnUpload } from '@agentscope-ai/chat/ChatAnywhere/hooks/types';

type MediaUploadProps = Omit<DraggerProps, keyof IChatAnywhereConfigOnUpload> &
  IChatAnywhereConfigOnUpload & {
    className?: string;
  };

const { Dragger } = Upload;

const MediaUpload: React.FC<MediaUploadProps> = (props) => {
  const { className, icon, ...restProps } = props;
  const { getPrefixCls } = useProviderContext();
  const prefixCls = getPrefixCls('media-upload');

  return (
    <>
      <Style />
      <Dragger
        showUploadList={false}
        className={cls(prefixCls, className)}
        {...restProps}
      >
        <div className={cls(`${prefixCls}-thumbnail`)}>
          {/* 渐变遮罩 */}
          <div className={cls(`${prefixCls}-thumbnail-gradient`)} />
          {/* 加号图标 */}
          {
            icon || (
              <SparkPlusLine className={cls(`${prefixCls}-thumbnail-icon`)} />
            )
          }
        </div>
      </Dragger>
    </>
  );
};

export default MediaUpload;
