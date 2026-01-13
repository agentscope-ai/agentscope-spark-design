import { useProviderContext } from '../Provider';
import Style from './style';


export default function () {
  const { getPrefixCls } = useProviderContext();
  const prefixCls = getPrefixCls('operate-card');
  return <>
    <Style />
    <div className={prefixCls}>...</div>
  </>
}