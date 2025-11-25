import { createGlobalStyle } from 'antd-style';

export default createGlobalStyle`

.${(p) => p.theme.prefixCls}-chat-anywhere-layout {
  *::-webkit-scrollbar {
    display: none;
  }
  font-family: ${(p) => p.theme.fontFamily};
  overflow: hidden;
  position: relative;
  height: 100%;
  background: ${(p) => p.theme.colorBgBase};

  &-main {
    display: flex;
    height: 100%;
    background: ${(p) => p.theme.colorBgBase};
  }

  &-left {
    display: flex;
    flex-direction: column;
    height: 100vh;
    box-sizing: border-box;
    background-color: ${(p) => p.theme.colorBgBase};
    width: 240px;
    transition: all 0.2s;

    &-hide {
      margin-left: -168px;
      background-color: transparent;
    }
  }

  &-right {
    position: relative;
    width: 0;
    flex: 1;
    box-sizing: border-box;
    background: ${(p) => p.theme.colorFillTertiary};
  }
}




*[data-tauri-drag-region] {
  -webkit-app-region: drag;
}
`;
