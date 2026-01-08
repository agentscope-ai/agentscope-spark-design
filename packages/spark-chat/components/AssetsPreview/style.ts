import { createGlobalStyle } from 'antd-style';

export default createGlobalStyle`
.${(p) => p.theme.prefixCls}-assets-preview {

  &-container {
    display: flex;
    padding: 8px;
    gap: 8px;
    background-color: ${(p) => p.theme.colorFillTertiary};
  }
}
`;
