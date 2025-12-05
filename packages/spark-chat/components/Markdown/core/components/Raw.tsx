import { MarkdownProps } from '../../types'
import { useProviderContext } from '@agentscope-ai/chat';

interface RawProps {
  content: MarkdownProps['content'];
  baseFontSize?: number;
  baseLineHeight?: number;
}

export default function Raw(props: RawProps) {
  const prefixCls = useProviderContext().getPrefixCls('markdown');

  return <div
    className={prefixCls}
    style={{ fontSize: props.baseFontSize, lineHeight: props.baseLineHeight }}>
    {props.content}
  </div>
}