import createGlobalStyle from '@/libs/createStyle';

export const useStyle = createGlobalStyle`
.${(p) => p.sparkPrefix}-steps {
  .${(p) => p.antPrefix}-steps-item-container {
    display: flex;
    flex-direction: row;
  }
  
  .${(p) => p.antPrefix}-steps-item:not(.${(p) =>
  p.antPrefix}-steps-item-active):not(.${(p) =>
  p.antPrefix}-steps-item-process) {
    .${(p) => p.antPrefix}-steps-item-container {
      &:hover {
        .${(p) => p.antPrefix}-steps-item-icon {
          border-color: transparent !important;
        }
      }
    }
  }
  
  .${(p) => p.antPrefix}-steps-item-icon {
    font-size: 14px;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--${(p) => p.antPrefix}-color-border-secondary);
  }

  .${(p) => p.antPrefix}-steps-item-process {
    .${(p) => p.antPrefix}-steps-item-icon {
      border-color: transparent !important;
    }
  }
  
  .${(p) => p.antPrefix}-steps-item-finish {
    .${(p) => p.antPrefix}-steps-item-icon {
      height: 20px !important;
    }
    
    .${(p) => p.antPrefix}-steps-icon {
      max-width: 20px;
      max-height: 20px;
      font-size: 20px !important;
      line-height: 20px !important;
      top: -0.5px !important;
      
      .${(p) => p.sparkPrefix}-finish-icon {
        background-color: var(--${(p) => p.antPrefix}-color-primary-bg);
        border-radius: 50%;
        font-size: 20px !important;
        width: 20px;
        height: 20px;
        color: var(--${(p) => p.antPrefix}-color-primary);
      }
    }
  }
  
  .${(p) => p.antPrefix}-steps-item-title {
    padding-inline-end: 8px;
    line-height: 20px;
    color: var(--${(p) => p.antPrefix}-color-text) !important;
    font-size: 14px;
    font-weight: 500;
    
    &::after {
      background-color: var(--${(p) =>
        p.antPrefix}-color-border-secondary) !important;
      height: 1px;
      background: var(--${(p) => p.antPrefix}-color-border-secondary);
    }
  }
  
  .${(p) => p.antPrefix}-steps-item-description {
    font-size: 12px;
    line-height: 20px;
    color: var(--${(p) => p.antPrefix}-color-text-tertiary) !important;
  }
  
  .${(p) => p.antPrefix}-steps-item-wait {
    .${(p) => p.antPrefix}-steps-item-icon {
      background-color: var(--${(p) => p.antPrefix}-color-primary-bg);
    }
  }
  
  &.${(p) => p.antPrefix}-steps-horizontal:not(.${(p) =>
  p.antPrefix}-steps-label-vertical) {
    .${(p) => p.antPrefix}-steps-item {
      padding-inline-start: 8px;
    }
  }
}

.${(p) => p.antPrefix}-steps-vertical {
  display: flex;
  min-height: 182px;
  align-items: center;
  justify-content: center;
  
  .${(p) => p.antPrefix}-steps-item {
    .${(p) => p.antPrefix}-steps-item-icon {
      margin-inline-end: 9px !important;
    }
  }
  
  .${(p) => p.antPrefix}-steps-item-tail::after {
    width: 1px !important;
    background-color: var(--${(p) =>
      p.antPrefix}-color-border-secondary) !important;
  }
}
`;
