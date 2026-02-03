import createGlobalStyle from '@/libs/createStyle';

export const useStyle = createGlobalStyle`
.${(p) => p.antPrefix}-collapse {
  background-color: var(--${(p) => p.antPrefix}-color-fill-tertiary);
  border: 1px solid var(--${(p) => p.antPrefix}-color-border-secondary);
  border-radius: var(--${(p) => p.antPrefix}-border-radius);
  
  .${(p) => p.antPrefix}-collapse-content {
    color: var(--${(p) => p.antPrefix}-color-text);
    background-color: var(--${(p) => p.antPrefix}-color-bg-base);
    border-top: 1px solid var(--${(p) => p.antPrefix}-color-border-secondary);
  }
  
  & > .${(p) => p.antPrefix}-collapse-item {
    border-bottom: 1px solid var(--${(p) =>
      p.antPrefix}-color-border-secondary);
    
    & > .${(p) => p.antPrefix}-collapse-header {
      color: var(--${(p) => p.antPrefix}-color-text);
      font-weight: 500;
      line-height: 24px;
      align-items: center;
      
      .${(p) => p.antPrefix}-collapse-expand-icon {
        width: 32px;
        height: 32px;
        padding: 0;
        justify-content: center;
        margin-right: 8px;
      }
      
      .${(p) => p.antPrefix}-collapse-arrow {
        font-size: 15px;
      }
      
      .${(p) => p.antPrefix}-collapse-extra {
        height: 32px;
        display: flex;
        align-items: center;
        margin-left: 8px;
      }
    }
    & > .${(p) => p.antPrefix}-collapse-panel {
      border-top: 1px solid var(--${(p) => p.antPrefix}-color-border-secondary);
    }
  }
}
`;
