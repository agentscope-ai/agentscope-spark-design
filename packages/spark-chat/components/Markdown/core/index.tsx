import XMarkdown from '@ant-design/x-markdown';
import { InnerMarkdownXProps } from '../types';
import Styles from '../styles';
import useCursorContent from './hooks/useCursorContent';
import { useMemo } from 'react';


export default function (props: InnerMarkdownXProps) {
  const { content: originalContent, cursor, animation, ...rest } = props;
  const content = useCursorContent({
    cursor: cursor,
    content: originalContent,
    animation: animation
  });

  const streaming = useMemo(() => {
    if (!animation) return undefined;
    return {
      hasNextChunk: animation && cursor,
      enableAnimation: animation && cursor
    }
  }, [cursor, animation]);


  return <>
    <Styles />
    <XMarkdown
      {...rest}
      content={content}
      streaming={streaming as {
        hasNextChunk: boolean;
        enableAnimation: boolean;
      }}
    />
  </>;
};