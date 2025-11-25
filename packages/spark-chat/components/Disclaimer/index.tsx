import React from 'react';
import Style from './style';
import { useProviderContext } from '@agentscope-ai/chat';



export interface IDisclaimerProps {
  /**
   * @description 免责声明的文本内容，用于提醒用户AI的局限性
   * @descriptionEn Disclaimer text content for reminding users of AI limitations
   */
  desc?: React.ReactElement | string

  /**
   * @description 免责声明组件的内联样式对象，用于自定义外观
   * @descriptionEn Inline style object for the disclaimer component for customizing appearance
   */
  style?: React.CSSProperties

  /**
   * @description 免责声明后的链接配置，用于提供更多相关信息
   * @descriptionEn Link configuration after disclaimer for providing additional relevant information
   */
  afterLink?: {
    href: string
    text: string
  }
}

export default function (props: IDisclaimerProps) {
  const { desc = 'AI can also make mistakes, so please check carefully and use it with caution' } = props;
  const { getPrefixCls } = useProviderContext();
  const prefixCls = getPrefixCls('disclaimer');

  return <>
    <Style />
    <div className={prefixCls} style={props.style}>
      {desc}
      {props.afterLink && <a className={`${prefixCls}-after-link`} href={props.afterLink.href} target="_blank">{props.afterLink.text}</a>}
    </div>
  </>
}