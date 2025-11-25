import createGlobalStyle from '@/libs/createStyle';

export const useStyle = createGlobalStyle`
.${(p) => p.antPrefix}-tabs {
  .${(p) => p.antPrefix}-tabs-tab.${(p) => p.antPrefix}-tabs-tab-active .${(
  p,
) => p.antPrefix}-tabs-tab-btn {
    color: var(--${(p) => p.antPrefix}-color-text);
    font-weight: 500;
  }
  
  .${(p) => p.antPrefix}-tabs-tab .${(p) => p.antPrefix}-tabs-tab-btn {
    color: var(--${(p) => p.antPrefix}-color-text);
    font-weight: 400;
  }
  
  .${(p) => p.antPrefix}-tabs-ink-bar {
    background: var(--${(p) => p.antPrefix}-color-primary);
  }
}

.${(p) => p.antPrefix}-tabs-nav::before {
  display: none !important;
}

.${(p) => p.antPrefix}-segmented-item {
  &::after {
    background: none !important;
    opacity: 1 !important;
  }
  
  .${(p) => p.antPrefix}-segmented-item-label {
    font-weight: 500;
    color: var(--${(p) => p.antPrefix}-color-text-secondary);
  }
}

.${(p) => p.antPrefix}-segmented-item-selected {  
  .${(p) => p.antPrefix}-segmented-item-label {
    font-weight: 500;
    color: var(--${(p) => p.antPrefix}-color-text);
  }
}

.${(p) => p.sparkPrefix}-segmented-tab-bar {
  margin-bottom: 16px;
  background: var(--${(p) => p.antPrefix}-color-fill-tertiary);
  align-self: baseline;
  
  &.${(p) => p.sparkPrefix}-segmented-tab-bar-centered {
    align-self: center;
  }
}
`;
