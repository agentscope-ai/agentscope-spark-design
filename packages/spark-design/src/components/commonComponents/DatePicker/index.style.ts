import createGlobalStyle from '@/libs/createStyle';

export const useStyle = createGlobalStyle`
.${(p) => p.sparkPrefix}-picker {
  border-color: var(--${(p) => p.antPrefix}-color-border-secondary);
  background-color: var(--${(p) => p.antPrefix}-color-bg-base);
  
  &.${(p) => p.antPrefix}-picker-disabled {
    color: var(--${(p) => p.antPrefix}-color-text-quaternary);
    border-color: var(--${(p) =>
      p.antPrefix}-color-border-secondary);
    background-color: var(--${(p) =>
      p.antPrefix}-color-fill-tertiary);
    cursor: not-allowed;

    &:hover:not([disabled]) {
      border-color: var(--${(p) =>
        p.antPrefix}-color-border-secondary);
      background-color: var(--${(p) =>
        p.antPrefix}-color-fill-tertiary);
    }
    
    .${(p) => p.antPrefix}-picker-suffix {
      color: var(--${(p) => p.antPrefix}-color-text-quaternary);
    }
  }
  
  .${(p) => p.antPrefix}-picker-suffix {
    margin-left: 8px;
    color: var(--${(p) => p.antPrefix}-color-text-tertiary);
  }
  
  .${(p) => p.antPrefix}-picker-clear {
    margin-right: 3px;
  }
  
  .${(p) => p.antPrefix}-picker-range-separator {
    display: flex;
    
    .${(p) => p.antPrefix}-picker-separator {
      width: 8px;
      height: 1px;
      background: var(--${(p) => p.antPrefix}-color-text-tertiary);
      
      .anticon {
        display: none;
      }
    }
  }
}

.${(p) => p.antPrefix}-picker-outlined.${(p) => p.antPrefix}-picker-status-error:not(.${(p) => p.antPrefix}-picker-disabled) {
  .${(p) => p.antPrefix}-picker-suffix {
    color: var(--${(p) => p.antPrefix}-color-text-tertiary);
  }
}

.${(p) => p.sparkPrefix}-picker-dropdown {
  .${(p) => p.antPrefix}-picker-panel-container {
    border: 1px solid var(--${(p) => p.antPrefix}-color-border-secondary);
  }
  
  .${(p) => p.antPrefix}-picker-range-arrow {
    display: none !important;
  }
  
  .${(p) => p.antPrefix}-picker-time-panel-column > li.${(p) =>
  p.antPrefix}-picker-time-panel-cell-selected {
    .${(p) => p.antPrefix}-picker-time-panel-cell-inner {
      background: var(--${(p) => p.antPrefix}-color-primary-bg);
    }
  }
  
  .${(p) => p.antPrefix}-picker-now-btn {
    color: var(--${(p) => p.antPrefix}-color-primary);
  }
}

.${(p) => p.antPrefix}-picker-outlined.${(p) => p.antPrefix}-picker-multiple {
  .${(p) => p.antPrefix}-picker-selection-item {
    background-color: var(--${(p) => p.antPrefix}-color-fill-tertiary);
  }
}

.${(p) => p.antPrefix}-picker-selection-item-content {
  color: var(--${(p) => p.antPrefix}-color-mauve);
}

.${(p) => p.antPrefix}-picker-selection-item-remove {
  .anticon-close {
    font-size: 14px;
    color: var(--${(p) => p.antPrefix}-color-mauve);
  }
}
`;
