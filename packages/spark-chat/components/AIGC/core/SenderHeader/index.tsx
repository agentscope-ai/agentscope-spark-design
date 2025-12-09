import React, { useMemo } from 'react';
import cls from 'classnames';
import { IChatAnywhereConfigOnUpload } from '@agentscope-ai/chat/ChatAnywhere/hooks/types';
import { Attachments, Sender, useProviderContext } from '@agentscope-ai/chat';
import MediaUpload from '../Upload';
import MediaInfo from '../Info';
import { GetProp } from 'antd';
import Style from './style';

type AttachedFiles = GetProp<typeof Attachments, 'items'>;

export interface SenderHeaderProps {
  className?: string;
  onUpload?: IChatAnywhereConfigOnUpload[];
  attachedFiles?: AttachedFiles[];
  onFileChange?: (index: number, fileList: AttachedFiles) => void;
  enableFocusVisible?: boolean;
  focus?: boolean;
}

const SenderHeader: React.FC<SenderHeaderProps> = (props) => {
  const { className, onUpload = [], attachedFiles = [[]], onFileChange, enableFocusVisible = false, focus = false } = props;
  const { getPrefixCls } = useProviderContext();
  const prefixCls = getPrefixCls('aigc-sender-header');

  const open = useMemo(() => {
    if (attachedFiles.flat().length > 0) {
      return true;
    }
    if (onUpload.length <= 0) {
      return false;
    }

    if (focus) {
      return true;
    }

    if (!enableFocusVisible) {
      return true;
    }

    return false;
  }, [onUpload, attachedFiles, enableFocusVisible, focus]);

  return (
    <>
      <Style />
      <Sender.Header
        closable={false}
        open={open}
      >
        <div className={cls(prefixCls, className, {
          [`${prefixCls}-focus`]: focus,
        })}>
          {onUpload?.map((item, index) => {
            const { title, description, maxCount = 1, ...restProps } = item;
            const fileList = attachedFiles[index] || [];

            return (
              <>
                {
                  <MediaUpload
                    key={`upload-${index}`}
                    className={cls({
                      [`${prefixCls}-upload-hidden`]: fileList.length >= maxCount,
                    })}
                    maxCount={maxCount}
                    fileList={fileList}
                    onChange={(info) => {
                      if (item.beforeUpload && info.file.status) {
                        onFileChange(index, info.fileList)
                      }

                      if (!item.beforeUpload) {
                        onFileChange(index, info.fileList)
                      }
                    }}
                    showUploadList={false}
                    {...restProps}
                  />
                }
                {
                  fileList.length > 0 && (
                    <Attachments
                      key={`attachments-${index}`}
                      items={fileList}
                      onChange={(info) => onFileChange(index, info.fileList)}
                    />
                  )
                }
                {
                  maxCount === 1 && (
                    <MediaInfo key={`info-${index}`} title={title} description={description} />
                  )
                }
              </>
            );
          })}
        </div>
      </Sender.Header>
    </>
    
  );
};

export default SenderHeader;