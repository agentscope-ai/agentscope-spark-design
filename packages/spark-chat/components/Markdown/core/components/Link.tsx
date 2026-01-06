import { useProviderContext } from "@agentscope-ai/chat";

export default function Link(props) {

  if (props['data-footnote-ref'] === '') return <Sup {...props} />;
  if (props.children === '↩' && props['data-footnote-backref'] === '') return null;
  return <a {...props} />;
}


function Sup(props) {
  const { getPrefixCls } = useProviderContext();
  const prefixCls = getPrefixCls('markdown-footnote');
  console.log(props, prefixCls);


  const { id, href, ...rest } = props;
  return <a {...rest} className={prefixCls} onClick={() => {
    try {
      const url = document.querySelector(`#${id.replace('-ref', '')}`).querySelector('a').getAttribute('href');
      window.open(url, '_blank');
    } catch (error) {
      
    }
  }}/>
}


