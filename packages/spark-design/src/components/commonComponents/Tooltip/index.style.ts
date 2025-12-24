import createGlobalStyle from '@/libs/createStyle';

export const useStyle = createGlobalStyle`
/* 默认深色 */
.${(p) => p.antPrefix}-tooltip-content {
  .${(p) => p.antPrefix}-tooltip-inner {
    border: 1px solid transparent;
    padding: 6px 12px;
    background: var(--${(p) => p.antPrefix}-color-slate);
    color: var(--${(p) => p.antPrefix}-color-text-on-primary);
  }
}

/* 浅色模式 */
.${(p) => p.sparkPrefix}-tooltip-light {
  .${(p) => p.antPrefix}-tooltip-content .${(p) => p.antPrefix}-tooltip-inner {
    background: var(--${(p) => p.antPrefix}-color-bg-base);
    color: var(--${(p) => p.antPrefix}-color-text);
  }
  
  .${(p) => p.antPrefix}-tooltip-arrow {
    &::after {
      background: var(--${(p) => p.antPrefix}-color-bg-base);
    }
  }
}
`;
