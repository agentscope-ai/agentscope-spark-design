import { IAudio } from "./types";
import { useProviderContext } from "..";
import { SparkMuteLine, SparkPauseFill, SparkPlayFill, SparkVolumeLine } from "@agentscope-ai/icons";
import { useCallback, useRef, useState, useEffect } from "react";
import { IconButton } from "@agentscope-ai/design";

export default function Audio(props: IAudio) {
  const prefixCls = useProviderContext().getPrefixCls("assets-preview-audio");
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const formatTime = useCallback((time: number) => {
    if (isNaN(time)) return "00:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  }, []);

  const togglePlay = useCallback(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  }, [isPlaying]);

  const toggleMuted = useCallback(() => {
    setIsMuted(!isMuted);
    if (audioRef.current) {
      audioRef.current.muted = isMuted;
    }
  }, [isMuted]);

  const handleProgressClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (audioRef.current && duration) {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const percentage = x / rect.width;
        const newTime = percentage * duration;
        audioRef.current.currentTime = newTime;
        setCurrentTime(newTime);
      }
    },
    [duration]
  );

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleTimeUpdate = () => setCurrentTime(audio.currentTime);
    const handleLoadedMetadata = () => setDuration(audio.duration);
    const handleEnded = () => setIsPlaying(false);

    audio.addEventListener("timeupdate", handleTimeUpdate);
    audio.addEventListener("loadedmetadata", handleLoadedMetadata);
    audio.addEventListener("ended", handleEnded);

    return () => {
      audio.removeEventListener("timeupdate", handleTimeUpdate);
      audio.removeEventListener("loadedmetadata", handleLoadedMetadata);
      audio.removeEventListener("ended", handleEnded);
    };
  }, []);

  const progress = duration ? (currentTime / duration) * 100 : 0;

  return (
    <>
      <audio ref={audioRef} src={props.src} muted={isMuted} />
      <div className={prefixCls}>
        <IconButton size="small" type="text" onClick={togglePlay} icon={isPlaying ? <SparkPauseFill /> : <SparkPlayFill />} />
        <IconButton size="small" type="text" onClick={toggleMuted} icon={isMuted ? <SparkMuteLine /> : <SparkVolumeLine />} />
        <div className={`${prefixCls}-time`}>{formatTime(currentTime)}</div>
        <div
          className={`${prefixCls}-progress`}
          onClick={handleProgressClick}
        >
          <div
            className={`${prefixCls}-progress-bar`}
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className={`${prefixCls}-time`}>{formatTime(duration)}</div>
      </div>
    </>
  );
}