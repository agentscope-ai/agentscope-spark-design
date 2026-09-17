/** Whether an item is the newest message in the rendered ordering. */
export function isLatestBubble(
  index: number,
  length: number,
  order: 'asc' | 'desc',
): boolean {
  return length > 0 && index === (order === 'desc' ? 0 : length - 1);
}
