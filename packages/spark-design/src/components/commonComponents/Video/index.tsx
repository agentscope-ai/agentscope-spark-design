import React, { forwardRef, useEffect, useState, useRef, useMemo } from 'react';
import classNames from 'classnames';
import MediaPlayerController from '../Audio/Control';
import { useControllableValue } from 'ahooks';
import { getCommonConfig } from '@/config';
import { useStyle } from './index.style';

type NativeVideoProps = React.DetailedHTMLProps<
  React.VideoHTMLAttributes<HTMLVideoElement>,
  HTMLVideoElement
>;

export interface VideoProps extends NativeVideoProps {
  /**
   * @description 鼠标进入时是否自动播放
   * @descriptionEn mouse enter auto play
   * @default false
   */
  mouseEnterAutoPlay?: boolean;
  /**
   * @description video内部设置了按钮在暗色背景下的样式，如果有一些操作按钮想继承这个样式可以在这里传入
   * @descriptionEn video internal sets the style of the buttons in the dark background, if there are some operation buttons that want to inherit this style can be passed in here
   */
  children?: React.ReactNode;
}

const Video = forwardRef<HTMLVideoElement, VideoProps>((props, ref) => {
  const { controls, mouseEnterAutoPlay = false, children, className, style, ...videoProps } = props;
  const commonConfig = getCommonConfig();
  const { sparkPrefix } = commonConfig;
  const Style = useStyle();
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [muted, setMuted] = useControllableValue<boolean>(props, {
    valuePropName: 'muted',
    trigger: 'onMutedChange',
    defaultValue: true,
  });
  const [enableVolume, setEnableVolume] = useState<boolean>(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const lockMouseEnterAutoPlayRef = useRef<boolean>(false);
  const isFirstSrcRef = useRef<boolean>(true);

  // 合并refs
  const combinedRef = (element: HTMLVideoElement) => {
    videoRef.current = element;
    if (ref) {
      if (typeof ref === 'function') {
        ref(element);
      } else {
        ref.current = element;
      }
    }
  };

  // 监听src变化，重新加载视频
  useEffect(() => {
    // 跳过首次设置
    if (isFirstSrcRef.current) {
      isFirstSrcRef.current = false;
      return;
    }
    if (videoRef.current && videoProps.src) {
      videoRef.current.load();
    }
  }, [videoProps.src]);

  // 监听isPlaying状态来控制定时器
  useEffect(() => {
    let clock;
    if (isPlaying) {
      // 启动定时器
      clock = setInterval(() => {
        if (videoRef.current) {
          setCurrentTime(videoRef.current.currentTime);
        }
      }, 16); // 每100ms更新一次，提供流畅的时间显示
    }

    // 清理函数
    return () => {
      if (clock) {
        clearInterval(clock);
      }
    };
  }, [isPlaying]);

  // 检测视频是否有音频通道
  const handleCanPlayThrough = (e: React.SyntheticEvent<HTMLVideoElement>) => {
    if (videoRef.current) {
      // 方法1: 检查mozHasAudio属性 (Firefox)
      if ('mozHasAudio' in videoRef.current) {
        // @ts-ignore
        setEnableVolume(videoRef.current.mozHasAudio);
      }
      // 方法2: 检查webkitAudioDecodedByteCount属性 (WebKit)
      else if ('webkitAudioDecodedByteCount' in videoRef.current) {
        // @ts-ignore
        setEnableVolume(videoRef.current.webkitAudioDecodedByteCount > 0);
      }
      else {
        setEnableVolume(false);
      }
    }
    videoProps.onCanPlayThrough?.(e);
  };

  // 视频加载完成处理
  const handleLoadedMetadata = (e: React.SyntheticEvent<HTMLVideoElement>) => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration);
    }
    videoProps.onLoadedMetadata?.(e);
  };

  // 播放/暂停切换
  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  // 处理播放事件
  const handlePlay = (e: React.SyntheticEvent<HTMLVideoElement>) => {
    setIsPlaying(true);
    videoProps.onPlay?.(e);
  };

  // 处理暂停事件
  const handlePause = (e: React.SyntheticEvent<HTMLVideoElement>) => {
    setIsPlaying(false);
    videoProps.onPause?.(e);
  };

  // 全屏切换
  const handleFullscreen = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      }
    }
  };

  // 处理播放结束事件
  const handleEnded = (e: React.SyntheticEvent<HTMLVideoElement>) => {
    setIsPlaying(false);
    setCurrentTime(videoRef.current?.duration);
    videoProps.onEnded?.(e);
  };

  // 处理鼠标进入事件
  const handleMouseEnter = () => {
    if (mouseEnterAutoPlay && !lockMouseEnterAutoPlayRef.current) {
      if (!isPlaying) {
        videoRef.current.play();
        lockMouseEnterAutoPlayRef.current = true;
      }
    }
  };

  const handleMouseLeave = () => {
    if (mouseEnterAutoPlay && lockMouseEnterAutoPlayRef.current) {
      lockMouseEnterAutoPlayRef.current = false;
    }
  };

  // 处理进度条点击事件
  const handleProgressClick = (time: number) => {
    if (videoRef.current) {
      videoRef.current.currentTime = time;
      setCurrentTime(time);
    }
  };

  return (
    <>
      <Style />
      <div className={classNames(`${sparkPrefix}-video-container`, className)} style={style}>
        <div
          className={`${sparkPrefix}-video-content`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {
            props.poster && <img src={props.poster} alt="poster" className={`${sparkPrefix}-video-poster`} />
          }
          <video
            ref={combinedRef}
            {...videoProps}
            controls={false}
            muted={muted}
            className={`${sparkPrefix}-video-element`}
            crossOrigin="anonymous"
            onLoadedMetadata={handleLoadedMetadata}
            onCanPlayThrough={handleCanPlayThrough}
            onPlay={handlePlay}
            onPause={handlePause}
            onEnded={handleEnded}
          />
          {controls && (
            <MediaPlayerController
              className={`${sparkPrefix}-video-controller-wrapper`}
              isPlaying={isPlaying}
              currentTime={currentTime}
              duration={duration}
              enableVolume={enableVolume}
              muted={muted}
              enableFullscreen={true}
              onMute={() => setMuted(!muted)}
              onPlayPause={handlePlayPause}
              onFullscreen={handleFullscreen}
              onProgressClick={handleProgressClick}
            />
          )}
          {children}
        </div>
      </div>
    </>
  );
});

export default Video;
