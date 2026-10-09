import type { IAgentScopeRuntimeWebUISenderMentionItem } from '../../types';

export interface MentionRange {
  start: number;
  end: number;
  keyword: string;
}

export interface SelectedMention {
  id: number;
  item: IAgentScopeRuntimeWebUISenderMentionItem;
  text: string;
  start: number;
  end: number;
}

function escapeRegExp(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

export function findMentionRange(
  value: string,
  cursor: number,
  trigger: string,
): MentionRange | null {
  if (!trigger) return null;

  const contentBeforeCursor = value.slice(0, cursor);
  const match = contentBeforeCursor.match(
    new RegExp(
      `(?:^|\\s)${escapeRegExp(trigger)}([^\\s${escapeRegExp(trigger)}]*)$`,
    ),
  );
  if (!match) return null;

  const tokenLength = trigger.length + match[1].length;
  let end = cursor;
  while (
    end < value.length &&
    !/\s/.test(value[end]) &&
    !value.startsWith(trigger, end)
  ) {
    end += 1;
  }
  return {
    start: cursor - tokenLength,
    end,
    keyword: match[1],
  };
}

export function remapSelectedMentions(
  previousValue: string,
  nextValue: string,
  mentions: SelectedMention[],
) {
  if (previousValue === nextValue) return mentions;

  let prefixLength = 0;
  const maxPrefix = Math.min(previousValue.length, nextValue.length);
  while (
    prefixLength < maxPrefix &&
    previousValue[prefixLength] === nextValue[prefixLength]
  ) {
    prefixLength += 1;
  }

  let suffixLength = 0;
  const maxSuffix = Math.min(
    previousValue.length - prefixLength,
    nextValue.length - prefixLength,
  );
  while (
    suffixLength < maxSuffix &&
    previousValue[previousValue.length - 1 - suffixLength] ===
      nextValue[nextValue.length - 1 - suffixLength]
  ) {
    suffixLength += 1;
  }

  const previousEditEnd = previousValue.length - suffixLength;
  const nextEditEnd = nextValue.length - suffixLength;
  const delta = nextEditEnd - previousEditEnd;

  return mentions.flatMap((mention) => {
    let nextMention = mention;
    if (mention.end <= prefixLength) {
      nextMention = mention;
    } else if (mention.start >= previousEditEnd) {
      nextMention = {
        ...mention,
        start: mention.start + delta,
        end: mention.end + delta,
      };
    } else {
      return [];
    }

    return nextValue.slice(nextMention.start, nextMention.end) ===
      nextMention.text
      ? [nextMention]
      : [];
  });
}
