import React, { forwardRef, useEffect, useState, useRef } from 'react';
import classNames from 'classnames';
import MediaPlayerController from './Control';
import { useControllableValue } from 'ahooks';
import { getCommonConfig } from '@/config';
import { useStyle } from './index.style';

type NativeAudioProps = React.DetailedHTMLProps<
  React.AudioHTMLAttributes<HTMLAudioElement>,
  HTMLAudioElement
>;

export interface AudioProps extends NativeAudioProps {
  /**
   * @description audio内部设置了按钮样式，如果有一些操作按钮想继承这个样式可以在这里传入
   */
  children?: React.ReactNode;
}

/**
 * 音频播放器组件
 * 包含播放/暂停、音量控制、进度条和时间显示
 */
const Audio = forwardRef<HTMLAudioElement, AudioProps>((props, ref) => {
  const { controls, children, className, style, ...audioProps } = props;
  const commonConfig = getCommonConfig();
  const { sparkPrefix } = commonConfig;
  const Style = useStyle();
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [muted, setMuted] = useControllableValue<boolean>(props, {
    valuePropName: 'muted',
    trigger: 'onMutedChange',
    defaultValue: false,
  });
  const audioRef = useRef<HTMLAudioElement>(null);

  // 合并refs
  const combinedRef = (element: HTMLAudioElement) => {
    audioRef.current = element;
    if (ref) {
      if (typeof ref === 'function') {
        ref(element);
      } else {
        ref.current = element;
      }
    }
  };

  // 监听isPlaying状态来控制定时器
  useEffect(() => {
    let clock: ReturnType<typeof setInterval>;
    if (isPlaying) {
      // 启动定时器
      clock = setInterval(() => {
        if (audioRef.current) {
          setCurrentTime(audioRef.current.currentTime);
        }
      }, 16); // 每16ms更新一次，提供流畅的时间显示
    }

    // 清理函数
    return () => {
      if (clock) {
        clearInterval(clock);
      }
    };
  }, [isPlaying]);

  // 音频加载完成处理
  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  // 播放/暂停切换
  const handlePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  // 处理播放事件
  const handlePlay = () => {
    setIsPlaying(true);
  };

  // 处理暂停事件
  const handlePause = () => {
    setIsPlaying(false);
  };

  // 处理播放结束事件
  const handleEnded = () => {
    setIsPlaying(false);
    setCurrentTime(audioRef.current?.duration || 0);
  };

  // 处理进度条点击事件
  const handleProgressClick = (time: number) => {
    if (audioRef.current) {
      audioRef.current.currentTime = time;
      setCurrentTime(time);
    }
  };

  return (
    <>
      <Style />
      <div
        className={classNames(`${sparkPrefix}-audio-container`, className)}
        style={style}
      >
        <audio
          ref={combinedRef}
          {...audioProps}
          muted={muted}
          className={`${sparkPrefix}-audio-element`}
          onLoadedMetadata={handleLoadedMetadata}
          onPlay={handlePlay}
          onPause={handlePause}
          onEnded={handleEnded}
        />
        {controls && (
          <MediaPlayerController
            className={`${sparkPrefix}-audio-controller-wrapper`}
            isPlaying={isPlaying}
            currentTime={currentTime}
            duration={duration}
            enableVolume={true}
            enableFullscreen={false}
            muted={muted}
            onMute={() => setMuted(!muted)}
            onPlayPause={handlePlayPause}
            onProgressClick={handleProgressClick}
          />
        )}
        {children}
      </div>
    </>
  );
});

export default Audio;

