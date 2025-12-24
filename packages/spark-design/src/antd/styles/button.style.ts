import createGlobalStyle from '@/libs/createStyle';

export const useButtonStyle = createGlobalStyle`
/* 取消所有button的boxShadow */
button[type="button"].${(p) => p.antPrefix}-btn {
  font-weight: 500;
  padding-inline: 11px;
  
  span[data-spark-icon] {
    /* @agentscope-ai/icons的特殊逻辑 */
    font-size: 20px;
  }
  
  &.${(p) => p.antPrefix}-btn-sm {
    padding-inline: 7px;
    
    span[data-spark-icon] {
      /* @agentscope-ai/icons的特殊逻辑 */
      font-size: 16px;
    }
  }
  
  &.${(p) => p.antPrefix}-btn-lg {
    span[data-spark-icon] {
      /* @agentscope-ai/icons的特殊逻辑 */
      font-size: 24px;
    }
  }
}

.${(p) => p.antPrefix}-btn-default {
  border-color: var(--${(p) => p.antPrefix}-color-border-secondary);
}

.${(p) => p.antPrefix}-btn-textCompact:hover {
  color: var(--${(p) => p.antPrefix}-color-text-tertiary) !important;
}

.${(p) => p.antPrefix}-btn.${(p) => p.antPrefix}-btn-default.${(p) =>
  p.antPrefix}-btn-dangerous:not(:disabled):not(.${(p) =>
  p.antPrefix}-btn-disabled) {
  border-color: transparent;
  background-color: var(--${(p) => p.antPrefix}-color-error-bg);
  color: var(--${(p) => p.antPrefix}-color-error);
  
  &:hover {
    background-color: var(--${(p) => p.antPrefix}-color-error-bg-hover);
    border-color: transparent;
    color: var(--${(p) => p.antPrefix}-color-error-hover);
  }
}

.${(p) => p.antPrefix}-btn-color-dangerous.${(p) =>
  p.antPrefix}-btn-variant-solid:disabled,
.${(p) => p.antPrefix}-btn-color-dangerous.${(p) =>
  p.antPrefix}-btn-variant-solid.${(p) => p.antPrefix}-btn-disabled {
  border-color: transparent;
  background-color: var(--${(p) => p.antPrefix}-color-fill-disable);
  color: var(--${(p) => p.antPrefix}-color-text-white);
}

.${(p) => p.antPrefix}-btn-primary {
  color: var(--${(p) => p.antPrefix}-color-text-on-primary);
}
.${(p) => p.antPrefix}-btn-primary.${(p) => 
  p.antPrefix}-btn-variant-solid:not(:disabled):not(.${(p) => p.antPrefix}-btn-disabled):hover {
  color: var(--${(p) => p.antPrefix}-color-text-on-primary);
}

.${(p) => p.antPrefix}-btn-primary:disabled {
  background: var(--${(p) => p.antPrefix}-color-fill-disable);
  color: var(--${(p) => p.antPrefix}-color-text-white);
  border-color: transparent;
}

.${(p) => p.antPrefix}-btn-default:disabled {
  background: var(--${(p) => p.antPrefix}-color-bg-base);
  color: var(--${(p) => p.antPrefix}-color-text-tertiary);
  border-color: var(--${(p) => p.antPrefix}-color-border-secondary);
}
`;

export default useButtonStyle;
