import createGlobalStyle from '@/libs/createStyle';

export const useDropdownStyle = createGlobalStyle`
.${(p) => p.antPrefix}-dropdown .${(p) => p.antPrefix}-dropdown-menu {
  box-shadow: var(--${(p) => p.antPrefix}-box-shadow);
  border: 1px solid var(--${(p) => p.antPrefix}-color-border-secondary);
  
  .${(p) => p.antPrefix}-dropdown-menu-item.${(p) =>
  p.antPrefix}-dropdown-menu-item-active.${(p) =>
  p.antPrefix}-dropdown-menu-item-danger:not(.${(p) =>
  p.antPrefix}-dropdown-menu-item-disabled) {
    color: var(--${(p) => p.antPrefix}-color-error);
    background-color: var(--${(p) => p.antPrefix}-color-error-bg-hover);
  }

  .${(p) => p.antPrefix}-dropdown-menu-item:hover {
    background-color: var(--${(p) => p.antPrefix}-color-fill-tertiary);
  }
  
  .${(p) => p.antPrefix}-dropdown-menu-title-content {
    text-align: left;
  }
}
`;

export default useDropdownStyle;
