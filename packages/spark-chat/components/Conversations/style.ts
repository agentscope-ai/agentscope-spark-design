import { createGlobalStyle } from 'antd-style';

export default createGlobalStyle`
.${(p) => p.theme.prefixCls}-conversations {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 0;
  overflow-y: hidden;
  margin: 0;

  &-rtl {
    direction: rtl;
  }

  &-list {
    display: flex;
    gap: ${(p) => p.theme.paddingXXS}px;
    flex-direction: column;

    .${(p) => p.theme.prefixCls}-conversations-item {
      padding-inline-start: ${(p) => p.theme.paddingXL}px;
    }

    .${(p) => p.theme.prefixCls}-conversations-label {
      color: ${(p) => p.theme.colorTextSecondary};
    }
  }

  &-timeline {
    position: relative;
    z-index: 1;
    width: 8px;
    height: 8px;
    border-radius: 8px;
    background-color: ${(p) => p.theme.colorBgBase};
    border: 1px solid ${(p) => p.theme.colorBorder};
    margin-right: 8px;
  }

  &-content {
    height: 36px;
    display: flex;
    align-items: center;
    padding: 6px 2px 6px 16px;
  }

  &-desc {
    font-size: 12px;
    padding: 0 16px 6px 16px;
    color: ${(p) => p.theme.colorTextSecondary};
  }

  &-item {
    position: relative;
    border-radius: ${(p) => p.theme.borderRadiusLG}px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &-timeline {
      &::before {
        content: '';
        position: absolute;
        left: 19.5px;
        top: 0;
        bottom: -8px;
        width: 1px;
        background: ${(p) => p.theme.colorBorder};
      }
    }

    &:hover {
      background-color: ${(p) => p.theme.colorFillTertiary};
    }

    &-active {
      background-color: ${(p) => p.theme.colorFillTertiary};

      .${(p) => p.theme.prefixCls}-conversations-label,
      .${(p) => p.theme.prefixCls}-conversations-menu-icon {
        color: ${(p) => p.theme.colorText};
      }
    }

    &-disabled {
      cursor: not-allowed;

      .${(p) => p.theme.prefixCls}-conversations-label {
        color: ${(p) => p.theme.colorTextDisabled};
      }

      .${(p) => p.theme.prefixCls}-conversations-menu-icon {
        opacity: 0;
      }
    }

    &:hover,
    &-active {
      .${(p) => p.theme.prefixCls}-conversations-menu-icon {
        opacity: 1;
      }
    }

    &:focus-within {
      background-color: ${(p) => p.theme.colorFillTertiary};
      
    
    }
  }

  &-label {
    flex: 1;
    color: ${(p) => p.theme.colorText};
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }

  &-label-edit {
    font-size: 14px;
    color: ${(p) => p.theme.colorText};
    font-family: ${(p) => p.theme.fontFamily};
    flex: 1;
    border: none;
    height: 22px;
    line-height: 22px;
    outline: none;
    background-color: transparent;
    padding: 0;
  }


  &-menu-icon {
    opacity: 0;
    transition: all 0.3s;
    font-size: ${(p) => p.theme.fontSizeXL}px;
  }

  &-menu-popover {
    display: flex;
    flex-direction: column;
    &-item {
    }
  }

  &-group-title {
    display: flex;
    align-items: center;
    height: ${(p) => p.theme.controlHeightLG}px;
    min-height: ${(p) => p.theme.controlHeightLG}px;
    padding: 0 ${(p) => p.theme.paddingXS}px;
  }
}`;
