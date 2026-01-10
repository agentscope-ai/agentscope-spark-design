import { IVideo } from "./types";
import { useProviderContext } from "..";
import { useRef, useState, useCallback } from "react";
import { SparkPlayFill } from "@agentscope-ai/icons";

export default function Video(props: IVideo) {
  const prefixCls = useProviderContext().getPrefixCls('assets-preview-video');
  const { width, height, poster, src, ...rest } = props;
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);

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
        onEnded={handleEnded}
      />
      {!isPlaying && (
        <div className={`${prefixCls}-overlay`} onClick={handlePlayPause}>
          <div className={`${prefixCls}-play-btn`}>
            <SparkPlayFill />
          </div>
          <div className={`${prefixCls}-duration`}>
            {formatTime(duration)}
          </div>
        </div>
      )}
      {isPlaying && (
        <div className={`${prefixCls}-playing-overlay`} onClick={handlePlayPause} />
      )}
    </div>
  );
}