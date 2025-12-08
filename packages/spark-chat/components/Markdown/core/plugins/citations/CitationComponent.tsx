import { createGlobalStyle } from 'antd-style';
import { useProviderContext } from '@agentscope-ai/chat';
import { Popover } from 'antd';


const Style = createGlobalStyle`
.${p => p.theme.prefixCls}-markdown-citation {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 16px;
  padding: 0 4px;
  height: 16px;
  margin-inline: 2px;
  font-size: 10px;
  color: ${p => p.theme.colorTextSecondary};
  text-align: center;
  vertical-align: top;
  background: ${p => p.theme.colorFillSecondary};
  border-radius: 4px;
  transition: all 100ms ${p => p.theme.motionEaseOut};
  cursor: pointer;
  line-height: 1;

  &:hover {
    color: ${p => p.theme.colorWhite};
    background: ${p => p.theme.colorPrimary};
  }
}
`;


export interface DefaultRenderProps {
  text: string;
  url: string;
  title: string;
  content: string;
}

export interface CitationComponentProps extends DefaultRenderProps {
  render: (props: DefaultRenderProps) => React.ReactNode;
}

function DefaultRender(props: DefaultRenderProps) {
  const { getPrefixCls } = useProviderContext();
  const prefixCls = getPrefixCls('markdown-citation');
  const text = props['data-text'];
  const url = props['data-url'];
  const title = props['data-title'];
  const content = props['data-content'];

  const isTooltip = content || title;

  let node = <sup className={prefixCls}>{text}</sup>;

  if (isTooltip) {
    node = <Popover title={title} content={url ? <a href={url}
      rel="noreferrer"
      target={'_blank'}>{url}</a> : content}>{node}</Popover>;
  }

  return <>
    <Style />
    {node}
  </>
}




export default function CitationComponent(props: DefaultRenderProps & { citationsData: Record<string, any> }) {
  const Render = props.citationsData[props['data-text']]?.render || DefaultRender;

  return <Render {...props} />
}