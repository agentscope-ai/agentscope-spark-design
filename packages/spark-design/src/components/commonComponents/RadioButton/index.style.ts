import createGlobalStyle from '@/libs/createStyle';

export const useStyle = createGlobalStyle`
.${(p) => p.antPrefix}-radio-button-wrapper {
  border: none;
  background-color: transparent;
  border-radius: 6px;
  
  &:first-child {
    border-inline-start: initial;
  }
  
  &::before {
    display: none;
  }
  
  &:not(:last-child) {
    margin-right: 12px;
  }
}

.${(p) => p.antPrefix}-radio-group-large .${(p) => p.antPrefix}-radio-button-wrapper:first-child,
.${(p) => p.antPrefix}-radio-group-small .${(p) => p.antPrefix}-radio-button-wrapper:first-child {
  border-start-start-radius: 6px;
  border-end-start-radius: 6px;
}

.${(p) => p.antPrefix}-radio-group-ghost {
  .${(p) => p.antPrefix}-radio-button-wrapper-checked {
    &:not(.${(p) => p.antPrefix}-radio-button-wrapper-disabled) {
      color: var(--${(p) => p.antPrefix}-color-primary);
      background-color: var(--${(p) => p.antPrefix}-color-primary-bg);
      
      .${(p) => p.antPrefix}-radio-button-wrapper-checked {
        background-color: var(--${(p) => p.antPrefix}-color-primary-bg);
      }
    }
    
    &.${(p) => p.antPrefix}-radio-button-wrapper-disabled {
      &:hover {
        background-color: var(--${(p) => p.antPrefix}-color-fill-tertiary);
      }
    }
  }
}

.${(p) => p.sparkPrefix}-radio-group-bordered {
  .${(p) => p.antPrefix}-radio-button-wrapper {
    border: var(--${(p) => p.antPrefix}-line-width) var(--${(p) =>
  p.antPrefix}-line-type) var(--${(p) => p.antPrefix}-color-border);
    
    &:not(:first-child) {
      border-inline-start-width: 1px;
    }
  }

  .${(p) => p.antPrefix}-radio-button-wrapper-checked.${(p) => p.antPrefix}-radio-button-wrapper {
    border-color: var(--${(p) => p.antPrefix}-color-primary);
  }
}

.${(p) => p.antPrefix}-radio-button-wrapper-disabled {
  color: var(--${(p) => p.antPrefix}-color-text-tertiary);
  background-color: transparent;
  
  &:hover {
    color: var(--${(p) => p.antPrefix}-color-text-tertiary);
    background-color: transparent;
  }
}

.${(p) => p.antPrefix}-radio-button-wrapper-checked.${(p) =>
  p.antPrefix}-radio-button-wrapper-disabled {
  color: var(--${(p) => p.antPrefix}-color-text-tertiary);
  background-color: var(--${(p) => p.antPrefix}-color-fill-tertiary);
  
  &:hover {
    color: var(--${(p) => p.antPrefix}-color-text-tertiary);
    background-color: var(--${(p) => p.antPrefix}-color-fill-tertiary);
  }
}
`;
