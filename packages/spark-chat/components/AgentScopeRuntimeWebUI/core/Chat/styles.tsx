import { createGlobalStyle } from 'antd-style';

export default createGlobalStyle`
.${(p) => p.theme.prefixCls}-chat-anywhere-chat {
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: stretch;
}

.${(p) => p.theme.prefixCls}-chat-anywhere-message-list  {
  flex: 1;
  height: 0;

  &-welcome {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }
}



.${(p) => p.theme.prefixCls}-chat-anywhere-message-list > div::-webkit-scrollbar {
  display: none;
}

@keyframes message-list-fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.${(p) => p.theme.prefixCls}-chat-anywhere-message-list > div {
  animation: message-list-fade-in 0.4s ease-in-out;
}

.${(p) => p.theme.prefixCls}-chat-anywhere-message-list .${(p) => p.theme.prefixCls}-bubble-list {
  margin: 0 auto;
  max-width: 850px;
  min-width: 300px;
}

.${(p) => p.theme.prefixCls}-chat-anywhere-input {
  padding: 0 16px;
}

.${(p) => p.theme.prefixCls}-chat-anywhere-input-wrapper {
  max-width: 850px;
  min-width: 300px;
  margin: 0 auto;
}
.${(p) => p.theme.prefixCls}-chat-anywhere-input-blank {
  height: 16px;
`;