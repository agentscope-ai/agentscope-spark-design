import createGlobalStyle from '@/libs/createStyle';

export const useStyle = createGlobalStyle`
.${(p) => p.sparkPrefix}-modal {
  .${(p) => p.antPrefix}-modal-title {
    min-height: 24px;
  }
  
  .${(p) => p.antPrefix}-modal-content {
    padding: 0;
    border: 1px solid var(--${(p) => p.antPrefix}-color-border-secondary);
    
    .${(p) => p.antPrefix}-modal-header {
      padding: 18px 20px;
      margin-bottom: 0;
      
      .${(p) => p.antPrefix}-modal-title {
        line-height: 28px;
        
        .${(p) => p.sparkPrefix}-modal-title-wrapper {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 12px;
          
          .${(p) => p.sparkPrefix}-modal-title {
            flex: 1;
          }
          
          .${(p) => p.sparkPrefix}-modal-title-close {
            cursor: pointer;
          }
        }
      }
    }
    
    .${(p) => p.antPrefix}-modal-body {
      padding: 20px;
      color: var(--${(p) => p.antPrefix}-color-text-secondary);
    }
    
    .${(p) => p.antPrefix}-modal-footer {
      padding: 16px 20px;
      margin-top: 0;
      
      .${(p) => p.sparkPrefix}-modal-footer-wrapper {
        display: flex;
        justify-content: space-between;
        align-items: center;
        
        .${(p) => p.sparkPrefix}-modal-footer-info {
          font-size: 14px;
          font-weight: normal;
          line-height: 24px;
          color: var(--${(p) => p.antPrefix}-color-text-tertiary);
        }
        
        .${(p) => p.sparkPrefix}-modal-footer-origin-node {
          display: flex;
          gap: 12px;
        }
      }
    }
    
    .${(p) => p.antPrefix}-modal-close {
      width: 32px;
      height: 32px;
      top: 16px;
      right: 16px;
      
      .${(p) => p.antPrefix}-modal-close-icon {
        color: var(--${(p) => p.antPrefix}-color-text);
      }
      
      &:hover {
        background: none;
      }
    }
  }
}

.${(p) => p.sparkPrefix}-show-divider {
  .${(p) => p.antPrefix}-modal-content {
    .${(p) => p.antPrefix}-modal-header {
      border-bottom: 1px solid var(--${(p) =>
        p.antPrefix}-color-border-secondary);
    }
    
    .${(p) => p.antPrefix}-modal-footer {
      border-top: 1px solid var(--${(p) => p.antPrefix}-color-border-secondary);
    }
  }
}
`;
