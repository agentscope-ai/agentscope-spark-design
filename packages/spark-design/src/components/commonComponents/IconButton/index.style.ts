import createGlobalStyle from '@/libs/createStyle';

export const useStyle = createGlobalStyle`
.${(p) => p.sparkPrefix}-icon-button.${(p) => p.antPrefix}-btn {
  .${(p) => p.antPrefix}-btn-icon {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &.${(p) => p.antPrefix}-btn-variant-outlined:not(:disabled):not(.${(p) => p.antPrefix}-btn-disabled):hover {
    border-color: transparent;
  }
}
`;
