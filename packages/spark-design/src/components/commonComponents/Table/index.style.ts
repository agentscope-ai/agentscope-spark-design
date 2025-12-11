import createGlobalStyle from '@/libs/createStyle';

export const useStyle = createGlobalStyle`
.${(p) => p.antPrefix}-table-wrapper {
  .${(p) => p.antPrefix}-table-container {
    .${(p) => p.antPrefix}-table-thead > tr > th {
      padding: 8px 20px;
      font-weight: 400;
      color: var(--${(p) => p.antPrefix}-color-text-secondary);
    }
    
    /* 默认情况下移除表头单元格的圆角 */
    table > thead > tr:first-child > *:first-child {
      border-start-start-radius: 0;
    }
    
    table > thead > tr:first-child > *:last-child {
      border-start-end-radius: 0;
    }
    
    .${(p) => p.antPrefix}-table-thead > tr > th:not(:last-child):not(.${(p) =>
  p.antPrefix}-table-selection-column):not(.${(p) =>
  p.antPrefix}-table-row-expand-icon-cell):not([colspan])::before {
      display: none !important;
    }
    
    .${(p) => p.antPrefix}-table-tbody > tr > td {
      padding: 16px 20px;
    }
    
    .${(p) => p.antPrefix}-table-tbody > tr {
      & > td:not(.${(p) => p.antPrefix}-table-selection-column):first-child,
      & > td.${(p) => p.antPrefix}-table-selection-column + td:not(
      .${(p) => p.antPrefix}-table-selection-column) {
        font-weight: 500;
      }
    }
  }
  
  .${(p) => p.antPrefix}-table-small {
    .${(p) => p.antPrefix}-table-tbody > tr > td {
      padding: 8px 20px;
    }
  }
  
  /* 无 footer 时 bordered 表格添加整体圆角 */
  .${(p) => p.antPrefix}-table-bordered:not(:has(.${(p) =>
  p.antPrefix}-table-footer)) {

    .${(p) => p.antPrefix}-table-container {
      border-radius: var(--${(p) => p.antPrefix}-table-header-border-radius);
      /* 恢复表头单元格的圆角 - 左上角和右上角 */
      table > thead > tr:first-child > *:first-child {
        border-start-start-radius: var(--${(p) =>
          p.antPrefix}-table-header-border-radius);
      }
      
      table > thead > tr:first-child > *:last-child {
        border-start-end-radius: var(--${(p) =>
          p.antPrefix}-table-header-border-radius);
      }

      table > tbody > tr:last-child > *:first-child {
        border-end-start-radius: var(--${(p) =>
          p.antPrefix}-table-header-border-radius);
      }
      
      table > tbody > tr:last-child > *:last-child {
        border-end-end-radius: var(--${(p) =>
          p.antPrefix}-table-header-border-radius);
        }
    }
  }

/* 有 footer 时 bordered 表格添加整体圆角 */
  .${(p) => p.antPrefix}-table-bordered:has(.${(p) =>
  p.antPrefix}-table-footer) {
    .${(p) => p.antPrefix}-table-container {
      /* 恢复表头单元格的圆角 - 左上角和右上角 */
      table > thead > tr:first-child > *:first-child {
        border-start-start-radius: var(--${(p) =>
          p.antPrefix}-table-header-border-radius);
      }
      
      table > thead > tr:first-child > *:last-child {
        border-start-end-radius: var(--${(p) =>
          p.antPrefix}-table-header-border-radius);
      }
    }
  }
}
`;
