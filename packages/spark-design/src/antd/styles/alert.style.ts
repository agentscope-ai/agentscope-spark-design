import createGlobalStyle from '@/libs/createStyle';

export const useAlertStyle = createGlobalStyle`
.${(p) => p.antPrefix}-alert {
  .${(p) => p.antPrefix}-alert-close-icon {
    font-size: 16px;
    
    .anticon-close {
      color: var(--${(p) => p.antPrefix}-color-text);
    }
  }

  .${(p) => p.antPrefix}-alert-icon {
    font-size: 15px;
  }

  &.${(p) => p.antPrefix}-alert-with-description {
    .${(p) => p.antPrefix}-alert-icon {
      display: inline-block;
      line-height: 24px;
      font-size: 15px;
    }
  }
 
}
`;

export default useAlertStyle;
