import React, { useMemo } from 'react';
import { createGlobalStyle } from 'antd-style';
import { useProviderContext } from '@agentscope-ai/chat';
export interface IWelcomeProps {
  /**
   * @description 欢迎页面的主标题，支持文本或React元素
   * @descriptionEn Main title of the welcome page, supports text or React elements
   */
  title?: React.ReactNode | string;

  /**
   * @description 欢迎页面的描述文本，用于补充说明或引导用户
   * @descriptionEn Description text of the welcome page for supplementary explanation or user guidance
   */
  desc?: React.ReactNode | string;

  /**
   * @description 欢迎页面的品牌标识，支持图片URL或自定义React元素
   * @descriptionEn Brand logo of the welcome page, supports image URL or custom React elements
   */
  logo?: React.ReactNode | string;

  /**
   * @description 欢迎组件的内联样式对象，用于自定义外观
   * @descriptionEn Inline style object for the welcome component for customizing appearance
   */
  style?: React.CSSProperties;
}

const Style = createGlobalStyle`
.${(p) => p.theme.prefixCls}-welcome {
  display: flex;
  align-items: center;

  &-logo {
    display: block;
    margin-right: 20px;
  }

  &-title {
    font-size: 24px;
    line-height: 36px;
    font-weight: bold;
    color: ${(p) => p.theme.colorText};
  }

  &-desc {
    margin-top: 4px;
    font-size: 24px;
    line-height: 36px;
    color: ${(p) => p.theme.colorTextSecondary};
  }
}
`;

export default function (props: IWelcomeProps) {
  const { getPrefixCls } = useProviderContext();
  const prefix = getPrefixCls('welcome');
  const logoEle = typeof props.logo === 'string' ? <img className={prefix + '-logo'} src={props.logo} /> : props.logo;


  return <>
    <Style />
    <div className={prefix} style={props.style}>
      {logoEle}
      <div>
        {<div className={prefix + '-title'}>{props.title}</div>}
        {<div className={prefix + '-desc'}>{props.desc}</div>}
      </div>
    </div>
  </>;
}