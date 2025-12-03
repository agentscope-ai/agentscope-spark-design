import { useProviderContext } from '@agentscope-ai/chat';
import classNames from 'classnames';
import { createGlobalStyle } from 'antd-style';

const Style = createGlobalStyle`
.markdown-cursor-underline {
  opacity: 1;
  padding: 0 2px;
  animation: markdown-cursor-underline .8s infinite;

  &::after {
    content: '_';
    color: ${({ theme }) => theme.colorPrimary};
  }
}


@keyframes markdown-cursor-underline {
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
}
`



export default function () {
  const { getPrefixCls } = useProviderContext();
  const prefixCls = ('markdown-cursor-underline');
  return <>
    <Style />
    <span className={classNames(prefixCls, getPrefixCls('markdown-cursor'))} />
  </>
}