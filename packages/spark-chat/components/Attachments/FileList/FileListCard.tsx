import classnames from 'classnames';
import React from 'react';
import type { Attachment } from '..';
import { AttachmentContext } from '../context';
import { previewImage } from '../util';
import AudioIcon from './AudioIcon';
import Progress from './Progress';
import VideoIcon from './VideoIcon';
import Style from '../style/fileCard';
import { useProviderContext } from '@agentscope-ai/chat';
import { SparkFalseLine } from '@agentscope-ai/icons';


export interface FileListCardProps {
  /**
   * @description 自定义CSS类名前缀，用于样式隔离和主题定制
   * @descriptionEn Custom CSS class name prefix for style isolation and theme customization
   */
  prefixCls?: string;
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
   * @description 组件的CSS类名
   * @descriptionEn CSS class name for the component
   */
  className?: string;
  /**
   * @description 组件的内联样式对象
   * @descriptionEn Inline style object for the component
   */
  style?: React.CSSProperties;
  /**
   * @description 渲染类型，目前仅支持默认渲染模式
   * @descriptionEn Render type, currently only supports default render mode
   */
  renderType?: 'default',

}

const EMPTY = '\u00A0';

const DEFAULT_ICON_COLOR = '#8c8c8c';

const IMG_EXTS = ['png', 'jpg', 'jpeg', 'gif', 'bmp', 'webp', 'svg'];

const IconImage = ({ url }) => <img src={url} width={32} height={32} />

const PRESET_FILE_ICONS: {
  ext: string[];
  color: string;
  icon: React.ReactElement;
}[] = [
    {
      icon: <IconImage url="https://gw.alicdn.com/imgextra/i1/O1CN01cVtZXI23tPVhiZoPJ_!!6000000007313-55-tps-40-40.svg" />,
      color: '#22b35e',
      ext: ['xlsx', 'xls'],
    },
    {
      icon: <IconImage url="https://gw.alicdn.com/imgextra/i1/O1CN01uDnnuz1XMNEjgFMul_!!6000000002909-55-tps-40-40.svg" />,
      color: DEFAULT_ICON_COLOR,
      ext: IMG_EXTS,
    },
    {
      icon: <IconImage url="https://gw.alicdn.com/imgextra/i1/O1CN01PaXli01DDPAO68fsI_!!6000000000182-55-tps-40-40.svg" />,
      color: DEFAULT_ICON_COLOR,
      ext: ['md', 'mdx'],
    },
    {
      icon: <IconImage url="https://gw.alicdn.com/imgextra/i3/O1CN01mB5PzD27fuIWK661W_!!6000000007825-55-tps-40-40.svg" />,
      color: '#ff4d4f',
      ext: ['pdf'],
    },
    {
      icon: <IconImage url="https://gw.alicdn.com/imgextra/i3/O1CN01a8j7Jv1nW1QyFme7k_!!6000000005096-55-tps-40-40.svg" />,
      color: '#ff6e31',
      ext: ['ppt', 'pptx'],
    },
    {
      icon: <IconImage url="https://gw.alicdn.com/imgextra/i1/O1CN01XaNi8P1UkhQXoQdUL_!!6000000002556-55-tps-40-40.svg" />,
      color: '#1677ff',
      ext: ['doc', 'docx'],
    },
    {
      icon: <IconImage url="https://gw.alicdn.com/imgextra/i1/O1CN01K7jgEj1sywWTkPSGY_!!6000000005836-55-tps-40-40.svg" />,
      color: '#fab714',
      ext: ['zip', 'rar', '7z', 'tar', 'gz'],
    },
    {
      icon: <IconImage url="https://gw.alicdn.com/imgextra/i2/O1CN01zTTe0q1Xg4GkZgJol_!!6000000002952-55-tps-40-40.svg" />,

      color: '#ff4d4f',
      ext: ['mp4', 'avi', 'mov', 'wmv', 'flv', 'mkv'],
    },
    {
      icon: <IconImage url="https://gw.alicdn.com/imgextra/i2/O1CN01qOBdXG1UpHO6f3Vvc_!!6000000002566-55-tps-40-40.svg" />,

      color: '#8c8c8c',
      ext: ['mp3', 'wav', 'flac', 'ape', 'aac', 'ogg'],
    },
  ];

function matchExt(suffix: string, ext: string[]) {
  return ext.some((e) => suffix.toLowerCase() === `.${e}`);
}

function getSize(size: number) {
  let retSize = size;
  const units = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB'];
  let unitIndex = 0;

  while (retSize >= 1024 && unitIndex < units.length - 1) {
    retSize /= 1024;
    unitIndex++;
  }

  return `${retSize.toFixed(0)} ${units[unitIndex]}`;
}

function FileListCard(props: FileListCardProps, ref: React.Ref<HTMLDivElement>) {
  const { getPrefixCls } = useProviderContext();
  const { item, onRemove, className, style } = props;
  const context = React.useContext(AttachmentContext);
  const { disabled } = context || {};
  const { name, size, percent, status = 'done', description } = item;
  const prefixCls = getPrefixCls('attachment');
  const cardCls = `${prefixCls}-list-card`;

  const [namePrefix, nameSuffix] = React.useMemo(() => {
    const nameStr = name || '';
    const match = nameStr.match(/^(.*)\.[^.]+$/);
    return match ? [match[1], nameStr.slice(match[1].length)] : [nameStr, ''];
  }, [name]);

  const isImg = React.useMemo(() => matchExt(nameSuffix, IMG_EXTS), [nameSuffix]);

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

    return size ? getSize(size) : EMPTY;
  }, [status, percent]);

  const [icon, iconColor] = React.useMemo(() => {
    for (const { ext, icon, color } of PRESET_FILE_ICONS) {
      if (matchExt(nameSuffix, ext)) {
        return [icon, color];
      }
    }

    return [<IconImage url="https://gw.alicdn.com/imgextra/i1/O1CN01K7jgEj1sywWTkPSGY_!!6000000005836-55-tps-40-40.svg" key="defaultIcon" />, DEFAULT_ICON_COLOR];
  }, [nameSuffix]);

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

  let content: React.ReactNode = null;
  const previewUrl = item.thumbUrl || item.url || previewImg;
  const renderType = props.renderType || 'default';
  const isImgPreview = isImg && (item.originFileObj || previewUrl) && renderType === 'default';

  if (isImgPreview) {
    content = (
      <>
        {
          previewUrl && (
            <img alt="preview" src={previewUrl} />
          )
        }

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
      </>
    );
  } else {
    content = (
      <>
        <div className={`${cardCls}-icon`} style={{ color: iconColor }}>
          {icon}
        </div>
        <div className={`${cardCls}-content`}>
          <div className={`${cardCls}-name`}>
            {namePrefix ?? EMPTY}{nameSuffix}
          </div>
          <div className={`${cardCls}-desc`}>
            <div className={`${cardCls}-ellipsis-prefix`}>{desc}</div>
          </div>
        </div>
      </>
    );
  }

  return <>
    <Style />
    <div
      className={classnames(
        cardCls,
        {
          [`${cardCls}-status-${status}`]: status,
          [`${cardCls}-type-preview`]: isImgPreview,
          [`${cardCls}-type-overview`]: !isImgPreview,
          [`${cardCls}-type-${renderType}`]: true,
          [`${cardCls}-hoverable`]: !disabled && onRemove,
        },
        className,
      )}
      style={style}
      ref={ref}
    >
      {content}

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
    </div></>
}

export default React.forwardRef(FileListCard);
