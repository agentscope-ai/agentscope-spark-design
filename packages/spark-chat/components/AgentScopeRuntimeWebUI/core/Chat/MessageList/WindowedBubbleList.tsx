import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { useVirtualizer, VirtualizerOptions } from '@tanstack/react-virtual';
import Bubble from '../../../../Bubble/Bubble';
import type { BubbleDataType } from '../../../../Bubble/BubbleList';

// Must match `gap: 24px` on `.{prefixCls}-bubble-list` in Bubble/style/list.ts.
// The virtualizer needs it because measured row heights come from
// getBoundingClientRect(), which excludes the flex gap.
const LIST_GAP_PX = 24;

// Rough height of an unmeasured row. Only affects the scrollbar's feel for
// not-yet-rendered regions; every row that scrolls into view is measured for
// real and the estimate stops mattering for it.
const ESTIMATED_ROW_HEIGHT = 140;

/**
 * 消息列表的虚拟化渲染（补丁新增）。
 *
 * 作为 `Bubble.List` 的 children 传入，走它内部
 * `children ? children : paginationItems.map(...)` 这个既有分支，从而在不改
 * 动 Bubble.List 自身滚动逻辑的前提下，把"每次渲染全部消息"换成"只渲染视口
 * 附近的消息"。
 *
 * Virtualized rendering for the message list (patch addition). Passed as
 * `Bubble.List`'s children so it takes over the existing
 * `children ? children : paginationItems.map(...)` branch — the whole list
 * no longer mounts at once, which is what made each "load older" prepend
 * block the main thread for seconds.
 *
 * Design notes, because the container this renders into is unusual:
 *
 * - The scroll container is `Bubble.List`'s own `.{prefixCls}-bubble-list`
 *   div (native `overflow: auto`), NOT one this component owns. We hand it
 *   to the virtualizer via `getScrollElement` so `scrollToBottom`,
 *   `checkIsAtBottom` and the load-more sentinel — all of which read that
 *   element's raw `scrollTop` — keep working untouched.
 * - That container is `flex-direction: column-reverse` for `order="desc"`:
 *   items[0] (newest) paints at the BOTTOM, and Chrome reports a NEGATIVE
 *   `scrollTop` that runs 0 → -(scrollHeight - clientHeight) as you scroll
 *   back toward older messages. (BubbleList's own `checkShowScrollToBottom`
 *   relies on the same thing: `scrollTop <= -10`.) The virtualizer assumes a
 *   0→positive axis, so `observeElementOffset`/`scrollToFn` below translate
 *   between the two — without that translation it clamps every negative
 *   offset to 0, believes it is permanently parked at items[0], and leaves
 *   the viewport blank once you scroll away from the newest message.
 * - Rows are therefore rendered as ordinary flex children (NOT absolutely
 *   positioned the way the virtualizer's docs show), with one spacer div on
 *   each side standing in for the un-rendered ranges. Absolute positioning
 *   would take the rows out of the column-reverse flow and break the layout.
 */
export default function WindowedBubbleList(props: {
  items?: BubbleDataType[];
}) {
  const items = props.items || [];
  const count = items.length;

  // The probe is the first real DOM node this component renders, and
  // BubbleListContent renders us straight into the scroll container with no
  // wrapper in between — so its parentElement IS that container. Cheaper and
  // less brittle than a global querySelector for the prefixed class name.
  const probeRef = useRef<HTMLDivElement | null>(null);
  const [scrollEl, setScrollEl] = useState<HTMLElement | null>(null);

  useEffect(() => {
    const parent = probeRef.current ? probeRef.current.parentElement : null;
    if (parent && parent !== scrollEl) setScrollEl(parent as HTMLElement);
  }, [scrollEl]);

  const getItemKey = useCallback(
    (index: number) => {
      const item = items[index];
      return (item && (item.id || item.key)) || index;
    },
    [items],
  );

  // column-reverse ⇒ Chrome's scrollTop is 0 at the newest message and goes
  // negative toward older ones. Feed the virtualizer the absolute value so
  // its 0→positive offset math lines up with array order, and invert again
  // on the way out when it repositions the scroll (it does that itself when
  // a row above the viewport is measured at a different height than
  // estimated, to keep the visible content from jumping).
  const observeElementOffset: VirtualizerOptions<
    HTMLElement,
    Element
  >['observeElementOffset'] = useCallback((instance, cb) => {
    const el = instance.scrollElement;
    if (!el) return undefined;
    const report = (isScrolling: boolean) => () => {
      cb(Math.abs(el.scrollTop), isScrolling);
    };
    const onScroll = report(true);
    const onScrollEnd = report(false);
    el.addEventListener('scroll', onScroll, { passive: true });
    el.addEventListener('scrollend', onScrollEnd, { passive: true });
    // Seed the initial offset; without it the first frame renders against a
    // stale 0 before any scroll event fires.
    cb(Math.abs(el.scrollTop), false);
    return () => {
      el.removeEventListener('scroll', onScroll);
      el.removeEventListener('scrollend', onScrollEnd);
    };
  }, []);

  const scrollToFn: VirtualizerOptions<HTMLElement, Element>['scrollToFn'] =
    useCallback((offset, options, instance) => {
      const el = instance.scrollElement;
      if (!el || !el.scrollTo) return;
      const adjustments = options?.adjustments || 0;
      el.scrollTo({
        top: -(offset + adjustments),
        behavior: options?.behavior,
      });
    }, []);

  const virtualizer = useVirtualizer({
    count,
    getScrollElement: () => scrollEl,
    estimateSize: () => ESTIMATED_ROW_HEIGHT,
    getItemKey,
    gap: LIST_GAP_PX,
    overscan: 6,
    observeElementOffset,
    scrollToFn,
  });

  const virtualItems = virtualizer.getVirtualItems();
  const totalSize = virtualizer.getTotalSize();

  // Space held open for the rows we did not render. `before` covers the
  // newer side (array indices below the window, painted below the viewport
  // under column-reverse); `after` covers the older side above it.
  const padBefore = virtualItems.length > 0 ? virtualItems[0].start : 0;
  const padAfter =
    virtualItems.length > 0
      ? Math.max(0, totalSize - virtualItems[virtualItems.length - 1].end)
      : Math.max(0, totalSize);

  const rows = useMemo(
    () =>
      virtualItems.map((virtualRow) => {
        const item = items[virtualRow.index];
        if (!item) return null;
        const { key, ...bubble } = item;
        // Preserved verbatim from the original inline map in BubbleList.tsx so
        // Bubble keeps receiving exactly what it did before.
        const isLast = virtualRow.index === count - 1;
        return (
          <div
            key={virtualRow.key}
            ref={virtualizer.measureElement}
            data-index={virtualRow.index}
          >
            <Bubble {...bubble} isLast={isLast} />
          </div>
        );
      }),
    [virtualItems, items, count, virtualizer],
  );

  return (
    <>
      <div
        ref={probeRef}
        style={{ height: padBefore, flex: '0 0 auto' }}
        aria-hidden
      />
      {rows}
      <div style={{ height: padAfter, flex: '0 0 auto' }} aria-hidden />
    </>
  );
}
