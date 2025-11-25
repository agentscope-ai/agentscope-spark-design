import createGlobalStyle from '@/libs/createStyle';

export const useStyle = createGlobalStyle`
.${(p) => p.sparkPrefix}-drawer {
  .${(p) => p.antPrefix}-drawer-header {
    padding: 12px 20px;
    border-bottom: none;
    
    .${(p) => p.antPrefix}-drawer-header-title {
      display: flex;
      flex-direction: row;
      
      .${(p) => p.antPrefix}-drawer-title {
        font-size: 16px;
        font-weight: 500;
        line-height: 28px;
        color: var(--${(p) => p.antPrefix}-color-text);
        display: flex;
        justify-content: center;
        padding-right: 32px;
      }
      
      .${(p) => p.antPrefix}-drawer-close {
        width: 32px;
        height: 32px;
      }
    }
  }
  
  .${(p) => p.antPrefix}-drawer-body {
    --${(p) => p.antPrefix}-padding-lg: 20px;
  }
  
  .${(p) => p.antPrefix}-drawer-footer {
    padding: 16px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-top: none;
    
    .${(p) => p.antPrefix}-drawer-footer-info {
      font-size: 14px;
      line-height: 24px;
      color: var(--${(p) => p.antPrefix}-color-text-tertiary);
    }
    
    .${(p) => p.antPrefix}-drawer-footer-buttons {
      display: flex;
      gap: 12px;
    }
  }
  
  .${(p) => p.antPrefix}-drawer-close {
    color: var(--${(p) => p.antPrefix}-color-text);
    margin: 0;
  }
}

.${(p) => p.sparkPrefix}-drawer.${(p) => p.antPrefix}-show-divider {
  .${(p) => p.antPrefix}-drawer-header {
    border-bottom: 1px solid var(--${(p) =>
      p.antPrefix}-color-border-secondary);
  }
  
  .${(p) => p.antPrefix}-drawer-footer {
    border-top: 1px solid var(--${(p) => p.antPrefix}-color-border-secondary);
  }
}
`;