import createGlobalStyle from '@/libs/createStyle';

/**
 * CodeBlock 组件样式
 * 所有 CodeMirror 相关样式都限定在组件根类名下，
 * 通过选择器层级提高优先级，避免使用 !important，
 * 方便外部业务覆盖样式
 */
export const useStyle = createGlobalStyle`
.${(p) => p.sparkPrefix}-code-block {
  width: 100%;

  /* CodeMirror 主题样式 */
  .cm-theme {
    border: none;
    border-radius: 0;
  }

  /* 行号槽样式 */
  .cm-gutters {
    border-right: none;
    background-color: var(--${(p) => p.antPrefix}-color-bg-base);
  }

  /* 编辑器背景 */
  .cm-editor {
    background-color: var(--${(p) => p.antPrefix}-color-bg-base);
  }

  /* 行号元素样式 */
  .cm-gutterElement:not(:first-child) {
    color: var(--${(p) => p.antPrefix}-color-text-tertiary);
    min-height: 24px;
    line-height: 24px;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    padding-top: 0;
  }

  /* 代码行样式 - 不设置固定高度，让 CodeMirror 自动计算以支持换行 */
  .cm-line {
    min-height: 24px;
    line-height: 24px;
  }

  /* 行号内边距 */
  .cm-lineNumbers .cm-gutterElement {
    padding: 0px 4px 0px 12px;
  }

  /* 当前行高亮 */
  .cm-activeLine,
  .cm-activeLineGutter {
    background-color: var(--${(p) => p.antPrefix}-color-fill-secondary);
  }

  /* 按钮样式 */
  .cm-button {
    background-image: none;
    background: var(--${(p) => p.antPrefix}-color-bg-base);
    border: 1px solid var(--${(p) => p.antPrefix}-color-border-secondary);
    border-radius: 4px;
    
    &:hover {
      color: var(--${(p) => p.antPrefix}-color-text-secondary);
      cursor: pointer;
    }
  }

  /* 搜索面板样式 */
  .cm-search {
    background: var(--${(p) => p.antPrefix}-color-fill-secondary);
  }

  .cm-panel.cm-search label {
    display: inline-flex;
    align-items: center;
  }

  .cm-panel.cm-search [name=close] {
    right: 8px;
    background: none;
    font-size: 16px;
    color: var(--${(p) => p.antPrefix}-color-text-tertiary);
  }

  /* 文本输入框样式 */
  .cm-textfield {
    border-radius: 4px;
  }

  .cm-panel.cm-search input[type=checkbox] {
    border: 1px solid var(--${(p) => p.antPrefix}-color-border-secondary);
  }

  /* 聚焦样式 */
  .cm-focused {
    outline: none;
  }
}
`;
