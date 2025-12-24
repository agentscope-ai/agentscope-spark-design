import { useStore } from '@/flow/context';
import { useReactFlow, useViewport } from '@xyflow/react';
import { useCallback, useMemo } from 'react';

export const MIN_ZOOM = 0.1;
export const MAX_ZOOM = 2;

export const useFlowViewPort = () => {
  const reactFlow = useReactFlow();

  const handleSetScale = useCallback(
    (scale: number) => {
      const { x, y } = reactFlow.getViewport();
      reactFlow.setViewport({ zoom: scale, x, y });
    },
    [reactFlow],
  );

  const minMaxZoom = useStore((state) => state.minMaxZoom);
  const handleScale = useCallback(
    (options: 1 | -1) => {
      const { zoom } = reactFlow.getViewport();
      const newZoom = parseFloat(zoom.toFixed(1)) + options * 0.2;
      const [minZoom, maxZoom] = minMaxZoom;
      handleSetScale(Math.max(minZoom, Math.min(newZoom, maxZoom)));
    },
    [reactFlow, handleSetScale],
  );

  const { zoom } = useViewport();
  const scaleRate = useMemo(() => {
    return parseInt(`${zoom * 100}`);
  }, [zoom]);

  return {
    handleScale,
    scaleRate,
    handleSetScale,
  };
};
