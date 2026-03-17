import { type RefObject, useMemo, useState } from "react";
import { flushSync } from "react-dom";
import { BubbleDataType } from "../BubbleList"


export interface UsePaginationItemsOptions {
  enable: boolean;
}

export const usePaginationItems = (items: (BubbleDataType & { history?: boolean })[], options: UsePaginationItemsOptions) => {
  const [page, setPage] = useState(1);
  const data = useMemo(() => {
    const historyItems = [];
    const otherItems = [];
    for (const item of items) {
      if (item.history) {
        historyItems.push(item);
      } else {
        otherItems.push(item);
      }
    }
    return [...historyItems.slice(-page * 10), ...otherItems];
  }, [items, page]);

  if (!options?.enable) {
    return {
      items,
      noMore: true,
      loadMore: (_scrollRef?: RefObject<HTMLElement | null>) => Promise.resolve(),
    }
  }

  return {
    items: data,
    noMore: data.length === items.length,
    loadMore: (scrollRef?: RefObject<HTMLElement | null>) => {
      return new Promise<void>((resolve) => {
        setTimeout(() => {
          const scrollEl = scrollRef?.current;
          const prevScrollHeight = scrollEl?.scrollHeight ?? 0;

          flushSync(() => {
            setPage(page + 1);
          });

          if (scrollEl) {
            const newScrollHeight = scrollEl.scrollHeight;
            scrollEl.scrollTop += newScrollHeight - prevScrollHeight;
          }

          resolve();
        }, 1000);
      });
    }
  }
}