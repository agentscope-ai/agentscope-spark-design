import { useProviderContext } from '../Provider';
import useStyle from './style';


export default function () {
  const { getPrefixCls } = useProviderContext();
  const prefixCls = getPrefixCls('operate-card');
  const Style = useStyle();
  return <>
    <Style />
    <div className={prefixCls}>...</div>
  </>
}