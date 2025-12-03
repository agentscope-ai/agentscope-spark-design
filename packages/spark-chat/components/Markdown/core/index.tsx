import XMarkdown from '@ant-design/x-markdown';
import { InnerMarkdownXProps } from '../types';
import Styles from '../styles';
import useCursorContent from './hooks/useCursorContent';


export default function (props: InnerMarkdownXProps) {
  const { content: originalContent, cursor, ...rest } = props;
  const content = useCursorContent({
    cursor: cursor,
    content: originalContent
  });

  return <>
    <Styles />
    <XMarkdown {...rest} content={content} />
  </>;
};