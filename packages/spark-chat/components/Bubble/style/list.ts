import { createGlobalStyle } from 'antd-style';

export default createGlobalStyle`
.${(p) => p.theme.prefixCls}-bubble-list-wrapper {
  position: relative;
  overflow: hidden;
}

.${(p) => p.theme.prefixCls}-bubble-list {
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 16px 16px 0 16px;

  &::after {
    display: block;
    content: ' ';
    height: 16px;
  }
}

.${(p) => p.theme.prefixCls}-bubble-list-scroll-to-bottom {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 10px;
  display: flex;
  justify-content: center;
  transition: all 0.2s;
  z-index: 10;

  &-hide {
    opacity: 0;
    transform: translateY(100%);
    pointer-events: none;
  }

  &-show {
    opacity: 1;
    transform: translateY(0%);
  }

  button {
    &:hover {
      border-color: ${(p) => p.theme.colorPrimaryBorder} !important;
      background-color: ${(p) => p.theme.colorPrimaryBg} !important;
      color: ${(p) => p.theme.colorPrimary} !important;
    }
  }
}
`;
