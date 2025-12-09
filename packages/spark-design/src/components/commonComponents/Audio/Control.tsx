import { getCommonConfig } from '@/config';
import { IconButton, Progress } from '@agentscope-ai/design';
import {
  SparkEnlargeLine,
  SparkMuteLine,
  SparkPauseFill,
  SparkPlayFill,
  SparkVolumeLine,
} from '@agentscope-ai/icons';
import React, { useMemo } from 'react';
import { useStyle } from './Control.style';

interface MediaPlayerControllerProps {
  /**
   * @description 是否正在播放
   */
  isPlaying: boolean;
  /**
   * @description 类名
   */
  className?: string;
  /**
   * @description 当前时间，单位为秒
   */
  currentTime?: number; // 当前时间，单位为秒
  /**
   * @description 总时间，单位为秒
   */
  duration?: number; // 总时间，单位为秒
  /**
   * @description 是否启用音量控制
   */
  enableVolume?: boolean;
  /**
   * @description 是否启用全屏控制
   */
  enableFullscreen?: boolean;
  /**
   * @description 是否静音
   */
  muted?: boolean;
  /**
   * @description 静音回调
   */
  onMute?: () => void;
  /**
   * @description 播放/暂停回调
   */
  onPlayPause?: () => void; // 播放/暂停回调
  /**
   * @description 全屏回调
   */
  onFullscreen?: () => void; // 全屏回调
  /**
   * @description 点击进度条回调，参数为目标时间
   */
  onProgressClick?: (time: number) => void; // 点击进度条回调，参数为目标时间
}

/**
 * 将秒数转换为 mm:ss 格式
 * @param seconds 秒数
 * @returns mm:ss 格式字符串
 */
const formatTime = (seconds: number): string => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60);
  return `${minutes.toString().padStart(2, '0')}:${remainingSeconds
    .toString()
    .padStart(2, '0')}`;
};

/**
 * 视频播放器控制器组件
 * 包含播放/暂停、音量控制、进度条、时间显示和全屏按钮
 */
const MediaPlayerController: React.FC<MediaPlayerControllerProps> = (props) => {
  const {
    className,
    isPlaying,
    onPlayPause,
    onFullscreen,
    onProgressClick,
    enableVolume = false,
    enableFullscreen,
    muted = true,
    onMute,
  } = props;
  const Style = useStyle();
  const commonConfig = getCommonConfig();
  const { sparkPrefix } = commonConfig;

  const currentTime = useMemo(() => {
    return formatTime(props.currentTime || 0);
  }, [props.currentTime]);

  const duration = useMemo(() => {
    return formatTime(props.duration || 0);
  }, [props.duration]);

  const progress = useMemo(() => {
    return Math.min(
      ((props.currentTime || 0) / (props.duration || 0.01)) * 100,
      100,
    );
  }, [props.currentTime, props.duration]);

  /**
   * 处理进度条点击事件
   * @param event 鼠标点击事件
   */
  const handleProgressClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!onProgressClick || !props.duration) return;

    const rect = event.currentTarget.getBoundingClientRect();
    const clickX = event.clientX - rect.left;
    const progressWidth = rect.width;
    const clickPercent = clickX / progressWidth;
    const targetTime = clickPercent * props.duration;

    // 确保时间在有效范围内
    const clampedTime = Math.max(0, Math.min(targetTime, props.duration));
    onProgressClick(clampedTime);
  };

  return (
    <>
      <Style />
      <div
        className={`${sparkPrefix}-media-player-controller ${className || ''}`}
      >
        <IconButton
          bordered={false}
          size="small"
          shape="default"
          disabled={false}
          icon={isPlaying ? <SparkPauseFill /> : <SparkPlayFill />}
          onClick={onPlayPause}
        />

        <IconButton
          bordered={false}
          size="small"
          shape="default"
          disabled={!enableVolume}
          icon={enableVolume && muted ? <SparkMuteLine /> : <SparkVolumeLine />}
          onClick={onMute}
        />

        <span className={`${sparkPrefix}-media-time-text`}>{currentTime}</span>

        <div
          className={`${sparkPrefix}-media-progress-container`}
          onClick={handleProgressClick}
        >
          <Progress
            className={`${sparkPrefix}-media-progress-bar`}
            percent={progress}
            showInfo={false}
          />
        </div>

        <span className={`${sparkPrefix}-media-time-text`}>{duration}</span>
        {
          enableFullscreen && (
            <IconButton
              bordered={false}
              size="small"
              shape="default"
              disabled={false}
              icon={<SparkEnlargeLine />}
              onClick={onFullscreen}
            />
          )
        }
      </div>
    </>
  );
};

export default MediaPlayerController;
