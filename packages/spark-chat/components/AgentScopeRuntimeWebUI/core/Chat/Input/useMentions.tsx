import type {
  IAgentScopeRuntimeWebUISenderMentionItem,
  IAgentScopeRuntimeWebUISenderMentionsOptions,
} from '@agentscope-ai/chat';
import { Sender, useProviderContext } from '@agentscope-ai/chat';
import { Popover } from 'antd';
import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import {
  findMentionRange,
  remapSelectedMentions,
  type MentionRange,
  type SelectedMention,
} from './mentionUtils';

function getItemText(item: IAgentScopeRuntimeWebUISenderMentionItem) {
  return typeof item.label === 'string' || typeof item.label === 'number'
    ? String(item.label)
    : item.value;
}

export default function useMentions(
  options: IAgentScopeRuntimeWebUISenderMentionsOptions | undefined,
  value: string,
  setValue: (value: string) => void,
  disabled: boolean,
) {
  const prefixCls = useProviderContext().getPrefixCls(
    'chat-anywhere-input-mentions',
  );
  const [range, setRange] = useState<MentionRange | null>(null);
  const [items, setItems] = useState<
    IAgentScopeRuntimeWebUISenderMentionItem[]
  >([]);
  const [selectedMentions, setSelectedMentions] = useState<SelectedMention[]>(
    [],
  );
  const [loading, setLoading] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const sourceRef =
    useRef<IAgentScopeRuntimeWebUISenderMentionsOptions['items']>();
  const cachedItemsRef = useRef<IAgentScopeRuntimeWebUISenderMentionItem[]>();
  const loadGenerationRef = useRef(0);
  const mentionIdRef = useRef(0);
  const pendingSelectionRef = useRef<number | null>(null);
  const inputContainerRef = useRef<HTMLDivElement>(null);
  const trigger = options?.trigger || '@';
  const displayMode = options?.displayMode || 'header';
  const open = !!range;

  useEffect(() => {
    if (!open) return;

    const handlePointerDown = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Node)) return;
      if (inputContainerRef.current?.contains(target)) return;
      if (
        target instanceof Element &&
        target.closest(`.${prefixCls}-popover`)
      ) {
        return;
      }
      setRange(null);
    };

    document.addEventListener('mousedown', handlePointerDown);
    return () => document.removeEventListener('mousedown', handlePointerDown);
  }, [open, prefixCls]);

  const getInsertText = useCallback(
    (item: IAgentScopeRuntimeWebUISenderMentionItem) =>
      options?.getInsertText?.(item, trigger) ?? `${trigger}${item.value}`,
    [options?.getInsertText, trigger],
  );

  const updateSelectedMentions = useCallback(
    (nextMentions: SelectedMention[]) => {
      setSelectedMentions(nextMentions);
      options?.onChange?.(nextMentions.map((mention) => mention.item));
    },
    [options?.onChange],
  );

  useEffect(() => {
    if (sourceRef.current === options?.items) return;
    sourceRef.current = options?.items;
    loadGenerationRef.current += 1;
    cachedItemsRef.current = undefined;
    setItems([]);
    setRange(null);
    if (!options?.items) updateSelectedMentions([]);
  }, [options?.items, updateSelectedMentions]);

  useEffect(() => {
    if (!open || !options?.items || disabled) return;

    const generation = ++loadGenerationRef.current;
    const controller = new AbortController();
    const source = options.items;
    const loadItems = async () => {
      setLoading(true);
      try {
        let nextItems = cachedItemsRef.current;
        if (!nextItems || options.cacheItems === false) {
          nextItems = await Promise.resolve(
            typeof source === 'function'
              ? source({ signal: controller.signal })
              : source,
          );
        }
        if (
          controller.signal.aborted ||
          generation !== loadGenerationRef.current ||
          sourceRef.current !== source
        ) {
          return;
        }
        cachedItemsRef.current = nextItems;
        setItems(nextItems);
      } catch {
        if (
          !controller.signal.aborted &&
          generation === loadGenerationRef.current &&
          sourceRef.current === source
        ) {
          setItems([]);
        }
      } finally {
        if (generation === loadGenerationRef.current) setLoading(false);
      }
    };

    void loadItems();
    return () => {
      controller.abort();
    };
  }, [disabled, open, options?.cacheItems, options?.items]);

  const selectedValues = useMemo(
    () => new Set(selectedMentions.map((mention) => mention.item.value)),
    [selectedMentions],
  );
  const filteredItems = useMemo(() => {
    if (!range) return [];
    const keyword = range.keyword.toLocaleLowerCase();
    return items
      .filter((item) => {
        if (!options?.allowDuplicates && selectedValues.has(item.value)) {
          return false;
        }
        if (!keyword) return true;
        return (
          item.value.toLocaleLowerCase().includes(keyword) ||
          getItemText(item).toLocaleLowerCase().includes(keyword)
        );
      })
      .slice(0, options?.maxOptions ?? 50);
  }, [
    items,
    options?.allowDuplicates,
    options?.maxOptions,
    range,
    selectedValues,
  ]);

  useEffect(() => {
    setActiveIndex(0);
  }, [items, range?.keyword]);

  useLayoutEffect(() => {
    const selection = pendingSelectionRef.current;
    if (selection === null) return;

    const textarea = inputContainerRef.current?.querySelector(
      '[data-sender-input="true"]',
    );
    if (!(textarea instanceof HTMLTextAreaElement)) return;
    pendingSelectionRef.current = null;
    textarea.setSelectionRange(selection, selection);
    textarea.focus();
  }, [value]);

  const handleValueChange = useCallback(
    (nextValue: string, event?: React.ChangeEvent<HTMLTextAreaElement>) => {
      setValue(nextValue);
      if (!options || disabled) {
        setRange(null);
        return;
      }
      if (displayMode === 'inline' && selectedMentions.length > 0) {
        const nextMentions = remapSelectedMentions(
          value,
          nextValue,
          selectedMentions,
        );
        const membershipChanged =
          nextMentions.length !== selectedMentions.length;
        const rangesChanged = nextMentions.some(
          (mention, index) => mention !== selectedMentions[index],
        );
        if (membershipChanged) {
          updateSelectedMentions(nextMentions);
        } else if (rangesChanged) {
          setSelectedMentions(nextMentions);
        }
      }
      const cursor = event?.target.selectionStart ?? nextValue.length;
      setRange(findMentionRange(nextValue, cursor, trigger));
    },
    [
      disabled,
      displayMode,
      options,
      selectedMentions,
      setValue,
      trigger,
      updateSelectedMentions,
      value,
    ],
  );

  const handleSelectionChange = useCallback(
    (start: number) => {
      if (!options || disabled) {
        setRange(null);
        return;
      }
      setRange(findMentionRange(value, start, trigger));
    },
    [disabled, options, trigger, value],
  );

  const selectItem = useCallback(
    (item: IAgentScopeRuntimeWebUISenderMentionItem) => {
      if (!range || item.disabled) return;
      const before = value.slice(0, range.start);
      const after = value.slice(range.end);
      const insertText = getInsertText(item);
      const trailingSpace = after.startsWith(' ') ? '' : ' ';
      const nextValue =
        displayMode === 'inline'
          ? `${before}${insertText}${trailingSpace}${after}`
          : `${before}${after}`;
      const nextMention = {
        id: ++mentionIdRef.current,
        item,
        text: insertText,
        start: before.length,
        end: before.length + insertText.length,
      };
      pendingSelectionRef.current =
        displayMode === 'inline'
          ? nextMention.end + trailingSpace.length
          : before.length;
      setValue(nextValue);
      updateSelectedMentions([...selectedMentions, nextMention]);
      setRange(null);
    },
    [
      displayMode,
      getInsertText,
      range,
      selectedMentions,
      setValue,
      updateSelectedMentions,
      value,
    ],
  );

  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
      if (!range) return;

      if (event.key === 'Escape') {
        event.preventDefault();
        setRange(null);
        return;
      }

      if (loading || filteredItems.length === 0) return;

      if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
        event.preventDefault();
        const direction = event.key === 'ArrowDown' ? 1 : -1;
        setActiveIndex(
          (current) =>
            (current + direction + filteredItems.length) % filteredItems.length,
        );
        return;
      }

      if (event.key === 'Enter') {
        event.preventDefault();
        event.stopPropagation();
        selectItem(filteredItems[activeIndex] || filteredItems[0]);
      }
    },
    [activeIndex, filteredItems, loading, range, selectItem],
  );

  const removeItem = useCallback(
    (idToRemove: number) => {
      updateSelectedMentions(
        selectedMentions.filter((mention) => mention.id !== idToRemove),
      );
    },
    [selectedMentions, updateSelectedMentions],
  );

  const clear = useCallback(() => {
    setRange(null);
    updateSelectedMentions([]);
  }, [updateSelectedMentions]);

  const close = useCallback(() => setRange(null), []);

  const getQuery = useCallback(
    (currentValue = value) => {
      if (displayMode === 'inline') return currentValue;
      if (selectedMentions.length === 0) return currentValue;
      const mentionText = selectedMentions
        .map((mention) => `${trigger}${mention.item.value}`)
        .join(' ');
      return currentValue.trim()
        ? `${mentionText} ${currentValue}`
        : mentionText;
    },
    [displayMode, selectedMentions, trigger, value],
  );

  const menu = (
    <div className={`${prefixCls}-menu`} role="listbox">
      {loading ? (
        <div className={`${prefixCls}-empty`}>
          {options?.loadingText ?? 'Loading...'}
        </div>
      ) : filteredItems.length > 0 ? (
        filteredItems.map((item, index) => (
          <button
            type="button"
            key={`${item.type || 'mention'}:${item.value}`}
            className={`${prefixCls}-option${
              index === activeIndex ? ` ${prefixCls}-option-active` : ''
            }`}
            disabled={item.disabled}
            role="option"
            aria-selected={index === activeIndex}
            onMouseDown={(event) => event.preventDefault()}
            onMouseEnter={() => setActiveIndex(index)}
            onClick={() => selectItem(item)}
          >
            {item.icon ? (
              <span className={`${prefixCls}-icon`}>{item.icon}</span>
            ) : null}
            <span className={`${prefixCls}-label`}>
              {item.label ?? item.value}
            </span>
            {item.type && !item.icon ? (
              <span className={`${prefixCls}-type`}>{item.type}</span>
            ) : null}
          </button>
        ))
      ) : (
        <div className={`${prefixCls}-empty`}>
          {options?.emptyText ?? 'No matches'}
        </div>
      )}
    </div>
  );

  const wrapInput = useCallback(
    (node: React.ReactNode) => {
      if (!options) return node;

      return (
        <Popover
          content={menu}
          open={open && !disabled}
          onOpenChange={(nextOpen) => {
            if (!nextOpen) setRange(null);
          }}
          placement="topLeft"
          trigger={[]}
          rootClassName={`${prefixCls}-popover`}
          autoAdjustOverflow
          destroyOnHidden
          arrow={false}
        >
          <div ref={inputContainerRef}>{node}</div>
        </Popover>
      );
    },
    [disabled, menu, open, options, prefixCls],
  );

  const header =
    displayMode === 'header' && selectedMentions.length > 0 ? (
      <Sender.Header closable={false} open>
        <div className={`${prefixCls}-capsules`}>
          {selectedMentions.map(({ id, item }) => (
            <span className={`${prefixCls}-capsule`} key={id}>
              {item.icon ? (
                <span className={`${prefixCls}-icon`}>{item.icon}</span>
              ) : null}
              <span className={`${prefixCls}-capsule-label`}>
                {item.label ?? item.value}
              </span>
              <button
                type="button"
                className={`${prefixCls}-remove`}
                aria-label={`Remove ${getItemText(item)}`}
                disabled={disabled}
                onClick={() => removeItem(id)}
              >
                ×
              </button>
            </span>
          ))}
        </div>
      </Sender.Header>
    ) : null;

  return {
    clear,
    close,
    getQuery,
    handleKeyDown,
    handleSelectionChange,
    handleValueChange,
    header,
    mentions: selectedMentions.map((mention) => mention.item),
    open,
    wrapInput,
  };
}
