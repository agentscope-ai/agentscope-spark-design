import { createGlobalStyle } from 'antd-style';

export default createGlobalStyle`
.${(p) => p.theme.prefixCls}-bubble-list-wrapper {
  position: relative;
  overflow: hidden;
  height: 100%;
}

.${(p) => p.theme.prefixCls}-bubble-list-scroll {
  height: 100%;
  width: 100%;
  overflow: auto;
  scrollbar-gutter: stable both-edges;
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

  &-order-desc {
    flex-direction: column-reverse;

    &::before {
      display: block;
      content: ' ';
      height: 16px;
      flex: 0 0 16px;
    }

    &::after {
      height: 0;
      flex: 0 0 0;
    }
  }

  &-order-desc-short {
    height: 0;
    flex: 1;
  }
}

.${(p) => p.theme.prefixCls}-bubble-list-load-more {
  display: flex;
  padding: 16px 0;
  justify-content: center;
  align-items: center;
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
