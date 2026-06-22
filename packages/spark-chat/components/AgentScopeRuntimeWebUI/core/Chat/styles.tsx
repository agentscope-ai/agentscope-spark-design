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



.${(p) => p.theme.prefixCls}-chat-anywhere-message-list .${(p) =>
  p.theme.prefixCls}-bubble-list-scroll::-webkit-scrollbar {
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

.${(p) => p.theme.prefixCls}-chat-anywhere-message-list .${(p) =>
  p.theme.prefixCls}-bubble-list-wrapper {
  animation: message-list-fade-in 0.4s ease-in-out;
}

.${(p) => p.theme.prefixCls}-chat-anywhere-message-list .${(p) =>
  p.theme.prefixCls}-bubble-list {
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
  box-sizing: border-box;
  width: calc(100% - 24px);
  gap: 0;
  margin: 0 auto;
  padding: 0;
  border: 1px solid ${(p) => p.theme.colorBorderSecondary};
  border-bottom: 0;
  border-radius: 12px 12px 0 0;
  background: ${(p) => p.theme.colorBgBase};
  box-shadow: 0 -8px 20px -18px rgba(0, 0, 0, 0.28);
  transform-origin: bottom center;
  animation: input-queue-drawer-enter 160ms ease-out;
}

.${(p) => p.theme.prefixCls}-chat-anywhere-input-queue-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  min-height: 28px;
  padding: 4px 8px 4px 10px;
  border-bottom: 1px solid ${(p) => p.theme.colorBorderSecondary};
  border-radius: 12px 12px 0 0;
  background: ${(p) => p.theme.colorFillQuaternary};
}

.${(p) => p.theme.prefixCls}-chat-anywhere-input-queue-title {
  display: inline-flex;
  align-items: center;
  min-width: 0;
  gap: 6px;
  color: ${(p) => p.theme.colorText};
  font-size: 12px;
  font-weight: 600;
  line-height: 18px;
}

.${(p) => p.theme.prefixCls}-chat-anywhere-input-queue-pulse {
  width: 7px;
  height: 7px;
  flex: none;
  border-radius: 50%;
  background: ${(p) => p.theme.colorPrimary};
  box-shadow: 0 0 0 3px ${(p) => p.theme.colorPrimaryBg};
}

.${(p) => p.theme.prefixCls}-chat-anywhere-input-queue-count {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 18px;
  height: 16px;
  padding: 0 5px;
  border-radius: 8px;
  background: ${(p) => p.theme.colorPrimaryBg};
  color: ${(p) => p.theme.colorPrimary};
  font-size: 11px;
  font-weight: 600;
  font-variant-numeric: tabular-nums;
  line-height: 16px;
}

.${(p) => p.theme.prefixCls}-chat-anywhere-input-queue-owner {
  overflow: hidden;
  color: ${(p) => p.theme.colorTextQuaternary};
  font-size: 11px;
  font-weight: 400;
  line-height: 16px;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.${(p) => p.theme.prefixCls}-chat-anywhere-input-queue-header-actions {
  display: inline-flex;
  align-items: center;
  flex: none;
  gap: 2px;
}

.${(p) => p.theme.prefixCls}-chat-anywhere-input-queue-clear {
  width: 22px;
  height: 22px;
  flex: none;
  color: ${(p) => p.theme.colorTextTertiary};
}

.${(p) => p.theme.prefixCls}-chat-anywhere-input-queue-list {
  display: flex;
  max-height: 120px;
  flex-direction: column;
  gap: 2px;
  overflow-y: auto;
  overscroll-behavior: contain;
  padding: 4px 6px 5px;
}

.${(p) => p.theme.prefixCls}-chat-anywhere-input-queue-list::-webkit-scrollbar {
  width: 4px;
}

.${(p) =>
  p.theme.prefixCls}-chat-anywhere-input-queue-list::-webkit-scrollbar-thumb {
  border-radius: 999px;
  background: ${(p) => p.theme.colorFill};
}

.${(p) => p.theme.prefixCls}-chat-anywhere-input-queue-item {
  display: grid;
  grid-template-columns: 14px auto minmax(0, 1fr) auto;
  align-items: center;
  gap: 5px;
  min-height: 28px;
  padding: 2px 4px;
  border-radius: 6px;
  color: ${(p) => p.theme.colorTextSecondary};
  cursor: grab;
  transition: background 160ms ease, opacity 160ms ease, transform 160ms ease;
}

.${(p) => p.theme.prefixCls}-chat-anywhere-input-queue-item:active {
  cursor: grabbing;
}

.${(p) => p.theme.prefixCls}-chat-anywhere-input-queue-item:hover,
.${(p) => p.theme.prefixCls}-chat-anywhere-input-queue-item:focus-within {
  background: ${(p) => p.theme.colorFillQuaternary};
}

.${(p) => p.theme.prefixCls}-chat-anywhere-input-queue-item-dragging {
  opacity: 0.45;
}

.${(p) => p.theme.prefixCls}-chat-anywhere-input-queue-item-drag-over {
  background: ${(p) => p.theme.colorPrimaryBg};
  transform: translateY(-1px);
}

.${(p) => p.theme.prefixCls}-chat-anywhere-input-queue-item-next {
  color: ${(p) => p.theme.colorText};
}

.${(p) => p.theme.prefixCls}-chat-anywhere-input-queue-drag-handle {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 14px;
  height: 20px;
  color: ${(p) => p.theme.colorTextQuaternary};
  font-size: 14px;
}

.${(p) => p.theme.prefixCls}-chat-anywhere-input-queue-item-failed {
  background: ${(p) => p.theme.colorErrorBg};
}

.${(p) => p.theme.prefixCls}-chat-anywhere-input-queue-index {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  max-width: 42px;
  min-width: 20px;
  height: 20px;
  padding: 0 5px;
  border-radius: 5px;
  background: ${(p) => p.theme.colorFillSecondary};
  color: ${(p) => p.theme.colorTextTertiary};
  font-size: 11px;
  font-variant-numeric: tabular-nums;
  line-height: 20px;
  white-space: nowrap;
}

.${(p) => p.theme.prefixCls}-chat-anywhere-input-queue-item-next .${(p) =>
  p.theme.prefixCls}-chat-anywhere-input-queue-index {
  background: ${(p) => p.theme.colorPrimaryBg};
  color: ${(p) => p.theme.colorPrimary};
}

.${(p) => p.theme.prefixCls}-chat-anywhere-input-queue-item-failed .${(p) =>
  p.theme.prefixCls}-chat-anywhere-input-queue-index {
  background: ${(p) => p.theme.colorErrorBgHover};
  color: ${(p) => p.theme.colorError};
}

.${(p) => p.theme.prefixCls}-chat-anywhere-input-queue-content {
  display: flex;
  align-items: center;
  min-width: 0;
  gap: 6px;
}

.${(p) => p.theme.prefixCls}-chat-anywhere-input-queue-text,
.${(p) => p.theme.prefixCls}-chat-anywhere-input-queue-files,
.${(p) => p.theme.prefixCls}-chat-anywhere-input-queue-error {
  overflow: hidden;
  font-size: 12px;
  line-height: 20px;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.${(p) => p.theme.prefixCls}-chat-anywhere-input-queue-text {
  min-width: 0;
  color: inherit;
}

.${(p) => p.theme.prefixCls}-chat-anywhere-input-queue-edit-input {
  box-sizing: border-box;
  width: 100%;
  min-width: 0;
  height: 22px;
  padding: 0 6px;
  border: 1px solid ${(p) => p.theme.colorPrimaryBorder};
  border-radius: 5px;
  outline: none;
  background: ${(p) => p.theme.colorBgBase};
  color: ${(p) => p.theme.colorText};
  font-size: 12px;
  line-height: 20px;
}

.${(p) => p.theme.prefixCls}-chat-anywhere-input-queue-files {
  display: inline-flex;
  align-items: center;
  min-width: 0;
  max-width: 260px;
  flex: none;
  gap: 4px;
  color: ${(p) => p.theme.colorTextTertiary};
}

.${(p) => p.theme.prefixCls}-chat-anywhere-input-queue-file,
.${(p) => p.theme.prefixCls}-chat-anywhere-input-queue-file-more {
  display: inline-flex;
  align-items: center;
  max-width: 112px;
  height: 20px;
  gap: 4px;
  padding: 0 5px;
  border-radius: 5px;
  background: ${(p) => p.theme.colorFillQuaternary};
}

.${(p) => p.theme.prefixCls}-chat-anywhere-input-queue-file-thumb,
.${(p) => p.theme.prefixCls}-chat-anywhere-input-queue-file-icon {
  width: 14px;
  height: 14px;
  flex: none;
  border-radius: 3px;
}

.${(p) => p.theme.prefixCls}-chat-anywhere-input-queue-file-thumb {
  object-fit: cover;
}

.${(p) => p.theme.prefixCls}-chat-anywhere-input-queue-file-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: ${(p) => p.theme.colorFillSecondary};
  color: ${(p) => p.theme.colorTextQuaternary};
  font-size: 10px;
  line-height: 14px;
}

.${(p) => p.theme.prefixCls}-chat-anywhere-input-queue-file-name {
  overflow: hidden;
  min-width: 0;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.${(p) => p.theme.prefixCls}-chat-anywhere-input-queue-file-more {
  flex: none;
  color: ${(p) => p.theme.colorTextQuaternary};
}

.${(p) => p.theme.prefixCls}-chat-anywhere-input-queue-error {
  flex: none;
  max-width: 160px;
  color: ${(p) => p.theme.colorError};
}

.${(p) => p.theme.prefixCls}-chat-anywhere-input-queue-actions {
  display: inline-flex;
  align-items: center;
  gap: 0;
  opacity: 0.52;
  transition: opacity 160ms ease;
}

.${(p) => p.theme.prefixCls}-chat-anywhere-input-queue-actions button {
  width: 20px;
  height: 22px;
}

.${(p) => p.theme.prefixCls}-chat-anywhere-input-queue-item:hover .${(p) =>
  p.theme.prefixCls}-chat-anywhere-input-queue-actions,
.${(p) => p.theme.prefixCls}-chat-anywhere-input-queue-item:focus-within .${(p) =>
  p.theme.prefixCls}-chat-anywhere-input-queue-actions {
  opacity: 1;
}

@keyframes input-queue-drawer-enter {
  from {
    opacity: 0;
    transform: translateY(8px) scaleY(0.96);
  }
  to {
    opacity: 1;
    transform: translateY(0) scaleY(1);
  }
}

.${(p) => p.theme.prefixCls}-chat-anywhere-input-blank {
  height: 16px;
}
`;
