import { createGlobalStyle } from 'antd-style';

export default createGlobalStyle`
.${(p) => p.theme.prefixCls}-aigc-sender-header {
  display: flex;
  align-items: center;
  gap: 8px;
  height: 90px;
  padding: 12px;
  border-bottom: 1px dashed ${(p) => p.theme.colorBorderSecondary};

  .${(p) => p.theme.prefixCls}-aigc-sender-header-upload-hidden {
    overflow: hidden;
    opacity: 0;
    width: 0;
    height: 0;
    margin-left: -8px;
  }

  .${(p) => p.theme.prefixCls}-attachment {
    width: fit-content;
  }

  .${(p) => p.theme.prefixCls}-attachment-list {
    padding: 0;
  }

  .${(p) => p.theme.prefixCls}-attachment-list-card-type-preview {
    width: 100px;
    height: 64px;
  }
}
`;
