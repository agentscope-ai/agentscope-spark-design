import { Avatar, AvatarProps } from 'antd';
import { forwardRef, useEffect, useState } from 'react';
import { useStyle } from './index.style';

const SparkAvatar = forwardRef<any, AvatarProps>((props, ref) => {
  const Style = useStyle();
  const { children, ...restProps } = props;
  const [modifiedChildren, setModifiedChildren] = useState<
    AvatarProps['children']
  >(props.children);

  useEffect(() => {
    if (typeof children === 'string') {
      // 使用 Array.from 来正确处理 emoji 等多字节字符
      setModifiedChildren(Array.from(children)[0]);
      return;
    }
    if (typeof children === 'number') {
      // 数字类型转换为字符串后截取第一个字符
      setModifiedChildren(Array.from(String(children))[0]);
      return;
    }
    setModifiedChildren(children);
  }, [children]);
  return (
    <>
      <Style />
      <Avatar ref={ref} {...restProps}>
        {modifiedChildren}
      </Avatar>
    </>
  );
});

export default SparkAvatar;
