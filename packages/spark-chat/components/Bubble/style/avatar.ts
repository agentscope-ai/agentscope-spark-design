import { createGlobalStyle } from 'antd-style';

export default createGlobalStyle`
.${(p) => p.theme.prefixCls}-bubble-avatar {
  display: inline-flex;
  justify-content: center;
  align-self: flex-start;

  &-loading .${(p) => p.theme.prefixCls}-avatar::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    width: 100%;
    height: 200%;
    background-image: url('data:image/png;base64,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');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    transform: rotate(-45deg);
    filter: blur(2px);
    animation: light_sweeping 1.5s infinite linear;
  }
}

@keyframes light_sweeping {
  0% {
    transform: translate(-40%, -80%);
    opacity: 0.2;
  }

  45% {
    transform: translate(20%, 20%);
    opacity: 0.8;
  }

  100% {
    transform: translate(40%, 80%);
    opacity: 0.2;
  }
}

`;
