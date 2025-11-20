import { createGlobalStyle } from 'antd-style';

export default createGlobalStyle`
.${p => p.theme.prefixCls}-attachment {
  position: relative;
  width: 100%;
  box-sizing: border-box;

  &,
  * {
    box-sizing: border-box;
  }

  &-drop-area {
    position: absolute;
    inset: 0;
    z-index: ${(p) => p.theme.zIndexPopupBase}
    box-sizing: border-box;

    &,
    * {
      box-sizing: border-box;
    }

    &-on-body {
      position: fixed;
      inset: 0;
    }

    &-hide-placement {
      .${p => p.theme.prefixCls}-attachment-placeholder-inner {
        display: none;
      }
    }

    .${p => p.theme.prefixCls}-attachment-placeholder {
      padding: 0;
    }
  }

  &-placeholder {
    height: 100%;
    border-radius: ${(p) => p.theme.borderRadius}px;
    border-width: ${(p) => p.theme.lineWidthBold}px;
    border-style: dashed;
    border-color: transparent;
    padding: ${(p) => p.theme.padding}px;
    position: relative;
    backdrop-filter: blur(10px);
    box-sizing: border-box;

    &,
    * {
      box-sizing: border-box;
    }

    .${p => p.theme.prefixCls}-upload-wrapper .${p => p.theme.prefixCls}-upload.${p => p.theme.prefixCls}-upload-btn {
      padding: 0;
    }

    &.${p => p.theme.prefixCls}-attachment-placeholder-drag-in {
      border-color: ${(p) => p.theme.colorPrimaryHover};
    }

    &.${p => p.theme.prefixCls}-attachment-placeholder-disabled {
      opacity: 0.25;
      pointer-events: none;
    }

    &-inner {
      gap: calc(${(p) => p.theme.paddingXXS}px / 2);
    }

    &-icon {
      font-size: ${(p) => p.theme.fontSizeHeading2}px;
      line-height: 1;
    }

    &-title.${p => p.theme.prefixCls}-attachment-placeholder-title {
      margin: 0;
      font-size: ${(p) => p.theme.fontSize}px;
      line-height: ${(p) => p.theme.lineHeight};
    }
  }

  &-list {
    display: flex;
    gap: ${(p) => p.theme.paddingSM}px;
    font-size: ${(p) => p.theme.fontSize}px;
    line-height: ${(p) => p.theme.lineHeight};
    color: ${(p) => p.theme.colorText};
    width: 100%;
    overflow: auto;
    padding: ${(p) => p.theme.padding}px;
    padding-bottom: 0;

    scrollbar-width: none;
    -ms-overflow-style: none;
    &::-webkit-scrollbar {
      display: none;
    }

    &-overflow-scrollX,
    &-overflow-scrollY {
      &:before,
      &:after {
        content: "";
        position: absolute;
        opacity: 0;
        z-index: 1;
      }
    }

    &-overflow-ping-start:before {
      opacity: 1;
    }

    &-overflow-ping-end:after {
      opacity: 1;
    }

    &-overflow-scrollX {
      overflow-x: auto;
      overflow-y: hidden;
      flex-wrap: nowrap;

      &:before,
      &:after {
        inset-block: 0;
        width: 8px;
      }

      &:before {
        inset-inline-start: 0;
        background: linear-gradient(to right, rgba(0, 0, 0, 0.06), rgba(0, 0, 0, 0));
      }

      &:after {
        inset-inline-end: 0;
        background: linear-gradient(to left, rgba(0, 0, 0, 0.06), rgba(0, 0, 0, 0));
      }

      &:dir(rtl) {
        &:before {
          background: linear-gradient(to left, rgba(0, 0, 0, 0.06), rgba(0, 0, 0, 0));
        }

        &:after {
          background: linear-gradient(to right, rgba(0, 0, 0, 0.06), rgba(0, 0, 0, 0));
        }
      }
    }

    &-overflow-scrollY {
      overflow-x: hidden;
      overflow-y: auto;
      max-height: calc(${(p) => p.theme.fontSize}px * ${(p) =>
  p.theme.lineHeight}px * 2 + ${(p) => p.theme.paddingSM}px + ${(p) =>
  p.theme.paddingSM}px * 3);

      &:before,
      &:after {
        inset-inline: 0;
        height: 8px;
      }

      &:before {
        inset-block-start: 0;
        background: linear-gradient(to bottom, rgba(0, 0, 0, 0.06), rgba(0, 0, 0, 0));
      }

      &:after {
        inset-block-end: 0;
        background: linear-gradient(to top, rgba(0, 0, 0, 0.06), rgba(0, 0, 0, 0));
      }
    }

    &-upload-btn {
      width: calc(${(p) => p.theme.fontSize}px * ${(p) =>
  p.theme.lineHeight}px * 2 + ${(p) => p.theme.paddingSM}px + ${(p) =>
  p.theme.paddingSM}px);
      height: calc(${(p) => p.theme.fontSize}px * ${(p) =>
  p.theme.lineHeight}px * 2 + ${(p) => p.theme.paddingSM}px + ${(p) =>
  p.theme.paddingSM}px);
      font-size: ${(p) => p.theme.fontSizeHeading2}px;
      color: #999;
    }

    &-prev-btn,
    &-next-btn {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      box-shadow: ${(p) => p.theme.boxShadowTertiary};
      opacity: 0;
      pointer-events: none;
    }

    &-prev-btn {
      left: ${(p) => p.theme.padding}px;
    }

    &-next-btn {
      right: ${(p) => p.theme.padding}px;
    }

    &:dir(ltr) {
      &.${p => p.theme.prefixCls}-attachment-list-overflow-ping-start .${p => p.theme.prefixCls}-attachment-list-prev-btn {
        opacity: 1;
        pointer-events: auto;
      }

      &.${p => p.theme.prefixCls}-attachment-list-overflow-ping-end .${p => p.theme.prefixCls}-attachment-list-next-btn {
        opacity: 1;
        pointer-events: auto;
      }
    }

    &:dir(rtl) {
      &.${p => p.theme.prefixCls}-attachment-list-overflow-ping-end .${p => p.theme.prefixCls}-attachment-list-prev-btn {
        opacity: 1;
        pointer-events: auto;
      }

      &.${p => p.theme.prefixCls}-attachment-list-overflow-ping-start .${p => p.theme.prefixCls}-attachment-list-next-btn {
        opacity: 1;
        pointer-events: auto;
      }
    }
  }
}
`;
