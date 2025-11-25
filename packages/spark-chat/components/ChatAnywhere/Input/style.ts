import { createGlobalStyle } from 'antd-style';

export default createGlobalStyle`
.${(p) => p.theme.prefixCls}-chat-anywhere-sender-wrapper {
  position: relative;

  &-header {
    display: flex;
    gap: 8px;
    margin-bottom: 12px;
  }
}

`;
