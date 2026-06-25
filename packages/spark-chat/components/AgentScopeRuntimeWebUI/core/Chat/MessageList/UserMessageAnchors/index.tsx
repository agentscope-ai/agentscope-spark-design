import { Tooltip } from "@agentscope-ai/design";
import cls from 'classnames';
import React, { useCallback, useMemo, useState } from "react";
import {
  areAnchorPositionsEqual,
  clamp,
  getActiveAnchorId,
  getMessageElementInScrollContainer,
  getUserMessageAnchor,
  getUserMessageAnchorMinGap,
  getUserMessageAnchorMinCount,
  scrollTargetIntoContainerCenter,
} from "./helpers";
import type { UserMessageAnchor, UserMessageAnchorsProps } from "./types";

type UserMessageAnchorGroup = {
  active: boolean;
  anchors: UserMessageAnchor[];
  id: string;
  targetAnchor: UserMessageAnchor;
  top: number;
};

function UserMessageAnchorTooltip(props: {
  anchors: UserMessageAnchor[];
  prefixCls: string;
}) {
  const { anchors, prefixCls } = props;
  const firstAnchor = anchors[0];
  if (!firstAnchor) return null;

  if (anchors.length > 1) {
    const previewAnchors = anchors.slice(0, 4);

    return (
      <div className={`${prefixCls}-anchor-tooltip`}>
        <div className={`${prefixCls}-anchor-tooltip-text`}>{anchors.length} user messages</div>
        <div className={`${prefixCls}-anchor-tooltip-attachments`}>
          {previewAnchors.map((anchor) => (
            <div className={`${prefixCls}-anchor-tooltip-attachment`} key={anchor.id}>
              <span className={`${prefixCls}-anchor-tooltip-attachment-name`}>
                {anchor.preview}
                {anchor.attachments.length ? ` · ${anchor.attachments.length} attachment${anchor.attachments.length > 1 ? 's' : ''}` : ''}
              </span>
            </div>
          ))}
          {anchors.length > previewAnchors.length ? (
            <div className={`${prefixCls}-anchor-tooltip-attachment`}>
              <span className={`${prefixCls}-anchor-tooltip-attachment-type`}>More</span>
              <span className={`${prefixCls}-anchor-tooltip-attachment-name`}>
                {anchors.length - previewAnchors.length} more messages
              </span>
            </div>
          ) : null}
        </div>
      </div>
    );
  }

  return (
    <div className={`${prefixCls}-anchor-tooltip`}>
      <div className={`${prefixCls}-anchor-tooltip-text`}>{firstAnchor.preview}</div>
      {firstAnchor.attachments.length ? (
        <div className={`${prefixCls}-anchor-tooltip-attachments`}>
          {firstAnchor.attachments.map((attachment, index) => (
            <div className={`${prefixCls}-anchor-tooltip-attachment`} key={`${attachment.type}-${index}`}>
              <span className={`${prefixCls}-anchor-tooltip-attachment-type`}>{attachment.type}</span>
              <span className={`${prefixCls}-anchor-tooltip-attachment-name`}>{attachment.name}</span>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
}

function getAnchorGroups(
  anchors: UserMessageAnchor[],
  anchorPositions: Record<string, number>,
  activeAnchorId: string | undefined,
  minGap: number,
  trackHeight: number,
): UserMessageAnchorGroup[] {
  const minGapPercent = trackHeight > 0 ? (minGap / trackHeight) * 100 : 0;
  const groups: Array<UserMessageAnchorGroup & { lastTop: number }> = [];

  anchors.forEach((anchor) => {
    const top = anchorPositions[anchor.id] ?? anchor.orderPercent;
    const lastGroup = groups[groups.length - 1];

    if (lastGroup && Math.abs(top - lastGroup.lastTop) < minGapPercent) {
      lastGroup.anchors.push(anchor);
      lastGroup.lastTop = top;
      lastGroup.top = (lastGroup.top * (lastGroup.anchors.length - 1) + top) / lastGroup.anchors.length;
      if (anchor.id === activeAnchorId) {
        lastGroup.active = true;
        lastGroup.targetAnchor = anchor;
      }
      return;
    }

    groups.push({
      active: anchor.id === activeAnchorId,
      anchors: [anchor],
      id: anchor.id,
      lastTop: top,
      targetAnchor: anchor,
      top,
    });
  });

  return groups.map((group) => {
    const id = group.anchors.length > 1
      ? `${group.anchors[0].id}-${group.anchors[group.anchors.length - 1].id}`
      : group.id;
    let targetAnchor = group.targetAnchor;

    if (group.anchors.length > 1) {
      const middleAnchor = group.anchors[Math.floor((group.anchors.length - 1) / 2)] || group.targetAnchor;
      targetAnchor = group.active ? group.targetAnchor : middleAnchor;
    }

    return {
      active: group.active,
      anchors: group.anchors,
      id,
      targetAnchor,
      top: group.top,
    };
  });
}

export default function UserMessageAnchors(props: UserMessageAnchorsProps) {
  const {
    enabled = true,
    items,
    minGap,
    minCount,
    prefixCls,
    renderedItemsKey,
    scrollContainerClassName,
    onEnsureMessageVisible,
  } = props;
  const anchorTrackRef = React.useRef<HTMLElement | null>(null);
  const frameRef = React.useRef<number | undefined>();
  const [anchorPositions, setAnchorPositions] = useState<Record<string, number>>({});
  const [activeAnchorId, setActiveAnchorId] = useState<string | undefined>();
  const [trackHeight, setTrackHeight] = useState(0);
  const normalizedMinGap = useMemo(() => getUserMessageAnchorMinGap(minGap), [minGap]);
  const normalizedMinCount = useMemo(() => getUserMessageAnchorMinCount(minCount), [minCount]);

  const anchors = useMemo<UserMessageAnchor[]>(() => {
    if (!enabled) return [];

    const visualItems = items.slice().reverse();
    const totalCount = Math.max(visualItems.length, 1);

    return visualItems.reduce<UserMessageAnchor[]>((result, message, index) => {
      const anchor = getUserMessageAnchor(message);
      if (!anchor) return result;

      result.push({
        ...anchor,
        orderPercent: ((index + 0.5) / totalCount) * 100,
      });
      return result;
    }, []);
  }, [enabled, items]);
  const anchorIdsKey = useMemo(() => anchors.map((anchor) => anchor.id).join('|'), [anchors]);
  const visible = enabled && anchors.length > 0 && anchors.length >= normalizedMinCount;

  const measureAnchors = useCallback(() => {
    const root = anchorTrackRef.current?.closest(`.${prefixCls}`);
    const scrollEl = root?.querySelector(`.${scrollContainerClassName}`) as HTMLElement | null;
    if (!scrollEl) return;

    const nextTrackHeight = anchorTrackRef.current?.clientHeight || 0;
    setTrackHeight((prev) => Math.abs(prev - nextTrackHeight) < 1 ? prev : nextTrackHeight);

    const scrollHeight = Math.max(scrollEl.scrollHeight, 1);
    const maxScrollTop = Math.max(scrollEl.scrollHeight - scrollEl.clientHeight, 0);
    const visualScrollTop = maxScrollTop + scrollEl.scrollTop;
    const scrollRect = scrollEl.getBoundingClientRect();
    const nextPositions = anchors.reduce<Record<string, number>>((result, anchor) => {
      const target = getMessageElementInScrollContainer(scrollEl, anchor.id);
      if (!target) {
        result[anchor.id] = anchor.orderPercent;
        return result;
      }

      const targetRect = target.getBoundingClientRect();
      const viewportCenter = targetRect.top - scrollRect.top + targetRect.height / 2;
      const visualCenter = visualScrollTop + viewportCenter;
      result[anchor.id] = clamp((visualCenter / scrollHeight) * 100, 0, 100);
      return result;
    }, {});

    setAnchorPositions((prev) => {
      if (areAnchorPositionsEqual(prev, nextPositions)) return prev;
      return nextPositions;
    });

    const nextActiveAnchorId = getActiveAnchorId(scrollEl, anchors);
    setActiveAnchorId((prev) => prev === nextActiveAnchorId ? prev : nextActiveAnchorId);
  }, [anchors, prefixCls, scrollContainerClassName]);

  const updateAnchors = useCallback(() => {
    if (frameRef.current) {
      window.cancelAnimationFrame(frameRef.current);
    }

    frameRef.current = window.requestAnimationFrame(() => {
      frameRef.current = undefined;
      measureAnchors();
    });
  }, [measureAnchors]);

  const cancelPendingAnchorPositionUpdate = useCallback(() => {
    if (frameRef.current) {
      window.cancelAnimationFrame(frameRef.current);
      frameRef.current = undefined;
    }
  }, []);

  React.useLayoutEffect(() => {
    cancelPendingAnchorPositionUpdate();
    if (!visible) {
      setAnchorPositions((prev) => Object.keys(prev).length ? {} : prev);
      setActiveAnchorId((prev) => prev === undefined ? prev : undefined);
      return;
    }

    measureAnchors();

    const root = anchorTrackRef.current?.closest(`.${prefixCls}`);
    const scrollEl = root?.querySelector(`.${scrollContainerClassName}`) as HTMLElement | null;
    const targets = anchors
      .map((anchor) => scrollEl ? getMessageElementInScrollContainer(scrollEl, anchor.id) : null)
      .filter((target): target is HTMLElement => !!target);
    const scrollChildren = Array.from(scrollEl?.children || [])
      .filter((target): target is HTMLElement => target instanceof HTMLElement);
    const resizeObserver = typeof ResizeObserver !== 'undefined'
      ? new ResizeObserver(updateAnchors)
      : undefined;

    if (scrollEl) resizeObserver?.observe(scrollEl);
    scrollChildren.forEach((target) => resizeObserver?.observe(target));
    targets.forEach((target) => resizeObserver?.observe(target));
    scrollEl?.addEventListener('scroll', updateAnchors, { passive: true });
    window.addEventListener('resize', updateAnchors);

    return () => {
      cancelPendingAnchorPositionUpdate();
      resizeObserver?.disconnect();
      scrollEl?.removeEventListener('scroll', updateAnchors);
      window.removeEventListener('resize', updateAnchors);
    };
  }, [
    anchorIdsKey,
    cancelPendingAnchorPositionUpdate,
    measureAnchors,
    prefixCls,
    renderedItemsKey,
    scrollContainerClassName,
    updateAnchors,
    visible,
  ]);

  const handleAnchorClick = useCallback(async (messageId: string) => {
    await onEnsureMessageVisible(messageId);
    cancelPendingAnchorPositionUpdate();
    measureAnchors();
    setActiveAnchorId(messageId);

    const root = anchorTrackRef.current?.closest(`.${prefixCls}`);
    const scrollEl = root?.querySelector(`.${scrollContainerClassName}`) as HTMLElement | null;
    if (!scrollEl) return;

    const target = getMessageElementInScrollContainer(scrollEl, messageId);
    if (!target) return;

    scrollTargetIntoContainerCenter(scrollEl, target);
    target.classList.remove(`${prefixCls}-anchor-target-active`);
    window.requestAnimationFrame(() => {
      target.classList.add(`${prefixCls}-anchor-target-active`);
      window.setTimeout(() => {
        target.classList.remove(`${prefixCls}-anchor-target-active`);
      }, 1200);
    });
  }, [
    cancelPendingAnchorPositionUpdate,
    measureAnchors,
    onEnsureMessageVisible,
    prefixCls,
    scrollContainerClassName,
  ]);

  if (!visible) return null;

  const anchorGroups = getAnchorGroups(anchors, anchorPositions, activeAnchorId, normalizedMinGap, trackHeight);

  return (
    <nav className={`${prefixCls}-anchors`} aria-label="User message anchors" ref={anchorTrackRef}>
      {anchorGroups.map((group) => {
        return (
          <Tooltip
            key={group.id}
            placement="left"
            title={<UserMessageAnchorTooltip anchors={group.anchors} prefixCls={prefixCls} />}
          >
            <button
              aria-label={group.anchors.length > 1
                ? `Scroll to ${group.anchors.length} grouped user messages`
                : `Scroll to user message: ${group.targetAnchor.preview}`}
              aria-current={group.active ? 'location' : undefined}
              className={cls(`${prefixCls}-anchor`, {
                [`${prefixCls}-anchor-active`]: group.active,
                [`${prefixCls}-anchor-grouped`]: group.anchors.length > 1,
              })}
              onClick={() => handleAnchorClick(group.targetAnchor.id)}
              style={{ top: `${group.top}%` }}
              type="button"
            >
              <span className={`${prefixCls}-anchor-bar`} />
            </button>
          </Tooltip>
        );
      })}
    </nav>
  );
}
