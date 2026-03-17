import createGlobalStyle from '@/libs/createStyle';

export const useCascaderStyle = createGlobalStyle`
.${(p) => p.antPrefix}-cascader-dropdown {
  .${(p) => p.antPrefix}-cascader-menu-item:hover {
    background: var(--${(p) => p.antPrefix}-color-fill-tertiary);
  }
}
`;

export default useCascaderStyle;
