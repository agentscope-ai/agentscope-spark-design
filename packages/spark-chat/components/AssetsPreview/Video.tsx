import { IVideo } from "./types";
import { useProviderContext } from "..";
import { useRef, useState, useCallback } from "react";
import { SparkEnlargeLine, SparkPauseFill, SparkPlayFill } from "@agentscope-ai/icons";
import cls from "classnames";
import { IconButton } from "@agentscope-ai/design";

export default function Video(props: IVideo) {
  const prefixCls = useProviderContext().getPrefixCls('assets-preview-video');
  const { width, height, poster, src, ...rest } = props;
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  const formatTime = useCallback((seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  }, []);

  const handlePlayPause = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  }, []);

  const handleLoadedMetadata = useCallback(() => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration);
    }
  }, []);

  const handleEnded = useCallback(() => {
    setIsPlaying(false);
    setCurrentTime(0);
  }, []);

  const handleTimeUpdate = useCallback(() => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
    }
  }, []);

  const handleEnlarge = useCallback((event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
    const video = videoRef.current;
    if (!video) return;

    if (video.requestFullscreen) {
      video.requestFullscreen();
    } else if ((video as any).webkitRequestFullscreen) {
      // Safari 兼容
      (video as any).webkitRequestFullscreen();
    } else if ((video as any).msRequestFullscreen) {
      // IE11 兼容
      (video as any).msRequestFullscreen();
    }
  }, []);

  return (
    <div
      className={prefixCls}
      style={{
        aspectRatio: `${width}/${height}`,
      }}
    >
      <video
        {...rest}
        ref={videoRef}
        src={src}
        poster={poster}
        preload="metadata"
        onLoadedMetadata={handleLoadedMetadata}
        onTimeUpdate={handleTimeUpdate}
        onEnded={handleEnded}
      />
      <div className={cls(`${prefixCls}-overlay`, {
        [`${prefixCls}-overlay-playing`]: 1,
        // [`${prefixCls}-overlay-paused`]: 1,
      })} onClick={isPlaying ? handlePlayPause : handlePlayPause}>
        <div className={`${prefixCls}-play-btn`}>
          {
            isPlaying ? <SparkPauseFill /> : <SparkPlayFill />
          }
        </div>


        <div className={`${prefixCls}-enlarge`} onClick={handleEnlarge}>
          <IconButton bordered={false} size="small" icon={<SparkEnlargeLine />} />
        </div>
      </div>
      <div className={`${prefixCls}-duration`}>
        {formatTime(duration - currentTime)}
      </div>
    </div>
  );
}