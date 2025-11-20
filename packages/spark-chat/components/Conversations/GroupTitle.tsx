import { Typography } from 'antd';
import type { ConfigProviderProps, GetProp } from 'antd';
import classnames from 'classnames';
import React from 'react';

export interface GroupTitleProps {
  /**
   * @description 分组标题的内容，支持文本或React元素
   * @descriptionEn Content of the group title, supports text or React elements
   */
  children?: React.ReactNode;
}

export const GroupTitleContext = React.createContext<{
  prefixCls?: GetProp<ConfigProviderProps, 'prefixCls'>;
}>(null!);

const GroupTitle: React.FC<GroupTitleProps> = ({ children }) => {
  const { prefixCls } = React.useContext(GroupTitleContext);

  return (
    <div className={classnames(`${prefixCls}-group-title`)}>
      {children && <Typography.Text>{children}</Typography.Text>}
    </div>
  );
};

export default GroupTitle;
