import createGlobalStyle from '@/libs/createStyle';

export const useStyle = createGlobalStyle`
.${(p) => p.sparkPrefix}-empty {
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  position: relative;
}

.${(p) => p.sparkPrefix}-empty-texture,
.${(p) => p.sparkPrefix}-empty-image {
  position: absolute;
  top: 0;
  left: 0;
  pointer-events: none;
  display: flex;
  justify-content: center;
}

.${(p) => p.sparkPrefix}-empty-image svg {
  margin-top: 16.875%;
  width: 33.75%;
  height: 33.75%;
}

.${(p) => p.sparkPrefix}-empty-texture svg {
  width: 100%;
  height: 100%;
}

.${(p) => p.sparkPrefix}-empty-title {
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  color: var(--${(p) => p.antPrefix}-color-text);
}

.${(p) => p.sparkPrefix}-empty-description {
  font-size: 12px;
  line-height: 20px;
  color: var(--${(p) => p.antPrefix}-color-text-secondary);
  text-align: center;
  width: 100%;
}
`;
