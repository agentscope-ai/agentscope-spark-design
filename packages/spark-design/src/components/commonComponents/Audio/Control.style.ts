import createGlobalStyle from '@/libs/createStyle';

export const useStyle = createGlobalStyle`
.${(p) => p.sparkPrefix}-media-player-controller {
  display: flex;
  padding: 8px;
  gap: 8px;
  align-items: center;
  width: 100%;
  height: 40px;
  overflow: hidden;
}

// 时间文本样式
.${(p) => p.sparkPrefix}-media-time-text {
  flex-grow: 0;
  font-size: 12px;
  line-height: 20px;
}

// 进度条容器样式
.${(p) => p.sparkPrefix}-media-progress-container {
  flex-grow: 1;
  cursor: pointer;
}

// 进度条样式
.${(p) => p.sparkPrefix}-media-progress-bar {
  width: 100%;

  .${(p) => p.antPrefix}-progress-bg {
    transition-duration: 0s;
  }
}
`;
