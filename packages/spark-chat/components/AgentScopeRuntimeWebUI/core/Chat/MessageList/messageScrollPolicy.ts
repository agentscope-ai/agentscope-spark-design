interface MessageIdentity {
  id: string;
}

/** Messages here are newest first, matching Bubble.List's descending order. */
export function shouldScrollForMessageUpdate(
  previous: readonly MessageIdentity[],
  next: readonly MessageIdentity[],
  previousSessionId?: string,
  nextSessionId?: string,
): boolean {
  if (!next.length) return false;
  if (previousSessionId !== nextSessionId || !previous.length) return true;
  if (next.length <= previous.length) return false;
  // Older pages and trace backfills add messages behind the existing newest
  // message. Only a new message at the newest edge should trigger scrolling.
  return !previous.some((message) => message.id === next[0].id);
}
