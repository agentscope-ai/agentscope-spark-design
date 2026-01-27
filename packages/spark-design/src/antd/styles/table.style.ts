import createGlobalStyle from '@/libs/createStyle';

export const useTableStyle = createGlobalStyle`
.${(p) => p.antPrefix}-table-cell {
  border-radius: 0;
}
.${(p) => p.antPrefix}-table-wrapper .${(p) => p.antPrefix}-table .${(p) => p.antPrefix}-table-header {
  border-radius: 0;
}
`;

export default useTableStyle;
