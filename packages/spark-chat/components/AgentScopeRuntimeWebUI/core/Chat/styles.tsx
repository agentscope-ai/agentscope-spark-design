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

.${(p) => p.theme.prefixCls}-chat-anywhere-message-list-anchors-navigator {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  width: 44px;
  height: auto;
  min-height: 0;
}

.${(p) => p.theme.prefixCls}-chat-anywhere-message-list-anchor-nav-button {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  margin: 0;
  padding: 0;
  border: 1px solid ${(p) => p.theme.colorBorderSecondary};
  border-radius: 50%;
  background: ${(p) => p.theme.colorBgContainer};
  box-shadow: 0 4px 14px rgb(0 0 0 / 10%);
  color: ${(p) => p.theme.colorTextSecondary};
  cursor: pointer;
  pointer-events: auto;
  transition: all 0.18s ease;

  &:hover,
  &:focus-visible {
    border-color: ${(p) => p.theme.colorPrimary};
    color: ${(p) => p.theme.colorPrimary};
  }

  &:focus-visible {
    outline: none;
  }

  &:disabled {
    border-color: ${(p) => p.theme.colorBorderSecondary};
    color: ${(p) => p.theme.colorTextQuaternary};
    cursor: not-allowed;
    opacity: 0.45;
  }
}

.${(p) =>
  p.theme.prefixCls}-chat-anywhere-message-list-anchor-nav-button-active {
  border-color: ${(p) => p.theme.colorPrimary};
  color: ${(p) => p.theme.colorPrimary};
}

.${(p) => p.theme.prefixCls}-chat-anywhere-message-list-anchor-nav-count {
  position: absolute;
  top: -7px;
  right: -7px;
  min-width: 18px;
  height: 18px;
  padding: 0 5px;
  border-radius: 999px;
  background: ${(p) => p.theme.colorPrimary};
  color: ${(p) => p.theme.colorTextLightSolid};
  font-size: 11px;
  font-weight: 600;
  line-height: 18px;
}

.${(p) => p.theme.prefixCls}-chat-anywhere-message-list-anchor-directory {
  width: min(420px, calc(100vw - 96px));
  overflow: hidden;
}

.${(p) => p.theme.prefixCls}-chat-anywhere-message-list-anchor-directory-title {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  padding: 8px 12px;
  border-bottom: 1px solid ${(p) => p.theme.colorBorderSecondary};
  background: ${(p) => p.theme.colorFillTertiary};
  color: ${(p) => p.theme.colorTextSecondary};
  font-size: 13px;
  font-weight: 600;
  line-height: 18px;
}

.${(p) =>
  p.theme.prefixCls}-chat-anywhere-message-list-anchor-directory-locate {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 22px;
  height: 22px;
  margin: 0;
  padding: 0;
  border: 0;
  border-radius: 4px;
  background: transparent;
  color: ${(p) => p.theme.colorTextSecondary};
  cursor: pointer;
  flex: 0 0 auto;

  &:hover,
  &:focus-visible {
    background: ${(p) => p.theme.colorFillTertiary};
    color: ${(p) => p.theme.colorPrimary};
    outline: none;
  }

  &:disabled {
    color: ${(p) => p.theme.colorTextQuaternary};
    cursor: not-allowed;
    opacity: 0.5;
  }
}

.${(p) => p.theme.prefixCls}-chat-anywhere-message-list-anchor-directory-list {
  max-height: 360px;
  overflow-y: auto;
}

.${(p) => p.theme.prefixCls}-chat-anywhere-message-list-anchor-directory-item {
  display: block;
  width: 100%;
  margin: 0;
  padding: 7px 12px;
  border: 0;
  border-bottom: 1px solid ${(p) => p.theme.colorBorderSecondary};
  background: transparent;
  color: ${(p) => p.theme.colorText};
  cursor: pointer;
  font: inherit;
  text-align: left;

  &:hover,
  &:focus-visible {
    background: ${(p) => p.theme.colorFillTertiary};
    outline: none;
  }

  &:last-child {
    border-bottom: 0;
  }
}

.${(p) =>
  p.theme.prefixCls}-chat-anywhere-message-list-anchor-directory-item-active {
  background: ${(p) => p.theme.colorFillSecondary};
  box-shadow: inset 3px 0 0 ${(p) => p.theme.colorPrimary};
}

.${(p) => p.theme.prefixCls}-chat-anywhere-message-list-anchor-directory-main {
  display: flex;
  align-items: center;
  gap: 12px;
  min-width: 0;
}

.${(p) =>
  p.theme.prefixCls}-chat-anywhere-message-list-anchor-directory-message {
  display: block;
  flex: 1 1 auto;
  min-width: 0;
  overflow: hidden;
  line-height: 18px;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.${(p) => p.theme.prefixCls}-chat-anywhere-message-list-anchor-directory-time {
  flex: 0 0 auto;
  color: ${(p) => p.theme.colorTextSecondary};
  font-size: 12px;
  line-height: 18px;
}

.${(p) =>
  p.theme.prefixCls}-chat-anywhere-message-list-anchor-directory-attachments {
  display: block;
  margin-top: 2px;
  overflow: hidden;
  color: ${(p) => p.theme.colorTextSecondary};
  font-size: 12px;
  line-height: 16px;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.${(p) => p.theme.prefixCls}-chat-anywhere-message-list-anchor-tooltip {
  max-width: min(360px, calc(100vw - 96px));
}

.${(p) => p.theme.prefixCls}-chat-anywhere-message-list-anchor-tooltip-time {
  margin-bottom: 4px;
  color: ${(p) => p.theme.colorTextLightSolid};
  font-size: 12px;
  line-height: 18px;
  opacity: 0.72;
}

.${(p) => p.theme.prefixCls}-chat-anywhere-message-list-anchor-tooltip-text {
  color: ${(p) => p.theme.colorTextLightSolid};
  line-height: 20px;
  overflow-wrap: anywhere;
  white-space: pre-wrap;
}

.${(p) =>
  p.theme.prefixCls}-chat-anywhere-message-list-anchor-tooltip-attachments {
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-top: 8px;
  padding-top: 8px;
  border-top: 1px solid rgb(255 255 255 / 18%);
}

.${(p) =>
  p.theme.prefixCls}-chat-anywhere-message-list-anchor-tooltip-attachment {
  display: flex;
  gap: 6px;
  min-width: 0;
  color: ${(p) => p.theme.colorTextLightSolid};
  font-size: 12px;
  line-height: 18px;
}

.${(p) =>
  p.theme.prefixCls}-chat-anywhere-message-list-anchor-tooltip-attachment-type {
  flex: 0 0 auto;
  opacity: 0.72;
}

.${(p) =>
  p.theme.prefixCls}-chat-anywhere-message-list-anchor-tooltip-attachment-name {
  min-width: 0;
  overflow-wrap: anywhere;
}

.${(p) =>
  p.theme.prefixCls}-chat-anywhere-message-list-anchor-target-active .${(p) =>
  p.theme.prefixCls}-bubble-content-wrapper-card {
  animation: user-message-anchor-shadow-box 1.2s ease;
}

@keyframes user-message-anchor-shadow-box {
  0% {
    box-shadow: 0 0 0 0 ${(p) => p.theme.colorPrimaryBorder};
  }
  40% {
    box-shadow:
      0 0 0 2px ${(p) => p.theme.colorPrimaryBorder},
      0 10px 30px -12px ${(p) => p.theme.colorPrimary};
  }
  100% {
    box-shadow: 0 0 0 0 ${(p) => p.theme.colorPrimaryBorder};
  }
}

@media (max-width: 1100px) {
  .${(p) => p.theme.prefixCls}-chat-anywhere-message-list .${(p) =>
  p.theme.prefixCls}-bubble-list {
    box-sizing: border-box;
    padding-right: 52px;
  }

  .${(p) => p.theme.prefixCls}-chat-anywhere-message-list-anchors {
    right: 12px;
    width: 24px;
  }

  .${(p) => p.theme.prefixCls}-chat-anywhere-message-list-anchors-navigator {
    width: 40px;
  }

  .${(p) => p.theme.prefixCls}-chat-anywhere-message-list-anchor-nav-button {
    width: 32px;
    height: 32px;
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
  .${(p) => p.theme.prefixCls}-chat-anywhere-message-list .${(p) =>
  p.theme.prefixCls}-bubble-list {
    padding-right: 16px;
  }

  .${(p) => p.theme.prefixCls}-chat-anywhere-message-list-anchors {
    display: none;
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
.${(p) => p.theme.prefixCls}-chat-anywhere-input-blank {
  height: 16px;
}

.${(p) => p.theme.prefixCls}-chat-anywhere-input-mentions-popover {
  width: min(520px, calc(100vw - 32px));

  .${(p) => p.theme.prefixCls}-popover-inner {
    padding: 6px;
  }
}

.${(p) => p.theme.prefixCls}-chat-anywhere-input-mentions-menu {
  max-height: 280px;
  overflow-y: auto;
}

.${(p) => p.theme.prefixCls}-chat-anywhere-input-mentions-option {
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
  min-height: 34px;
  padding: 6px 8px;
  border: 0;
  border-radius: ${(p) => p.theme.borderRadiusSM}px;
  background: transparent;
  color: ${(p) => p.theme.colorText};
  cursor: pointer;
  font: inherit;
  text-align: left;

  &:hover,
  &:focus-visible,
  &-active {
    background: ${(p) => p.theme.colorFillTertiary};
    outline: none;
  }

  &:disabled {
    color: ${(p) => p.theme.colorTextDisabled};
    cursor: not-allowed;
  }
}

.${(p) => p.theme.prefixCls}-chat-anywhere-input-mentions-icon {
  display: inline-flex;
  flex: 0 0 auto;
  align-items: center;
  color: ${(p) => p.theme.colorTextSecondary};
}

.${(p) => p.theme.prefixCls}-chat-anywhere-input-mentions-label {
  flex: 1 1 auto;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.${(p) => p.theme.prefixCls}-chat-anywhere-input-mentions-type {
  flex: 0 0 auto;
  color: ${(p) => p.theme.colorTextTertiary};
  font-size: 12px;
}

.${(p) => p.theme.prefixCls}-chat-anywhere-input-mentions-empty {
  padding: 12px;
  color: ${(p) => p.theme.colorTextTertiary};
  font-size: 13px;
  text-align: center;
}

.${(p) => p.theme.prefixCls}-chat-anywhere-input-mentions-capsules {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  padding: 8px 8px 4px;
}

.${(p) => p.theme.prefixCls}-chat-anywhere-input-mentions-capsule {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  max-width: 100%;
  min-height: 26px;
  padding: 2px 4px 2px 8px;
  border: 1px solid ${(p) => p.theme.colorPrimaryBorder};
  border-radius: 999px;
  background: ${(p) => p.theme.colorPrimaryBg};
  color: ${(p) => p.theme.colorText};
  font-size: 13px;
  line-height: 20px;
}

.${(p) => p.theme.prefixCls}-chat-anywhere-input-mentions-capsule-label {
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.${(p) => p.theme.prefixCls}-chat-anywhere-input-mentions-remove {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  padding: 0;
  border: 0;
  border-radius: 50%;
  background: transparent;
  color: ${(p) => p.theme.colorTextTertiary};
  cursor: pointer;
  font: inherit;
  line-height: 1;

  &:hover,
  &:focus-visible {
    background: ${(p) => p.theme.colorFillSecondary};
    color: ${(p) => p.theme.colorText};
    outline: none;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.45;
  }
}
`;
