import { useProviderContext } from '@agentscope-ai/chat';
import { createGlobalStyle } from 'antd-style';
import classNames from 'classnames';

const Style = createGlobalStyle`
.${p => p.theme.prefixCls}-markdown-cursor-dot {
  display: inline-flex;
  width: 0;
  align-items: center;
  padding-left: 2px;
  gap: 4px;


  &-dot1 {
    flex: 0 0 5px;
    width: 5px;
    height: 5px;
    border-radius: 999px;
    background-color: ${p => p.theme.colorText};
    animation: markdown-cursor-dot1 2s infinite ease;
  }


  &-dot2 {
    flex: 0 0 5px;
    width: 5px;
    height: 5px;
    border-radius: 999px;
    opacity: 0.5;
    background-color: ${p => p.theme.colorText};
    animation: markdown-cursor-dot2 2s infinite ease;
  }

}


@keyframes markdown-cursor-dot1 {
  0% {
    transform: translateX(0px)scale(1);
    z-index: 1;
    opacity: 1;

  }

  40% {
    transform: translateX(8.5px)scale(0.8);
    z-index: 3;
    opacity: 0.5;

  }

  50% {
    transform: translateX(8.5px) scale(0.8);
    z-index: 1;
    opacity: 0.5;
  }

  90% {
    transform: translateX(0px) scale(1);
    z-index: 1;
    opacity: 1;
  }
}

@keyframes markdown-cursor-dot2 {
  0% {
    transform: translateX(0px)scale(1);
    z-index: 1;
    opacity: 0.5;

  }

  40% {
    transform: translateX(-8.5px)scale(1.25);
    z-index: 3;
    opacity: 1;

  }

  50% {
    transform: translateX(-8.5px) scale(1.25);
    z-index: 1;
    opacity: 1;
  }

  90% {
    transform: translateX(0px) scale(1);
    z-index: 1;
    opacity: 0.5;
  }
}
`

export default function () {
  const { getPrefixCls } = useProviderContext();
  const prefixCls = getPrefixCls('markdown-cursor-dot');

  return <>
    <Style />
    <span className={classNames(prefixCls, getPrefixCls('markdown-cursor'))}>
      <span style={{ opacity: 0, marginLeft: '-.75em' }}>_</span>
      <span className={`${prefixCls}-dot1`}></span>
      <span className={`${prefixCls}-dot2`}></span>
    </span>
  </>
}