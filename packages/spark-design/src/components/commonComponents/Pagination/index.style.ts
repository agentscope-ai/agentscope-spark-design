import createGlobalStyle from '@/libs/createStyle';

export const useStyle = createGlobalStyle`
.${(p) => p.antPrefix}-pagination {
  color: var(--${(p) => p.antPrefix}-color-text);
  font-weight: 500;

  a {
    color: var(--${(p) => p.antPrefix}-color-text);
    font-weight: 500;
  }
  
  .${(p) => p.antPrefix}-pagination-total-text, .${(p) => p.antPrefix}-select-selection-item {
    font-weight: 500;
  }
  .${(p) => p.antPrefix}-pagination-item-active {
    border-color: var(--${(p) => p.antPrefix}-color-border-secondary);
    border-radius: 8px;
      a {
        color: var(--${(p) => p.antPrefix}-color-text);
        font-weight: 500;
      }
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

.${(p) => p.antPrefix}-pagination 
.${(p) => p.antPrefix}-pagination-jump-next 
.${(p) => p.antPrefix}-pagination-item-container 
.${(p) => p.antPrefix}-pagination-item-ellipsis {
  color: var(--${(p) => p.antPrefix}-color-text);
  font-family: serif;
  font-size: 10px;
  font-weight: 400;
  letter-spacing: 0;
}
`;
