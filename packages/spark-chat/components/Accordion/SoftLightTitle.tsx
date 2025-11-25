import { useProviderContext } from '@agentscope-ai/chat';
import { theme as AntdTheme } from 'antd'

export default function (props: { children }) {
  const { theme, getPrefixCls } = useProviderContext();
  const isDarkMode = theme?.algorithm === AntdTheme.darkAlgorithm;
  const prefixCls = getPrefixCls('accordion-soft-light-title');

  return <div
    className={prefixCls}
    style={isDarkMode ? {} : { color: 'rgba(38, 36, 76, 0.88)' }}
  >{props.children}</div>
}