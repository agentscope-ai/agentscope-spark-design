
import { createStyles } from "antd-style";
import React, { useState, useEffect, useRef } from "react";

interface MousePosition {
  x: number;
  y: number;
}

interface EyePosition {
  x: number;
  y: number;
}

const EyeFollower: React.FC = () => {
  const [mousePosition, setMousePosition] = useState<MousePosition>({
    x: 0,
    y: 0,
  });
  const [isBlinking, setIsBlinking] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { styles, cx } = useStyle();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setIsBlinking(true);
      setTimeout(() => setIsBlinking(false), 150);
    }, 5000);

    return () => clearInterval(blinkInterval);
  }, []);

  const calculateEyePosition = (): EyePosition => {
    const containerCenterX = 32;
    const containerCenterY = 32;

    const deltaX = mousePosition.x - containerCenterX;
    const deltaY = mousePosition.y - containerCenterY;

    const maxMoveX = 6;
    const maxMoveY = 6;

    const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
    const maxDistance = 50;

    if (distance === 0) return { x: 0, y: 0 };

    const moveRatio = Math.min(distance / maxDistance, 1);

    const moveX = (deltaX / distance) * maxMoveX * moveRatio;
    const moveY = (deltaY / distance) * maxMoveY * moveRatio;

    return {
      x: Math.max(-maxMoveX, Math.min(maxMoveX, moveX)),
      y: Math.max(-maxMoveY, Math.min(maxMoveY, moveY)),
    };
  };

  const calculateEyeScale = (isLeftEye: boolean) => {
    const containerCenterX = 32;
    const deltaX = mousePosition.x - containerCenterX;
    const threshold = 400;

    if (Math.abs(deltaX) < threshold) {
      return 1;
    }

    const extremeDelta = Math.abs(deltaX) - threshold;
    const maxExtremeDelta = 32 - threshold;
    const scaleRatio = Math.min(extremeDelta / maxExtremeDelta, 1);

    if (deltaX > threshold) {
      if (isLeftEye) {
        return 1 - scaleRatio * 0.5;
      } else {
        return 1;
      }
    } else if (deltaX < -threshold) {
      if (isLeftEye) {
        return 1;
      } else {
        return 1 - scaleRatio * 0.5;
      }
    }

    return 1;
  };

  const leftEyePosition = calculateEyePosition();
  const rightEyePosition = calculateEyePosition();
  const leftEyeScale = calculateEyeScale(true);
  const rightEyeScale = calculateEyeScale(false);

  return (
    <div ref={containerRef} className={styles.container}>
      <div
        className={cx(styles.eye, styles.leftEye, isBlinking ? styles.blinkingEye : '')}
        style={{
          transform: `translate(${leftEyePosition.x}px, ${leftEyePosition.y
            }px) ${isBlinking ? "scaleY(0.1)" : `scaleY(${leftEyeScale})`}`,
        }}
      />
      <div
        className={cx(styles.eye, styles.rightEye, isBlinking ? styles.blinkingEye : '')}
        style={{
          transform: `translate(${rightEyePosition.x}px, ${rightEyePosition.y
            }px) ${isBlinking ? "scaleY(0.1)" : `scaleY(${rightEyeScale})`}`,
        }}
      />
    </div>
  );
};

export default EyeFollower;

const useStyle = createStyles(({ css, token }) => ({
  container: {
    width: 64,
    height: 64,
    backgroundColor: "black",
    borderRadius: 12,
    position: 'relative',
    cursor: 'pointer',
    overflow: 'hidden',
    boxShadow:
      "15px 0px 30px -10px rgba(131, 88, 246, 0.4), 0px 0px 30px -10px rgba(255, 142, 168, 0.4), -15px 0px 30px -10px rgba(225, 163, 37, 0.4)",
  },
  eye: {
    width: 6,
    height: 12,
    backgroundColor: 'white',
    borderRadius: 99,
    position: 'absolute',
    top: 16,
    transition: 'transform 0.1s ease-out',
  },
  leftEye: {
    left: 22,
  },
  rightEye: {
    left: 36,
  },
  blinkingEye: {
    transition: "transform 0.05s ease-out",
  },
}))