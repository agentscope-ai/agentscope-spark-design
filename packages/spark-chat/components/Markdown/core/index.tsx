import XMarkdown from '@ant-design/x-markdown';
import { memo, useEffect, useMemo, useState } from 'react';
import Styles from '../styles';
import { InnerMarkdownXProps } from '../types';
import { AnimationContext, animatedComponents } from './animation/AnimatedText';
import {
  createAnimationTimeline,
  resolveAnimation,
} from './animation/timeline';
import useCursorContent from './hooks/useCursorContent';

// Global styles depend on theme context, not on each typed text frame.
const MarkdownStyles = memo(Styles);

export default memo(function InnerMarkdownX(props: InnerMarkdownXProps) {
  const {
    content: originalContent,
    cursor,
    animation,
    animationConfig,
    components,
    ...rest
  } = props;
  const config = useMemo(
    () => resolveAnimation(animationConfig),
    [animationConfig?.characterInterval],
  );
  const timeline = useMemo(() => createAnimationTimeline(), []);
  const [reducedMotion, setReducedMotion] = useState(
    () =>
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  );
  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReducedMotion(query.matches);
    query.addEventListener('change', update);
    return () => query.removeEventListener('change', update);
  }, []);
  const live = Boolean(animation && cursor && !reducedMotion);
  const [draining, setDraining] = useState(live);
  useEffect(() => {
    if (live) {
      setDraining(true);
      return;
    }
    // Keep final characters in the same tree until their animations settle.
    const timer = setTimeout(
      () => setDraining(false),
      config.maxDelay + config.fadeDuration + 64,
    );
    return () => clearTimeout(timer);
  }, [live, config.maxDelay, config.fadeDuration]);
  const active = Boolean(animation && !reducedMotion && (live || draining));
  const animationContext = useMemo(
    () => ({ active, config, timeline }),
    [active, config, timeline],
  );
  const resolvedComponents = useMemo(
    () => ({ ...animatedComponents, ...components }),
    [components],
  );
  const content = useCursorContent({
    cursor: cursor,
    content: originalContent,
    animation: animation,
  });

  const streaming = useMemo(() => {
    if (!animation) return undefined;
    return {
      hasNextChunk: animation && cursor,
      enableAnimation: false,
    };
  }, [cursor, animation]);

  const markdown = (
    <XMarkdown
      {...rest}
      components={animation ? resolvedComponents : components}
      content={content}
      streaming={
        streaming as { hasNextChunk: boolean; enableAnimation: boolean }
      }
    />
  );

  return (
    <>
      <MarkdownStyles />
      <AnimationContext.Provider value={animationContext}>
        {markdown}
      </AnimationContext.Provider>
    </>
  );
});
