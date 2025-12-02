import { createGlobalStyle } from 'antd-style';


export default createGlobalStyle`
* {
  -webkit-tap-highlight-color: transparent !important;
  tap-highlight-color: transparent !important;
}

.${(p) => p.theme.prefixCls}-chat-anywhere-layout {
  height: 100%;
  background: ${(p) => p.theme.colorBgBase};
  display: flex;
}

.${(p) => p.theme.prefixCls}-chat-anywhere-layout-left {
  width: 240px;
  background-color: ${(p) => p.theme.colorBgBase};
  transition: all 0.2s;

  &-collapsed {
    margin-left: -168px;
  }
}

.${(p) => p.theme.prefixCls}-chat-anywhere-layout-right {
  position: relative;
  width: 0;
  flex: 1;
  background: ${(p) => p.theme.colorFillTertiary};

  &-header {
    height: 54px;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    z-index: 1;
    display: flex;
    align-items: center;
    padding: 0 20px;
    backdrop-filter: blur(10px);
  }
}

.${(p) => p.theme.prefixCls}-chat-anywhere-layout-right-has-header {
  .${(p) => p.theme.prefixCls}-chat-anywhere-message-list > div::before {
    content: ' ';
    display: block;
    height: 54px;
  }
}

.${(p) => p.theme.prefixCls}-chat-anywhere-sessions {
  display: flex;
  flex-direction: column;
  height: 100%;

  &-list {
    padding: 10px 20px;
    height: 0;
    flex: 1;
    overflow-y: scroll;

    /* 隐藏滚动条 */
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none; /* IE and Edge */
    &::-webkit-scrollbar {
      display: none; /* Chrome, Safari, Opera */
    }

  }

  &-header {
    display: flex;
    align-items: center;
    padding: 0 20px;
    height: 54px;

    &-collapse {
    }

    &-left {
      flex: 1;
      display: flex;
      align-items: center;
      gap: 4px;
      flex: 1;
      font-weight: 500;
    }
  }

  &-adder {
    padding: 0 20px 8px 20px;
  }

  &-content {
    display: flex;
    flex-direction: column;
    flex: 1;
    height: 0;
  }
}
`;