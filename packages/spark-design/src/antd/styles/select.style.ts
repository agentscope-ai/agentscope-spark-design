import createGlobalStyle from '@/libs/createStyle';

export const useSelectStyle = createGlobalStyle`
.${(p) => p.antPrefix}-select-dropdown {
  border: 1px solid var(--${(p) => p.antPrefix}-color-border-secondary);
  box-shadow: 0px 4px 6px 0px rgba(0, 0, 0, 0.08);
  border-radius: var(--${(p) => p.antPrefix}-border-radius);

  .${(p) => p.antPrefix}-select-item-option-active,
  .${(p) => p.antPrefix}-select-item-option-active:not(.${(p) =>
  p.antPrefix}-select-item-option-disabled) {
    background-color: var(--${(p) => p.antPrefix}-color-fill-tertiary);
  }
}

.${(p) => p.antPrefix}-select-outlined:not(.${(p) =>
  p.antPrefix}-select-customize-input) .${(p) => p.antPrefix}-select-selector {
  border-color: var(--${(p) => p.antPrefix}-color-border-secondary);
}

.${(p) => p.antPrefix}-select .${(p) => p.antPrefix}-select-arrow {
  color: var(--${(p) => p.antPrefix}-color-text-secondary);
}

.${(p) => p.antPrefix}-select-outlined.${(p) => p.antPrefix}-select-multiple {
  .${(p) => p.antPrefix}-select-selection-item {
    border-radius: 4px;
    background-color: var(--${(p) => p.antPrefix}-color-mauve-bg);
  }
}

.${(p) => p.antPrefix}-select-selection-overflow {
  color: var(--${(p) => p.antPrefix}-color-mauve);
  
  .${(p) => p.antPrefix}-select-selection-item-remove {
    .anticon-close {
      font-size: 14px;
      color: var(--${(p) => p.antPrefix}-color-mauve);
    }
  }
}

.${(p) => p.antPrefix}-select-disabled.${(p) =>
  p.antPrefix}-select-multiple .${(p) =>
  p.antPrefix}-select-selection-overflow .${(p) =>
  p.antPrefix}-select-selection-item {
  color: var(--${(p) => p.antPrefix}-color-mauve);
}

.${(p) => p.antPrefix}-select .${(p) =>
  p.antPrefix}-select-selection-placeholder {
  color: var(--${(p) => p.antPrefix}-color-text-tertiary);
}
`;

export default useSelectStyle;
