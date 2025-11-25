import { createGlobalStyle } from 'antd-style';

export default createGlobalStyle`
.${(p) => p.theme.prefixCls}-accordion-group {
  width: 100%;

  svg {
    transform: scale(1.25);
  }
  
  .anticon-spin::before,
  .anticon-spin {
    animation-duration: 2s;
  }
  &-icon-success {
    color: ${(p) => p.theme.colorSuccess};
  }

  


  @keyframes ${(p) => p.theme.prefixCls}-loading {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  &-icon-error {
    color: ${(p) => p.theme.colorError};
  }

  &-header {
    display: flex;
    align-items: center;
    gap: 4px;
    color: ${(p) => p.theme.colorTextSecondary};
    padding: 6px 12px;
    font-size: 12px;
    cursor: pointer;
    line-height: 20px;
    background-color: ${(p) => p.theme.colorBgBase};

    &-arrow {
      display: flex;
      align-items: center;
    }

    &-close {
      border-radius: ${(p) => p.theme.borderRadiusLG}px;
      border: 1px solid ${(p) => p.theme.colorBorderSecondary};
      display: inline-flex;
    }

    &-icon {
      position: relative;
      display: flex;
      width: 16px;
      height: 16px;
      align-items: center;
      justify-content: center;
      font-size: 14px;

      &-line {
        &::before,
        &::after {
          content: '';
          position: absolute;
          width: 1px;
          height: 7px;
          background-color: ${(p) => p.theme.colorBorder};
          left: 50%;
          transform: translateX(-50%);
        }

        &::before {
          top: -9px;
        }

        &::after {
          bottom: -9px;
        }
      }

      &-last::after {
        content: none;
      }

      &-first::before {
        content: none;
      }
    }
  }

  &-open {
    overflow: hidden;
    border-radius: 8px;
    border: 1px solid ${(p) => p.theme.colorBorderSecondary};
    background-color: ${(p) => p.theme.colorBgBase};
  }

  &-body {
    margin: 8px;
    color: ${(p) => p.theme.colorText};
    font-size: 12px;
    border-radius: 8px;
    overflow: hidden;

    .${(p) => p.theme.prefixCls}-accordion-group-header {
      background-color: transparent;
    }

    

    .${(p) => p.theme.prefixCls}-accordion-group-header-close,
    .${(p) => p.theme.prefixCls}-accordion-group-open {
      border: 0;
    }

    .${(p) => p.theme.prefixCls}-accordion-group-header-close {
      display: flex;
    }

    &-inline {
      padding: 8px 0;
      margin: 0;
      background-color: transparent;
    }

    > .${(p) => p.theme.prefixCls}-accordion-group {
      background-color: ${(p) => p.theme.colorFillTertiary};

      &-open {
        border-radius: 0;
      }
    }

    &-close {
      height: 0;
      padding: 0;
      margin: 0;
    }
  }
}

.${(p) => p.theme.prefixCls}-accordion-deep-thinking {
  font-size: 12px;
  color: ${(p) => p.theme.colorTextSecondary};
  text-align: left;
  white-space: pre-wrap;
  line-height: 20px;
  padding: 0 12px;
  border-left: 1px solid ${(p) => p.theme.colorBorderSecondary};
}

.${(p) => p.theme.prefixCls}-accordion-soft-light-title {
  font-size: 12px;
  position: relative;
  display: inline-block;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  mask-image: linear-gradient(
    270deg,
    rgba(231, 231, 237, 0.88) 20%,
    rgba(231, 231, 237, 0.5) 50%,
    rgba(255, 255, 255, 0.4) 52%,
    rgba(231, 231, 237, 0.5) 70%,
    rgba(231, 231, 237, 0.88) 80%
  );
  mask-size: 200% 100%;
  animation: softlight-text 3s linear infinite;
}


@keyframes softlight-text {
  0% {
    mask-position: 100% 0;
  }

  100% {
    mask-position: -100% 0;
  }
}

.${(p) => p.theme.prefixCls}-accordion-content-body {
  border: 1px solid ${(p) => p.theme.colorBorderSecondary};
  border-radius: 8px;
  overflow: hidden;
  &-header {
    display: flex;
    height: 24px;
    align-items: center;
    justify-content: space-between;
    padding: 0 12px;
    border-bottom: 1px solid ${(p) => p.theme.colorBorderSecondary};
    background-color: ${(p) => p.theme.colorFillTertiary};
    color: ${(p) => p.theme.colorText};
  }

  &-body {
    background-color: ${(p) => p.theme.colorBgBase};
  }
}
`;
