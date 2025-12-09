import createGlobalStyle from '@/libs/createStyle';

export const useStyle = createGlobalStyle`
// Audio 主容器样式
.${(p) => p.sparkPrefix}-audio-container {
  position: relative;
  box-sizing: border-box;
}

.${(p) => p.sparkPrefix}-audio-element {
  display: none;
}

.${(p) => p.sparkPrefix}-audio-controller-wrapper {
  width: 100%;
}
`;

