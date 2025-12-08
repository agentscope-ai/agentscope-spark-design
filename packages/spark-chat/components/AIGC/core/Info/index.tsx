import React from 'react';
import cls from 'classnames';
import { useProviderContext } from '@agentscope-ai/chat';
import Style from './style';

export interface MediaInfoProps {
  /** 自定义类名 */
  className?: string;
  /** 标题文本 */
  title?: string | React.ReactElement;
  /** 描述文本 */
  description?: string | React.ReactElement;
}

const MediaInfo: React.FC<MediaInfoProps> = (props) => {
  const { className, title, description } = props;
  const { getPrefixCls } = useProviderContext();
  const prefixCls = getPrefixCls('media-info');

  const showContent = !!title || !!description;

  if (!showContent) {
    return null;
  }

  return (
    <>
      <Style />
      <div className={cls(prefixCls, className)}>
        {
          title && (
            <div className={cls(`${prefixCls}-title`)}>{title}</div>
          )
        }
        {
          description && (
            <div className={cls(`${prefixCls}-description`)}>
              {description}
            </div>
          )
        }
      </div>
    </>
  );
};

export default MediaInfo;

