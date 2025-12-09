import createGlobalStyle from '@/libs/createStyle';

export const useStyle = createGlobalStyle`
// Video 主容器样式
.${(p) => p.sparkPrefix}-video-container {
  position: relative;
  width: 100%;
  height: 100%;
  background: #000;

  button {
    --${(p) =>
      p.antPrefix}-color-text-disabled: rgba(231, 231, 237, 0.25) !important;
    --${(p) =>
      p.antPrefix}-button-text-text-color: rgba(231, 231, 237, 0.88) !important;
    --${(p) =>
      p.antPrefix}-button-text-text-hover-color: rgba(231, 231, 237, 0.88) !important;
    --${(p) =>
      p.antPrefix}-button-text-hover-bg: rgba(231, 231, 237, 0.08) !important;
  }

  .${(p) => p.sparkPrefix}-media-time-text {
    color: var(--${(p) => p.antPrefix}-color-text-white);
  }
}

.${(p) => p.sparkPrefix}-video-content {
  width: 100%;
  height: 100%;
}

.${(p) => p.sparkPrefix}-video-element {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.${(p) => p.sparkPrefix}-video-controller-wrapper {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(0deg, #000000 2%, rgba(0, 0, 0, 0) 94%);
  transition: opacity 0.3s;
}
  // 进度条样式
.${(p) => p.sparkPrefix}-media-progress-bar {
  .${(p) => p.antPrefix}-progress-inner {
    --${(p) => p.antPrefix}-progress-remaining-color: var(--${(p) =>
  p.antPrefix}-color-fill);
  }
  
  .${(p) => p.antPrefix}-progress-bg {
    background: var(--${(p) => p.antPrefix}-color-text-white) !important;
  }
}
`;
