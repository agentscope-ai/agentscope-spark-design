import createGlobalStyle from '@/libs/createStyle';

export const useInputSearchStyle = createGlobalStyle`
.${(p) => p.antPrefix}-input-outlined,
.${(p) => p.antPrefix}-input-outlined.${(p) =>
  p.antPrefix}-input-disabled {
  border-color: var(--${(p) => p.antPrefix}-color-border-secondary);
}

.${(p) => p.antPrefix}-input-sm {
  font-size: 12px;
  height: 24px;
}

.${(p) => p.antPrefix}-input-search.${(p) =>
  p.antPrefix}-input-group-wrapper.${(p) =>
  p.antPrefix}-input-group-wrapper-outlined {
  border: 1px solid var(--${(p) => p.antPrefix}-color-border-secondary);
  border-radius: var(--${(p) => p.antPrefix}-border-radius);
  transition: all 0.2s;

  .${(p) => p.antPrefix}-input-wrapper {
    .${(p) => p.antPrefix}-input-affix-wrapper {
      border: none;
      box-shadow: none;

      &.${(p) => p.antPrefix}-input-affix-wrapper-focused,
      &:focus-within {
        border: none;
        box-shadow: none;
      }
    }

    .${(p) => p.antPrefix}-input-group-addon .${(p) =>
      p.antPrefix}-input-search-button {
      border: none;
      box-shadow: none;
    }
  }

  &:hover {
    border-color: var(--${(p) => p.antPrefix}-color-primary);
  }

  &:has(.${(p) => p.antPrefix}-input-affix-wrapper-focused),
  &:has(.${(p) => p.antPrefix}-input-affix-wrapper:focus-within) {
    border-color: var(--${(p) => p.antPrefix}-color-primary);
    box-shadow: 0 0 0 2px rgba(var(--${(p) => p.antPrefix}-color-primary-rgb, 22, 119, 255), 0.1);
  }
}
`;

export default useInputSearchStyle;
