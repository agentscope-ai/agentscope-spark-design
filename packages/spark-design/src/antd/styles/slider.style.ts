import createGlobalStyle from '@/libs/createStyle';

export const useSliderStyle = createGlobalStyle`
.${(p) => p.antPrefix}-slider {
  margin-left: 0;
  margin-right: 0;

  /* 端点防溢出：渐变 translateX 避免抖动 */
  &.${(p) => p.antPrefix}-slider-horizontal:not(.${(p) => p.antPrefix}-slider-reverse) {
    .${(p) => p.antPrefix}-slider-handle {
      &[style*='left: 0%'], &[style*='left:0%'] { transform: translateX(0%) !important; }
      &[style*='left: 1%'], &[style*='left:1%'] { transform: translateX(-25%) !important; }
      &[style*='left: 2%'], &[style*='left:2%'] { transform: translateX(-50%) !important; }
      &[style*='left: 98%'], &[style*='left:98%'] { transform: translateX(-50%) !important; }
      &[style*='left: 99%'], &[style*='left:99%'] { transform: translateX(-75%) !important; }
      &[style*='left: 100%'], &[style*='left:100%'] { transform: translateX(-100%) !important; }
    }
  }

  &.${(p) => p.antPrefix}-slider-horizontal.${(p) => p.antPrefix}-slider-reverse {
    .${(p) => p.antPrefix}-slider-handle {
      &[style*='right: 0%'], &[style*='right:0%'] { transform: translateX(0%) !important; }
      &[style*='right: 1%'], &[style*='right:1%'] { transform: translateX(25%) !important; }
      &[style*='right: 2%'], &[style*='right:2%'] { transform: translateX(50%) !important; }
      &[style*='right: 98%'], &[style*='right:98%'] { transform: translateX(50%) !important; }
      &[style*='right: 99%'], &[style*='right:99%'] { transform: translateX(75%) !important; }
      &[style*='right: 100%'], &[style*='right:100%'] { transform: translateX(100%) !important; }
    }
  }

  .${(p) => p.antPrefix}-slider-rail {
    border-radius: 8px;
  }
  
  .${(p) => p.antPrefix}-slider-track {
    border-radius: 8px;
  }
}

.${(p) => p.antPrefix}-slider-tooltip {
  .${(p) => p.antPrefix}-tooltip-inner {
    background: var(--${(p) => p.antPrefix}-color-bg-spotlight);
  }
}

/* 左右两侧的mark对齐 */
.${(p) => p.antPrefix}-slider-mark-text {
  &:first-child {
    transform: translateX(0%) !important;
  }
  
  &:last-child {
    transform: translateX(-100%) !important;
  }
}
`;

export default useSliderStyle;
