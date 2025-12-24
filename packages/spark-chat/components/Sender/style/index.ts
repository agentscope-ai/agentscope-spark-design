import { createGlobalStyle } from 'antd-style';

const IndexStyle = createGlobalStyle`
.${(p) => p.theme.prefixCls}-sender {
  position: relative;
  width: 100%;
  box-sizing: border-box;
  box-shadow: 0px 12px 24px -16px rgba(54, 54, 73, 0.04),
    0px 12px 40px 0px rgba(51, 51, 71, 0.08),
    0px 0px 1px 0px rgba(44, 44, 54, 0.02);
  background-color: ${(p) => p.theme.colorBgBase};
  border-radius: ${(p) => p.theme.borderRadiusLG}px;
  border-color: ${(p) => p.theme.colorBorderSecondary};
  border-width: 0;
  border-style: solid;
  overflow: hidden;

  &:after {
    content: '';
    position: absolute;
    inset: 0;
    pointer-events: none;
    transition: border-color ${(p) => p.theme.motionDurationSlow};
    border-radius: inherit;
    border-style: inherit;
    border-color: inherit;
    border-width: ${(p) => p.theme.lineWidth}px;
  }

  &:focus-within {
    box-shadow: 0px 12px 24px -16px rgba(54, 54, 73, 0.04),
      0px 12px 40px 0px rgba(51, 51, 71, 0.08),
      0px 0px 1px 0px rgba(44, 44, 54, 0.02);
    border-color: ${(p) => p.theme.colorPrimaryHover};

    &:after {
      border-width: ${(p) => p.theme.lineWidth}px;
    }
  }

  &-disabled {
    .${(p) => p.theme.prefixCls}-sender-content,
    .${(p) => p.theme.prefixCls}-sender-header {
      background-color: ${(p) => p.theme.colorBgContainerDisabled};
    }
  }

  &-blur {
    .${(p) => p.theme.prefixCls}-sender-input {
      height: 22px !important;
      min-height: 22px !important;
    }
  }

  &.${(p) => p.theme.prefixCls}-sender-rtl {
    direction: rtl;
  }

  &-content {
    width: 100%;
    padding: 8px;
    box-sizing: border-box;
    overflow: hidden;
  }

  &-content-bottom {
    margin-top: 4px;
    display: flex;
  }

  &-prefix {
    width: 0;
    flex: 1;
    overflow: auto;
  }

  &-input {
    margin: 4px 0;
    padding: 0 8px;
    border-radius: 0;
    align-self: center;
    font-size: 14px;
    line-height: 22px;
  }

  &-actions-list {
    flex: none;
    display: flex;
    margin: 0 0 0 auto;

    &-presets {
      gap: ${(p) => p.theme.paddingXS}px;
    }

    &-length {
      font-size: 12px;
      line-height: 1;
      display: flex;
      align-items: center;
      padding: 0 12px;
      color: ${(p) => p.theme.colorTextTertiary};
    }
  }

  &-recording {
    height: 30px;
    padding: 0 8px;
    &-icon {
      display: block;
      width: 100%;
      height: 30px;
    }
  }

  &-actions-btn {
    &-disabled {
      background: ${(p) => `var(--${p.theme.prefixCls}-color-fill-disable)`};
    }

    &-loading-button {
      padding: 0;
      border: 0;
    }

    &-loading-icon {
      height: ${(p) => p.theme.controlHeight}px;
      width: ${(p) => p.theme.controlHeight}px;
      vertical-align: top;
    }

    &-recording-icon {
      height: 1.2em;
      width: 1.2em;
      vertical-align: top;
    }

    
  }
}

.${(p) => p.theme.prefixCls}-sender {
  &-header {
    &-motion {
      transition: height .3s, border .3s;
      overflow: hidden;
      &-enter-start,
      &-leave-active {
        border-bottom-color: transparent;
      }

      &-hidden {
        display: none;
      }
    }
  }
}
`;

export default IndexStyle;
