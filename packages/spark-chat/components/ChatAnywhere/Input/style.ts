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

.${(p) => p.theme.prefixCls}-chat-anywhere-sender-upload-hidden-nodes {
    position: absolute;
    z-index: -999;
    top: -100vh;
    left: -100vw;
    width: 0;
    height: 0;
    overflow: hidden;
  }
}
`;
