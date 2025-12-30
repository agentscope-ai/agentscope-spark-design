import createGlobalStyle from '@/libs/createStyle';

export const useStyle = createGlobalStyle`
/* Default dark mode */
.${(p) => p.antPrefix}-tooltip-content {
  .${(p) => p.antPrefix}-tooltip-inner {
    border: 1px solid transparent;
    padding: 6px 12px;
    background: var(--${(p) => p.antPrefix}-color-slate);
    color: var(--${(p) => p.antPrefix}-color-text-white);
  }
}

/* Light mode - keep same style as dark mode */
.${(p) => p.sparkPrefix}-tooltip-light {
  .${(p) => p.antPrefix}-tooltip-content .${(p) => p.antPrefix}-tooltip-inner {
    background: var(--${(p) => p.antPrefix}-color-slate);
    color: var(--${(p) => p.antPrefix}-color-text-white);
  }
  
  .${(p) => p.antPrefix}-tooltip-arrow {
    &::after {
      background: var(--${(p) => p.antPrefix}-color-slate);
    }
  }
}
`;