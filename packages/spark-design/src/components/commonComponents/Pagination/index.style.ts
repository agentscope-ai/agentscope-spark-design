import createGlobalStyle from '@/libs/createStyle';

export const useStyle = createGlobalStyle`
.${(p) => p.antPrefix}-pagination {
  color: var(--${(p) => p.antPrefix}-color-text) !important;
  font-weight: 500 !important;
  
  .${(p) => p.antPrefix}-pagination-total-text {
    font-weight: 500;
  }
  
  .${(p) => p.antPrefix}-select-selection-item {
    font-weight: 500;
  }
  
  .${(p) => p.antPrefix}-pagination-item-active {
    border-color: var(--${(p) => p.antPrefix}-color-border-secondary);
    border-radius: 8px;
    font-weight: 
    
    a {
      color: var(--${(p) => p.antPrefix}-color-text) !important;
    }
  }
  
  a {
    color: var(--${(p) => p.antPrefix}-color-text) !important;
    font-weight: 500 !important;
  }
  
  .${(p) => p.antPrefix}-pagination-jump-next {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .${(p) => p.antPrefix}-pagination-jump-prev {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

.${(p) => p.antPrefix}-pagination {
  .${(p) => p.antPrefix}-pagination-prev,
  .${(p) => p.antPrefix}-pagination-next,
  .${(p) => p.antPrefix}-pagination-jump-prev,
  .${(p) => p.antPrefix}-pagination-jump-next {
    font-family: Montserrat;
    display: inline-block !important;
  }
}
`;
