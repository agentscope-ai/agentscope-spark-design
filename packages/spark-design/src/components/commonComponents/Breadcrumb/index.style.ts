import createGlobalStyle from '@/libs/createStyle';

export const useStyle = createGlobalStyle`
.${(p) => p.sparkPrefix}-breadcrumb {
  cursor: default;
  
  .${(p) => p.antPrefix}-breadcrumb-link {
    cursor: pointer;
  }
  
  li:last-child {
    .${(p) => p.antPrefix}-breadcrumb-link {
      color: var(--${(p) => p.antPrefix}-color-text);
      display: flex;
      align-items: center;
    }
  }
  
  a {
    color: var(--${(p) => p.antPrefix}-color-text-secondary);
    height: auto;
    
    &:hover {
      background-color: transparent;
    }
  }
  
  .${(p) => p.antPrefix}-breadcrumb-separator {
    color: var(--${(p) => p.antPrefix}-color-text);
  }
  
  .${(p) => p.antPrefix}-breadcrumb-overlay-link {
    display: flex;
    align-items: center;
  }
  
  .${(p) => p.sparkPrefix}-breadcrumb-dropdown,
  .${(p) => p.antPrefix}-dropdown-trigger {
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 8px;
    
    .${(p) => p.antPrefix}-avatar > img {
      width: 20px;
      height: 20px;
    }
  }
  
  .${(p) => p.sparkPrefix}-breadcrumb-item-content {
    display: flex;
    align-items: center;
    gap: 8px;
  }
  
  .${(p) => p.sparkPrefix}-breadcrumb-dropdown-title {
    display: flex;
    align-items: center;
    gap: 4px;
    height: 100%;
    
    .${(p) => p.sparkPrefix}-breadcrumb-dropdown-icon {
      font-size: 16px !important;
    }
  }
  
  .${(p) => p.sparkPrefix}-breadcrumb-dropdown-overlay {
    display: flex;
    justify-content: center;
  }
}
`;
