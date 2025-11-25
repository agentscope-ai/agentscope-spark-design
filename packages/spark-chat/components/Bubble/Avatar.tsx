import { Avatar as AAvatar } from 'antd';
import classnames from 'classnames';
import React from 'react';
import { BubbleProps } from './interface';

interface AvatarProps
  extends Pick<BubbleProps, 'avatar' | 'msgStatus' | 'prefixCls'> {
  isAssistant?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

const Avatar: React.FC<AvatarProps> = (props) => {
  const { avatar, msgStatus, isAssistant, prefixCls, className, style } = props;

  const avatarNode = React.isValidElement(avatar) ? (
    avatar
  ) : (
    <AAvatar {...avatar} />
  );

  return (
    <div
      className={classnames(
        `${prefixCls}-avatar`,
        {
          [`${prefixCls}-avatar-loading`]:
            isAssistant && msgStatus === 'generating',
        },
        className,
      )}
      style={style}
    >
      {avatarNode}
    </div>
  );
};

export default Avatar;
