import { createGlobalStyle } from 'antd-style';

export default createGlobalStyle`
.${(p) => p.theme.prefixCls}-disclaimer {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  line-height: 1.5;
  color: ${(p) => p.theme.colorTextTertiary};
  padding: 8px 12px;
}

.${(p) => p.theme.prefixCls}-disclaimer-after-link {
  padding-left: 8px;
}
`;
