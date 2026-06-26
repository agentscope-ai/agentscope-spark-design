import type { IAgentScopeRuntimeWebUIMessage } from "../../../types/IMessages";
import {
  AgentScopeRuntimeContentType,
  IAgentScopeRuntimeRequest,
  IContent,
} from "../../../AgentScopeRuntime/types";
import type { AttachmentPreview, UserMessageAnchor } from "./types";

const DEFAULT_USER_MESSAGE_ANCHOR_MIN_COUNT = 3;
const DEFAULT_USER_MESSAGE_ANCHOR_MIN_GAP = 6;
const DEFAULT_USER_MESSAGE_ANCHOR_BADGE_MAX_COUNT = 99;
const SCROLL_BOUNDARY_OFFSET = 4;

function normalizePreviewText(text: string) {
  return text.replace(/\s+/g, ' ').trim();
}

function getFileSizeText(size?: number) {
  if (!size) return '';
  if (size < 1024) return `${size} B`;
  if (size < 1024 * 1024) return `${(size / 1024).toFixed(1)} KB`;
  return `${(size / 1024 / 1024).toFixed(1)} MB`;
}

function getAttachmentPreview(content: IContent): AttachmentPreview | undefined {
  switch (content.type) {
    case AgentScopeRuntimeContentType.IMAGE:
      return { type: 'Image', name: 'Image attachment' };
    case AgentScopeRuntimeContentType.VIDEO:
      return { type: 'Video', name: 'Video attachment' };
    case AgentScopeRuntimeContentType.AUDIO:
      return { type: 'Audio', name: 'Audio attachment' };
    case AgentScopeRuntimeContentType.FILE:
      return {
        type: 'File',
        name: [
          content.file_name || content.fileName || content.file_url || content.file_id || 'File attachment',
          getFileSizeText(content.file_size),
        ].filter(Boolean).join(' · '),
      };
    case AgentScopeRuntimeContentType.DATA:
      return { type: 'Data', name: 'Data payload' };
    default:
      return undefined;
  }
}

function getContentText(content: IContent) {
  if (content.type === AgentScopeRuntimeContentType.TEXT) return content.text;
  if (content.type === AgentScopeRuntimeContentType.REFUSAL) return content.refusal;
  return '';
}

export function getUserMessageAnchor(message: IAgentScopeRuntimeWebUIMessage): UserMessageAnchor | undefined {
  if (message.role !== 'user' || !message.id) return undefined;

  const request = message.cards?.find((card) => card.code === 'AgentScopeRuntimeRequestCard')?.data as
    | IAgentScopeRuntimeRequest
    | undefined;
  const contentList = request?.input?.flatMap((item) => item.content || []) || [];
  const text = normalizePreviewText(contentList.map(getContentText).filter(Boolean).join(' '));
  const attachments = contentList.map(getAttachmentPreview).filter(Boolean) as AttachmentPreview[];
  const attachmentPreview = attachments.map((item) => item.name).join(' ');
  const preview = normalizePreviewText(text || attachmentPreview || '');

  return {
    createdAt: request?.created_at,
    id: message.id,
    attachments,
    orderPercent: 0,
    preview: preview || 'User message',
  };
}

export function getAnchorTimeText(createdAt?: number) {
  if (!createdAt) return '';

  const timestamp = createdAt < 10000000000 ? createdAt * 1000 : createdAt;
  const date = new Date(timestamp);
  if (Number.isNaN(date.getTime())) return '';

  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hour = String(date.getHours()).padStart(2, '0');
  const minute = String(date.getMinutes()).padStart(2, '0');
  return `${month}月${day}日 ${hour}:${minute}`;
}

export function getUserMessageAnchorMinCount(minCount?: number) {
  if (typeof minCount !== 'number' || !Number.isFinite(minCount)) {
    return DEFAULT_USER_MESSAGE_ANCHOR_MIN_COUNT;
  }
  return Math.max(0, Math.floor(minCount));
}

export function getUserMessageAnchorMinGap(minGap?: number) {
  if (typeof minGap !== 'number' || !Number.isFinite(minGap)) {
    return DEFAULT_USER_MESSAGE_ANCHOR_MIN_GAP;
  }
  return Math.max(0, minGap);
}

export function getUserMessageAnchorBadgeMaxCount(badgeMaxCount?: number) {
  if (typeof badgeMaxCount !== 'number' || !Number.isFinite(badgeMaxCount)) {
    return DEFAULT_USER_MESSAGE_ANCHOR_BADGE_MAX_COUNT;
  }
  return Math.max(1, Math.floor(badgeMaxCount));
}

export function getUserMessageAnchorBadgeText(count: number, badgeMaxCount?: number) {
  const normalizedBadgeMaxCount = getUserMessageAnchorBadgeMaxCount(badgeMaxCount);
  return count > normalizedBadgeMaxCount ? `${normalizedBadgeMaxCount}+` : String(count);
}

export function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

export function areAnchorPositionsEqual(prev: Record<string, number>, next: Record<string, number>) {
  const prevKeys = Object.keys(prev);
  const nextKeys = Object.keys(next);
  if (prevKeys.length !== nextKeys.length) return false;
  return nextKeys.every((key) => Math.abs((prev[key] ?? -1) - next[key]) < 0.1);
}

export function getMessageElementMapInScrollContainer(scrollEl: HTMLElement) {
  const candidates = scrollEl.querySelectorAll<HTMLElement>('[data-role][id]');
  const result = new Map<string, HTMLElement>();
  candidates.forEach((candidate) => {
    result.set(candidate.id, candidate);
  });
  return result;
}

export function getMessageElementInScrollContainer(scrollEl: HTMLElement, messageId: string) {
  const target = typeof document === 'undefined' ? null : document.getElementById(messageId);
  if (target instanceof HTMLElement && scrollEl.contains(target) && target.hasAttribute('data-role')) {
    return target;
  }

  return getMessageElementMapInScrollContainer(scrollEl).get(messageId) || null;
}

function getScrollBoundaryAnchorId(scrollEl: HTMLElement, anchors: UserMessageAnchor[]) {
  const maxScrollDistance = Math.max(scrollEl.scrollHeight - scrollEl.clientHeight, 0);
  if (maxScrollDistance <= SCROLL_BOUNDARY_OFFSET) return undefined;

  const firstAnchor = anchors[0];
  const lastAnchor = anchors[anchors.length - 1];
  if (!firstAnchor || !lastAnchor) return undefined;

  const isDescOrder = scrollEl.className.includes('bubble-list-order-desc');
  if (isDescOrder) {
    const scrollDistance = Math.abs(scrollEl.scrollTop);
    if (scrollDistance <= SCROLL_BOUNDARY_OFFSET) return lastAnchor.id;
    if (maxScrollDistance - scrollDistance <= SCROLL_BOUNDARY_OFFSET) return firstAnchor.id;
    return undefined;
  }

  if (scrollEl.scrollTop <= SCROLL_BOUNDARY_OFFSET) return firstAnchor.id;
  if (maxScrollDistance - scrollEl.scrollTop <= SCROLL_BOUNDARY_OFFSET) return lastAnchor.id;
  return undefined;
}

export function getActiveAnchorId(scrollEl: HTMLElement, anchors: UserMessageAnchor[]) {
  const targetMap = getMessageElementMapInScrollContainer(scrollEl);
  const renderedAnchors = anchors.filter((anchor) => targetMap.has(anchor.id));
  const boundaryAnchorId = getScrollBoundaryAnchorId(scrollEl, renderedAnchors);
  if (boundaryAnchorId) return boundaryAnchorId;

  const scrollRect = scrollEl.getBoundingClientRect();
  const viewportCenter = scrollRect.top + scrollRect.height / 2;
  let activeAnchorId: string | undefined;
  let minDistance = Number.POSITIVE_INFINITY;

  renderedAnchors.forEach((anchor) => {
    const target = targetMap.get(anchor.id);
    if (!target) return;

    const targetRect = target.getBoundingClientRect();
    const targetCenter = targetRect.top + targetRect.height / 2;
    const distance = Math.abs(targetCenter - viewportCenter);

    if (distance < minDistance) {
      minDistance = distance;
      activeAnchorId = anchor.id;
    }
  });

  return activeAnchorId;
}

export function getTargetTopOffset(scrollEl: HTMLElement, target: HTMLElement, topOffset = 0) {
  const scrollRect = scrollEl.getBoundingClientRect();
  const targetRect = target.getBoundingClientRect();

  return targetRect.top - scrollRect.top - topOffset;
}

export function scrollTargetIntoContainerTop(
  scrollEl: HTMLElement,
  target: HTMLElement,
  behavior: ScrollBehavior = 'smooth',
  topOffset = 0,
) {
  const offset = getTargetTopOffset(scrollEl, target, topOffset);
  if (Math.abs(offset) < 1) return;

  scrollEl.scrollBy({
    top: offset,
    behavior,
  });
}
