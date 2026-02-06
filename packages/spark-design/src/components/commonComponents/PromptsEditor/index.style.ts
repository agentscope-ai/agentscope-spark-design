// @ts-nocheck
import { createStyles } from 'antd-style';

/**
 * PromptsEditor 组件样式
 */
export const useStyles = createStyles(({ css, token }) => ({
  /**
   * 新增变量按钮相关样式
   */
  onCreate: css`
    .cm-tooltip li:last-of-type {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      height: 40px;
      border-top: 1px solid ${token.colorBorderSecondary};
      border-radius: 0 !important;
      background-color: ${token.colorBgContainer} !important;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 !important;
    }

    .cm-tooltip ul {
      margin-bottom: 40px !important;
    }

    .cm-tooltip li:first-of-type {
      border-top: none !important;
    }
  `,

  /**
   * CodeMirror 编辑器样式
   */
  cm: css`
    .cm-line {
      color: ${token.colorTextSecondary};
    }
    .cm-line span {
      color: ${token.colorBlue};
    }

    .cm-editor {
      position: absolute !important;
      background-color: transparent !important;

      top: 0;
      left: 8px;
      right: 0;
      bottom: 30px;
    }
    .cm-focused {
      outline: none;
    }

    .cm-content {
      width: 100%;
      padding: 8px 0;
      white-space: break-spaces;
    }

    .cm-line {
      line-height: 24px;
      height: auto !important;
    }

    /* 变量高亮样式 */
    .cm-prompt-var {
      font-size: inherit;
      color: ${token.colorPurple} !important;
      background-color: ${token.colorPurpleBg} !important;
      line-height: 1.7;
      font-weight: 500;
      margin: 0 2px;
      height: 24px;
      display: inline-flex;
      padding: 0 4px;
      border-radius: 4px;
    }

    /* 自动补全提示框样式 */
    .cm-tooltip {
      position: relative;
      background-color: ${token.colorBgContainer};
      border: 0;
      border-radius: 4px;
      overflow: hidden;
      box-shadow: 0px 3px 12px 0px rgba(47, 49, 51, 0.12);
    }

    .cm-tooltip ul {
      max-height: 17em !important;
      display: flex;
      flex-direction: column;
    }

    .cm-tooltip li {
      margin: 4px 8px;
      height: 32px;
      padding: 0 12px !important;
      flex: 0 0 32px;
      display: flex;
      align-items: center;
    }

    .cm-tooltip-autocomplete ul li[aria-selected] {
      border-radius: 6px;
      font-weight: 600;
      color: ${token.colorText};
      background-color: ${token.colorFillSecondary};
    }

    .cm-completionInfo-right {
      display: none;
    }

    .cm-completionIcon {
      display: none;
    }
  `,

  /**
   * 根容器样式
   */
  root: {
    position: 'relative',
    minHeight: 300,
    backgroundColor: token.colorBgBase,
    border: `1px solid ${token.colorBorderSecondary}`,
    borderRadius: 6,
    overflow: 'hidden',
    padding: '4px 12px',
    resize: 'vertical',
  },

  /**
   * 底部栏样式
   */
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: '0 12px',
    height: 30,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    fontSize: 12,
    color: token.colorTextTertiary,
    backgroundColor: token.colorBgBase,
  },

  /**
   * 提示文本样式
   */
  tips: {
    display: 'flex',
    alignItems: 'center',
    gap: 4,
  },
}));
