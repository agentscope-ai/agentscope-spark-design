import { getCommonConfig, useCommonConfig } from '@/config';
import {
  SparkAmplifyLine,
  SparkExitFullscreenLine,
  SparkFalseLine,
  SparkLeftLine,
  SparkReduceLine,
  SparkRightLine,
} from '@agentscope-ai/icons';
import { ConfigProvider } from 'antd';
import classNames from 'classnames';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import IconButton from '../IconButton';
import Video from '../Video';
import { useStyle } from './index.style';

export interface MediaItem {
  /** 媒体类型 */
  type: 'image' | 'video';
  /** 媒体资源地址 */
  src: string;
  /** 媒体替代文本 */
  alt?: string;
}

export interface MediaPreviewProps {
  /** 自定义样式类名 */
  className?: string;
  /** 是否显示预览 */
  visible: boolean;
  /** 媒体列表 */
  mediaList: MediaItem[];
  /** 当前选中的索引 */
  currentIndex?: number;
  /** 关闭回调 */
  onClose: () => void;
}

// 边界校验辅助函数
const clampIndex = (index: number, length: number) =>
  Math.max(0, Math.min(index, length - 1));

const MediaPreview: React.FC<MediaPreviewProps> = ({
  className,
  visible,
  mediaList,
  currentIndex = 0,
  onClose,
}) => {
  const { sparkPrefix } = getCommonConfig();
  const { configProviderProps } = useCommonConfig();
  const Style = useStyle();
  // 问题2: 添加边界校验
  const [activeIndex, setActiveIndex] = useState(() =>
    clampIndex(currentIndex, mediaList.length),
  );
  const [scale, setScale] = useState(1);
  const [baseSize, setBaseSize] = useState({ width: 960, height: 600 });
  const [isTransitioning, setIsTransitioning] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // 计算基于屏幕大小的基础尺寸
  useEffect(() => {
    const updateBaseSize = () => {
      // 这里的 0.8 是预留边距比例，可根据需要调整
      const screenWidth = 960;
      const screenHeight = 600;

      // 最小 960 * 600
      const width = Math.max(screenWidth, 960);
      const height = Math.max(screenHeight, 600);

      setBaseSize({ width, height });
    };

    updateBaseSize();
    window.addEventListener('resize', updateBaseSize);
    return () => window.removeEventListener('resize', updateBaseSize);
  }, []);

  // 问题8: 当 currentIndex 变化时更新 activeIndex，添加边界检查和重置 scale
  useEffect(() => {
    const validIndex = clampIndex(currentIndex, mediaList.length);
    setActiveIndex(validIndex);
    setScale(1);
  }, [currentIndex, mediaList.length]);

  // 当 visible 变化时重置缩放
  useEffect(() => {
    if (visible) {
      setScale(1);
    }
  }, [visible]);

  // 问题6: 提取公共过渡动画逻辑
  const transitionTo = useCallback(
    (getNextIndex: (prev: number) => number) => {
      if (isTransitioning) return;
      setIsTransitioning(true);
      setTimeout(() => {
        setActiveIndex(getNextIndex);
        setScale(1);
        setTimeout(() => setIsTransitioning(false), 50);
      }, 150);
    },
    [isTransitioning],
  );

  // 切换到上一张
  const handlePrev = useCallback(() => {
    transitionTo((prev) => (prev > 0 ? prev - 1 : mediaList.length - 1));
  }, [mediaList.length, transitionTo]);

  // 切换到下一张
  const handleNext = useCallback(() => {
    transitionTo((prev) => (prev < mediaList.length - 1 ? prev + 1 : 0));
  }, [mediaList.length, transitionTo]);

  // 放大
  const handleZoomIn = useCallback(() => {
    setScale((prev) => Math.min(prev + 0.25, 3));
  }, []);

  // 缩小
  const handleZoomOut = useCallback(() => {
    setScale((prev) => Math.max(prev - 0.25, 0.5));
  }, []);

  // 问题7: 分离全屏和重置缩放的职责
  // 进入全屏
  const handleEnterFullscreen = useCallback(() => {
    if (!containerRef.current || document.fullscreenElement) return;
    containerRef.current.requestFullscreen().catch((err) => {
      console.error(
        `Error attempting to enable full-screen mode: ${err.message} (${err.name})`,
      );
    });
  }, []);

  // 退出全屏
  const handleExitFullscreen = useCallback(() => {
    if (document.fullscreenElement) {
      document.exitFullscreen();
    }
  }, []);

  // 切换全屏
  const handleToggleFullscreen = useCallback(() => {
    if (document.fullscreenElement) {
      handleExitFullscreen();
    } else {
      handleEnterFullscreen();
    }
  }, [handleEnterFullscreen, handleExitFullscreen]);

  // 重置所有状态（缩放 + 退出全屏）
  const handleResetAll = useCallback(() => {
    setScale(1);
    handleExitFullscreen();
  }, [handleExitFullscreen]);

  // 点击缩略图（复用 transitionTo）
  const handleThumbnailClick = useCallback(
    (index: number) => {
      if (index === activeIndex) return;
      transitionTo(() => index);
    },
    [activeIndex, transitionTo],
  );

  // 键盘事件
  useEffect(() => {
    if (!visible) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'ArrowLeft':
          handlePrev();
          break;
        case 'ArrowRight':
          handleNext();
          break;
        case 'Escape':
          onClose();
          break;
        case '+':
        case '=':
          handleZoomIn();
          break;
        case '-':
          handleZoomOut();
          break;
        case 'f':
        case 'F':
          handleToggleFullscreen();
          break;
        case 'r':
        case 'R':
          handleResetAll();
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [
    visible,
    handlePrev,
    handleNext,
    onClose,
    handleZoomIn,
    handleZoomOut,
    handleToggleFullscreen,
    handleResetAll,
  ]);

  if (!visible || mediaList.length === 0) {
    return null;
  }

  const currentMedia = mediaList[activeIndex];

  return (
    <ConfigProvider {...configProviderProps}>
      <Style />
      {/* 问题5: 添加无障碍属性 */}
      <div
        ref={containerRef}
        role="dialog"
        aria-modal="true"
        aria-label="媒体预览"
        className={classNames(
          `${sparkPrefix}-media-preview-container`,
          className,
        )}
      >
        {/* 主展示区域 */}
        <div
          className={classNames(`${sparkPrefix}-media-preview-main-content`, {
            transitioning: isTransitioning,
          })}
          style={{
            width: baseSize.width,
            height: baseSize.height,
            transform: `scale(${scale})`,
          }}
        >
          {currentMedia.type === 'image' ? (
            <img
              className={`${sparkPrefix}-media-preview-main-media`}
              src={currentMedia.src}
              alt={currentMedia.alt || ''}
            />
          ) : (
            <Video src={currentMedia.src} controls />
          )}
        </div>

        {/* 左箭头 */}
        <IconButton
          className={`${sparkPrefix}-media-preview-nav-left`}
          onClick={handlePrev}
          aria-label="上一张"
          bordered={false}
          icon={<SparkLeftLine className={`${sparkPrefix}-media-preview-nav-icon`} />}
        />

        {/* 右箭头 */}
        <IconButton
          className={`${sparkPrefix}-media-preview-nav-right`}
          onClick={handleNext}
          aria-label="下一张"
          bordered={false}
          icon={<SparkRightLine className={`${sparkPrefix}-media-preview-nav-icon`} />}
        />

        {/* 顶部工具栏 */}
        <div className={`${sparkPrefix}-media-preview-toolbar`} role="toolbar">
          {/* 缩放控制组 */}
          <div className={`${sparkPrefix}-media-preview-zoom-controls`}>
            <IconButton
              size="large"
              aria-label="放大"
              className={`${sparkPrefix}-media-preview-tool-button`}
              onClick={handleZoomIn}
              bordered={false}
              icon={
                <SparkAmplifyLine
                  className={`${sparkPrefix}-media-preview-tool-icon`}
                />
              }
            />
            <IconButton
              size="large"
              aria-label="缩小"
              className={`${sparkPrefix}-media-preview-tool-button`}
              onClick={handleZoomOut}
              bordered={false}
              icon={
                <SparkReduceLine
                  className={`${sparkPrefix}-media-preview-tool-icon`}
                />
              }
            />
            <IconButton
              size="large"
              aria-label="重置"
              className={`${sparkPrefix}-media-preview-tool-button`}
              onClick={handleResetAll}
              bordered={false}
              icon={
                <SparkExitFullscreenLine
                  className={`${sparkPrefix}-media-preview-tool-icon`}
                />
              }
            />
          </div>
          {/* 关闭按钮 */}
          <div className={`${sparkPrefix}-media-preview-zoom-controls`}>

            <IconButton
              className={`${sparkPrefix}-media-preview-close-button`}
              onClick={onClose}
              aria-label="关闭预览"
              bordered={false}
              size="large"
              icon={
                <SparkFalseLine
                  className={`${sparkPrefix}-media-preview-tool-icon`}
                />
              }
            />
          </div>

        </div>

        {/* 底部缩略图轮播 */}
        <div className={`${sparkPrefix}-media-preview-thumbnail-carousel`}>
          <div className={`${sparkPrefix}-media-preview-thumbnail-wrapper`}>
            <IconButton
              className={`${sparkPrefix}-media-preview-thumbnail-nav-icon`}
              onClick={handlePrev}
              aria-label="上一张"
              bordered={false}
              icon={<SparkLeftLine />}
            />
            <div className={`${sparkPrefix}-media-preview-thumbnail-list`}>
              {mediaList.map((item, index) => (
                <div
                  key={index}
                  className={classNames(
                    `${sparkPrefix}-media-preview-thumbnail-item`,
                    {
                      active: index === activeIndex,
                    },
                  )}
                  onClick={() => handleThumbnailClick(index)}
                >
                  {item.type === 'image' ? (
                    <img src={item.src} alt={item.alt || `媒体 ${index + 1}`} />
                  ) : (
                    // 问题4: 添加 preload 和 muted 优化视频缩略图
                    <video src={item.src} preload="metadata" muted />
                  )}
                </div>
              ))}
            </div>
            <IconButton
              className={`${sparkPrefix}-media-preview-thumbnail-nav-icon`}
              onClick={handleNext}
              aria-label="下一张"
              bordered={false}
              icon={<SparkRightLine />}
            />
          </div>
        </div>
      </div>
    </ConfigProvider>
  );
};

export default MediaPreview;
