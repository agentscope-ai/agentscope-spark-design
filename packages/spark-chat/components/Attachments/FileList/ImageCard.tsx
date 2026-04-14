import classnames from 'classnames';
import React from 'react';
import { Image } from 'antd';
import type { Attachment } from '..';
import { AttachmentContext } from '../context';
import { previewImage } from '../util';
import Progress from './Progress';
import Style from '../style/fileCard';
import { useProviderContext } from '@agentscope-ai/chat';
import { SparkFalseLine, SparkVisibleLine, SparkRefreshLine, SparkReplaceLine } from '@agentscope-ai/icons';

export interface ImageCardProps {
  /**
   * @description 文件附件数据对象，包含文件的基本信息
   * @descriptionEn File attachment data object containing basic file information
   */
  item: Attachment;
  /**
   * @description 文件移除时的回调函数，用于处理文件删除操作
   * @descriptionEn Callback function when file is removed for handling file deletion operations
   */
  onRemove?: (item: Attachment) => void;
  /**
   * @description 替换当前图片的回调，传入原始附件和新选择的文件
   * @descriptionEn Callback to replace current image, receives the original attachment and newly selected file
   */
  onReplace?: (oldItem: Attachment, file: File) => void;
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

const EMPTY = '\u00A0';

const IMG_ACCEPT = 'image/png,image/jpeg,image/jpg,image/gif,image/bmp,image/webp,image/svg+xml';

function ImageCard(props: ImageCardProps, ref: React.Ref<HTMLDivElement>) {
  const { getPrefixCls } = useProviderContext();
  const { item, onRemove, onReplace, className, style } = props;
  const context = React.useContext(AttachmentContext);
  const { disabled } = context || {};
  const { percent, status = 'done', description } = item;
  const prefixCls = getPrefixCls('attachment');
  const cardCls = `${prefixCls}-list-card`;

  const [previewVisible, setPreviewVisible] = React.useState(false);
  const fileInputRef = React.useRef<HTMLInputElement>(null);

  const previewConfig = React.useMemo(() => ({
    visible: previewVisible,
    onVisibleChange: setPreviewVisible,
  }), [previewVisible]);

  const desc = React.useMemo(() => {
    if (description) {
      return description;
    }

    if (status === 'uploading') {
      return `${percent || 0}%`;
    }

    if (status === 'error') {
      return item.response || EMPTY;
    }

    return EMPTY;
  }, [description, status, percent, item.response]);

  const [previewImg, setPreviewImg] = React.useState<string>();

  React.useEffect(() => {
    if (item.originFileObj) {
      let synced = true;
      previewImage(item.originFileObj).then((url) => {
        if (synced) {
          setPreviewImg(url);
        }
      });

      return () => {
        synced = false;
      };
    }
    setPreviewImg(undefined);
  }, [item.originFileObj]);

  const previewUrl = item.thumbUrl || item.url || previewImg;

  const handleRefreshClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && onReplace) {
      onReplace(item, file);
    }
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <>
      <Style />
      <div
        className={classnames(
          cardCls,
          {
            [`${cardCls}-status-${status}`]: status,
            [`${cardCls}-type-preview`]: true,
            [`${cardCls}-hoverable`]: !disabled && onRemove,
          },
          className,
        )}
        style={style}
        ref={ref}
      >
        {previewUrl && <img alt="preview" src={previewUrl} />}

        <Image
          src={previewUrl}
          style={{ display: 'none' }}
          preview={previewConfig}
        />

        {status !== 'done' && (
          <div className={`${cardCls}-img-mask`}>
            {status === 'uploading' && percent !== undefined && (
              <Progress percent={percent} prefixCls={cardCls} />
            )}
            {status === 'error' && (
              <div className={`${cardCls}-desc`}>
                <div className={`${cardCls}-ellipsis-prefix`}>{desc}</div>
              </div>
            )}
          </div>
        )}

        {status === 'done' && (
          <div className={`${cardCls}-img-hover-mask`}>
            <button
              className={`${cardCls}-img-action`}
              onClick={(e) => {
                e.stopPropagation();
                setPreviewVisible(true);
              }}
            >
              <SparkVisibleLine />
            </button>
            {onReplace && (
              <button
                className={`${cardCls}-img-action`}
                onClick={handleRefreshClick}
              >
                <SparkReplaceLine />
              </button>
            )}
          </div>
        )}

        <input
          ref={fileInputRef}
          type="file"
          accept={IMG_ACCEPT}
          style={{ display: 'none' }}
          onChange={handleFileChange}
        />

        <button
          style={{
            opacity: !disabled && onRemove ? 1 : 0,
          }}
          className={`${cardCls}-remove`}
          onClick={() => {
            if (!disabled && onRemove) {
              onRemove(item);
            }
          }}
        >
          <SparkFalseLine />
        </button>
      </div>
    </>
  );
}

export default React.forwardRef(ImageCard);
