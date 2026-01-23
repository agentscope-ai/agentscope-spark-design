import createGlobalStyle from '@/libs/createStyle';

export const useStyle = createGlobalStyle`
.${(p) => p.sparkPrefix}-media-preview-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 9999;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--${(p) => p.antPrefix}-color-bg-mask);
}

.${(p) => p.sparkPrefix}-media-preview-main-content {
  border-radius: var(--${(p) => p.antPrefix}-border-radius-lg);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  transition: transform 0.3s ease, opacity 0.15s ease;
  opacity: 1;

  &.transitioning {
    opacity: 0;
  }
}

.${(p) => p.sparkPrefix}-media-preview-main-media {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.${(p) => p.sparkPrefix}-media-preview-nav-left {
  position: absolute;
  left: 48px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: none;
  padding: 0;
}

.${(p) => p.sparkPrefix}-media-preview-nav-right {
  position: absolute;
  right: 48px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: none;
  padding: 0;
}

.${(p) => p.sparkPrefix}-media-preview-nav-icon {
  font-size: 48px;
  color: var(--${(p) => p.antPrefix}-color-bg-base);
}

.${(p) => p.sparkPrefix}-media-preview-toolbar {
  position: absolute;
  top: 36px;
  right: 36px;
  display: flex;
  flex-direction: row;
  gap: 16px;
}

.${(p) => p.sparkPrefix}-media-preview-zoom-controls {
  display: flex;
  flex-direction: row;
  border-radius: 8px;
  background: var(--${(p) => p.antPrefix}-color-bg-mask);
}

.${(p) => p.sparkPrefix}-media-preview-close-button {
  display: flex;
  flex-direction: row;
  padding: 8px;
  border-radius: 8px;
  cursor: pointer;
  border: none;
}

.${(p) => p.sparkPrefix}-media-preview-tool-button {
  background: transparent;
  border: none;
  padding: 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

.${(p) => p.sparkPrefix}-media-preview-tool-icon {
  font-size: 24px;
  color: var(--${(p) => p.antPrefix}-color-bg-base);
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
}

.${(p) => p.sparkPrefix}-media-preview-thumbnail-carousel {
  position: absolute;
  bottom: 42px;
  left: 50%;
  transform: translateX(-50%);
  padding: 8px;
  border-radius: 8px;
  background: var(--${(p) => p.antPrefix}-color-bg-mask);
}

.${(p) => p.sparkPrefix}-media-preview-thumbnail-wrapper {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
}

.${(p) => p.sparkPrefix}-media-preview-thumbnail-nav-icon {
  font-size: 16px;
  color: var(--${(p) => p.antPrefix}-color-bg-base);
  cursor: pointer;
  flex-shrink: 0;

  &:hover {
    color: var(--${(p) => p.antPrefix}-color-bg-base) !important;
    opacity: 0.8;
  }
}

.${(p) => p.sparkPrefix}-media-preview-thumbnail-list {
  display: flex;
  flex-direction: row;
  gap: 8px;
  overflow-x: auto;
  scroll-behavior: smooth;
  max-width: 720px;

  &::-webkit-scrollbar {
    display: none;
  }
}

.${(p) => p.sparkPrefix}-media-preview-thumbnail-item {
  width: 56px;
  height: 56px;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  flex-shrink: 0;
  border: 1px solid transparent;
  box-sizing: border-box;

  &.active {
    border-color: var(--${(p) => p.antPrefix}-color-bg-base);
  }

  img,
  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
`;
