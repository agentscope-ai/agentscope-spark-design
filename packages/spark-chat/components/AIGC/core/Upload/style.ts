import { createGlobalStyle } from 'antd-style';

export default createGlobalStyle`
.${(p) => p.theme.prefixCls}-media-upload {
  width: fit-content;

  .${(p) => p.theme.prefixCls}-upload-drag {
    border: none;
  }
  .${(p) => p.theme.prefixCls}-upload-drag .${(p) => p.theme.prefixCls}-upload-btn {
    padding: 0;
  }

  /* 左侧缩略图区域 */
  &-thumbnail {
    position: relative;
    width: 100px;
    height: 64px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: ${(p) => p.theme.borderRadius}px;
    border: 1px solid ${(p) => p.theme.colorBorderSecondary};
    background-color: ${(p) => p.theme.colorBgBase};
    overflow: hidden;
    cursor: pointer;

    /* 渐变遮罩 */
    &-gradient {
      position: absolute;
      top: 0;
      left: 0;
      width: 100px;
      height: 42px;
      background: linear-gradient(
        174.5deg,
        rgba(205, 208, 220, 0.2) 0%,
        rgba(205, 208, 220, 0) 100%
      );
    }

    /* 加号图标 */
    &-icon {
      font-size: 20px;
      color: ${(p) => p.theme.colorText};
    }
  }
}
`;
