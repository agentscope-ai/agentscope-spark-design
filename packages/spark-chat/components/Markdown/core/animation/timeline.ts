import type { MarkdownAnimationConfig } from '../../types';

const finite = (value: number | undefined, fallback: number, max: number) =>
  Number.isFinite(value) ? Math.min(max, Math.max(0, value!)) : fallback;

export function resolveAnimation(config?: MarkdownAnimationConfig) {
  const characterInterval = finite(config?.characterInterval, 5, 100);
  return {
    characterInterval,
    fadeDuration: 160,
    easing: 'ease-out',
    // Slower speeds need more room to reveal a normal chunk, while retaining
    // a hard backlog limit for bursts and restored/background content.
    maxDelay: Math.min(2000, Math.max(240, characterInterval * 48)),
  };
}

// One timeline per Markdown, so new paragraphs do not restart at delay zero.
// Cap both pending time and live spans. Large bursts coalesce into small groups.
export function createAnimationTimeline() {
  let tail = 0;
  let activeUnits = 0;
  const Segmenter = (Intl as any).Segmenter;
  const segmenter = Segmenter
    ? new Segmenter(undefined, { granularity: 'grapheme' })
    : null;
  return {
    reserve(
      text: string,
      now: number,
      config: ReturnType<typeof resolveAnimation>,
    ) {
      if (!text || activeUnits >= 384) return undefined;
      const glyphs: string[] = segmenter
        ? Array.from(segmenter.segment(text), (item: any) => item.segment)
        : Array.from(text);
      const limit = Math.max(1, Math.min(192, 384 - activeUnits));
      const size = Math.max(1, Math.ceil(glyphs.length / limit));
      const units: string[] = [];
      for (let i = 0; i < glyphs.length; i += size)
        units.push(glyphs.slice(i, i + size).join(''));
      const start = Math.min(Math.max(now, tail), now + config.maxDelay);
      const step =
        units.length > 1
          ? Math.min(
              config.characterInterval,
              (now + config.maxDelay - start) / (units.length - 1),
            )
          : 0;
      const delays = units.map((_, index) => start - now + index * step);
      tail = start + units.length * step;
      activeUnits += units.length;
      let released = false;
      return {
        units,
        delays,
        duration: (delays.at(-1) || 0) + config.fadeDuration,
        release() {
          if (released) return;
          released = true;
          activeUnits -= units.length;
          if (!activeUnits) tail = 0;
        },
      };
    },
  };
}
