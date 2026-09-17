import { attributesToProps } from 'html-react-parser';
import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import { createAnimationTimeline, resolveAnimation } from './timeline';

export const AnimationContext = createContext({
  active: false,
  config: resolveAnimation(),
  timeline: null as ReturnType<typeof createAnimationTimeline> | null,
});

type Chunk = {
  id: number;
  text: string;
  plan?: ReturnType<ReturnType<typeof createAnimationTimeline>['reserve']>;
  config?: ReturnType<typeof resolveAnimation>;
};

const AnimatedText = React.memo(function AnimatedText({
  text,
}: {
  text: string;
}) {
  const { active, config, timeline } = useContext(AnimationContext);
  const [chunks, setChunks] = useState<Chunk[]>(() =>
    active ? [] : [{ id: -1, text }],
  );
  const previous = useRef(active ? '' : text);
  const resetOnSetup = useRef(false);
  const nextId = useRef(0);
  const pending = useRef(
    new Map<
      number,
      { timer: ReturnType<typeof setTimeout>; release: () => void }
    >(),
  );

  useEffect(() => {
    const clear = () => {
      pending.current.forEach(({ timer, release }) => {
        clearTimeout(timer);
        release();
      });
      pending.current.clear();
    };
    if (!active) {
      clear();
      previous.current = text;
      setChunks([{ id: nextId.current++, text }]);
      return;
    }
    if (previous.current === text && !resetOnSetup.current) return;
    const append = !resetOnSetup.current && text.startsWith(previous.current);
    resetOnSetup.current = false;
    if (!append) clear();
    const suffix = append ? text.slice(previous.current.length) : text;
    previous.current = text;
    const id = nextId.current++;
    const plan = timeline?.reserve(suffix, performance.now(), config);
    setChunks((old) => [
      ...(append ? old : []),
      { id, text: suffix, plan, config },
    ]);
    if (plan) {
      // One cleanup per incoming chunk, never a React update per character/frame.
      const timer = setTimeout(() => {
        plan.release();
        pending.current.delete(id);
        setChunks((old) => {
          const settled = old.map((chunk) =>
            chunk.id === id ? { id, text: chunk.text } : chunk,
          );
          const firstPending = settled.findIndex((chunk) => chunk.plan);
          const count = firstPending < 0 ? settled.length : firstPending;
          return count > 1
            ? [
                {
                  id: settled[0].id,
                  text: settled
                    .slice(0, count)
                    .map((chunk) => chunk.text)
                    .join(''),
                },
                ...settled.slice(count),
              ]
            : settled;
        });
      }, plan.duration + 32);
      pending.current.set(id, { timer, release: plan.release });
    }
  }, [text, active, config, timeline]);

  useEffect(
    () => () => {
      pending.current.forEach(({ timer, release }) => {
        clearTimeout(timer);
        release();
      });
      pending.current.clear();
      resetOnSetup.current = true;
    },
    [],
  );

  if (!active) return <>{text}</>;
  return (
    <>
      {chunks.map((chunk) => (
        <React.Fragment key={chunk.id}>
          {chunk.plan
            ? chunk.plan.units.map((unit, index) => (
                <span
                  key={index}
                  className="spark-stream-character"
                  style={{
                    animation: `spark-stream-reveal ${
                      chunk.config!.fadeDuration
                    }ms ${chunk.config!.easing} ${
                      chunk.plan!.delays[index]
                    }ms both`,
                  }}
                >
                  {unit}
                </span>
              ))
            : chunk.text}
        </React.Fragment>
      ))}
    </>
  );
});

export default AnimatedText;

// Transform React text children, without touching the renderer's DOM or its
// sanitization. Code, math, media and user-provided components keep their renderer.
function animateChildren(children: React.ReactNode): React.ReactNode {
  return React.Children.map(children, (child) => {
    if (typeof child === 'string')
      return /\S/.test(child) ? <AnimatedText text={child} /> : child;
    if (!React.isValidElement<{ children?: React.ReactNode }>(child))
      return child;
    const props = child.props as {
      children?: React.ReactNode;
      className?: string;
    };
    if (
      typeof child.type !== 'string' ||
      ['code', 'pre', 'svg', 'math'].includes(child.type) ||
      /katex/.test(props.className || '')
    )
      return child;
    return React.cloneElement(
      child,
      undefined,
      animateChildren(child.props.children),
    );
  });
}

export const animatedComponents = Object.fromEntries(
  ['p', 'li', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'td', 'th', 'dt', 'dd'].map(
    (tag) => [
      tag,
      function AnimatedBlock({ children, domNode }: any) {
        // Match the HTML renderer's native attribute conversion, including style
        // strings and boolean attributes when allowHtml is enabled.
        return React.createElement(
          tag,
          attributesToProps(domNode?.attribs || {}),
          animateChildren(children),
        );
      },
    ],
  ),
);
