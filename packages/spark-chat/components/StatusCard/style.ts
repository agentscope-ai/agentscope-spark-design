import { createGlobalStyle } from 'antd-style';

export default createGlobalStyle`
.${(p) => p.theme.prefixCls}-status-card {
  width: 100%;
  border-radius: ${(p) => p.theme.borderRadiusLG}px;
  border: 1px solid ${(p) => p.theme.colorBorderSecondary};
  overflow: hidden;
  &-success {
    background-color: ${(p) => p.theme.colorSuccessBg};

    .${(p) => p.theme.prefixCls}-status-card-header-icon {
      color: ${(p) => p.theme.colorSuccess};
    }
  }
  &-error {
    background-color: ${(p) => p.theme.colorErrorBg};

    .${(p) => p.theme.prefixCls}-status-card-header-icon {
      color: ${(p) => p.theme.colorError};
    }
  }
  &-warning {
    background-color: ${(p) => p.theme.colorWarningBg};

    .${(p) => p.theme.prefixCls}-status-card-header-icon {
      color: ${(p) => p.theme.colorWarning};
    }
  }
  &-info {
    background-color: ${(p) => p.theme.colorFillTertiary};

    .${(p) => p.theme.prefixCls}-status-card-header-icon {
      color: ${(p) => p.theme.colorInfo};
    }
  }

  &-header-icon {
    font-size: 16px;
  }


  &-header-title {
    font-size: 13px;
    color: ${(p) => p.theme.colorText};
  }

  &-header {
    padding: 0 12px;
  }

  &-header-top {
    display: flex;
    align-items: center;
    gap: 8px;
    height: 32px;
  }


  &-header-description {
    margin-top: -6px;
    margin-bottom: 8px;
    margin-left: 24px;
    font-size: 12px;
    color: ${(p) => p.theme.colorTextTertiary};
  }





  &-HITL {
    padding: 16px;
    border-top: 1px solid ${(p) => p.theme.colorBorderSecondary};
    background-color: ${(p) => p.theme.colorBgBase};
    border-radius: ${(p) => p.theme.borderRadiusLG}px ${(p) =>
  p.theme.borderRadiusLG}px 0 0;

    &-desc {
      color: ${(p) => p.theme.colorTextTertiary};
      margin-bottom: 12px;
    }

    &-button {
      display: flex;
      justify-content: flex-end;
    }
  
  }

  &-statistic {
    display: flex;
    padding: 16px 26px;
    border-top: 1px solid ${(p) => p.theme.colorBorderSecondary};
    background-color: ${(p) => p.theme.colorBgBase};
    border-radius: ${(p) => p.theme.borderRadiusLG}px ${(p) =>
  p.theme.borderRadiusLG}px 0 0;

    &-item {
      display: flex;
      flex-direction: column;
      flex: 1;
      gap: 8px;

      &-title {
        font-size: 12px;
        color: ${(p) => p.theme.colorTextTertiary};
      }

      &-value {
        font-size: 18px;
        line-height: 32px;
        color: ${(p) => p.theme.colorText};
      }
    }
  }

}
`;
