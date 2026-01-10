import { createGlobalStyle } from 'antd-style';

export default createGlobalStyle`
.${(p) => p.theme.prefixCls}-assets-preview {
  position: relative;

  &-left-edge,
  &-right-edge {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 128px;
    pointer-events: none;
  }

  &-left-edge {
    left: 0;
    background: linear-gradient(to right, ${(p) =>
      p.theme.colorBgLayout}, rgba(0, 0, 0, 0));
  }

  &-right-edge {
    right: 0;
    background: linear-gradient(to left, ${(p) =>
      p.theme.colorBgLayout}, rgba(0, 0, 0, 0));
  }

  &-arrow {
    position: absolute;
    bottom: 0;
  }

  &-left-arrow {
    left: 10px;
  }

  &-right-arrow {
    right: 10px;
  }

  &-container {
    display: flex;
    padding: 8px;
    gap: 8px;
    overflow-x: auto;
    justify-content: safe center;
    background-color: ${(p) => p.theme.colorFillTertiary};
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none; /* IE/Edge */
    &::-webkit-scrollbar {
      display: none; /* Chrome/Safari/Opera */
    }
  }


  &-image {
    height: 100%;
    flex-basis: auto;
    flex-shrink: 0;
    border-radius: 8px;
    overflow: hidden;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }

  &-video {
    height: 100%;
    flex-basis: auto;
    flex-shrink: 0;
    border-radius: 8px;
    overflow: hidden;

    video {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }


  }
  &-audio {
    display: flex;
    align-items: center;
    gap: 8px;
    background-color: ${(p) => p.theme.colorBgBase};
    border-radius: 8px;
    border: 1px solid ${(p) => p.theme.colorBorderSecondary};
    height: 40px;
    padding: 0 8px;

    &-time {
      font-size: 12px;
      color: ${(p) => p.theme.colorText};
      line-height: 1;
    }

    &-progress {
      flex: 1;
      height: 8px;
      background-color: ${(p) => p.theme.colorBorderSecondary};
      border-radius: 4px;
      cursor: pointer;
      position: relative;
      overflow: hidden;

      &-bar {
        height: 100%;
        background-color: ${(p) => p.theme.colorPrimary};
        border-radius: 4px;
        transition: width 0.1s linear;
      }
    }
  }
}
`;
