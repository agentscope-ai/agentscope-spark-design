import { createGlobalStyle } from 'antd-style';

export default createGlobalStyle`
.${(p) => p.theme.prefixCls}-attachment-list-card {
  border-radius: ${(p) => p.theme.borderRadius}px;
  position: relative;
  background: ${(p) => p.theme.colorBgContainer};
  border-width: ${(p) => p.theme.lineWidth}px;
  border-style: solid;
  border-color: ${(p) => p.theme.colorBorderSecondary};
  flex: none;
  transition: all 0.3s;

  &-name,
  &-desc {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    max-width: 100%;
  }

  &-ellipsis-prefix {
    flex: 0 1 auto;
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  &-ellipsis-suffix {
    flex: none;
  }

  &-type-overview {
    padding: 0 8px;
    display: flex;
    height: 56px;
    gap: ${(p) => p.theme.paddingXS}px;
    align-items: center;
    width: 140px;

    .${(p) => p.theme.prefixCls}-attachment-list-card-icon {
      display: flex;
      align-items: center;
    }

    .${(p) => p.theme.prefixCls}-attachment-list-card-content {
      flex: auto;
      min-width: 0;
      display: flex;
      flex-direction: column;
      align-items: stretch;
      font-size: ${(p) => p.theme.fontSize}px;
      color: ${(p) => p.theme.colorText};
    }

    .${(p) => p.theme.prefixCls}-attachment-list-card-desc {
      color: ${(p) => p.theme.colorTextQuaternary};
      font-size: ${(p) => p.theme.fontSizeSM}px;
    }
  }

  &-type-preview {
    width: 56px;
    height: 56px;
    line-height: 1;

    img {
      width: 100%;
      height: 100%;
      vertical-align: top;
      object-fit: cover;
      border-radius: 5px;
    }

    .${(p) => p.theme.prefixCls}-attachment-list-card-img-mask {
      position: absolute;
      inset: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      background: rgba(0, 0, 0, ${(p) => p.theme.opacityLoading});
      border-radius: inherit;
    }

    &.${(p) => p.theme.prefixCls}-attachment-list-card-status-error {

      img,
      .${(p) => p.theme.prefixCls}-attachment-list-card-img-mask {
        border-radius: calc(${(p) => p.theme.borderRadius}px - ${(p) =>
  p.theme.lineWidth}px);
      }

      .${(p) => p.theme.prefixCls}-attachment-list-card-desc {
        padding-inline: ${(p) => p.theme.paddingXXS}px;
      }
    }

    .${(p) => p.theme.prefixCls}-attachment-list-card-progress {
    }
  }

  &-remove {
    position: absolute;
    top: -6px;
    right: -6px;
    width: 16px;
    height: 16px;
    line-height: 1;
    font-size: 10px;
    cursor: pointer;
    display: none;
    color: ${(p) => p.theme.colorText};
    background-color: ${(p) => p.theme.colorBgContainer};
    border-width: ${(p) => p.theme.lineWidth}px;
    border-style: solid;
    border-color: ${(p) => p.theme.colorBorder};
    border-radius: 50%;
    align-items: center;
    justify-content: center;
    transition: all 0.3s;
    z-index: 1;

    &:dir(rtl) {
      transform: translate(-50%, -50%);
    }
  }

  &:hover &-remove {
    display: flex;
    
  }

  &-status-error {
    border-color: ${(p) => p.theme.colorError};

    .${(p) => p.theme.prefixCls}-attachment-list-card-desc {
      color: ${(p) => p.theme.colorError};
    }
  }

  &-motion {

    &-appear-start {
      width: 0;
      transition: none;
    }

    &-leave-active {
      opacity: 0;
      width: 0;
      padding-inline: 0;
      border-inline-width: 0;
      margin-inline-end: calc(-1 * ${(p) => p.theme.paddingSM}px);
    }
  }
}

.${(p) => p.theme.prefixCls}-attachment-list-card-hoverable {
  position: relative;

  &:hover {
    border-color: ${(p) => p.theme.colorPrimary};

    &::after {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      border-radius: 5px;
      height: 54px;
      background-color: rgba(0, 0, 0, 0.45);
    }
  }

}
`;
