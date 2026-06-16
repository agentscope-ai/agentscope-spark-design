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



.${(p) => p.theme.prefixCls}-chat-anywhere-message-list .${(p) => p.theme.prefixCls}-bubble-list-scroll::-webkit-scrollbar {
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

.${(p) => p.theme.prefixCls}-chat-anywhere-message-list .${(p) => p.theme.prefixCls}-bubble-list-wrapper {
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

.${(p) => p.theme.prefixCls}-chat-anywhere-input-queue {
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-bottom: 8px;
  padding: 8px;
  border: 1px solid ${(p) => p.theme.colorBorderSecondary};
  border-radius: 8px;
  background: ${(p) => p.theme.colorFillTertiary};
}

.${(p) => p.theme.prefixCls}-chat-anywhere-input-queue-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${(p) => p.theme.colorTextSecondary};
  font-size: 12px;
  line-height: 20px;
}

.${(p) => p.theme.prefixCls}-chat-anywhere-input-queue-list {
  display: flex;
  max-height: 180px;
  flex-direction: column;
  gap: 4px;
  overflow-y: auto;
}

.${(p) => p.theme.prefixCls}-chat-anywhere-input-queue-item {
  display: grid;
  grid-template-columns: 20px minmax(0, 1fr) auto auto;
  align-items: center;
  gap: 6px;
  min-height: 32px;
  padding: 4px 6px;
  border-radius: 6px;
  background: ${(p) => p.theme.colorBgContainer};
}

.${(p) => p.theme.prefixCls}-chat-anywhere-input-queue-index {
  color: ${(p) => p.theme.colorTextQuaternary};
  font-size: 12px;
  text-align: center;
}

.${(p) => p.theme.prefixCls}-chat-anywhere-input-queue-content {
  min-width: 0;
}

.${(p) => p.theme.prefixCls}-chat-anywhere-input-queue-text {
  overflow: hidden;
  color: ${(p) => p.theme.colorText};
  font-size: 12px;
  line-height: 18px;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.${(p) => p.theme.prefixCls}-chat-anywhere-input-queue-error {
  overflow: hidden;
  color: ${(p) => p.theme.colorError};
  font-size: 11px;
  line-height: 16px;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.${(p) => p.theme.prefixCls}-chat-anywhere-input-blank {
  height: 16px;
`;
