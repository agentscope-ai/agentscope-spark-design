import { createGlobalStyle } from 'antd-style';

const Style = createGlobalStyle`
.${(p) => p.theme.prefixCls}-bubble-footer {
  width: 100%;
  margin-top: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 12px;
  overflow: hidden;
}

.${(p) => p.theme.prefixCls}-bubble-footer-actions {
  display: flex;
  align-items: center;
  gap: 8px;

  &-item {
    cursor: pointer;
    color: ${(p) => p.theme.colorText}
  }
}

.${(p) => p.theme.prefixCls}-bubble-footer-count {
  display: flex;
  align-items: center;

  &-item {
    color: ${(p) => p.theme.colorTextTertiary};
    line-height: 1;
    padding-right: 13px;
    margin-left: 13px;
    border-right: 1px solid ${(p) => p.theme.colorBorder};
    white-space: nowrap;

    &:last-of-type {
      padding-right: 0;
      border-right: 0;
    }
  }
}
`;

export default Style;
