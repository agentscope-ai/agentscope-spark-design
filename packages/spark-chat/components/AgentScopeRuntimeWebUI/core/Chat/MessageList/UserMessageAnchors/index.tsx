import { Popover, Tooltip } from '@agentscope-ai/design';
import cls from 'classnames';
import { ChevronDown, ChevronUp, List as ListIcon, LocateFixed } from 'lucide-react';
import React, { useCallback, useMemo, useState } from 'react';
import {
  areAnchorPositionsEqual,
  clamp,
  getActiveAnchorId,
  getAnchorTimeText,
  getMessageElementInScrollContainer,
  getUserMessageAnchor,
  getUserMessageAnchorMinGap,
  getUserMessageAnchorMinCount,
  scrollTargetIntoContainerCenter,
} from './helpers';
import type { UserMessageAnchor, UserMessageAnchorsProps } from './types';

type UserMessageAnchorGroup = {
  active: boolean;
  anchors: UserMessageAnchor[];
  id: string;
  targetAnchor: UserMessageAnchor;
  top: number;
};

const ANCHOR_CONTENT_GAP = 24;
const ANCHOR_TRACK_WIDTH = 32;
const NAVIGATOR_TRACK_WIDTH = 44;

function getAnchorAttachmentText(anchor: UserMessageAnchor) {
  const countByType = anchor.attachments.reduce<Record<string, number>>((result, attachment) => {
    result[attachment.type] = (result[attachment.type] || 0) + 1;
    return result;
  }, {});

  return Object.entries(countByType).map(([type, count]) => `${type}：${count}`).join(' · ');
}

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
          {previewAnchors.map((anchor) => {
            const attachmentText = getAnchorAttachmentText(anchor);

            return (
              <div className={`${prefixCls}-anchor-tooltip-attachment`} key={anchor.id}>
                <span className={`${prefixCls}-anchor-tooltip-attachment-name`}>
                  {[getAnchorTimeText(anchor.createdAt), anchor.preview, attachmentText].filter(Boolean).join(' · ')}
                </span>
              </div>
            );
          })}
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
      {firstAnchor.createdAt ? (
        <div className={`${prefixCls}-anchor-tooltip-time`}>{getAnchorTimeText(firstAnchor.createdAt)}</div>
      ) : null}
      <div className={`${prefixCls}-anchor-tooltip-text`}>{firstAnchor.preview}</div>
      {firstAnchor.attachments.length ? (
        <div className={`${prefixCls}-anchor-tooltip-attachments`}>
          <div className={`${prefixCls}-anchor-tooltip-attachment`}>
            <span className={`${prefixCls}-anchor-tooltip-attachment-name`}>
              {getAnchorAttachmentText(firstAnchor)}
            </span>
          </div>
        </div>
      ) : null}
    </div>
  );
}

function UserMessageAnchorDirectory(props: {
  anchors: UserMessageAnchor[];
  activeAnchorId?: string;
  prefixCls: string;
  onAnchorClick: (messageId: string) => void;
}) {
  const { anchors, activeAnchorId, prefixCls, onAnchorClick } = props;
  const activeItemRef = React.useRef<HTMLButtonElement | null>(null);
  const listRef = React.useRef<HTMLDivElement | null>(null);

  const scrollActiveItemIntoView = useCallback((event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();

    const activeItem = activeItemRef.current;
    const list = listRef.current;
    if (!activeItem || !list) return;

    const itemOffsetTop = activeItem.offsetTop;
    const nextScrollTop = itemOffsetTop - (list.clientHeight - activeItem.offsetHeight) / 2;
    list.scrollTo({
      top: Math.max(0, nextScrollTop),
      behavior: 'smooth',
    });
  }, []);

  return (
    <div className={`${prefixCls}-anchor-directory`}>
      <div className={`${prefixCls}-anchor-directory-title`}>
        <span>导航 ({anchors.length})</span>
        <button
          aria-label="Scroll directory to active user message"
          className={`${prefixCls}-anchor-directory-locate`}
          disabled={!activeAnchorId}
          onClick={scrollActiveItemIntoView}
          type="button"
        >
          <LocateFixed size={14} />
        </button>
      </div>
      <div className={`${prefixCls}-anchor-directory-list`} ref={listRef}>
        {anchors.map((anchor) => {
          const timeText = getAnchorTimeText(anchor.createdAt);
          const attachmentText = getAnchorAttachmentText(anchor);
          const active = anchor.id === activeAnchorId;

          return (
            <button
              className={cls(`${prefixCls}-anchor-directory-item`, {
                [`${prefixCls}-anchor-directory-item-active`]: active,
              })}
              key={anchor.id}
              onClick={() => onAnchorClick(anchor.id)}
              ref={active ? activeItemRef : undefined}
              type="button"
            >
              <span className={`${prefixCls}-anchor-directory-main`}>
                <span className={`${prefixCls}-anchor-directory-message`}>{anchor.preview}</span>
                {timeText ? (
                  <span className={`${prefixCls}-anchor-directory-time`}>{timeText}</span>
                ) : null}
              </span>
              {attachmentText ? (
                <span className={`${prefixCls}-anchor-directory-attachments`}>{attachmentText}</span>
              ) : null}
            </button>
          );
        })}
      </div>
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
    variant = 'minimap',
    onEnsureMessageVisible,
  } = props;
  const anchorTrackRef = React.useRef<HTMLElement | null>(null);
  const frameRef = React.useRef<number | undefined>();
  const [anchorPositions, setAnchorPositions] = useState<Record<string, number>>({});
  const [activeAnchorId, setActiveAnchorId] = useState<string | undefined>();
  const [anchorRight, setAnchorRight] = useState<number | undefined>();
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

    const rootRect = root?.getBoundingClientRect();
    const scrollRect = scrollEl.getBoundingClientRect();
    if (rootRect) {
      const trackWidth = variant === 'navigator' ? NAVIGATOR_TRACK_WIDTH : ANCHOR_TRACK_WIDTH;
      const nextAnchorRight = Math.round(Math.max(
        12,
        rootRect.right - scrollRect.right - ANCHOR_CONTENT_GAP - trackWidth,
      ));
      setAnchorRight((prev) => prev === nextAnchorRight ? prev : nextAnchorRight);
    }

    const nextTrackHeight = anchorTrackRef.current?.clientHeight || 0;
    setTrackHeight((prev) => Math.abs(prev - nextTrackHeight) < 1 ? prev : nextTrackHeight);

    const scrollHeight = Math.max(scrollEl.scrollHeight, 1);
    const maxScrollTop = Math.max(scrollEl.scrollHeight - scrollEl.clientHeight, 0);
    const visualScrollTop = maxScrollTop + scrollEl.scrollTop;
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
  }, [anchors, prefixCls, scrollContainerClassName, variant]);

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

  const activeAnchorIndex = activeAnchorId
    ? anchors.findIndex((anchor) => anchor.id === activeAnchorId)
    : anchors.length - 1;
  const normalizedActiveAnchorIndex = activeAnchorIndex >= 0 ? activeAnchorIndex : anchors.length - 1;
  const previousAnchor = normalizedActiveAnchorIndex > 0 ? anchors[normalizedActiveAnchorIndex - 1] : undefined;
  const nextAnchor = normalizedActiveAnchorIndex < anchors.length - 1
    ? anchors[normalizedActiveAnchorIndex + 1]
    : undefined;

  if (variant === 'navigator') {
    return (
      <nav
        aria-label="User message navigation"
        className={cls(`${prefixCls}-anchors`, `${prefixCls}-anchors-navigator`)}
        ref={anchorTrackRef}
        style={anchorRight === undefined ? undefined : { right: anchorRight }}
      >
        <button
          aria-label="Scroll to previous user message"
          className={`${prefixCls}-anchor-nav-button`}
          disabled={!previousAnchor}
          onClick={() => previousAnchor && handleAnchorClick(previousAnchor.id)}
          type="button"
        >
          <ChevronUp size={18} />
        </button>
        <Popover
          content={(
            <UserMessageAnchorDirectory
              activeAnchorId={activeAnchorId}
              anchors={anchors}
              onAnchorClick={handleAnchorClick}
              prefixCls={prefixCls}
            />
          )}
          overlayClassName={`${prefixCls}-anchor-directory-popover`}
          placement="left"
          styles={{ body: { padding: 0 } }}
          trigger="hover"
        >
          <button
            aria-current={activeAnchorId ? 'location' : undefined}
            aria-label="Open user message directory"
            className={cls(`${prefixCls}-anchor-nav-button`, `${prefixCls}-anchor-nav-button-menu`, {
              [`${prefixCls}-anchor-nav-button-active`]: !!activeAnchorId,
            })}
            type="button"
          >
            <ListIcon size={18} />
            <span className={`${prefixCls}-anchor-nav-count`}>{anchors.length}</span>
          </button>
        </Popover>
        <button
          aria-label="Scroll to next user message"
          className={`${prefixCls}-anchor-nav-button`}
          disabled={!nextAnchor}
          onClick={() => nextAnchor && handleAnchorClick(nextAnchor.id)}
          type="button"
        >
          <ChevronDown size={18} />
        </button>
      </nav>
    );
  }

  const anchorGroups = getAnchorGroups(anchors, anchorPositions, activeAnchorId, normalizedMinGap, trackHeight);

  return (
    <nav
      aria-label="User message anchors"
      className={`${prefixCls}-anchors`}
      ref={anchorTrackRef}
      style={anchorRight === undefined ? undefined : { right: anchorRight }}
    >
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
