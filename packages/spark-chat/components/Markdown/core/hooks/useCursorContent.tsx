import { useMemo } from "react";

export default function useCursorContent({ cursor, content }: { cursor: boolean | 'dot' | 'underline', content: string }) {
  const cursorContent = useMemo(() => {
    if (cursor) {
      if (cursor === 'dot') return ' :dot:';
      if (cursor === 'underline') return ' :underline:';
      return ' :dot:';
    }
    return '';
  }, [cursor, content]);


  return content + cursorContent;
}