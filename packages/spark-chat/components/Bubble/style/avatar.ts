import { createGlobalStyle } from 'antd-style';

export default createGlobalStyle`
.${(p) => p.theme.prefixCls}-bubble-avatar {
  display: inline-flex;
  justify-content: center;
  align-self: flex-start;
  margin-bottom: 8px;

  .${(p) => p.theme.prefixCls}-avatar {
    background-color: ${(p) => p.theme.colorFillSecondary};
    position: relative;
    border: 0;
  }

  &-loading .${(p) => p.theme.prefixCls}-avatar::after {
    content: '';
    position: absolute;
    inset: 0px;
    border-radius: inherit;
    padding: 1px;
    background: conic-gradient(
      ${(p) => p.theme.colorBorder},
      ${(p) => p.theme.colorBorderSecondary},
      transparent,
      ${(p) => p.theme.colorBorder}
    );
    -webkit-mask:
      linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    pointer-events: none;
    z-index: 1;
    animation: avatar-border-spin 1.5s linear infinite;
  }

  ~ .${(p) => p.theme.prefixCls}-bubble-content-wrapper {
    width: 0;
    flex: 1;
  }
}

@keyframes avatar-border-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
`;
