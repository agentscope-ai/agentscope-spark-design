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

export type AudioProps = NativeAudioProps

/**
 * 音频播放器组件
 * 包含播放/暂停、音量控制、进度条和时间显示
 */
const Audio = forwardRef<HTMLAudioElement, AudioProps>((props, ref) => {
  const { controls, className, style, ...audioProps } = props;
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
  const isFirstSrcRef = useRef<boolean>(true);

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

  // 监听src变化，重新加载音频
  useEffect(() => {
    // 跳过首次设置
    if (isFirstSrcRef.current) {
      isFirstSrcRef.current = false;
      return;
    }
    
    if (audioRef.current && audioProps.src) {
      audioRef.current.load();
    }
  }, [audioProps.src]);

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
  const handleLoadedMetadata = (e: React.SyntheticEvent<HTMLAudioElement>) => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
    audioProps.onLoadedMetadata?.(e);
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
  const handlePlay = (e: React.SyntheticEvent<HTMLAudioElement>) => {
    setIsPlaying(true);
    audioProps.onPlay?.(e);
  };

  // 处理暂停事件
  const handlePause = (e: React.SyntheticEvent<HTMLAudioElement>) => {
    setIsPlaying(false);
    audioProps.onPause?.(e);
  };

  // 处理播放结束事件
  const handleEnded = (e: React.SyntheticEvent<HTMLAudioElement>) => {
    setIsPlaying(false);
    setCurrentTime(audioRef.current?.duration || 0);
    audioProps.onEnded?.(e);
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
      </div>
    </>
  );
});

export default Audio;

