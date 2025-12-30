import { useMemo } from "react";

interface IProps {
  cursor: boolean | 'dot' | 'underline',
  content: string,
  animation: boolean,
}

export default function useCursorContent(props: IProps) {
  const { cursor, content, animation } = props;
  const cursorContent = useMemo(() => {
    if (animation) return '';
    if (cursor) {
      if (cursor === 'dot') return ' :dot:';
      if (cursor === 'underline') return ' :underline:';
      return ' :dot:';
    }
    return '';
  }, [cursor, content]);


  return content + cursorContent;
}