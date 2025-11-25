import { createGlobalStyle } from 'antd-style';

export default createGlobalStyle`
.${(p) => p.theme.prefixCls}-chat-anywhere-session-list {
  display: flex;
  flex-direction: column;
  height: 0;
  flex: 1;
  width: 100%;

  .${(p) => p.theme.prefixCls}-conversations {
    height: 100%;
  }

  &-session { 
    height: 0;
    flex: 1;
    padding: 8px 20px;

  }

  &-logo {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    height: 64px;
  }

  &-adder {
    padding: 0 20px 8px 20px;
    button {
      border-radius: 6px;
      box-shadow: 15px 0px 30px -10px rgba(131, 88, 246, 0.4),
        0px 0px 30px -10px rgba(255, 142, 168, 0.4),
        -15px 0px 30px -10px rgba(225, 163, 37, 0.4);
    }
  }

  &-hide {
    .${(p) => p.theme.prefixCls}-chat-anywhere-session-list-adder-logo > div {
      opacity: 0;
    }
    .${(p) => p.theme.prefixCls}-chat-anywhere-session-list-adder {
      opacity: 0;
    }
    .${(p) => p.theme.prefixCls}-chat-anywhere-session-list-session {
      opacity: 0;
    }
  }
}

`;
