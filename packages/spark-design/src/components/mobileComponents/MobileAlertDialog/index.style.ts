import createGlobalStyle from '@/libs/createStyle';

export const useStyle = createGlobalStyle`
.${(p) => p.sparkPrefix}-alert-dialog {
  min-width: 300px;
  max-width: 80vw !important;

  .${(p) => p.antPrefix}-modal-body {
    padding: 0 0 12px 32px;
    font-size: 14px;
    color: var(--${(p) => p.antPrefix}-color-text-secondary);
  }
  
  .${(p) => p.antPrefix}-modal-content {
    padding: 20px;
  }

  .${(p) => p.antPrefix}-modal-confirm-content {
    padding: 0 0 12px 32px;
    font-size: 14px;
    color: var(--${(p) => p.antPrefix}-color-text-secondary);
  }

  .${(p) => p.antPrefix}-modal-confirm-paragraph {
    max-width: 100%;
  }
  .${(p) => p.antPrefix}-modal-confirm-btns {
    display: flex;
    justify-content: space-between;
    gap: 8px;
    .${(p) => p.antPrefix}-btn {
      flex: 1;
    }
  }
}
`;