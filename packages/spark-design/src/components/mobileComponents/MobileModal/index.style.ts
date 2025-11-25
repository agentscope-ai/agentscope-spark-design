import createGlobalStyle from '@/libs/createStyle';

export const useStyle = createGlobalStyle`
.${(p) => p.sparkPrefix}-modal {
  .${(p) => p.antPrefix}-modal {
    min-width: 300px;
    max-width: 80vw;
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    padding: 0 !important;
  }
  .${(p) => p.antPrefix}-modal-title {
    min-height: 24px;
  }
  
  .${(p) => p.antPrefix}-modal-content {
    padding: 20px 0;
    border: 1px solid var(--${(p) => p.antPrefix}-color-border-secondary);
    
    .${(p) => p.antPrefix}-modal-header {
      padding: 0 20px 20px 16px;
      margin-bottom: 0;
      
      .${(p) => p.antPrefix}-modal-title {
        font-size: 18px;
        font-weight: 500;
        line-height: 32px;
        color: var(--${(p) => p.antPrefix}-color-text);
        
        .${(p) => p.sparkPrefix}-modal-title-wrapper {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 16px;
          
          .${(p) => p.sparkPrefix}-modal-title {
            flex: 1;
            display: flex;
            justify-content: center;
            text-align: center;
          }

          .${(p) => p.sparkPrefix}-modal-title-padding {
            padding-left: 32px;
          }
          
          .${(p) => p.sparkPrefix}-modal-title-close {
            font-size: 20px;
            cursor: pointer;
          }
        }
      }
    }
    
    .${(p) => p.antPrefix}-modal-body {
      max-height: 60vh;
      padding: 0 20px;
      font-size: 14px;
      color: var(--${(p) => p.antPrefix}-color-text);
    }
      
    .${(p) => p.antPrefix}-modal-confirm-body-wrapper {
      .${(p) => p.antPrefix}-modal-confirm-btns {
        display: flex;
        justify-content: space-between;
        gap: 8px;
        .${(p) => p.antPrefix}-btn {
          flex: 1;
        }
      }
    }
    
    .${(p) => p.antPrefix}-modal-footer {
      padding: 16px 20px 0 20px;
      margin-top: 0;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .${(p) => p.antPrefix}-btn {
        flex: 1;
      }
      
      .${(p) => p.sparkPrefix}-modal-footer-wrapper {
        flex: 1;
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
    .${(p) => p.antPrefix}-modal-body {
      padding: 16px 20px;
    }
    .${(p) => p.antPrefix}-modal-footer {
      border-top: 1px solid var(--${(p) => p.antPrefix}-color-border-secondary);
    }
  }
}
`;