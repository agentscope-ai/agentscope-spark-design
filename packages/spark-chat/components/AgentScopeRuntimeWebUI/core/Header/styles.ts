import { createGlobalStyle } from 'antd-style';

export default createGlobalStyle`

.${(p) => p.theme.prefixCls}-chat-anywhere-default-header {
  &-inner {
    flex-direction: row-reverse;
    gap: 10px;
    padding: 0;
  }

  &-right {
    margin: 0 0 0 auto;
  }
}

.${(p) => p.theme.prefixCls}-chat-anywhere-default-header-sessions {
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 10px 0 10px 0;
}
`;
