import { createGlobalStyle } from 'antd-style';

export default createGlobalStyle`
.${(p) => p.theme.prefixCls}-chat-anywhere-chat {
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: stretch;
}

.${(p) => p.theme.prefixCls}-chat-anywhere-message-list  {
  position: relative;
  flex: 1;
  height: 0;

  &-welcome {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }
}

.${(p) => p.theme.prefixCls}-chat-anywhere-message-list-bubble-wrapper {
  height: 100%;
}

.${(p) => p.theme.prefixCls}-chat-anywhere-message-list-anchors {
  position: absolute;
  top: 50%;
  right: max(12px, calc((100% - 850px) / 2 - 48px));
  z-index: 12;
  width: 32px;
  height: min(72%, 520px);
  min-height: 220px;
  transform: translateY(-50%);
  pointer-events: none;
}

.${(p) => p.theme.prefixCls}-chat-anywhere-message-list-anchor {
  position: absolute;
  right: 2px;
  display: inline-flex;
  align-items: center;
  justify-content: flex-end;
  width: 30px;
  height: 6px;
  margin: 0;
  padding: 0;
  border: 0;
  background: transparent;
  cursor: pointer;
  font: inherit;
  pointer-events: auto;
  transform: translateY(-50%);

  &:hover,
  &:focus-visible {
    .${(p) => p.theme.prefixCls}-chat-anywhere-message-list-anchor-bar {
      width: 24px;
      background: ${(p) => p.theme.colorPrimary};
      opacity: 1;
    }
  }

  &:focus-visible {
    outline: none;
  }
}

.${(p) => p.theme.prefixCls}-chat-anywhere-message-list-anchor-bar {
  display: block;
  width: 18px;
  height: 2px;
  border-radius: 999px;
  background: ${(p) => p.theme.colorTextQuaternary};
  opacity: 0.7;
  transition: all 0.18s ease;
}

.${(p) => p.theme.prefixCls}-chat-anywhere-message-list-anchor-grouped {
  .${(p) => p.theme.prefixCls}-chat-anywhere-message-list-anchor-bar {
    width: 22px;
    opacity: 0.86;
  }
}

.${(p) => p.theme.prefixCls}-chat-anywhere-message-list-anchor-active {
  .${(p) => p.theme.prefixCls}-chat-anywhere-message-list-anchor-bar {
    width: 26px;
    height: 3px;
    background: ${(p) => p.theme.colorPrimary};
    box-shadow: 0 0 10px ${(p) => p.theme.colorPrimaryBorder};
    opacity: 1;
  }

  &:hover,
  &:focus-visible {
    .${(p) => p.theme.prefixCls}-chat-anywhere-message-list-anchor-bar {
      width: 26px;
    }
  }
}

.${(p) => p.theme.prefixCls}-chat-anywhere-message-list-anchor-tooltip {
  max-width: min(360px, calc(100vw - 96px));
}

.${(p) => p.theme.prefixCls}-chat-anywhere-message-list-anchor-tooltip-text {
  color: ${(p) => p.theme.colorTextLightSolid};
  line-height: 20px;
  overflow-wrap: anywhere;
  white-space: pre-wrap;
}

.${(p) => p.theme.prefixCls}-chat-anywhere-message-list-anchor-tooltip-attachments {
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-top: 8px;
  padding-top: 8px;
  border-top: 1px solid rgb(255 255 255 / 18%);
}

.${(p) => p.theme.prefixCls}-chat-anywhere-message-list-anchor-tooltip-attachment {
  display: flex;
  gap: 6px;
  min-width: 0;
  color: ${(p) => p.theme.colorTextLightSolid};
  font-size: 12px;
  line-height: 18px;
}

.${(p) => p.theme.prefixCls}-chat-anywhere-message-list-anchor-tooltip-attachment-type {
  flex: 0 0 auto;
  opacity: 0.72;
}

.${(p) => p.theme.prefixCls}-chat-anywhere-message-list-anchor-tooltip-attachment-name {
  min-width: 0;
  overflow-wrap: anywhere;
}

.${(p) => p.theme.prefixCls}-chat-anywhere-message-list-anchor-target-active {
  animation: user-message-anchor-pulse 1.2s ease;
}

@keyframes user-message-anchor-pulse {
  0% {
    filter: drop-shadow(0 0 0 ${(p) => p.theme.colorPrimaryBorder});
  }
  40% {
    filter: drop-shadow(0 0 12px ${(p) => p.theme.colorPrimaryBorder});
  }
  100% {
    filter: drop-shadow(0 0 0 ${(p) => p.theme.colorPrimaryBorder});
  }
}

@media (max-width: 1100px) {
  .${(p) => p.theme.prefixCls}-chat-anywhere-message-list .${(p) => p.theme.prefixCls}-bubble-list {
    box-sizing: border-box;
    padding-right: 52px;
  }

  .${(p) => p.theme.prefixCls}-chat-anywhere-message-list-anchors {
    right: 12px;
    width: 24px;
  }

  .${(p) => p.theme.prefixCls}-chat-anywhere-message-list-anchor {
    right: 0;
    width: 24px;
    height: 6px;
  }

  .${(p) => p.theme.prefixCls}-chat-anywhere-message-list-anchor-bar {
    width: 14px;
  }

  .${(p) => p.theme.prefixCls}-chat-anywhere-message-list-anchor-grouped {
    .${(p) => p.theme.prefixCls}-chat-anywhere-message-list-anchor-bar {
      width: 17px;
    }
  }

  .${(p) => p.theme.prefixCls}-chat-anywhere-message-list-anchor-active {
    .${(p) => p.theme.prefixCls}-chat-anywhere-message-list-anchor-bar {
      width: 20px;
    }

    &:hover,
    &:focus-visible {
      .${(p) => p.theme.prefixCls}-chat-anywhere-message-list-anchor-bar {
        width: 20px;
      }
    }
  }
}

@media (max-width: 640px) {
  .${(p) => p.theme.prefixCls}-chat-anywhere-message-list .${(p) => p.theme.prefixCls}-bubble-list {
    padding-right: 16px;
  }

  .${(p) => p.theme.prefixCls}-chat-anywhere-message-list-anchors {
    display: none;
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
.${(p) => p.theme.prefixCls}-chat-anywhere-input-blank {
  height: 16px;
}
`;
