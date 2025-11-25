import { createGlobalStyle } from 'antd-style';

export default createGlobalStyle`
.${(p) => p.theme.prefixCls}-chat-anywhere-chat {
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
  transition: all 0.3s;
  opacity: 1;

  .${(p) => p.theme.prefixCls}-bubble-list {
    position: relative;
    margin: 0 auto;
    max-width: 850px;
    min-width: 300px;
  }

  .${(p) => p.theme.prefixCls}-chat-anywhere-sender-wrapper {
    max-width: 850px;
    min-width: 300px;
    padding: 0 16px 16px 16px;
    margin: 0 auto;
  }

  &-hide {
    opacity: 0;
  }

  &-welcome {
    max-width: 850px;
    min-width: 300px;
    width: -webkit-fill-available;
    padding: 16px;
    margin: 0 auto;
    height: 100%;
    display: flex;
    align-items: safe center;
    justify-content: safe center;
    overflow: auto;
  }
}




@media screen and (max-width: 768px) {
  button {
    cursor: default !important;
  }

  .${(p) => p.theme.prefixCls}-conversations .${(p) => p.theme.prefixCls}-conversations-item {
    cursor: default !important;

  }
}


`;
