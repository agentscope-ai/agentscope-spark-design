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
`;

export default useInputSearchStyle;
